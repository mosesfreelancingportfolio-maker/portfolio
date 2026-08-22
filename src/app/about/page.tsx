import type { Metadata } from "next";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { SkillsSection } from "@/components/sections/skills-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Computer science (software) engineering graduate and web & mobile app developer specializing in web, mobile, backend & API development, and database management.",
};

export default function AboutPage() {
  return (
    <div className="container-page scroll-mt-nav py-12 sm:py-16 md:py-24 mt-nav">
      <SectionHeading
        eyebrow="About"
        title="Engineer by training, builder by choice."
      />

      <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="max-w-2xl space-y-4 sm:space-y-6 font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m Moses Joseph Benjamin — a computer science (software)
              engineering graduate and web &amp; mobile app developer. I build
              innovative solutions to real-world problems, specializing in web
              applications, mobile applications, backend &amp; API development,
              and database management with PostgreSQL and Firebase.
            </p>
            <p>
              I care about the whole picture rather than a single layer: how a
              feature is architected, how it performs under real usage, and
              whether the codebase stays maintainable for the next person. The
              result is products that are reliable, secure, and genuinely useful.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="max-w-2xl space-y-4 sm:space-y-6 font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
            <h2 className="font-display text-xl sm:text-2xl font-medium text-foreground">
              Selected achievements
            </h2>
            <p>
              I build for impact. A few highlights of work that reached real
              users and earned recognition:
            </p>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex gap-2">
                <span className="text-secondary">—</span>
                <span>
                  Won the <span className="font-medium text-foreground">$6,000</span>{" "}
                  Ignition Grand prize for{" "}
                  <span className="font-medium text-foreground">SnapNews</span> — a
                  mobile app delivering summarized, concise, and relevant news.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary">—</span>
                <span>
                  Built <span className="font-medium text-foreground">Medivaults</span>{" "}
                  — a secure, encrypted platform for storing and sharing medical
                  records, with appointment booking for patients, doctors, and
                  hospitals.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary">—</span>
                <span>
                  Developed the{" "}
                  <span className="font-medium text-foreground">
                    Pahukeni Pension Hotel Management System
                  </span>{" "}
                  — a web app helping a hotel in Namibia manage operations,
                  bookings, and customer data efficiently.
                </span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24">
        <SkillsSection />
      </div>
    </div>
  );
}
