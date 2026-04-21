"use client";

import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { processContent } from "@/lib/blog-utils";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { BlogCTA } from "@/components/blog/blog-cta";
import { BlogCategories } from "@/components/blog/blog-categories";
import { ScrollProgress } from "@/components/blog/scroll-progress";
import { useMemo, useEffect, useRef } from "react";
import type { BlogPost } from "@/data/blog-posts";

const articleSchema = (post: BlogPost) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  image: post.imageUrl,
  author: { "@type": "Organization", name: post.author },
  publisher: {
    "@type": "Organization",
    name: "Otne SEO",
    logo: { "@type": "ImageObject", url: "https://www.otne.com.br/opengraph.jpg" },
  },
  datePublished: post.date,
  description: post.excerpt,
});

export function BlogPostContent({ post }: { post: BlogPost }) {
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);

  const { content: processedContent, toc } = useMemo(
    () => processContent(post.content),
    [post.content]
  );

  // Intercept internal links for client-side navigation
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("/") && !href.startsWith("//")) {
          e.preventDefault();
          router.push(href);
          window.scrollTo(0, 0);
        }
      }
    };
    el.addEventListener("click", handleClick);
    return () => el.removeEventListener("click", handleClick);
  }, [processedContent, router]);

  return (
    <div className="min-h-screen bg-background relative">
      <ScrollProgress />
      <SchemaMarkup data={articleSchema(post)} />
      {post.faqJsonLd ? <SchemaMarkup data={post.faqJsonLd} /> : null}
      <Navbar />

      <main className="pt-32 pb-20 container mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para o blog
        </Link>

        <article className="max-w-[1100px] mx-auto">
          <header className="mb-12 text-center max-w-[800px] mx-auto">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Link href={`/blog?category=${encodeURIComponent(post.category)}`}>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider cursor-pointer hover:bg-primary/20 transition-colors">
                  {post.category}
                </span>
              </Link>
            </div>

            <h1 className="text-3xl md:text-[42px] font-display font-bold text-foreground mb-8 leading-[1.2] tracking-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground border-y border-border py-6">
              <div className="flex items-center gap-2 font-medium">
                <User className="w-4 h-4" /> {post.author}
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Calendar className="w-4 h-4" /> {post.date}
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Clock className="w-4 h-4" /> {post.readTime}
              </div>
            </div>
          </header>

          <div className="aspect-video rounded-xl overflow-hidden mb-16 shadow-sm">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
            <div className="lg:hidden mb-8">
              <TableOfContents items={toc} />
            </div>

            <div
              ref={contentRef}
              className="prose prose-lg max-w-none
                prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground
                [&_h2]:text-[32px] [&_h2]:leading-[1.3] [&_h2]:tracking-tight [&_h2]:!mt-[40px] [&_h2]:!mb-[20px]
                [&_h3]:text-[26px] [&_h3]:leading-[1.35] [&_h3]:tracking-tight [&_h3]:!mt-[30px] [&_h3]:!mb-[15px]
                [&_p]:text-[20px] [&_p]:text-[#2d2d2d] [&_p]:leading-[1.8] [&_p]:!mb-[28px]
                [&_ul]:!my-[28px] [&_li]:text-[#2d2d2d] [&_li]:text-[20px] [&_li]:leading-[1.8] [&_li]:mb-3
                [&_a:not(.inline-flex)]:text-primary [&_a:not(.inline-flex)]:font-semibold [&_a:not(.inline-flex)]:no-underline hover:[&_a:not(.inline-flex)]:underline hover:[&_a:not(.inline-flex)]:text-primary/90"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />

            <aside className="hidden lg:block sticky top-32">
              <TableOfContents items={toc} />
              <BlogCategories />
              <BlogCTA />
            </aside>
          </div>
        </article>
      </main>
    </div>
  );
}
