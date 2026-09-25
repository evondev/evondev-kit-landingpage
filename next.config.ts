import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Máy dev có package-lock.json lạc ở thư mục home; ghim root để Turbopack không đoán nhầm.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
