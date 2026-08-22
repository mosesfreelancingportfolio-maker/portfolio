import Link from "next/link";
import { ArrowUpRight, Brain, Layout, Server, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { services } from "@/data/services";

const iconMap = {
  layout: Layout,
  smartphone: Smartphone,
  server: Server,
  brain: Brain,
};

export default function ServicesPage() {
  return (
    <div className="container-page scroll-mt-nav py-12 sm:py-16 md:py-24 mt-nav">
      <SectionHeading
        eyebrow="Services"
        title="What I offer"
        description="End-to-end product engineering. Each service maps to the problems it solves and the deliverables you can expect — no unsupported promises."
      />

      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-border py-6 sm:py-8 md:py-0">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Layout;
          return (
            <Reveal key={service.slug} delay={i * 0.06}>
              <div className="py-6 sm:py-8 md:py-0 md:pr-6 sm:md:pr-8">
                <Icon className="size-8 sm:size-10 text-foreground mb-4 sm:mb-6" />
                <h3 className="font-sans text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  {service.tagline}
                </p>
                <div className="mb-4 sm:mb-6">
                  <p className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    What I provide
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-muted-foreground">
                    {service.what}
                  </p>
                </div>
                <div className="mb-4 sm:mb-6">
                  <p className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Problems I solve
                  </p>
                  <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                    {service.problems.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-secondary">—</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4 sm:mb-6">
                  <p className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Deliverables
                  </p>
                  <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="text-secondary">—</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 sm:mt-8">
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/contact">
                      Discuss this service
                      <ArrowUpRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}