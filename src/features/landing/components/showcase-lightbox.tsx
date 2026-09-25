"use client";

import { X } from "lucide-react";
import { useEffect, useRef, type MouseEvent } from "react";
import { Button } from "@/components/button";
import Screenshot from "@/features/landing/components/screenshot";
import type { Dictionary } from "@/features/landing/types/dictionary";
import type { ShowcaseEntry } from "@/features/landing/types/showcase-entry";
import type { ShowcaseTheme } from "@/features/landing/types/showcase-theme";
import { pickShowcaseImage } from "@/features/landing/utils/pick-showcase-image";

interface ShowcaseLightboxProps {
  entry: ShowcaseEntry | null;
  theme: ShowcaseTheme;
  dictionary: Dictionary["showcase"];
  onClose: () => void;
}

/** Xem ảnh lớn bằng <dialog> gốc: Esc đóng, focus nằm trong hộp, trả focus khi đóng. */
export default function ShowcaseLightbox({ entry, theme, dictionary, onClose }: ShowcaseLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = entry !== null;

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    // Bấm vào chính <dialog> (phần nền mờ bên ngoài khung) thì đóng.
    if (event.target === event.currentTarget) onClose();
  }

  const image = entry ? pickShowcaseImage(entry.images, theme) : null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="showcase-lightbox-title"
      onClose={onClose}
      onClick={handleBackdropClick}
      className="m-auto w-[calc(100%-2rem)] max-w-6xl rounded-2xl bg-surface p-0 text-foreground shadow-2xl backdrop:bg-[#091135]/50 backdrop:backdrop-blur-sm"
    >
      {entry ? (
        <div className="flex max-h-[calc(100dvh-2rem)] flex-col">
          <div className="flex items-start gap-3 border-b border-border px-5 py-4">
            <div className="min-w-0 flex-1">
              <h2 id="showcase-lightbox-title" className="font-semibold">
                {entry.title}
              </h2>
              <p className="mt-1 text-sm text-pretty">
                <span className="font-medium text-foreground">{dictionary.promptLabel}: </span>“{entry.prompt}”
              </p>
            </div>
            <Button variant="ghost" onClick={onClose} aria-label={dictionary.closeLabel} className="-mr-2 size-9 p-0">
              <X className="size-5" aria-hidden />
            </Button>
          </div>
          <div className="overflow-y-auto bg-sunken p-2 sm:p-4">
            <Screenshot
              image={image}
              alt={entry.title}
              placeholderLabel={dictionary.placeholder}
              sizes="(min-width: 1152px) 1120px, 100vw"
              className="rounded-xl"
            />
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
