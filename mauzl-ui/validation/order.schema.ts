import { z } from "zod";

export const OrderSchema = z.object({
  client: z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().min(1, "Phone number is required"),
  }),
  address: z.object({
    city: z.string().min(1, "City is required"),
    addressLine: z.string().min(1, "Address is required"),
  }),
  items: z.array(
    z.object({
      productId: z.number(),
      quantity: z.number().min(1, "Quantity must be at least 1"),
      size: z.string().min(1, "Size is required"),
    })
  ),
});

export type Order = z.infer<typeof OrderSchema>;
