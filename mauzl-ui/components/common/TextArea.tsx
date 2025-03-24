import * as React from "react";
import { Field, FieldMeta, FormApi } from "@tanstack/react-form";
import TextTypography from "./TextTypography";
import { Box, Stack } from "@mui/material";
import { ZodValidator } from "@tanstack/zod-form-adapter";
import {
  TextareaAutosize,
  TextareaAutosizeProps,
} from "@mui/base/TextareaAutosize";

type TextAreaProps<T> = Omit<TextareaAutosizeProps, "form"> & {
  name: string;
  label: string;
  placeholder: string;
  form: FormApi<T, ZodValidator>;
  required?: boolean;
};

export default function TextArea<T>({
  name,
  placeholder,
  form,
  label,
  required,
  ...muiTextFieldProps
}: TextAreaProps<T>) {
  return (
    // @ts-expect-error ignore field name
    <Field name={name} form={form}>
      {({ state, handleChange, handleBlur }) => (
        <Stack gap={1}>
          <TextTypography
            text={`${label}${required ? " *" : ""}`}
            variant="h6"
            sx={{
              color: "black",
              "&:hover": { color: "black", cursor: "pointer" },
            }}
          />

          <TextareaAutosize
            style={{
              minWidth: "270px",
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "0px",
              outline: "none",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
            onFocus={(e) =>
              (e.currentTarget.style.border = "2px solid #B479D9")
            }
            onBlur={(e) => {
              handleBlur();
              e.currentTarget.style.border = "2px solid #ccc";
            }}
            defaultValue=""
            // @ts-expect-error ignore type
            onChange={(e) => handleChange(e.target.value)}
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
          fontSize="12px"
        />
      </Box>
    );

  return <></>;
}
