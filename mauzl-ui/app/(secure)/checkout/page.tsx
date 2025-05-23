"use client";

import Checkout from "@/components/checkout/Checkout";
import { Stack } from "@mui/material";

export default function CheckoutPage() {
  return (
    <Stack bgcolor="#eee" minHeight="100vh">
      <Stack px={{ xs: 2, md: 10 }} py={{ xs: 2, md: 10 }}>
        <Checkout />
      </Stack>
    </Stack>
  );
}
