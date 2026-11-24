"use client";

import React from "react";
import { Briefcase } from "lucide-react";
import { Marquee } from "@/components/motion/Marquee";

const INDUSTRIES_LIST = [
  {
    title: "Fintech & Payment Gateways",
    detail: "PCI-DSS Compliant & Stripe Connect",
    badgeColor: "border-emerald-400/30 text-emerald-700 bg-emerald-50",
  },
  {
    title: "Healthcare & HIPAA Systems",
    detail: "Encrypted Patient Portals & Telehealth",
    badgeColor: "border-emerald-400/30 text-emerald-700 bg-emerald-50",
  },
  {
    title: "High-Volume E-Commerce",
    detail: "Headless Shopify Plus & Sub-200ms Checkout",
    badgeColor: "border-amber-400/30 text-amber-700 bg-amber-50",
  },
  {
    title: "Enterprise Cloud Migration",
    detail: "AWS & Multi-Region Architecture",
    badgeColor: "border-slate-300 text-slate-700 bg-slate-100",
  },
  {
    title: "Multi-Vendor Marketplaces",
    detail: "Automated Escrow & Commission Payouts",
    badgeColor: "border-purple-300 text-purple-700 bg-purple-50",
  },
  {
    title: "Custom ERP & CRM Middleware",
    detail: "Zero-Data-Loss Microservices",
    badgeColor: "border-rose-300 text-rose-700 bg-rose-50",
  },
];

export function IndustriesMarqueeSection() {
  return (
    <section
      aria-label="Enterprise Industry Solutions Marquee"
      className="relative w-full overflow-hidden border-y border-slate-200/90 bg-slate-100 py-5 sm:py-6 text-slate-900"
    >
      <Marquee speed="normal" reverse={false} className="py-1">
        <div className="flex shrink-0 items-center gap-6 sm:gap-8">
          {INDUSTRIES_LIST.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 rounded-2xl border border-slate-200/90 bg-white px-5 py-2.5 shadow-xs shrink-0 transition-all hover:scale-[1.02] hover:border-black"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--brand-lime)]/20 text-white">
                <Briefcase className="h-4 w-4 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#0B0E14] tracking-wide">
                  {item.title}
                </span>
                <span className="text-[11px] font-medium text-slate-500">
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
