import type { Metadata } from "next";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How we collect, use, and protect your personal information when you use this portfolio website and contact form.",
};

export default function PrivacyPage() {
  return (
    <div className="container-page scroll-mt-nav py-16 sm:py-24">
      <SectionHeading
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: August 2025"
      />

      <div className="mt-12 max-w-3xl space-y-8 text-muted-foreground">
        <Reveal>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              When you submit the contact form on this website, we collect the following personal information:
            </p>
            <ul className="list-disc space-y-2 pl-5 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Company name (optional)</li>
              <li>Project type and budget range</li>
              <li>Project description</li>
            </ul>
            <p>We do not collect sensitive personal information, payment details, or data from third-party sources.</p>
          </section>
        </Reveal>

        <Reveal delay={0.05}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">The information you provide is used solely to:</p>
            <ul className="list-disc space-y-2 pl-5 mb-4">
              <li>Respond to your inquiry</li>
              <li>Assess project fit and scope</li>
              <li>Send a confirmation reply</li>
            </ul>
            <p>We do not use your data for marketing, analytics profiling, or automated decision-making.</p>
          </section>
        </Reveal>

        <Reveal delay={0.1}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">3. Data Sharing & Processing</h2>
            <p className="mb-4">Your form submission is processed as follows:</p>
            <ul className="list-disc space-y-2 pl-5 mb-4">
              <li>Submitted via HTTPS to our Next.js server action</li>
              <li>Validated server-side (Zod schema)</li>
              <li>Sent via <strong>Brevo</strong> (transactional email provider) to our inbox</li>
              <li>No data is stored in a database or logged beyond email delivery</li>
            </ul>
            <p>We do not sell, rent, or share your data with third parties except Brevo for email delivery. Brevo&apos;s privacy policy applies to the transmission step.</p>
          </section>
        </Reveal>

        <Reveal delay={0.15}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">4. Data Retention</h2>
            <p className="mb-4">
              Emails are retained in our inbox for the duration of the conversation and archived per standard email retention practices.
              We do not maintain a separate database of submissions. You may request deletion at any time.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.2}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">5. Your Rights</h2>
            <p className="mb-4">Under applicable data protection laws (GDPR, CCPA, etc.), you have the right to:</p>
            <ul className="list-disc space-y-2 pl-5 mb-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Data portability</li>
            </ul>
            <p>To exercise these rights, email <a href="mailto:mosesfreelancingportfolio@gmail.com" className="underline hover:text-secondary">mosesfreelancingportfolio@gmail.com</a>.</p>
          </section>
        </Reveal>

        <Reveal delay={0.25}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">6. Security</h2>
            <p className="mb-4">
              We implement appropriate technical measures:
            </p>
            <ul className="list-disc space-y-2 pl-5 mb-4">
              <li>HTTPS everywhere (TLS 1.2+)</li>
              <li>Server-side validation & sanitization</li>
              <li>Honeypot field to deter bots</li>
              <li>No sensitive data stored on our servers</li>
            </ul>
          </section>
        </Reveal>

        <Reveal delay={0.3}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">7. Third-Party Services</h2>
            <p className="mb-4">This site uses:</p>
            <ul className="list-disc space-y-2 pl-5 mb-4">
              <li><strong>Vercel</strong> — hosting & analytics (anonymized, no cookies required)</li>
              <li><strong>Brevo</strong> — transactional email delivery</li>
              <li><strong>Google Fonts</strong> — self-hosted via next/font (no external requests)</li>
            </ul>
            <p>No advertising trackers, social media pixels, or third-party cookies are used.</p>
          </section>
        </Reveal>

        <Reveal delay={0.35}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">8. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this policy occasionally. The latest version will always be posted at this URL with an updated &ldquo;Last updated&rdquo; date.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.4}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">9. Contact</h2>
            <p className="mb-4">
              Questions about this policy or your data? Email <a href="mailto:mosesfreelancingportfolio@gmail.com" className="underline hover:text-secondary">mosesfreelancingportfolio@gmail.com</a>.
            </p>
          </section>
        </Reveal>
      </div>
    </div>
  );
}