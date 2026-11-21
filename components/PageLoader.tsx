"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

// Silky luxury easing curves
const GENTLE_LUXURY_EASE = [0.16, 1, 0.3, 1] as const;
const BRAND_EASE = [0.22, 1, 0.36, 1] as const;

interface LoaderContextValue {
  isReady: boolean;
}

const LoaderContext = createContext<LoaderContextValue>({ isReady: true });

export function usePageReady(): boolean {
  return useContext(LoaderContext).isReady;
}

export function PageLoaderProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isParting, setIsParting] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const [prevPathname, setPrevPathname] = useState(pathname);
  const navTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // React 19 pattern: adjust state during render on route change
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (!reducedMotion && !isInitialLoad) {
      setIsNavigating(true);
    }
  }

  // 1. Initial Site Load with Realistic Hands & Split Curtain:
  // Runs ONLY once during the initial page load per browser session
  useEffect(() => {
    // Respect reduced motion accessibility
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setReducedMotion(true);
      setIsInitialLoad(false);
      setIsReady(true);
      return;
    }

    // Check session storage so intro shows ONLY on initial load
    try {
      const alreadySeen = window.sessionStorage.getItem("abtel_intro_viewed");
      if (alreadySeen) {
        setIsInitialLoad(false);
        setIsReady(true);
        return;
      }
      window.sessionStorage.setItem("abtel_intro_viewed", "true");
    } catch {
      // In private browsing mode or storage disabled, proceed gracefully
    }

    // Hold closed for 520ms showcasing the two realistic hands holding the center
    const holdTimer = window.setTimeout(() => {
      setIsParting(true);
      setIsReady(true);

      // Smoothly unmount curtain overlay after hands and panels glide off-screen
      const completeTimer = window.setTimeout(() => {
        setIsInitialLoad(false);
        setIsParting(false);
      }, 850);

      return () => window.clearTimeout(completeTimer);
    }, 520);

    return () => {
      window.clearTimeout(holdTimer);
    };
  }, []);

  // 2. Route Navigation: Lightweight top progress bar on subsequent page navigations
  useEffect(() => {
    if (reducedMotion || isInitialLoad) return;

    if (isNavigating) {
      if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
      navTimeoutRef.current = setTimeout(() => {
        setIsNavigating(false);
      }, 420);
    }

    return () => {
      if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
    };
  }, [pathname, isNavigating, isInitialLoad, reducedMotion]);

  // Global link click handler for instant top progress bar response on navigation
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      if (reducedMotion) return;

      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("#") &&
        !href.startsWith("//") &&
        href !== pathname &&
        !target.hasAttribute("download") &&
        target.target !== "_blank"
      ) {
        setIsNavigating(true);
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
    };
  }, [pathname, reducedMotion]);

  // Show intro curtain only during initial page load
  const showIntroCurtain = !reducedMotion && isInitialLoad;

  return (
    <LoaderContext.Provider value={{ isReady }}>
      {/* Route Navigation Top Progress Line (For Subsequent Page Changes) */}
      <AnimatePresence>
        {!reducedMotion && isNavigating && (
          <motion.div
            key={`route-progress-${pathname}`}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              scaleX: { duration: 0.3, ease: BRAND_EASE },
              opacity: { duration: 0.15 },
            }}
            aria-hidden="true"
            className="pointer-events-none fixed top-0 inset-x-0 z-[120] h-[3px] origin-left bg-gradient-to-r from-[#205696] via-[#3D96CE] to-[#22C7F2] shadow-[0_0_16px_rgba(34,199,242,0.9)]"
          />
        )}
      </AnimatePresence>

      {/* Cinematic Two-Hand Split Curtain Reveal (Initial Page Load Only) */}
      <AnimatePresence>
        {showIntroCurtain && (
          <div
            key="hand-curtain-intro-loader"
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none"
          >
            {/* Left Curtain Panel (Holding Left Hand, Slides to Left) */}
            <motion.div
              initial={{ x: 0 }}
              animate={isParting ? { x: "-100%" } : { x: 0 }}
              transition={{ duration: 0.82, ease: GENTLE_LUXURY_EASE }}
              className="absolute inset-y-0 left-0 w-1/2 overflow-visible bg-[#070D1E] border-r border-[#3D96CE]/35 shadow-[4px_0_35px_rgba(61,150,206,0.4)]"
            >
              {/* Luxury Midnight Navy Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#050A17] via-[#070D1E] to-[#0A1328]" />

              {/* High-Tech Vector Grid Texture */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full opacity-[0.14]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="intro-grid-left"
                    width="44"
                    height="44"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 44 0 L 0 0 0 44"
                      fill="none"
                      stroke="#3D96CE"
                      strokeWidth="0.8"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#intro-grid-left)" />
              </svg>

              {/* Ambient Sky Blue Glow Mesh */}
              <div className="absolute -right-28 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-[#3D96CE]/20 blur-[130px]" />

              {/* Realistic Left Hand Holding the Center Seam */}
              <div className="pointer-events-none absolute right-[-28px] sm:right-[-38px] md:right-[-48px] lg:right-[-58px] top-1/2 -translate-y-1/2 z-30">
                <Image
                  src="/images/left-hand-trimmed.webp"
                  alt="Left hand holding curtain"
                  width={888}
                  height={500}
                  priority
                  className="h-[170px] w-auto sm:h-[230px] md:h-[290px] lg:h-[350px] object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.85)] filter brightness-[1.02] contrast-[1.04]"
                />
              </div>
            </motion.div>

            {/* Right Curtain Panel (Holding Right Hand, Slides to Right) */}
            <motion.div
              initial={{ x: 0 }}
              animate={isParting ? { x: "100%" } : { x: 0 }}
              transition={{ duration: 0.82, ease: GENTLE_LUXURY_EASE }}
              className="absolute inset-y-0 right-0 w-1/2 overflow-visible bg-[#070D1E] border-l border-[#3D96CE]/35 shadow-[-4px_0_35px_rgba(61,150,206,0.4)]"
            >
              {/* Luxury Midnight Navy Gradient */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#050A17] via-[#070D1E] to-[#0A1328]" />

              {/* High-Tech Vector Grid Texture */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full opacity-[0.14]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="intro-grid-right"
                    width="44"
                    height="44"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 44 0 L 0 0 0 44"
                      fill="none"
                      stroke="#3D96CE"
                      strokeWidth="0.8"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#intro-grid-right)" />
              </svg>

              {/* Ambient Sky Blue Glow Mesh */}
              <div className="absolute -left-28 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-[#3D96CE]/20 blur-[130px]" />

              {/* Realistic Right Hand Holding the Center Seam */}
              <div className="pointer-events-none absolute left-[-28px] sm:left-[-38px] md:left-[-48px] lg:left-[-58px] top-1/2 -translate-y-1/2 z-30">
                <Image
                  src="/images/right-hand-trimmed.webp"
                  alt="Right hand holding curtain"
                  width={816}
                  height={500}
                  priority
                  className="h-[170px] w-auto sm:h-[230px] md:h-[290px] lg:h-[350px] object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.85)] filter brightness-[1.02] contrast-[1.04]"
                />
              </div>
            </motion.div>

            {/* Center Brand Emblem & Loading Track (Dissolves as Hands Part Open) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={
                isParting
                  ? { opacity: 0, scale: 1.05, y: -12 }
                  : { opacity: 1, scale: 1, y: 0 }
              }
              transition={{ duration: 0.38, ease: GENTLE_LUXURY_EASE }}
              className="absolute inset-0 z-40 flex flex-col items-center justify-center p-6"
            >
              {/* Brand Logo with Ambient Sky Blue Glow Halo */}
              <div className="relative flex items-center justify-center">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -m-8 animate-pulse rounded-full bg-[#3D96CE]/35 blur-[45px] [animation-duration:2.8s]"
                />
                <Image
                  src="/images/ABTEL-CLOUD-SERVICES-logo-1.png"
                  alt="Abtel Cloud Services"
                  width={380}
                  height={100}
                  priority
                  className="relative z-10 h-14 w-auto object-contain brightness-[1.06] contrast-[1.05] drop-shadow-[0_8px_36px_rgba(34,199,242,0.75)] sm:h-18"
                />
              </div>

              {/* Status Badge & Horizontal Loading Progress Track */}
              <div className="mt-5 flex flex-col items-center gap-2.5">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#3D96CE]/35 bg-[#3D96CE]/15 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#22C7F2] backdrop-blur-md">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22C7F2]" />
                  <span>Abtel Cloud Services</span>
                </div>

                <div className="h-[3px] w-48 overflow-hidden rounded-full bg-white/15 sm:w-56">
                  <motion.div
                    key="curtain-loading-progress"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: BRAND_EASE }}
                    className="h-full origin-left rounded-full bg-gradient-to-r from-[#205696] via-[#3D96CE] to-[#22C7F2] shadow-[0_0_16px_rgba(34,199,242,0.9)]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {children}
    </LoaderContext.Provider>
  );
}
