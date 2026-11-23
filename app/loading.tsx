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
        className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-gradient-to-tr from-[#3D96CE]/15 via-[#205696]/10 to-transparent blur-3xl"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Minimalist Glowing Tech Ring (No Logo) */}
        <div className="relative flex h-14 w-14 items-center justify-center">
          {/* Outer Pulsing Glow Ring */}
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-ping rounded-full bg-[#3D96CE]/20 [animation-duration:2.5s]"
          />

          {/* Smooth Rotating Gradient Spinner Ring */}
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#3D96CE] border-r-[#22C7F2] [animation-duration:0.9s]"
          />

          {/* Core Pulsing Cyan Tech Orb */}
          <div className="h-4 w-4 rounded-full bg-gradient-to-tr from-[#0284C7] to-[#22C7F2] shadow-[0_0_14px_rgba(34,199,242,0.85)] animate-pulse" />
        </div>

        {/* Shimmer Progress Track */}
        <div
          aria-hidden="true"
          className="mt-6 h-1 w-32 overflow-hidden rounded-full bg-slate-100"
        >
          <div className="h-full w-full animate-pulse rounded-full bg-gradient-to-r from-[#205696] via-[#3D96CE] to-[#22C7F2]" />
        </div>
      </div>
    </div>
  );
}
