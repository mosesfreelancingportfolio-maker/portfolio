import type { Metadata, Viewport } from "next";
import { EB_Garamond, Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

import { ThemeProvider } from "@/components/shared/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { siteConfig } from "@/lib/config/site";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "web developer",
    "mobile app developer",
    "Next.js developer",
    "React developer",
    "React Native developer",
    "API developer",
    "PostgreSQL",
    "Firebase",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#111315" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${ebGaramond.variable} ${hankenGrotesk.variable}`}
    >
      <body className="min-h-dvh flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
