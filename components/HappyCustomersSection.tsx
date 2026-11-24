"use client";

import React from "react";
import Image from "next/image";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { CurvedUnderline } from "@/components/ui/CurvedUnderline";

const CUSTOMER_LOGOS = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  src: `/images/${index + 1}.png`,
  alt: `Happy customer partner ${index + 1}`,
}));

const DISPLAY_LOGOS = [
  ...CUSTOMER_LOGOS,
  ...CUSTOMER_LOGOS,
  ...CUSTOMER_LOGOS,
];

export function HappyCustomersSection() {
  return (
    <section
      aria-label="Happy Customers"
      className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20 text-[var(--text-dark)]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Heading (Fade Down & Fade Up) */}
        <div className="text-center">
          <Reveal variant="fade-down" delay={0.05}>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-800 shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-lime)] animate-pulse" />
              <span>Trusted Global Partners</span>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={0.12}>
            <h2 className="text-2xl font-black tracking-tight text-[#0F172A] sm:text-3xl lg:text-[38px] leading-tight font-heading">
              Join our{" "}
              <span className="relative inline-block text-[var(--brand-lime)]">
                30,000 happy customers
                <CurvedUnderline color="#2563EB" />
              </span>
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={0.18}>
            <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
              Powering high-growth startups, scale-ups, and global enterprises with secure, scalable custom software solutions.
            </p>
          </Reveal>
        </div>

        {/* Clean Line-Bounded Carousel (Fade Up) */}
        <Reveal variant="fade-up" delay={0.24}>
          <div className="relative mt-10 border-y border-slate-200/80 bg-gradient-to-r from-slate-50/30 via-slate-50/80 to-slate-50/30 py-6 sm:mt-12 sm:py-8 overflow-hidden select-none">
            {/* Soft Left & Right Edge Fades */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-24 lg:w-32"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-24 lg:w-32"
            />

            <Marquee speed="normal" pauseOnHover={true} gap="gap-4 sm:gap-6 lg:gap-8" className="py-2">
              {DISPLAY_LOGOS.map((logo, idx) => (
                <div key={`${logo.id}-${idx}`} className="shrink-0 px-2 sm:px-3">
                  <div className="group relative flex aspect-square w-32 sm:w-36 md:w-40 lg:w-44 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200/80 bg-white p-2 shadow-[0_6px_20px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_12px_28px_rgba(14, 71, 57,0.3)]">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={220}
                      height={220}
                      className="h-full w-full rounded-full object-cover scale-[1.18] transition-transform duration-300 group-hover:scale-[1.25]"
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
