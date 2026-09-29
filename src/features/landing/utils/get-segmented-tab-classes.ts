import { cn } from "@/utils/cn";

export function getSegmentedTabClasses(isSelected: boolean) {
  return cn(
    "h-8 shrink-0 gap-1.5 rounded-lg px-3 py-0 whitespace-nowrap",
    "transition-[color,background-color,box-shadow] duration-150",
    "focus-visible:ring-offset-0",
    isSelected && "bg-surface text-foreground shadow-segment-thumb hover:bg-surface",
    !isSelected && "text-muted hover:bg-transparent hover:text-foreground",
  );
}
