"use client"

import * as React from "react"
import gsap from "gsap"
import { ArrowRight, BarChart3, Users, ShieldCheck } from "lucide-react"
import { cn } from "@/utils"

export type ConsultantHeroProps = {
  eyebrow?: string
  title?: string
  description?: string
  primaryLabel?: string
  secondaryLabel?: string
  href?: string
  className?: string
}

const REDUCED =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

const stats = [
  { value: "12+", label: "Years experience", icon: BarChart3 },
  { value: "500+", label: "Clients served", icon: Users },
  { value: "98%", label: "Retention rate", icon: ShieldCheck },
]

export default function ConsultantHero({
  eyebrow = "Strategic Consulting",
  title = "Grow your business with clarity and confidence.",
  description = "We help founders and teams navigate complex decisions, streamline operations, and scale with purpose. From strategy to execution, we're your partner in growth.",
  primaryLabel = "Start a project",
  secondaryLabel = "View our work",
  href = "/contact",
  className,
}: ConsultantHeroProps) {
  const eyebrowRef = React.useRef<HTMLParagraphElement>(null)
  const titleRef = React.useRef<HTMLHeadingElement>(null)
  const descRef = React.useRef<HTMLParagraphElement>(null)
  const btnRef = React.useRef<HTMLDivElement>(null)
  const statsRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (REDUCED) return
    const tl = gsap.timeline()
    tl.from(eyebrowRef.current, { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" })
      .from(titleRef.current, { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
      .from(descRef.current, { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .from(btnRef.current, { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .from(statsRef.current, { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
  }, [])

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-white text-slate-900 py-24 lg:py-32",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-50/40 rounded-full blur-[120px] opacity-0" style={{ animation: "pulse 8s infinite" }} />
        <div className="absolute top-20 left-10 w-20 h-20 bg-rose-200/60 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-slate-100/60 rounded-full blur-xl" />
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-amber-100/60 rounded-full blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center lg:text-left max-w-4xl lg:max-w-none mx-auto lg:mx-0">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <p ref={eyebrowRef} className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              {eyebrow}
            </p>
          </div>
          <h1 ref={titleRef} className="text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            {title}
          </h1>
          <p ref={descRef} className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mb-12 mx-auto lg:mx-0">
            {description}
          </p>
          <div ref={btnRef} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href={href}
              className="rounded-lg bg-[#E11D48] text-white font-semibold text-sm px-6 py-3 shadow-sm hover:bg-[#BE123C] hover:-translate-y-1 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
            >
              {primaryLabel}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#work"
              className="rounded-lg border border-slate-200 bg-white text-slate-800 font-semibold text-sm px-6 py-3 shadow-sm hover:bg-slate-50 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
            >
              {secondaryLabel}
            </a>
          </div>
          <div ref={statsRef} className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200/50">
            {stats.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.label} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-rose-500" />
                    <span className="text-2xl font-bold">{s.value}</span>
                  </div>
                  <span className="text-sm text-slate-500">{s.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
