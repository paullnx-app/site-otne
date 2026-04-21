import type { NextConfig } from "next";
import path from "path";

const assetsPath = path.resolve(process.cwd(), "attached_assets");
const modernPolyfillPath = path.resolve(process.cwd(), "src/lib/modern-polyfill.js");
const modernPolyfillRelative = "./src/lib/modern-polyfill.js";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
    // Inlines CSS into the HTML <head> so the initial paint has zero
    // render-blocking stylesheet network requests.
    inlineCss: true,
  },
  turbopack: {
    resolveAlias: {
      "@assets": assetsPath,
      // Replace Next.js' legacy polyfill bundle with an empty module.
      // browserslist (see package.json) already targets modern evergreen browsers.
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
};

export default nextConfig;
