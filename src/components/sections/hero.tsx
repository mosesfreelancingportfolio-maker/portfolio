"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config/site";

const capabilities = [
  "Web Applications",
  "Mobile Applications",
  "Backend & API",
  "Database Management",
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fade = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section className="relative overflow-hidden mt-nav">
      {/* Decorative grid texture */}
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]"
      />

      <div className="container-page relative py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl px-4 sm:px-0">
          <motion.p
            {...fade}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground"
          >
            {siteConfig.role}
          </motion.p>

          <motion.h1
            {...fade}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-balance text-foreground leading-tight"
          >
            I build web &amp; mobile applications that solve real-world problems.
          </motion.h1>

          <motion.p
            {...fade}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="mt-6 max-w-2xl font-sans text-lg text-muted-foreground leading-relaxed"
          >
            Computer science engineering graduate specializing in web
            applications, mobile applications, backend and API development, and
            database management with PostgreSQL and Firebase — turning technical
            complexity into reliable, user-focused products.
          </motion.p>

          <motion.div
            {...fade}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link href="/projects">
                View My Work
                <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Let&apos;s Work Together</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Capability indicators */}
      <div className="border-t border-border">
        <div className="container-page grid grid-cols-2 gap-y-px py-0 sm:grid-cols-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap}
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                  })}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="flex items-center gap-2 border-r border-border py-4 sm:py-6 pr-2 sm:pr-4 last:border-r-0 sm:gap-3 sm:px-4 first:pl-0 last:pr-0"
            >
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-secondary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-sans text-xs sm:text-sm font-medium text-foreground">{cap}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}