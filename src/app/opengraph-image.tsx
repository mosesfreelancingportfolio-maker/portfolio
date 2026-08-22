import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#101214",
          color: "#fafafa",
          padding: "72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "8px",
            backgroundColor: "#e9c349",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              backgroundColor: "#e9c349",
              color: "#241a00",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            MJ
          </div>
          <div
            style={{
              fontSize: "26px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#a3a3a3",
              display: "flex",
            }}
          >
            Portfolio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: "34px",
              color: "#e9c349",
              display: "flex",
            }}
          >
            {siteConfig.role}
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#a3a3a3",
              maxWidth: "900px",
              display: "flex",
            }}
          >
            Web apps · Mobile apps · Backend &amp; APIs · PostgreSQL &amp;
            Firebase
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #2c2f33",
            paddingTop: "28px",
            fontSize: "24px",
            color: "#a3a3a3",
          }}
        >
          <div style={{ display: "flex" }}>
            Winner — $6,000 Ignition Grand (SnapNews)
          </div>
          <div style={{ display: "flex" }}>{siteConfig.location}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}