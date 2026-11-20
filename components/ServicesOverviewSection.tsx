"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

interface ServiceNameItem {
  id: string;
  name: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  href: string;
}

const ALL_SERVICES_NAMES: ServiceNameItem[] = [
  {
    id: "web-development",
    name: "Web Development",
    iconSrc: "/images/Web Development.png",
    iconWidth: 55,
    iconHeight: 49,
    href: "/services/web-development",
  },
  {
    id: "mobile-app-development",
    name: "Mobile App Development",
    iconSrc: "/images/Mobile App Development.png",
    iconWidth: 50,
    iconHeight: 49,
    href: "/services/mobile-app-development",
  },
  {
    id: "api-integration",
    name: "API Integration",
    iconSrc: "/images/API Integrations.png",
    iconWidth: 50,
    iconHeight: 49,
    href: "/services/api-integrations",
  },
  {
    id: "e-commerce",
    name: "E-commerce",
    iconSrc: "/images/E-commerce.png",
    iconWidth: 52,
    iconHeight: 49,
    href: "/services/e-commerce",
  },
  {
    id: "digital-marketplace",
    name: "Digital Marketplace Services",
    iconSrc: "/images/Digital Marketplace Services.png",
    iconWidth: 50,
    iconHeight: 49,
    href: "/services/digital-marketplace",
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    iconSrc: "/images/ui ux designe.png",
    iconWidth: 52,
    iconHeight: 49,
    href: "/services/ui-ux-design",
  },
  {
    id: "custom-software",
    name: "Custom Software Development",
    iconSrc: "/images/Custom Software Development.png",
    iconWidth: 55,
    iconHeight: 49,
    href: "/services#software-dev",
  },
  {
    id: "cloud-services",
    name: "Cloud Services",
    iconSrc: "/images/Cloud Services.png",
    iconWidth: 60,
    iconHeight: 49,
    href: "/services#server-management",
  },
];

export function ServicesOverviewSection() {
  return (
    <section
      aria-label="All Services Overview"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9] py-16 sm:py-20 lg:py-24"
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
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Showcase Image __next_static_media_2.fb1d0fcc.jpg */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.88, ease: PREMIUM_EASE }}
            className="flex flex-col items-center lg:col-span-6"
          >
            <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-3 shadow-[0_20px_50px_rgba(15,23,42,0.10)] transition-all duration-300 hover:border-[#00D4FF]/60 hover:shadow-[0_24px_56px_rgba(0,212,255,0.22)]">
              {/* Top Accent Cyan Glow Line */}
              <div
                aria-hidden="true"
                className="absolute inset-x-8 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#00D4FF]/60 to-transparent"
              />

              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/__next_static_media_2.fb1d0fcc.jpg"
                  alt="Abtel Cloud Services Architecture"
                  width={897}
                  height={521}
                  priority
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Quality Subtitle */}
              <div className="mt-3.5 flex items-center justify-between px-2 pb-1">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0284C7]">
                  <CheckCircle2 className="h-4 w-4 text-[#00D4FF]" aria-hidden="true" />
                  <span>Enterprise Grade Solutions</span>
                </div>
                <span className="text-xs font-medium text-slate-400">Abtel Cloud</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Heading "All services" & Just Names */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.88, delay: 0.08, ease: PREMIUM_EASE }}
            className="flex flex-col lg:col-span-6"
          >
            {/* Eyebrow */}
            <div className="mb-2 self-start">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0284C7] sm:text-sm">
                WHAT WE DO
              </span>
            </div>

            {/* Main Heading: "All services" */}
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#0F172A] sm:text-4xl lg:text-[44px]">
              All services
            </h2>

            <p className="mt-3.5 text-[15px] leading-relaxed text-[#475569] sm:text-base">
              Comprehensive digital engineering and cloud capabilities designed to accelerate modern enterprise growth.
            </p>

            {/* Clean Grid of Just Names */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
              {ALL_SERVICES_NAMES.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group relative flex items-center gap-3.5 rounded-xl border border-slate-200/80 bg-white px-4 py-3 shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00D4FF]/60 hover:bg-sky-50/40 hover:shadow-[0_8px_24px_rgba(0,212,255,0.16)]"
                >
                  {/* Icon with bottom-to-top blue sweep hover animation */}
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200/80 bg-slate-50 p-1.5 shadow-inner transition-all duration-300 group-hover:border-[#00D4FF]/60">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 translate-y-full bg-gradient-to-t from-[#00D4FF] via-[#0EA5E9] to-[#246BFD] transition-transform duration-300 ease-out group-hover:translate-y-0"
                    />
                    <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={service.iconSrc}
                        alt={service.name}
                        width={service.iconWidth}
                        height={service.iconHeight}
                        className="h-[24px] w-auto object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                      />
                    </div>
                  </div>

                  {/* Just the Name */}
                  <span className="flex-1 text-sm font-semibold tracking-tight text-[#0F172A] transition-colors duration-200 group-hover:text-[#0284C7]">
                    {service.name}
                  </span>

                  {/* Hover Arrow */}
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-slate-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#00D4FF]"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
