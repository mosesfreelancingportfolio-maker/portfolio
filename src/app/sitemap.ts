import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly" as const, priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.7 },
  ];

  const projectRoutes = projects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}