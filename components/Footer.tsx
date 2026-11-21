"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Mail, ShieldCheck } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Floating3DRing } from "@/components/Floating3DElements";
import type { NavItem } from "@/types";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

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
    <footer className="relative mt-auto w-full overflow-hidden bg-[#070A1E] text-white border-t border-white/[0.08]">
      {/* AI Futuristic Tech Neural Network Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/footer-ai-network-bg.jpg"
          alt="AI Quantum Cloud Network"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-65 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A1E] via-[#070A1E]/75 to-[#070A1E]/90" />
      </div>

      {/* Top Border Cyan Glow Highlight Line */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00D4FF]/60 to-transparent shadow-[0_0_16px_rgba(0,212,255,0.6)] z-10"
      />

      {/* Ambient Gradient Glow Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-20 h-[480px] w-[480px] rounded-full bg-[#2563EB]/15 blur-[130px] z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 -bottom-32 h-[480px] w-[480px] rounded-full bg-[#00D4FF]/10 blur-[140px] z-10"
      />

      {/* 3D Floating Gyroscope Ring in Footer */}
      <Floating3DRing
        size={360}
        color="rgba(0, 212, 255, 0.25)"
        duration={30}
        reverse
        className="bottom-0 right-10 opacity-70 z-0 pointer-events-none hidden lg:block"
      />

      {/* Subtle Glowing Dot Matrix Background */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="footer-dot-matrix-tech"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="#7DD3FC" fillOpacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-dot-matrix-tech)" />
      </svg>

      {/* Main Footer Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 pt-14 pb-12 sm:px-6 sm:pt-16 sm:pb-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Column 1: Logo & Mission Statement – Fade Left */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 15 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, ease: LUXURY_EASE }}
            className="flex flex-col items-start lg:col-span-4 lg:pr-8"
          >
            <Link
              href="/"
              aria-label="Abtel Cloud Services Home"
              className="inline-block transition-opacity hover:opacity-90"
            >
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -m-2 rounded-full bg-[#00D4FF]/15 blur-lg opacity-70"
                />
                <Image
                  src="/images/ABTEL-CLOUD-SERVICES-logo-1.png"
                  alt="Abtel Cloud Services"
                  width={1400}
                  height={1059}
                  className="relative z-10 h-auto w-[145px] object-contain drop-shadow-[0_4px_16px_rgba(0,212,255,0.3)] sm:w-[165px]"
                />
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white">
              We create IT solutions that are easy to use, easy to manage, and easy to trust.
            </p>

            <div className="mt-4">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-[0.16em] text-white">
                Innovative IT &amp; Cloud Services
              </span>
            </div>
          </motion.div>

          {/* Column 2: Services – Fade Down */}
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.08, ease: LUXURY_EASE }}
            className="lg:col-span-2"
          >
            <h2 className="mb-4 text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase text-white">
              Services
            </h2>

            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white transition-all duration-200 hover:translate-x-1 hover:text-[#00D4FF]"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-[#00D4FF] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Company – Fade Up */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.14, ease: LUXURY_EASE }}
            className="lg:col-span-2"
          >
            <h2 className="mb-4 text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase text-white">
              Company
            </h2>

            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white transition-all duration-200 hover:translate-x-1 hover:text-[#00D4FF]"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-[#00D4FF] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Get in touch – Fade Right */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 15 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.2, ease: LUXURY_EASE }}
            className="lg:col-span-4 lg:pl-4"
          >
            <h2 className="mb-4 text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase text-white">
              Get in touch
            </h2>

            <p className="text-sm leading-relaxed text-white">
              Subscribe to stay updated with our latest cloud innovations and software solutions.
            </p>

            {/* Email Subscribe Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex flex-col space-y-3"
            >
              <div className="group/input relative w-full">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-300 transition-colors duration-200 group-focus-within/input:text-[#00D4FF]"
                >
                  <Mail className="h-4 w-4" />
                </span>
                <input
                  type="email"
                  name="footer-email"
                  aria-label="Email address"
                  placeholder="Enter your email address..."
                  required
                  className="h-[46px] w-full rounded-xl border border-white/20 bg-white/[0.08] py-2.5 pl-10 pr-4 text-sm font-medium text-white placeholder:text-white/60 placeholder:font-normal backdrop-blur-md transition-all duration-200 hover:border-white/30 focus:border-[#00D4FF] focus:bg-white/[0.12] focus:shadow-[0_0_18px_rgba(0,212,255,0.3)] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]"
                />
              </div>

              {/* Discover More Button with Signature White Sweep */}
              <button
                type="submit"
                className="group/btn relative inline-flex h-[48px] w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#246BFD] via-[#0C5ADB] to-[#00D4FF] px-6 text-sm font-semibold tracking-wide text-white shadow-[0_0_24px_rgba(36,107,253,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(0,212,255,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
              >
                {/* Left-to-right white sweep layer */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-[105%] opacity-0 bg-white transition-all duration-300 ease-out group-hover/btn:translate-x-0 group-hover/btn:opacity-100"
                />
                <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 group-hover/btn:text-[#070A1E]">
                  <span>Discover more</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </button>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 pt-1 text-xs font-medium text-white">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#00D4FF]" aria-hidden="true" />
                <span>Protecting Your Service</span>
              </div>
            </form>

            {/* Social Media Badges */}
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00D4FF] hover:bg-[#00D4FF] hover:text-[#070A1E] hover:shadow-[0_0_16px_rgba(0,212,255,0.4)]"
              >
                <FaFacebookF className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00D4FF] hover:bg-[#00D4FF] hover:text-[#070A1E] hover:shadow-[0_0_16px_rgba(0,212,255,0.4)]"
              >
                <FaInstagram className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dark Bottom Copyright Bar */}
      <div className="relative z-10 border-t border-white/[0.08] bg-[#050716]/90">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:px-6 lg:px-8 text-xs text-white">
          <p className="text-center sm:text-left text-white">
            Copyright &copy; 2026 Dev Abtel Cloud Services. All rights reserved.
          </p>

          {/* Live Cloud SLA Text */}
          <div className="inline-flex items-center text-[11px] font-semibold text-white">
            <span>Cloud Systems Operational 99.9% SLA</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
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
