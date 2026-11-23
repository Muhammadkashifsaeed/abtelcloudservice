export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface BenefitStat {
  label: string;
  percentage: number;
  highlightText: string;
  isPlaceholder?: boolean;
}

export interface TechSkill {
  name: string;
  percentage: number;
  category: "Language" | "Database" | "Cloud" | "Design" | "Framework";
  level: string;
}

// Key benefit progress metrics for "Our Benefits" section (placeholders clearly flagged)
export const BENEFITS_STATS: BenefitStat[] = [
  {
    label: "Enterprise Code Quality & Security",
    percentage: 98,
    highlightText: "Zero critical CVE vulnerabilities & automated SonarQube audit gates",
    isPlaceholder: true,
  },
  {
    label: "On-Time Sprint Velocity",
    percentage: 96,
    highlightText: "Predictable milestone delivery using agile 2-week iteration cycles",
    isPlaceholder: true,
  },
  {
    label: "Cloud Architecture Uptime SLA",
    percentage: 99.9,
    highlightText: "High-availability multi-region cloud deployment on AWS & Azure",
    isPlaceholder: true,
  },
];

// Verified skills requested by client
export const CORE_TECH_SKILLS: TechSkill[] = [
  {
    name: "MySQL Database Engineering",
    percentage: 100,
    category: "Database",
    level: "Expert",
  },
  {
    name: "Graphics Design & Figma UI/UX",
    percentage: 94,
    category: "Design",
    level: "Advanced",
  },
  {
    name: "WordPress & Headless CMS",
    percentage: 81,
    category: "Framework",
    level: "Proficient",
  },
  {
    name: "PHP, Laravel & CodeIgniter",
    percentage: 81,
    category: "Language",
    level: "Proficient",
  },
  {
    name: "Python & Backend Automation",
    percentage: 65,
    category: "Language",
    level: "Intermediate",
  },
  {
    name: "Amazon Web Services (AWS)",
    percentage: 65,
    category: "Cloud",
    level: "Intermediate",
  },
];

// High-level company trust metrics
export const COMPANY_METRICS: StatItem[] = [
  {
    id: "experience",
    label: "Years of Industry Experience",
    value: 10,
    suffix: "+",
    description: "Delivering resilient custom software and web solutions",
    isPlaceholder: false,
  },
  {
    id: "clients",
    label: "Satisfied Global Clients",
    value: 150,
    suffix: "+",
    description: "Across technology, retail, healthcare, and enterprise sectors",
    isPlaceholder: true,
  },
  {
    id: "services",
    label: "Core Technology Disciplines",
    value: 6,
    suffix: "",
    description: "Specialized engineering from web development to UI/UX design",
    isPlaceholder: false,
  },
  {
    id: "support",
    label: "Dedicated Technical Support",
    value: 24,
    suffix: "/7",
    description: "Continuous monitoring, security updates, and infrastructure maintenance",
    isPlaceholder: false,
  },
];
