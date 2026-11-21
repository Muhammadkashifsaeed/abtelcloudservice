"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils";
import { Card3D } from "@/components/Card3D";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

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
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#FFFFFF] py-18 sm:py-22 lg:py-26"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {CORE_CARDS.map((card, index) => {
            const cardInitial =
              index === 0
                ? { opacity: 0, x: -60, y: 20 }
                : index === 1
                ? { opacity: 0, y: 60 }
                : { opacity: 0, x: 60, y: 20 };

            return (
              <motion.div
                key={card.title}
                id={card.id}
                initial={cardInitial}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.12,
                  ease: LUXURY_EASE,
                }}
                className={cn(
                  "flex scroll-mt-28 sm:scroll-mt-32",
                  index === 2 &&
                  "md:col-span-2 md:mx-auto md:w-full md:max-w-md lg:col-span-1 lg:max-w-none"
                )}
              >
              <Card3D
                maxTilt={card.elevated ? 9 : 7}
                scaleOnHover={1.03}
                glareOpacity={0.16}
                borderGlowColor={card.elevated ? "rgba(0, 212, 255, 0.45)" : "rgba(37, 99, 235, 0.25)"}
                className="w-full h-full rounded-3xl"
              >
                <article
                  className={cn(
                    "group relative flex w-full h-full flex-col items-center rounded-3xl border bg-white/95 px-8 py-10 text-center backdrop-blur-sm transition-all duration-300 [transform-style:preserve-3d]",
                    card.elevated
                      ? "border-blue-500/40 shadow-[0_20px_50px_rgba(37,99,235,0.14),0_0_1px_1px_rgba(255,255,255,0.9)_inset] lg:-translate-y-5 hover:border-[#00D4FF]/70 hover:shadow-[0_28px_60px_rgba(0,212,255,0.25)]"
                      : "border-slate-200/90 shadow-[0_10px_34px_rgba(15,23,42,0.06),0_0_1px_1px_rgba(255,255,255,0.8)_inset] hover:-translate-y-2 hover:border-[#00D4FF]/50 hover:shadow-[0_22px_48px_rgba(37,99,235,0.14)]"
                  )}
                >
                  {/* Top Subtle Cyan Glow Accent Line */}
                  <div
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-8 top-0 h-[2.5px] rounded-full transition-all duration-300",
                      card.elevated
                        ? "bg-gradient-to-r from-[#2563EB] via-[#00D4FF] to-[#2563EB] shadow-[0_0_10px_#00D4FF]"
                        : "bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent group-hover:via-[#00D4FF]"
                    )}
                  />

                  {/* Centered Service Icon (3D Elevated) */}
                  <div className="flex h-18 w-18 items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/90 p-3 shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:border-[#00D4FF]/60 group-hover:shadow-[0_8px_24px_rgba(0,212,255,0.22)] [transform:translateZ(25px)]">
                    <Image
                      src={card.imageSrc}
                      alt={card.title}
                      width={card.imageWidth}
                      height={card.imageHeight}
                      className="h-[46px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Title (3D Elevated) */}
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-[#090D24] sm:text-[22px] transition-colors group-hover:text-[#2563EB] [transform:translateZ(14px)]">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-600 [transform:translateZ(8px)]">
                    {card.description}
                  </p>
                </article>
              </Card3D>
            </motion.div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
