"use client";

import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import i18n, { changeLanguage } from "@/i18n/i18n";
import { Language } from "@/i18n/types";
import { useState } from "react";
import { theme } from "@/styles/stylesheet";
import TextTypography from "../common/TextTypography";

const LanguageSelect = () => {
  const [language, setLanguage] = useState<Language>(i18n.language as Language);

  const handleChange = (event: SelectChangeEvent<Language>) => {
    const {
      target: { value },
    } = event;
    setLanguage(value as Language);

    changeLanguage(value as Language);
  };

  return (
    <FormControl size="small">
      <Select
        value={language}
        onChange={handleChange}
        inputProps={{ "aria-label": "Without label" }}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
        }}
        sx={{
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            border: 0,
          },
          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              border: 0,
            },
          color: theme.palette.secondary.main,
        }}
      >
        <MenuItem value={Language.EN}>
          <TextTypography text={Language.EN} textTransform="uppercase" />
        </MenuItem>
        <MenuItem value={Language.FR}>
          <TextTypography text={Language.FR} textTransform="uppercase" />
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
