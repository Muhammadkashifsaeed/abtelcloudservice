"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

interface CoreServiceCardItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  href: string;
  elevated?: boolean;
}

const CORE_CARDS: CoreServiceCardItem[] = [
  {
    id: "software-dev",
    title: "Custom Software Development",
    description:
      "Our custom software development team recruits versatile developers and technical experts who understand and meet your project's unique requirements.",
    imageSrc: "/images/httpdualtone.png",
    imageWidth: 76,
    imageHeight: 49,
    href: "/services#software-dev",
  },
  {
    id: "server-management",
    title: "Cloud Services",
    description:
      "Our deep AWS, Azure, and Google Cloud prowess ensures custom cloud solutions for operational efficiency and innovative business expansion",
    imageSrc: "/images/automationdualtone.png",
    imageWidth: 90,
    imageHeight: 49,
    href: "/services#server-management",
    elevated: true,
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Design and code custom, from-scratch web solutions that engage users and compel interactions at every step.",
    imageSrc: "/images/securitydualtone.png",
    imageWidth: 55,
    imageHeight: 49,
    href: "/services/web-development",
  },
];

export function ServicesCoreCardsSection() {
  return (
    <section
      aria-label="Core Technology Practices"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#FFFFFF] py-16 sm:py-20 lg:py-24"
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
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {CORE_CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              id={card.id}
              initial={{
                opacity: 0,
                x: index === 0 ? -60 : index === 2 ? 60 : 0,
                y: index === 1 ? 40 : 15,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: PREMIUM_EASE,
              }}
              className={cn(
                "flex scroll-mt-28 sm:scroll-mt-32",
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

                {/* Centered Service Icon (Static, original colors, no blue hover animation) */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/80 p-2 shadow-inner transition-colors duration-300 group-hover:border-[#00D4FF]/60 group-hover:shadow-[0_8px_20px_rgba(0,212,255,0.25)]">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    width={card.imageWidth}
                    height={card.imageHeight}
                    className="h-[46px] w-auto object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight text-[#0F172A] sm:text-[22px]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-3.5 flex-1 text-[15px] leading-relaxed text-[#475569]">
                  {card.description}
                </p>

              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
