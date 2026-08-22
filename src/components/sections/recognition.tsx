import { Trophy } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const highlights = [
  {
    value: "$6,000",
    label: "Ignition Grand prize won for SnapNews",
  },
  {
    value: "3",
    label: "Real-world products designed and shipped end-to-end",
  },
  {
    value: "Web + Mobile",
    label: "Full-stack delivery across platforms and APIs",
  },
];

export function Recognition() {
  return (
    <section className="border-t border-border bg-secondary/5">
      <div className="container-page py-12 sm:py-16">
        <Reveal>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-sm bg-secondary text-secondary-foreground">
                <Trophy className="size-5" aria-hidden="true" />
              </span>
              <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
                Recognition
              </p>
            </div>
            <Link
              href="/projects/snapnews"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Read the SnapNews story
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {highlights.map((item, i) => (
            <Reveal key={item.value} delay={i * 0.06} className="h-full">
              <div className="h-full bg-background p-6 sm:p-8">
                <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}