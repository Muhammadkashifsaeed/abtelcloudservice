"use client";

import React from "react";
import { Building2, ShieldCheck, Briefcase } from "lucide-react";
import { Marquee } from "@/components/motion/Marquee";

const INDUSTRIES_LIST = [
  {
    title: "Fintech & Payment Gateways",
    detail: "PCI-DSS Compliant & Stripe Connect",
    badgeColor: "border-emerald-400/30 text-emerald-300 bg-emerald-500/10",
  },
  {
    title: "Healthcare & HIPAA Systems",
    detail: "Encrypted Patient Portals & Telehealth",
    badgeColor: "border-cyan-400/30 text-cyan-300 bg-cyan-500/10",
  },
  {
    title: "High-Volume E-Commerce",
    detail: "Headless Shopify Plus & Sub-200ms Checkout",
    badgeColor: "border-amber-400/30 text-amber-300 bg-amber-500/10",
  },
  {
    title: "Enterprise Cloud Migration",
    detail: "AWS & Azure Multi-Region Architecture",
    badgeColor: "border-blue-400/30 text-blue-300 bg-blue-500/10",
  },
  {
    title: "Multi-Vendor Marketplaces",
    detail: "Automated Escrow & Commission Payouts",
    badgeColor: "border-purple-400/30 text-purple-300 bg-purple-500/10",
  },
  {
    title: "Custom ERP & CRM Middleware",
    detail: "Zero-Data-Loss Microservices",
    badgeColor: "border-rose-400/30 text-rose-300 bg-rose-500/10",
  },
];

export function IndustriesMarqueeSection() {
  return (
    <section
      aria-label="Enterprise Industry Solutions Marquee"
      className="relative w-full overflow-hidden border-y border-[var(--brand-cyan)]/25 bg-gradient-to-r from-[#071428] via-[#0B1F3A] to-[#071428] py-5 sm:py-6 text-white shadow-[0_8px_24px_rgba(7,20,40,0.5)]"
    >
      {/* Subtle brand glow on dark navy */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,199,242,0.08),transparent_70%)]"
      />

      <Marquee speed="normal" reverse={false} className="py-1">
        <div className="flex shrink-0 items-center gap-6 sm:gap-8">
          {INDUSTRIES_LIST.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-2.5 backdrop-blur-md shrink-0 transition-transform hover:scale-[1.02]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--brand-royal)]/40 text-[var(--brand-cyan)]">
                <Briefcase className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white tracking-wide">
                  {item.title}
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  {item.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
