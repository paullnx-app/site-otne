import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      // Alias @assets → ./attached_assets (preserves legacy Vite imports)
      "@assets": path.resolve(process.cwd(), "attached_assets"),
    },
    root: process.cwd(),
  },
};

export default nextConfig;
