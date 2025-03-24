"use client";

import SigninForm from "@/components/signin/SigninForm";
import { Stack } from "@mui/material";

const Signin = () => {
  return (
    <Stack bgcolor="#eee" px={20} alignItems="center">
      <Stack px={{ xs: 2, md: 10 }} py={10}>
        <SigninForm />
      </Stack>
    </Stack>
  );
};

export default Signin;
