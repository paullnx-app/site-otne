import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

const SITE_URL = "https://www.otne.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/consultoria-seo`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/quem-somos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const parsed = new Date(post.date);
    const lastModified = isNaN(parsed.getTime()) ? new Date() : parsed;
    return {
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...blogRoutes];
}
