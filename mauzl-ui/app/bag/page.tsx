"use client";

import ShoppingBag from "@/components/bag/ShoppingBag";
import { Stack } from "@mui/material";

export default function BagPage() {
  return (
    <Stack bgcolor="#eee" minHeight="100vh">
      <Stack
        px={{ xs: 4, sm: 6, md: 10 }}
        py={10}
        alignItems="center"
        width="100%"
        bgcolor="#eee"
      >
        <ShoppingBag />
      </Stack>
    </Stack>
  );
}
