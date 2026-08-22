import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Application Development",
    tagline:
      "Fast, accessible, and scalable web applications built for the modern web.",
    icon: "layout",
    what: "End-to-end product development for the web, from architecture and UI to deployment.",
    problems: [
      "Slow, unscalable legacy frontends",
      "Broken user experiences and poor conversion",
      "Lack of maintainable, type-safe code",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    deliverables: [
      "Production-ready web applications",
      "Responsive, accessible UI systems",
      "CI/CD and deployment on Vercel",
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile Application Development",
    tagline: "Cross-platform mobile apps from a single codebase.",
    icon: "smartphone",
    what: "Native-feeling iOS and Android applications built with React Native and Expo.",
    problems: [
      "Separate codebases and double maintenance cost",
      "Apps that fail on low-end devices",
      "Frustrating offline and sync experiences",
    ],
    technologies: ["React Native", "Expo", "Firebase"],
    deliverables: [
      "iOS and Android apps from one codebase",
      "Store-ready release builds",
      "Push notifications and auth flows",
    ],
  },
  {
    slug: "backend-development",
    title: "Backend & API Development",
    tagline: "Secure, well-documented APIs and services that scale.",
    icon: "server",
    what: "REST APIs, authentication, database design, and integrations.",
    problems: [
      "Unreliable or undocumented APIs",
      "Poor data modeling and slow queries",
      "Missing auth, validation, and monitoring",
    ],
    technologies: ["Python", "FastAPI", "Node.js", "REST APIs"],
    deliverables: [
      "REST APIs with OpenAPI docs",
      "Auth, authorization, and data access",
      "PostgreSQL / Firebase data design",
    ],
  },
  {
    slug: "database-management",
    title: "Database Management",
    tagline: "Reliable data design and management with PostgreSQL and Firebase.",
    icon: "server",
    what: "Schema design, queries, migrations, and secure access for your data.",
    problems: [
      "Messy or poorly structured data",
      "Slow queries and scaling pain",
      "Unclear access and security controls",
    ],
    technologies: ["PostgreSQL", "Firebase", "SQL"],
    deliverables: [
      "Normalized schema design",
      "Fast, indexed queries and migrations",
      "Secure, role-based data access",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}