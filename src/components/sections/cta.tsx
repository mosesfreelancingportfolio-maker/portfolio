import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function CTA() {
  return (
    <section className="border-t border-border">
      <div className="container-page py-16 sm:py-20 md:py-24 lg:py-32 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-balance">
            Have a project in mind? Let&apos;s build it together.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm sm:text-base md:text-lg text-muted-foreground">
            Tell me about your goals and I&apos;ll help translate them into a
            reliable, scalable product.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3 sm:gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Let&apos;s Work Together
                <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">About me</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}