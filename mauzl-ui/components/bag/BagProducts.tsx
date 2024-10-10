import { ProductDto } from "@/models";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import TextTypography from "../common/TextTypography";
import SecondaryButton from "../common/SecondaryButton";
import PrimaryButton from "../common/PrimaryButton";
import { db } from "@/utils/db";
import { FaRegHeart } from "react-icons/fa6";
import { HelveticaNow, theme } from "@/styles/stylesheet";

interface BagProductsProps {
  products?: ProductDto[];
}

export default function BagProducts({ products }: BagProductsProps) {
  return (
    <Stack gap={1} alignItems="center">
      {products?.map((product) => (
        <Box key={product.id} width="100%" bgcolor="#f9f9fb" p={2}>
          <Box key={product.id} minWidth="330px">
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
                    <TextTypography
                      text={`${product.price} MAD`}
                      fontFamily={HelveticaNow.style.fontFamily}
                    />
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
                      color="info"
                      startIcon={
                        <FaRegHeart color={theme.palette.secondary.main} />
                      }
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
        </Box>
      ))}
    </Stack>
  );
}
