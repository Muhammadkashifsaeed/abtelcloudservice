"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

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
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9] py-18 sm:py-22 lg:py-26"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Showcase Image – Fade Left */}
          <motion.div
            initial={{ opacity: 0, x: -65 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="flex flex-col items-center lg:col-span-6"
          >
            <div className="group relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-3 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-[#00D4FF]/60 hover:shadow-[0_24px_56px_rgba(0,212,255,0.18)]">
              {/* Top Accent Line */}
              <div
                aria-hidden="true"
                className="absolute inset-x-8 top-0 h-[2.5px] rounded-full bg-gradient-to-r from-[#2563EB] via-[#00D4FF] to-[#2563EB]"
              />

              <div className="relative overflow-hidden rounded-2xl">
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
              <div className="mt-4 flex items-center justify-between px-3 pb-1">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                  <CheckCircle2 className="h-4 w-4 text-[#00D4FF]" aria-hidden="true" />
                  <span>Enterprise Grade Solutions</span>
                </div>
                <span className="text-xs font-medium text-slate-400">Abtel Cloud</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: All Services List – Fade Right */}
          <motion.div
            initial={{ opacity: 0, x: 65 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, delay: 0.1, ease: LUXURY_EASE }}
            className="flex flex-col lg:col-span-6"
          >
            <div className="mb-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#3D96CE]/10 border border-[#3D96CE]/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#3D96CE] shadow-sm">
                Service Catalog
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#090D24] sm:text-4xl lg:text-[44px] leading-[1.16]">
              All services
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
              Explore our core technical specializations tailored for high-growth enterprises and digital innovators.
            </p>

            {/* 2-Column Services Grid */}
            <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {ALL_SERVICES_NAMES.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white px-4 py-3.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00D4FF]/50 hover:shadow-[0_8px_20px_rgba(37,99,235,0.1)]"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-1.5 transition-transform group-hover:scale-105">
                      <Image
                        src={service.iconSrc}
                        alt={service.name}
                        width={32}
                        height={32}
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                    <span className="truncate text-sm font-semibold text-[#090D24] transition-colors group-hover:text-[#2563EB]">
                      {service.name}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#2563EB]" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
