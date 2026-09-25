import { readFile } from "node:fs/promises";
import { join } from "node:path";

const fontDirectory = join(process.cwd(), "node_modules/@fontsource/inter/files");

interface OgFontFile {
  subset: "latin" | "vietnamese";
  weight: 400 | 600;
}

/** Satori không đọc woff2, và bộ latin thiếu chữ có dấu, nên nạp cả latin lẫn vietnamese bản woff. */
const ogFontFiles: OgFontFile[] = [
  { subset: "latin", weight: 400 },
  { subset: "vietnamese", weight: 400 },
  { subset: "latin", weight: 600 },
  { subset: "vietnamese", weight: 600 },
];

export async function loadOgFonts() {
  return Promise.all(
    ogFontFiles.map(async (fontFile) => ({
      name: "Inter",
      weight: fontFile.weight,
      style: "normal" as const,
      data: await readFile(join(fontDirectory, `inter-${fontFile.subset}-${fontFile.weight}-normal.woff`)),
    })),
  );
}
