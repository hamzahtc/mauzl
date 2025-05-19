import { Field, FormApi } from "@tanstack/react-form";
import { MUIPhoneProps, PhoneNumberInput } from "./PhoneNumberInput";
import { ZodValidator } from "@tanstack/zod-form-adapter";

export function FormPhoneInput<T>({
  name,
  form,
  ...props
}: {
  name: string;
  form: FormApi<T, ZodValidator>;
} & Omit<MUIPhoneProps, "value" | "onChange">) {
  return (
    <Field name={name as never} form={form}>
      {({ state, handleChange }) => (
        <PhoneNumberInput
          name={name}
          // @ts-expect-error ignore field name
          value={state.value ?? ""}
          // @ts-expect-error ignore field name
          onChange={(value) => handleChange(value)}
          {...props}
        />
      )}
    </Field>
  );
}
