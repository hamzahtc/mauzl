import { z } from "zod";

export const SignupSchema = z.object({
  firstName: z.string().min(1, "Firstname is required"),
  lastName: z.string().min(1, "LastName is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password is required"),
});

export type Signup = z.infer<typeof SignupSchema>;
