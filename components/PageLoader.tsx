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

const LUXURY_EASE = [0.76, 0, 0.24, 1] as const;
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
  const [isParting, setIsParting] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const prevPathnameRef = useRef(pathname);

  // 1. Initial Site Load: Shows loading with logo & progress line, then parts open
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

    // Brief authentic loading duration (logo + progress bar), then cinematic split parting begins
    const initialLoadTimer = window.setTimeout(() => {
      setIsParting(true);
      setIsReady(true);

      // Complete initial load and remove overlay from DOM
      const partingTimer = window.setTimeout(() => {
        setIsInitialLoad(false);
        setIsParting(false);
      }, 660);

      return () => window.clearTimeout(partingTimer);
    }, 450);

    return () => {
      window.clearTimeout(initialLoadTimer);
    };
  }, []);

  // 2. Page Navigation: Shows loading state first, then smoothly parts open on every page
  useEffect(() => {
    // Skip on first mount or identical pathname
    if (prevPathnameRef.current === pathname) {
      return;
    }
    prevPathnameRef.current = pathname;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || isInitialLoad) {
      const skipTimer = window.setTimeout(() => {
        setIsReady(true);
      }, 0);
      return () => window.clearTimeout(skipTimer);
    }

    // Trigger authentic page loading state
    const navStartTimer = window.setTimeout(() => {
      setIsNavigating(true);
      setIsParting(false);

      // Loading duration with logo & progress line, then smoothly parts open
      const openTimer = window.setTimeout(() => {
        setIsParting(true);
        setIsReady(true);

        const navEndTimer = window.setTimeout(() => {
          setIsNavigating(false);
          setIsParting(false);
        }, 660);

        return () => window.clearTimeout(navEndTimer);
      }, 420);

      return () => window.clearTimeout(openTimer);
    }, 0);

    return () => {
      window.clearTimeout(navStartTimer);
    };
  }, [pathname, isInitialLoad]);

  const showOverlay = !reducedMotion && (isInitialLoad || isNavigating);

  return (
    <LoaderContext.Provider value={{ isReady }}>
      <AnimatePresence>
        {showOverlay && (
          <div
            key={isInitialLoad ? "initial-curtain" : `nav-curtain-${pathname}`}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
          >
            {/* Left Cinematic Panel (Seamless join, NO vertical line cutting through screen) */}
            <motion.div
              initial={{ x: 0 }}
              animate={isParting ? { x: "-100%" } : { x: 0 }}
              transition={{ duration: 0.62, ease: LUXURY_EASE }}
              className="absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-[#0A0E33]"
            >
              {/* Deep Navy/Indigo Technology Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#070A26] via-[#0A0E33] to-[#0D1342]" />

              {/* Authentic Tiled Circuit-Board Pattern */}
              <div
                style={{
                  backgroundImage: "url('/images/bg_pattern.png')",
                  backgroundRepeat: "repeat",
                  backgroundSize: "220px 220px",
                }}
                className="absolute inset-0 opacity-[0.14]"
              />

              {/* Ambient Cyan Tech Glow Mesh */}
              <div className="absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#00D4FF]/14 blur-[110px]" />
            </motion.div>

            {/* Right Cinematic Panel (Seamless join, NO vertical line cutting through screen) */}
            <motion.div
              initial={{ x: 0 }}
              animate={isParting ? { x: "100%" } : { x: 0 }}
              transition={{ duration: 0.62, ease: LUXURY_EASE }}
              className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-[#0A0E33]"
            >
              {/* Deep Navy/Indigo Technology Gradient */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#070A26] via-[#0A0E33] to-[#0D1342]" />

              {/* Authentic Tiled Circuit-Board Pattern */}
              <div
                style={{
                  backgroundImage: "url('/images/bg_pattern.png')",
                  backgroundRepeat: "repeat",
                  backgroundSize: "220px 220px",
                }}
                className="absolute inset-0 opacity-[0.14]"
              />

              {/* Ambient Royal Blue Tech Glow Mesh */}
              <div className="absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#246BFD]/16 blur-[120px]" />
            </motion.div>

            {/* Center Loading Content (Brand Logo & Horizontal Progress Divider Bar) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={
                isParting
                  ? { opacity: 0, scale: 1.06, y: -10 }
                  : { opacity: 1, scale: 1, y: 0 }
              }
              transition={{ duration: 0.34, ease: "easeOut" }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6"
            >
              {/* Brand Logo with Ambient Cyan Glow Halo */}
              <div className="relative flex items-center justify-center">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -m-6 rounded-full bg-[#00D4FF]/22 blur-[36px]"
                />
                <Image
                  src="/images/ABTEL-CLOUD-SERVICES-logo-1.png"
                  alt="Abtel Cloud Services"
                  width={380}
                  height={100}
                  priority
                  className="relative z-10 h-14 w-auto object-contain drop-shadow-[0_8px_32px_rgba(0,212,255,0.45)] sm:h-18"
                />
              </div>

              {/* Horizontal Loading Progress Divider Line (Under Logo) */}
              <div className="mt-6 h-[2.5px] w-44 overflow-hidden rounded-full bg-white/15 sm:w-52">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.42, ease: BRAND_EASE }}
                  className="h-full origin-left rounded-full bg-gradient-to-r from-[#246BFD] via-[#0EA5E9] to-[#00D4FF] shadow-[0_0_12px_#00D4FF]"
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
