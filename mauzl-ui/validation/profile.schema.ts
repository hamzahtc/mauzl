import { z } from "zod";

export const ProfileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  birthDay: z.number(),
  birthMonth: z.number(),
  birthYear: z.number(),
  phoneNumber: z.string().min(1, "Phone number is required"),
});

export type Profile = z.infer<typeof ProfileSchema>;
