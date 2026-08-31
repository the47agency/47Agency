import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "radial-gradient(1200px 630px at 100% 0%, #123a78 0%, #05070b 58%)", color: "white", padding: "80px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
        <div style={{ width: "68px", height: "68px", borderRadius: "50%", border: "3px solid white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "34px", fontWeight: 800 }}>47</div>
        <span style={{ fontSize: "34px", fontWeight: 600 }}>{siteConfig.name}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", fontSize: "76px", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", maxWidth: "940px" }}>We build brands that <span style={{ color: "#60a5fa" }}>stand out.</span></div>
        <div style={{ fontSize: "30px", color: "#b6bdc9", maxWidth: "900px", lineHeight: 1.3 }}>{siteConfig.description}</div>
      </div>
      <div style={{ fontSize: "24px", color: "#d4d4d8" }}>Strategy · Creative · Campaigns · Digital Growth</div>
    </div>,
    size
  );
}
