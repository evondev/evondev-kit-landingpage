import { Maximize2 } from "lucide-react";
import { Button } from "@/components/button";
import Screenshot from "@/features/landing/components/screenshot";
import UnprecedentedBadge from "@/features/landing/components/unprecedented-badge";
import type { Dictionary } from "@/features/landing/types/dictionary";
import type { ShowcaseEntry } from "@/features/landing/types/showcase-entry";
import type { ShowcaseTheme } from "@/features/landing/types/showcase-theme";
import { getScreenshotFitClasses } from "@/features/landing/utils/get-screenshot-fit-classes";
import { pickShowcaseImage } from "@/features/landing/utils/pick-showcase-image";

interface ShowcaseCardProps {
  entry: ShowcaseEntry;
  theme: ShowcaseTheme;
  dictionary: Dictionary["showcase"];
  onOpen: () => void;
}

export default function ShowcaseCard({ entry, theme, dictionary, onOpen }: ShowcaseCardProps) {
  const image = pickShowcaseImage(entry.images, theme);

  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-float transition-shadow hover:shadow-float-lg">
      <Button
        variant="ghost"
        onClick={onOpen}
        disabled={!image}
        aria-label={`${dictionary.openImageLabel}: ${entry.title}`}
        className="group relative block rounded-none bg-sunken p-0 hover:bg-sunken focus-visible:ring-inset focus-visible:ring-offset-0 disabled:opacity-100"
      >
        {/* Khung ảnh cố định 16:10 để các ô thẳng hàng dù ảnh cao thấp khác nhau. */}
        <span className="block aspect-[16/10] overflow-hidden">
          <Screenshot
            image={image}
            alt=""
            placeholderLabel={dictionary.placeholder}
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            className={getScreenshotFitClasses(image)}
          />
        </span>
        {image ? (
          <span className="absolute top-3 right-3 grid size-8 place-items-center rounded-lg bg-surface text-muted shadow-float opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 className="size-4" aria-hidden />
          </span>
        ) : null}
      </Button>

      <div className="flex flex-1 flex-col gap-3 border-t border-border p-5">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-semibold text-foreground">{entry.title}</h3>
          {entry.isUnprecedented ? <UnprecedentedBadge label={dictionary.unprecedentedBadge} /> : null}
        </div>
        <p className="text-sm text-pretty">
          <span className="font-medium text-foreground">{dictionary.promptLabel}: </span>
          “{entry.prompt}”
        </p>
      </div>
    </article>
  );
}
