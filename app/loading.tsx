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
        className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-gradient-to-tr from-[#3D96CE]/15 via-[#205696]/10 to-transparent blur-3xl"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Animated Brand Emblem Container */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          {/* Outer Pulsing Glow Ring */}
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-ping rounded-full bg-[#3D96CE]/20 [animation-duration:2.5s]"
          />

          {/* Smooth Rotating Gradient Spinner Ring */}
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#3D96CE] border-r-[#205696] [animation-duration:1.2s]"
          />

          {/* Inner Glowing Badge with Logo Icon */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-slate-200/80 bg-white/95 shadow-[0_8px_24px_rgba(61,150,206,0.2)] backdrop-blur-md">
            <Image
              src="/images/ABTEL-CLOUD-SERVICES-logo-1.png"
              alt="Abtel Cloud Services"
              width={48}
              height={36}
              priority
              className="h-7 w-auto object-contain"
            />
          </div>
        </div>

        {/* Loading Text Badge */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3D96CE]/30 bg-[#3D96CE]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#205696]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#3D96CE]" />
            <span>Loading Content</span>
          </div>
          <p className="text-xs text-slate-500">
            Fetching resources from cloud network...
          </p>
        </div>

        {/* Shimmer Progress Track */}
        <div
          aria-hidden="true"
          className="mt-4 h-1.5 w-40 overflow-hidden rounded-full bg-slate-100"
        >
          <div className="h-full w-full animate-pulse rounded-full bg-gradient-to-r from-[#205696] via-[#3D96CE] to-[#22C7F2]" />
        </div>
      </div>
    </div>
  );
}
