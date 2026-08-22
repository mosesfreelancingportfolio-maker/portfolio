import type { Metadata } from "next";
import { withPersonSchema } from "@/lib/seo";

import { Hero } from "@/components/sections/hero";
import { Recognition } from "@/components/sections/recognition";
import { FeaturedWork } from "@/components/sections/featured-work";
import { ServicesPreview } from "@/components/sections/services-preview";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = withPersonSchema({
  title: "Web & Mobile App Developer — Moses Joseph Benjamin",
  description:
    "I build web and mobile applications that solve real-world problems — specializing in web apps, mobile apps, backend & API development, and database management with PostgreSQL and Firebase.",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Recognition />
      <FeaturedWork />
      <ServicesPreview />
      <CTA />
    </>
  );
}