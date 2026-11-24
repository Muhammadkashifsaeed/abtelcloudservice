"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Mail, MapPin, Phone, ShieldCheck, Loader2 } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Reveal } from "@/components/motion/Reveal";
import type { NavItem } from "@/types";

const SERVICE_LINKS: NavItem[] = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "Digital Marketing", href: "/services/digital-marketplace" },
  { label: "E-Commerce Solutions", href: "/services/e-commerce" },
  { label: "API Integrations", href: "/services/api-integrations" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
];

const COMPANY_LINKS: NavItem[] = [
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms And Conditions", href: "/terms-and-conditions" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const currentYear = 2026;

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    setStatus("idle");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message || "Thank you for subscribing to Digi Startup insights!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to subscribe. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="relative mt-auto w-full overflow-hidden section-dark bg-[#080A0F] text-[var(--text-on-dark)] border-t border-white/[0.08]">
      {/* 1. Subtle Dark Agency Cyber Grid Texture */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#040508] via-[#080A0F]/95 to-[#080A0F]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* 2. Top Glowing Lime Hairline Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--brand-lime)]/50 to-transparent"
      />

      {/* 3. Subtle Ambient Lime Atmospheric Glow Lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[var(--brand-lime)]/[0.06] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[var(--brand-lime)]/[0.05] blur-[120px]"
      />

      {/* 4. Main Footer Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Column 1: Mission Statement & Social Links */}
          <div className="flex flex-col items-start lg:col-span-4 lg:pr-6">
            <Reveal variant="fade-left">
              <p className="max-w-sm text-sm leading-relaxed text-slate-300">
                We engineer scalable software, modern mobile apps, and high-growth digital experiences that empower startups and modern enterprises to dominate their markets.
              </p>

              {/* Social Links */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-[var(--brand-lime)] hover:bg-[var(--brand-lime)] hover:text-black"
                >
                  <FaFacebookF className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-[var(--brand-lime)] hover:bg-[var(--brand-lime)] hover:text-black"
                >
                  <FaInstagram className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2">
            <Reveal variant="fade-up" delay={0.08}>
              <h3 className="mb-4 text-xs font-bold tracking-[0.2em] uppercase text-[var(--brand-lime)]">
                Services
              </h3>
              <ul className="space-y-3">
                {SERVICE_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-[var(--brand-lime)]"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-[var(--brand-lime)] opacity-60 transition-transform duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2">
            <Reveal variant="fade-up" delay={0.16}>
              <h3 className="mb-4 text-xs font-bold tracking-[0.2em] uppercase text-[var(--brand-lime)]">
                Company
              </h3>
              <ul className="space-y-3">
                {COMPANY_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-[var(--brand-lime)]"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-[var(--brand-lime)] opacity-60 transition-transform duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Column 4: Get in touch & Newsletter */}
          <div className="lg:col-span-4 lg:pl-2">
            <Reveal variant="fade-right" delay={0.22}>
              <h3 className="mb-4 text-xs font-bold tracking-[0.2em] uppercase text-[var(--brand-lime)]">
                Get in Touch
              </h3>

              <ul className="space-y-2.5 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 shrink-0 text-[var(--brand-lime)]" aria-hidden="true" />
                  <span>San-Antonio, Texas</span>
                </li>
                <li>
                  <a
                    href="mailto:sales@abtelcloud.com"
                    className="flex items-center gap-2.5 transition-colors hover:text-[var(--brand-lime)]"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[var(--brand-lime)]" aria-hidden="true" />
                    <span>sales@abtelcloud.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+18004844204"
                    className="flex items-center gap-2.5 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-[var(--brand-lime)]" aria-hidden="true" />
                    <span>+1 800 484 4204</span>
                  </a>
                </li>
              </ul>

              {/* Newsletter Subscription */}
              <div className="mt-6">
                <p className="text-xs font-medium text-slate-300">
                  Subscribe for digital product insights, startup growth playbooks, and modern engineering updates.
                </p>

                <form onSubmit={handleSubscribe} className="mt-3 flex flex-col gap-2.5">
                  <div className="relative">
                    <input
                      type="email"
                      name="footer-email"
                      aria-label="Email address for newsletter"
                      placeholder="Enter your email address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                      className="h-11 w-full rounded-full border border-white/15 bg-white/5 pl-4 pr-36 text-sm text-white placeholder:text-slate-400 focus:border-[#C5D82E] focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[#C5D82E]"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-sheen group/sub absolute right-1 top-1 inline-flex h-9 items-center justify-center gap-1.5 overflow-hidden rounded-full bg-[#C5D82E] px-4 sm:px-5 text-xs font-black text-black shadow-[0_2px_14px_rgba(197,216,46,0.45)] transition-all duration-300 hover:bg-[#B1C229] hover:shadow-[0_4px_22px_rgba(197,216,46,0.7)] hover:scale-[1.02] active:scale-95 disabled:opacity-50 cursor-pointer"
                    >
                      {isLoading ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin text-black" />
                      ) : (
                        <span className="relative z-10 flex items-center gap-1.5">
                          <span>Subscribe</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/sub:translate-x-0.5" />
                        </span>
                      )}
                    </button>
                  </div>

                  {status === "success" && (
                    <p role="status" className="text-xs font-semibold text-[var(--brand-lime)]">
                      {message}
                    </p>
                  )}
                  {status === "error" && (
                    <p role="alert" className="text-xs font-semibold text-rose-400">
                      {message}
                    </p>
                  )}

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <ShieldCheck className="h-3.5 w-3.5 text-[var(--brand-lime)]" />
                    <span>No spam. Unsubscribe at any time.</span>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* 5. Bottom Copyright Bar */}
      <div className="relative z-10 border-t border-white/[0.08] bg-[#05070A] py-4 text-xs text-slate-400">
        <div className="mx-auto flex w-full max-w-[1360px] flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center sm:text-left">
            Copyright &copy; {currentYear} Digi Startup. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[var(--brand-lime)]"
            >
              Privacy Policy
            </Link>
            <span className="h-3 w-px bg-white/20" aria-hidden="true" />
            <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-[var(--brand-lime)]"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
