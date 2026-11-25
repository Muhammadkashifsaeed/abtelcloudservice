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
      <Marquee speed="normal" reverse={false} className="py-1">
        <div className="flex shrink-0 items-center gap-6 sm:gap-8">
          {INDUSTRIES_LIST.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex shrink-0 items-center gap-3 rounded-2xl border border-slate-200/90 bg-white px-4 py-2 shadow-xs transition-all hover:scale-[1.02] hover:border-black"
              >
                <Icon
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 text-[var(--brand-lime)] drop-shadow-[0_0_8px_rgba(14,71,57,0.4)] transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#0B0E14] tracking-wide">
                    {item.title}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">
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