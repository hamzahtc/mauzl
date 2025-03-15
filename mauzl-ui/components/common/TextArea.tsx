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
  placeholder: string;
  form: FormApi<T, ZodValidator>;
};

export default function TextArea<T>({
  name,
  placeholder,
  form,
  ...muiTextFieldProps
}: TextAreaProps<T>) {
  return (
    // @ts-expect-error ignore field name
    <Field name={name} form={form}>
      {({ state, handleChange, handleBlur }) => (
        <Stack gap={1}>
          <TextareaAutosize
            style={{ minWidth: "270px", padding: "10px" }}
            defaultValue=""
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
