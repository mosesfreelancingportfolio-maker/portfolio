import { z } from "zod";

export const projectTypes = [
  "Web Application",
  "Mobile Application",
  "Backend / API",
  "AI / Data",
  "Other",
] as const;

export const budgetRanges = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $30k",
  "$30k+",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name.")
    .max(80, "Name is too long."),
  email: z.string().email("Please enter a valid email address."),
  company: z
    .string()
    .max(100, "Company name is too long.")
    .optional()
    .or(z.literal("")),
  projectType: z.enum(projectTypes, {
    message: "Please select a project type.",
  }),
  budget: z.enum(budgetRanges, {
    message: "Please select a budget range.",
  }),
  projectDescription: z
    .string()
    .min(20, "Please describe your project in a little more detail.")
    .max(3000, "Please keep the description under 3000 characters."),
  // Honeypot field — humans never fill this. Bots do.
  website: z.string().max(0, "Something went wrong.").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;