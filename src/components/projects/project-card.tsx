import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Trophy, Image as ImageIcon } from "lucide-react";

import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  const initials = project.title
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center flex-col gap-4 bg-gradient-to-br from-muted to-muted/80">
            <div className="flex items-center justify-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 border border-border/50">
              <ImageIcon className="size-5 text-muted-foreground" aria-hidden="true" />
              <span className="font-mono text-sm text-muted-foreground">Screenshot coming soon</span>
            </div>
            <div className="text-center px-4">
              <span className="inline-block bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 font-display text-4xl font-bold text-foreground border border-border/50">
                {initials}
              </span>
              <p className="mt-2 text-sm text-muted-foreground font-mono">{project.title}</p>
            </div>
          </div>
        )}
        {project.award ? (
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-sm bg-secondary px-2.5 py-1.5 font-mono text-xs font-medium text-secondary-foreground shadow-sm">
            <Trophy className="size-3.5" aria-hidden="true" />
            {project.award}
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <span className="mb-2 block font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {project.category}
            </span>
            <h3 className="mb-2 font-display text-2xl font-medium text-foreground transition-colors duration-300 group-hover:text-secondary">
              {project.title}
            </h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
          <ArrowUpRight
            className="size-5 shrink-0 -translate-x-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}