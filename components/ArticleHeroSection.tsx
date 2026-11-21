"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, Clock, Sparkles } from "lucide-react";
import { usePageReady } from "@/components/PageLoader";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export interface ArticleHeroSectionProps {
  title: string;
  category: string;
  backgroundImage: string;
  date: string;
  isoDate: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    role?: string;
  };
  breadcrumbsTitle?: string;
}

export function ArticleHeroSection({
  title,
  category,
  backgroundImage,
  date,
  isoDate,
  readTime,
  author,
  breadcrumbsTitle,
}: ArticleHeroSectionProps) {
  const isReady = usePageReady();

  return (
    <section
      aria-label={`${title} Banner`}
      className="relative flex min-h-[440px] w-full items-center overflow-hidden bg-gradient-to-b from-[#070A1E] via-[#0A1032] to-[#070A1E] py-16 sm:min-h-[480px] sm:py-20 lg:min-h-[520px] lg:py-24 text-white"
    >
      {/* 1. Dynamic Featured Image Background with Smooth Reveal */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={isReady ? { scale: 1 } : { scale: 1.06 }}
        transition={{ duration: 1.3, ease: LUXURY_EASE }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Deep Obsidian Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A1E]/90 via-[#0A1032]/78 to-[#070A1E]/90" />
      </motion.div>

      {/* 2. Ambient Color Glow Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-16 h-96 w-96 -translate-y-1/2 rounded-full bg-[#00D4FF]/16 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[#2563EB]/18 blur-[130px]"
      />

      {/* 3. Foreground Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Breadcrumb Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: LUXURY_EASE }}
            aria-label="Article Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-slate-300 sm:text-sm"
          >
            <Link
              href="/"
              className="text-slate-300 transition-colors duration-200 hover:text-[#00D4FF]"
            >
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-500" />
            <Link
              href="/blog"
              className="text-slate-300 transition-colors duration-200 hover:text-[#00D4FF]"
            >
              Blog
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-500" />
            <span className="text-[#00D4FF] line-clamp-1 max-w-[280px] sm:max-w-none">
              {breadcrumbsTitle || title}
            </span>
          </motion.nav>

          {/* Category Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: LUXURY_EASE }}
            className="mt-6"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#00D4FF]/15 via-[#2563EB]/10 to-[#00D4FF]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#00D4FF] backdrop-blur-md shadow-[0_2px_14px_rgba(0,212,255,0.15)]">
              <Sparkles className="h-3.5 w-3.5 text-[#00D4FF]" />
              <span>{category}</span>
            </span>
          </motion.div>

          {/* Article Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14, ease: LUXURY_EASE }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.12]"
          >
            {title}
          </motion.h1>

          {/* Metadata Row: Author Avatar, Name, Date, Read Time */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: LUXURY_EASE }}
            className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-white/[0.08] pt-6"
          >
            {/* Author Profile */}
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#00D4FF]/40 shadow-md">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{author.name}</p>
                <p className="text-xs text-slate-400">
                  {author.role || "Senior Solutions Architect"}
                </p>
              </div>
            </div>

            <span className="hidden sm:inline-block h-4 w-px bg-white/20" />

            {/* Publication Date */}
            <div className="flex items-center gap-1.5 text-xs text-slate-300 sm:text-sm">
              <Calendar className="h-4 w-4 text-[#00D4FF]" />
              <time dateTime={isoDate}>{date}</time>
            </div>

            <span className="hidden sm:inline-block h-4 w-px bg-white/20" />

            {/* Estimated Read Time */}
            <div className="flex items-center gap-1.5 text-xs text-slate-300 sm:text-sm">
              <Clock className="h-4 w-4 text-[#00D4FF]" />
              <span>{readTime}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
