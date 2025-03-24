"use client";

import SignupForm from "@/components/signup/SignupForm";
import { Stack } from "@mui/material";

const Signup = () => {
  return (
    <Stack bgcolor="#eee" px={20} alignItems="center">
      <Stack px={{ xs: 2, md: 10 }} py={10}>
        <SignupForm />
      </Stack>
    </Stack>
  );
};

export default Signup;
