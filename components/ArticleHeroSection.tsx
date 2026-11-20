"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, Clock, Sparkles } from "lucide-react";
import { usePageReady } from "@/components/PageLoader";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

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
      className="relative flex min-h-[460px] w-full items-center overflow-hidden bg-[#0A0E33] py-16 sm:min-h-[520px] sm:py-20 lg:min-h-[580px] lg:py-24"
    >
      {/* 1. Dynamic Featured Image Background with Smooth Reveal & High Clarity */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={isReady ? { scale: 1 } : { scale: 1.08 }}
        transition={{ duration: 1.3, ease: PREMIUM_EASE }}
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

        {/* Balanced Tech Gradients for maximum image clarity while guaranteeing 100% text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A26]/94 via-[#0A0E33]/75 to-[#070A26]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E33] via-transparent to-[#070A26]/60" />
      </motion.div>

      {/* 2. Ambient Color Glow Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-16 h-96 w-96 -translate-y-1/2 rounded-full bg-[#00D4FF]/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[#246BFD]/22 blur-[130px]"
      />

      {/* 3. Foreground Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Breadcrumb Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: PREMIUM_EASE }}
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium text-slate-300 sm:text-sm"
          >
            <Link
              href="/"
              className="text-slate-300 transition-colors hover:text-[#00D4FF]"
            >
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link
              href="/blog"
              className="text-slate-300 transition-colors hover:text-[#00D4FF]"
            >
              Blog
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#00D4FF] truncate max-w-[220px] sm:max-w-none">
              {breadcrumbsTitle || title}
            </span>
          </motion.nav>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: PREMIUM_EASE }}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/40 bg-[#00D4FF]/12 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#00D4FF] backdrop-blur-md shadow-[0_2px_12px_rgba(0,212,255,0.25)]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#00D4FF]" />
            <span>{category}</span>
          </motion.div>

          {/* Main Article Title */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: PREMIUM_EASE }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[50px] leading-[1.18] drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
          >
            {title}
          </motion.h1>

          {/* Author and Publishing Meta Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: PREMIUM_EASE }}
            className="mt-7 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-200"
          >
            {/* Author Profile */}
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-[#00D4FF] shadow-[0_0_12px_rgba(0,212,255,0.35)]">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-bold text-white">{author.name}</span>
                {author.role && (
                  <span className="ml-1.5 text-xs text-sky-300 font-medium hidden sm:inline">
                    • {author.role}
                  </span>
                )}
              </div>
            </div>

            <span className="text-white/40" aria-hidden="true">•</span>

            {/* Published Date */}
            <span className="inline-flex items-center gap-1.5 text-slate-200 font-medium">
              <Calendar className="h-4 w-4 text-[#00D4FF]" aria-hidden="true" />
              <time dateTime={isoDate}>{date}</time>
            </span>

            <span className="text-white/40" aria-hidden="true">•</span>

            {/* Read Time */}
            <span className="inline-flex items-center gap-1.5 text-slate-200 font-medium">
              <Clock className="h-4 w-4 text-[#00D4FF]" aria-hidden="true" />
              <span>{readTime}</span>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
