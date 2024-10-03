"use client";

import React from "react";
import { Stack } from "@mui/material";
import CheckoutForm from "./CheckoutForm";
import CheckoutSideBar from "./CheckoutSideBar";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/utils/db";

const Checkout = () => {
  const products = useLiveQuery(() => db.products.toArray());

  if (!products || products?.length === 0) return <></>;

  return (
    <Stack direction="row" gap={4} flexWrap="wrap">
      <Stack flex={2}>
        <CheckoutForm products={products} />
      </Stack>
      <Stack flex={1}>
        <CheckoutSideBar products={products} />
      </Stack>
    </Stack>
  );
};

export default Checkout;
