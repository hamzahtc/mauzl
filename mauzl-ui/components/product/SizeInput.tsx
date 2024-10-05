import { Stack } from "@mui/material";
import React from "react";
import txKeys from "@/i18n/translations";
import { sizes } from "@/common/contants";
import SecondaryButton from "../common/SecondaryButton";

const SizeInput = () => {
  return (
    <Stack direction="row" gap={2} flexWrap="wrap">
      {sizes.map((size) => (
        <SecondaryButton
          key={size}
          text={txKeys.services.shop.sizes[size]}
          size="small"
        />
      ))}
    </Stack>
  );
};

export default SizeInput;
