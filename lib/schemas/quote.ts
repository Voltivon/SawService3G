import { z } from "zod";

export const urgencyOptions = ["urgent", "this_week", "scheduled"] as const;
export type Urgency = (typeof urgencyOptions)[number];

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  company: z.string().trim().min(2, "Company name is required").max(120),
  email: z.string().trim().email("A valid email is required").max(120),
  phone: z
    .string()
    .trim()
    .min(7, "A reachable phone number is required")
    .max(30),
  saw: z
    .string()
    .trim()
    .min(2, "Brand and/or model helps us prep the right parts")
    .max(120),
  location: z
    .string()
    .trim()
    .min(2, "City / facility location is required")
    .max(160),
  urgency: z.enum(urgencyOptions),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a bit about the issue (10+ characters)")
    .max(2000),
  // Honeypot — bots fill all fields. We let Zod accept it silently and the
  // route handler decides what to do (silent-accept) so bots don't learn
  // they tripped a trap.
  website: z.string().max(200).optional(),
  turnstileToken: z.string().optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
