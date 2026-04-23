import type { NextConfig } from "next";
import path from "path";

const assetsPath = path.resolve(process.cwd(), "attached_assets");
const modernPolyfillPath = path.resolve(process.cwd(), "src/lib/modern-polyfill.js");
const modernPolyfillRelative = "./src/lib/modern-polyfill.js";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
    // inlineCss removido: gera 226 KB de runtime JS (chunk ~70 KiB transferidos)
    // que bloqueia a main thread (TBT 3830ms) e tem bug documentado com next/font
    // (issue vercel/next.js#83674 — preview fica branco).
  },
  turbopack: {
    resolveAlias: {
      "@assets": assetsPath,
      // Replace Next.js' legacy polyfill bundle with an empty module.
      "next/dist/build/polyfills/polyfill-module": modernPolyfillRelative,
      "../build/polyfills/polyfill-module": modernPolyfillRelative,
    },
    root: process.cwd(),
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@assets": assetsPath,
      "next/dist/build/polyfills/polyfill-module": modernPolyfillPath,
      "../build/polyfills/polyfill-module": modernPolyfillPath,
    };
    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
