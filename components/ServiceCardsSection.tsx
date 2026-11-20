"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

interface ServiceCardItem {
  title: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  href: string;
  elevated?: boolean;
  direction: "left" | "up" | "right";
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
    direction: "left",
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
    direction: "up",
  },
  {
    title: "Web Development",
    description:
      "Design and code custom, from-scratch web solutions that engage users and compel interactions at every step.",
    imageSrc: "/images/Web Development.png",
    imageWidth: 55,
    imageHeight: 49,
    href: "/services",
    direction: "right",
  },
];

function getInitialOffset(direction: ServiceCardItem["direction"]) {
  if (direction === "left") return { opacity: 0, x: -75, y: 12, scale: 0.97 };
  if (direction === "right") return { opacity: 0, x: 75, y: 12, scale: 0.97 };
  return { opacity: 0, x: 0, y: 50, scale: 0.95 };
}

export function ServiceCardsSection() {
  return (
    <section
      aria-label="Core Services"
      className="relative w-full overflow-x-clip bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#FFFFFF] pt-10 pb-10 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SERVICE_CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={getInitialOffset(card.direction)}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.78,
                delay: index * 0.12,
                ease: PREMIUM_EASE,
              }}
              className={cn(
                "flex",
                index === 2 &&
                  "md:col-span-2 md:mx-auto md:w-full md:max-w-md lg:col-span-1 lg:max-w-none"
              )}
            >
              <article
                className={cn(
                  "group relative flex w-full flex-col items-center rounded-2xl border border-slate-200/80 bg-white px-7 py-9 text-center transition-all duration-300 sm:px-8 sm:py-10",
                  card.elevated
                    ? "shadow-[0_20px_50px_rgba(15,23,42,0.08)] lg:-translate-y-4 hover:border-[#00D4FF]/60 hover:shadow-[0_24px_56px_rgba(0,212,255,0.18)]"
                    : "shadow-[0_10px_34px_rgba(15,23,42,0.05)] hover:-translate-y-1.5 hover:border-[#00D4FF]/50 hover:shadow-[0_20px_46px_rgba(0,212,255,0.14)]"
                )}
              >
                {/* Top Subtle Cyan Glow Accent Line */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-8 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent transition-opacity duration-300 group-hover:via-[#00D4FF]"
                />

                {/* Centered Service Icon with bottom-to-top blue sweep hover animation */}
                <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/80 p-2 shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:border-[#00D4FF]/60 group-hover:shadow-[0_8px_20px_rgba(0,212,255,0.25)]">
                  {/* Bottom-to-top blue sweep layer */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 translate-y-full bg-gradient-to-t from-[#00D4FF] via-[#0EA5E9] to-[#246BFD] transition-transform duration-300 ease-out group-hover:translate-y-0"
                  />
                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={card.imageSrc}
                      alt={card.title}
                      width={card.imageWidth}
                      height={card.imageHeight}
                      className="h-[46px] w-auto object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>
                </div>

                {/* Bold Dark Heading */}
                <h2 className="mt-5 text-xl font-bold leading-snug tracking-tight text-[#0F172A] sm:text-[22px]">
                  <Link href={card.href} className="transition-colors hover:text-[#246BFD]">
                    {card.title}
                  </Link>
                </h2>

                {/* Readable Grey Description */}
                <p className="mt-3.5 flex-1 text-[15px] leading-relaxed text-[#475569]">
                  {card.description}
                </p>

                {/* Modern Blue Technology Button with Left-to-Right White Sweep Hover */}
                <div className="mt-7">
                  <Link
                    href={card.href}
                    className="btn-cut group/btn relative inline-flex h-[46px] min-w-[154px] items-center justify-center overflow-hidden bg-[#246BFD] px-8 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(36,107,253,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,212,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2"
                  >
                    {/* Left-to-right white sweep layer */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover/btn:translate-x-0"
                    />
                    <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-[#0B0E2E]">
                      <span>Learn more</span>
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
