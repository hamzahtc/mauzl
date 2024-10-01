"use client";

import TextTypography from "@/components/common/TextTypography";
import ProductDetails from "@/components/product/ProductDetails";
import { Stack } from "@mui/material";

const Product = () => {
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
          text="Hoodie - Pullover Hoodie Sweatshirt"
          variant="h5"
          textTransform="uppercase"
          fontWeight="bold"
          component="div"
          color="black"
        />
      </Stack>
      <Stack px={30} py={10}>
        <Stack direction="row">
          <Stack direction="row">
            <ProductDetails />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Product;
