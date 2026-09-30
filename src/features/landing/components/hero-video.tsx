"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/button";
import { usePrefersReducedMotion } from "@/features/landing/hooks";
import type { HeroVideoSource } from "@/features/landing/types/hero-video-source";

interface HeroVideoProps {
  source: HeroVideoSource;
  label: string;
  playLabel: string;
  pauseLabel: string;
}

/**
 * Video demo 16:9 tự phát, tắt tiếng, lặp lại. Video đã có khung riêng nên không bọc BrowserFrame.
 * Bật "giảm chuyển động" thì chỉ hiện poster, bấm nút mới phát. Luôn có nút dừng vì video dài hơn 5 giây.
 */
export default function HeroVideo({ source, label, playLabel, pauseLabel }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Không để thuộc tính autoPlay trong HTML: server chưa biết người xem có giảm chuyển động không.
  useEffect(() => {
    const video = videoRef.current;

    if (!video || prefersReducedMotion) return;

    video.play().catch(() => setIsPlaying(false));
  }, [prefersReducedMotion]);

  function handleTogglePlay() {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play().catch(() => setIsPlaying(false));
      return;
    }

    video.pause();
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-float">
      <video
        ref={videoRef}
        aria-label={label}
        poster={source.poster}
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="block aspect-video h-auto w-full"
      >
        <source src={source.webm} type="video/webm" />
        <source src={source.mp4} type="video/mp4" />
      </video>

      <Button
        variant="outline"
        aria-label={isPlaying ? pauseLabel : playLabel}
        onClick={handleTogglePlay}
        className="absolute right-3 bottom-3 size-9 rounded-full p-0 shadow-card sm:right-4 sm:bottom-4"
      >
        {isPlaying ? <Pause className="size-4" aria-hidden /> : <Play className="size-4" aria-hidden />}
      </Button>
    </div>
  );
}
