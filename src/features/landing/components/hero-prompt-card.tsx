import { MessageSquareText } from "lucide-react";

interface HeroPromptCardProps {
  label: string;
  text: string;
}

/** Card nổi cạnh ảnh hero: câu đề đã sinh ra màn hình đó. */
export default function HeroPromptCard({ label, text }: HeroPromptCardProps) {
  return (
    <div className="w-72 rounded-2xl border border-border bg-surface p-4 text-left shadow-float-lg">
      <p className="flex items-center gap-2 text-xs font-medium text-accent">
        <MessageSquareText className="size-4" aria-hidden />
        {label}
      </p>
      <p className="mt-2 text-sm text-pretty text-foreground">{text}</p>
    </div>
  );
}
