import React from "react";
import { useForm } from "@tanstack/react-form";
import TextInput from "../common/TextInput";
import { CreateOrderDto } from "@/models";
import { Stack } from "@mui/material";
import PrimaryButton from "../common/PrimaryButton";
import SelectInput from "../common/SelectInput";
import cities from "../../data/cities.json";
import { ZodValidator, zodValidator } from "@tanstack/zod-form-adapter";
import { Order, OrderSchema } from "@/validation/order.schema";
import { db, OrderItem } from "@/utils/db";
import { useRouter } from "next/navigation";

interface CheckoutFormProps {
  orderItems: OrderItem[];
  createOrder: (data: { data: CreateOrderDto }) => Promise<void>;
}

export default function CheckoutForm({
  orderItems,
  createOrder,
}: CheckoutFormProps) {
  const { push } = useRouter();

  const form = useForm<Order, ZodValidator>({
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
      items: orderItems?.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        size: item.size,
      })),
    },
    validators: {
      onChange: OrderSchema,
    },
    validatorAdapter: zodValidator(),
    onSubmit: async ({ value }) =>
      createOrder({ data: value }).then(() => {
        db.products.clear();
        push("/shop");
      }),
  });

  const handleConfirm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <Stack gap={2} justifyContent="center" width="100%" bgcolor="#f9f9fb" p={2}>
      <TextInput<Order>
        form={form}
        name="client.firstName"
        label="First name"
        placeholder="Enter your first name"
        required
      />
      <TextInput<Order>
        form={form}
        name="client.lastName"
        label="Last name"
        placeholder="Enter your last name"
        required
      />
      <TextInput<Order>
        form={form}
        name="client.email"
        label="Email"
        placeholder="Enter your email"
        required
      />
      <TextInput<Order>
        form={form}
        name="client.phoneNumber"
        label="Phone number"
        placeholder="Enter your phone number"
        required
      />
      <SelectInput<Order>
        form={form}
        name="address.city"
        options={cities}
        label="City"
        required
      />
      <TextInput<Order>
        form={form}
        name="address.addressLine"
        label="Address"
        placeholder="Enter your address"
        required
      />
      <PrimaryButton
        type="submit"
        text="Confirm"
        onClick={handleConfirm}
        sx={{ minWidth: "270px", bgcolor: "#018849" }}
      />
    </Stack>
  );
}
