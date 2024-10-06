import * as React from "react";
import BagProducts from "../bag/BagProducts";
import { Stack } from "@mui/material";
import { ProductDto } from "@/models";

interface CheckoutSideBarProps {
  products: ProductDto[];
}

export default function CheckoutSideBar({ products }: CheckoutSideBarProps) {
  return (
    <Stack
      sx={{
        maxHeight: "470px",
        overflowY: "auto",
      }}
    >
      <BagProducts products={products} />
    </Stack>
  );
}
