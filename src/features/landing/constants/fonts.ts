import { Inter, JetBrains_Mono } from "next/font/google";

/** Một font cho cả trang, như tokens.css của skill. Mono chỉ cho khối lệnh. */
export const interFont = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const jetbrainsMonoFont = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
