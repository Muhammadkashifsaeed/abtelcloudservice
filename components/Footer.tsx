"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import type { NavItem } from "@/types";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

const SERVICE_LINKS: NavItem[] = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "API Integrations", href: "/services/api-integrations" },
  { label: "E-Commerce Solutions", href: "/services/e-commerce" },
  { label: "Digital Marketplace", href: "/services/digital-marketplace" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
];

const COMPANY_LINKS: NavItem[] = [
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: yahan apni newsletter API call lagayein
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="relative mt-auto w-full overflow-hidden bg-[#0B1F3A] text-white border-t border-[#22C7F2]/15">
      {/* AI Futuristic Tech Neural Network Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/footer-ai-network-bg.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-50 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071428] via-[#0B1F3A]/85 to-[#0B1F3A]/95" />
      </div>

      {/* Top Border Cyan Glow Highlight Line */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#22C7F2]/70 to-transparent shadow-[0_0_16px_rgba(34,199,242,0.5)] z-10"
      />

      {/* Ambient Gradient Glow Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-20 h-[480px] w-[480px] rounded-full bg-[#303E99]/25 blur-[130px] z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 -bottom-32 h-[480px] w-[480px] rounded-full bg-[#22C7F2]/10 blur-[140px] z-10"
      />

      {/* Subtle Glowing Dot Matrix Background */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
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
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 pt-10 pb-8 sm:px-6 sm:pt-12 sm:pb-10 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Logo & Mission Statement */}
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
                  className="pointer-events-none absolute inset-0 -m-2 rounded-full bg-[#22C7F2]/10 blur-lg opacity-70"
                />
                <Image
                  src="/images/ABTEL-CLOUD-SERVICES-logo-1.png"
                  alt="Abtel Cloud Services"
                  width={1400}
                  height={1059}
                  className="relative z-10 h-auto w-[145px] object-contain drop-shadow-[0_4px_16px_rgba(34,199,242,0.25)] sm:w-[165px]"
                />
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-100">
              We create IT solutions that are easy to use, easy to manage, and easy to trust.
            </p>
          </motion.div>

          {/* Column 2: Services */}
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
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-100 transition-all duration-200 hover:translate-x-1 hover:text-[#22C7F2]"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-[#22C7F2] transition-transform duration-200 group-hover:translate-x-0.5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Company */}
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
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-100 transition-all duration-200 hover:translate-x-1 hover:text-[#22C7F2]"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-[#22C7F2] transition-transform duration-200 group-hover:translate-x-0.5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Get in touch */}
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

            {/* Contact Details */}
            <ul className="space-y-2.5 text-sm text-slate-100">
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#22C7F2]" aria-hidden="true" />
                <span>San-Antonio, Texas</span>
              </li>
              <li>
                <a
                  href="mailto:sales@abtelcloud.com"
                  className="flex items-center gap-2.5 transition-colors hover:text-[#22C7F2]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#22C7F2]" aria-hidden="true" />
                  <span>sales@abtelcloud.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+18004844204"
                  className="flex items-center gap-2.5 transition-colors hover:text-[#22C7F2]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#22C7F2]" aria-hidden="true" />
                  <span>+1 800 484 4204</span>
                </a>
              </li>
            </ul>

            <p className="mt-5 text-sm leading-relaxed text-slate-100">
              Subscribe to stay updated with our latest cloud innovations and software solutions.
            </p>

            {/* Email Subscribe Form */}
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col space-y-3">
              <div className="group/input relative w-full">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-300 transition-colors duration-200 group-focus-within/input:text-[#22C7F2]"
                >
                  <Mail className="h-4 w-4" />
                </span>
                <input
                  type="email"
                  name="footer-email"
                  aria-label="Email address"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSubmitted(false);
                  }}
                  className="h-[46px] w-full rounded-xl border border-white/20 bg-white/[0.08] py-2.5 pl-10 pr-4 text-sm font-medium text-white placeholder:text-white/60 placeholder:font-normal backdrop-blur-md transition-all duration-200 hover:border-white/30 focus:border-[#22C7F2] focus:bg-white/[0.12] focus:shadow-[0_0_18px_rgba(34,199,242,0.3)] focus:outline-none focus:ring-1 focus:ring-[#22C7F2]"
                />
              </div>

              {/* Subscribe Button with Luminous Sheen Hover Animation */}
              <button
                type="submit"
                className="group/btn relative inline-flex h-[48px] w-full items-center justify-center overflow-hidden rounded-full bg-[#3D96CE] px-6 text-sm font-semibold tracking-wide text-white shadow-[0_4px_18px_rgba(61,150,206,0.4)] transition-all duration-300 hover:bg-[#2C7DAF] hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(61,150,206,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C7F2]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
                />
                <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                  <span>Subscribe</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5"
                    aria-hidden="true"
                  />
                </span>
              </button>

              {submitted && (
                <p role="status" className="text-xs font-medium text-[#22C7F2]">
                  Thank you! You&apos;re subscribed.
                </p>
              )}

              {/* Trust Badge */}
              <div className="flex items-center gap-2 pt-1 text-xs font-medium text-slate-200">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#22C7F2]" aria-hidden="true" />
                <span>We respect your privacy. No spam.</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative z-10 border-t border-white/[0.08] bg-[#071428]">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-2 px-4 py-3 text-xs text-slate-200 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center sm:text-left">
            Copyright &copy; {currentYear} Abtel Cloud Services. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/privacy-policy"
              className="transition-colors duration-200 hover:text-[#22C7F2]"
            >
              Privacy Policy
            </Link>
            <span className="h-3 w-px bg-white/20" aria-hidden="true" />
            <Link
              href="/terms-and-conditions"
              className="transition-colors duration-200 hover:text-[#22C7F2]"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}