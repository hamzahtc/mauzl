import * as React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Field, FieldMeta, FormApi } from "@tanstack/react-form";
import TextTypography from "./TextTypography";
import { Box, InputAdornment, Stack } from "@mui/material";
import { ZodValidator } from "@tanstack/zod-form-adapter";

type TextInputProps<T> = TextFieldProps & {
  name: string;
  label: string;
  placeholder: string;
  endIcon?: React.ReactNode;
  form: FormApi<T, ZodValidator>;
};

export default function TextInput<T>({
  name,
  label,
  placeholder,
  form,
  endIcon,
  ...muiTextFieldProps
}: TextInputProps<T>) {
  return (
    // @ts-expect-error ignore field name
    <Field name={name} form={form}>
      {({ state, handleChange, handleBlur }) => (
        <Stack gap={1}>
          <TextTypography
            text={`${label}${muiTextFieldProps.required ? " *" : ""}`}
            variant="h6"
            sx={{
              color: "black",
              "&:hover": { color: "black", cursor: "pointer" },
            }}
          />
          <TextField
            sx={{
              minWidth: "270px",
              "& .MuiOutlinedInput-root": {
                borderRadius: 0,
                "& input": {
                  fontSize: "14px", // 👈 Adjust to your desired size
                },
              },
              "& .MuiInputLabel-root": {
                fontSize: "13px", // 👈 Optional: match label size too
              },
            }}
            size="small"
            defaultValue={""}
            // @ts-expect-error ignore type
            onChange={(e) => handleChange(e.target.value)}
            onBlur={handleBlur}
            placeholder={placeholder}
            slotProps={{
              input: {
                endAdornment: endIcon ? (
                  <InputAdornment position="end">{endIcon}</InputAdornment>
                ) : undefined,
              },
            }}
            {...muiTextFieldProps}
          />
          <FieldInfo fieldMeta={state.meta} />
        </Stack>
      )}
    </Field>
  );
}

function FieldInfo({ fieldMeta }: { fieldMeta: FieldMeta | undefined }) {
  if (!fieldMeta) return null;

  if (fieldMeta.isTouched && fieldMeta.errors.length)
    return (
      <Box>
        <TextTypography
          text={fieldMeta.errors.join(",")}
          variant="body2"
          color="#FF4C4C"
          fontSize="12px"
        />
      </Box>
    );

  return <></>;
}
