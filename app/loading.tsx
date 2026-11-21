import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center py-24">
      <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
        <Loader2 className="h-5 w-5 animate-spin text-[#3D96CE]" aria-hidden="true" />
        <span className="font-semibold text-[#101B3F]">Loading...</span>
      </div>
    </div>
  );
}
