import { Plus } from "lucide-react";
import StatusTag from "@/features/landing/components/status-tag";
import type { Dictionary } from "@/features/landing/types/dictionary";
import { cn } from "@/utils/cn";

interface KitSkillPlaceholderCardProps {
  placeholder: Dictionary["kitHome"]["skills"]["placeholder"];
  soonLabel: string;
  /** Màn hẹp xếp dọc: nhiều ô trống giống hệt nhau chồng lên nhau là thừa, chỉ giữ ô đầu */
  isHiddenOnMobile?: boolean;
}

/** Ô trống cho skill chưa vào bộ: không nêu tên, không hứa ngày, chỉ báo là đang làm. */
export default function KitSkillPlaceholderCard({
  placeholder,
  soonLabel,
  isHiddenOnMobile = false,
}: KitSkillPlaceholderCardProps) {
  return (
    <li className={cn("flex min-w-0 flex-col bg-background p-6 sm:p-8", isHiddenOnMobile && "hidden md:flex")}>
      <div className="reveal flex flex-1 flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border-strong px-6 py-12 text-center">
        <span className="grid size-10 place-items-center rounded-xl border border-dashed border-border-strong text-faint">
          <Plus className="size-5" aria-hidden />
        </span>
        <div>
          <h3 className="font-medium text-muted">{placeholder.title}</h3>
          <p className="mt-1 max-w-56 text-sm text-pretty text-muted">{placeholder.description}</p>
        </div>
        <StatusTag status="soon" label={soonLabel} />
      </div>
    </li>
  );
}
