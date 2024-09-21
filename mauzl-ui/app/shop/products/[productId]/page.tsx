"use client";

import ProductDetails from "@/components/product/ProductDetails";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "next/navigation";

const Product = () => {
  const params = useParams<{ productId: string }>();

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
        <Box>
          <Typography
            variant="h5"
            textTransform="uppercase"
            fontWeight="bold"
            component="div"
            color="black"
          >
            Hoodie - Pullover Hoodie Sweatshirt - {params.productId}
          </Typography>
        </Box>
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
