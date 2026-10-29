import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static: served as plain files by Cloudflare (no server, no CPU per request).
  output: "export",
  images: { unoptimized: true },
  // your other config options here

  // Disables ESLint errors from failing production builds.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
