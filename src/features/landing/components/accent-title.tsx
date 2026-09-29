import type { SplitTitle } from "@/features/landing/types/dictionary";

interface AccentTitleProps {
  title: SplitTitle;
}

/** Phần đầu màu chữ, phần sau màu cam, như tiêu đề lớn của trang. */
export default function AccentTitle({ title }: AccentTitleProps) {
  return (
    <>
      {title.lead} <span className="text-heat">{title.accent}</span>
    </>
  );
}
