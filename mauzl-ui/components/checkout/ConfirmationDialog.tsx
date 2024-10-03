"use client";

import React from "react";
import { Stack } from "@mui/material";
import TextTypography from "../common/TextTypography";
import txKeys from "@/i18n/translations";

const ConfirmationDialog = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Stack
        alignItems="start"
        width="1000px"
        p={3}
        gap={2}
        sx={{
          bgcolor: "#f9f9fb",
          borderRadius: 2,
          "&:hover": {
            color: "black",
            cursor: "pointer",
            bgcolor: "#eeeeF2",
          },
        }}
      >
        <Stack justifyContent="center" alignItems="center" width="100%">
          <TextTypography
            text={txKeys.common.appName}
            variant="h6"
            color="primary"
          />
        </Stack>
        <Stack gap={1}>
          <TextTypography variant="body1" text="Thank you Mr/Mrs Hatoch," />
          <TextTypography text="Thank you for choosing us! We are delighted to confirm that your order has been successfully received. A confirmation email has been sent to you for your records." />
          <TextTypography text="Our dedicated team will be in touch shortly to ensure a seamless experience and address any questions you may have." />
          <TextTypography text="Best regards," />
          <TextTypography text="Mauzl" color="info" />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ConfirmationDialog;
