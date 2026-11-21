"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card3D } from "@/components/Card3D";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

interface OfferServiceItem {
  title: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  href: string;
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

export function WhatWeOfferSection() {
  return (
    <section
      aria-label="What We Offer"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9] py-18 sm:py-22 lg:py-26"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Top Split Header */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
          {/* Left Header – Fade Left */}
          <motion.div
            initial={{ opacity: 0, x: -65 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.75, ease: LUXURY_EASE }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center rounded-full bg-blue-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#0C5ADB] shadow-sm">
              <span>What we offer</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#090D24] sm:text-4xl lg:text-[44px] leading-[1.14]">
              We provide development services for multiple industries
            </h2>
          </motion.div>

          {/* Right Header – Fade Right */}
          <motion.div
            initial={{ opacity: 0, x: 65 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.75, delay: 0.08, ease: LUXURY_EASE }}
            className="flex flex-col items-start lg:col-span-5"
          >
            <p className="text-[15px] leading-relaxed text-slate-600 sm:text-base">
              We offer diverse businesses software services and revolutionary,
              productive software solutions.
            </p>
            <div className="mt-6">
              <Link
                href="/services"
                className="group/btn relative inline-flex h-[46px] min-w-[160px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#246BFD] via-[#0C5ADB] to-[#00D4FF] px-7 text-sm font-semibold text-white shadow-[0_0_24px_rgba(36,107,253,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(0,212,255,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
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
        </div>

        {/* 6 Industry Services Grid – Dynamic 3-Direction Scroll Flow (Fade Left, Fade Up, Fade Right) */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7 lg:gap-8">
          {OFFER_SERVICES.map((item, index) => {
            const colIndex = index % 3;
            const cardInitial =
              colIndex === 0
                ? { opacity: 0, x: -50, y: 20 }
                : colIndex === 1
                  ? { opacity: 0, y: 55 }
                  : { opacity: 0, x: 50, y: 20 };

            return (
              <motion.div
                key={item.title}
                initial={cardInitial}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.7,
                  delay: colIndex * 0.1,
                  ease: LUXURY_EASE,
                }}
                className="h-full"
              >
                <Card3D
                  maxTilt={6}
                  scaleOnHover={1.02}
                  glareOpacity={0.12}
                  borderGlowColor="rgba(0, 212, 255, 0.22)"
                  className="h-full rounded-3xl"
                >
                  <article className="group relative flex h-full flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/95 p-7 sm:p-8 shadow-[0_6px_24px_rgba(15,23,42,0.05),0_0_1px_1px_rgba(255,255,255,0.8)_inset] backdrop-blur-sm transition-all duration-300 hover:border-[#00D4FF]/40 hover:shadow-[0_20px_42px_rgba(37,99,235,0.14)] [transform-style:preserve-3d]">
                    {/* Top Subtle Hover Accent Bar */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-8 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent transition-all duration-300 group-hover:via-[#00D4FF] group-hover:shadow-[0_0_8px_#00D4FF]"
                    />

                    <div>
                      <div className="flex items-center justify-between [transform:translateZ(20px)]">
                        {/* Icon Container */}
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/90 p-2.5 shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:border-[#00D4FF]/50 group-hover:shadow-[0_8px_24px_rgba(0,212,255,0.25)]">
                          <Image
                            src={item.imageSrc}
                            alt={item.title}
                            width={item.imageWidth}
                            height={item.imageHeight}
                            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>

                        <span className="font-mono text-xs font-semibold text-slate-400 group-hover:text-[#2563EB] transition-colors">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-6 text-xl font-bold tracking-tight text-[#090D24] transition-colors group-hover:text-[#2563EB] [transform:translateZ(12px)]">
                        <Link href={item.href} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg">
                          {item.title}
                        </Link>
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-slate-600 [transform:translateZ(6px)]">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Card Action */}
                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 [transform:translateZ(14px)]">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-[#2563EB] transition-colors">
                        Explore
                      </span>
                      <Link
                        href={item.href}
                        aria-label={`Learn more about ${item.title}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-200 group-hover:bg-[#2563EB] group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(37,99,235,0.3)]"
                      >
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
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
