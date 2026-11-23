"use client";

import React, { useState } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiGooglecloud,
  SiDocker,
  SiWordpress,
  SiShopify,
  SiFlutter,
  SiTailwindcss,
  SiPostgresql,
  SiFigma,
  SiKubernetes,
  SiRedis,
  SiGraphql,
  SiMongodb,
  SiSwift,
  SiKotlin,
  SiPhp,
  SiLaravel,
  SiCodeigniter,
  SiMysql,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { Cpu, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/utils";

interface TechItem {
  name: string;
  role: string;
  icon: React.ElementType;
  desc: string;
  badge: string;
}

const TECH_CATEGORIES: Record<string, TechItem[]> = {
  "Backend & APIs": [
    {
      name: "PHP, Laravel & CodeIgniter",
      role: "Enterprise MVC Web Systems",
      icon: SiLaravel,
      desc: "Robust RESTful APIs, high-velocity business logic, and payment processing.",
      badge: "81% Proficiency",
    },
    {
      name: "Python (FastAPI & Django)",
      role: "High-Speed APIs & Automation",
      icon: SiPython,
      desc: "Asynchronous APIs, data scraping, machine learning integrations & pipelines.",
      badge: "65% Proficiency",
    },
    {
      name: "MySQL & Database Architecture",
      role: "Relational Data Management",
      icon: SiMysql,
      desc: "High-throughput schema design, replication, query tuning & 100% data integrity.",
      badge: "100% Mastered",
    },
    {
      name: "Node.js & TypeScript",
      role: "Event-Driven Microservices",
      icon: SiNodedotjs,
      desc: "High-concurrency async services, WebSocket realtime channels, and serverless.",
      badge: "High Concurrency",
    },
  ],
  "Frontend & Web": [
    {
      name: "Next.js 16 (App Router)",
      role: "Enterprise React Framework",
      icon: SiNextdotjs,
      desc: "React Server Components, dynamic Edge routing, and zero-bundle hydration.",
      badge: "Core Stack",
    },
    {
      name: "React 19",
      role: "Component UI Architecture",
      icon: SiReact,
      desc: "Concurrent rendering, actions, and optimized reconciliation.",
      badge: "Primary",
    },
    {
      name: "TypeScript",
      role: "Type-Safe Contracts",
      icon: SiTypescript,
      desc: "Strict type safety across client, server, and API interfaces.",
      badge: "Strict Mode",
    },
    {
      name: "Tailwind CSS v4",
      role: "Utility Styling Engine",
      icon: SiTailwindcss,
      desc: "Sub-millisecond CSS builds with clean CSS variable tokens.",
      badge: "Responsive",
    },
  ],
  "Mobile Apps": [
    {
      name: "Flutter",
      role: "Cross-Platform Framework",
      icon: SiFlutter,
      desc: "High-velocity 60fps mobile applications for iOS and Android.",
      badge: "Cross-Platform",
    },
    {
      name: "Swift & SwiftUI",
      role: "Native iOS Development",
      icon: SiSwift,
      desc: "Bespoke iOS applications with Apple ecosystem integration.",
      badge: "Native iOS",
    },
    {
      name: "Kotlin & Jetpack Compose",
      role: "Native Android Systems",
      icon: SiKotlin,
      desc: "Modern, secure Android architectures adhering to Material Design 3.",
      badge: "Native Android",
    },
    {
      name: "React Native",
      role: "Shared Mobile Codebase",
      icon: SiReact,
      desc: "Shared React architectures with native bridge performance.",
      badge: "Universal",
    },
  ],
  "Cloud & DevOps": [
    {
      name: "Amazon Web Services (AWS)",
      role: "Cloud Infrastructure & S3",
      icon: FaAws,
      desc: "ECS, Lambda serverless, RDS MySQL, S3 storage, and CloudFront CDN.",
      badge: "65% Certified",
    },
    {
      name: "Google Cloud Platform",
      role: "Cloud & AI Infrastructure",
      icon: SiGooglecloud,
      desc: "Cloud Run containers, Kubernetes Engine, and BigQuery analytics.",
      badge: "Enterprise",
    },
    {
      name: "Docker & Containers",
      role: "Containerization",
      icon: SiDocker,
      desc: "Immutable container images for reproducible CI/CD pipelines.",
      badge: "DevOps",
    },
    {
      name: "Kubernetes",
      role: "Orchestration & Autoscaling",
      icon: SiKubernetes,
      desc: "High-availability container clustering for zero-downtime scaling.",
      badge: "Scale",
    },
  ],
  "E-Commerce & CMS": [
    {
      name: "WordPress (Headless & Custom)",
      role: "Enterprise Content Systems",
      icon: SiWordpress,
      desc: "Custom theme engineering, high-security configurations & REST integrations.",
      badge: "81% Expertise",
    },
    {
      name: "Graphics & UI/UX Design (Figma)",
      role: "Visual Systems & Prototyping",
      icon: SiFigma,
      desc: "Figma design systems, vector art, UI kits, and click-through prototypes.",
      badge: "94% Precision",
    },
    {
      name: "Shopify Plus",
      role: "Headless E-Commerce Platform",
      icon: SiShopify,
      desc: "Storefront API, high-converting checkout funnels, and app extensions.",
      badge: "Commerce",
    },
    {
      name: "GraphQL & RESTful Middleware",
      role: "API Integration Layers",
      icon: SiGraphql,
      desc: "Predictable API querying, schema stitching, and microservice bridges.",
      badge: "Integration",
    },
  ],
};

export function TechStackSection() {
  const [activeTab, setActiveTab] = useState<string>("Backend & APIs");

  const categories = Object.keys(TECH_CATEGORIES);

  return (
    <section
      aria-label="Technology Stack and Tools"
      className="relative w-full section-dark-2 bg-[#071428] py-20 sm:py-24 lg:py-28 text-[var(--text-on-dark)] overflow-hidden border-b border-[var(--brand-cyan)]/20"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Reveal variant="fade-down">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-cyan)]/35 bg-[var(--brand-cyan)]/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-cyan)] backdrop-blur-md shadow-[0_2px_14px_rgba(34,199,242,0.2)]">
              <Cpu className="h-3 w-3" />
              <span>Modern Technology Ecosystem</span>
            </span>
          </Reveal>

          <Reveal variant="fade-up" delay={0.1} className="mt-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[46px] leading-[1.12]">
              Best-In-Class Tools,{" "}
              <span className="heading-curved-underline text-[var(--brand-cyan)]">
                Zero Legacy Bloat
              </span>
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={0.16} className="mt-4">
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
              We engineer with proven languages and platforms—from Python, PHP, Laravel, and MySQL to Next.js, Flutter, and AWS Cloud—guaranteeing long-term stability and code ownership.
            </p>
          </Reveal>
        </div>

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer",
                  isActive
                    ? "bg-gradient-to-r from-[var(--brand-royal)] to-[var(--brand-sky)] text-white shadow-[0_4px_16px_rgba(42,103,174,0.4)] scale-105"
                    : "border border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:text-white"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Tabbed Tech Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TECH_CATEGORIES[activeTab].map((tech) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.name}
                className="group relative flex flex-col justify-between rounded-[24px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-300 hover:border-[var(--brand-cyan)]/50 hover:bg-white/[0.07] hover:shadow-[0_20px_42px_rgba(34,199,242,0.18)] hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--brand-royal)] to-[var(--brand-cyan)] p-2.5 text-white shadow-md shadow-blue-950/40 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--brand-cyan)] border border-white/10">
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white transition-colors group-hover:text-[var(--brand-cyan)]">
                    {tech.name}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-[var(--brand-sky)]">
                    {tech.role}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {tech.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 group-hover:text-white">
                  <span>Production verified</span>
                  <span className="text-emerald-400">✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
