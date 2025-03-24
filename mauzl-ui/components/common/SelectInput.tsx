import { Stack } from "@mui/material";
import { Field, FormApi } from "@tanstack/react-form";
import { ZodValidator } from "@tanstack/zod-form-adapter";
import React, { useState } from "react";

import Select from "react-select";
import TextTypography from "./TextTypography";

export type Option = {
  value: string;
  label: string;
};

interface SelectInputProps<T> {
  name: string;
  label: string;
  options: Option[];
  form: FormApi<T, ZodValidator>;
  required?: boolean;
}

export default function SelectInput<T>({
  name,
  options,
  form,
  label,
  required,
}: SelectInputProps<T>) {
  const [isSearchable] = useState(true);
  const [isLoading] = useState(false);

  return (
    // @ts-expect-error ignore name
    <Field name={name} form={form}>
      {({ handleChange }) => (
        <Stack gap={1}>
          <TextTypography
            text={`${label}${required ? " *" : ""}`}
            variant="h6"
            sx={{
              color: "black",
              "&:hover": { color: "black", cursor: "pointer" },
            }}
          />
          <Select
            defaultValue={options[0]}
            isLoading={isLoading}
            isSearchable={isSearchable}
            // @ts-expect-error ignore type
            onChange={(option) => handleChange(option!.value)}
            options={options}
            styles={{
              container: (provided) => ({
                ...provided,
                zIndex: 2,
                minWidth: "270px",
              }),
              control: (provided, state) => ({
                ...provided,
                borderRadius: 0,
                backgroundColor: "#f9f9fb",
                borderColor: state.isFocused ? "#B479D9" : provided.borderColor,
                boxShadow: state.isFocused
                  ? "0 0 0 1px #B479D9"
                  : provided.boxShadow,
                "&:hover": {
                  borderColor: "#B479D9",
                },
              }),
              dropdownIndicator: (provided, state) => ({
                ...provided,
                color: state.isFocused ? "#B479D9" : provided.color,
                "&:hover": {
                  color: "#B479D9",
                },
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isSelected
                  ? "#B479D9"
                  : state.isFocused
                    ? "#e8d6f5"
                    : "white",
                color: state.isSelected ? "white" : "black",
                "&:hover": {
                  backgroundColor: "#e8d6f5",
                },
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "#333", // optional, default text color
              }),
            }}
          />
        </Stack>
      )}
    </Field>
  );
}
