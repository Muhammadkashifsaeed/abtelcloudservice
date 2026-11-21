"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/utils";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

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
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9] py-18 sm:py-22 lg:py-26"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Heading, Subtext, & Discover More Button – Fade Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="flex flex-col items-start text-left lg:col-span-4"
          >
            <div className="mb-2">
              <span className="inline-flex items-center rounded-full bg-blue-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#0C5ADB] shadow-sm">
                SIMPLE PROCESS
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#090D24] sm:text-4xl lg:text-[44px] leading-[1.14]">
              Get Started
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Get an estimate about your project in 3 simple steps.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="group/btn relative inline-flex h-[48px] min-w-[172px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#246BFD] via-[#0C5ADB] to-[#00D4FF] px-8 text-sm font-semibold text-white shadow-[0_0_24px_rgba(36,107,253,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(0,212,255,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
              >
                {/* Left-to-right white sweep layer */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-[105%] opacity-0 bg-white transition-all duration-300 ease-out group-hover/btn:translate-x-0 group-hover/btn:opacity-100"
                />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-[#070A1E]">
                  <span>Discover more</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Center Column: Image img1 – Fade Up */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.85, delay: 0.08, ease: LUXURY_EASE }}
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

          {/* Right Column: 3 Clean Text Points – Fade Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, delay: 0.12, ease: LUXURY_EASE }}
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
                      ? "border border-blue-400/40 bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#00D4FF] text-white shadow-[0_12px_32px_rgba(37,99,235,0.32)] hover:shadow-[0_18px_44px_rgba(0,212,255,0.4)]"
                      : "border border-slate-200/90 bg-white text-[#090D24] shadow-[0_6px_20px_rgba(15,23,42,0.05)] hover:border-[#00D4FF]/50 hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)]"
                  )}
                >
                  <div>
                    <h3
                      className={cn(
                        "text-lg font-bold tracking-tight",
                        isBlue ? "text-white" : "text-[#090D24]"
                      )}
                    >
                      {point.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-1 text-sm leading-relaxed",
                        isBlue ? "text-white/90" : "text-slate-600"
                      )}
                    >
                      {point.description}
                    </p>
                  </div>
                  <CheckCircle2
                    className={cn(
                      "h-6 w-6 shrink-0",
                      isBlue ? "text-white" : "text-[#2563EB]"
                    )}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
