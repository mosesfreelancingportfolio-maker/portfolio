export const siteConfig = {
  name: "Moses Joseph Benjamin",
  shortName: "MosesJP",
  role: "Web & Mobile App Developer",
  description:
    "Computer science (software) engineering graduate and full-stack developer building web and mobile applications that solve real-world problems — specializing in web applications, mobile applications, backend & API development, and database management with PostgreSQL and Firebase.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
    "http://localhost:3000",
  email: "mosesfreelancingportfolio@gmail.com",
  location: "Namibia · Available worldwide",
  nav: [
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ] as const,
  social: [
    { title: "GitHub", href: "https://github.com/mosesfreelancingportfolio-maker" },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/moses-joseph-ba78291b7",
    },
  ] as const,
  skills: {
    frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    backend: ["Python", "FastAPI", "Node.js", "REST APIs"],
    mobile: ["React Native", "Expo"],
    database: ["PostgreSQL", "Firebase"],
    devops: ["Git", "GitHub", "Docker", "Vercel"],
  } as const,
};

export type SiteConfig = typeof siteConfig;
