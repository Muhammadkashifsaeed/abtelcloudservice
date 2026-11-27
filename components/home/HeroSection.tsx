"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  Layers,
  Network,
  Palette,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Store,
  Zap,
} from "lucide-react";
import {
  SiPython,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiWordpress,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { Reveal } from "@/components/motion/Reveal";

const CALENDLY_LINK = "https://calendly.com/abtelcloud/30min";

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement | null>(null);

  // Smooth mouse coordinates for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      mouseX.set((e.clientX - rect.left - centerX) / 35);
      mouseY.set((e.clientY - rect.top - centerY) / 35);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      aria-label="Abtel Cloud Services Hero Banner"
      className="relative min-h-[90vh] w-full overflow-hidden section-light bg-gradient-to-b from-[#FFFFFF] via-[#F4F8FC] to-[#EBF3FA] text-[var(--text-dark)] py-16 sm:py-20 lg:py-24 flex flex-col justify-center border-b border-[var(--border-light)]"
    >
      {/* 1. Clean Luminous Ambient Background Glows (No chaotic particles) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Soft, elegant radial washes */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -left-24 h-[550px] w-[550px] rounded-full bg-[var(--brand-royal)]/8 blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/4 -right-24 h-[500px] w-[500px] rounded-full bg-[var(--brand-cyan)]/12 blur-[130px]"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 left-1/3 h-[450px] w-[450px] rounded-full bg-[var(--brand-sky)]/8 blur-[130px]"
        />
      </div>

      {/* Subtle Dot Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:36px_36px] opacity-60"
      />

      {/* 2. Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline, Eyebrow, Social Proof & CTAs */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Eyebrow Tech Badge */}
            <Reveal variant="fade-down">
              <span className="eyebrow-premium">
                San Antonio, Texas &bull; Software &amp; Cloud Architects
              </span>
            </Reveal>

            {/* Bold Headline (Clamp 2.75rem to 5.5rem) with Word-by-Word Reveal */}
            <div className="mt-4 overflow-hidden">
              <Reveal variant="fade-up" delay={0.08}>
                <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text-dark)] sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] leading-[1.08]">
                  Engineering High-Performance{" "}
                  <span
                    className="relative inline-block"
                    style={{
                      fontFamily: "var(--font-serif, 'Georgia', serif)",
                      fontStyle: "italic",
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #E11D48, #fb7185)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Software
                  </span>{" "}
                  &amp; Cloud Platforms
                </h1>
              </Reveal>
            </div>

            {/* Subtitle with Clear Tech Stack Mentions */}
            <Reveal variant="fade-up" delay={0.16}>
              <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-[var(--text-muted)]">
                Abtel Cloud Services builds fast Next.js &amp; React web systems, native mobile apps, robust Python &amp; PHP/Laravel backends, MySQL architectures, and scalable AWS cloud solutions.
              </p>
            </Reveal>

            {/* CTAs: 2 Magnetic Buttons */}
            <Reveal variant="fade-up" delay={0.24} className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-sheen group/btn relative inline-flex h-[52px] items-center justify-center overflow-hidden rounded-lg bg-[var(--brand-lime)] px-8 text-sm font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-[var(--brand-lime-hover)] hover:shadow-sm hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ring-1 ring-inset ring-white/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </span>
              </Link>

              <Link
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full border-2 border-slate-300 bg-white px-7 text-sm font-bold text-[var(--text-dark)] shadow-xs transition-all duration-300 hover:border-[var(--brand-royal)] hover:text-[var(--brand-royal)] hover:bg-slate-50 hover:-translate-y-0.5 active:scale-95"
              >
                <Calendar className="h-4 w-4 text-[var(--brand-royal)]" />
                <span>Book 30-Min Call</span>
              </Link>
            </Reveal>

            {/* Social Proof & Rating Trust Row (Tekzo Style) */}
            <Reveal variant="fade-up" delay={0.3} className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-600 to-red-500 text-xs font-bold text-white ring-2 ring-white shadow-xs">
                  TX
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-700 to-rose-500 text-xs font-bold text-white ring-2 ring-white shadow-xs">
                  NY
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-teal-500 text-xs font-bold text-white ring-2 ring-white shadow-xs">
                  CA
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-600 to-orange-500 text-xs font-bold text-white ring-2 ring-white shadow-xs">
                  FL
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-[var(--accent-warm)] text-[var(--accent-warm)]"
                    />
                  ))}
                  <span className="ml-1 text-xs font-bold text-[var(--text-dark)]">4.9 / 5.0</span>
                </div>
                <p className="text-[11.5px] font-medium text-[var(--text-muted)]">
                  Trusted by 150+ growing businesses &amp; enterprise leaders
                </p>
              </div>
            </Reveal>

            {/* Thin Row of 3 Trust Points */}
            <Reveal variant="fade-up" delay={0.36} className="mt-8 pt-6 border-t border-[var(--border-light)] w-full max-w-xl">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 text-xs font-semibold text-[var(--text-dark)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--brand-royal)] shrink-0" />
                  <span>100% Code Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--brand-royal)] shrink-0" />
                  <span>San Antonio Architects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--brand-royal)] shrink-0" />
                  <span>Sub-Second Cloud Speed</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Clean Interactive Visual with Floating Glass Chips */}
          <div className="relative flex items-center justify-center lg:col-span-5">
            <motion.div
              style={{ x: springX, y: springY }}
              className="relative w-full max-w-[480px] aspect-square flex items-center justify-center"
            >
              {/* Soft Ambient Radial Behind Card */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-6 rounded-full bg-gradient-to-tr from-[var(--brand-royal)]/15 via-[var(--brand-cyan)]/15 to-transparent blur-3xl"
              />

              {/* Center Holographic Architecture Dashboard Card */}
              <div className="relative z-10 w-[340px] sm:w-[390px] rounded-3xl border border-[var(--border-light)] bg-white/95 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
                <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-dark)]">
                      ACS Engineering Core
                    </span>
                  </div>
                  <span className="rounded-full bg-[var(--primary-light)] px-2.5 py-0.5 text-[10px] font-bold text-[var(--brand-royal)] border border-[var(--brand-royal)]/20">
                    Live Cluster
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-[var(--border-light)] bg-[var(--surface-muted)] p-3">
                    <div className="flex items-center justify-between text-xs text-[var(--text-dark)] font-semibold">
                      <span>Global API Latency</span>
                      <span className="font-mono font-bold text-[var(--brand-royal)]">&lt; 95ms</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-[var(--brand-royal)] to-[var(--brand-cyan)]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[var(--border-light)] bg-[var(--surface-muted)] p-3">
                      <span className="text-[11px] text-[var(--text-muted)] font-medium">Database Engine</span>
                      <p className="mt-0.5 text-xs sm:text-sm font-bold text-[var(--text-dark)] flex items-center gap-1">
                        <SiMysql className="h-3.5 w-3.5 text-[var(--brand-royal)]" />
                        <span>MySQL 100%</span>
                      </p>
                    </div>
                    <div className="rounded-xl border border-[var(--border-light)] bg-[var(--surface-muted)] p-3">
                      <span className="text-[11px] text-[var(--text-muted)] font-medium">Cloud Stack</span>
                      <p className="mt-0.5 text-xs sm:text-sm font-bold text-amber-700 flex items-center gap-1">
                        <FaAws className="h-3.5 w-3.5 text-amber-600" />
                        <span>AWS 65% SLA</span>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[var(--border-light)] bg-[var(--surface-muted)] p-3 font-mono text-[11px] text-[var(--text-dark)]">
                    <div className="flex items-center justify-between text-[var(--text-muted)]">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <Code2 className="h-3.5 w-3.5 text-[var(--brand-royal)]" />
                        <span>stack: Python &bull; PHP &bull; Next.js</span>
                      </span>
                      <span className="text-emerald-600 font-bold">active</span>
                    </div>
                    <p className="mt-1 text-emerald-700 text-[10.5px] font-semibold">✓ Zero-downtime deployment verified</p>
                  </div>
                </div>
              </div>

              {/* Drifting 3D Floating Glass Chips around Center */}
              {/* Chip 1: Python */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 left-2 z-20 flex items-center gap-2 rounded-2xl border border-[var(--brand-royal)]/30 bg-white px-3.5 py-1.5 text-xs font-bold text-[var(--text-dark)] shadow-md"
              >
                <SiPython className="h-4 w-4 text-[#3776AB]" />
                <span>Python 65%</span>
              </motion.div>

              {/* Chip 2: PHP / Laravel */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute top-10 -right-4 z-20 flex items-center gap-2 rounded-2xl border border-red-200 bg-white px-3.5 py-1.5 text-xs font-bold text-[var(--text-dark)] shadow-md"
              >
                <SiLaravel className="h-4 w-4 text-[#FF2D20]" />
                <span>PHP &bull; Laravel 81%</span>
              </motion.div>

              {/* Chip 3: MySQL */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute -bottom-4 left-4 z-20 flex items-center gap-2 rounded-2xl border border-[var(--brand-sky)]/40 bg-white px-3.5 py-1.5 text-xs font-bold text-[var(--text-dark)] shadow-md"
              >
                <SiMysql className="h-4 w-4 text-[#00758F]" />
                <span>MySQL 100%</span>
              </motion.div>

              {/* Chip 4: AWS Cloud */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
                className="absolute -bottom-2 -right-2 z-20 flex items-center gap-2 rounded-2xl border border-amber-200 bg-white px-3.5 py-1.5 text-xs font-bold text-[var(--text-dark)] shadow-md"
              >
                <FaAws className="h-4 w-4 text-[#FF9900]" />
                <span>AWS Cloud 65%</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll-Down Indicator */}
      <div className="absolute bottom-5 inset-x-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <a
          href="#services"
          className="pointer-events-auto flex flex-col items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--brand-royal)] transition-colors"
        >
          <span>Explore Capabilities</span>
          <ChevronDown className="h-4 w-4 animate-bounce text-[var(--brand-royal)]" />
        </a>
      </div>
    </section>
  );
}
