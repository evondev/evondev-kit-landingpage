import { readFile } from "node:fs/promises";
import { join } from "node:path";

const logoPath = join(process.cwd(), "public/brand/logo-mark.png");

/** Satori cần ảnh dạng data URL, nên đọc logo từ public rồi mã hoá base64. */
export async function loadOgLogo() {
  const logoBuffer = await readFile(logoPath);

  return `data:image/png;base64,${logoBuffer.toString("base64")}`;
}
