"use client";

import Filter from "@/components/filter/Filter";
import Products from "@/components/product/Products";
import TranslateMessage from "@/i18n/TranslateMessage";
import txKeys from "@/i18n/translations";
import { Box, Stack, Typography } from "@mui/material";

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
        <Box>
          <Typography
            variant="h5"
            textTransform="uppercase"
            fontWeight="bold"
            component="div"
            color="black"
          >
            <TranslateMessage txKey={txKeys.services.shop.title} />
          </Typography>
        </Box>
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
