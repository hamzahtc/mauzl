import * as React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { DeepKeys, Field, useForm } from "@tanstack/react-form";
import { CreateOrderDto } from "@/models";

type TextInputProps = TextFieldProps & {
  name: DeepKeys<CreateOrderDto>;
  label: string;
  placeholder: string;
  form: ReturnType<typeof useForm<CreateOrderDto>>;
};

export default function TextInput({
  name,
  label,
  placeholder,
  form,
  ...muiTextFieldProps
}: TextInputProps) {
  return (
    // @ts-expect-error Field component has internal typing issues
    <Field name={name} form={form}>
      {({ handleChange, handleBlur }) => (
        <TextField
          label={label}
          sx={{ minWidth: "300px" }}
          size="small"
          defaultValue={""}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={handleBlur}
          placeholder={placeholder}
          {...muiTextFieldProps}
        />
      )}
    </Field>
  );
}
