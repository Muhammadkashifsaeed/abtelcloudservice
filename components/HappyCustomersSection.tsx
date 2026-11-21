"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CUSTOMER_LOGOS = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  src: `/images/${index + 1}.png`,
  alt: `Happy customer ${index + 1}`,
}));

const LOOP_LOGOS = [...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS];

export function HappyCustomersSection() {
  return (
    <section
      aria-label="Happy Customers"
      className="relative w-full overflow-hidden border-y border-white/[0.08] bg-[#070A1E] py-14 sm:py-16 lg:py-20 text-white"
    >
      {/* Subtle Tech Grid Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] opacity-60"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Centered Heading – Fade Down */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-[#00D4FF]/15 via-[#2563EB]/10 to-[#00D4FF]/10 px-4 py-1.5 shadow-[0_2px_14px_rgba(0,212,255,0.15)] backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00D4FF]">
              Trusted Global Partners
            </span>
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[38px]">
            Join our 30,000 happy customers
          </h2>
        </motion.div>

        {/* Continuous Circular Logo Carousel – Fade Up */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-10 overflow-hidden py-4 sm:mt-12"
        >
          {/* Soft Left & Right Edge Fades into Deep Obsidian */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#070A1E] via-[#070A1E]/80 to-transparent sm:w-28"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#070A1E] via-[#070A1E]/80 to-transparent sm:w-28"
          />

          <div className="animate-customer-marquee flex w-[1000%] items-center sm:w-[666.6667%] lg:w-[400%]">
            {LOOP_LOGOS.map((logo, idx) => (
              <div
                key={`${logo.id}-${idx}`}
                className="flex w-[5%] shrink-0 items-center justify-center px-3 sm:px-4"
              >
                <div className="group/token relative flex aspect-square w-full max-w-[160px] items-center justify-center overflow-hidden rounded-full border border-white/20 bg-gradient-to-br from-white/15 via-white/[0.08] to-white/[0.03] p-3 backdrop-blur-2xl shadow-[0_12px_32px_rgba(0,0,0,0.5),0_0_1px_1px_rgba(255,255,255,0.2)_inset] transition-all duration-300 hover:scale-108 hover:border-[#00D4FF]/70 hover:shadow-[0_0_30px_rgba(0,212,255,0.45)] sm:max-w-[180px] lg:max-w-[195px]">
                  {/* Subtle 3D Specular Highlight Arc */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]"
                  />
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={240}
                    height={240}
                    className="relative z-10 h-full w-full rounded-full object-cover transition-transform duration-300 group-hover/token:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
