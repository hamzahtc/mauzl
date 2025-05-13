import * as React from "react";
import { Stack } from "@mui/material";
import ProductGallery from "./ProductGallery";
import ProductShopDetails from "./ProductShopDetails";
import ProductTabs from "./ProductTabs";
import { ProductDto } from "@/models";

interface ProductDetailsProps {
  product?: ProductDto;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <Stack gap={4}>
      <Stack direction={{ xs: "column", md: "row" }} gap={6}>
        <Stack flex={2} alignItems="center">
          <ProductGallery images={product?.images} />
        </Stack>
        <Stack flex={1} px={{ xs: 5 }}>
          <ProductShopDetails product={product} />
        </Stack>
      </Stack>
      <Stack>
        <ProductTabs product={product} />
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
