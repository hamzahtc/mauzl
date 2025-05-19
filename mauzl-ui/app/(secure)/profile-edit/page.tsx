"use client";

import ProfileEdit from "@/components/profile/ProfileEdit";
import { Box, Stack } from "@mui/material";
import Image from "next/image";

export default function ProfileEditPage() {
  return (
    <Stack bgcolor="#eee" px={20} py={10} alignItems="center">
      <Stack
        direction={{ xs: "column", md: "row" }}
        px={{ xs: 0, md: 10 }}
        py={10}
        flex={1}
        justifyContent="center"
        alignItems="stretch"
        flexWrap="wrap"
        height={500}
        width={{ xs: 400, md: 1000, lg: 1200 }}
      >
        <ProfileEdit />

        <Box sx={{ flex: 1, position: "relative" }}>
          <Image
            alt="bags"
            src="/images/pharmacie.jpg"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}
