import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "SparkRise AI — AI Lead Automation Agency, Northern Virginia"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "oklch(0.12 0.02 250)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            background: "rgba(99, 132, 255, 0.15)",
            border: "1px solid rgba(99, 132, 255, 0.4)",
            borderRadius: "999px",
            padding: "8px 24px",
            color: "#7B9EFF",
            fontSize: "18px",
            fontWeight: 600,
            marginBottom: "32px",
            letterSpacing: "0.05em",
          }}
        >
          Northern Virginia&apos;s #1 AI Lead Automation Agency
        </div>

        {/* Logo + name */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#7B9EFF" />
          </svg>
          <span style={{ color: "#ffffff", fontSize: "48px", fontWeight: 800, letterSpacing: "-0.02em" }}>
            SparkRise AI
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#ffffff",
            fontSize: "40px",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "900px",
          }}
        >
          We Build AI Systems That Book Appointments{" "}
          <span style={{ color: "#7B9EFF" }}>While You Sleep</span>
        </div>

        {/* Sub */}
        <div
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "22px",
            textAlign: "center",
            marginTop: "24px",
            maxWidth: "700px",
          }}
        >
          Leads followed up in under 5 minutes · 24/7 · Live in 5 days
        </div>

        {/* URL */}
        <div
          style={{
            color: "#7B9EFF",
            fontSize: "20px",
            fontWeight: 600,
            marginTop: "48px",
          }}
        >
          sparkriseai.com
        </div>
      </div>
    ),
    { ...size }
  )
}
