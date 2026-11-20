import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center py-24">
      <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
        <Loader2 className="h-5 w-5 animate-spin text-primary" aria-hidden="true" />
        <span>Loading...</span>
      </div>
    </div>
  );
}
