"use client";

import Checkout from "@/components/checkout/Checkout";
import TextTypography from "@/components/common/TextTypography";
import txKeys from "@/i18n/translations";
import { Stack } from "@mui/material";

export default function CheckoutPage() {
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
          text={txKeys.services.checkout.title}
          variant="h5"
          textTransform="uppercase"
          fontWeight="bold"
        />
      </Stack>
      <Stack px={{ xs: 2, md: 10 }} py={10}>
        <Checkout />
      </Stack>
    </Stack>
  );
}
