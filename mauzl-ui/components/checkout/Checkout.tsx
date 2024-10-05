"use client";

import React from "react";
import { LinearProgress, Stack } from "@mui/material";
import CheckoutForm from "./CheckoutForm";
import CheckoutSideBar from "./CheckoutSideBar";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/utils/db";
import { useOrdersControllerCreate } from "@/generated/hooks";
import ConfirmationDialog from "./ConfirmationDialog";

const Checkout = () => {
  const products = useLiveQuery(() => db.products.toArray());
  const {
    mutateAsync: createOrder,
    isPending,
    isSuccess,
  } = useOrdersControllerCreate(); // Use mutation

  if (!products || products?.length === 0) return <></>;
  if (isPending)
    return (
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <LinearProgress color="inherit" />
      </Stack>
    );
  if (isSuccess) return <ConfirmationDialog />;

  return (
    <Stack direction={{ xs: "column", md: "row" }} gap={4} flexWrap="wrap">
      <Stack flex={3}>
        <CheckoutForm products={products} createOrder={createOrder} />
      </Stack>
      <Stack flex={2}>
        <CheckoutSideBar products={products} />
      </Stack>
    </Stack>
  );
};

export default Checkout;
