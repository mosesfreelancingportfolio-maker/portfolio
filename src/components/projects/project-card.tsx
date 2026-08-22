import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";

import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-ring/50"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center font-mono text-sm text-muted-foreground">
            Screenshot coming soon
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
          <div>
            <span className="mb-2 block font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {project.category}
            </span>
            <h3 className="mb-2 font-display text-2xl font-medium text-foreground transition-colors duration-300 group-hover:text-secondary">
              {project.title}
            </h3>
            <p className="font-sans text-sm text-muted-foreground">
              {project.description}
            </p>
          </div>
          <ArrowUpRight
            className="size-5 shrink-0 -translate-x-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            aria-hidden="true"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-sm bg-secondary px-2 py-1 font-mono text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}