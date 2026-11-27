import Image from "next/image";

export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading page content"
      className="relative flex min-h-[60vh] w-full flex-1 flex-col items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Soft Ambient Brand Atmospheric Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-[#E11D48]/10 blur-3xl"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Favicon tile with rotating brand ring */}
        <div className="relative flex h-[88px] w-[88px] items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-ping rounded-2xl bg-[#E11D48]/20 [animation-duration:2.5s]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 animate-spin rounded-2xl border-2 border-transparent border-t-[#E11D48] border-r-[#FB7185] [animation-duration:0.9s]"
          />

          <div className="relative flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_-6px_rgba(225,29,72,0.45)] ring-1 ring-inset ring-slate-200">
            <Image
              src="/images/acs-fav-icon.png"
              alt="Abtel Cloud Services"
              width={72}
              height={72}
              priority
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Divider with sliding accent */}
        <div
          aria-hidden="true"
          className="relative mt-7 h-[2px] w-48 overflow-hidden rounded-full bg-slate-200/90"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E11D48]/40 to-transparent" />
          <div className="animate-loading-slide h-full w-1/3 rounded-full bg-gradient-to-r from-[#E11D48] to-[#FB7185]" />
        </div>

        {/* Brand wordmark */}
        <p className="mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-400">
          Abtel Cloud Services
        </p>
      </div>
    </div>
  );
}