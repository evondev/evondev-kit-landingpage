// Chụp ảnh showcase từ ui-ux-dashboard đang chạy ở localhost.
//
//   1. Mở ui-ux-dashboard:           cd ~/dev/ui-ux-dashboard && npm run dev
//   2. Chụp tất cả:                  npm run capture
//      Chụp vài mục:                 npm run capture -- button customers
//
// Danh sách route ở scripts/showcase-shots.json, `id` trùng id trong showcase-items.ts.
// Mục trong /components khai `section` (tiêu đề khu) và `row` (ví dụ thứ mấy, hoặc "all").
// Ảnh ra public/showcase/<id>-<theme>.webp, kích thước ghi vào showcase-manifest.json.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import sharp from "sharp";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = join(projectRoot, "public/showcase");
const manifestPath = join(projectRoot, "src/features/landing/constants/showcase-manifest.json");
const config = JSON.parse(await readFile(join(projectRoot, "scripts/showcase-shots.json"), "utf8"));

const requestedIds = process.argv.slice(2);
const shots = requestedIds.length
  ? config.shots.filter((shot) => requestedIds.includes(shot.id))
  : config.shots;

async function readManifest() {
  try {
    return JSON.parse(await readFile(manifestPath, "utf8"));
  } catch {
    return {};
  }
}

async function applyTheme(page, theme) {
  await page.evaluate((isDark) => {
    document.documentElement.classList.toggle("dark", isDark);
  }, theme === "dark");
}

async function captureSection(page, shot) {
  // Mỗi khu trong /components gập sẵn: bấm tiêu đề để mở. So khớp đúng chữ tiêu đề,
  // vì tên của nút gồm cả dòng mô tả ("Nút" khớp nhầm cả "Thông báo... bấm nút...").
  const toggleButton = page
    .locator("h3 > button")
    .filter({ has: page.getByText(shot.section, { exact: true }) })
    .first();
  const section = page.locator("section").filter({ has: toggleButton }).last();

  if ((await toggleButton.getAttribute("aria-expanded")) !== "true") await toggleButton.click();

  // Chụp một ví dụ trong khu (`row`, mặc định ví dụ đầu), hoặc cả khu khi `row` là "all".
  const content = section.locator(":scope > div");
  const row = shot.row === "all" ? content : content.locator(":scope > *").nth(shot.row ?? 0);

  await row.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);

  return row.screenshot({ animations: "disabled" });
}

async function capturePage(page) {
  await page.waitForTimeout(300);

  return page.screenshot({ animations: "disabled" });
}

async function saveWebp(pngBuffer, fileName) {
  const outputPath = join(outputDirectory, fileName);
  const { width, height } = await sharp(pngBuffer).webp({ quality: 86 }).toFile(outputPath);

  return { src: `/showcase/${fileName}`, width, height };
}

await mkdir(outputDirectory, { recursive: true });

const manifest = await readManifest();
const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: config.pageViewport,
  deviceScaleFactor: config.deviceScaleFactor,
  reducedMotion: "reduce",
});
const page = await context.newPage();
const failedIds = [];

for (const shot of shots) {
  try {
    if (shot.viewport) await page.setViewportSize(shot.viewport);
    else await page.setViewportSize(config.pageViewport);

    await page.goto(`${config.baseUrl}${shot.route}`, { waitUntil: "networkidle" });

    const images = {};

    for (const theme of config.themes) {
      await applyTheme(page, theme);

      const pngBuffer = shot.section ? await captureSection(page, shot) : await capturePage(page);

      images[theme] = await saveWebp(pngBuffer, `${shot.id}-${theme}.webp`);
    }

    manifest[shot.id] = images;
    console.log(`✓ ${shot.id}`);
  } catch (error) {
    failedIds.push(shot.id);
    console.error(`✗ ${shot.id}: ${error.message}`);
  }
}

await browser.close();
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

console.log(`\n${shots.length - failedIds.length}/${shots.length} ảnh. Manifest: ${manifestPath}`);
if (failedIds.length) process.exitCode = 1;
