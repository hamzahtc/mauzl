import React from "react";
import { Checkbox, FormControlLabel, FormGroup, Stack } from "@mui/material";
import txKeys from "@/i18n/translations";
import { status } from "@/common/contants";
import { useTranslation } from "@/i18n/useTranslation";
import TextTypography from "../common/TextTypography";

const StatusFilter = () => {
  const translate = useTranslation();

  return (
    <Stack gap={1}>
      <TextTypography
        text={txKeys.services.shop.status.title}
        variant="h6"
        sx={{
          "&:hover": { cursor: "pointer" },
        }}
      />
      <FormGroup>
        {status.map(({ name }) => (
          <FormControlLabel
            key={name}
            control={<Checkbox />}
            label={translate(
              txKeys.services.shop.status.list[
                name as keyof typeof txKeys.services.shop.status.list
              ].name
            )}
          />
        ))}
      </FormGroup>
    </Stack>
  );
};

export default StatusFilter;
