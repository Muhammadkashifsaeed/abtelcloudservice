"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, Smartphone, Network, ShoppingBag, Store, Palette } from "lucide-react";
import { HorizontalPin } from "@/components/motion/HorizontalPin";

interface Capability {
  no: string;
  title: string;
  desc: string;
  href: string;
  icon: typeof Code2;
  image: string;
}

const CAPABILITIES: Capability[] = [
  { no: "01", title: "Web Development", desc: "Sub-second Next.js & React enterprise platforms.", href: "/services/web-development", icon: Code2, image: "/images/Web Development.png" },
  { no: "02", title: "Mobile Apps", desc: "Native iOS, Android & Flutter at 60fps.", href: "/services/mobile-app-development", icon: Smartphone, image: "/images/Mobile App Development.png" },
  { no: "03", title: "API Integrations", desc: "Fault-tolerant microservices & payment APIs.", href: "/services/api-integrations", icon: Network, image: "/images/API Integrations.png" },
  { no: "04", title: "E-Commerce", desc: "Headless storefronts built to scale revenue.", href: "/services/e-commerce", icon: ShoppingBag, image: "/images/E-commerce Solutions.png" },
  { no: "05", title: "Digital Marketplace", desc: "Multi-vendor platforms with split payouts.", href: "/services/digital-marketplace", icon: Store, image: "/images/Digital Marketplace Services.png" },
  { no: "06", title: "UI/UX Design", desc: "Human-centric design systems & prototypes.", href: "/services/ui-ux-design", icon: Palette, image: "/images/ui ux designe.png" },
];

export function ImmersiveCapabilitiesSection() {
  return (
    <section className="relative w-full overflow-hidden border-y border-slate-200/80 bg-white py-16 text-[#0B0E14] sm:py-24">
      {/* Subtle ambient brand light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-[#E11D48]/[0.06] blur-[150px]"
      />

      {/* Heading */}
      <div className="relative z-10 mx-auto mb-10 w-full max-w-[1320px] px-5 sm:px-8">
        <span className="eyebrow-premium">Our Capabilities</span>
        <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0B0E14] sm:text-5xl">
          Six disciplines.{" "}
          <span
            className="font-serif italic"
            style={{ background: "linear-gradient(135deg,#E11D48,#fb7185)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            One engineering team.
          </span>
        </h2>
      </div>

      <HorizontalPin label="Capabilities horizontal scroll" length={1.1}>
        {CAPABILITIES.map((cap) => (
          <Link
            key={cap.no}
            href={cap.href}
            className="group relative flex w-[78vw] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_50px_-16px_rgba(15,23,42,0.2)] sm:w-[420px] sm:p-7"
          >
            {/* Image */}
            <div className="relative mb-8 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={cap.image}
                alt={cap.title}
                fill
                sizes="420px"
                className="object-cover object-center opacity-95 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.06] motion-reduce:transition-none"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[11px] font-bold tracking-widest text-slate-900 shadow-sm backdrop-blur-md">
                {cap.no}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B0E14] text-rose-400 transition-all duration-300 group-hover:bg-[#E11D48] group-hover:text-white">
                  <cap.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-tight text-[#0B0E14] transition-colors group-hover:text-[#E11D48] sm:text-2xl">
                    {cap.title}
                  </h3>
                  <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-slate-600">{cap.desc}</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E11D48]" />
            </div>
          </Link>
        ))}
      </HorizontalPin>
    </section>
  );
}