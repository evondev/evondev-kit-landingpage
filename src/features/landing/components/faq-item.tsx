import { Plus } from "lucide-react";
import type { FaqItem as FaqItemData } from "@/features/landing/types/dictionary";

interface FaqItemProps {
  item: FaqItemData;
}

/** Một câu hỏi thu gọn được bằng <details> gốc: không cần JavaScript, Ctrl+F vẫn tìm thấy. */
export default function FaqItem({ item }: FaqItemProps) {
  return (
    <details className="group border-b border-border">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg py-5 text-lg font-medium text-foreground outline-hidden focus-visible:ring-2 focus-visible:ring-heat/60 [&::-webkit-details-marker]:hidden">
        {item.question}
        <Plus className="size-5 shrink-0 text-muted transition-transform group-open:rotate-45" aria-hidden />
      </summary>
      <p className="pr-9 pb-6 text-pretty text-muted">{item.answer}</p>
    </details>
  );
}
