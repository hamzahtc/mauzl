import * as React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Field, FormApi } from "@tanstack/react-form";
import TextTypography from "./TextTypography";
import { InputAdornment, Stack } from "@mui/material";
import { ZodValidator } from "@tanstack/zod-form-adapter";

type TextInputProps<T> = TextFieldProps & {
  name: string;
  label?: string;
  placeholder?: string;
  endIcon?: React.ReactNode;
  form: FormApi<T, ZodValidator>;
  inputType?: "text" | "number";
};

export default function TextInput<T>({
  name,
  label,
  placeholder,
  form,
  endIcon,
  inputType = "text",
  ...muiTextFieldProps
}: TextInputProps<T>) {
  const handleValueChange = (value: string) => {
    if (inputType === "number") {
      // Only allow numbers and empty string
      const numValue = value === "" ? "" : Number(value);
      return isNaN(numValue as number) ? undefined : numValue;
    }
    return value;
  };

  return (
    <Field name={name as never} form={form}>
      {({ state, handleChange, handleBlur }) => (
        <Stack gap={1}>
          <TextTypography
            text={
              label ? `${label}${muiTextFieldProps.required ? " *" : ""}` : ""
            }
            variant="h6"
            sx={{
              color: "black",
              "&:hover": { color: "black", cursor: "pointer" },
            }}
          />
          <TextField
            value={state.value ?? ""}
            type={inputType}
            sx={{
              minWidth: { xs: "150px", md: "270px" },
              "& .MuiOutlinedInput-root": {
                borderRadius: 0,
                "& input": {
                  fontSize: "14px",
                },
                "& fieldset": {
                  borderColor:
                    state.meta.isTouched && state.meta.errors.length
                      ? "#FF4C4C"
                      : undefined,
                },
              },
              "& .MuiInputLabel-root": {
                fontSize: "13px",
              },
              ...muiTextFieldProps.sx,
            }}
            size="small"
            onChange={(e) => {
              const newValue = handleValueChange(e.target.value);
              if (newValue !== undefined) {
                // @ts-expect-error ignore field name
                handleChange(newValue);
              }
            }}
            onBlur={handleBlur}
            placeholder={placeholder}
            inputProps={{
              inputMode: inputType === "number" ? "numeric" : "text",
              pattern: inputType === "number" ? "[0-9]*" : undefined,
            }}
            slotProps={{
              input: {
                endAdornment: endIcon ? (
                  <InputAdornment position="end">{endIcon}</InputAdornment>
                ) : undefined,
              },
            }}
            {...muiTextFieldProps}
          />
        </Stack>
      )}
    </Field>
  );
}
