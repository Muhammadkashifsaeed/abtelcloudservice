"use client";

import React from "react";
import Image from "next/image";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";

const CUSTOMER_LOGOS = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  src: `/images/${index + 1}.png`,
  alt: `Happy customer partner ${index + 1}`,
}));

const DISPLAY_LOGOS = [...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS];

export function HappyCustomersSection() {
  return (
    <section
      aria-label="Happy Customers"
      className="relative w-full overflow-hidden bg-white pt-12 pb-0 text-[var(--text-dark)] sm:pt-16 lg:pt-20"
    >
      {/* Heading (contained) */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal variant="fade-down" delay={0.05}>
            <div className="mb-3">
              <span className="eyebrow-premium">Trusted Global Partners</span>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={0.12}>
            <h2 className="text-2xl font-black tracking-tight text-[#0F172A] sm:text-3xl lg:text-[38px] leading-tight font-heading">
              Join our{" "}
              <span
                className="relative inline-block"
                style={{ fontFamily: "var(--font-serif,'Georgia',serif)", fontStyle: "italic", fontWeight: 700, background: "linear-gradient(135deg,#E11D48,#fb7185)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                30,000 happy customers
              </span>
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={0.18}>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 sm:text-base">
              Powering high-growth startups, scale-ups, and global enterprises with secure, scalable custom software solutions.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Full-width marquee (edge to edge) */}
      <Reveal variant="fade-up" delay={0.24}>
        <div className="relative mt-10 w-full select-none overflow-hidden border-y border-slate-200/80 bg-gradient-to-r from-slate-50/40 via-slate-50/80 to-slate-50/40 py-7 sm:mt-12 sm:py-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-24 lg:w-40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-24 lg:w-40"
          />

          <Marquee speed="normal" pauseOnHover={true} gap="gap-5 sm:gap-8 lg:gap-12" className="py-2">
            {DISPLAY_LOGOS.map((logo, idx) => (
              <div key={`${logo.id}-${idx}`} className="shrink-0 px-1 sm:px-2">
                <div className="group relative flex aspect-square w-28 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200/80 bg-white p-2 shadow-[0_6px_20px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E11D48]/40 hover:shadow-[0_12px_28px_rgba(225,29,72,0.18)] sm:w-36 md:w-40 lg:w-44">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={220}
                    height={220}
                    className="h-full w-full scale-[1.18] rounded-full object-cover transition-transform duration-300 group-hover:scale-[1.25]"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </Reveal>
    </section>
  );
}