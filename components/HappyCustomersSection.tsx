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
      className="relative w-full overflow-x-clip border-y border-slate-100 bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Centered Heading – Fade-Down */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0284C7]">
              Trusted Global Partners
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl lg:text-[36px]">
            Join our 30,000 happy customers
          </h2>
        </motion.div>

        {/* Continuous Circular Logo Carousel – Fade-Up Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.78, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-8 overflow-hidden py-4 sm:mt-10"
        >
          {/* Soft Edge Gradients */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-20"
          />

          {/* 20 items total: 1000% (2 visible), 666.67% (3 visible), 400% (5 visible) */}
          <div className="animate-customer-marquee flex w-[1000%] items-center sm:w-[666.6667%] lg:w-[400%]">
            {LOOP_LOGOS.map((logo, idx) => (
              <div
                key={`${logo.id}-${idx}`}
                className="flex w-[5%] shrink-0 items-center justify-center px-2 sm:px-3 lg:px-3.5"
              >
                <div className="flex aspect-square w-full max-w-[170px] items-center justify-center overflow-hidden rounded-full border border-slate-100 bg-white p-1 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:max-w-[190px] lg:max-w-[204px]">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={240}
                    height={240}
                    className="h-full w-full rounded-full object-cover"
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
