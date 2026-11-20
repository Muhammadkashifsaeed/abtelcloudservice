"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

interface OfferServiceItem {
  title: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  href: string;
  highlighted?: boolean;
}

const OFFER_SERVICES: OfferServiceItem[] = [
  {
    title: "Web Development",
    description:
      "Our engineers create progressive web apps, AR-powered e-commerce stores, and more.",
    imageSrc: "/images/Web Development1.png",
    imageWidth: 31,
    imageHeight: 49,
    href: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Abtel Cloud Services provides custom mobile development application services.",
    imageSrc: "/images/Mobile App Development.png",
    imageWidth: 28,
    imageHeight: 49,
    href: "/services/mobile-app-development",
  },
  {
    title: "API Integrations",
    description:
      "Automation for enhanced productivity and user experience.",
    imageSrc: "/images/API Integrations.png",
    imageWidth: 67,
    imageHeight: 49,
    href: "/services/api-integrations",
  },
  {
    title: "E-commerce",
    description:
      "We create custom e-commerce websites that reflect your brand's identity.",
    imageSrc: "/images/E-commerce.png",
    imageWidth: 49,
    imageHeight: 49,
    href: "/services/e-commerce",
    highlighted: true,
  },
  {
    title: "Digital Marketplace Services",
    description:
      "Build a digital storefront for the modern consumer to increase visibility.",
    imageSrc: "/images/Digital Marketplace Services.png",
    imageWidth: 78,
    imageHeight: 49,
    href: "/services/digital-marketplace",
  },
  {
    title: "UI/UX Design",
    description:
      "Engage and retain your users with intuitive, captivating, and responsive design.",
    imageSrc: "/images/ui ux designe.png",
    imageWidth: 31,
    imageHeight: 49,
    href: "/services/ui-ux-design",
  },
];

function getCardInitial(index: number) {
  const col = index % 3;
  if (col === 0) return { opacity: 0, x: -56, y: 20 };
  if (col === 2) return { opacity: 0, x: 56, y: 20 };
  return { opacity: 0, x: 0, y: 46, scale: 0.96 };
}

export function WhatWeOfferSection() {
  return (
    <section
      aria-label="What We Offer"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9] py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle Tiled Circuit-Board Technology Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/images/bg_pattern.png')] bg-repeat bg-[length:220px_220px] opacity-[0.14]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Top Split Header Row */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
          {/* Left Label & Heading – Fade-Left */}
          <motion.div
            initial={{ opacity: 0, x: -64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.78, ease: PREMIUM_EASE }}
            className="lg:col-span-7"
          >
            <div className="mb-2">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0284C7] sm:text-sm">
                What we offer
              </span>
            </div>
            <h2 className="mt-3.5 text-3xl font-extrabold leading-[1.16] tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px]">
              We provide development services for multiple industries
            </h2>
          </motion.div>

          {/* Right Description & Discover More CTA – Fade-Right */}
          <motion.div
            initial={{ opacity: 0, x: 64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.78, delay: 0.08, ease: PREMIUM_EASE }}
            className="flex flex-col items-start lg:col-span-5"
          >
            <p className="text-[15px] leading-relaxed text-[#475569] sm:text-base">
              We offer diverse businesses software services and revolutionary,
              productive software solutions.
            </p>
            <div className="mt-6">
              <Link
                href="/services"
                className="btn-cut group/btn relative inline-flex h-[46px] min-w-[160px] items-center justify-center overflow-hidden bg-[#246BFD] px-7 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(36,107,253,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,212,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2"
              >
                {/* Left-to-right white sweep layer */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-[105%] opacity-0 bg-white transition-all duration-300 ease-out group-hover/btn:translate-x-0 group-hover/btn:opacity-100"
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
        </div>

        {/* 6-Item Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {OFFER_SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={getCardInitial(index)}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.72,
                delay: (index % 3) * 0.1,
                ease: PREMIUM_EASE,
              }}
              className="flex"
            >
              <article
                className={cn(
                  "group relative flex w-full flex-col items-center rounded-2xl border px-7 py-9 text-center transition-all duration-300 sm:px-8 sm:py-10",
                  service.highlighted
                    ? "border-sky-300/60 bg-white shadow-[0_16px_44px_rgba(15,23,42,0.08)] ring-1 ring-[#00D4FF]/30 hover:-translate-y-1.5 hover:shadow-[0_22px_52px_rgba(0,212,255,0.18)]"
                    : "border-slate-200/80 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.05)] hover:-translate-y-1.5 hover:border-[#00D4FF]/50 hover:shadow-[0_18px_44px_rgba(0,212,255,0.14)]"
                )}
              >
                {/* Top Glowing Cyan Accent Line */}
                <div
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-8 top-0 h-[2px] rounded-full transition-opacity duration-300",
                    service.highlighted
                      ? "bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent"
                      : "bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent group-hover:via-[#00D4FF]"
                  )}
                />

                {/* Centered Service Icon (Static, original colors, no blue hover animation) */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/80 p-2 shadow-inner transition-colors duration-300 group-hover:border-[#00D4FF]/60 group-hover:shadow-[0_8px_20px_rgba(0,212,255,0.25)]">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    width={service.imageWidth}
                    height={service.imageHeight}
                    className="h-[46px] w-auto object-contain"
                  />
                </div>

                {/* Bold Dark Heading */}
                <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight text-[#0F172A]">
                  {service.title}
                </h3>

                {/* Grey Description */}
                <p className="mt-3 max-w-[300px] flex-1 text-[15px] leading-relaxed text-[#475569]">
                  {service.description}
                </p>

                {/* Modern Blue Technology Button with Left-to-Right White Sweep Hover */}
                <div className="mt-6">
                  <Link
                    href={service.href}
                    className="btn-cut group/btn relative inline-flex h-[46px] min-w-[160px] items-center justify-center overflow-hidden bg-[#246BFD] px-7 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(36,107,253,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,212,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2"
                  >
                    {/* Left-to-right white sweep layer */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -translate-x-[105%] opacity-0 bg-white transition-all duration-300 ease-out group-hover/btn:translate-x-0 group-hover/btn:opacity-100"
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
