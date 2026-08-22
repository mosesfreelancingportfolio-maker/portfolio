import Link from "next/link";
import { ArrowUpRight, Brain, Layout, Server, Smartphone } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { services } from "@/data/services";

const iconMap = {
  layout: Layout,
  smartphone: Smartphone,
  server: Server,
  brain: Brain,
};

export function ServicesPreview() {
  return (
    <section className="border-t border-border">
      <div className="container-page scroll-mt-nav py-16 sm:py-20 md:py-24 lg:py-32">
        <SectionHeading
          eyebrow="Services"
          title="How I can help"
          description="End-to-end product engineering — from idea and architecture to shipping and scaling."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon =
              iconMap[service.icon as keyof typeof iconMap] ?? Layout;
            return (
              <Reveal key={service.slug} delay={i * 0.05} className="h-full">
                <Link
                  href="/services"
                  className="group flex h-full flex-col justify-between gap-4 sm:gap-6 md:gap-8 bg-background p-4 sm:p-5 md:p-7 transition-colors hover:bg-muted/60 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                >
                  <div>
                    <Icon className="size-5 sm:size-6 text-secondary" />
                    <h3 className="mt-3 sm:mt-5 text-base sm:text-lg font-semibold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                      {service.tagline}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    Learn more
                    <ArrowUpRight className="size-3 sm:size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}