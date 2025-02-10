"use client";

import Filter from "@/components/filter/Filter";
import Products from "@/components/product/Products";
import { Box, Stack } from "@mui/material";
import { Suspense } from "react";

export default function Shop() {
  return (
    <Suspense fallback={<div>Loading shop content...</div>}>
      <Stack
        p={{ xs: 4, md: 10 }}
        gap={4}
        direction={{ xs: "column", md: "row" }}
        minHeight="100vh"
      >
        <Box flex={1}>
          <Filter />
        </Box>
        <Box flex={3}>
          <Products />
        </Box>
      </Stack>
    </Suspense>
  );
}
