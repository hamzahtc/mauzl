"use client";

import Wishlist from "@/components/wishlist/Wishlist";
import { Stack } from "@mui/material";

export default function WishlistPage() {
  return (
    <Stack bgcolor="#eee">
      <Stack
        px={{ xs: 2, md: 10 }}
        py={{ xs: 2, md: 10 }}
        sx={{
          bgcolor: "white",
        }}
      >
        <Wishlist />
      </Stack>
    </Stack>
  );
}
