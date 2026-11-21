"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
  },
  {
    title: "Web Development",
    description:
      "Design and code custom, from-scratch web solutions that engage users and compel interactions at every step.",
    imageSrc: "/images/Web Development.png",
    imageWidth: 55,
    imageHeight: 49,
    href: "/services",
  },
];

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
              <motion.div
                key={card.title}
                initial={cardInitial}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.12,
                  ease: LUXURY_EASE,
                }}
                className={cn(
                  "flex",
                  index === 2 &&
                    "md:col-span-2 md:mx-auto md:w-full md:max-w-md lg:col-span-1 lg:max-w-none"
                )}
              >
              <article
                className={cn(
                  "group relative flex w-full flex-col items-center rounded-3xl border p-8 sm:p-10 text-center backdrop-blur-2xl transition-all duration-300",
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
                  <Link href={card.href} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] rounded-lg">
                    {card.title}
                  </Link>
                </h2>

                {/* Description */}
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-300">
                  {card.description}
                </p>

                {/* Modern CTA Button with Signature White Sweep */}
                <div className="mt-8">
                  <Link
                    href={card.href}
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
            </motion.div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
