import * as React from "react";
import { Stack } from "@mui/material";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      p={2}
      sx={{
        borderRadius: 2,
        bgcolor: "#fff",
      }}
    >
      <Stack flex={1}>
        <ContactInfo />
      </Stack>
      <Stack flex={1}>
        <ContactForm />
      </Stack>
    </Stack>
  );
};

export default Contact;
