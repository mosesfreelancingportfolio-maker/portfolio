"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // Close the mobile menu on route change (render-time state adjustment)
  const [prevPathname, setPrevPathname] = React.useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Lock scroll while the mobile menu is open and handle keyboard navigation
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl lg:text-3xl tracking-tighter text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded"
          aria-label="Home"
        >
          {siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold tracking-wide transition-colors uppercase hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded",
                isActive(item.href) 
                  ? "text-foreground border-b border-foreground" 
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">
              Let&apos;s Talk
              <ArrowUpRight />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            aria-controls="mobile-menu"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav
          className="container-page flex flex-col gap-4 border-t border-border py-6"
          aria-label="Mobile navigation"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "py-2 text-base font-semibold tracking-wide transition-colors uppercase hover:text-secondary",
                isActive(item.href) 
                  ? "text-foreground border-b border-foreground" 
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
<Button asChild className="mt-2">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Let&apos;s Talk
              <ArrowUpRight />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}