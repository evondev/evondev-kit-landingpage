import { installCommands } from "@/features/landing/constants/install-commands";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface OgImageContentProps {
  dictionary: Dictionary;
  logoSrc: string;
}

/** Nội dung ảnh OG 1200×630. Satori chỉ hiểu style inline và flexbox, nên không dùng class. */
export default function OgImageContent({ dictionary, logoSrc }: OgImageContentProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#f9f9f9",
        backgroundImage:
          "linear-gradient(to right, #ededed 1px, transparent 1px), linear-gradient(to bottom, #ededed 1px, transparent 1px)",
        backgroundSize: "96px 96px",
        color: "#262626",
        fontFamily: "Inter",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 32, fontWeight: 600 }}>
        {/* Satori chỉ vẽ <img>, không dùng được next/image. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={52} height={52} />
        evondevKit
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 80,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: -2.5,
          }}
        >
          <span>{dictionary.hero.title.lead}</span>
          <span style={{ color: "#fa5d19" }}>{dictionary.hero.title.accent}</span>
        </div>
        <div style={{ fontSize: 28, color: "#6b6b6b" }}>{dictionary.hero.badge}</div>
      </div>

      <div
        style={{
          display: "flex",
          alignSelf: "flex-start",
          padding: "16px 24px",
          borderRadius: 14,
          border: "1px solid #e3e3e3",
          background: "#ffffff",
          fontSize: 26,
        }}
      >
        <span style={{ color: "#fa5d19", marginRight: 16 }}>&gt;</span>
        {installCommands[0]}
      </div>
    </div>
  );
}
