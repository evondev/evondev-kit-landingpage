import AccentTitle from "@/features/landing/components/accent-title";
import EyebrowTag from "@/features/landing/components/eyebrow-tag";
import type { SplitTitle } from "@/features/landing/types/dictionary";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: SplitTitle;
  description?: string;
  isCentered?: boolean;
  className?: string;
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  isCentered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex max-w-2xl flex-col items-start", isCentered && "mx-auto items-center text-center", className)}>
      <EyebrowTag label={eyebrow} />
      <h2
        id={id}
        className="mt-6 text-3xl font-medium tracking-tight text-balance text-foreground sm:text-5xl sm:leading-[1.1]"
      >
        <AccentTitle title={title} />
      </h2>
      {description ? <p className="mt-5 text-base text-pretty text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}
