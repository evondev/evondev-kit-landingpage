import { supportedTools } from "@/features/landing/constants/supported-tools";
import { cn } from "@/utils/cn";

interface SupportedToolListProps {
  /** Bản chép thứ hai để dải chạy nối liền: trình đọc màn hình bỏ qua, giảm chuyển động thì ẩn. */
  isDuplicate?: boolean;
}

/** Một lượt logo trong dải "Dùng được với". pr bằng gap để khoảng nối giữa hai bản đều như giữa hai logo. */
export default function SupportedToolList({ isDuplicate = false }: SupportedToolListProps) {
  return (
    <ul
      aria-hidden={isDuplicate || undefined}
      className={cn(
        "flex shrink-0 items-center gap-12 pr-12",
        "motion-reduce:w-full motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:gap-x-8 motion-reduce:gap-y-4 motion-reduce:pr-0",
        isDuplicate && "motion-reduce:hidden",
      )}
    >
      {supportedTools.map((tool) => {
        const Icon = tool.icon;

        return (
          <li
            key={tool.name}
            className="flex items-center gap-2.5 text-base font-medium whitespace-nowrap text-muted transition-colors hover:text-foreground"
          >
            <Icon className="size-5 shrink-0" aria-hidden />
            {tool.name}
          </li>
        );
      })}
    </ul>
  );
}
