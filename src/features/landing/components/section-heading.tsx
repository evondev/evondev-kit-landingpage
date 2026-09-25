import EyebrowPill from "@/features/landing/components/eyebrow-pill";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
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
    <div className={cn("max-w-2xl", isCentered && "mx-auto text-center", className)}>
      <EyebrowPill label={eyebrow} />
      <h2
        id={id}
        className="mt-4 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl sm:leading-[1.15]"
      >
        {title}
      </h2>
      {description ? <p className="mt-5 text-base text-pretty sm:text-lg">{description}</p> : null}
    </div>
  );
}
