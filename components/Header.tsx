"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  Code2,
  Mail,
  MapPin,
  Menu,
  Network,
  Palette,
  Phone,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  X,
} from "lucide-react";
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
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];

interface HeaderServiceItem {
  name: string;
  href: string;
  desc: string;
  icon: typeof Code2;
  badge?: string;
}

const SERVICES_DROPDOWN_ITEMS: HeaderServiceItem[] = [
  {
    name: "Web Development",
    href: "/services/web-development",
    desc: "Next.js & React enterprise platforms",
    icon: Code2,
    badge: "Popular",
  },
  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    desc: "Native iOS & Android mobile apps",
    icon: Smartphone,
  },
  {
    name: "API Integrations",
    href: "/services/api-integrations",
    desc: "Secure microservices & payment APIs",
    icon: Network,
  },
  {
    name: "E-Commerce Solutions",
    href: "/services/e-commerce",
    desc: "High-converting headless storefronts",
    icon: ShoppingBag,
  },
  {
    name: "Digital Marketplace",
    href: "/services/digital-marketplace",
    desc: "Scalable multi-vendor architectures",
    icon: Store,
  },
  {
    name: "UI/UX Design",
    href: "/services/ui-ux-design",
    desc: "Interactive design systems & Figma UX",
    icon: Palette,
  },
];

const CALENDLY_LINK = "https://calendly.com/abtelcloud/30min";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesFlyoutOpen, setIsServicesFlyoutOpen] = useState(false);
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);

  const flyoutTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-close on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
    setIsServicesFlyoutOpen(false);
    setIsMobileServicesExpanded(false);
  }

  // Track scroll position
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServicesMouseEnter = () => {
    if (flyoutTimerRef.current) clearTimeout(flyoutTimerRef.current);
    setIsServicesFlyoutOpen(true);
  };

  const handleServicesMouseLeave = () => {
    flyoutTimerRef.current = setTimeout(() => {
      setIsServicesFlyoutOpen(false);
    }, 160);
  };

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[60] w-full transition-all duration-300 section-dark">
        {/* 1. Slim Top Bar (hides on scroll) */}
        <div
          className={cn(
            "relative z-20 w-full overflow-hidden bg-[#071428] border-b border-white/[0.08] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isScrolled
              ? "max-h-0 opacity-0 -translate-y-2 pointer-events-none border-b-transparent"
              : "max-h-11 opacity-100 translate-y-0"
          )}
        >
          <div className="mx-auto flex h-9 w-full max-w-[1320px] items-center justify-between px-4 text-[12px] font-medium text-slate-300 sm:px-6 lg:px-8">
            {/* Contact quick links */}
            <div className="flex items-center gap-3 sm:gap-6">
              <span className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                <MapPin className="h-3.5 w-3.5 text-[var(--primary)]" aria-hidden="true" />
                <span>San-Antonio, Texas</span>
              </span>

              <span className="h-3 w-px bg-white/15" aria-hidden="true" />

              <a
                href="mailto:sales@abtelcloud.com"
                className="inline-flex items-center gap-1.5 hover:text-[var(--secondary)] transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-[var(--secondary)]" aria-hidden="true" />
                <span className="hidden sm:inline">sales@abtelcloud.com</span>
                <span className="sm:hidden">Email</span>
              </a>

              <span className="h-3 w-px bg-white/15" aria-hidden="true" />

              <a
                href="tel:+18004844204"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[var(--success)]" aria-hidden="true" />
                <span>+1 800 484 4204</span>
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              <span className="hidden text-[11px] font-semibold uppercase tracking-wider text-slate-400 sm:inline">
                Follow:
              </span>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition-colors hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
              >
                <FaFacebookF className="h-2.5 w-2.5" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition-colors hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
              >
                <FaInstagram className="h-2.5 w-2.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* 2. Main Navigation Bar – Distinct Contrasting Rounded Capsule, NO Shadow */}
        <div
          className={cn(
            "relative z-10 w-full transition-all duration-300 px-3 sm:px-5 lg:px-8 bg-[#071428]",
            isScrolled ? "py-2" : "py-2.5 sm:py-3.5"
          )}
        >
          {/* Subtle Cyan Glow Accent Line on Header Bottom */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--brand-cyan)]/40 to-transparent"
          />

          <div
            className={cn(
              "mx-auto flex w-full max-w-[1360px] items-center justify-between gap-4 px-5 sm:px-7 lg:px-8 rounded-2xl sm:rounded-3xl lg:rounded-full bg-[#0F2746] border border-white/10 shadow-none transition-all duration-300",
              isScrolled
                ? "h-[64px] sm:h-[68px] bg-[#112D50] border-cyan-400/30"
                : "h-[74px] sm:h-[80px]"
            )}
          >
            {/* Logo on Left – Enhanced Size & Prominence */}
            <Link
              href="/"
              aria-label="Abtel Cloud Services Home"
              className="group relative flex shrink-0 items-center py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative flex items-center">
                <Image
                  src="/images/ABTEL-CLOUD-SERVICES-logo-1.png"
                  alt="Abtel Cloud Services"
                  width={1400}
                  height={1059}
                  priority
                  className={cn(
                    "relative z-10 w-auto object-contain transition-all duration-300 group-hover:scale-[1.03]",
                    isScrolled ? "h-[54px] sm:h-[60px]" : "h-[64px] sm:h-[72px]"
                  )}
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Primary Navigation"
              className="hidden items-center gap-0.5 xl:gap-1.5 lg:flex"
            >
              {HEADER_NAV_ITEMS.map((item) => {
                const active = isActiveLink(item.href);

                // Services Mega Flyout
                if (item.href === "/services") {
                  return (
                    <div
                      key={item.href}
                      onMouseEnter={handleServicesMouseEnter}
                      onMouseLeave={handleServicesMouseLeave}
                      className="relative"
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "relative inline-flex items-center gap-1 px-2.5 xl:px-3.5 py-1.5 text-[13px] xl:text-[14px] font-semibold tracking-tight transition-colors rounded-full whitespace-nowrap",
                          active || isServicesFlyoutOpen
                            ? "text-[var(--secondary)] font-bold"
                            : "text-white/90 hover:text-[var(--secondary)]"
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "h-3.5 w-3.5 transition-transform duration-200",
                            isServicesFlyoutOpen && "rotate-180"
                          )}
                          aria-hidden="true"
                        />
                      </Link>

                      {/* Mega Flyout Dropdown */}
                      <AnimatePresence>
                        {isServicesFlyoutOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute -left-48 top-full z-50 pt-2.5 w-[760px]"
                          >
                            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#161A21] p-5 shadow-2xl shadow-black/60 backdrop-blur-3xl">
                              <div className="grid grid-cols-12 gap-5">
                                {/* Left 6 Services */}
                                <div className="col-span-8 grid grid-cols-2 gap-2.5">
                                  {SERVICES_DROPDOWN_ITEMS.map((svc) => (
                                    <Link
                                      key={svc.href}
                                      href={svc.href}
                                      onClick={() => setIsServicesFlyoutOpen(false)}
                                      className="group/item flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3 transition-all duration-200 hover:border-[var(--primary)]/50 hover:bg-[var(--primary)]/10"
                                    >
                                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/15 text-[var(--primary)] transition-all duration-200 group-hover/item:bg-[var(--primary)] group-hover/item:text-white">
                                        <svc.icon className="h-4 w-4" aria-hidden="true" />
                                      </div>
                                      <div className="flex flex-col min-w-0">
                                        <div className="flex items-center gap-1.5">
                                          <span className="text-[13px] font-bold text-white transition-colors duration-200 group-hover/item:text-[var(--secondary)]">
                                            {svc.name}
                                          </span>
                                          {svc.badge && (
                                            <span className="rounded-full bg-[var(--primary)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                                              {svc.badge}
                                            </span>
                                          )}
                                        </div>
                                        <span className="mt-0.5 text-[11px] leading-tight text-slate-400 line-clamp-1">
                                          {svc.desc}
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>

                                {/* Right: Book 30-min call card */}
                                <div className="col-span-4 flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0F1115] p-4">
                                  <div>
                                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[var(--secondary)]">
                                      <Sparkles className="h-3 w-3" />
                                      Discovery Call
                                    </span>
                                    <h4 className="mt-2 text-xs font-bold leading-snug text-white">
                                      Map Out Your Cloud Architecture
                                    </h4>
                                    <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
                                      Book a 30-min technical discovery call directly with our engineering leadership.
                                    </p>
                                  </div>

                                  <div className="mt-4 flex flex-col gap-2">
                                    <Link
                                      href={CALENDLY_LINK}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={() => setIsServicesFlyoutOpen(false)}
                                      className="btn-sheen relative inline-flex h-9 w-full items-center justify-center overflow-hidden rounded-full bg-[var(--primary)] text-white px-3 text-[12px] font-bold shadow-sm transition-all duration-300 hover:bg-[var(--primary-hover)]"
                                    >
                                      <span className="relative z-10 flex items-center gap-1.5">
                                        <Calendar className="h-3.5 w-3.5" />
                                        <span>Book 30-Min Call</span>
                                      </span>
                                    </Link>

                                    <Link
                                      href="/services"
                                      onClick={() => setIsServicesFlyoutOpen(false)}
                                      className="inline-flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-400 transition-colors hover:text-white"
                                    >
                                      <span>All Services Overview</span>
                                      <ArrowRight className="h-3 w-3" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative px-2.5 xl:px-3.5 py-1.5 text-[13px] xl:text-[14px] font-semibold tracking-tight transition-colors rounded-full whitespace-nowrap",
                      active
                        ? "text-[var(--secondary)] font-bold"
                        : "text-white/90 hover:text-[var(--secondary)]"
                    )}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="absolute bottom-1 left-2.5 right-2.5 xl:left-3.5 xl:right-3.5 h-[2px] rounded-full bg-[var(--secondary)]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: "Get Started" Pill CTA Button */}
            <div className="hidden shrink-0 lg:flex items-center">
              {/* "Get Started" Pill CTA Button Linking to Calendly (Same Tab) */}
              <a
                href={CALENDLY_LINK}
                className="btn-sheen group/btn relative inline-flex h-[44px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#22C7F2] px-6 text-[14px] font-bold text-white shadow-[0_4px_18px_rgba(34,199,242,0.4)] transition-all duration-300 hover:shadow-[0_8px_28px_rgba(34,199,242,0.6)] hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] lg:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-white" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5 text-white" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Drawer */}
          <AnimatePresence initial={false}>
            {isMobileMenuOpen && (
              <motion.div
                id="mobile-navigation"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden border-t border-white/10 bg-[#0F1115] lg:hidden"
              >
                <nav
                  aria-label="Mobile Navigation"
                  className="mx-auto flex max-w-[1320px] flex-col gap-1 px-4 py-4 sm:px-6"
                >
                  {/* Status Banner */}
                  <div className="mb-2 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-white">
                    <span className="flex items-center gap-1.5 text-[12px] text-white">
                      <Sparkles className="h-3.5 w-3.5 text-[var(--secondary)]" />
                      <span>Available for Q1/Q2 Projects</span>
                    </span>
                    <Link
                      href={CALENDLY_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[11.5px] font-bold text-[var(--secondary)] underline hover:text-white"
                    >
                      Book Call &rarr;
                    </Link>
                  </div>

                  {HEADER_NAV_ITEMS.map((item) => {
                    const active = isActiveLink(item.href);

                    if (item.href === "/services") {
                      return (
                        <div key={item.href} className="flex flex-col">
                          <div className="flex items-center justify-between rounded-xl px-4 py-2.5 text-[15px] font-semibold text-white hover:bg-white/5">
                            <Link
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={cn(
                                "flex-1 transition-colors",
                                active ? "text-[var(--secondary)] font-bold" : "text-white"
                              )}
                            >
                              {item.label}
                            </Link>
                            <button
                              type="button"
                              onClick={() => setIsMobileServicesExpanded((prev) => !prev)}
                              aria-label="Toggle services list"
                              className="p-1 text-slate-300 hover:text-white"
                            >
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 transition-transform duration-200",
                                  isMobileServicesExpanded && "rotate-180"
                                )}
                              />
                            </button>
                          </div>

                          <AnimatePresence>
                            {isMobileServicesExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 flex flex-col gap-1 border-l border-white/10 pl-3 py-1"
                              >
                                {SERVICES_DROPDOWN_ITEMS.map((svc) => (
                                  <Link
                                    key={svc.href}
                                    href={svc.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-300 transition-colors hover:bg-white/10 hover:text-[var(--secondary)]"
                                  >
                                    <svc.icon className="h-3.5 w-3.5 text-[var(--primary)]" />
                                    <span>{svc.name}</span>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-2.5 text-[15px] font-semibold transition-colors",
                          active
                            ? "bg-white/10 text-[var(--secondary)] font-bold"
                            : "text-white hover:bg-white/5"
                        )}
                      >
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}

                  {/* Mobile CTA */}
                  <div className="mt-3 border-t border-white/10 pt-4">
                    <a
                      href={CALENDLY_LINK}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="btn-sheen flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[var(--brand-royal)] to-[var(--brand-sky)] text-white px-6 py-3.5 text-[15px] font-bold shadow-lg transition-transform active:scale-95"
                    >
                      <span className="flex items-center gap-2">
                        <span>Get Started</span>
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </a>
                  </div>

                  {/* Mobile Quick Contact */}
                  <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 text-xs text-slate-300">
                    <div className="flex flex-col gap-2">
                      <span className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-[var(--primary)]" />
                        San-Antonio, Texas
                      </span>
                      <a
                        href="mailto:sales@abtelcloud.com"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5 text-[var(--secondary)]" />
                        sales@abtelcloud.com
                      </a>
                      <a
                        href="tel:+18004844204"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                      >
                        <Phone className="h-3.5 w-3.5 text-[var(--success)]" />
                        +1 800 484 4204
                      </a>
                    </div>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Dedicated Spacer using --header-height to prevent layout shift and hero overlap */}
      <div
        className="w-full shrink-0"
        style={{ height: "var(--header-height)" }}
        aria-hidden="true"
      />
    </>
  );
}
