import type { Project } from "@/types";

// Real projects from Moses Joseph Benjamin's portfolio.
// `image` paths point to /public/projects — drop actual screenshots there when ready.
export const projects: Project[] = [
  {
    slug: "snapnews",
    title: "SnapNews",
    description:
      "A mobile app that delivers summarized, concise, and relevant news — winner of the $6,000 Ignition Grand prize.",
    category: "Mobile · AI / Data",
    technologies: ["React Native", "Expo", "Python", "REST API", "Firebase"],
    image: "/projects/snapnews.png",
    featured: true,
    year: "2025",
    award: "$6,000 Ignition Grand winner",
  },
  {
    slug: "medivaults",
    title: "Medivaults",
    description:
      "A secure, encrypted platform for storing and sharing medical records, with appointment booking for patients, doctors, and hospitals.",
    category: "Web · Mobile · Backend",
    technologies: [
      "React Native",
      "Expo",
      "Next.js",
      "Python",
      "REST API",
      "PostgreSQL",
    ],
    image: "/projects/medivaults.png",
    featured: true,
    year: "2025",
  },
  {
    slug: "sudagospel",
    title: "SudaGospel",
    description:
      "A modern web and mobile application for streaming gospel music, with artist management, content publishing, and cross-platform mobile support.",
    category: "Web · Mobile · Backend",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "React Router",
      "TanStack Query",
      "Zod",
      "React Hook Form",
      "Supabase",
      "Capacitor",
    ],
    image: "/projects/sudagospel.png",
    featured: true,
    year: "2025",
  },
  {
    slug: "pahukeni-hotel",
    title: "Pahukeni Pension Hotel Management System",
    description:
      "A web application that helps Pahukeni Pension Hotel in Namibia manage hotel operations, bookings, and customer data efficiently.",
    category: "Web · Backend",
    technologies: ["Next.js", "React", "TypeScript", "REST API", "PostgreSQL"],
    image: "/projects/pahukeni-hotel.png",
    featured: true,
    year: "2024",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
