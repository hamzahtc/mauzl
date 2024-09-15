import * as React from "react";
import { Box, Pagination, Stack } from "@mui/material";
import Product from "./Product";

const Products = () => {
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
        {[...Array(6).keys()].map((key) => (
          <Product key={key} />
        ))}
      </Stack>
      <Box>
        <Pagination count={10} showFirstButton showLastButton />
      </Box>
    </Stack>
  );
};

export default Products;
