import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing the use of this portfolio website and the professional services offered by Moses Joseph Benjamin.",
};

export default function TermsPage() {
  return (
    <div className="container-page scroll-mt-nav py-16 sm:py-24">
      <SectionHeading
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Last updated: August 2025"
      />

      <div className="mt-12 max-w-3xl space-y-8 text-muted-foreground">
        <Reveal>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using this website (
              <Link href="/" className="underline hover:text-secondary">
                portfolio-app-psi-rouge.vercel.app
              </Link>
              ), you agree to be bound by these Terms and Conditions (
              {"&ldquo;Terms&rdquo;"}
              ) and all applicable laws and regulations. If you do not agree with any part of these Terms, you may not use this website.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.05}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">2. Use of This Website</h2>
            <p className="mb-4">You may use this website for lawful purposes only. You agree not to:</p>
            <ul className="list-disc space-y-2 pl-5 mb-4">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any portion of the website, server, or database</li>
              <li>Use any automated systems (bots, scrapers, crawlers) to extract data without permission</li>
              <li>Interfere with or disrupt the website&apos;s operation or security</li>
              <li>Transmit malware, viruses, or any harmful code</li>
            </ul>
          </section>
        </Reveal>

        <Reveal delay={0.1}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">3. Intellectual Property</h2>
            <p className="mb-4">All content on this website, including but not limited to:</p>
            <ul className="list-disc space-y-2 pl-5 mb-4">
              <li>Text, graphics, logos, icons, and images</li>
              <li>Project case studies and descriptions</li>
              <li>Code snippets and technical documentation</li>
              <li>Design elements, layouts, and visual assets</li>
            </ul>
            <p className="mb-4">
              are the intellectual property of <strong>Moses Joseph Benjamin</strong> unless otherwise stated. You may not reproduce, distribute, modify, or create derivative works without prior written permission, except for:
            </p>
            <ul className="list-disc space-y-2 pl-5 mb-4">
              <li>Viewing content for personal, non-commercial purposes</li>
              <li>Sharing links to pages (with attribution)</li>
              <li>Fair use as permitted by applicable copyright law</li>
            </ul>
          </section>
        </Reveal>

        <Reveal delay={0.15}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">4. Professional Services</h2>
            <p className="mb-4">
              This website showcases professional software development services. The information presented is for portfolio and informational purposes only and does not constitute a contract, offer of employment, or guarantee of specific results. Any engagement for professional services requires a separate written agreement (Statement of Work, Master Services Agreement, or similar) outlining scope, deliverables, timeline, and compensation.
            </p>
            <p className="mb-4">
              Past project results (case studies) demonstrate capabilities but do not guarantee similar outcomes for future projects. Each project&apos;s success depends on factors including client collaboration, requirements clarity, budget, timeline, and technical constraints.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.2}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">5. Contact Form Submissions</h2>
            <p className="mb-4">
              When you submit the contact form, you agree that:
            </p>
            <ul className="list-disc space-y-2 pl-5 mb-4">
              <li>The information you provide is accurate and complete</li>
              <li>You have the right to share any information you provide</li>
              <li>We may use your information to respond to your inquiry and assess project fit</li>
              <li>Submissions are processed via our email provider (Brevo) per our <Link href="/privacy" className="underline hover:text-secondary">Privacy Policy</Link></li>
            </ul>
            <p className="mb-4">
              Submitting the form does not create an attorney-client, consultant-client, or any other professional relationship until a formal agreement is executed.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.25}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">6. External Links</h2>
            <p className="mb-4">
              This website may contain links to third-party websites (GitHub, LinkedIn, project demos, etc.). These links are provided for convenience only. We do not control, endorse, or assume responsibility for the content, privacy practices, or security of any third-party sites. Your use of external links is at your own risk.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.3}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">7. Disclaimer of Warranties</h2>
            <p className="mb-4">
              THIS WEBSITE IS PROVIDED {"&ldquo;AS IS&rdquo;"} AND {"&ldquo;AS AVAILABLE&rdquo;"} WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc space-y-2 pl-5 mb-4">
              <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
              <li>Warranties that the website will be uninterrupted, error-free, or secure</li>
              <li>Warranties regarding the accuracy, completeness, or timeliness of content</li>
            </ul>
            <p className="mb-4">
              We do not warrant that the website will meet your requirements or that defects will be corrected.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.35}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL MOSES JOSEPH BENJAMIN BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION:
            </p>
            <ul className="list-disc space-y-2 pl-5 mb-4">
              <li>Loss of profits, data, use, or goodwill</li>
              <li>Business interruption</li>
              <li>Cost of procurement of substitute services</li>
              <li>Any damages arising from website unavailability, errors, or omissions</li>
            </ul>
            <p className="mb-4">
              Our total liability for any claim arising from your use of this website shall not exceed the amount paid by you for services (if any), or USD $100, whichever is greater.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.4}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">9. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless Moses Joseph Benjamin from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising from:
            </p>
            <ul className="list-disc space-y-2 pl-5 mb-4">
              <li>Your use of this website in violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content you submit via the contact form</li>
            </ul>
          </section>
        </Reveal>

        <Reveal delay={0.45}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">10. Governing Law & Dispute Resolution</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of <strong>Namibia</strong>, without regard to conflict of law principles. Any dispute arising from these Terms or your use of the website shall be resolved through:
            </p>
            <ul className="list-disc space-y-2 pl-5 mb-4">
              <li>Good-faith negotiation between parties</li>
              <li>If unresolved, binding arbitration in Windhoek, Namibia</li>
              <li>Each party bears its own costs unless otherwise awarded</li>
            </ul>
          </section>
        </Reveal>

        <Reveal delay={0.5}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">11. Changes to These Terms</h2>
            <p className="mb-4">
              We may modify these Terms at any time. Changes will be posted at this URL with an updated {"&ldquo;Last updated&rdquo;"} date. Continued use of the website after changes constitutes acceptance of the new Terms. We encourage you to review these Terms periodically.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.55}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">12. Severability</h2>
            <p className="mb-4">
              If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions shall remain in full force and effect. The invalid provision shall be deemed modified to the minimum extent necessary to make it enforceable.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.6}>
          <section>
            <h2 className="text-xl font-semibold tracking-tight mb-4">13. Contact</h2>
            <p className="mb-4">
              Questions about these Terms? Contact us:
            </p>
            <ul className="list-disc space-y-2 pl-5 mb-4 font-mono text-sm">
              <li>Email: <a href="mailto:mosesfreelancingportfolio@gmail.com" className="underline hover:text-secondary">mosesfreelancingportfolio@gmail.com</a></li>
              <li>Website: <Link href="/contact" className="underline hover:text-secondary">Contact Form</Link></li>
            </ul>
          </section>
        </Reveal>
      </div>
    </div>
  );
}