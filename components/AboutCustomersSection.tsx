"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ABOUT_CLIENT_LOGOS = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  src: `/images/logo-${index + 1}.png`,
  alt: `Client partner ${index + 1}`,
}));

const TOTAL_UNIQUE = ABOUT_CLIENT_LOGOS.length;
const LOOP_LOGOS = [...ABOUT_CLIENT_LOGOS, ...ABOUT_CLIENT_LOGOS];
const STEP_PERCENT = 100 / LOOP_LOGOS.length;
const SLIDE_DURATION_SEC = 0.72;
const PAUSE_DURATION_MS = 2100;

export function AboutCustomersSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInstantReset, setIsInstantReset] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    if (activeIndex >= TOTAL_UNIQUE) return;

    const delayMs =
      activeIndex === 0
        ? PAUSE_DURATION_MS
        : Math.round(SLIDE_DURATION_SEC * 1000) + PAUSE_DURATION_MS;

    const timer = window.setTimeout(() => {
      setIsInstantReset(false);
      setActiveIndex((prev) => prev + 1);
    }, delayMs);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isInstantReset]);

  return (
    <section
      aria-label="Happy Customers"
      className="relative w-full overflow-x-clip border-t border-slate-100 bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Centered Heading – Fade-Down */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0284C7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
            <span>Trusted Global Partners</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl lg:text-[36px]">
            Join our 30,000 happy customers
          </h2>
        </motion.div>

        {/* Step-by-Step Brand Logo Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-8 overflow-hidden py-4 select-none sm:mt-10"
        >
          {/* Soft Left & Right Edge Fades */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-20"
          />

          <motion.div
            animate={{ x: `-${activeIndex * STEP_PERCENT}%` }}
            transition={
              isInstantReset
                ? { duration: 0 }
                : { duration: SLIDE_DURATION_SEC, ease: [0.22, 1, 0.36, 1] }
            }
            onAnimationComplete={() => {
              if (activeIndex >= TOTAL_UNIQUE) {
                setIsInstantReset(true);
                setActiveIndex(0);
              }
            }}
            className="flex w-[600%] items-center will-change-transform sm:w-[400%] lg:w-[240%]"
          >
            {LOOP_LOGOS.map((logo, idx) => (
              <div
                key={`${logo.id}-${idx}`}
                className="flex w-[8.3333%] shrink-0 items-center justify-center px-3 sm:px-4 lg:px-5"
              >
                <div className="group flex h-[85px] w-full max-w-[210px] items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#00D4FF]/60 hover:shadow-[0_14px_34px_rgba(0,212,255,0.22)] sm:h-[102px]">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={90}
                    className="max-h-[51px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-[60px]"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
