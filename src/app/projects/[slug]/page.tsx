import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyLayout } from "@/components/projects/case-study-layout";
import { getProject } from "@/data/projects";
import {
  getCaseStudySlugs,
  caseStudyExists,
} from "@/lib/case-studies";
import { siteConfig } from "@/lib/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `${siteConfig.url}/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: `${siteConfig.url}/projects/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  if (!caseStudyExists(slug) || !getProject(slug)) {
    notFound();
  }

  const project = getProject(slug)!;
  const {
    default: Content,
    metadata: caseStudyMetadata,
  } = await import(`@/content/projects/${slug}.mdx`);

  return (
    <CaseStudyLayout project={project} metadata={caseStudyMetadata}>
      <Content />
    </CaseStudyLayout>
  );
}