import React from "react";
import { useForm } from "@tanstack/react-form";
import TextInput from "../common/TextInput";
import { CreateOrderDto, ProductDto } from "@/models";
import { Stack } from "@mui/material";
import PrimaryButton from "../common/PrimaryButton";
import { ordersControllerCreate } from "@/generated/hooks";
import SelectInput from "../common/SelectInput";
import cities from "../../data/cities.json";
interface CheckoutFormProps {
  products: ProductDto[];
}

export default function CheckoutForm({ products }: CheckoutFormProps) {
  const form = useForm<CreateOrderDto>({
    defaultValues: {
      client: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
      address: {
        city: "",
        addressLine: "",
      },
      items: products?.map((product) => ({
        productId: product.id,
        quantity: 1,
      })),
    },
    onSubmit: async ({ value }) => {
      const data = await ordersControllerCreate(value);
      console.log(data);
    },
  });

  const handleConfirm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <Stack gap={2}>
      <TextInput
        form={form}
        name="client.firstName"
        label="First name"
        placeholder="Enter your first name"
      />
      <TextInput
        form={form}
        name="client.lastName"
        label="Last name"
        placeholder="Enter your last name"
      />
      <TextInput
        form={form}
        name="client.email"
        label="Email"
        placeholder="Enter your email"
      />
      <TextInput
        form={form}
        name="client.phoneNumber"
        label="Phone number"
        placeholder="Enter your phone number"
      />
      <SelectInput form={form} name="address.city" options={cities} />
      <TextInput
        form={form}
        name="address.addressLine"
        label="Address"
        placeholder="Enter your address"
      />
      <PrimaryButton type="submit" text="Confirm" onClick={handleConfirm} />
    </Stack>
  );
}
