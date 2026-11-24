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
        className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-[var(--brand-lime)]/10 blur-3xl"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Minimalist Glowing Tech Ring */}
        <div className="relative flex h-14 w-14 items-center justify-center">
          {/* Outer Pulsing Glow Ring */}
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-ping rounded-full bg-[var(--brand-lime)]/20 [animation-duration:2.5s]"
          />

          {/* Smooth Rotating Gradient Spinner Ring */}
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-black border-r-[var(--brand-lime)] [animation-duration:0.9s]"
          />

          {/* Core Pulsing Lime Tech Orb */}
          <div className="h-4 w-4 rounded-full bg-[var(--brand-lime)] shadow-[0_0_14px_rgba(156, 238, 105,0.85)] animate-pulse" />
        </div>

        {/* Shimmer Progress Track */}
        <div
          aria-hidden="true"
          className="mt-6 h-1 w-32 overflow-hidden rounded-full bg-slate-100"
        >
          <div className="h-full w-full animate-pulse rounded-full bg-gradient-to-r from-black via-[var(--brand-lime)] to-black" />
        </div>
      </div>
    </div>
  );
}
