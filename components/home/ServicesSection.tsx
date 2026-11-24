"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Network,
  Palette,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { CurvedUnderline } from "@/components/ui/CurvedUnderline";
import { cn } from "@/utils";

export interface ServiceStackItem {
  number: string;
  index: number;
  title: string;
  promise: string;
  description: string;
  deliverables: string[];
  href: string;
  icon: typeof Code2;
  badge?: string;
  imageSrc?: string;
}

export const SIX_SERVICES: ServiceStackItem[] = [
  {
    number: "01",
    index: 1,
    title: "Web Development",
    promise: "Sub-second React & Next.js enterprise web platforms",
    description:
      "Custom web platforms engineered for speed, search visibility, high conversion rates, and seamless cloud scalability.",
    deliverables: [
      "Next.js App Router & Server Components",
      "Sub-second global Edge page performance",
      "Headless CMS & API-first integrations",
      "WCAG 2.1 AA accessibility & SEO compliance",
    ],
    href: "/services/web-development",
    icon: Code2,
    badge: "Most Requested",
    imageSrc: "/images/Web Development.png",
  },
  {
    number: "02",
    index: 2,
    title: "Mobile App Development",
    promise: "High-performance native iOS, Android, and Flutter apps",
    description:
      "Native mobile products with fluid 60fps animations, offline data synchronization, and enterprise cloud APIs.",
    deliverables: [
      "Native iOS (Swift) & Android (Kotlin)",
      "Cross-platform Flutter & React Native",
      "Offline-first local database caching",
      "Automated CI/CD App Store & Play Store pipelines",
    ],
    href: "/services/mobile-app-development",
    icon: Smartphone,
    imageSrc: "/images/Mobile App Development.png",
  },
  {
    number: "03",
    index: 3,
    title: "API Integrations",
    promise: "Fault-tolerant microservices & enterprise middleware",
    description:
      "Connect CRM, ERP, and payment systems with secure, audited microservices designed for zero data loss.",
    deliverables: [
      "RESTful, GraphQL & gRPC microservices",
      "Stripe, PayPal, and Authorize.Net gateways",
      "Salesforce, HubSpot, and ERP middleware",
      "Automated webhooks with retry queuing",
    ],
    href: "/services/api-integrations",
    icon: Network,
    imageSrc: "/images/API Integrations.png",
  },
  {
    number: "04",
    index: 4,
    title: "E-Commerce Solutions",
    promise: "Headless digital storefronts built to scale checkout revenue",
    description:
      "High-converting headless storefronts and Shopify Plus architectures with instant search and frictionless checkout funnels.",
    deliverables: [
      "Headless Shopify Plus & WooCommerce platforms",
      "Instant faceted search & catalog filtering",
      "Multi-currency & localization engines",
      "Sub-200ms checkout conversion optimization",
    ],
    href: "/services/e-commerce",
    icon: ShoppingBag,
    imageSrc: "/images/E-commerce Solutions.png",
  },
  {
    number: "05",
    index: 5,
    title: "Digital Marketplace",
    promise: "Multi-vendor architectures with automated escrow & split payouts",
    description:
      "Turnkey multi-vendor platforms with automated seller onboarding, commission split billing, and enterprise compliance.",
    deliverables: [
      "Vendor dashboard & inventory synchronization",
      "Automated escrow & commission split payouts",
      "Real-time order tracking & messaging",
      "PCI-DSS compliant payment routing",
    ],
    href: "/services/digital-marketplace",
    icon: Store,
    badge: "Enterprise",
    imageSrc: "/images/Digital Marketplace Services.png",
  },
  {
    number: "06",
    index: 6,
    title: "UI/UX Design",
    promise: "Human-centric Figma design systems and interactive prototypes",
    description:
      "Transform complex user journeys into intuitive, high-converting digital interfaces backed by usability research.",
    deliverables: [
      "User research, persona mapping & journey flows",
      "Interactive Figma high-fidelity prototypes",
      "Scalable Design System component kits",
      "Conversion rate optimization (CRO) audits",
    ],
    href: "/services/ui-ux-design",
    icon: Palette,
    imageSrc: "/images/ui ux designe.png",
  },
];

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="services"
      ref={containerRef}
      aria-label="Abtel Cloud Services Core Capabilities"
      className="relative w-full bg-[#F8FAFC] py-20 sm:py-24 lg:py-28 text-slate-900 overflow-hidden border-b border-slate-200/80"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Reveal variant="fade-down">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-900 shadow-xs">
              <Sparkles className="h-3 w-3 text-black" />
              <span>Our 6 Core Capabilities</span>
            </span>
          </Reveal>

          <Reveal variant="fade-up" delay={0.1} className="mt-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[46px] leading-[1.12]">
              Engineered For Speed, Scale, &amp;{" "}
              <span className="relative inline-block text-black">
                Compounding ROI
                <CurvedUnderline color="#9CEE69" />
              </span>
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={0.16} className="mt-4">
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
              We design, build, and deploy production-grade software platforms tailored to your business roadmap with total client code ownership.
            </p>
          </Reveal>
        </div>

        {/* Sticky Stacked Cards Showpiece */}
        <div className="mt-16 space-y-8 sm:space-y-10 lg:space-y-12">
          {SIX_SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            // Sticky top position with slight cascade offset
            const stickyTop = `calc(90px + ${index * 12}px)`;

            return (
              <div
                key={service.title}
                style={{ top: stickyTop }}
                className="sticky z-[1] transition-transform duration-300"
              >
                <article
                  className={cn(
                    "group relative overflow-hidden rounded-[28px] border border-slate-200/90 bg-white p-8 sm:p-10 lg:p-12 shadow-[0_4px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-black hover:shadow-2xl"
                  )}
                >
                  {/* Subtle Ambient Card Gradient Sweep on Hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-[var(--brand-lime)]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* Large Faded Background Number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-8 top-6 select-none font-heading text-6xl sm:text-8xl font-black text-slate-100 transition-all duration-300 group-hover:text-[var(--brand-lime)]/30 group-hover:scale-105"
                  >
                    {service.number}
                  </span>

                  <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
                    {/* Left: Icon, Badge, Title, Promise & Description */}
                    <div className="lg:col-span-7 flex flex-col items-start">
                      <div className="flex items-center gap-3">
                        {/* Icon Square with Hover Rotate */}
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-[var(--brand-lime)] shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                          <IconComponent className="h-8 w-8" />
                        </div>

                        {service.badge && (
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-900 border border-slate-200">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-black">
                        <Link href={service.href} className="inline-flex items-center gap-2">
                          <span>{service.title}</span>
                          <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                      </h3>

                      <p className="mt-2 text-base font-semibold text-slate-700">
                        {service.promise}
                      </p>

                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 max-w-xl">
                        {service.description}
                      </p>

                      <div className="mt-8 flex items-center gap-4">
                        <Link
                          href={service.href}
                          className="btn-sheen inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--brand-lime)] px-6 text-xs font-black uppercase tracking-wider text-black shadow-md transition-all hover:bg-[var(--brand-lime-hover)] hover:-translate-y-0.5"
                        >
                          <span>Explore {service.title}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>

                        <Link
                          href="/contact"
                          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 text-xs font-bold text-slate-800 hover:border-black hover:text-black transition-colors"
                        >
                          <span>Request Scope</span>
                        </Link>
                      </div>
                    </div>

                    {/* Right: Deliverables Checklist Card */}
                    <div className="lg:col-span-5">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-7 shadow-xs">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-900">
                          What We Deliver:
                        </p>
                        <ul className="mt-4 space-y-3">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Animated Lime Border Sweep Line on Card Bottom */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-black via-[var(--brand-lime)] to-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </article>
              </div>
            );
          })}
        </div>

        {/* Bottom Overview Link */}
        <Reveal variant="fade-up" delay={0.2} className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-transform hover:translate-x-1 hover:text-black"
          >
            <span>View Full Service Catalog &amp; Technical Capabilities</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
