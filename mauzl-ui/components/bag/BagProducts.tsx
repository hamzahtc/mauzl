import { ProductDto } from "@/models";
import { Box, Divider, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import TextTypography from "../common/TextTypography";
import SecondaryButton from "../common/SecondaryButton";
import PrimaryButton from "../common/PrimaryButton";
import { db } from "@/utils/db";

interface BagProductsProps {
  products?: ProductDto[];
}

export default function BagProducts({ products }: BagProductsProps) {
  return (
    <Stack gap={4} alignItems="center">
      {products?.map((product, index) => (
        <Box key={product.id} width="100%">
          <Box
            p={2}
            key={product.id}
            minWidth="330px"
            mb={4}
            sx={{
              bgcolor: "#f9f9fb",
              borderRadius: 2,
              "&:hover": {
                color: "black",
                cursor: "pointer",
                bgcolor: "#eeeeF2",
              },
            }}
          >
            <Link href={`/shop/products/${product.id}`}>
              <Stack direction="row" gap={2}>
                <Image
                  alt=""
                  src={product.images[0]}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "120px",
                    height: "180px",
                    aspectRatio: "1/1",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />
                <Stack justifyContent="space-between" width="100%">
                  <Stack
                    justifyContent="space-between"
                    direction="row"
                    flexWrap="wrap"
                  >
                    <Stack>
                      <TextTypography
                        text={product.name}
                        fontWeight="bold"
                        variant="h6"
                      />
                      <TextTypography text={product.category.name} />
                    </Stack>
                    <TextTypography text={`${product.price} MAD`} />
                  </Stack>
                  <Stack
                    direction="row"
                    flexWrap="wrap-reverse"
                    gap={2}
                    zIndex={2}
                  >
                    <SecondaryButton
                      text="Remove"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        db.products.delete(product.id);
                      }}
                    />
                    <PrimaryButton
                      text="Move to favorites"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Link>
          </Box>

          {index < products.length - 1 && <Divider />}
        </Box>
      ))}
    </Stack>
  );
}
