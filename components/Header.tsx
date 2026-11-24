"use client";

import { useEffect, useRef, useState } from "react";
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
  Megaphone,
  Menu,
  Network,
  Palette,
  Phone,
  ShoppingBag,
  Smartphone,
  Sparkles,
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
    name: "Digital Marketing",
    href: "/services/digital-marketplace",
    desc: "Data-driven SEO, PPC & growth funnels",
    icon: Megaphone,
    badge: "Growth",
  },
  {
    name: "E-Commerce Solutions",
    href: "/services/e-commerce",
    desc: "High-converting headless storefronts",
    icon: ShoppingBag,
  },
  {
    name: "API Integrations",
    href: "/services/api-integrations",
    desc: "Secure microservices & payment APIs",
    icon: Network,
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
          setIsScrolled(scrollY > 20);
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
      <header className="fixed top-0 inset-x-0 z-[60] w-full transition-all duration-300">
        {/* 1. Slim Top Bar (Collapses cleanly to exactly 0px on scroll with zero top gap) */}
        <div
          className={cn(
            "relative z-20 w-full overflow-hidden bg-[#F8FAFC] transition-all duration-300 ease-out",
            isScrolled
              ? "h-0 min-h-0 max-h-0 border-0 p-0 m-0 opacity-0 pointer-events-none"
              : "h-9 min-h-9 max-h-9 opacity-100 pointer-events-auto border-b border-slate-200/90"
          )}
        >
          <div className="mx-auto flex h-9 w-full max-w-[1400px] items-center justify-between px-3 sm:px-5 lg:px-6 text-[12px] font-medium text-slate-600">
            {/* Contact quick links */}
            <div className="flex items-center gap-3 sm:gap-6">
              <span className="inline-flex items-center gap-1.5 hover:text-black transition-colors">
                <MapPin className="h-3.5 w-3.5 text-black" aria-hidden="true" />
                <span>San-Antonio, Texas</span>
              </span>

              <span className="h-3 w-px bg-slate-300" aria-hidden="true" />

              <a
                href="mailto:sales@abtelcloud.com"
                className="inline-flex items-center gap-1.5 hover:text-black transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-black" aria-hidden="true" />
                <span className="hidden sm:inline">sales@abtelcloud.com</span>
                <span className="sm:hidden">Email</span>
              </a>

              <span className="h-3 w-px bg-slate-300" aria-hidden="true" />

              <a
                href="tel:+18004844204"
                className="inline-flex items-center gap-1.5 hover:text-black transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-black" aria-hidden="true" />
                <span>+1 800 484 4204</span>
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              <span className="hidden text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:inline">
                Follow:
              </span>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-black hover:bg-black hover:text-[var(--brand-lime)] shadow-xs"
              >
                <FaFacebookF className="h-2.5 w-2.5" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-black hover:bg-black hover:text-[var(--brand-lime)] shadow-xs"
              >
                <FaInstagram className="h-2.5 w-2.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* 2. Main Navigation Bar – ALWAYS PURE WHITE BACKGROUND */}
        <div
          className={cn(
            "relative z-10 w-full bg-white transition-all duration-300 border-b border-slate-200/90",
            isScrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.06)] bg-white/98 backdrop-blur-xl" : "shadow-none"
          )}
        >
          <div className="relative z-10 mx-auto flex h-[76px] w-full max-w-[1400px] items-center justify-between gap-3 px-3 sm:px-5 lg:px-6">
            {/* Brand Title on Left: (Logo image temporarily removed per request) */}
            <div className="relative flex shrink-0 items-center py-1 min-h-[44px]">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-lime)] rounded-xl transition-transform hover:scale-[1.02]"
                aria-label="Abtel Cloud Services Home"
              >
                <span className="font-heading font-black tracking-tight text-xl sm:text-2xl text-[#0B0E14] uppercase">
                  ABTEL <span className="text-[#FF5E14]">CLOUD</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links (Clean High-Contrast Typography on White, Lime Active Indicators) */}
            <nav
              aria-label="Primary Navigation"
              className="hidden items-center gap-1 xl:gap-2.5 lg:flex"
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
                          "relative inline-flex items-center gap-1 px-3 py-2 text-[13.5px] xl:text-[14px] font-semibold tracking-tight transition-colors rounded-lg whitespace-nowrap",
                          active || isServicesFlyoutOpen
                            ? "text-black font-bold"
                            : "text-slate-800 hover:text-black"
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
                            <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_24px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
                              <div className="grid grid-cols-12 gap-5">
                                {/* Left 6 Services */}
                                <div className="col-span-8 grid grid-cols-2 gap-2.5">
                                  {SERVICES_DROPDOWN_ITEMS.map((svc) => (
                                    <Link
                                      key={svc.href}
                                      href={svc.href}
                                      onClick={() => setIsServicesFlyoutOpen(false)}
                                      className="group/item flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3 transition-all duration-200 hover:border-black hover:bg-slate-100/80"
                                    >
                                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-black text-[var(--brand-lime)] transition-all duration-200 group-hover/item:scale-105">
                                        <svc.icon className="h-4 w-4" aria-hidden="true" />
                                      </div>
                                      <div className="flex flex-col min-w-0">
                                        <div className="flex items-center gap-1.5">
                                          <span className="text-[13px] font-bold text-slate-900 transition-colors duration-200 group-hover/item:text-black">
                                            {svc.name}
                                          </span>
                                          {svc.badge && (
                                            <span className="rounded-full bg-[var(--brand-lime)] px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-black">
                                              {svc.badge}
                                            </span>
                                          )}
                                        </div>
                                        <span className="mt-0.5 text-[11px] leading-tight text-slate-500 line-clamp-1">
                                          {svc.desc}
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>

                                {/* Right: Discovery call card */}
                                <div className="col-span-4 flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B0E14] p-4 text-white">
                                  <div>
                                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[var(--brand-lime)]">
                                      <Sparkles className="h-3 w-3" />
                                      Agency Strategy
                                    </span>
                                    <h4 className="mt-2 text-xs font-bold leading-snug text-white">
                                      Scale Your Startup Product
                                    </h4>
                                    <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
                                      Book a 30-min strategy session directly with Abtel Cloud Services engineering leadership.
                                    </p>
                                  </div>

                                  <div className="mt-4 flex flex-col gap-2">
                                    <Link
                                      href={CALENDLY_LINK}
                                      onClick={() => setIsServicesFlyoutOpen(false)}
                                      className="btn-sheen relative inline-flex h-9 w-full items-center justify-center overflow-hidden rounded-full bg-[var(--brand-lime)] text-black px-3 text-[12px] font-black shadow-sm transition-all duration-300 hover:bg-[var(--brand-lime-hover)] active:scale-95"
                                    >
                                      <span className="relative z-10 flex items-center gap-1.5">
                                        <Calendar className="h-3.5 w-3.5" />
                                        <span>Book Strategy Call</span>
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
                      "relative px-3 py-2 text-[13.5px] xl:text-[14px] font-semibold tracking-tight transition-colors rounded-lg whitespace-nowrap",
                      active
                        ? "text-black font-bold"
                        : "text-slate-800 hover:text-black"
                    )}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2.5px] rounded-full bg-[var(--brand-lime)] shadow-[0_0_8px_rgba(255, 94, 20,0.5)]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Thin Divider + Electric Lime "Get Started" Pill CTA Button Linked to Contact */}
            <div className="hidden shrink-0 lg:flex items-center gap-3">
              <span className="h-7 w-px bg-slate-200" aria-hidden="true" />

              <Link
                href="/contact"
                className="btn-sheen group/btn relative inline-flex h-[42px] items-center justify-center overflow-hidden rounded-full bg-[var(--brand-lime)] px-6 text-[13.5px] xl:text-[14px] font-black text-black shadow-[0_4px_20px_rgba(255, 94, 20,0.35)] transition-all duration-300 hover:bg-[var(--brand-lime-hover)] hover:shadow-[0_6px_28px_rgba(255, 94, 20,0.55)] hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-slate-50 text-slate-800 transition-all hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black lg:hidden shadow-xs"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-black" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5 text-black" aria-hidden="true" />
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
                className="overflow-hidden border-t border-slate-200 bg-white shadow-2xl lg:hidden"
              >
                <nav
                  aria-label="Mobile Navigation"
                  className="mx-auto flex max-w-[1320px] flex-col gap-1 px-4 py-4 sm:px-6"
                >
                  {/* Status Banner */}
                  <div className="mb-2 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-800">
                    <span className="flex items-center gap-1.5 text-[12px] text-slate-800">
                      <Sparkles className="h-3.5 w-3.5 text-black" />
                      <span>Abtel Cloud Services &bull; Q1/Q2 Availability</span>
                    </span>
                    <Link
                      href={CALENDLY_LINK}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[11.5px] font-extrabold text-black underline hover:text-slate-600"
                    >
                      Book Call &rarr;
                    </Link>
                  </div>

                  {HEADER_NAV_ITEMS.map((item) => {
                    const active = isActiveLink(item.href);

                    if (item.href === "/services") {
                      return (
                        <div key={item.href} className="flex flex-col">
                          <div className="flex items-center justify-between rounded-xl px-4 py-2.5 text-[15px] font-semibold text-slate-800 hover:bg-slate-50">
                            <Link
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={cn(
                                "flex-1 transition-colors",
                                active ? "text-black font-bold" : "text-slate-800"
                              )}
                            >
                              {item.label}
                            </Link>
                            <button
                              type="button"
                              onClick={() => setIsMobileServicesExpanded((prev) => !prev)}
                              aria-label="Toggle services list"
                              className="p-1 text-slate-500 hover:text-black"
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
                                className="ml-4 flex flex-col gap-1 border-l border-slate-200 pl-3 py-1"
                              >
                                {SERVICES_DROPDOWN_ITEMS.map((svc) => (
                                  <Link
                                    key={svc.href}
                                    href={svc.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-black"
                                  >
                                    <svc.icon className="h-3.5 w-3.5 text-black" />
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
                            ? "bg-slate-100 text-black font-bold"
                            : "text-slate-800 hover:bg-slate-50"
                        )}
                      >
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}

                  {/* Mobile CTA */}
                  <div className="mt-3 border-t border-slate-200 pt-4">
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="btn-sheen flex w-full items-center justify-center rounded-full bg-[var(--brand-lime)] text-black px-6 py-3.5 text-[15px] font-black shadow-lg transition-transform active:scale-95"
                    >
                      <span className="flex items-center gap-2">
                        <span>Get Started</span>
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </div>

                  {/* Mobile Quick Contact */}
                  <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-700">
                    <div className="flex flex-col gap-2">
                      <span className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-black" />
                        San-Antonio, Texas
                      </span>
                      <a
                        href="mailto:sales@abtelcloud.com"
                        className="flex items-center gap-2 hover:text-black transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5 text-black" />
                        sales@abtelcloud.com
                      </a>
                      <a
                        href="tel:+18004844204"
                        className="flex items-center gap-2 hover:text-black transition-colors"
                      >
                        <Phone className="h-3.5 w-3.5 text-black" />
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
        className="w-full shrink-0 bg-white"
        style={{ height: "var(--header-height)" }}
        aria-hidden="true"
      />
    </>
  );
}
