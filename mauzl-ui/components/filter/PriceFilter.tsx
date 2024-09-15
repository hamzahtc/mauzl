import React from "react";
import { Slider, Stack, Typography } from "@mui/material";
import TranslateMessage from "@/i18n/TranslateMessage";
import txKeys from "@/i18n/translations";
import Button from "../common/Button";

const PriceFilter = () => {
  const [value, setValue] = React.useState<number[]>([100, 299]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Stack gap={1}>
      <Typography
        component="div"
        variant="h6"
        sx={{
          color: "black",
          "&:hover": { color: "black", cursor: "pointer" },
        }}
      >
        <TranslateMessage txKey={txKeys.services.shop.price.title} />
      </Typography>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
      />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          component="div"
          fontSize="15px"
          sx={{
            color: "black",
          }}
        >
          Price: $10 — $160
        </Typography>
        <Button text={txKeys.common.filter.label} size="small" />
      </Stack>
    </Stack>
  );
};

export default PriceFilter;
