import { z } from "zod";

const schema = z.object({
  RESEND_API_KEY: z.string().min(1).optional(),
  QUOTE_TO_EMAIL: z
    .string()
    .default("kaylensaws@yahoo.com,sawserviceray@gmail.com"),
  QUOTE_FROM_EMAIL: z.string().email().default("quotes@onboarding.resend.dev"),
  TURNSTILE_SECRET_KEY: z.string().optional(),
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional(),
});

export const env = schema.parse({
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  QUOTE_TO_EMAIL: process.env.QUOTE_TO_EMAIL,
  QUOTE_FROM_EMAIL: process.env.QUOTE_FROM_EMAIL,
  TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
});
