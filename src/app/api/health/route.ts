import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    ok: true,
    emailDeliveryConfigured: Boolean(
      process.env.BREVO_API_KEY && process.env.CONTACT_TO_EMAIL
    ),
    checks: {
      brevoApiKey: Boolean(process.env.BREVO_API_KEY),
      contactToEmail: Boolean(process.env.CONTACT_TO_EMAIL),
      contactFromEmail: Boolean(process.env.CONTACT_FROM_EMAIL),
    },
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ? "set" : "unset",
  });
}