"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles, ArrowRight, Calendar, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { FloatingOrb } from "@/components/motion/FloatingShapes";
import { cn } from "@/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroBannerProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string | React.ReactNode;
  highlightWord?: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
  align?: "left" | "center";
  cta?: {
    text: string;
    href: string;
  };
  meta?: {
    date?: string;
    readTime?: string;
    author?: {
      name: string;
      avatar?: string;
      role?: string;
    };
  };
  className?: string;
}

export function PageHeroBanner({
  badge,
  badgeIcon,
  title,
  highlightWord,
  description,
  breadcrumbs,
  backgroundImage,
  align = "center",
  cta,
  meta,
  className,
}: PageHeroBannerProps) {
  const isLeft = align === "left";

  // Highlight word in string title if requested
  const renderTitle = () => {
    if (typeof title !== "string" || !highlightWord) {
      return title;
    }
    const parts = title.split(new RegExp(`(${highlightWord})`, "gi"));
    return parts.map((part, idx) =>
      part.toLowerCase() === highlightWord.toLowerCase() ? (
        <span key={idx} className="heading-curved-underline text-[var(--brand-cyan)]">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section
      aria-label="Page Banner"
      className={cn(
        "relative w-full overflow-hidden section-dark bg-gradient-to-b from-[#071428] via-[#0B1F3A] to-[#071428] py-16 sm:py-20 lg:py-24 text-[var(--text-on-dark)] border-b border-[var(--brand-cyan)]/20",
        className
      )}
    >
      {/* Background Image (if supplied) */}
      {backgroundImage && (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <Image
            src={backgroundImage}
            alt="Page hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071428]/95 via-[#0B1F3A]/90 to-[#071428]/95" />
        </div>
      )}

      {/* Layered Floating Glowing Ambient Shapes */}
      <FloatingOrb
        color="royal"
        size={420}
        className="-top-28 -left-24 opacity-35"
      />
      <FloatingOrb
        color="cyan"
        size={380}
        className="-bottom-24 -right-20 opacity-30"
      />

      {/* Subtle Dot Matrix Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px] opacity-60"
      />

      {/* Cyan Glow Line at Section Bottom */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--brand-cyan)]/60 to-transparent"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex flex-col",
            isLeft ? "items-start text-left max-w-4xl" : "items-center text-center max-w-3xl mx-auto"
          )}
        >
          {/* Breadcrumbs Navigation */}
          <Reveal variant="fade-down">
            <nav
              aria-label="Breadcrumbs"
              className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-slate-300 backdrop-blur-md"
            >
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <React.Fragment key={`${crumb.label}-${idx}`}>
                    {idx > 0 && <ChevronRight className="h-3 w-3 text-slate-400" aria-hidden="true" />}
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="hover:text-[var(--brand-cyan)] transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="font-semibold text-white">{crumb.label}</span>
                    )}
                  </React.Fragment>
                );
              })}
            </nav>
          </Reveal>

          {/* Optional Badge */}
          {badge && (
            <Reveal variant="fade-down" delay={0.06} className="mt-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-cyan)]/35 bg-[var(--brand-cyan)]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-cyan)] backdrop-blur-md shadow-[0_2px_14px_rgba(34,199,242,0.2)]">
                {badgeIcon || <Sparkles className="h-3 w-3 text-[var(--brand-cyan)]" />}
                <span>{badge}</span>
              </span>
            </Reveal>
          )}

          {/* Page Heading (Fade Left / Fade Up) */}
          <Reveal variant={isLeft ? "fade-left" : "fade-up"} delay={0.1} className="mt-5">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-[1.12] text-white">
              {renderTitle()}
            </h1>
          </Reveal>

          {/* Subtitle / Description (Fade Left / Fade Up) */}
          {description && (
            <Reveal variant={isLeft ? "fade-left" : "fade-up"} delay={0.16} className="mt-4 max-w-2xl">
              <p className="text-base sm:text-lg leading-relaxed text-slate-200">
                {description}
              </p>
            </Reveal>
          )}

          {/* Blog Meta Data (Date, Read Time, Author) */}
          {meta && (
            <Reveal variant="fade-up" delay={0.2} className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
              {meta.date && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-[var(--brand-cyan)]" />
                  <span>{meta.date}</span>
                </div>
              )}
              {meta.readTime && (
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-[var(--brand-cyan)]" />
                  <span>{meta.readTime}</span>
                </div>
              )}
              {meta.author && (
                <div className="flex items-center gap-2">
                  {meta.author.avatar ? (
                    <div className="relative h-6 w-6 overflow-hidden rounded-full border border-white/20">
                      <Image
                        src={meta.author.avatar}
                        alt={meta.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand-royal)] text-[11px] font-bold text-white">
                      {meta.author.name.charAt(0)}
                    </div>
                  )}
                  <span className="font-semibold text-white">{meta.author.name}</span>
                </div>
              )}
            </Reveal>
          )}

          {/* Optional Call to Action Button */}
          {cta && (
            <Reveal variant="fade-up" delay={0.22} className="mt-8">
              <Link
                href={cta.href}
                className="btn-sheen group/btn relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[var(--brand-royal)] to-[var(--brand-sky)] px-8 text-sm font-bold text-white shadow-[0_4px_18px_rgba(42,103,174,0.35)] transition-all duration-300 hover:shadow-[0_8px_26px_rgba(34,199,242,0.35)] hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>{cta.text}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </span>
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
