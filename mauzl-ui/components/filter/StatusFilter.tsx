import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import TranslateMessage from "@/i18n/TranslateMessage";
import txKeys from "@/i18n/translations";
import { status } from "@/common/contants";
import { useTranslation } from "@/i18n/useTranslation";

const StatusFilter = () => {
  const translate = useTranslation();

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
        <TranslateMessage txKey={txKeys.services.shop.status.title} />
      </Typography>
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
