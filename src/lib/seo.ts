import type { Metadata } from "next";

import { siteConfig } from "@/lib/config/site";

/**
 * Appends a JSON-LD Person profile to a page's metadata for structured data.
 * Pass a full metadata object and it merges in the site-wide author schema.
 */
export function withPersonSchema(metadata: Metadata): Metadata {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: "Web & Mobile App Developer",
    description: siteConfig.description,
    knowsAbout: [
      "Web Development",
      "Mobile Development",
      "Backend Development",
      "API Development",
      "Database Management",
      "PostgreSQL",
      "Firebase",
    ],
  };

  return {
    ...metadata,
    other: {
      ...(metadata.other ?? {}),
      "application/ld+json": JSON.stringify(personSchema),
    },
  };
}