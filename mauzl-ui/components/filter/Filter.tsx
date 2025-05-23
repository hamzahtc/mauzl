import * as React from "react";
import SearchInput from "./SearchInput";
import { Stack } from "@mui/material";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import StatusFilter from "./StatusFilter";
import SortFilter from "./SortFilter";

const Filter = () => {
  return (
    <Stack gap={3} p={1} minWidth="250px">
      <SearchInput />
      <CategoryFilter />
      <PriceFilter />
      <SortFilter />
      <StatusFilter />
    </Stack>
  );
};

export default Filter;
