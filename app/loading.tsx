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
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-ping rounded-2xl bg-[#E11D48]/20 [animation-duration:2.5s]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 animate-spin rounded-2xl border-2 border-transparent border-t-[#E11D48] border-r-[#FB7185] [animation-duration:0.9s]"
          />

          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_-6px_rgba(225,29,72,0.45)] ring-1 ring-inset ring-slate-200">
            <Image
              src="/images/acs-fav-icon.png"
              alt="Abtel Cloud Services"
              width={48}
              height={48}
              priority
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Shimmer Progress Track */}
        <div
          aria-hidden="true"
          className="mt-6 h-1 w-32 overflow-hidden rounded-full bg-slate-100"
        >
          <div className="h-full w-full animate-pulse rounded-full bg-gradient-to-r from-slate-300 via-[#E11D48] to-slate-300" />
        </div>
      </div>
    </div>
  );
}