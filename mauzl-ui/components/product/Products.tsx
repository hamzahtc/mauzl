import * as React from "react";
import { Box, Pagination, Stack } from "@mui/material";
import Product from "./Product";
import { useProductsControllerFindAll } from "@/generated/hooks";

const Products = () => {
  const products = useProductsControllerFindAll();
  if (products.isLoading) return <></>;
  return (
    <Stack alignItems="center" gap={4}>
      <Stack
        direction="row"
        gap={4}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        px={2}
      >
        {products.data?.data.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Stack>
      <Box>
        <Pagination count={10} showFirstButton showLastButton />
      </Box>
    </Stack>
  );
};

export default Products;
