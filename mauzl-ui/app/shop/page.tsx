"use client";

import TextTypography from "@/components/common/TextTypography";
import Filter from "@/components/filter/Filter";
import Products from "@/components/product/Products";
import txKeys from "@/i18n/translations";
import { Box, Stack } from "@mui/material";

export default function Shop() {
  return (
    <Stack>
      <Stack
        bgcolor="#F8F8F8"
        justifyContent="center"
        p={6}
        mt={4}
        alignItems="center"
        zIndex={2}
      >
        <TextTypography
          text={txKeys.services.shop.title}
          variant="h5"
          textTransform="uppercase"
          fontWeight="bold"
        />
      </Stack>

      <Stack px={10} py={10} direction="row" flexWrap="wrap">
        <Box flex={1}>
          <Filter />
        </Box>
        <Box flex={3}>
          <Products />
        </Box>
      </Stack>
    </Stack>
  );
}
