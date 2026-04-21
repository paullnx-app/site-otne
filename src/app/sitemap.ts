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

  const months: Record<string, number> = {
    Jan: 0, Fev: 1, Mar: 2, Abr: 3, Mai: 4, Jun: 5,
    Jul: 6, Ago: 7, Set: 8, Out: 9, Nov: 10, Dez: 11,
  };
  const parseBrDate = (s: string) => {
    const [d, m, y] = s.trim().split(" ");
    const date = new Date(parseInt(y), months[m] ?? 0, parseInt(d));
    return isNaN(date.getTime()) ? null : date;
  };

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const updated = post.updatedDate ? parseBrDate(post.updatedDate) : null;
    const published = parseBrDate(post.date);
    const lastModified = updated ?? published ?? new Date();
    return {
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...blogRoutes];
}
