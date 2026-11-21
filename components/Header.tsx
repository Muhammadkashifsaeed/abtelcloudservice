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
  { label: "Terms And Conditions", href: "/terms-and-conditions" },
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
    name: "UI/UX Design",
    href: "/services/ui-ux-design",
    desc: "Human-centric UX & bespoke design systems",
    icon: Palette,
  },
  {
    name: "API Integrations",
    href: "/services/api-integrations",
    desc: "Secure microservices & system connectivity",
    icon: Network,
  },
  {
    name: "E-Commerce Solutions",
    href: "/services/e-commerce",
    desc: "High-converting headless digital storefronts",
    icon: ShoppingBag,
  },
  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    desc: "Native & cross-platform iOS & Android apps",
    icon: Smartphone,
  },
  {
    name: "Digital Marketplace",
    href: "/services/digital-marketplace",
    desc: "Multi-vendor B2B/B2C scalable ecosystems",
    icon: Store,
  },
];

const CALENDLY_LINK = "https://calendly.com/abtelcloud/30min?month=2026-11";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesFlyoutOpen, setIsServicesFlyoutOpen] = useState(false);
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);

  const flyoutTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Clean React 19 pattern to close menus on route change
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

          setIsScrolled((prev) => {
            if (!prev && scrollY > 50) return true;
            if (prev && scrollY < 20) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  const handleServicesMouseEnter = () => {
    if (flyoutTimerRef.current) clearTimeout(flyoutTimerRef.current);
    setIsServicesFlyoutOpen(true);
  };

  const handleServicesMouseLeave = () => {
    flyoutTimerRef.current = setTimeout(() => {
      setIsServicesFlyoutOpen(false);
    }, 180);
  };

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 w-full pointer-events-none transition-all duration-300">
        {/* 1. Slim Top Contact & Availability Bar – Distinct Deep Navy Strip (#060B19) */}
        <div
          className={cn(
            "relative z-20 w-full pointer-events-auto overflow-hidden bg-[#060B19] border-b border-white/[0.08] shadow-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isScrolled
              ? "max-h-0 opacity-0 -translate-y-2 pointer-events-none border-b-transparent"
              : "max-h-12 opacity-100 translate-y-0 pointer-events-auto"
          )}
        >
          <div className="mx-auto flex h-9 w-full max-w-[1400px] items-center justify-between px-4 text-[12px] font-semibold text-white sm:px-6 lg:px-8">
            {/* Contact Info (Location, Email, Phone) */}
            <div className="flex items-center gap-3.5 sm:gap-6">
              <span className="inline-flex items-center gap-1.5 text-white transition-colors hover:text-[#3D96CE]">
                <MapPin className="h-3.5 w-3.5 text-[#3D96CE]" aria-hidden="true" />
                <span className="hidden sm:inline">San-Antonio, Texas</span>
                <span className="sm:hidden">Texas</span>
              </span>

              <span className="h-3 w-px bg-white/15" aria-hidden="true" />

              <a
                href="mailto:sales@abtelcloud.com"
                className="inline-flex items-center gap-1.5 text-white transition-colors hover:text-[#3D96CE]"
              >
                <Mail className="h-3.5 w-3.5 text-[#3D96CE]" aria-hidden="true" />
                <span className="hidden md:inline">sales@abtelcloud.com</span>
                <span className="md:hidden">Email</span>
              </a>

              <span className="h-3 w-px bg-white/15" aria-hidden="true" />

              <a
                href="tel:+18004844204"
                className="inline-flex items-center gap-1.5 text-white transition-colors hover:text-[#3D96CE]"
              >
                <Phone className="h-3.5 w-3.5 text-[#3D96CE]" aria-hidden="true" />
                <span>+1 800 484 4204</span>
              </a>
            </div>

            {/* Center / Right: Agency Availability Status & Quick Call (Same Tab) */}
            <div className="hidden lg:flex items-center gap-4 text-[12px] font-semibold text-white">
              <span className="inline-flex items-center gap-1.5 text-white">
                <Sparkles className="h-3.5 w-3.5 text-[#3D96CE]" aria-hidden="true" />
                <span>Available for Q1/Q2 Projects</span>
              </span>

              <span className="h-3 w-px bg-white/15" aria-hidden="true" />

              {/* Opens in the SAME tab */}
              <Link
                href={CALENDLY_LINK}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#3D96CE]/20 border border-[#3D96CE]/40 px-2.5 py-0.5 text-[12px] font-bold text-white transition-all hover:bg-[#3D96CE] hover:text-white"
              >
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Book 30-Min Call</span>
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5">
              <span className="hidden text-[11px] font-bold uppercase tracking-wider text-slate-300 sm:inline">
                Follow Us:
              </span>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-[#3D96CE] hover:bg-[#3D96CE] hover:text-white"
              >
                <FaFacebookF className="h-3 w-3" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-[#3D96CE] hover:bg-[#3D96CE] hover:text-white"
              >
                <FaInstagram className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* 2. Main Navigation Bar – Seamless Midnight Navy (#0B132B) - Zero Shadow */}
        <div className="w-full pointer-events-none">
          <div
            className={cn(
              "pointer-events-auto relative z-10 w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-none",
              isScrolled
                ? "bg-[#0B132B]/95 border-b border-white/[0.08] backdrop-blur-md shadow-none"
                : "bg-[#0B132B] border-b border-white/[0.08] shadow-none"
            )}
          >
            <div
              className={cn(
                "mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isScrolled
                  ? "h-[68px] sm:h-[72px] lg:h-[74px]"
                  : "h-[74px] sm:h-[78px] lg:h-[82px]"
              )}
            >
              {/* Premium Zoomed & Borderless Floating Brand Logo */}
              <Link
                href="/"
                aria-label="Abtel Cloud Services Home"
                className="group relative z-10 flex shrink-0 items-center py-1 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
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
                      "relative z-10 w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]",
                      isScrolled
                        ? "h-[50px] sm:h-[56px] lg:h-[60px]"
                        : "h-[54px] sm:h-[62px] lg:h-[68px]"
                    )}
                  />
                </div>
              </Link>

              {/* Desktop Navigation Links */}
              <nav
                aria-label="Primary Navigation"
                className="hidden items-center gap-1 xl:gap-2 lg:flex"
              >
                {HEADER_NAV_ITEMS.map((item) => {
                  const active = isActiveLink(item.href);

                  // Specialized Interactive Services Flyout Dropdown
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
                            "relative inline-flex items-center gap-1 px-3.5 py-1.5 text-[13.5px] xl:text-[14px] tracking-tight rounded-full transition-all duration-200 shadow-none",
                            active || isServicesFlyoutOpen
                              ? "bg-[#3D96CE]/15 text-[#3D96CE] font-bold border border-[#3D96CE]/40 shadow-none"
                              : "text-white font-medium hover:text-[#3D96CE] hover:bg-white/[0.08]"
                          )}
                        >
                          <span className={cn(active || isServicesFlyoutOpen ? "text-[#3D96CE]" : "text-white")}>
                            {item.label}
                          </span>
                          <ChevronDown
                            className={cn(
                              "h-3.5 w-3.5 transition-transform duration-200",
                              active || isServicesFlyoutOpen ? "text-[#3D96CE]" : "text-slate-300",
                              isServicesFlyoutOpen && "rotate-180"
                            )}
                            aria-hidden="true"
                          />
                          {active && (
                            <motion.span
                              layoutId="activeNavPill"
                              className="absolute inset-0 rounded-full bg-[#3D96CE]/15 border border-[#3D96CE]/40 -z-10 shadow-none"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          )}
                        </Link>

                        {/* Interactive Services Mega-Flyout Panel */}
                        <AnimatePresence>
                          {isServicesFlyoutOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 8, scale: 0.98 }}
                              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                              className="absolute -left-48 top-full z-50 pt-2.5 w-[760px] pointer-events-auto"
                            >
                              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0B132B] p-5 shadow-2xl backdrop-blur-3xl">
                                <div className="grid grid-cols-12 gap-5">
                                  {/* Left: 6 Core Services Grid */}
                                  <div className="col-span-8 grid grid-cols-2 gap-2">
                                    {SERVICES_DROPDOWN_ITEMS.map((svc) => (
                                      <Link
                                        key={svc.href}
                                        href={svc.href}
                                        onClick={() => setIsServicesFlyoutOpen(false)}
                                        className="group/item flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-2.5 transition-all duration-200 hover:border-[#3D96CE]/60 hover:bg-[#3D96CE]/15 shadow-none hover:shadow-none"
                                      >
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#3D96CE] transition-all duration-200 group-hover/item:scale-105 group-hover/item:bg-[#3D96CE] group-hover/item:text-white">
                                          <svc.icon className="h-4 w-4" aria-hidden="true" />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                          <div className="flex items-center gap-1.5">
                                            <span className="text-[13px] font-bold text-white transition-colors duration-200 group-hover/item:text-[#3D96CE]">
                                              {svc.name}
                                            </span>
                                            {svc.badge && (
                                              <span className="rounded-full bg-[#3D96CE] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                                                {svc.badge}
                                              </span>
                                            )}
                                          </div>
                                          <span className="mt-0.5 text-[11px] leading-tight text-slate-300 line-clamp-1">
                                            {svc.desc}
                                          </span>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>

                                  {/* Right: Technical Advisory Card */}
                                  <div className="col-span-4 flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0E1838] p-4 shadow-none">
                                    <div>
                                      <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#3D96CE]">
                                        <Sparkles className="h-3 w-3" />
                                        Technical Advisory
                                      </span>
                                      <h4 className="mt-2 text-xs font-bold leading-snug text-white">
                                        Need Custom Software Architecture?
                                      </h4>
                                      <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
                                        Schedule a 30-min discovery session with our tech leads to map out your architecture.
                                      </p>
                                    </div>

                                    <div className="mt-3 flex flex-col gap-2">
                                      {/* Opens in SAME tab as requested */}
                                      <Link
                                        href={CALENDLY_LINK}
                                        onClick={() => setIsServicesFlyoutOpen(false)}
                                        className="group/call relative inline-flex h-8 w-full items-center justify-center overflow-hidden rounded-full bg-[#3D96CE] text-white px-3 text-[11.5px] font-bold shadow-none transition-all duration-300 hover:bg-[#2C7DAF]"
                                      >
                                        <span className="relative z-10 flex items-center gap-1.5">
                                          <Calendar className="h-3 w-3" />
                                          <span>Book 30-Min Call</span>
                                        </span>
                                      </Link>

                                      <Link
                                        href="/services"
                                        onClick={() => setIsServicesFlyoutOpen(false)}
                                        className="inline-flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-300 transition-colors hover:text-[#3D96CE]"
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
                        "relative px-3.5 py-1.5 text-[13.5px] xl:text-[14px] tracking-tight rounded-full transition-all duration-200 shadow-none",
                        active
                          ? "bg-[#3D96CE]/15 text-[#3D96CE] font-bold border border-[#3D96CE]/40 shadow-none"
                          : "text-white font-medium hover:text-[#3D96CE] hover:bg-white/[0.08]"
                      )}
                    >
                      <span className={cn(active ? "text-[#3D96CE] font-bold" : "text-white")}>{item.label}</span>
                      {active && (
                        <motion.span
                          layoutId="activeNavPill"
                          className="absolute inset-0 rounded-full bg-[#3D96CE]/15 border border-[#3D96CE]/40 -z-10 shadow-none"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Desktop CTA Button – Sky Blue (#3D96CE) Pill - Zero Shadow */}
              <div className="hidden shrink-0 lg:flex items-center gap-3">
                <Link
                  href="/contact"
                  className="group/btn relative inline-flex h-[42px] items-center justify-center overflow-hidden rounded-full bg-[#3D96CE] px-6 text-[13.5px] font-bold text-white shadow-none transition-all duration-300 hover:bg-[#2C7DAF] hover:-translate-y-0.5 hover:shadow-none active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D96CE]"
                >
                  {/* Luminous sheen animation on hover (no white fill) */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
                  />
                  <span className="relative z-10 flex items-center gap-1.5 text-white">
                    <span>Get Started</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D96CE] lg:hidden"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-white" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5 text-white" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Mobile / Tablet Collapsible Menu Drawer */}
            <AnimatePresence initial={false}>
              {isMobileMenuOpen && (
                <motion.div
                  id="mobile-navigation"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden border-t border-white/[0.08] bg-[#0B132B] shadow-none backdrop-blur-2xl lg:hidden"
                >
                  <nav
                    aria-label="Mobile Navigation"
                    className="mx-auto flex max-w-[1320px] flex-col gap-1 px-4 py-4 sm:px-6"
                  >
                    {/* Live Mobile Agency Availability Status */}
                    <div className="mb-2 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-semibold text-white">
                      <span className="flex items-center gap-1.5 text-[12px] text-white">
                        <Sparkles className="h-3.5 w-3.5 text-[#3D96CE]" />
                        <span>Available for Q1/Q2 Projects</span>
                      </span>
                      {/* Opens in SAME tab */}
                      <Link
                        href={CALENDLY_LINK}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-[11.5px] font-bold text-[#3D96CE] underline hover:text-white"
                      >
                        Book Call &rarr;
                      </Link>
                    </div>

                    {HEADER_NAV_ITEMS.map((item) => {
                      const active = isActiveLink(item.href);

                      // Mobile Services with Accordion Sub-Menu
                      if (item.href === "/services") {
                        return (
                          <div key={item.href} className="flex flex-col">
                            <div className="flex items-center justify-between rounded-xl px-4 py-2.5 text-[14.5px] font-semibold transition-colors hover:bg-white/10 text-white">
                              <Link
                                href={item.href}
                                aria-current={active ? "page" : undefined}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                  "flex-1 text-white",
                                  active
                                    ? "font-bold text-[#3D96CE] underline underline-offset-4"
                                    : "text-white hover:text-[#3D96CE]"
                                )}
                              >
                                <span>{item.label}</span>
                              </Link>
                              <button
                                type="button"
                                onClick={() => setIsMobileServicesExpanded((prev) => !prev)}
                                aria-label="Toggle services list"
                                className="p-1 text-white hover:text-[#3D96CE]"
                              >
                                <ChevronDown
                                  className={cn(
                                    "h-4 w-4 text-slate-300 transition-transform duration-200",
                                    isMobileServicesExpanded && "rotate-180"
                                  )}
                                />
                              </button>
                            </div>

                            {/* Sub Services Drawer */}
                            <AnimatePresence>
                              {isMobileServicesExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="ml-4 flex flex-col gap-1 border-l border-[#303E99]/40 pl-3 py-1"
                                >
                                  {SERVICES_DROPDOWN_ITEMS.map((svc) => (
                                    <Link
                                      key={svc.href}
                                      href={svc.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-200 transition-colors hover:bg-white/10 hover:text-[#3D96CE]"
                                    >
                                      <svc.icon className="h-3.5 w-3.5 text-[#3D96CE]" />
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
                          aria-current={active ? "page" : undefined}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between rounded-xl px-4 py-2.5 text-[14.5px] font-semibold transition-colors shadow-none",
                            active
                              ? "bg-[#3D96CE]/15 font-bold text-[#3D96CE] border border-[#3D96CE]/40 shadow-none"
                              : "text-white hover:bg-white/[0.08] hover:text-[#3D96CE]"
                          )}
                        >
                          <span>{item.label}</span>
                          {active && (
                            <span className="rounded-md bg-[#3D96CE] px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                              Active
                            </span>
                          )}
                        </Link>
                      );
                    })}

                    {/* Mobile CTA Button – Sky Blue (#3D96CE) - Zero Shadow */}
                    <div className="mt-3 border-t border-white/[0.08] pt-4">
                      <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group/mobbtn relative flex w-full items-center justify-center overflow-hidden rounded-full bg-[#3D96CE] text-white px-6 py-3.5 text-[14.5px] font-bold shadow-none transition-all duration-300 hover:bg-[#2C7DAF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D96CE]"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <span>Get Started</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/mobbtn:translate-x-1" />
                        </span>
                      </Link>
                    </div>

                    {/* Mobile Quick Contact Card */}
                    <div className="mt-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3.5 text-xs font-medium text-white">
                      <div className="flex flex-col gap-2">
                        <span className="flex items-center gap-2 text-white">
                          <MapPin className="h-3.5 w-3.5 text-[#3D96CE]" />
                          San-Antonio, Texas
                        </span>
                        <a
                          href="mailto:sales@abtelcloud.com"
                          className="flex items-center gap-2 text-white hover:text-[#3D96CE] hover:underline transition-colors font-semibold"
                        >
                          <Mail className="h-3.5 w-3.5 text-[#3D96CE]" />
                          sales@abtelcloud.com
                        </a>
                        <a
                          href="tel:+18004844204"
                          className="flex items-center gap-2 text-white hover:text-[#3D96CE] hover:underline transition-colors font-semibold"
                        >
                          <Phone className="h-3.5 w-3.5 text-[#3D96CE]" />
                          +1 800 484 4204
                        </a>
                        {/* Opens in SAME tab */}
                        <Link
                          href={CALENDLY_LINK}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-2 text-[#3D96CE] font-bold underline transition-colors hover:text-white"
                        >
                          <Calendar className="h-3.5 w-3.5 text-[#3D96CE]" />
                          Schedule 30-Min Consultation
                        </Link>
                      </div>

                      <div className="mt-3 flex items-center justify-between border-t border-[#303E99]/30 pt-2.5 text-white">
                        <span className="text-[11px] font-bold text-slate-300">Follow Us:</span>
                        <div className="flex items-center gap-2">
                          <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-[#303E99]/40 bg-white/5 text-white transition-colors hover:border-[#3D96CE] hover:bg-[#3D96CE] hover:text-white"
                          >
                            <FaFacebookF className="h-3 w-3" />
                          </a>
                          <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-[#303E99]/40 bg-white/5 text-white transition-colors hover:border-[#3D96CE] hover:bg-[#3D96CE] hover:text-white"
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

      {/* Spacer to keep document flow perfectly stable - matched to #0B132B */}
      <div
        className="h-[110px] w-full shrink-0 pointer-events-none lg:h-[118px] bg-[#0B132B]"
        aria-hidden="true"
      />
    </>
  );
}
