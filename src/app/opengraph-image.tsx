import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bright Key Academy - Study in South Korea";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1e40af 0%, #2563eb 40%, #06b6d4 100%)",
          padding: 80,
          fontFamily: "Geist, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 160,
            height: 160,
            borderRadius: 40,
            background: "rgba(255,255,255,0.15)",
            marginBottom: 40,
          }}
        >
          <div style={{ fontSize: 72, fontWeight: 900, color: "white", lineHeight: 1 }}>
            BK
          </div>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 20,
            letterSpacing: "-0.02em",
          }}
        >
          Bright Key Academy
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: "rgba(255,255,255,0.85)",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Study in South Korea
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: "rgba(255,255,255,0.65)",
            textAlign: "center",
          }}
        >
          Sri Lanka&apos;s Premier Education Consultancy
        </div>
      </div>
    ),
    { ...size }
  );
}
