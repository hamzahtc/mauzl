import React from "react";
import { Slider, Stack } from "@mui/material";
import txKeys from "@/i18n/translations";
import PrimaryButton from "../common/PrimaryButton";
import TextTypography from "../common/TextTypography";

const PriceFilter = () => {
  const [value, setValue] = React.useState<number[]>([100, 299]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Stack gap={1}>
      <TextTypography
        text={txKeys.services.shop.price.title}
        variant="h6"
        sx={{
          "&:hover": { cursor: "pointer" },
        }}
      />
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
      />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <TextTypography text="Price: 10 MAD — 160 MAD" fontSize="15px" />
        <PrimaryButton text={txKeys.common.filter.label} size="small" />
      </Stack>
    </Stack>
  );
};

export default PriceFilter;
