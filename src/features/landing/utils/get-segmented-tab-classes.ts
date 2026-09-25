import { cn } from "@/utils/cn";

export function getSegmentedTabClasses(isSelected: boolean) {
  return cn(
    "h-8 shrink-0 rounded-lg px-3 py-0 whitespace-nowrap",
    "transition-[color,background-color,box-shadow] duration-150",
    isSelected && "bg-surface text-foreground shadow-segment-thumb hover:bg-surface",
    !isSelected && "text-foreground/60 hover:bg-transparent hover:text-foreground",
  );
}
