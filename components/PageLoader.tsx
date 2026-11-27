"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

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

  // React 19 pattern: sync during render on route change (e.g. back/forward or programmatic)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (!reducedMotion && !isInitialLoad) {
      setIsNavigating(true);
      setIsReady(false);
    }
  }

  // 1. Initial Site Load Animation with Smooth Counter (Only on First Visit)
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
    const duration = 850; // Snappy 0.85s loading intro

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
        // Sensory completion hold, then part curtains
        window.setTimeout(() => {
          setIsParting(true);
          setIsReady(true);

          window.setTimeout(() => {
            setIsInitialLoad(false);
            setIsParting(false);
          }, 600);
        }, 120);
      }
    };

    const animId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  // 2. Fast Route Navigation Feedback (Top Progress Beam)
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
        setIsReady(false);

        // Safety fallback if route fails to change or user stays on page
        safetyTimeoutRef.current = setTimeout(() => {
          setIsReady(true);
          setTimeout(() => {
            setIsNavigating(false);
          }, 250);
        }, 3000);
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
    };
  }, [pathname, reducedMotion]);

  // 3. Page Route Change Trigger (Finish Beam Smoothly & Reset Scroll)
  useEffect(() => {
    if (reducedMotion || isInitialLoad) {
      return;
    }

    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
      safetyTimeoutRef.current = null;
    }

    // Instantly reset scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Mark route as ready on the next frame (avoids synchronous setState in effect)
    const readyRaf = requestAnimationFrame(() => setIsReady(true));

    const finishTimer = window.setTimeout(() => {
      setIsNavigating(false);
    }, 320);

    return () => {
      cancelAnimationFrame(readyRaf);
      window.clearTimeout(finishTimer);
    };
  }, [pathname, isInitialLoad, reducedMotion]);

  // Show split curtain ONLY on the initial site load, NEVER on internal page navigation
  const showCurtain = !reducedMotion && isInitialLoad;

  return (
    <LoaderContext.Provider value={{ isReady }}>
      {/* Top Luminous Neon Lime Route Beam with Leading Spark */}
      <AnimatePresence>
        {!reducedMotion && isNavigating && (
          <div
            key="route-progress-bar"
            aria-hidden="true"
            className="pointer-events-none fixed top-0 inset-x-0 z-[120] h-1 overflow-hidden"
          >
            <motion.div
              initial={{ scaleX: 0, opacity: 1 }}
              animate={
                isReady
                  ? { scaleX: 1, opacity: 0 }
                  : { scaleX: 0.82, opacity: 1 }
              }
              transition={
                isReady
                  ? {
                      scaleX: { duration: 0.22, ease: "easeOut" },
                      opacity: { duration: 0.28, delay: 0.08 },
                    }
                  : {
                      scaleX: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                    }
              }
              className="relative h-full w-full origin-left overflow-hidden bg-gradient-to-r from-[#E11D48] via-[#FB7185] to-[#E11D48] shadow-[0_0_20px_rgba(225,29,72,0.95)]"
            >
              {/* Soft leading highlight that glides left to right once per fill */}
              <motion.div
                aria-hidden="true"
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[1px]"
                initial={{ x: "-120%" }}
                animate={{ x: "120%" }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  repeat: isReady ? 0 : Infinity,
                  repeatDelay: 0.15,
                }}
              />
              {/* Pulsing luminous spark riding the leading edge */}
              <motion.div
                aria-hidden="true"
                className="absolute right-0 top-1/2 h-2 w-8 -translate-y-1/2 rounded-full bg-white shadow-[0_0_14px_#E11D48,0_0_28px_#E11D48]"
                animate={isReady ? { opacity: 0 } : { opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 0.9,
                  repeat: isReady ? 0 : Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Initial Site Visit Curtain Loader (Only appears on initial hard visit) */}
      <AnimatePresence>
        {showCurtain && (
          <div
            key="page-curtain-loader"
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[100] overflow-hidden select-none"
          >
            {/* Left Split Panel */}
            <motion.div
              initial={{ x: 0 }}
              animate={isParting ? { x: "-100%" } : { x: 0 }}
              transition={{
                duration: 0.65,
                ease: CURTAIN_EASE,
              }}
              className="absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-[#05070C]"
            >
              <div className="absolute inset-0 bg-[#05070C]" />

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
              <div className="absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#E11D48]/10 blur-[140px]" />
            </motion.div>

            {/* Right Split Panel */}
            <motion.div
              initial={{ x: 0 }}
              animate={isParting ? { x: "100%" } : { x: 0 }}
              transition={{
                duration: 0.65,
                ease: CURTAIN_EASE,
              }}
              className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-[#05070C]"
            >
              <div className="absolute inset-0 bg-[#05070C]" />

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

              <div className="absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#E11D48]/10 blur-[140px]" />
            </motion.div>

            {/* Center Loading Content (ONLY on initial site load) */}
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
              {/* Favicon tile + glowing divider */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: LUXURY_EASE }}
                  className="relative mb-8 flex h-24 w-24 items-center justify-center"
                >
                  <div className="absolute inset-0 animate-ping rounded-2xl bg-[#E11D48]/20 [animation-duration:2.6s]" />
                  <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-8px_rgba(225,29,72,0.55)] ring-1 ring-inset ring-white/60">
                    <Image
                      src="/images/acs-fav-icon.png"
                      alt="Abtel Cloud Services"
                      width={80}
                      height={80}
                      priority
                      className="h-full w-full object-contain"
                    />
                  </div>
                </motion.div>

                <div className="relative h-[2.5px] w-60 overflow-hidden rounded-full bg-white/15 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] sm:w-72">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#E11D48] via-[#FB7185] to-[#E11D48] shadow-[0_0_16px_rgba(225,29,72,0.95)]"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                  />
                </div>

                <p className="mt-6 font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-white/60">
                  Abtel Cloud Services
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {children}
    </LoaderContext.Provider>
  );
}
