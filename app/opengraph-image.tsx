import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — Industrial Band Saw Repair, Houston TX`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#050403",
          backgroundImage:
            "radial-gradient(800px 500px at 75% 35%, rgba(249,115,22,0.30), transparent 60%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#fb923c",
            fontFamily: "monospace",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 10,
              height: 10,
              borderRadius: 999,
              backgroundColor: "#fb923c",
              boxShadow: "0 0 18px #fb923c",
            }}
          />
          <div style={{ display: "flex" }}>20+ Years · Mobile Saw Service</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 0.95,
            }}
          >
            We come to you.
          </div>
          <div
            style={{
              display: "flex",
              gap: 18,
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 0.95,
            }}
          >
            <div style={{ display: "flex", color: "#f97316" }}>Any saw.</div>
            <div style={{ display: "flex", color: "#a8a29e" }}>Any shop.</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#cbd5e1",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex", fontWeight: 700 }}>{site.name}</div>
          <div
            style={{
              display: "flex",
              fontFamily: "monospace",
              color: "#fb923c",
            }}
          >
            {site.phone.display}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
