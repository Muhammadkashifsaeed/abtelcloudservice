"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Megaphone,
  Network,
  Palette,
  ShoppingBag,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { CurvedUnderline } from "@/components/ui/CurvedUnderline";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

interface OfferServiceItem {
  title: string;
  description: string;
  imageSrc: string;
  icon: typeof Code2;
  href: string;
  badge?: string;
}

const OFFER_SERVICES: OfferServiceItem[] = [
  {
    title: "Web Development",
    description:
      "Enterprise Next.js, React & modern headless web platforms engineered for speed, conversion, and global scale.",
    imageSrc: "/images/web-dev-hero-ai.jpg",
    icon: Code2,
    href: "/services/web-development",
    badge: "Popular",
  },
  {
    title: "Mobile App Development",
    description:
      "Native iOS, Android, and cross-platform Flutter mobile applications with 60fps animations and seamless offline sync.",
    imageSrc: "/images/mobile-app-hero-ai.jpg",
    icon: Smartphone,
    href: "/services/mobile-app-development",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven growth funnels, performance marketing, programmatic SEO, and conversion rate optimization that scale revenue.",
    imageSrc: "/images/digital-marketplace-hero-ai.jpg",
    icon: Megaphone,
    href: "/services/digital-marketplace",
    badge: "Growth",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Scalable headless Shopify Plus, WooCommerce, and custom checkout funnels tailored to maximize average order value.",
    imageSrc: "/images/ecommerce-hero-ai.jpg",
    icon: ShoppingBag,
    href: "/services/e-commerce",
  },
  {
    title: "UI/UX Design",
    description:
      "High-converting design systems, user experience wireframes, interactive Figma prototypes, and modern digital interfaces.",
    imageSrc: "/images/ui-ux-hero-ai.jpg",
    icon: Palette,
    href: "/services/ui-ux-design",
  },
  {
    title: "API Integrations",
    description:
      "Secure enterprise microservices, payment gateways, CRM/ERP middleware, and automated real-time webhooks.",
    imageSrc: "/images/api-integrations-hero-ai.jpg",
    icon: Network,
    href: "/services/api-integrations",
  },
];

export function WhatWeOfferSection() {
  return (
    <section
      aria-label="What We Offer"
      className="relative w-full overflow-hidden bg-[#EEF2F6] py-20 sm:py-24 lg:py-28 text-[#0B0E14] border-y border-slate-200/80"
    >
      {/* Subtle Matrix Dot Pattern for Tech Texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(#94A3B8_1px,transparent_1px)] bg-[size:28px_28px]"
      />

      {/* Subtle Ambient Brand Lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-[var(--brand-lime)]/[0.08] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-[var(--brand-lime)]/[0.06] blur-[160px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Top Split Header */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
          {/* Left Header – Fade Left */}
          <motion.div
            initial={{ opacity: 0, x: -65, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.75, ease: LUXURY_EASE }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-slate-800 shadow-xs">
              <Sparkles className="h-3 w-3 text-black" />
              <span>What We Offer</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B0E14] sm:text-4xl lg:text-[44px] leading-[1.14]">
              We provide development services for{" "}
              <span className="relative inline-block text-[var(--brand-lime)]">
                multiple industries
                <CurvedUnderline color="#FF5E14" />
              </span>
            </h2>
          </motion.div>

          {/* Right Header – Fade Right */}
          <motion.div
            initial={{ opacity: 0, x: 65, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.75, delay: 0.08, ease: LUXURY_EASE }}
            className="flex flex-col items-start lg:col-span-5"
          >
            <p className="text-[15px] leading-relaxed text-slate-600 sm:text-base">
              From web engineering to digital marketing and scalable mobile apps, Abtel Cloud Services provides end-to-end technology solutions tailored for modern businesses.
            </p>
            <div className="mt-6">
              <Link
                href="/services"
                className="group/btn relative inline-flex h-[46px] min-w-[160px] items-center justify-center overflow-hidden rounded-full bg-[var(--brand-lime)] px-7 text-sm font-black text-black shadow-[0_4px_20px_rgba(255,94,20,0.35)] transition-all duration-300 hover:bg-[var(--brand-lime-hover)] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,94,20,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-lime)] active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Explore All Services</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 6 Core Agency Services Grid (Screenshot Matching Style) */}
        <div className="mt-12 grid grid-cols-1 gap-7 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:gap-9">
          {OFFER_SERVICES.map((item, index) => {
            const colIndex = index % 3;
            const cardInitial =
              colIndex === 0
                ? { opacity: 0, x: -50, filter: "blur(3px)" }
                : colIndex === 1
                  ? { opacity: 0, y: 40, filter: "blur(3px)" }
                  : { opacity: 0, x: 50, filter: "blur(3px)" };

            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={cardInitial}
                whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.65,
                  delay: colIndex * 0.1,
                  ease: LUXURY_EASE,
                }}
                className="h-full"
              >
                <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-tl-[40px] rounded-br-[40px] rounded-tr-none rounded-bl-none border border-slate-200/80 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.06)]">
                  {/* Top Image Showcase Area */}
                  <div className="group/image relative w-full">
                    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-tl-[40px] rounded-tr-none bg-slate-100">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />

                      {/* Floating Badge (if present) */}
                      {item.badge && (
                        <span className="absolute top-4 right-4 z-10 rounded-full bg-white/95 px-3 py-1 text-[10.5px] font-black uppercase tracking-wider text-slate-900 shadow-sm backdrop-blur-md">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Floating Overlapping Icon Box (Changes color when mouse is over the image or icon) */}
                    <div className="absolute -bottom-7 left-7 z-20 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B0E14] text-[var(--brand-lime)] shadow-[0_8px_20px_rgba(0,0,0,0.28)] transition-colors duration-300 group-hover/image:bg-[var(--brand-lime)] group-hover/image:text-black group-hover/image:shadow-[0_8px_24px_rgba(255,94,20,0.45)] hover:bg-[var(--brand-lime)] hover:text-black hover:shadow-[0_8px_24px_rgba(255,94,20,0.45)]">
                      <IconComponent className="h-6 w-6 stroke-[1.9]" />
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="relative flex flex-1 flex-col justify-between px-7 pt-10 pb-7">
                    {/* Decorative Circuit Board Vector Graphic on Right (matching reference) */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute right-4 top-2 select-none opacity-45"
                    >
                      <svg
                        width="128"
                        height="48"
                        viewBox="0 0 128 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-slate-300"
                      >
                        <path
                          d="M8 22H36L48 8H86"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                        <circle cx="86" cy="8" r="2.5" fill="currentColor" />
                        <path
                          d="M20 22L34 36H72L86 22H112"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                        <circle cx="112" cy="22" r="2.5" fill="currentColor" />
                        <path
                          d="M44 36L54 44H92"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                        <circle cx="92" cy="44" r="2.5" fill="currentColor" />
                      </svg>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors hover:text-black">
                        <Link
                          href={item.href}
                          className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black hover:text-black"
                        >
                          {item.title}
                        </Link>
                      </h3>

                      <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Action: Clean "Read More →" Link without border line */}
                    <div className="mt-6 flex items-center">
                      <Link
                        href={item.href}
                        className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-slate-800 transition-colors hover:text-black"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 text-slate-700 transition-transform duration-200 group-hover/link:translate-x-1.5 group-hover/link:text-black" />
                      </Link>
                    </div>
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
