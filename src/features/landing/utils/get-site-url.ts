/**
 * URL gốc cho metadata (OG, hreflang, sitemap). Chưa gắn domain riêng nên lấy
 * domain *.vercel.app mà Vercel tự cấp; đặt NEXT_PUBLIC_SITE_URL để ghi đè.
 */
export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return "http://localhost:3000";
}
