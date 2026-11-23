"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { cn } from "@/utils";

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  tags: string[];
  client: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "project-1",
    title: "High-Frequency Media Streaming Engine",
    category: "Cloud Infrastructure",
    description: "Architected multi-tier content delivery network with sub-second latency and automated transcoder autoscaling.",
    imageSrc: "/images/TVstartup1.png",
    tags: ["Next.js", "AWS Cloud", "Node.js", "Redis"],
    client: "Media Streaming Client",
  },
  {
    id: "project-2",
    title: "Enterprise Multi-Vendor Cloud Hub",
    category: "Web Development",
    description: "Custom headless marketplace portal with real-time analytics, automated vendor payouts, and role-based access.",
    imageSrc: "/images/TVstartup2.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe Connect"],
    client: "Enterprise SaaS Client",
  },
  {
    id: "project-3",
    title: "Next-Gen Fintech Portal & Mobile Hub",
    category: "Mobile & Web",
    description: "Unified cross-platform digital banking portal with biometric authentication and PCI-DSS compliance.",
    imageSrc: "/images/TVstartup3.png",
    tags: ["Flutter", "Python FastAPI", "Docker", "Zero-Trust"],
    client: "Fintech Venture Client",
  },
  {
    id: "project-4",
    title: "Headless E-Commerce & Inventory Sync",
    category: "E-Commerce",
    description: "Global digital storefront handling high peak concurrency with sub-100ms API response times.",
    imageSrc: "/images/TVstartup4.png",
    tags: ["Next.js", "Shopify Plus", "GraphQL", "Tailwind CSS"],
    client: "Retail Enterprise Client",
  },
];

export function PortfolioSection() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Cloud Infrastructure", "Web Development", "Mobile & Web", "E-Commerce"];

  const filteredProjects =
    filter === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === filter);

  return (
    <section
      aria-label="Selected Engineering Work and Case Studies"
      className="relative w-full section-light bg-[var(--bg-light)] py-20 sm:py-24 lg:py-28 overflow-hidden text-[var(--text-dark)]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal variant="fade-down">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary-light)] px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-royal)]">
                <Sparkles className="h-3.5 w-3.5 text-[var(--primary)]" />
                <span>Selected Client Deliveries</span>
              </span>
            </Reveal>

            <Reveal variant="fade-up" delay={0.1} className="mt-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-dark)] sm:text-4xl lg:text-[46px] leading-[1.12]">
                Proven Engineering in{" "}
                <span className="heading-curved-underline text-[var(--brand-royal)]">
                  Production Environments
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal variant="fade-up" delay={0.2}>
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-royal)] transition-transform hover:translate-x-1"
            >
              <span>Explore all templates &amp; showcase</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer",
                filter === cat
                  ? "bg-gradient-to-r from-[var(--brand-royal)] to-[var(--brand-sky)] text-white shadow-md shadow-blue-900/15"
                  : "border border-[var(--border-light)] bg-white text-[var(--text-muted)] hover:border-[var(--brand-sky)]/50 hover:text-[var(--text-dark)]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2x2 Grid of Case Study Cards with 'View' cursor */}
        <StaggerGroup
          stagger={0.1}
          className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10"
        >
          {filteredProjects.map((project) => (
            <StaggerItem key={project.id} className="h-full">
              <Link
                href="/gallery"
                data-cursor="view"
                className="group relative block h-full overflow-hidden rounded-[26px] border border-[var(--border-light)] bg-white card-soft-shadow transition-all duration-500 hover:border-[var(--brand-sky)]/50 hover:shadow-[0_25px_50px_rgba(42,103,174,0.18)] hover:-translate-y-2 cursor-pointer"
              >
                {/* Project Image Frame with Zoom on Hover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071428]/85 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-85" />

                  {/* Corner Category Chip */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--brand-royal)] shadow-sm backdrop-blur-md border border-[var(--brand-sky)]/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover "View Project" Arrow Icon Pill in Corner */}
                  <div className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--brand-royal)] shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--brand-cyan)] group-hover:text-[#0B1F3A]">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                    <span>{project.client}</span>
                    <span className="font-mono text-[11px] text-[var(--brand-royal)] font-bold">Case Study</span>
                  </div>

                  <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-dark)] transition-colors group-hover:text-[var(--brand-royal)]">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-muted)] line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[var(--border-light)]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-[var(--surface-muted)] px-2.5 py-1 text-[11px] font-bold text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cyan Bottom Hover Glow Line */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-[var(--brand-royal)] via-[var(--brand-cyan)] to-[var(--brand-sky)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
