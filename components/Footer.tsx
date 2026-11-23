"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Mail, MapPin, Phone, ShieldCheck, Loader2 } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Reveal } from "@/components/motion/Reveal";
import type { NavItem } from "@/types";

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
        setMessage(data.message || "Thank you for subscribing!");
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
    <footer className="relative mt-auto w-full overflow-hidden section-dark bg-[var(--bg-dark)] text-[var(--text-on-dark)] border-t border-[var(--brand-cyan)]/20">
      {/* Background Image & Dark Overlay for Crisp ACS Logo Readability */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/footer-ai-network-bg.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark-2)] via-[var(--bg-dark)]/90 to-[var(--bg-dark)]/98" />
      </div>

      {/* 3. Main Footer Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Column 1: Logo & Mission Statement (Fade Left) */}
          <div className="flex flex-col items-start lg:col-span-4 lg:pr-6">
            <Reveal variant="fade-left">
              <Link
                href="/"
                aria-label="Abtel Cloud Services Home"
                className="inline-block transition-opacity hover:opacity-95"
              >
                <Image
                  src="/images/ABTEL-CLOUD-SERVICES-logo-1.png"
                  alt="Abtel Cloud Services"
                  width={1400}
                  height={1059}
                  className="h-auto w-[150px] object-contain sm:w-[170px]"
                />
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-300">
                We create IT solutions that are easy to use, easy to manage, and easy to trust. Trusted technology partner based in San Antonio, Texas.
              </p>

              {/* Social Links */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
                >
                  <FaFacebookF className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
                >
                  <FaInstagram className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Column 2: Services (Fade Up) */}
          <div className="lg:col-span-2">
            <Reveal variant="fade-up" delay={0.08}>
              <h3 className="mb-4 text-xs font-bold tracking-[0.18em] uppercase text-[var(--secondary)]">
                Services
              </h3>
              <ul className="space-y-3">
                {SERVICE_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-[var(--primary)]"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-[var(--primary)] opacity-60 transition-transform duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Column 3: Company (Fade Up) */}
          <div className="lg:col-span-2">
            <Reveal variant="fade-up" delay={0.16}>
              <h3 className="mb-4 text-xs font-bold tracking-[0.18em] uppercase text-[var(--secondary)]">
                Company
              </h3>
              <ul className="space-y-3">
                {COMPANY_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-[var(--primary)]"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-[var(--primary)] opacity-60 transition-transform duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Column 4: Get in touch & Newsletter (Fade Right) */}
          <div className="lg:col-span-4 lg:pl-2">
            <Reveal variant="fade-right" delay={0.22}>
              <h3 className="mb-4 text-xs font-bold tracking-[0.18em] uppercase text-[var(--secondary)]">
                Get in Touch
              </h3>

              <ul className="space-y-2.5 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 shrink-0 text-[var(--primary)]" aria-hidden="true" />
                  <span>San-Antonio, Texas</span>
                </li>
                <li>
                  <a
                    href="mailto:sales@abtelcloud.com"
                    className="flex items-center gap-2.5 transition-colors hover:text-[var(--secondary)]"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[var(--secondary)]" aria-hidden="true" />
                    <span>sales@abtelcloud.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+18004844204"
                    className="flex items-center gap-2.5 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-[var(--success)]" aria-hidden="true" />
                    <span>+1 800 484 4204</span>
                  </a>
                </li>
              </ul>

              {/* Newsletter Subscription */}
              <div className="mt-6">
                <p className="text-xs font-medium text-slate-300">
                  Subscribe for occasional cloud architecture &amp; web engineering insights.
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
                      className="h-11 w-full rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-slate-400 focus:border-[var(--primary)] focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-sheen absolute right-1 top-1 inline-flex h-9 items-center justify-center rounded-full bg-gradient-to-r from-[var(--brand-royal)] to-[var(--brand-sky)] px-4 text-xs font-bold text-white transition-all hover:from-[#235896] hover:to-[#2C7DAF] disabled:opacity-50"
                    >
                      {isLoading ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        <span>Subscribe</span>
                      )}
                    </button>
                  </div>

                  {status === "success" && (
                    <p role="status" className="text-xs font-semibold text-[var(--success)]">
                      {message}
                    </p>
                  )}
                  {status === "error" && (
                    <p role="alert" className="text-xs font-semibold text-rose-400">
                      {message}
                    </p>
                  )}

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <ShieldCheck className="h-3.5 w-3.5 text-[var(--success)]" />
                    <span>No spam. Unsubscribe at any time.</span>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* 4. Bottom Copyright Bar */}
      <div className="relative z-10 border-t border-white/[0.08] bg-[var(--bg-dark-2)] py-4 text-xs text-slate-400">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center sm:text-left">
            Copyright &copy; {currentYear} Abtel Cloud Services. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[var(--secondary)]"
            >
              Privacy Policy
            </Link>
            <span className="h-3 w-px bg-white/20" aria-hidden="true" />
            <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-[var(--secondary)]"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
