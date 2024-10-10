"use client";

import ShoppingBag from "@/components/bag/ShoppingBag";
import { Stack } from "@mui/material";

export default function BagPage() {
  return (
    <Stack bgcolor="#eee" px={26} minHeight="100vh">
      <Stack
        p={{ xs: 2, md: 5 }}
        alignItems="center"
        width="100%"
        bgcolor="#eee"
      >
        <ShoppingBag />
      </Stack>
    </Stack>
  );
}
