"use client";

import Account from "@/components/account/Account";
import { Stack } from "@mui/material";

export default function AccountPage() {
  return (
    <Stack bgcolor="#eee" minHeight="100vh">
      <Stack px={{ xs: 2, md: 10 }} py={{ xs: 2, md: 10 }}>
        <Account />
      </Stack>
    </Stack>
  );
}
