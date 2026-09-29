import type { SplitTitle } from "@/features/landing/types/dictionary";

interface LeadTitleProps {
  title: SplitTitle;
  id?: string;
}

/** Tiêu đề card: câu đậm màu chữ, phần sau xám nối liền, đọc như một đoạn. */
export default function LeadTitle({ title, id }: LeadTitleProps) {
  return (
    <h3 id={id} className="text-xl font-medium tracking-tight text-pretty text-foreground sm:text-2xl sm:leading-snug">
      {title.lead} <span className="text-muted">{title.accent}</span>
    </h3>
  );
}
