import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { BlogPostLoader } from "./BlogPostLoader";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artigo não encontrado",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${post.title} | Blog Otne SEO`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.otne.com.br/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `https://www.otne.com.br/blog/${post.slug}`,
      images: post.imageUrl ? [{ url: post.imageUrl }] : undefined,
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
      images: post.imageUrl ? [post.imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return <BlogPostLoader post={post} />;
}
