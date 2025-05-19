import "react-international-phone/style.css";

import {
  BaseTextFieldProps,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import {
  CountryIso2,
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";
import TextTypography from "../common/TextTypography";

export interface MUIPhoneProps extends BaseTextFieldProps {
  value: string;
  onChange: (phone: string) => void;
  label?: string;
}

export const PhoneNumberInput: React.FC<MUIPhoneProps> = ({
  value,
  onChange,
  label,
  ...restProps
}) => {
  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: "ma",
      value,
      countries: defaultCountries,
      onChange: (data) => {
        onChange(data.phone);
      },
    });

  return (
    <>
      <TextTypography
        text={label ? `${label}${restProps.required ? " *" : ""}` : ""}
        variant="h6"
        sx={{
          color: "black",
          "&:hover": { color: "black", cursor: "pointer" },
        }}
      />

      <TextField
        color="primary"
        value={inputValue}
        onChange={handlePhoneValueChange}
        type="tel"
        size="small"
        inputRef={inputRef}
        sx={{
          minWidth: "270px",
          "& .MuiOutlinedInput-root": {
            borderRadius: 0,
            "& input": {
              fontSize: "14px",
              paddingLeft: "8px",
            },
          },
          "& .MuiInputLabel-root": {
            fontSize: "13px",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              style={{ marginRight: "2px", marginLeft: "-8px" }}
            >
              <Select
                MenuProps={{
                  style: {
                    height: "300px",
                    width: "360px",
                    top: "10px",
                    left: "-34px",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                }}
                sx={{
                  width: "max-content",
                  // Remove default outline (display only on focus)
                  fieldset: {
                    display: "none",
                  },
                  '&.Mui-focused:has(div[aria-expanded="false"])': {
                    fieldset: {
                      display: "block",
                    },
                  },
                  // Update default spacing
                  ".MuiSelect-select": {
                    padding: "8px",
                    paddingRight: "24px !important",
                  },
                  svg: {
                    right: 0,
                  },
                }}
                value={country.iso2}
                onChange={(e) => setCountry(e.target.value as CountryIso2)}
                renderValue={(value) => (
                  <FlagImage iso2={value} style={{ display: "flex" }} />
                )}
              >
                {defaultCountries.map((c) => {
                  const country = parseCountry(c);
                  return (
                    <MenuItem key={country.iso2} value={country.iso2}>
                      <FlagImage
                        iso2={country.iso2}
                        style={{ marginRight: "8px" }}
                      />
                      <Typography marginRight="8px">{country.name}</Typography>
                      <Typography color="gray">+{country.dialCode}</Typography>
                    </MenuItem>
                  );
                })}
              </Select>
            </InputAdornment>
          ),
        }}
        {...restProps}
      />
    </>
  );
};
