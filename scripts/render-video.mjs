// Render video giới thiệu evon:ui-ux từ video/<tên>/index.html.
//
//   Video demo cũ, cả hai bản:   npm run render:video
//   Video trước / sau:           npm run render:video -- before-after-demo
//   Một bản:                     npm run render:video -- before-after-demo en
//   Chụp vài khung để soát:      npm run render:video -- before-after-demo --stills 2,6.5,12.3
//
// Mỗi bản ra public/video/<tên>-<lang>.mp4, .webm và ảnh poster .webp (dùng cho người bật
// "giảm chuyển động"). Ảnh soát ra video/<tên>/stills/ (không commit).
// Cần ffmpeg trong PATH (brew install ffmpeg). Trang nạp font từ Google Fonts nên cần mạng.

import { spawn } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "playwright";
import sharp from "sharp";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = join(projectRoot, "public/video");
const supportedLocales = ["vi", "en"];
// Giây lấy poster của từng video: khung đẹp nhất để đứng yên.
const posterTimeByVideo = {
  // Màn thật đã hiện hết, hai badge đã vào.
  "ui-ux-demo": 18.6,
  // Màn sau đã hiện, ba chỗ đã sửa đã vào.
  "before-after-demo": 13.6,
};

const cliArguments = process.argv.slice(2);
const stillsFlagIndex = cliArguments.indexOf("--stills");
const stillTimes =
  stillsFlagIndex === -1 ? [] : cliArguments[stillsFlagIndex + 1].split(",").map((value) => Number(value));
const requestedLocales = cliArguments.filter((argument) => supportedLocales.includes(argument));
const locales = requestedLocales.length ? requestedLocales : supportedLocales;
const videoName = cliArguments.find((argument) => argument in posterTimeByVideo) ?? "ui-ux-demo";
const posterTime = posterTimeByVideo[videoName];
const pagePath = join(projectRoot, `video/${videoName}/index.html`);
const stillsDirectory = join(projectRoot, `video/${videoName}/stills`);

function runFfmpeg(ffmpegArguments, { input } = {}) {
  const ffmpegProcess = spawn("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", ...ffmpegArguments], {
    stdio: [input ? "pipe" : "ignore", "inherit", "inherit"],
  });
  const donePromise = new Promise((resolve, reject) => {
    ffmpegProcess.on("error", reject);
    ffmpegProcess.on("close", (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg thoát với mã ${code}`))));
  });

  return { stdin: ffmpegProcess.stdin, donePromise };
}

async function writeFrame(stream, buffer) {
  if (!stream.write(buffer)) await new Promise((resolve) => stream.once("drain", resolve));
}

async function openVideoPage(browser, locale) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  const pageUrl = `${pathToFileURL(pagePath).href}?lang=${locale}&render=1`;

  await page.goto(pageUrl, { waitUntil: "networkidle" });
  await page.evaluate(() => window.videoReady);

  return page;
}

async function captureAt(page, seconds) {
  await page.evaluate((time) => window.renderFrame(time), seconds);

  return page.screenshot({ type: "png" });
}

async function renderStills(page, locale) {
  await mkdir(stillsDirectory, { recursive: true });

  for (const seconds of stillTimes) {
    const stillPath = join(stillsDirectory, `${locale}-${seconds.toFixed(2)}.png`);

    await sharp(await captureAt(page, seconds)).toFile(stillPath);
    console.log(`  ${stillPath}`);
  }
}

async function renderVideo(page, locale) {
  const { fps, duration } = await page.evaluate(() => window.videoConfig);
  const frameCount = Math.round(fps * duration);
  const mp4Path = join(outputDirectory, `${videoName}-${locale}.mp4`);
  const webmPath = join(outputDirectory, `${videoName}-${locale}.webm`);
  const posterPath = join(outputDirectory, `${videoName}-${locale}-poster.webp`);

  // Frame PNG đổ thẳng vào ffmpeg, không ghi ra đĩa.
  const encoder = runFfmpeg(
    [
      ...["-f", "image2pipe", "-framerate", String(fps), "-c:v", "png", "-i", "-"],
      ...["-c:v", "libx264", "-preset", "slow", "-tune", "animation", "-crf", "20"],
      ...["-pix_fmt", "yuv420p", "-movflags", "+faststart", mp4Path],
    ],
    { input: true },
  );

  for (let frameIndex = 0; frameIndex < frameCount; frameIndex++) {
    await writeFrame(encoder.stdin, await captureAt(page, frameIndex / fps));

    if (frameIndex % fps === 0) process.stdout.write(`\r  ${locale}: giây ${frameIndex / fps} / ${duration}`);
  }

  encoder.stdin.end();
  await encoder.donePromise;
  process.stdout.write("\n");

  await sharp(await captureAt(page, posterTime))
    .webp({ quality: 88 })
    .toFile(posterPath);

  await runFfmpeg([
    ...["-i", mp4Path, "-c:v", "libvpx-vp9", "-crf", "36", "-b:v", "0"],
    ...["-row-mt", "1", "-deadline", "good", "-cpu-used", "2", webmPath],
  ]).donePromise;

  console.log(`  ${mp4Path}\n  ${webmPath}\n  ${posterPath}`);
}

const browser = await chromium.launch();

try {
  if (stillTimes.length) await rm(stillsDirectory, { recursive: true, force: true });
  else await mkdir(outputDirectory, { recursive: true });

  for (const locale of locales) {
    const page = await openVideoPage(browser, locale);

    console.log(`Bản ${locale}:`);

    if (stillTimes.length) await renderStills(page, locale);
    else await renderVideo(page, locale);

    await page.close();
  }
} finally {
  await browser.close();
}
