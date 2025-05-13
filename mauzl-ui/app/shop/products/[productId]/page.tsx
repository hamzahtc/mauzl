"use client";

import TextTypography from "@/components/common/TextTypography";
import ProductDetails from "@/components/product/ProductDetails";
import { useProductsControllerFindOne } from "@/generated/hooks";
import { Stack } from "@mui/material";
import { useParams } from "next/navigation";

const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data: product, isLoading } = useProductsControllerFindOne(productId);
  if (isLoading) return null;

  return (
    <Stack>
      <Stack
        bgcolor="#F8F8F8"
        justifyContent="center"
        p={3}
        mt={4}
        alignItems="center"
        zIndex={2}
      >
        <TextTypography
          text={`${product?.category.name} - ${product?.name}`}
          variant="h5"
          textTransform="uppercase"
          fontWeight="bold"
          component="div"
          color="black"
        />
      </Stack>
      <Stack px={{ md: 30 }} py={10}>
        <Stack direction="row">
          <Stack
            direction="row"
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <ProductDetails product={product} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Product;
