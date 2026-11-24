"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Star, Sparkles, Quote } from "lucide-react";
import { TiltCard } from "@/components/motion/TiltCard";
import { cn } from "@/utils";

export interface ServiceCardProps {
  variant: "service";
  index?: number;
  icon?: React.ReactNode;
  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
  title: string;
  description: string;
  href: string;
  linkText?: string;
  theme?: "light" | "dark";
  badge?: string;
  className?: string;
}

export interface BlogCardProps {
  variant: "blog";
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime?: string;
  category?: string;
  author?: {
    name: string;
    avatar?: string;
  };
  href: string;
  className?: string;
}

export interface FeatureCardProps {
  variant: "feature";
  index?: number;
  icon?: React.ReactNode;
  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
  title: string;
  description: string;
  theme?: "light" | "dark";
  badge?: string;
  className?: string;
}

export interface TestimonialCardProps {
  variant: "testimonial";
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
  rating?: number;
  isPlaceholder?: boolean;
  className?: string;
}

export type UnifiedCardProps =
  | ServiceCardProps
  | BlogCardProps
  | FeatureCardProps
  | TestimonialCardProps;

export function Card(
  props:
    | UnifiedCardProps
    | (React.HTMLAttributes<HTMLDivElement> & { variant?: undefined })
) {
  // 1. Service Card Variant
  if ("variant" in props && props.variant === "service") {
    const {
      index = 1,
      icon,
      imageSrc,
      imageWidth = 50,
      imageHeight = 50,
      title,
      description,
      href,
      linkText = "Learn more",
      theme = "light",
      badge,
      className,
    } = props;

    const formattedIndex = index < 10 ? `0${index}` : `${index}`;
    const isDark = theme === "dark";

    return (
      <TiltCard maxTilt={5} scaleOnHover={1.015} className="h-full">
        <article
          className={cn(
            "group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] p-7 sm:p-8 transition-all duration-300",
            isDark
              ? "border border-white/10 bg-white/[0.05] backdrop-blur-md text-[var(--text-on-dark)] hover:border-[var(--brand-lime)]/50 hover:shadow-[0_20px_45px_rgba(255, 94, 20,0.2)]"
              : "border border-[var(--border-light)] bg-white text-[var(--text-dark)] card-soft-shadow hover:border-black hover:shadow-[0_22px_48px_rgba(15,23,42,0.1)]",
            className
          )}
        >
          {/* Subtle Ambient Gradient Sweep on Hover */}
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
              isDark
                ? "bg-gradient-to-br from-[var(--brand-royal)]/15 via-transparent to-[var(--brand-cyan)]/10"
                : "bg-gradient-to-br from-[var(--primary-light)] via-transparent to-[var(--secondary-light)]"
            )}
          />

          {/* Large Faded Corner Number (01, 02...) */}
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute right-6 top-5 select-none font-heading text-5xl font-black transition-all duration-300 group-hover:scale-105",
              isDark
                ? "text-white/[0.08] group-hover:text-[var(--brand-cyan)]/25"
                : "text-[var(--text-dark)]/[0.08] group-hover:text-[var(--brand-royal)]/20"
            )}
          >
            {formattedIndex}
          </span>

          <div className="relative z-10">
            {/* Top Row: Brand Gradient Icon Container & Optional Badge */}
            <div className="flex items-center justify-between gap-3">
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-2xl p-3 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1 shadow-md",
                  isDark
                    ? "bg-gradient-to-br from-[var(--brand-royal)] to-[var(--brand-cyan)] text-white shadow-black/40"
                    : "bg-gradient-to-br from-[var(--brand-royal)] to-[var(--brand-sky)] text-white shadow-black/15"
                )}
              >
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={title}
                    width={imageWidth}
                    height={imageHeight}
                    className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm brightness-0 invert"
                  />
                ) : icon ? (
                  <div className="text-white transition-transform duration-300 group-hover:scale-110">
                    {icon}
                  </div>
                ) : (
                  <Sparkles className="h-7 w-7 text-white" />
                )}
              </div>

              {badge && (
                <span className="rounded-full bg-[var(--primary-light)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--brand-royal)]">
                  {badge}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-bold tracking-tight">
              <Link
                href={href}
                className={cn(
                  "inline-flex items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)] rounded-md",
                  isDark
                    ? "text-[#F2F6FA] group-hover:text-[var(--brand-cyan)]"
                    : "text-[var(--text-dark)] group-hover:text-[var(--brand-royal)]"
                )}
              >
                {title}
              </Link>
            </h3>

            {/* 2-line Description */}
            <p
              className={cn(
                "mt-3 text-[14.5px] leading-relaxed line-clamp-2",
                isDark ? "text-slate-300" : "text-[var(--text-muted)]"
              )}
            >
              {description}
            </p>
          </div>

          {/* Bottom Action Row: Learn More link + Arrow */}
          <div className="relative z-10 mt-7 pt-5 border-t border-inherit flex items-center justify-between">
            <Link
              href={href}
              className={cn(
                "group/link inline-flex items-center gap-1.5 text-sm font-bold tracking-wide transition-colors",
                isDark
                  ? "text-slate-200 group-hover:text-[var(--brand-cyan)]"
                  : "text-[var(--brand-royal)] group-hover:text-[var(--brand-sky)]"
              )}
            >
              <span>{linkText}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
            </Link>

            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110",
                isDark
                  ? "bg-white/10 text-white group-hover:bg-[var(--brand-cyan)] group-hover:text-[var(--bg-dark)]"
                  : "bg-[var(--surface-muted)] text-[var(--brand-royal)] group-hover:bg-[var(--brand-sky)] group-hover:text-white"
              )}
            >
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>

          {/* Animated Cyan Bottom Border Glow Line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-[var(--brand-royal)] via-[var(--brand-cyan)] to-[var(--brand-sky)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </article>
      </TiltCard>
    );
  }

  // 2. Blog Card Variant
  if ("variant" in props && props.variant === "blog") {
    const {
      title,
      excerpt,
      image,
      date,
      readTime,
      category,
      author,
      href,
      className,
    } = props;

    return (
      <article
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[var(--border-light)] bg-white card-soft-shadow transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--brand-lime)]/50 hover:shadow-[0_22px_48px_rgba(255,94,20,0.2)]",
          className
        )}
      >
        {/* Blog Image with Zoom on Hover */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/70 via-transparent to-transparent opacity-60" />

          {category && (
            <div className="absolute top-4 left-4 z-10">
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md border",
                  category.toLowerCase().includes("strategy") || category.toLowerCase().includes("business")
                    ? "bg-amber-500/90 text-white border-amber-300/40"
                    : category.toLowerCase().includes("growth") || category.toLowerCase().includes("marketing")
                      ? "bg-emerald-600/90 text-white border-emerald-300/40"
                      : "bg-black text-white border-white/20"
                )}
              >
                {category}
              </span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
          <div>
            {/* Meta row: Date + Read time */}
            <div className="flex items-center gap-3 text-xs font-semibold text-[var(--text-muted)]">
              <span>{date}</span>
              {readTime && (
                <>
                  <span className="h-1 w-1 rounded-full bg-slate-400" />
                  <span>{readTime}</span>
                </>
              )}
            </div>

            {/* Title */}
            <h3 className="mt-3 text-lg sm:text-xl font-bold tracking-tight text-[var(--text-dark)] transition-colors group-hover:text-[var(--brand-royal)] line-clamp-2">
              <Link
                href={href}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)] rounded-md"
              >
                {title}
              </Link>
            </h3>

            {/* Excerpt */}
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)] line-clamp-3">
              {excerpt}
            </p>
          </div>

          {/* Footer: Author & Read More Link */}
          <div className="mt-6 flex items-center justify-between border-t border-[var(--border-light)] pt-4">
            {author && (
              <div className="flex items-center gap-2.5">
                {author.avatar ? (
                  <div className="relative h-7 w-7 overflow-hidden rounded-full border border-slate-200">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary-light)] text-xs font-bold text-[var(--brand-royal)]">
                    {author.name.charAt(0)}
                  </div>
                )}
                <span className="text-xs font-bold text-[var(--text-dark)]">
                  {author.name}
                </span>
              </div>
            )}

            <Link
              href={href}
              className="inline-flex items-center gap-1 text-xs font-bold text-[var(--brand-royal)] transition-transform duration-200 group-hover:translate-x-1"
            >
              <span>Read article</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Animated Bottom Border Glow Line */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-[var(--brand-royal)] via-[var(--brand-cyan)] to-[var(--brand-sky)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </article>
    );
  }

  // 3. Feature Card Variant
  if ("variant" in props && props.variant === "feature") {
    const {
      index,
      icon,
      imageSrc,
      imageWidth = 48,
      imageHeight = 48,
      title,
      description,
      theme = "light",
      badge,
      className,
    } = props;

    const isDark = theme === "dark";

    return (
      <div
        className={cn(
          "group relative flex h-full flex-col justify-between rounded-[22px] p-6 sm:p-7 transition-all duration-300",
          isDark
            ? "border border-white/10 bg-white/[0.05] backdrop-blur-md text-[var(--text-on-dark)] hover:border-[var(--brand-lime)]/40 hover:shadow-[0_20px_45px_rgba(255, 94, 20,0.18)]"
            : "border border-[var(--border-light)] bg-white text-[var(--text-dark)] card-soft-shadow hover:border-black",
          className
        )}
      >
        <div>
          <div className="flex items-center justify-between">
            <div
              className={cn(
                "flex h-13 w-13 items-center justify-center rounded-2xl p-2.5 transition-transform duration-300 group-hover:scale-105",
                isDark
                  ? "bg-gradient-to-br from-[var(--brand-royal)] to-[var(--brand-cyan)] text-white shadow-sm"
                  : "bg-[var(--surface-muted)] text-[var(--brand-royal)] border border-[var(--border-light)]"
              )}
            >
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={title}
                  width={imageWidth}
                  height={imageHeight}
                  className="h-8 w-auto object-contain"
                />
              ) : (
                icon
              )}
            </div>

            {index !== undefined && (
              <span
                className={cn(
                  "font-mono text-xs font-bold",
                  isDark ? "text-slate-400" : "text-slate-400"
                )}
              >
                0{index}
              </span>
            )}
          </div>

          <h3 className="mt-5 text-lg font-bold tracking-tight">{title}</h3>
          <p
            className={cn(
              "mt-2 text-sm leading-relaxed",
              isDark ? "text-slate-300" : "text-[var(--text-muted)]"
            )}
          >
            {description}
          </p>
        </div>

        {badge && (
          <div className="mt-4">
            <span className="rounded-full bg-[var(--secondary-light)] px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-[var(--brand-royal)]">
              {badge}
            </span>
          </div>
        )}
      </div>
    );
  }

  // 4. Testimonial Card Variant
  if ("variant" in props && props.variant === "testimonial") {
    const {
      quote,
      author,
      role,
      company,
      avatar,
      rating = 5,
      isPlaceholder = true,
      className,
    } = props;

    return (
      <article
        className={cn(
          "relative flex h-full flex-col justify-between rounded-[24px] border border-[var(--border-light)] bg-white p-7 sm:p-8 card-soft-shadow transition-all duration-300 hover:border-[var(--brand-sky)]/40 hover:-translate-y-1",
          className
        )}
      >
        <div>
          {/* Top Row: 5 Stars Rating & Quote Icon */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-[var(--accent-warm)]">
              {Array.from({ length: rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-[var(--accent-warm)] text-[var(--accent-warm)]"
                />
              ))}
            </div>

            <Quote className="h-7 w-7 text-[var(--brand-sky)] opacity-40" />
          </div>

          {/* Quote Text */}
          <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-[var(--text-dark)] font-medium">
            &ldquo;{quote}&rdquo;
          </p>
        </div>

        {/* Author Details + Placeholder Pill */}
        <div className="mt-6 flex items-center justify-between border-t border-[var(--border-light)] pt-5">
          <div className="flex items-center gap-3">
            {avatar ? (
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-slate-200">
                <Image src={avatar} alt={author} fill className="object-cover" />
              </div>
            ) : (
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand-royal)] to-[var(--brand-sky)] text-sm font-bold text-white shadow-sm">
                {author.charAt(0)}
              </div>
            )}

            <div>
              <h4 className="text-sm font-bold text-[var(--text-dark)]">{author}</h4>
              <p className="text-xs text-[var(--text-muted)]">
                {role} {company && `• ${company}`}
              </p>
            </div>
          </div>

          {isPlaceholder && (
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Verified Client
            </span>
          )}
        </div>
      </article>
    );
  }

  // 5. Default Fallback Card (for backward compatibility)
  const { className, ...domProps } = props as React.HTMLAttributes<HTMLDivElement>;
  return (
    <div
      className={cn(
        "rounded-[20px] border border-[var(--border-light)] bg-white text-[var(--text-dark)] card-soft-shadow transition-all duration-300",
        className
      )}
      {...domProps}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-2 p-6 sm:p-8", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-bold leading-snug tracking-tight text-[var(--text-dark)]", className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-[14.5px] leading-relaxed text-[var(--text-muted)]", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-6 pb-6 sm:px-8 sm:pb-8", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 border-t border-[var(--border-light)] px-6 py-4 sm:px-8 sm:py-5",
        className
      )}
      {...props}
    />
  );
}
