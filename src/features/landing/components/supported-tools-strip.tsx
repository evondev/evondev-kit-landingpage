import SectionFrame from "@/features/landing/components/section-frame";
import SupportedToolList from "@/features/landing/components/supported-tool-list";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface SupportedToolsStripProps {
  dictionary: Dictionary["supportedTools"];
}

/** Dải logo công cụ chạy ngang dưới hero. Rê chuột vào thì dừng, giảm chuyển động thì đứng yên và xuống dòng. */
export default function SupportedToolsStrip({ dictionary }: SupportedToolsStripProps) {
  return (
    <SectionFrame ariaLabel={dictionary.label}>
      {/* Màn hẹp nhãn nằm trên dải logo, không cần đường kẻ ngăn; từ lg mới chia hai ô bằng đường tóc. */}
      <div className="grid grid-cols-1 bg-border lg:grid-cols-[auto_1fr] lg:gap-px">
        <p className="flex items-center bg-background px-5 pt-6 font-mono text-xs tracking-wider text-muted uppercase sm:px-10 lg:py-8">
          {dictionary.label}
        </p>
        {/* Mask đặt ở lớp trong: đặt ở ô có nền thì hai mép trong suốt, lộ màu đường kẻ phía sau. */}
        <div className="overflow-hidden bg-background py-5 lg:py-8">
          <div className="mask-fade-x motion-reduce:mask-none motion-reduce:px-5 motion-reduce:sm:px-10">
            <div className="flex w-max motion-safe:animate-marquee motion-safe:hover:[animation-play-state:paused] motion-reduce:w-full">
              <SupportedToolList />
              <SupportedToolList isDuplicate />
            </div>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
