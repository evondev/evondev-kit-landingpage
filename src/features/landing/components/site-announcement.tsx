import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { AnnouncementContent } from "@/features/landing/types/dictionary";

interface SiteAnnouncementProps {
  content: AnnouncementContent;
  href: string;
}

/** Dải cam trên cùng báo tính năng mới. Bấm vào chỗ nào trên dải cũng tới tính năng đó. */
export default function SiteAnnouncement({ content, href }: SiteAnnouncementProps) {
  return (
    <div className="px-4 py-3 sm:px-6">
      <Link
        href={href}
        className="group mx-auto flex max-w-[1112px] flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-xl bg-heat px-4 py-2.5 text-center text-sm text-pretty text-white transition-colors outline-hidden hover:bg-heat-hover focus-visible:ring-2 focus-visible:ring-heat/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span className="rounded-md bg-white px-1.5 py-0.5 font-mono text-[11px] font-medium tracking-wide text-heat-ink-fixed uppercase">
          {content.tag}
        </span>
        <span>{content.text}</span>
        <span className="inline-flex items-center gap-1 font-medium whitespace-nowrap underline underline-offset-4">
          {content.linkLabel}
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </Link>
    </div>
  );
}
