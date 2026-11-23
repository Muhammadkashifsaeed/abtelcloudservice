"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, MapPin, Navigation } from "lucide-react";

const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;

const GOOGLE_MAPS_LINK =
  "https://www.google.com/maps?cid=1898616709657673264&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF";

const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.1403206744335!2d-98.46533392398438!3d29.42469197524278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf60ad69b116b%3A0x1a593dd68fc43e30!2s415%20N%20New%20Braunfels%20Ave%2C%20San%20Antonio%2C%20TX%2078202!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus";

export function ContactMapSection() {
  return (
    <section
      aria-label="Google Maps Location"
      className="relative w-full overflow-x-clip bg-[var(--bg-light)] pt-12 pb-0"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, ease: PREMIUM_EASE }}
            className="max-w-2xl text-left"
          >
            <div className="mb-2">
              <span className="inline-block rounded-full bg-[var(--primary-light)] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)] border border-[var(--primary)]/20">
                OUR HEADQUARTERS
              </span>
            </div>

            <h2 className="mt-3.5 text-2xl font-extrabold leading-[1.2] tracking-tight text-[var(--text-dark)] sm:text-3xl lg:text-[38px]">
              Find Us in San-Antonio, Texas
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
              Visit our headquarters or navigate directly via Google Maps for technical reviews, client workshops, and consultations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.08, ease: PREMIUM_EASE }}
          >
            <Link
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sheen inline-flex h-[48px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[var(--brand-royal)] to-[var(--brand-sky)] px-7 text-sm font-bold text-white shadow-[0_4px_16px_rgba(42,103,174,0.3)] transition-all duration-300 hover:shadow-[0_6px_22px_rgba(34,199,242,0.35)] hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-2">
                <Navigation className="h-4 w-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Map Embed Frame */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.75, ease: PREMIUM_EASE }}
        className="relative w-full border-t border-[var(--border-light)] bg-slate-100"
      >
        <div className="relative h-[420px] w-full sm:h-[480px] lg:h-[540px]">
          <iframe
            src={GOOGLE_MAPS_EMBED_SRC}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Abtel Cloud Services Location - San Antonio, Texas"
            className="h-full w-full object-cover"
          />

          {/* Floating Glassmorphism Location Info Badge */}
          <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="pointer-events-auto max-w-sm rounded-[22px] border border-[var(--border-light)] bg-white/95 p-5 text-left card-soft-shadow backdrop-blur-md">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)] text-white shadow-sm">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold tracking-tight text-[var(--text-dark)]">
                    Abtel Cloud Services
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    San-Antonio, Texas 78202, USA
                  </p>
                </div>
              </div>

              <div className="mt-3.5 border-t border-[var(--border-light)] pt-3 flex items-center justify-between text-xs">
                <span className="font-semibold text-[var(--text-dark)]">
                  415 N New Braunfels Ave
                </span>
                <Link
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[var(--primary)] hover:underline flex items-center gap-1"
                >
                  <span>Directions</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
