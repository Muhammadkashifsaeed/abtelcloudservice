"use client";

import React from "react";
import Image from "next/image";
import { Marquee } from "@/components/motion/Marquee";

const ABOUT_CLIENT_LOGOS = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  src: `/images/logo-${index + 1}.png`,
  alt: `Client partner ${index + 1}`,
}));

// Triple array for dense, seamless continuous flow
const DISPLAY_LOGOS = [
  ...ABOUT_CLIENT_LOGOS,
  ...ABOUT_CLIENT_LOGOS,
  ...ABOUT_CLIENT_LOGOS,
];

export function AboutCustomersSection() {
  return (
    <section
      aria-label="Happy Customers"
      className="relative w-full overflow-hidden bg-white py-14 sm:py-16 lg:py-20 text-[var(--text-dark)]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center">
          <div className="mb-3">
            <span className="eyebrow-premium">
              Trusted Global Partners
            </span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl lg:text-[38px] leading-tight">
            Join our{" "}
            <span className="relative inline-block" style={{fontFamily:"var(--font-serif,'Georgia',serif)",fontStyle:"italic",fontWeight:700,background:"linear-gradient(135deg,#E11D48,#fb7185)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
              30,000 happy customers
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            Powering high-growth startups, scale-ups, and global enterprises with secure, scalable custom software solutions.
          </p>
        </div>

        {/* Clean Line-Bounded Carousel – Tight Spacing, Zoomed-In High Impact Logos */}
        <div className="relative mt-10 border-y border-slate-200/80 bg-gradient-to-r from-slate-50/30 via-slate-50/80 to-slate-50/30 py-5 sm:mt-12 sm:py-7 overflow-hidden select-none">
          {/* Soft Left & Right Edge Fades */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-20 lg:w-28"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-20 lg:w-28"
          />

          <Marquee speed="normal" pauseOnHover={true} gap="gap-4 sm:gap-6 lg:gap-8" className="py-2">
            {DISPLAY_LOGOS.map((logo, idx) => (
              <div key={`${logo.id}-${idx}`} className="shrink-0 px-1 sm:px-2">
                <div className="group relative flex h-20 sm:h-24 md:h-26 lg:h-28 w-auto min-w-[130px] sm:min-w-[160px] lg:min-w-[185px] items-center justify-center transition-all duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={240}
                    height={110}
                    className="h-16 sm:h-20 md:h-22 lg:h-24 w-auto max-w-[210px] object-contain scale-105 sm:scale-110 md:scale-115 opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125 drop-shadow-xs"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
