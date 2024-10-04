import * as React from "react";
import { Stack } from "@mui/material";
import Image from "next/image";
import { theme } from "@/styles/stylesheet";
import { ProductDto } from "@/models";
import Link from "next/link";
import PrimaryButton from "../common/PrimaryButton";
import TextTypography from "../common/TextTypography";

interface ProductProps {
  product: ProductDto;
}

const Product = ({ product }: ProductProps) => {
  return (
    <Link href={`/shop/products/${product.id}`}>
      <Stack gap={2}>
        <Stack alignItems="center" sx={{ position: "relative" }}>
          <Image
            alt="models"
            src={product.images[0]}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "300px",
              height: "400px",
              aspectRatio: "1/1",
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
          <Stack
            gap={1}
            sx={{
              position: "absolute",
              top: "15px",
              left: "15px",
            }}
          >
            <PrimaryButton
              text="-10%"
              size="small"
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
              }}
            />
            <PrimaryButton
              text="New"
              size="small"
              variant="contained"
              sx={{
                backgroundColor: theme.palette.info.main,
              }}
            />
          </Stack>
        </Stack>
        <Stack alignItems="center">
          <TextTypography text={product.name} fontWeight="bold" />
          <TextTypography text={`$${product.price}`} fontWeight="bold" />
        </Stack>
      </Stack>
    </Link>
  );
};

export default Product;
