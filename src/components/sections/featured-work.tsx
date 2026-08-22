import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedWork() {
  const projects = getFeaturedProjects();

  return (
    <section className="container-page scroll-mt-nav py-16 sm:py-20 md:py-24 lg:py-32 section-gap">
      <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects I'm proud of"
          description="A few examples of applications I've designed and built end-to-end."
        />
        <Reveal delay={0.1}>
          <Button asChild variant="ghost">
            <Link href="/projects">
              View all projects
              <ArrowUpRight />
            </Link>
          </Button>
        </Reveal>
      </div>

      <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06}>
            <div className={i === 1 ? "lg:mt-24 sm:mt-32" : ""}>
              <ProjectCard project={project} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}