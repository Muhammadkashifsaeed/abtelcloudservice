"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Ensures that the <link rel="canonical"> tag dynamically matches the active browser URL
 * (self-referencing canonical) across localhost, Vercel deployments (*.vercel.app),
 * and custom domains.
 */
export function CanonicalSync() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const currentOrigin = window.location.origin;
      const currentPath = pathname || window.location.pathname || "";
      const cleanPath = currentPath === "/" ? "" : currentPath.replace(/\/$/, "");
      const expectedCanonical = `${currentOrigin}${cleanPath}`;

      let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        canonicalEl.rel = "canonical";
        document.head.appendChild(canonicalEl);
      }

      if (canonicalEl.href !== expectedCanonical) {
        canonicalEl.href = expectedCanonical;
      }
    } catch {
      // Graceful fallback for restricted environments
    }
  }, [pathname]);

  return null;
}
