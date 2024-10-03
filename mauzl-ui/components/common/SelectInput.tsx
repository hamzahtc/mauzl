import { Field, FormApi } from "@tanstack/react-form";
import { ZodValidator } from "@tanstack/zod-form-adapter";
import React, { useState } from "react";

import Select from "react-select";

export type Option = {
  value: string;
  label: string;
};

interface SelectInputProps<T> {
  name: string;
  options: Option[];
  form: FormApi<T, ZodValidator>;
}

export default function SelectInput<T>({
  name,
  options,
  form,
}: SelectInputProps<T>) {
  const [isSearchable] = useState(true);
  const [isLoading] = useState(false);

  return (
    // @ts-expect-error ignore name
    <Field name={name} form={form}>
      {({ handleChange }) => (
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
            }),
          }}
        />
      )}
    </Field>
  );
}
