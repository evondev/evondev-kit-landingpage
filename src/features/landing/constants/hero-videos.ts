import type { HeroVideoSource } from "@/features/landing/types/hero-video-source";
import type { Locale } from "@/features/landing/types/locale";

/** Video trước / sau ở hero theo ngôn ngữ trang, render bằng `npm run render:video -- before-after-demo`, nằm trong `public/video/`. */
export const heroVideos: Record<Locale, HeroVideoSource> = {
  vi: {
    webm: "/video/before-after-demo-vi.webm",
    mp4: "/video/before-after-demo-vi.mp4",
    poster: "/video/before-after-demo-vi-poster.webp",
  },
  en: {
    webm: "/video/before-after-demo-en.webm",
    mp4: "/video/before-after-demo-en.mp4",
    poster: "/video/before-after-demo-en-poster.webp",
  },
};
