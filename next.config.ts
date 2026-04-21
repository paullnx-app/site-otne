import type { NextConfig } from "next";
import path from "path";

const assetsPath = path.resolve(process.cwd(), "attached_assets");

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  turbopack: {
    resolveAlias: {
      // Alias @assets → ./attached_assets (preserves legacy Vite imports)
      "@assets": assetsPath,
    },
    root: process.cwd(),
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@assets": assetsPath,
    };
    return config;
  },
};

export default nextConfig;
