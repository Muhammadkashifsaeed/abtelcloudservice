"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { CurvedUnderline } from "@/components/ui/CurvedUnderline";
import { SHOW_TEAM, TEAM_MEMBERS } from "@/data/team";

export function TeamSection() {
  // If SHOW_TEAM is false (default per requirement), do not render the section
  if (!SHOW_TEAM) {
    return null;
  }

  return (
    <section
      aria-label="Our Team of Experts"
      className="relative w-full section-light bg-[var(--bg-light)] py-20 sm:py-24 lg:py-28 text-[var(--text-dark)] overflow-hidden"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <Reveal variant="fade-down">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/20 bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)] shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[var(--brand-royal)]" />
              <span>Our Team</span>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={0.1} className="mt-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-dark)] sm:text-4xl lg:text-5xl leading-[1.18]">
              Meet Our Team of{" "}
              <span className="relative inline-block text-[var(--brand-lime)]">
                Engineering Experts
                <CurvedUnderline color="#2563EB" />
              </span>.
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={0.18} className="mt-4">
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
              Dedicated cloud architects, senior full-stack developers, and UI/UX designers committed to project excellence.
            </p>
          </Reveal>
        </div>

        {/* 4 Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <Reveal
              key={member.id}
              variant="fade-up"
              delay={0.08 * (idx + 1)}
              className="h-full"
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[var(--border-light)] bg-white shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(11,31,58,0.12)]">
                {/* Photo container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social links appearing on hover */}
                  <div className="absolute bottom-4 inset-x-4 flex items-center justify-center gap-3 translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-10">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-white shadow-md transition-colors hover:bg-[var(--brand-lime)] hover:text-white"
                      >
                        <FaLinkedinIn className="h-4 w-4" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} GitHub`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-white shadow-md transition-colors hover:bg-[var(--brand-lime)] hover:text-white"
                      >
                        <FaGithub className="h-4 w-4" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} Twitter`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-white shadow-md transition-colors hover:bg-[var(--brand-lime)] hover:text-white"
                      >
                        <FaTwitter className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--primary)]">
                    {member.department}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-[var(--text-dark)] group-hover:text-[var(--brand-royal)] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--text-muted)]">
                    {member.role}
                  </p>
                  <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
