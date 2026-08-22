import type { Metadata } from "next";

import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of web, mobile, backend, and AI projects I've designed and built end-to-end.",
};

export default function ProjectsPage() {
  return (
    <div className="container-page scroll-mt-nav py-12 sm:py-16 md:py-24 mt-nav">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="End-to-end applications that demonstrate engineering thinking — architecture, implementation, and the problems they solve."
      />

      <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 gap-y-16 sm:gap-y-24">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}