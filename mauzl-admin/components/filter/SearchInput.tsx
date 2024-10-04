import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "@/i18n/useTranslation";
import txKeys from "@/i18n/translations";

const SearchInput = () => {
  const translate = useTranslation();

  return (
    <TextField
      fullWidth
      placeholder={translate(txKeys.common.search.label)}
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
