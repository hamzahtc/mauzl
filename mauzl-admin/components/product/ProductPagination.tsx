import * as React from "react";
import { Pagination } from "@mui/material";

const ProductPagination = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Pagination
      count={10}
      showFirstButton
      showLastButton
      page={page}
      onChange={handleChange}
    />
  );
};

export default ProductPagination;
