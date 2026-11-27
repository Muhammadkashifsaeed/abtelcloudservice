"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Cloud, Code2, Globe } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal, Parallax, StaggerTextReveal } from "@/components/motion";

const RED = "#E11D48";
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const HERO_FEATURE_POINTS = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Versatile engineers and technical experts who meet your project's unique requirements.",
    href: "/services",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    desc: "Deep AWS, Azure, and Google Cloud prowess for efficiency and expansion.",
    href: "/services",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Custom, from-scratch web solutions that engage and convert at every step.",
    href: "/services/web-development",
  },
];

const CALENDLY_LINK = "https://calendly.com/abtelcloud/30min";
const GALLERY_LINK = "http://gallary.abtelcloud.com/";

export function HeroSliderSection() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, ease: EASE_OUT, delay },
        };

  return (
    <section
      aria-label="Abtel Cloud Services — Software Consulting & Development"
      className="relative w-full overflow-hidden bg-white text-[#0B0E14]"
    >
      {/* ── Soft light background ────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.10]"
          style={{
            backgroundImage: 'url("/images/software-program.jpg")',
            maskImage: "radial-gradient(120% 90% at 70% 20%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(120% 90% at 70% 20%, black 40%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/92 to-white" />
        <div className="absolute -top-40 left-1/3 h-[620px] w-[620px] rounded-full bg-[#E11D48]/[0.08] blur-[170px]" />
        <div className="absolute bottom-0 right-1/4 h-[480px] w-[480px] rounded-full bg-[#FB7185]/[0.08] blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.5] bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:76px_76px] [mask-image:radial-gradient(120%_100%_at_50%_0%,black,transparent_85%)]" />
      </div>

      {/* ── Main editorial grid ──────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 pb-14 pt-20 sm:px-8 sm:pt-28 lg:pb-20 lg:pt-36">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Left — oversized statement */}
          <div className="flex flex-col items-start lg:col-span-7">
            <motion.span
              {...rise(0.05)}
              className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500"
            >
              Software Engineering &amp; Cloud
            </motion.span>

            <StaggerTextReveal
              as="h1"
              by="words"
              stagger={0.08}
              duration={0.85}
              highlightWord="Development"
              highlightClassName="font-serif italic text-gradient-brand"
              className="mt-7 max-w-3xl text-[2.7rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#0B0E14] sm:text-6xl lg:text-[5.4rem]"
            >
              {"Software Consulting and Development"}
            </StaggerTextReveal>

            <motion.div {...rise(0.35)} className="w-full">
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Our dedicated team delivers exceptional service, wherever you are
                — engineering the results that move your business forward.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3.5">
                <a
                  href={CALENDLY_LINK}
                  className="press group/btn relative inline-flex h-[52px] items-center justify-center overflow-hidden rounded-full bg-[#E11D48] px-7 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_rgba(225,29,72,0.6)] ring-1 ring-inset ring-white/20 transition-colors duration-200 hover:bg-[#BE123C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D48]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </span>
                </a>

                <a
                  href={GALLERY_LINK}
                  className="press group/alt inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-7 text-sm font-semibold text-slate-800 backdrop-blur-sm transition-colors duration-200 hover:border-slate-400 hover:bg-white hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <span>View Gallery</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover/alt:-translate-y-0.5 group-hover/alt:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — layered composition with image masking */}
          <div className="relative flex items-center justify-center lg:col-span-5 lg:justify-end">
            <motion.div
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, y: 40, scale: 0.97 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    transition: { duration: 1.1, ease: EASE_OUT, delay: 0.25 },
                  })}
              className="relative w-full max-w-[440px] lg:max-w-[500px]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-10 rounded-[2.5rem] blur-[80px]"
                style={{ background: "rgba(225,29,72,0.14)" }}
              />

              {/* Vertical label */}
              <div className="pointer-events-none absolute -left-7 top-1/2 hidden -translate-y-1/2 -rotate-90 font-mono text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-300 lg:block">
                Est. 2016 &bull; Texas
              </div>

              {/* Main masked frame */}
              <div className="relative z-10 rounded-[1.75rem] border border-slate-200 bg-white p-2 shadow-[0_40px_90px_-24px_rgba(15,23,42,0.35)]">
                <ImageReveal
                  variant="clip-up"
                  duration={1.05}
                  className="relative aspect-[4/5] w-full rounded-[1.35rem] bg-slate-100 sm:aspect-[16/13]"
                >
                  <Parallax amount={0.12} className="h-full w-full">
                    <div
                      className="relative h-full w-full overflow-hidden rounded-[1.35rem]"
                      style={{
                        maskImage: "linear-gradient(to bottom, black 62%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 62%, transparent 100%)",
                      }}
                    >
                      <Image
                        src="/images/15.jpg"
                        alt="Abtel Cloud Services engineering team"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-center"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
                    </div>
                  </Parallax>
                </ImageReveal>

                {/* Corner ticks */}
                <span className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-slate-300" />
                <span className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r border-t border-slate-300" />
              </div>

              {/* Floating chip — live */}
              <div className="absolute -bottom-5 left-4 z-20 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:left-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                    style={{ backgroundColor: RED }}
                  />
                  <span
                    className="relative inline-flex h-2.5 w-2.5 rounded-full ring-2 ring-white"
                    style={{ backgroundColor: RED }}
                  />
                </span>
                <div className="text-left">
                  <p className="text-xs font-bold leading-tight text-[#0B0E14]">Live Consulting Sprints</p>
                  <p className="text-[11px] font-medium text-slate-500">Agile Cloud &amp; Web Strategy</p>
                </div>
              </div>

              {/* Floating chip — verified */}
              <div className="absolute -top-3 right-4 z-20 rounded-full border border-white/20 bg-[#E11D48] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg sm:right-6">
                Verified Team
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Capabilities strip ───────────────────────────────── */}
      <div className="relative z-10 border-t border-slate-200/80 bg-slate-50/60 backdrop-blur-md">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {HERO_FEATURE_POINTS.map((pt, idx) => {
              const variant = idx === 0 ? "fade-left" : idx === 1 ? "fade-up" : "fade-right";
              return (
                <Reveal key={pt.title} variant={variant} delay={0.1 + idx * 0.08}>
                  <Link
                    href={pt.href}
                    className="group flex h-full items-start gap-4 px-1 py-7 transition-colors sm:px-7 sm:py-8"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#E11D48] transition-all duration-200 group-hover:border-[#E11D48]/50 group-hover:bg-[#E11D48] group-hover:text-white">
                      <pt.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-semibold text-[#0B0E14]">{pt.title}</h4>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E11D48]" />
                      </div>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{pt.desc}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}