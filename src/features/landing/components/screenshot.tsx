import Image from "next/image";
import { ImageOff } from "lucide-react";
import type { ShowcaseImage } from "@/features/landing/types/showcase-image";
import { cn } from "@/utils/cn";

interface ScreenshotProps {
  image: ShowcaseImage | null;
  alt: string;
  placeholderLabel: string;
  sizes: string;
  isPriority?: boolean;
  className?: string;
}

/** Ảnh chụp màn, hoặc khung giữ chỗ cùng tỉ lệ 16:10 khi chưa chụp. */
export default function Screenshot({
  image,
  alt,
  placeholderLabel,
  sizes,
  isPriority = false,
  className,
}: ScreenshotProps) {
  if (!image) {
    return (
      <div
        className={cn(
          "flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 bg-sunken text-sm text-muted",
          className,
        )}
      >
        <ImageOff className="size-5" aria-hidden />
        {placeholderLabel}
      </div>
    );
  }

  return (
    <Image
      src={image.src}
      alt={alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      priority={isPriority}
      className={cn("h-auto w-full", className)}
    />
  );
}
