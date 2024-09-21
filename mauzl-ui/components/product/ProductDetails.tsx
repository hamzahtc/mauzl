import * as React from "react";
import { Stack } from "@mui/material";
import ProductGallery from "./ProductGallery";
import ProductShopDetails from "./ProductShopDetails";
import ProductTabs from "./ProductTabs";

const ProductDetails = () => {
  return (
    <Stack gap={4}>
      <Stack direction="row" gap={6}>
        <Stack flex={1}>
          <ProductGallery />
        </Stack>
        <Stack flex={1}>
          <ProductShopDetails />
        </Stack>
      </Stack>
      <Stack>
        <ProductTabs />
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
