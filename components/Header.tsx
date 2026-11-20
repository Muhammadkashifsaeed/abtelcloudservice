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
          // If user is at or near the very top of the page, always keep the initial Header state
          if (window.scrollY <= 10) {
            setIsScrolled(false);
            ticking = false;
            return;
          }

          // Locate the Hero section (Home Page #hero-section or first section in main)
          const heroEl =
            document.getElementById("hero-section") ||
            document.querySelector("[data-hero-section='true']") ||
            document.querySelector("main > section:first-of-type");

          if (heroEl) {
            const rect = heroEl.getBoundingClientRect();
            // While the user is anywhere inside the Hero section (rect.bottom > triggerCrossed),
            // the Header stays in its initial state.
            // Only after the user has completely crossed/passed the Hero section (rect.bottom <= triggerCrossed),
            // the Header changes to its scrolled/floating style.
            const triggerCrossed = 80;
            const triggerRestore = 120;

            setIsScrolled((prev) => {
              if (!prev && rect.bottom <= triggerCrossed) {
                return true;
              }
              if (prev && rect.bottom > triggerRestore) {
                return false;
              }
              return prev;
            });
          } else {
            // Fallback for pages without a hero section
            const scrollY = window.scrollY;
            setIsScrolled((prev) => {
              if (!prev && scrollY > 120) return true;
              if (prev && scrollY < 40) return false;
              return prev;
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Run on initial mount and whenever route changes
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 w-full pointer-events-none">
        {/* 1. Slim Top Information Bar (Silky smooth height & slide transition on scroll) */}
        <div
          className={cn(
            "relative z-20 w-full pointer-events-auto bg-gradient-to-r from-[#2B237F] via-[#241D6E] to-[#1D175A] transition-[height,opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isScrolled
              ? "h-0 -translate-y-full opacity-0 pointer-events-none overflow-hidden border-b-transparent"
              : "h-9 translate-y-0 opacity-100 border-b border-white/10"
          )}
        >
          <div className="mx-auto flex h-9 w-full max-w-[1400px] items-center justify-between px-4 text-[12.5px] font-medium sm:px-6 lg:px-8">
            {/* Left: Contact Info (Location, Email, Phone) */}
            <div className="flex items-center gap-4 text-white/90 sm:gap-6">
              <span className="inline-flex items-center gap-1.5 transition-colors hover:text-[#00D4FF]">
                <MapPin className="h-3.5 w-3.5 text-[#00D4FF]" aria-hidden="true" />
                <span className="hidden sm:inline">San-Antonio, Texas</span>
                <span className="sm:hidden">Texas</span>
              </span>

              <span className="h-3 w-px bg-white/15" aria-hidden="true" />

              <a
                href="mailto:sales@abtelcloud.com"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#00D4FF]"
              >
                <Mail className="h-3.5 w-3.5 text-[#00D4FF]" aria-hidden="true" />
                <span className="hidden md:inline">sales@abtelcloud.com</span>
                <span className="md:hidden">Email</span>
              </a>

              <span className="h-3 w-px bg-white/15" aria-hidden="true" />

              <a
                href="tel:+18004844204"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#00D4FF]"
              >
                <Phone className="h-3.5 w-3.5 text-[#00D4FF]" aria-hidden="true" />
                <span>+1 800 484 4204</span>
              </a>
            </div>

            {/* Right: Social Media Links */}
            <div className="flex items-center gap-2">
              <span className="hidden text-[11.5px] font-medium tracking-wide text-white/75 sm:inline">
                Follow Us:
              </span>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/90 transition-all hover:border-[#00D4FF] hover:bg-[#00D4FF] hover:text-[#0A0E33]"
              >
                <FaFacebookF className="h-3 w-3" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/90 transition-all hover:border-[#00D4FF] hover:bg-[#00D4FF] hover:text-[#0A0E33]"
              >
                <FaInstagram className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* 2. Main Navigation Bar – 100% Full Width Across Screen (No left & right shrink on scroll) */}
        <div className="w-full pointer-events-none pt-0">
          <div
            className={cn(
              "pointer-events-auto relative z-10 w-full overflow-hidden text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isScrolled
                ? "border-b border-white/15 bg-gradient-to-r from-[#3D30BA]/95 via-[#342A9C]/95 to-[#2B237F]/95 shadow-[0_12px_36px_rgba(20,15,64,0.6)] backdrop-blur-xl"
                : "border-b border-transparent bg-gradient-to-r from-[#3D30BA] via-[#342A9C] to-[#2B237F] shadow-none"
            )}
          >
            {/* Top Subtle Cyan Glow Highlight Line */}
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute inset-x-0 top-0 h-[1.5px] transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
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

            <div className="mx-auto flex w-full max-w-[1400px] h-20 lg:h-[86px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo on the Left – Crisp, High-Contrast & Constant Height */}
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
              className="h-14 sm:h-16 lg:h-[72px] w-auto object-contain drop-shadow-[0_2px_14px_rgba(0,212,255,0.30)]"
            />
          </Link>

          {/* Desktop Navigation Links – Clean & Direct (No underline / divider under active page) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-5 xl:gap-7 lg:flex"
          >
            {HEADER_NAV_ITEMS.map((item) => {
              const active = isActiveLink(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-1.5 text-[14px] xl:text-[15px] font-medium whitespace-nowrap transition-colors duration-200",
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

          {/* Desktop CTA Button – Rounded Corners & Constant Size */}
          <div className="hidden shrink-0 lg:block">
            <Link
              href="/contact"
              className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold tracking-wide whitespace-nowrap bg-[#246BFD] text-white px-6 py-2.5 text-sm xl:px-7 xl:py-3 xl:text-[15px] shadow-[0_4px_16px_rgba(36,107,253,0.35)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,212,255,0.48)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]"
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

                {/* Mobile CTA Button – Rounded Corners (No Cut Corners) */}
                <div className="mt-3 border-t border-white/10 pt-4">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group/btn relative flex w-full items-center justify-center overflow-hidden rounded-full bg-[#246BFD] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(36,107,253,0.35)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,212,255,0.45)]"
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

    {/* Non-collapsing layout spacer to keep document flow 100% stable without scroll oscillation */}
    <div
      className="h-[116px] w-full shrink-0 pointer-events-none lg:h-[122px] bg-gradient-to-r from-[#3D30BA] via-[#342A9C] to-[#2B237F]"
      aria-hidden="true"
    />
  </>
  );
}
