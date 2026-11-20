"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

interface StepPointItem {
  id: string;
  title: string;
  description: string;
  isBlueType?: boolean;
}

const STEP_POINTS: StepPointItem[] = [
  {
    id: "contact-us",
    title: "Contact Us",
    description: "Fill out the form",
  },
  {
    id: "free-consulting",
    title: "Free Consulting",
    description: "Get a No Cost Consulting",
    isBlueType: true,
  },
  {
    id: "get-proposal",
    title: "Get a Proposal",
    description: "Receive a detailed proposal",
  },
];

export function ServicesStepsSection() {
  return (
    <section
      aria-label="Get Started in 3 Simple Steps"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Circuit Pattern */}
      <div
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/bg_pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "210px 210px",
        }}
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Heading, Subtext, & Discover More Button */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: PREMIUM_EASE }}
            className="flex flex-col items-start text-left lg:col-span-4"
          >
            <div className="mb-2">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0284C7] sm:text-sm">
                SIMPLE PROCESS
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px]">
              Get Started
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#475569] sm:text-lg">
              Get an estimate about your project in 3 simple steps.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-cut group/btn relative inline-flex h-[48px] min-w-[172px] items-center justify-center overflow-hidden bg-[#246BFD] px-8 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(36,107,253,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,212,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover/btn:translate-x-0"
                />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-[#0B0E2E]">
                  <span>Discover more</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Center Column: Image img1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.08, ease: PREMIUM_EASE }}
            className="flex items-center justify-center lg:col-span-4"
          >
            <div className="relative w-full max-w-[360px] drop-shadow-[0_20px_40px_rgba(15,23,42,0.12)] transition-transform duration-500 hover:scale-[1.03]">
              <Image
                src="/images/img1.png"
                alt="Project Estimation and Delivery Process"
                width={600}
                height={701}
                className="h-auto w-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right Column: 3 Clean Text Points (No Left Icons, Free Consulting in Blue) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.12, ease: PREMIUM_EASE }}
            className="flex flex-col gap-4 lg:col-span-4"
          >
            {STEP_POINTS.map((point) => {
              const isBlue = point.isBlueType;

              return (
                <div
                  key={point.id}
                  className={cn(
                    "group relative flex items-center justify-between rounded-2xl px-6 py-5 transition-all duration-300 hover:-translate-y-1 sm:px-7 sm:py-6",
                    isBlue
                      ? "border border-sky-300/60 bg-gradient-to-r from-[#0C5ADB] via-[#246BFD] to-[#0099FF] text-white shadow-[0_12px_32px_rgba(12,90,219,0.32)] hover:shadow-[0_18px_44px_rgba(0,212,255,0.4)]"
                      : "border border-slate-200/80 bg-white text-slate-900 shadow-[0_6px_20px_rgba(15,23,42,0.05)] hover:border-[#00D4FF]/60 hover:shadow-[0_16px_36px_rgba(0,212,255,0.16)]"
                  )}
                >
                  {/* Subtle Glow Accent Line for non-blue cards */}
                  {!isBlue && (
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-8 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent transition-opacity duration-300 group-hover:via-[#00D4FF]"
                    />
                  )}

                  {/* Clean Text Content (No Left Icon) */}
                  <div className="flex-1 text-left pr-4">
                    <h3
                      className={cn(
                        "text-lg font-bold leading-snug tracking-tight transition-colors duration-200 sm:text-[19px]",
                        isBlue
                          ? "text-white"
                          : "text-[#0F172A] group-hover:text-[#0284C7]"
                      )}
                    >
                      {point.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-1 text-sm leading-relaxed sm:text-[15px]",
                        isBlue ? "text-sky-100 font-medium" : "text-[#475569]"
                      )}
                    >
                      {point.description}
                    </p>
                  </div>

                  {/* Right Subtle Hover Arrow */}
                  <div
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-200",
                      isBlue
                        ? "bg-white/20 text-white group-hover:bg-white group-hover:text-[#0C5ADB] group-hover:scale-105"
                        : "bg-slate-50 text-slate-400 group-hover:bg-sky-50 group-hover:text-[#00D4FF] group-hover:scale-105"
                    )}
                  >
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
