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
import { DigiStartupLogo } from "@/components/DigiStartupLogo";

// Luxury agency cubic bezier curves
const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;
const CURTAIN_EASE = [0.76, 0, 0.24, 1] as const;

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
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const [prevPathname, setPrevPathname] = useState(pathname);
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // React 19 pattern: sync during render on route change
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (!reducedMotion && !isInitialLoad) {
      setIsNavigating(true);
      setIsReady(false);
    }
  }

  // 1. Initial Site Load Animation with Real Smooth Counter (0% to 100%)
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      requestAnimationFrame(() => {
        setReducedMotion(true);
        setIsInitialLoad(false);
        setIsReady(true);
      });
      return;
    }

    let currentVal = 0;
    const startTime = performance.now();
    const duration = 1250; // 1.25s silky loading counter

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);

      // Smooth custom easing for counter speed
      const easeVal =
        progressRatio < 0.5
          ? 2 * progressRatio * progressRatio
          : 1 - Math.pow(-2 * progressRatio + 2, 2) / 2;

      currentVal = Math.round(easeVal * 100);
      setProgress(currentVal);

      if (progressRatio < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setProgress(100);
        // Hold at 100% briefly for sensory completion, then part curtains
        window.setTimeout(() => {
          setIsParting(true);
          setIsReady(true);

          window.setTimeout(() => {
            setIsInitialLoad(false);
            setIsParting(false);
          }, 850);
        }, 160);
      }
    };

    const animId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  // 2. Route Navigation Click Interception
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

        // Safety fallback if route fails to change
        safetyTimeoutRef.current = setTimeout(() => {
          setIsParting(true);
          setIsReady(true);
          setTimeout(() => {
            setIsNavigating(false);
            setIsParting(false);
          }, 600);
        }, 1200);
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
    };
  }, [pathname, reducedMotion]);

  // 3. Page Route Change Trigger
  useEffect(() => {
    if (reducedMotion || isInitialLoad) {
      return;
    }

    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
      safetyTimeoutRef.current = null;
    }

    // Quick, responsive parting on route change (no fake delay, pure fluid motion)
    const holdTimer = window.setTimeout(() => {
      setIsParting(true);
      setIsReady(true);

      const partEndTimer = window.setTimeout(() => {
        setIsNavigating(false);
        setIsParting(false);
      }, 480);

      return () => window.clearTimeout(partEndTimer);
    }, 60);

    return () => {
      window.clearTimeout(holdTimer);
    };
  }, [pathname, isInitialLoad, reducedMotion]);

  const showCurtain = !reducedMotion && (isInitialLoad || isNavigating);

  return (
    <LoaderContext.Provider value={{ isReady }}>
      {/* Top Luminous Route Beam */}
      <AnimatePresence>
        {!reducedMotion && isNavigating && (
          <motion.div
            key={`route-progress-${pathname}`}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              scaleX: { duration: 0.35, ease: LUXURY_EASE },
              opacity: { duration: 0.15 },
            }}
            aria-hidden="true"
            className="pointer-events-none fixed top-0 inset-x-0 z-[120] h-[3.5px] origin-left bg-gradient-to-r from-[var(--brand-lime)] via-[#D4FF38] to-[var(--brand-lime)] shadow-[0_0_20px_rgba(197, 216, 46,0.9)]"
          />
        )}
      </AnimatePresence>

      {/* Cinematic Split Curtain Experience */}
      <AnimatePresence>
        {showCurtain && (
          <div
            key="page-curtain-loader"
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[100] overflow-hidden select-none"
          >
            {/* Left Split Panel */}
            <motion.div
              initial={isInitialLoad ? { x: 0 } : { x: "-100%" }}
              animate={isParting ? { x: "-100%" } : { x: 0 }}
              transition={{
                duration: isInitialLoad ? 0.85 : 0.45,
                ease: CURTAIN_EASE,
              }}
              className="absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-[#080A0F]"
            >
              <div className="absolute inset-0 bg-[#080A0F]" />

              {/* Vector Grid Lattice */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full opacity-[0.05]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="loader-grid-left"
                    width="48"
                    height="48"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 48 0 L 0 0 0 48"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="0.75"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#loader-grid-left)" />
              </svg>

              {/* Lime Ambient Radial Glow */}
              <div className="absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[var(--brand-lime)]/10 blur-[140px]" />
            </motion.div>

            {/* Right Split Panel */}
            <motion.div
              initial={isInitialLoad ? { x: 0 } : { x: "100%" }}
              animate={isParting ? { x: "100%" } : { x: 0 }}
              transition={{
                duration: isInitialLoad ? 0.85 : 0.45,
                ease: CURTAIN_EASE,
              }}
              className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-[#080A0F]"
            >
              <div className="absolute inset-0 bg-[#080A0F]" />

              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full opacity-[0.05]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="loader-grid-right"
                    width="48"
                    height="48"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 48 0 L 0 0 0 48"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="0.75"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#loader-grid-right)" />
              </svg>

              <div className="absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[var(--brand-lime)]/10 blur-[140px]" />
            </motion.div>

            {/* Center Loading Content (ONLY shown on initial website load) */}
            {isInitialLoad && (
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={
                  isParting
                    ? { opacity: 0, scale: 1.08, filter: "blur(8px)", y: -15 }
                    : { opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }
                }
                transition={{ duration: 0.45, ease: LUXURY_EASE }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-white"
              >
                {/* Sleek Glowing Divider Bar (No % text, loading animates purely inside the divider) */}
                <div className="flex flex-col items-center">
                  <div className="relative h-[2.5px] w-60 overflow-hidden rounded-full bg-white/15 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] sm:w-72">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--brand-lime)] via-[#D4FF38] to-[var(--brand-lime)] shadow-[0_0_16px_rgba(197, 216, 46,0.95)]"
                      style={{ width: `${progress}%` }}
                      transition={{ ease: "linear" }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>

      {children}
    </LoaderContext.Provider>
  );
}
