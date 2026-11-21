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

    // Comfortable, fast initial display (340ms), then parting begins
    const initialLoadTimer = window.setTimeout(() => {
      setIsParting(true);
      setIsReady(true);

      // Complete initial load and cleanly remove overlay from DOM
      const partingTimer = window.setTimeout(() => {
        setIsInitialLoad(false);
        setIsParting(false);
      }, 560);

      return () => window.clearTimeout(partingTimer);
    }, 340);

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
          }, 500);
        }, 1200);
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

    // Snappy hold so the new page renders underneath (220ms), then part open silkily
    const holdTimer = window.setTimeout(() => {
      setIsParting(true);
      setIsReady(true);

      const partEndTimer = window.setTimeout(() => {
        setIsNavigating(false);
        setIsParting(false);
      }, 540);

      return () => window.clearTimeout(partEndTimer);
    }, 220);

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
              scaleX: { duration: 0.32, ease: BRAND_EASE },
              opacity: { duration: 0.18 },
            }}
            aria-hidden="true"
            className="pointer-events-none fixed top-0 inset-x-0 z-[110] h-[2.5px] origin-left bg-gradient-to-r from-[#304098] via-[#3898D0] to-[#00D4FF] shadow-[0_0_12px_rgba(56,152,208,0.8)]"
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
              className="absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-[#251F87]"
            >
              {/* Brand #251F87 Royal Indigo Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#171356] via-[#251F87] to-[#1E196E]" />

              {/* High-Tech Vector Grid Texture */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full opacity-[0.14]"
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
                      stroke="#3898D0"
                      strokeWidth="0.8"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#loader-grid-left)" />
              </svg>

              {/* Ambient Sky Blue Glow Mesh */}
              <div className="absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#3898D0]/16 blur-[110px]" />
            </motion.div>

            {/* Right Cinematic Panel */}
            <motion.div
              initial={{ x: 0 }}
              animate={isParting ? { x: "100%" } : { x: 0 }}
              transition={{ duration: 0.54, ease: GENTLE_LUXURY_EASE }}
              className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-[#251F87]"
            >
              {/* Brand #251F87 Royal Indigo Gradient */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#171356] via-[#251F87] to-[#1E196E]" />

              {/* High-Tech Vector Grid Texture */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full opacity-[0.14]"
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
                      stroke="#3898D0"
                      strokeWidth="0.8"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#loader-grid-right)" />
              </svg>

              {/* Ambient Royal Blue Glow Mesh */}
              <div className="absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#304098]/22 blur-[120px]" />
            </motion.div>

            {/* Center Loading Content (Brand Logo & Horizontal Progress Divider Bar) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={
                isParting
                  ? { opacity: 0, scale: 1.04, y: -6 }
                  : { opacity: 1, scale: 1, y: 0 }
              }
              transition={{ duration: 0.32, ease: GENTLE_LUXURY_EASE }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6"
            >
              {/* Brand Logo with Ambient Sky Blue Glow Halo */}
              <div className="relative flex items-center justify-center">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -m-6 rounded-full bg-[#3898D0]/25 blur-[36px]"
                />
                <Image
                  src="/images/ABTEL-CLOUD-SERVICES-logo-1.png"
                  alt="Abtel Cloud Services"
                  width={380}
                  height={100}
                  priority
                  className="relative z-10 h-14 w-auto object-contain brightness-[1.03] contrast-[1.03] drop-shadow-[0_8px_32px_rgba(56,152,208,0.55)] sm:h-18"
                />
              </div>

              {/* Horizontal Loading Progress Divider Line (Under Logo) */}
              <div className="mt-6 h-[2.5px] w-44 overflow-hidden rounded-full bg-white/15 sm:w-52">
                <motion.div
                  key={`curtain-bar-${pathname}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.38, ease: BRAND_EASE }}
                  className="h-full origin-left rounded-full bg-gradient-to-r from-[#304098] via-[#3898D0] to-[#00D4FF] shadow-[0_0_12px_#3898D0]"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {children}
    </LoaderContext.Provider>
  );
}
