import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface SiteAnnouncementProps {
  dictionary: Dictionary["announcement"];
}

/** Dải cam trên cùng báo tính năng mới, dẫn xuống section quy trình. */
export default function SiteAnnouncement({ dictionary }: SiteAnnouncementProps) {
  return (
    <div className="px-4 pt-3 sm:px-6">
      <p className="mx-auto max-w-[1112px] rounded-xl bg-heat px-4 py-2.5 text-center text-sm text-pretty text-white">
        {dictionary.text}{" "}
        <Link
          href="#designer"
          className="inline-flex items-center gap-1 font-medium whitespace-nowrap underline underline-offset-4 outline-hidden focus-visible:rounded focus-visible:ring-2 focus-visible:ring-white"
        >
          {dictionary.linkLabel}
          <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      </p>
    </div>
  );
}
