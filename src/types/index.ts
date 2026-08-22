export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  featured: boolean;
  year?: string;
  award?: string;
};

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  what: string;
  problems: string[];
  technologies: string[];
  deliverables: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ContactFormValues = {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  projectDescription: string;
};