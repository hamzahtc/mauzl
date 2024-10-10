"use client";

import React from "react";
import { LinearProgress, Stack } from "@mui/material";
import CheckoutForm from "./CheckoutForm";
import CheckoutSideBar from "./CheckoutSideBar";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/utils/db";
import { useOrdersControllerCreate } from "@/generated/hooks";
import ConfirmationDialog from "./ConfirmationDialog";
import TextTypography from "../common/TextTypography";

const Checkout = () => {
  const orderItems = useLiveQuery(() => db.products.toArray());
  const {
    mutateAsync: createOrder,
    isPending,
    isSuccess,
  } = useOrdersControllerCreate(); // Use mutation

  if (!orderItems || orderItems?.length === 0) return <></>;

  const products = orderItems?.map((order) => order.product);

  if (isPending)
    return (
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <LinearProgress color="inherit" />
      </Stack>
    );
  if (isSuccess) return <ConfirmationDialog />;

  return (
    <Stack direction={{ xs: "column", md: "row" }} gap={1} flexWrap="wrap">
      <Stack flex={3} gap={1}>
        <Stack bgcolor="#f9f9fb" p={2}>
          <TextTypography text="Client informations" fontWeight="bold" />
        </Stack>
        <CheckoutForm orderItems={orderItems} createOrder={createOrder} />
      </Stack>
      <Stack flex={2}>
        <CheckoutSideBar products={products} />
      </Stack>
    </Stack>
  );
};

export default Checkout;
