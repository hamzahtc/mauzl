import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Button from "../common/Button";
import { theme } from "@/styles/stylesheet";
import { ProductDto } from "@/models";
import Link from "next/link";

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
            src="/images/woman.png"
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
            <Button
              text="-10%"
              size="small"
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
              }}
            />
            <Button
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
          <Box>
            <Typography fontWeight="bold" component="div" color="black">
              {product.name}
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold" component="div" color="black">
              ${product.price}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Link>
  );
};

export default Product;
