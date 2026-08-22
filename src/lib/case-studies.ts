import fs from "node:fs";
import path from "node:path";

const contentDir = path.join(process.cwd(), "src", "content", "projects");

export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => path.basename(file, ".mdx"));
}

export function caseStudyExists(slug: string): boolean {
  return getCaseStudySlugs().includes(slug);
}