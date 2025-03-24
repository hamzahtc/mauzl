import * as React from "react";
import BagProducts from "../bag/BagProducts";
import { Stack } from "@mui/material";
import { OrderItem } from "@/utils/db";

interface CheckoutSideBarProps {
  orderItems: OrderItem[];
}

export default function CheckoutSideBar({ orderItems }: CheckoutSideBarProps) {
  return (
    <Stack
      sx={{
        maxHeight: "470px",
        overflowY: "auto",
      }}
    >
      <BagProducts orderItems={orderItems} />
    </Stack>
  );
}
