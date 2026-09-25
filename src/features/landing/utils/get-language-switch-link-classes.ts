import { cn } from "@/utils/cn";

export function getLanguageSwitchLinkClasses(isCurrent: boolean) {
  return cn(
    "grid h-7 place-items-center rounded-lg px-2.5 text-xs font-medium transition-colors",
    "outline-hidden focus-visible:ring-2 focus-visible:ring-foreground/50",
    isCurrent && "bg-surface text-foreground shadow-segment-thumb",
    !isCurrent && "text-foreground/60 hover:text-foreground",
  );
}
