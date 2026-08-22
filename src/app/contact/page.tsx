import type { Metadata } from "next";
import { MoveRight } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell me about your project and I'll get back to you — web, mobile, backend, or AI.",
};

export default function ContactPage() {
  return (
    <div className="container-page scroll-mt-nav py-12 sm:py-16 md:py-24 mt-nav">
      <section className="bg-muted p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 border border-border relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 relative z-10">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-3 sm:mb-4 md:mb-6 leading-none">
              Let&apos;s build<br/>something<br/>extraordinary.
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 md:mb-8 max-w-md">
              Currently accepting new projects. Reach out to discuss your next vision.
            </p>
            <a 
              className="inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-semibold text-foreground hover:text-secondary transition-colors group" 
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
              <MoveRight className="transform transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          
          <div className="mt-8 sm:mt-10 md:mt-0 flex flex-col justify-end">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}