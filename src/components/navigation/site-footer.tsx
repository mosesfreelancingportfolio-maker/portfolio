import Link from "next/link";

import { siteConfig } from "@/lib/config/site";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container-page flex flex-col md:flex-row justify-between items-start gap-8 py-section-gap">
        <div className="flex flex-col gap-4">
          <div className="font-display text-2xl md:text-4xl text-foreground">
            {siteConfig.shortName}
          </div>
          <p className="font-sans text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-sm text-muted-foreground hover:text-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded"
            >
              {item.title}
            </Link>
          ))}
        </div>
        
        <div className="flex gap-8">
          {siteConfig.social.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="font-sans text-sm text-muted-foreground hover:text-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}