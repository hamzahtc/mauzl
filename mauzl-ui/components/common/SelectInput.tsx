import { CreateOrderDto } from "@/models";
import { DeepKeys, Field, useForm } from "@tanstack/react-form";
import React, { useState } from "react";

import Select from "react-select";

export type Option = {
  value: string;
  label: string;
};

interface SelectInputProps {
  name: DeepKeys<CreateOrderDto>;
  options: Option[];
  form: ReturnType<typeof useForm<CreateOrderDto>>;
}

export default function SelectInput({ name, options, form }: SelectInputProps) {
  const [isSearchable] = useState(true);
  const [isLoading] = useState(false);

  return (
    <Field name={name} form={form}>
      {({ handleChange }) => (
        <Select
          defaultValue={options[0]}
          isLoading={isLoading}
          isSearchable={isSearchable}
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
