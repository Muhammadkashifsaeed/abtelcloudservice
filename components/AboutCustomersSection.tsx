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
const SLIDE_DURATION_SEC = 1.05;
const PAUSE_DURATION_MS = 3600;

export function AboutCustomersSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInstantReset, setIsInstantReset] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    if (isHovered) return;

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
  }, [activeIndex, isInstantReset, isHovered]);

  return (
    <section
      aria-label="Happy Customers"
      className="relative w-full overflow-hidden border-t border-slate-100 bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Centered Heading – Fade Down */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center rounded-full bg-blue-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#0C5ADB] shadow-sm">
            <span>Trusted Global Partners</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#090D24] sm:text-3xl lg:text-[38px]">
            Join our 30,000 happy customers
          </h2>
        </motion.div>

        {/* Brand Logo Carousel – Fade Up */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative mt-10 overflow-hidden py-4 select-none sm:mt-12"
        >
          {/* Edge Fades */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-24"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-24"
          />

          <motion.div
            animate={{ x: `-${activeIndex * STEP_PERCENT}%` }}
            transition={
              isInstantReset
                ? { duration: 0 }
                : { duration: SLIDE_DURATION_SEC, ease: [0.16, 1, 0.3, 1] }
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
                className="flex w-[8.3333%] shrink-0 items-center justify-center px-3 sm:px-4"
              >
                <div className="flex h-[115px] w-full max-w-[270px] items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-3 shadow-[0_4px_24px_rgba(15,23,42,0.06)] sm:h-[135px] lg:h-[154px]">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={320}
                    height={180}
                    className="h-[80px] w-auto max-w-[88%] object-contain sm:h-[100px] lg:h-[118px]"
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
