import { cn } from "@/utils/cn";

export function getStyleChipClasses(isDefault: boolean) {
  return cn(
    "inline-flex items-center gap-2 rounded-full border bg-surface px-3.5 py-1.5 text-sm",
    isDefault && "border-heat-border text-foreground",
    !isDefault && "border-border-strong text-muted",
  );
}
