import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  env: {
    NEXT_TELEMETRY_DISABLED: "1",
  },
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
}

export default nextConfig
