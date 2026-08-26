import Link from "next/link";
import { ArrowLeft, ExternalLink, Clock, Database, Server, Globe, Users } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

type CaseStudyLayoutProps = {
  project: Project;
  metadata: {
    title?: string;
    summary?: string;
    problem?: string;
  };
  children: React.ReactNode;
};

const techCategories = [
  { key: "frontend", label: "Frontend", icon: Globe, color: "text-sky-500" },
  { key: "backend", label: "Backend", icon: Server, color: "text-emerald-500" },
  { key: "database", label: "Database", icon: Database, color: "text-amber-500" },
  { key: "mobile", label: "Mobile", icon: Globe, color: "text-violet-500" },
  { key: "auth", label: "Auth", icon: Users, color: "text-rose-500" },
  { key: "infra", label: "Infrastructure", icon: Server, color: "text-orange-500" },
];

function categorizeTech(tech: string[]): Record<string, string[]> {
  const categories: Record<string, string[]> = {
    frontend: [],
    backend: [],
    database: [],
    mobile: [],
    auth: [],
    infra: [],
  };

  const frontendKeywords = ["react", "vite", "typescript", "tailwind", "shadcn", "router", "tanstack", "hook form", "zod"];
  const backendKeywords = ["node", "express", "cloudflare", "workers", "hono", "python", "fastapi", "rest", "api"];
  const databaseKeywords = ["postgresql", "postgres", "supabase", "drizzle", "firebase", "prisma"];
  const mobileKeywords = ["capacitor", "react native", "expo", "ios", "android"];
  const authKeywords = ["supabase auth", "auth", "jwt", "oauth"];
  const infraKeywords = ["cloudflare", "pages", "railway", "render", "vercel", "docker", "pnpm", "vitest"];

  tech.forEach((t) => {
    const lower = t.toLowerCase();
    if (frontendKeywords.some((k) => lower.includes(k))) categories.frontend.push(t);
    else if (backendKeywords.some((k) => lower.includes(k))) categories.backend.push(t);
    else if (databaseKeywords.some((k) => lower.includes(k))) categories.database.push(t);
    else if (mobileKeywords.some((k) => lower.includes(k))) categories.mobile.push(t);
    else if (authKeywords.some((k) => lower.includes(k))) categories.auth.push(t);
    else if (infraKeywords.some((k) => lower.includes(k))) categories.infra.push(t);
    else categories.infra.push(t);
  });

  return categories;
}

export function CaseStudyLayout({
  project,
  metadata,
  children,
}: CaseStudyLayoutProps) {
  const techCategoriesData = categorizeTech(project.technologies);

  return (
    <article className="container-page scroll-mt-nav py-16 sm:py-24">
      <Reveal>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          All projects
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10 max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-sm bg-secondary px-3 py-1 font-mono text-xs font-medium text-secondary-foreground">
            {project.category}
          </span>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl">
            {metadata.summary ?? project.description}
          </p>
        </div>
      </Reveal>

      {metadata.problem ? (
        <Reveal delay={0.1}>
          <aside className="mt-10 max-w-4xl rounded-lg border border-border bg-muted/50 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-8 rounded-sm bg-accent/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-accent text-lg">warning</span>
              </div>
              <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
                The Problem
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">{metadata.problem}</p>
          </aside>
        </Reveal>
      ) : null}

      <Reveal delay={0.08}>
        <section className="mt-12 max-w-4xl">
          <h2 className="text-xl font-semibold tracking-tight mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-xl">architecture</span>
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techCategories.map(({ key, label, icon: Icon, color }) => {
              const items = techCategoriesData[key];
              if (!items.length) return null;
              return (
                <div
                  key={key}
                  className="rounded-lg border border-border bg-muted/50 p-5 hover:border-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className={`size-5 ${color}`} aria-hidden="true" />
                    <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      {label}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {items.map((tech) => (
                      <li
                        key={tech}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="size-1.5 rounded-full bg-secondary" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.12}>
        <section className="mt-12 max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Year", value: project.year, icon: Clock },
              { label: "Type", value: project.category, icon: Database },
              { label: "Status", value: "Live", icon: ExternalLink },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border bg-muted/50 p-5 flex items-center gap-3"
              >
                <item.icon className="size-5 text-secondary" aria-hidden="true" />
                <div>
                  <p className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <div
        className={cn(
          "prose prose-neutral mt-14 max-w-4xl",
          "dark:prose-invert",
          "prose-headings:font-semibold prose-headings:tracking-tight",
          "prose-h2:mt-12 prose-h2:text-2xl",
          "prose-h3:mt-8 prose-h3:text-xl",
          "prose-p:text-muted-foreground prose-p:leading-relaxed",
          "prose-ul:text-muted-foreground",
          "prose-li:marker:text-secondary",
          "prose-a:text-secondary prose-a:no-underline hover:prose-a:underline",
          "prose-img:rounded-lg prose-img:border prose-img:border-border",
        )}
      >
        {children}
      </div>

      <Reveal delay={0.2}>
        <footer className="mt-16 max-w-4xl pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to projects
          </Link>
          {project.award && (
            <div className="inline-flex items-center gap-2 rounded-sm bg-secondary px-3 py-1.5 font-mono text-xs font-medium text-secondary-foreground">
              <span className="material-symbols-outlined text-xs">emoji_events</span>
              {project.award}
            </div>
          )}
        </footer>
      </Reveal>
    </article>
  );
}