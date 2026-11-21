"use client";

import React from "react";
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
        "flex w-full",
        index === 2 &&
          "md:col-span-2 md:mx-auto md:w-full md:max-w-md lg:col-span-1 lg:max-w-none"
      )}
    >
      <article
        className={cn(
          "group relative flex w-full flex-col justify-between rounded-3xl border p-8 sm:p-10 text-center backdrop-blur-2xl transition-all duration-300",
          card.elevated
            ? "border-[#3D96CE]/50 bg-white shadow-[0_20px_50px_rgba(16,27,63,0.08),0_0_24px_rgba(61,150,206,0.18)] lg:-translate-y-5 hover:border-[#3D96CE] hover:shadow-[0_24px_55px_rgba(61,150,206,0.25)]"
            : "border-slate-200/90 bg-white/95 shadow-[0_12px_36px_rgba(16,27,63,0.06)] hover:-translate-y-2 hover:border-[#3D96CE]/50 hover:shadow-[0_20px_48px_rgba(61,150,206,0.15)]"
        )}
      >
        {/* Top Subtle Royal & Sky Blue Accent Line */}
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-x-8 top-0 h-[2.5px] rounded-full transition-all duration-300",
            card.elevated
              ? "bg-gradient-to-r from-[#303E99] via-[#3D96CE] to-[#303E99] shadow-[0_0_12px_rgba(61,150,206,0.5)]"
              : "bg-gradient-to-r from-transparent via-[#3D96CE]/40 to-transparent group-hover:via-[#3D96CE] group-hover:shadow-[0_0_10px_rgba(61,150,206,0.4)]"
          )}
        />

        <div>
          {/* Centered Service Icon with Ambient Glow */}
          <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200/90 bg-slate-50/90 p-3.5 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-[#3D96CE]/60 group-hover:bg-[#3D96CE]/10 group-hover:shadow-[0_0_24px_rgba(61,150,206,0.25)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -m-3 rounded-full bg-[#3D96CE]/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <Image
              src={card.imageSrc}
              alt={card.title}
              width={card.imageWidth}
              height={card.imageHeight}
              className="relative z-10 h-[46px] w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
            />
          </div>

          {/* Title */}
          <h2 className="mt-6 text-xl font-bold tracking-tight text-[#101B3F] sm:text-[22px] transition-colors group-hover:text-[#3D96CE]">
            {card.title}
          </h2>

          {/* Description */}
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            {card.description}
          </p>
        </div>

        {/* Modern CTA Button with Sky Blue (#3D96CE) */}
        <div className="mt-8">
          <Link
            href={card.href}
            className="group/btn relative inline-flex h-[48px] min-w-[165px] items-center justify-center overflow-hidden rounded-full bg-[#3D96CE] px-7 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(61,150,206,0.4)] transition-all duration-300 hover:bg-[#2C7DAF] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(61,150,206,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D96CE]"
          >
            {/* Luminous sheen animation on hover (no white fill) */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
            />
            <span className="relative z-10 flex items-center gap-2 text-white">
              <span>Learn more</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
            </span>
          </Link>
        </div>
      </article>
    </motion.div>
  );
}

export function ServiceCardsSection() {
  return (
    <section
      aria-label="Core Services"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F4F8FC] to-[#EBF3FA] border-t border-slate-100 pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24 text-[#101B3F]"
    >
      {/* Subtle Tech Grid Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(61,150,206,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(61,150,206,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-70"
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
