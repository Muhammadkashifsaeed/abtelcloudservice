"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils";
import { Card3D } from "@/components/Card3D";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

interface ServiceCardItem {
  title: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  href: string;
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

function ServiceCard({
  card,
  index,
  cardInitial,
}: {
  card: ServiceCardItem;
  index: number;
  cardInitial: { opacity: number; x?: number; y?: number };
}) {
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
        "h-full w-full",
        index === 2 &&
          "md:col-span-2 md:mx-auto md:w-full md:max-w-md lg:col-span-1 lg:max-w-none"
      )}
    >
      <Card3D
        maxTilt={6}
        scaleOnHover={1.02}
        glareOpacity={0.08}
        borderGlowColor="rgba(197, 216, 46, 0.4)"
        className="h-full rounded-3xl"
      >
        <article className="group relative flex h-full flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all duration-300 hover:border-black hover:shadow-xl [transform-style:preserve-3d]">
          {/* Light Sheen Sweep Across Card on Hover */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full rounded-3xl bg-gradient-to-r from-transparent via-[var(--brand-lime)]/[0.12] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
          />

          <div>
            {/* Top row: Icon container + 01/02/03 index */}
            <div className="flex items-center justify-between [transform:translateZ(20px)]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-2.5 shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:border-black group-hover:bg-[var(--brand-lime)]/20">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  width={card.imageWidth}
                  height={card.imageHeight}
                  className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <span className="font-mono text-xs font-semibold text-slate-400 group-hover:text-black transition-colors">
                0{index + 1}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-bold tracking-tight text-[#0B0E14] transition-colors group-hover:text-black [transform:translateZ(12px)]">
              <Link
                href={card.href}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg"
              >
                {card.title}
              </Link>
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-slate-600 [transform:translateZ(6px)]">
              {card.description}
            </p>
          </div>

          {/* Bottom Card Action */}
          <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 [transform:translateZ(14px)]">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 group-hover:text-black transition-colors">
              Learn more
            </span>
            <Link
              href={card.href}
              aria-label={`Learn more about ${card.title}`}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-all duration-200 group-hover:bg-[var(--brand-lime)] group-hover:text-black group-hover:shadow-[0_4px_12px_rgba(197, 216, 46,0.4)]"
            >
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </article>
      </Card3D>
    </motion.div>
  );
}

export function ServiceCardsSection() {
  return (
    <section
      aria-label="Core Services"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F4F8FC] to-[#EBF3FA] pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24 text-[#101B3F]"
    >
      {/* Subtle Tech Grid Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(61,150,206,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(61,150,206,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-70"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {SERVICE_CARDS.map((card, index) => {
            const cardInitial =
              index === 0
                ? { opacity: 0, x: -60, y: 20 }
                : index === 1
                  ? { opacity: 0, y: 60 }
                  : { opacity: 0, x: 60, y: 20 };

            return (
              <ServiceCard
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
