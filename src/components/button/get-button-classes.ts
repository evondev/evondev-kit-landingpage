import type { ButtonVariant } from "@/components/button/button-variant";
import { cn } from "@/utils/cn";

function getVariantClasses(variant: ButtonVariant) {
  return cn(
    variant === "outline" &&
      "border border-border-strong bg-surface text-foreground hover:bg-surface-hover",
    variant === "primary" && "bg-primary text-primary-foreground shadow-button hover:bg-primary-hover",
    variant === "secondary" && "bg-secondary text-foreground hover:bg-secondary-hover",
    variant === "ghost" &&
      "bg-transparent text-muted hover:bg-foreground/5 hover:text-foreground",
  );
}

/** Class chung cho Button và ButtonLink, để link trông y như nút. */
export function getButtonClasses(variant: ButtonVariant, className?: string) {
  return cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl",
    "px-4 py-2.5 text-sm font-medium transition-colors",
    "max-w-full text-center leading-tight [overflow-wrap:anywhere]",
    "outline-hidden focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
    "disabled:cursor-not-allowed disabled:not-aria-busy:opacity-50",
    getVariantClasses(variant),
    className,
  );
}
