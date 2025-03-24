import { z } from "zod";

export const SigninSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password is required"),
});

export type Signin = z.infer<typeof SigninSchema>;
