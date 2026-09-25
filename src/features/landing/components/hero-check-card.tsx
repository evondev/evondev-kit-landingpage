import { Check } from "lucide-react";

interface HeroCheckCardProps {
  title: string;
  items: string[];
}

/** Card nổi cạnh ảnh hero: vài dòng trong cổng kiểm cuối. */
export default function HeroCheckCard({ title, items }: HeroCheckCardProps) {
  return (
    <div className="w-60 rounded-2xl border border-border bg-surface p-3 text-left shadow-float-lg">
      <p className="px-1 pb-2 text-sm font-semibold text-foreground">{title}</p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 rounded-lg border border-border px-2.5 py-2 text-sm">
            <span className="grid size-4 shrink-0 place-items-center rounded bg-primary text-primary-foreground">
              <Check className="size-3" strokeWidth={3} aria-hidden />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
