import * as React from "react";
import { Stack } from "@mui/material";
import ProductGallery from "./ProductGallery";
import ProductShopDetails from "./ProductShopDetails";
import ProductTabs from "./ProductTabs";
import { useParams } from "next/navigation";
import { useProductsControllerFindOne } from "@/generated/hooks";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data: product, isLoading } = useProductsControllerFindOne(productId);
  if (isLoading) return null;

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
        <ProductTabs />
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
