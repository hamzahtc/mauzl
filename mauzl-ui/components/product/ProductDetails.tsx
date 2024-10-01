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
      <Stack direction="row" gap={6}>
        <Stack flex={1}>
          <ProductGallery images={product?.data.images} />
        </Stack>
        <Stack flex={1}>
          <ProductShopDetails product={product?.data} />
        </Stack>
      </Stack>
      <Stack>
        <ProductTabs />
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
