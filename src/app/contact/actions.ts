"use server";

import { BrevoClient } from "@getbrevo/brevo";

import { siteConfig } from "@/lib/config/site";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";

export type ContactState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; errors?: Record<string, string> };

const brevo = process.env.BREVO_API_KEY
  ? new BrevoClient({ apiKey: process.env.BREVO_API_KEY })
  : null;

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return { status: "success", message: "Thanks — I'll be in touch soon." };
  }

  const raw = Object.fromEntries(formData.entries());
  const result = contactFormSchema.safeParse(raw);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors: Object.fromEntries(
        Object.entries(errors).map(([key, value]) => [key, value?.[0] ?? ""])
      ),
    };
  }

  const data = result.data as ContactFormData;

  if (!brevo || !process.env.CONTACT_TO_EMAIL) {
    const missing = [
      ...(brevo ? [] : ["BREVO_API_KEY"]),
      ...(process.env.CONTACT_TO_EMAIL ? [] : ["CONTACT_TO_EMAIL"]),
    ];

    if (process.env.NODE_ENV === "production") {
      console.error(
        `Email delivery unavailable; missing env vars: ${missing.join(", ")}`
      );
      return {
        status: "error",
        message:
          "Email delivery is temporarily unavailable. Please email me directly.",
      };
    }

    console.log("Contact form received:", { data });
    console.warn(
      `Email delivery skipped; missing env vars: ${missing.join(", ")}.`
    );
    return {
      status: "success",
      message: "Thanks for reaching out — I'll get back to you soon.",
    };
  }

  try {
    await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        email: process.env.CONTACT_FROM_EMAIL || siteConfig.email,
        name: siteConfig.name,
      },
      to: [{ email: process.env.CONTACT_TO_EMAIL }],
      replyTo: { email: data.email },
      subject: `New inquiry from ${data.name} — ${data.projectType}`,
      textContent: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Company: ${data.company || "—"}`,
        `Project type: ${data.projectType}`,
        `Budget: ${data.budget}`,
        "",
        "Project description:",
        data.projectDescription,
      ].join("\n"),
    });

    return {
      status: "success",
      message: "Thanks for reaching out — I'll get back to you soon.",
    };
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return {
      status: "error",
      message:
        "Something went wrong sending your message. Please try again or email me directly.",
    };
  }
}
