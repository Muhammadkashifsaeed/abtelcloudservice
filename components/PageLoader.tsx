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
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // React 19 pattern: adjust state during render on route change (zero flash)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (!reducedMotion && !isInitialLoad) {
      setIsNavigating(true);
      setIsReady(false);
    }
  }

  // 1. Initial Site Load: Shows refined brand reveal with logo & progress line, then parts open silkily
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      const reduceTimer = window.setTimeout(() => {
        setReducedMotion(true);
        setIsInitialLoad(false);
        setIsReady(true);
      }, 0);
      return () => window.clearTimeout(reduceTimer);
    }

    // Snappy, silky initial display (260ms), then smooth parting begins
    const initialLoadTimer = window.setTimeout(() => {
      setIsParting(true);
      setIsReady(true);

      // Complete initial load and cleanly remove overlay from DOM
      const partingTimer = window.setTimeout(() => {
        setIsInitialLoad(false);
        setIsParting(false);
      }, 440);

      return () => window.clearTimeout(partingTimer);
    }, 260);

    return () => {
      window.clearTimeout(initialLoadTimer);
    };
  }, []);

  // 2. Global Internal Link Click Interception:
  // Starts curtain entrance immediately upon clicking any internal navigation link
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
        if (safetyTimeoutRef.current) {
          clearTimeout(safetyTimeoutRef.current);
        }

        setIsNavigating(true);
        setIsParting(false);
        setIsReady(false);

        // Safety fallback: if navigation fails or is aborted, gracefully open and clear
        safetyTimeoutRef.current = setTimeout(() => {
          setIsParting(true);
          setIsReady(true);
          setTimeout(() => {
            setIsNavigating(false);
            setIsParting(false);
          }, 380);
        }, 900);
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
    };
  }, [pathname, reducedMotion]);

  // 3. Page Route Change (handles link clicks + browser back/forward):
  // When pathname changes, hold briefly then part open silkily revealing the new page
  useEffect(() => {
    if (reducedMotion || isInitialLoad) {
      return;
    }

    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
      safetyTimeoutRef.current = null;
    }

    // Snappy hold so the new page renders underneath (120ms), then part open silkily
    const holdTimer = window.setTimeout(() => {
      setIsParting(true);
      setIsReady(true);

      const partEndTimer = window.setTimeout(() => {
        setIsNavigating(false);
        setIsParting(false);
      }, 380);

      return () => window.clearTimeout(partEndTimer);
    }, 120);

    return () => {
      window.clearTimeout(holdTimer);
    };
  }, [pathname, isInitialLoad, reducedMotion]);

  const showCurtain = !reducedMotion && (isInitialLoad || isNavigating);

  return (
    <LoaderContext.Provider value={{ isReady }}>
      {/* Route Navigation Top Progress Line */}
      <AnimatePresence>
        {!reducedMotion && isNavigating && (
          <motion.div
            key={`route-progress-${pathname}`}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              scaleX: { duration: 0.28, ease: BRAND_EASE },
              opacity: { duration: 0.15 },
            }}
            aria-hidden="true"
            className="pointer-events-none fixed top-0 inset-x-0 z-[120] h-[3px] origin-left bg-gradient-to-r from-[#205696] via-[#3D96CE] to-[#22C7F2] shadow-[0_0_16px_rgba(34,199,242,0.9)]"
          />
        )}
      </AnimatePresence>

      {/* Cinematic Logo & Split Curtain Reveal (Initial Load + Page Navigation) */}
      <AnimatePresence>
        {showCurtain && (
          <div
            key="page-curtain-loader"
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
          >
            {/* Left Cinematic Panel */}
            <motion.div
              initial={{ x: 0 }}
              animate={isParting ? { x: "-100%" } : { x: 0 }}
              transition={{ duration: 0.54, ease: GENTLE_LUXURY_EASE }}
              className="absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-[#0B132B]"
            >
              {/* Brand #0B132B Midnight Navy Theme Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#070D1E] via-[#0B132B] to-[#091024]" />

              {/* High-Tech Vector Grid Texture */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full opacity-[0.16]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="loader-grid-left"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="#3D96CE"
                      strokeWidth="0.8"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#loader-grid-left)" />
              </svg>

              {/* Ambient Sky Blue Glow Mesh */}
              <div className="absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#3D96CE]/20 blur-[110px]" />
            </motion.div>

            {/* Right Cinematic Panel */}
            <motion.div
              initial={{ x: 0 }}
              animate={isParting ? { x: "100%" } : { x: 0 }}
              transition={{ duration: 0.54, ease: GENTLE_LUXURY_EASE }}
              className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-[#0B132B]"
            >
              {/* Brand #0B132B Midnight Navy Theme Gradient */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#070D1E] via-[#0B132B] to-[#091024]" />

              {/* High-Tech Vector Grid Texture */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full opacity-[0.16]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="loader-grid-right"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="#3D96CE"
                      strokeWidth="0.8"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#loader-grid-right)" />
              </svg>

              {/* Ambient Sky Blue Glow Mesh */}
              <div className="absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#3D96CE]/20 blur-[120px]" />
            </motion.div>

            {/* Center Loading Content (Brand Logo & Horizontal Progress Divider Bar) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={
                isParting
                  ? { opacity: 0, scale: 1.04, y: -6 }
                  : { opacity: 1, scale: 1, y: 0 }
              }
              transition={{ duration: 0.28, ease: GENTLE_LUXURY_EASE }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6"
            >
              {/* Brand Logo with Ambient Sky Blue Glow Halo */}
              <div className="relative flex items-center justify-center">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -m-8 animate-pulse rounded-full bg-[#3D96CE]/35 blur-[42px] [animation-duration:3s]"
                />
                <Image
                  src="/images/ABTEL-CLOUD-SERVICES-logo-1.png"
                  alt="Abtel Cloud Services"
                  width={380}
                  height={100}
                  priority
                  className="relative z-10 h-14 w-auto object-contain brightness-[1.05] contrast-[1.05] drop-shadow-[0_8px_36px_rgba(34,199,242,0.7)] sm:h-18"
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
                    key={`curtain-bar-${pathname}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: BRAND_EASE }}
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
