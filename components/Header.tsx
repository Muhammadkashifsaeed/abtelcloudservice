"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { cn } from "@/utils";
import type { NavItem } from "@/types";

const HEADER_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms And Conditions", href: "/terms-and-conditions" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Smooth hysteresis threshold: activates gracefully after 60px of scroll,
          // restores smoothly when returning to the very top (< 25px)
          setIsScrolled((prev) => {
            if (!prev && scrollY > 60) return true;
            if (prev && scrollY < 25) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
      {/* 1. Slim Top Information Bar (Smoothly closes on scroll) */}
      <div
        className={cn(
          "relative z-20 w-full border-b border-white/20 bg-[#0C5ADB] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isScrolled
            ? "max-h-0 -translate-y-2 opacity-0 pointer-events-none overflow-hidden border-b-transparent"
            : "max-h-12 translate-y-0 opacity-100"
        )}
      >
        <div className="mx-auto flex h-9 w-full max-w-[1400px] items-center justify-between px-4 text-[12.5px] font-medium sm:px-6 lg:px-8">
          {/* Left: Contact Info (Location, Email, Phone) */}
          <div className="flex items-center gap-4 text-white/95 sm:gap-6">
            <span className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
              <MapPin className="h-3.5 w-3.5 text-white/90" aria-hidden="true" />
              <span className="hidden sm:inline">San-Antonio, Texas</span>
              <span className="sm:hidden">Texas</span>
            </span>

            <span className="h-3 w-px bg-white/25" aria-hidden="true" />

            <a
              href="mailto:sales@abtelcloud.com"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-sky-100"
            >
              <Mail className="h-3.5 w-3.5 text-white/90" aria-hidden="true" />
              <span className="hidden md:inline">sales@abtelcloud.com</span>
              <span className="md:hidden">Email</span>
            </a>

            <span className="h-3 w-px bg-white/25" aria-hidden="true" />

            <a
              href="tel:+18004844204"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-sky-100"
            >
              <Phone className="h-3.5 w-3.5 text-white/90" aria-hidden="true" />
              <span>+1 800 484 4204</span>
            </a>
          </div>

          {/* Right: Social Media Links */}
          <div className="flex items-center gap-2">
            <span className="hidden text-[11.5px] font-medium tracking-wide text-white/80 sm:inline">
              Follow Us:
            </span>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-white transition-all hover:bg-white hover:text-[#0C5ADB]"
            >
              <FaFacebookF className="h-3 w-3" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-white transition-all hover:bg-white hover:text-[#0C5ADB]"
            >
              <FaInstagram className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar – Smoothly Closes in from Left & Right into a Rounded Floating Pill on Scroll */}
      <div
        className={cn(
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isScrolled
            ? "mx-auto w-[calc(100%-1.5rem)] max-w-[1360px] pt-2 sm:w-[calc(100%-3rem)] lg:pt-3"
            : "w-full pt-0"
        )}
      >
        <div
          className={cn(
            "relative z-10 w-full overflow-hidden text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isScrolled
              ? cn(
                  "border border-white/20 bg-[#0A0E33]/92 shadow-[0_16px_40px_rgba(4,6,24,0.7),0_0_24px_rgba(0,212,255,0.18)] ring-1 ring-[#00D4FF]/25 backdrop-blur-xl",
                  isMobileMenuOpen ? "rounded-3xl" : "rounded-full"
                )
              : "rounded-none border-b border-transparent bg-[#0A0E33] shadow-none ring-0"
          )}
        >
          {/* Top Subtle Cyan Glow Highlight Line for Rounded Capsule */}
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-x-12 top-0 h-[1.5px] transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isScrolled
                ? "bg-gradient-to-r from-transparent via-[#00D4FF]/60 to-transparent opacity-100"
                : "opacity-0"
            )}
          />

          {/* Subtle Ambient Tech Glow Behind Main Navigation */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(0,212,255,0.08),transparent_70%)]"
          />

          <div
            className={cn(
              "mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isScrolled
                ? "h-16 px-5 sm:px-7 lg:h-[68px] lg:px-8"
                : "h-20 px-4 sm:px-6 lg:h-[86px] lg:px-8"
            )}
          >
          {/* Logo on the Left – Crisp, High-Contrast & Prominently Sized */}
          <Link
            href="/"
            aria-label="Abtel Cloud Services Home"
            className="relative z-10 flex shrink-0 items-center py-1 transition-opacity hover:opacity-95"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/images/ABTEL-CLOUD-SERVICES-logo-1.png"
              alt="Abtel Cloud Services"
              width={1400}
              height={1059}
              priority
              className={cn(
                "w-auto object-contain drop-shadow-[0_2px_14px_rgba(0,212,255,0.30)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isScrolled
                  ? "h-11 sm:h-12 lg:h-[54px]"
                  : "h-14 sm:h-16 lg:h-[72px]"
              )}
            />
          </Link>

          {/* Desktop Navigation Links – Clean & Direct (No underline / divider under active page) */}
          <nav
            aria-label="Primary Navigation"
            className={cn(
              "hidden items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:flex",
              isScrolled ? "gap-4 xl:gap-6" : "gap-5 xl:gap-7"
            )}
          >
            {HEADER_NAV_ITEMS.map((item) => {
              const active = isActiveLink(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-1.5 font-medium whitespace-nowrap transition-colors duration-200",
                    isScrolled
                      ? "text-[13px] xl:text-[14px]"
                      : "text-[14px] xl:text-[15px]",
                    active
                      ? "font-semibold text-[#00D4FF]"
                      : "text-white/90 hover:text-[#00D4FF]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden shrink-0 lg:block">
            <Link
              href="/contact"
              className={cn(
                "btn-cut group/btn relative inline-flex items-center justify-center overflow-hidden font-semibold tracking-wide whitespace-nowrap bg-[#246BFD] text-white shadow-[0_4px_16px_rgba(36,107,253,0.35)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,212,255,0.48)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]",
                isScrolled
                  ? "px-5 py-2 text-[13px] xl:px-6 xl:py-2.5 xl:text-sm"
                  : "px-6 py-2.5 text-sm xl:px-7 xl:py-3 xl:text-[15px]"
              )}
            >
              {/* Left-to-right white sweep layer */}
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover/btn:translate-x-0"
              />
              <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#0B0E2E]">
                Get Started
              </span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white transition-all hover:bg-white hover:text-[#0B0E2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* 3. Mobile / Tablet Collapsible Menu Drawer */}
        <AnimatePresence initial={false}>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="overflow-hidden border-t border-white/10 bg-[#0B0E2E]/98 shadow-2xl backdrop-blur-2xl lg:hidden"
            >
              <nav
                aria-label="Mobile Navigation"
                className="mx-auto flex max-w-[1320px] flex-col gap-1 px-4 py-4 sm:px-6"
              >
                {HEADER_NAV_ITEMS.map((item) => {
                  const active = isActiveLink(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-3.5 py-2.5 text-[14.5px] font-medium transition-colors",
                        active
                          ? "bg-white/10 font-semibold text-[#00D4FF]"
                          : "text-white/90 hover:bg-white/5 hover:text-[#00D4FF]"
                      )}
                    >
                      <span>{item.label}</span>
                      {active && (
                        <span className="h-2 w-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]" />
                      )}
                    </Link>
                  );
                })}

                {/* Mobile CTA Button */}
                <div className="mt-3 border-t border-white/10 pt-4">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-cut group/btn relative flex w-full items-center justify-center overflow-hidden bg-[#246BFD] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(36,107,253,0.35)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,212,255,0.45)]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover/btn:translate-x-0"
                    />
                    <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#0B0E2E]">
                      Get Started
                    </span>
                  </Link>
                </div>

                {/* Mobile Contact & Social Quick Access */}
                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs text-white/80">
                  <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-[#00D4FF]" />
                      San-Antonio, Texas
                    </span>
                    <a
                      href="mailto:sales@abtelcloud.com"
                      className="flex items-center gap-2 hover:text-[#00D4FF]"
                    >
                      <Mail className="h-3.5 w-3.5 text-[#00D4FF]" />
                      sales@abtelcloud.com
                    </a>
                    <a
                      href="tel:+18004844204"
                      className="flex items-center gap-2 hover:text-[#00D4FF]"
                    >
                      <Phone className="h-3.5 w-3.5 text-[#00D4FF]" />
                      +1 800 484 4204
                    </a>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2.5">
                    <span className="text-[11px] text-white/60">Follow Us:</span>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-[#00D4FF] hover:text-[#0B0E2E]"
                      >
                        <FaFacebookF className="h-3 w-3" />
                      </a>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-[#00D4FF] hover:text-[#0B0E2E]"
                      >
                        <FaInstagram className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
