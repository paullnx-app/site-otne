"use client";

import dynamic from "next/dynamic";
import type { BlogPost } from "@/data/blog-posts";

// Framer-motion's useScroll transitively accesses location — skip SSR entirely.
// Metadata (title, description, og) is handled server-side by generateMetadata.
const BlogPostContent = dynamic(
  () => import("./BlogPostContent").then((m) => ({ default: m.BlogPostContent })),
  { ssr: false }
);

export function BlogPostLoader({ post }: { post: BlogPost }) {
  return <BlogPostContent post={post} />;
}
