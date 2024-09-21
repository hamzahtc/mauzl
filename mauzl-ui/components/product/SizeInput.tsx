import { Stack } from "@mui/material";
import React from "react";
import Button from "../common/Button";
import txKeys from "@/i18n/translations";
import { sizes } from "@/common/contants";

const SizeInput = () => {
  return (
    <Stack direction="row" gap={2}>
      {sizes.map((size) => (
        <Button
          key={size}
          text={txKeys.services.shop.sizes[size]}
          size="large"
          textColor="#7E7E7E"
          sx={{
            backgroundColor: "#F5F5F5",
            boxShadow: "none",
            fontSize: "12px",
          }}
        />
      ))}
    </Stack>
  );
};

export default SizeInput;
