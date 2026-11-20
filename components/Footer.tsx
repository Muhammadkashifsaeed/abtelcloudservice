"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Mail, ShieldCheck } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import type { NavItem } from "@/types";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

const SERVICE_LINKS: NavItem[] = [
  { label: "Web development", href: "/services/web-development" },
  { label: "E-commerce", href: "/services/e-commerce" },
  { label: "Server Management", href: "/services#server-management" },
  { label: "Security Service", href: "/services#security-service" },
  { label: "Artificial Intelligence", href: "/services#artificial-intelligence" },
  { label: "Software Dev", href: "/services#software-dev" },
];

const COMPANY_LINKS: NavItem[] = [
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto w-full overflow-hidden bg-gradient-to-r from-[#2B2082] via-[#241A70] to-[#1E155E] text-white">
      {/* Top Border Cyan Glow Highlight */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent shadow-[0_0_20px_rgba(0,212,255,0.7)]"
      />

      {/* Brand & Logo Theme Gradient Layer (#3D30BA to #2B237F) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#3D30BA]/65 via-[#342A9C]/50 to-[#2B237F]/70"
      />

      {/* Ambient Color & Brand Theme Glow Meshes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-16 h-[460px] w-[460px] rounded-full bg-[#3D30BA]/45 blur-[125px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 -bottom-24 h-[460px] w-[460px] rounded-full bg-[#2B237F]/50 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-12 h-80 w-80 rounded-full bg-[#00D4FF]/22 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/3 left-1/2 h-72 w-[540px] -translate-x-1/2 rounded-full bg-[#4338CA]/35 blur-[120px]"
      />

      {/* Enhanced High-Definition Tiled Circuit-Board Background Image */}
      <div
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/bg_pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "220px 220px",
        }}
        className="pointer-events-none absolute inset-0 opacity-[0.28] mix-blend-screen"
      />

      {/* Subtle Glowing Dot Matrix Accent Layer */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.22]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="footer-dot-matrix-pro"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.1" fill="#7DD3FC" fillOpacity="0.5" />
            <circle cx="18" cy="18" r="0.9" fill="#818CF8" fillOpacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-dot-matrix-pro)" />
      </svg>

      {/* Soft Luminous Vignette (Smooth depth in theme palette without black washout) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#2B2082]/30 via-transparent to-[#18104E]/50"
      />

      {/* Main Footer Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 pt-10 pb-9 sm:px-6 sm:pt-12 sm:pb-10 lg:px-8 lg:pt-12 lg:pb-11">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Logo, Brand Text & Quality Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: PREMIUM_EASE }}
            className="flex flex-col items-start lg:col-span-4 lg:pr-8"
          >
            <Link
              href="/"
              aria-label="Abtel Cloud Services Home"
              className="inline-block transition-opacity hover:opacity-90"
            >
              <Image
                src="/images/ABTEL-CLOUD-SERVICES-logo-1.png"
                alt="Abtel Cloud Services"
                width={1400}
                height={1059}
                className="h-auto w-[138px] object-contain drop-shadow-[0_2px_12px_rgba(0,212,255,0.30)] sm:w-[158px]"
              />
            </Link>

            <p className="mt-3.5 max-w-sm text-sm leading-relaxed text-white">
              We create IT solutions that are easy to use, easy to manage, and easy to trust.
            </p>

            <div className="mt-3.5">
              <span className="text-xs font-medium uppercase tracking-wider text-[#00D4FF]">
                Innovative IT &amp; Cloud Services
              </span>
            </div>
          </motion.div>

          {/* Column 2: Services (All white text) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.08, ease: PREMIUM_EASE }}
            className="lg:col-span-2"
          >
            <h2 className="mb-4 text-[16px] font-semibold tracking-wider uppercase text-white">
              Services
            </h2>

            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white transition-all duration-200 hover:translate-x-1 hover:text-[#00D4FF]"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-white/80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#00D4FF]" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Company (All white text) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.16, ease: PREMIUM_EASE }}
            className="lg:col-span-2"
          >
            <h2 className="mb-4 text-[16px] font-semibold tracking-wider uppercase text-white">
              Company
            </h2>

            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white transition-all duration-200 hover:translate-x-1 hover:text-[#00D4FF]"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-white/80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#00D4FF]" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Get in touch (All white text) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.24, ease: PREMIUM_EASE }}
            className="lg:col-span-4 lg:pl-4"
          >
            <h2 className="mb-4 text-[16px] font-semibold tracking-wider uppercase text-white">
              Get in touch
            </h2>

            <p className="text-sm leading-relaxed text-white">
              Subscribe to stay updated with our latest cloud innovations and software solutions.
            </p>

            {/* Email Subscribe / Discover Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex flex-col space-y-3"
            >
              {/* Email Input Field */}
              <div className="group/input relative w-full">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#7DD3FC] transition-colors duration-200 group-focus-within/input:text-[#00D4FF]"
                >
                  <Mail className="h-4 w-4 transition-transform duration-200 group-focus-within/input:scale-110" />
                </span>
                <input
                  type="email"
                  name="footer-email"
                  aria-label="Email address"
                  placeholder="Enter your email address..."
                  required
                  className="h-[46px] w-full rounded-xl border border-white/25 bg-white/[0.09] py-2.5 pl-10 pr-4 text-sm font-medium text-white placeholder:text-white/70 placeholder:font-normal shadow-[inset_0_2px_6px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-200 hover:border-white/40 hover:bg-white/[0.13] focus:border-[#00D4FF] focus:bg-white/[0.16] focus:shadow-[0_0_18px_rgba(0,212,255,0.40)] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]"
                />
              </div>

              {/* Discover More Button with Enhanced Theme Gradient & White Sweep Hover */}
              <button
                type="submit"
                className="btn-cut group/btn relative inline-flex h-[46px] w-full items-center justify-center overflow-hidden border border-[#00D4FF]/30 bg-gradient-to-r from-[#2563EB] via-[#0284C7] to-[#00D4FF] px-6 text-sm font-bold tracking-wide text-white shadow-[0_4px_20px_rgba(0,212,255,0.38)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,212,255,0.65)] hover:border-[#00D4FF]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2"
              >
                {/* Left-to-right white sweep layer */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover/btn:translate-x-0"
                />
                <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 group-hover/btn:text-[#0B0E2E]">
                  <span>Discover more</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </button>

              {/* Protecting Your Service Text & Trust Badge */}
              <div className="flex items-center gap-2 pt-0.5 text-xs font-medium text-white">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#00D4FF]" aria-hidden="true" />
                <span>Protecting Your Service</span>
              </div>
            </form>

            {/* Social Media Badges */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-[#00D4FF] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00D4FF] hover:bg-[#00D4FF] hover:text-[#0B0E2B] hover:shadow-[0_0_16px_rgba(0,212,255,0.45)]"
              >
                <FaFacebookF className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-[#00D4FF] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00D4FF] hover:bg-[#00D4FF] hover:text-[#0B0E2B] hover:shadow-[0_0_16px_rgba(0,212,255,0.45)]"
              >
                <FaInstagram className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Professional Dark Bottom Copyright Bar with Brand Harmony */}
      <div className="relative z-10 border-t border-white/15 bg-gradient-to-r from-[#221868]/95 via-[#1B1353]/95 to-[#160E45]/95">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-2.5 px-4 py-3 sm:flex-row sm:px-6 sm:py-3.5 lg:px-8 text-xs text-white sm:text-sm">
          <p className="text-center sm:text-left text-white">
            Copyright &copy; 2026 Dev Abtel Cloud Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white">
            <Link
              href="/privacy-policy"
              className="text-white transition-colors duration-200 hover:text-[#00D4FF]"
            >
              Privacy Policy
            </Link>
            <span className="h-3 w-px bg-white/20" aria-hidden="true" />
            <Link
              href="/terms-and-conditions"
              className="text-white transition-colors duration-200 hover:text-[#00D4FF]"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
