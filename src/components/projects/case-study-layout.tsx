import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
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

export function CaseStudyLayout({
  project,
  metadata,
  children,
}: CaseStudyLayoutProps) {
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
        <div className="mt-10 max-w-3xl">
          <Badge variant="accent">{project.category}</Badge>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            {metadata.summary ?? project.description}
          </p>
        </div>
      </Reveal>

      {metadata.problem ? (
        <Reveal delay={0.1}>
          <aside className="mt-10 max-w-3xl rounded-lg border border-border bg-muted/50 p-6">
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
              The problem
            </p>
            <p className="mt-3 text-muted-foreground">{metadata.problem}</p>
          </aside>
        </Reveal>
      ) : null}

      <div
        className={cn(
          "prose prose-neutral mt-14 max-w-3xl",
          "dark:prose-invert",
          "prose-headings:font-semibold prose-headings:tracking-tight",
          "prose-h2:mt-12 prose-h2:text-2xl",
          "prose-p:text-muted-foreground"
        )}
      >
        {children}
      </div>
    </article>
  );
}