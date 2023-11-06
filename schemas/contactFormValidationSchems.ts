import { z } from "zod";

const phoneRegexp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

export const contactFormValidationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  phone: z
    .string()
    .regex(phoneRegexp, { message: "Must be a valid phone number" }),
});
