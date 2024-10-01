import { Box, Pagination, Stack } from "@mui/material";
import Product from "./Product";
import { useProductsControllerFindAll } from "@/generated/hooks";
import { useState } from "react";

const Products = () => {
  const [page, setPage] = useState(1);
  const limit = 3;

  const products = useProductsControllerFindAll({
    page,
    limit,
  });

  if (products.isLoading) return <></>;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    pageNumber: number
  ) => {
    setPage(pageNumber);
  };
  const totalProducts = products.data?.data?.total;

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
        {products.data?.data.products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Stack>
      <Box>
        <Pagination
          count={Math.ceil((totalProducts || 0) / limit)}
          page={page}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
        />
      </Box>
    </Stack>
  );
};

export default Products;
