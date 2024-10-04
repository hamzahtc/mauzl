import * as React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Field, FieldMeta, FormApi } from "@tanstack/react-form";
import TextTypography from "./TextTypography";
import { Box, Stack } from "@mui/material";
import { ZodValidator } from "@tanstack/zod-form-adapter";

type TextInputProps<T> = TextFieldProps & {
  name: string;
  label: string;
  placeholder: string;
  form: FormApi<T, ZodValidator>;
};

export default function TextInput<T>({
  name,
  label,
  placeholder,
  form,
  ...muiTextFieldProps
}: TextInputProps<T>) {
  return (
    // @ts-expect-error ignore field name
    <Field name={name} form={form}>
      {({ state, handleChange, handleBlur }) => (
        <Stack gap={1}>
          <TextField
            label={label}
            sx={{ minWidth: "300px" }}
            size="small"
            defaultValue={""}
            // @ts-expect-error ignore type
            onChange={(e) => handleChange(e.target.value)}
            onBlur={handleBlur}
            placeholder={placeholder}
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
      <Box pl={2}>
        <TextTypography
          text={fieldMeta.errors.join(",")}
          variant="body2"
          color="#FF4C4C"
        />
      </Box>
    );

  return <></>;
}
