import { heroCommands } from "@/features/landing/constants/hero-commands";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface OgImageContentProps {
  dictionary: Dictionary;
}

/** Nội dung ảnh OG 1200×630. Satori chỉ hiểu style inline và flexbox, nên không dùng class. */
export default function OgImageContent({ dictionary }: OgImageContentProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background:
          "radial-gradient(circle at 88% 12%, rgba(150,120,255,0.22), transparent 42%), radial-gradient(circle at 8% 100%, rgba(96,140,255,0.26), transparent 45%), #ffffff",
        color: "#091135",
        fontFamily: "Inter",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 32, fontWeight: 600 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: "linear-gradient(135deg, #4d8dff, #1f6feb)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
          }}
        >
          e
        </div>
        evondevKit
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 76, fontWeight: 600, lineHeight: 1.1, letterSpacing: -2, textWrap: "balance" }}>
          {dictionary.hero.headline}
        </div>
        <div style={{ fontSize: 30, color: "#5b6380" }}>{dictionary.hero.eyebrow}</div>
      </div>

      <div
        style={{
          display: "flex",
          alignSelf: "flex-start",
          padding: "16px 24px",
          borderRadius: 16,
          border: "1px solid #e2e6ee",
          background: "#ffffff",
          boxShadow: "0 12px 32px -8px rgba(9,17,53,0.16)",
          fontSize: 26,
        }}
      >
        <span style={{ color: "#5b6380", marginRight: 16 }}>&gt;</span>
        {heroCommands[0]}
      </div>
    </div>
  );
}
