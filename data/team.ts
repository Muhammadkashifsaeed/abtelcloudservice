export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  isPlaceholder: boolean;
}

// User instruction: Hidden by default with SHOW_TEAM = false
export const SHOW_TEAM = false;

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "lead-architect",
    name: "Alex Rivera",
    role: "Principal Solutions Architect",
    department: "Cloud & Infrastructure",
    bio: "Specializing in high-throughput cloud architectures, serverless microservices, and multi-region deployments on AWS.",
    image: "/images/Abner Hill.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    isPlaceholder: true,
  },
  {
    id: "lead-engineer",
    name: "Marcus Vance",
    role: "Senior Full-Stack Engineer",
    department: "Web & API Engineering",
    bio: "Deep expertise in Next.js App Router, TypeScript, Python backend services, and scalable relational database systems.",
    image: "/images/Man-Working-At-Laptop-768x768.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    isPlaceholder: true,
  },
  {
    id: "mobile-lead",
    name: "Elena Rostova",
    role: "Mobile App Lead",
    department: "Mobile Development",
    bio: "Building fluid 60fps iOS and Android applications with Flutter, React Native, and offline-first state synchronization.",
    image: "/images/a-businessman-using.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    isPlaceholder: true,
  },
  {
    id: "design-lead",
    name: "Sophia Sterling",
    role: "Head of Product UI/UX",
    department: "Design Systems",
    bio: "Crafting intuitive user interfaces, design systems, interactive prototypes, and accessible WCAG AA digital products.",
    image: "/images/a-businessman-using-a-smartphone.jpg",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    isPlaceholder: true,
  },
];
