"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, MapPin, Navigation } from "lucide-react";

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

const GOOGLE_MAPS_LINK =
  "https://www.google.com/maps?cid=1898616709657673264&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF";

const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.1403206744335!2d-98.46533392398438!3d29.42469197524278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf60ad69b116b%3A0x1a593dd68fc43e30!2s415%20N%20New%20Braunfels%20Ave%2C%20San%20Antonio%2C%20TX%2078202!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus";

export function ContactMapSection() {
  return (
    <section
      aria-label="Google Maps Location"
      className="relative w-full overflow-x-clip bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#FFFFFF] pt-8 sm:pt-12 lg:pt-16 pb-0"
    >
      {/* Background Circuit Pattern */}
      <div
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/bg_pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "210px 210px",
        }}
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
      />

      {/* Header Container (Constrained Width for Clean Typography & Alignments) */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: PREMIUM_EASE }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl text-left">
            <div className="mb-2">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0284C7] sm:text-sm">
                OUR OFFICE LOCATION
              </span>
            </div>

            <h2 className="mt-3.5 text-2xl font-extrabold leading-[1.2] tracking-tight text-[#0F172A] sm:text-3xl lg:text-[38px]">
              Find Us in San-Antonio, Texas
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-[#475569] sm:text-base">
              Visit our headquarters or navigate directly via Google Maps for project consultations, meetings, and technical reviews.
            </p>
          </div>

          {/* "Open in Google Maps" Primary CTA Button */}
          <Link
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cut group/btn relative inline-flex h-[48px] shrink-0 items-center justify-center overflow-hidden bg-[#246BFD] px-7 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(36,107,253,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,212,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover/btn:translate-x-0"
            />
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-[#0B0E2E]">
              <Navigation className="h-4 w-4" aria-hidden="true" />
              <span>Open in Google Maps</span>
              <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* True Full-Width Edge-to-Edge Map Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.85, ease: PREMIUM_EASE }}
        className="group relative w-full border-t border-b border-slate-200/90 bg-slate-100 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
      >
        {/* Top Subtle Glowing Accent Line */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#00D4FF]/80 to-transparent z-10"
        />

        {/* Full-Width Interactive Google Maps Iframe */}
        <div className="relative h-[440px] w-full sm:h-[500px] lg:h-[580px] xl:h-[640px]">
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

          {/* Floating Glassmorphism Location Info Badge aligned with container */}
          <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="pointer-events-auto max-w-sm rounded-2xl border border-white/90 bg-white/95 p-5 text-left shadow-[0_16px_40px_rgba(15,23,42,0.22)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_20px_48px_rgba(0,212,255,0.28)]">
              {/* Subtle top cyan line */}
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent"
              />

              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0C5ADB] to-[#246BFD] text-white shadow-[0_4px_14px_rgba(36,107,253,0.38)]">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold tracking-tight text-[#0F172A]">
                    Abtel Cloud Services
                  </h3>
                  <p className="text-xs font-medium text-slate-500">
                    San-Antonio, Texas 78202, USA
                  </p>
                </div>
              </div>

              <div className="mt-3.5 border-t border-slate-100 pt-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0284C7]">
                  415 N New Braunfels Ave
                </span>
                <Link
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#246BFD] transition-colors duration-200 hover:text-[#0099FF]"
                >
                  <span>Directions</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Subtle Glowing Line */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
