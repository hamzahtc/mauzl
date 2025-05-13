"use client";

import Contact from "@/components/contact/Contact";
import { Stack } from "@mui/material";

export default function ContactPage() {
  return (
    <Stack bgcolor="#eee" minHeight="100vh">
      <Stack px={{ xs: 4, sm: 6, md: 10 }} py={10}>
        <Contact />
      </Stack>
    </Stack>
  );
}
