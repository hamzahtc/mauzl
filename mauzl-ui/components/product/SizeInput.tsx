import { Stack } from "@mui/material";
import React from "react";
import txKeys from "@/i18n/translations";
import { sizes, SizeType } from "@/common/contants";
import SecondaryButton from "../common/SecondaryButton";
import { theme } from "@/styles/stylesheet";

interface SizeInputProps {
  size: SizeType;
  handleSizeInput: (size: SizeType) => void;
}

const SizeInput = ({ size, handleSizeInput }: SizeInputProps) => {
  return (
    <Stack direction="row" gap={2} flexWrap="wrap">
      {sizes.map((sizeValue) => (
        <SecondaryButton
          key={sizeValue}
          text={txKeys.services.shop.sizes[sizeValue]}
          size="small"
          onClick={() => handleSizeInput(sizeValue)}
          sx={{
            bgcolor: size === sizeValue ? theme.palette.info.main : "#f9f9fb",
          }}
        />
      ))}
    </Stack>
  );
};

export default SizeInput;

{
  /* <TextTypography
        text={selectedSize ? txKeys.services.shop.sizes[selectedSize] : "m"}
        fontWeight="bold"
      /> */
}
