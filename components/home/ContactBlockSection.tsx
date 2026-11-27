"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { COMPANY_DATA } from "@/data/company";

const inputBase =
  "w-full rounded-xl border bg-slate-50/80 px-4 py-3.5 text-sm text-[#0B0E14] placeholder-slate-400 shadow-xs transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30";

export function ContactBlockSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
    website_hp: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (fieldErrors[e.target.name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[e.target.name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFieldErrors({});
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setResponseMsg(data.message || "Thank you! We will be in touch shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Web Development",
          message: "",
          website_hp: "",
        });
      } else {
        setStatus("error");
        setResponseMsg(data.message || "Please correct the highlighted fields.");
        if (data.errors) {
          const errs: Record<string, string> = {};
          for (const key in data.errors) {
            if (data.errors[key]?.[0]) {
              errs[key] = data.errors[key][0];
            }
          }
          setFieldErrors(errs);
        }
      }
    } catch {
      setStatus("error");
      setResponseMsg("Network error. Please try again or email us directly at sales@abtelcloud.com");
    }
  };

  const fieldError = (name: string) =>
    fieldErrors[name] ? "border-rose-500 bg-rose-50/50" : "border-slate-200";

  return (
    <section
      id="contact-consultation"
      aria-label="Let's Talk Software"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9] pt-10 pb-20 sm:pt-12 sm:pb-26"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 h-[500px] w-[500px] rounded-full bg-[#E11D48]/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full bg-slate-200/40 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.03),transparent_65%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start lg:col-span-5">
            <Reveal variant="fade-down">
              <span className="eyebrow-premium">Let&apos;s Connect</span>
            </Reveal>

            <Reveal variant="fade-left" delay={0.1} className="mt-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0B0E14] sm:text-4xl lg:text-[44px] leading-[1.16]">
                Have A Project In Mind?{" "}
                <span
                  className="relative inline-block"
                  style={{ fontFamily: "var(--font-serif,'Georgia',serif)", fontStyle: "italic", fontWeight: 700, background: "linear-gradient(135deg,#E11D48,#fb7185)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                >
                  Let&apos;s Build Together
                </span>
                .
              </h2>
            </Reveal>

            <Reveal variant="fade-left" delay={0.16} className="mt-4">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Whether you need a modern web application, native mobile app, or enterprise cloud integration, our Texas engineering team is ready to deliver.
              </p>
            </Reveal>

            <Reveal variant="fade-left" delay={0.22} className="mt-8 w-full">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-slate-400 hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] hover:-translate-y-0.5">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B0E14] text-[#E11D48] shadow-[0_4px_14px_rgba(0,0,0,0.2)]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B0E14]">United States Headquarters</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{COMPANY_DATA.location}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-6 flex flex-col gap-4 w-full">
              <Reveal variant="fade-left" delay={0.28}>
                <a
                  href={`tel:${COMPANY_DATA.phone.replace(/\s+/g, "")}`}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs transition-all duration-300 hover:border-[#E11D48]/50 hover:bg-rose-50/20 hover:shadow-[0_6px_22px_rgba(225,29,72,0.12)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E11D48] text-white shadow-[0_4px_14px_rgba(225,29,72,0.3)] transition-transform duration-300 group-hover:scale-105">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Technical Sales &amp; Inquiries
                    </span>
                    <p className="text-sm sm:text-base font-bold text-[#0B0E14] group-hover:text-[#E11D48] transition-colors">
                      {COMPANY_DATA.phone}
                    </p>
                  </div>
                </a>
              </Reveal>

              <Reveal variant="fade-left" delay={0.34}>
                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs transition-all duration-300 hover:border-slate-400 hover:bg-slate-50 hover:shadow-[0_6px_22px_rgba(0,0,0,0.1)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B0E14] text-[#E11D48] shadow-[0_4px_14px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:scale-105">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Direct Email Response
                    </span>
                    <p className="text-sm sm:text-base font-bold text-[#0B0E14] group-hover:text-black transition-colors">
                      {COMPANY_DATA.email}
                    </p>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <Reveal variant="fade-right" duration={0.75}>
              <div className="relative rounded-[28px] border border-slate-200/90 bg-white/95 p-6 sm:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(15,23,42,0.07),0_0_1px_1px_rgba(255,255,255,0.9)_inset]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-8 -right-8 h-36 w-36 rounded-full bg-[#E11D48]/20 blur-3xl"
                />

                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B0E14]">
                    Tell Us About{" "}
                    <span
                      className="relative inline-block"
                      style={{ fontFamily: "var(--font-serif,'Georgia',serif)", fontStyle: "italic", fontWeight: 700, background: "linear-gradient(135deg,#E11D48,#fb7185)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                    >
                      Your Project
                    </span>
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600">
                    Fill out the form and we&apos;ll be in touch ASAP.
                  </p>
                </div>

                {status === "success" ? (
                  <div className="rounded-2xl border border-[#E11D48]/30 bg-rose-50/70 p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E11D48] text-white mb-4 shadow-[0_0_20px_rgba(225,29,72,0.35)]">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h4 className="text-lg font-bold text-[#0B0E14]">Inquiry Received</h4>
                    <p className="mt-2 text-sm text-slate-600">{responseMsg}</p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-[#0B0E14] px-6 text-xs font-bold text-white shadow-sm hover:bg-slate-800 transition-colors"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        name="website_hp"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website_hp}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Name"
                          className={`${inputBase} ${fieldError("name")}`}
                        />
                        {fieldErrors.name && <p className="mt-1.5 text-xs text-rose-500">{fieldErrors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Phone
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone"
                          className={`${inputBase} ${fieldError("phone")}`}
                        />
                        {fieldErrors.phone && <p className="mt-1.5 text-xs text-rose-500">{fieldErrors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                          className={`${inputBase} ${fieldError("email")}`}
                        />
                        {fieldErrors.email && <p className="mt-1.5 text-xs text-rose-500">{fieldErrors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Select Service
                        </label>
                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`${inputBase} cursor-pointer ${fieldError("service")}`}
                        >
                          <option value="Select Service" disabled>
                            Select Service
                          </option>
                          <option value="Web Development">Web Development</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="E-commerce">E-commerce</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="API Integration">API Integration</option>
                        </select>
                        {fieldErrors.service && <p className="mt-1.5 text-xs text-rose-500">{fieldErrors.service}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className={`${inputBase} ${fieldError("message")}`}
                      />
                      {fieldErrors.message && <p className="mt-1.5 text-xs text-rose-500">{fieldErrors.message}</p>}
                    </div>

                    {status === "error" && responseMsg && (
                      <div className="rounded-xl border border-rose-300 bg-rose-50 p-3 text-xs text-rose-700 font-medium">
                        {responseMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-sheen group relative flex h-[54px] w-full items-center justify-center overflow-hidden rounded-lg bg-[#E11D48] text-base font-semibold text-white shadow-sm transition-all duration-300 hover:scale-[1.01] hover:bg-[#BE123C] hover:shadow-sm disabled:opacity-70 disabled:pointer-events-none active:scale-95 ring-1 ring-inset ring-white/20"
                    >
                      <span className="relative z-10 flex items-center gap-2.5">
                        {status === "loading" ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send</span>
                            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}