"use client";

import React from "react";
import {
  CreditCard,
  HeartPulse,
  ShoppingCart,
  Cloud,
  Store,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Marquee } from "@/components/motion/Marquee";

interface IndustryItem {
  title: string;
  detail: string;
  icon: LucideIcon;
}

const INDUSTRIES_LIST: IndustryItem[] = [
  {
    title: "Fintech & Payment Gateways",
    detail: "PCI-DSS Compliant & Stripe Connect",
    icon: CreditCard,
  },
  {
    title: "Healthcare & HIPAA Systems",
    detail: "Encrypted Patient Portals & Telehealth",
    icon: HeartPulse,
  },
  {
    title: "High-Volume E-Commerce",
    detail: "Headless Shopify Plus & Sub-200ms Checkout",
    icon: ShoppingCart,
  },
  {
    title: "Enterprise Cloud Migration",
    detail: "AWS & Multi-Region Architecture",
    icon: Cloud,
  },
  {
    title: "Multi-Vendor Marketplaces",
    detail: "Automated Escrow & Commission Payouts",
    icon: Store,
  },
  {
    title: "Custom ERP & CRM Middleware",
    detail: "Zero-Data-Loss Microservices",
    icon: Workflow,
  },
];

export function IndustriesMarqueeSection() {
  return (
    <section
      aria-label="Enterprise Industry Solutions Marquee"
      className="relative w-full overflow-hidden border-y border-slate-200/90 bg-slate-100 py-3 sm:py-4 text-slate-900"
    >
      <Marquee speed="normal" duration={26} reverse={false} pauseOnHover={true} className="py-1">
        <div className="flex shrink-0 items-center gap-7 sm:gap-9">
          {INDUSTRIES_LIST.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex w-[280px] shrink-0 items-center gap-3 rounded-2xl border border-slate-200/90 bg-white px-4 py-2.5 shadow-xs transition-all duration-300 hover:z-10 hover:scale-[1.02] hover:border-[#E11D48]/40 hover:shadow-[0_10px_28px_-10px_rgba(225,29,72,0.35)] sm:w-[300px]"
              >
                <Icon
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 text-[#E11D48] drop-shadow-[0_0_8px_rgba(225,29,72,0.35)] transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="flex min-w-0 flex-col">
                  <span className="truncate text-sm font-bold text-[#0B0E14] tracking-wide">
                    {item.title}
                  </span>
                  <span className="truncate text-[11px] font-medium text-slate-500">
                    {item.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Marquee>
    </section>
  );
}