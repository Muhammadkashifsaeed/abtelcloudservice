"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { cn } from "@/utils";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

interface ServiceCardItem {
  title: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  href: string;
  elevated?: boolean;
  features: string[];
}

const SERVICE_CARDS: ServiceCardItem[] = [
  {
    title: "Custom Software Development",
    description:
      "Our custom software development team recruits versatile developers and technical experts who understand and meet your project's unique requirements.",
    imageSrc: "/images/Custom Software Development.png",
    imageWidth: 76,
    imageHeight: 49,
    href: "/services",
    features: [
      "Dedicated Full-Stack Engineering Squads",
      "100% IP & Complete Source Code Ownership",
      "Enterprise Grade CI/CD & Automated QA",
    ],
  },
  {
    title: "Cloud Services",
    description:
      "Our deep AWS, Azure, and Google Cloud prowess ensures custom cloud solutions for operational efficiency and innovative business expansion.",
    imageSrc: "/images/Cloud Services.png",
    imageWidth: 90,
    imageHeight: 49,
    href: "/services",
    elevated: true,
    features: [
      "Multi-Cloud Architecture (AWS, Azure, GCP)",
      "Zero-Downtime Guaranteed 99.99% Cloud SLA",
      "Cloud Cost FinOps & Enterprise Security Audits",
    ],
  },
  {
    title: "Web Development",
    description:
      "Design and code custom, from-scratch web solutions that engage users and compel interactions at every step.",
    imageSrc: "/images/Web Development.png",
    imageWidth: 55,
    imageHeight: 49,
    href: "/services",
    features: [
      "High-Performance Next.js & React Core",
      "Headless CMS & High-Speed Technical SEO",
      "Ultra-Responsive Modern UI/UX Experience",
    ],
  },
];

function FlipServiceCard({
  card,
  index,
  cardInitial,
}: {
  card: ServiceCardItem;
  index: number;
  cardInitial: { opacity: number; x?: number; y?: number };
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={cardInitial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.75,
        delay: index * 0.12,
        ease: LUXURY_EASE,
      }}
      className={cn(
        "flex [perspective:1200px] w-full",
        index === 2 &&
          "md:col-span-2 md:mx-auto md:w-full md:max-w-md lg:col-span-1 lg:max-w-none"
      )}
    >
      <div
        onClick={() => setIsFlipped((prev) => !prev)}
        className="relative w-full cursor-pointer select-none"
        title="Click to flip card"
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: LUXURY_EASE }}
          className="relative w-full h-full [transform-style:preserve-3d]"
        >
          {/* FRONT SIDE */}
          <article
            className={cn(
              "group relative flex w-full h-full flex-col items-center rounded-3xl border p-8 sm:p-10 text-center backdrop-blur-2xl transition-all duration-300 [backface-visibility:hidden]",
              card.elevated
                ? "border-[#00D4FF]/35 bg-gradient-to-b from-[#101844]/90 via-[#0C1236]/90 to-[#070A1E]/95 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(0,212,255,0.18)] lg:-translate-y-5 hover:border-[#00D4FF]/70 hover:shadow-[0_28px_60px_rgba(0,212,255,0.3)]"
                : "border-white/10 bg-gradient-to-b from-[#0E153D]/80 via-[#0A0E2C]/85 to-[#070A1E]/95 shadow-[0_16px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:border-[#00D4FF]/50 hover:shadow-[0_20px_48px_rgba(36,107,253,0.22)]"
            )}
          >
            {/* Top Subtle Cyan/Blue Accent Line */}
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-x-8 top-0 h-[2.5px] rounded-full transition-all duration-300",
                card.elevated
                  ? "bg-gradient-to-r from-[#246BFD] via-[#00D4FF] to-[#246BFD] shadow-[0_0_12px_#00D4FF]"
                  : "bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent group-hover:via-[#00D4FF] group-hover:shadow-[0_0_10px_#00D4FF]"
              )}
            />

            {/* Centered Service Icon with Ambient Glow */}
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.05] p-3.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-[#00D4FF]/60 group-hover:shadow-[0_0_24px_rgba(0,212,255,0.35)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -m-3 rounded-full bg-[#00D4FF]/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <Image
                src={card.imageSrc}
                alt={card.title}
                width={card.imageWidth}
                height={card.imageHeight}
                className="relative z-10 h-[46px] w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* Title */}
            <h2 className="mt-6 text-xl font-bold tracking-tight text-white sm:text-[22px] transition-colors group-hover:text-[#00D4FF]">
              {card.title}
            </h2>

            {/* Description */}
            <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-300">
              {card.description}
            </p>

            {/* Interactive Flip Hint Pill */}
            <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-cyan-300 transition-colors group-hover:border-[#00D4FF]/40 group-hover:bg-[#00D4FF]/10">
              <RotateCcw className="h-3 w-3 text-[#00D4FF]" />
              <span>Click card to flip details</span>
            </div>

            {/* Modern CTA Button with Signature White Sweep */}
            <div className="mt-6">
              <Link
                href={card.href}
                onClick={(e) => e.stopPropagation()}
                className="group/btn relative inline-flex h-[48px] min-w-[165px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#246BFD] via-[#0C5ADB] to-[#00D4FF] px-7 text-sm font-semibold text-white shadow-[0_0_20px_rgba(36,107,253,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(0,212,255,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
              >
                {/* Left-to-right white sweep layer */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-[105%] opacity-0 bg-white transition-all duration-300 ease-out group-hover/btn:translate-x-0 group-hover/btn:opacity-100"
                />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-[#070A1E]">
                  <span>Learn more</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </span>
              </Link>
            </div>
          </article>

          {/* BACK SIDE (ULTA CLICK FLIP) */}
          <article
            className={cn(
              "absolute inset-0 flex w-full h-full flex-col justify-between rounded-3xl border border-[#00D4FF]/50 bg-gradient-to-b from-[#141C4E]/95 via-[#0E153C]/95 to-[#080C26]/98 p-8 sm:p-10 text-left backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,212,255,0.25)] [transform:rotateY(180deg)] [backface-visibility:hidden]"
            )}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00D4FF]">
                  Key Capabilities
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                  <RotateCcw className="h-3 w-3 text-[#00D4FF]" />
                  <span>Flip back</span>
                </span>
              </div>

              <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
                {card.title}
              </h3>

              <ul className="mt-5 space-y-3.5 text-sm text-slate-200">
                {card.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00D4FF] mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <Link
                href={card.href}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#00D4FF]"
              >
                <span>Explore Service</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-xs text-slate-400">Click to flip front</span>
            </div>
          </article>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ServiceCardsSection() {
  return (
    <section
      aria-label="Core Services"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#070A1E] via-[#080D28] to-[#070A1E] pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24 text-white"
    >
      {/* Subtle Tech Grid Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] opacity-60"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SERVICE_CARDS.map((card, index) => {
            const cardInitial =
              index === 0
                ? { opacity: 0, x: -60, y: 20 }
                : index === 1
                ? { opacity: 0, y: 60 }
                : { opacity: 0, x: 60, y: 20 };

            return (
              <FlipServiceCard
                key={card.title}
                card={card}
                index={index}
                cardInitial={cardInitial}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
