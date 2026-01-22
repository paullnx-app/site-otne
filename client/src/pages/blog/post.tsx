import { Navbar } from "@/components/layout/Navbar";
import { useRoute, Link } from "wouter";
import { blogPosts } from "@/data/blog-posts";
import { useSEO } from "@/hooks/use-seo";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import NotFound from "@/pages/not-found";
import { processContent } from "@/lib/blog-utils";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { BlogCTA } from "@/components/blog/blog-cta";
import { useMemo } from "react";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = blogPosts.find(p => p.slug === params?.slug);

  useSEO({
    title: post ? `${post.title} | Blog Otne.seo` : "Artigo não encontrado",
    description: post ? post.excerpt : "Artigo não encontrado"
  });

  const { content: processedContent, toc } = useMemo(() => {
    if (!post) return { content: "", toc: [] };
    return processContent(post.content);
  }, [post]);

  if (!post) return <NotFound />;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.imageUrl,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Otne.seo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://otne.seo/logo.png"
      }
    },
    "datePublished": "2024-01-01", // Placeholder
    "description": post.excerpt
  };

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup data={articleSchema} />
      <Navbar />
      
      <main className="pt-32 pb-20 container mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para o blog
        </Link>

        <article className="max-w-[1100px] mx-auto">
          <header className="mb-12 text-center max-w-[800px] mx-auto">
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-[42px] font-display font-bold text-foreground mb-8 leading-[1.2] tracking-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground border-y border-border py-6">
              <div className="flex items-center gap-2 font-medium">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </header>

          <div className="aspect-video rounded-xl overflow-hidden mb-16 shadow-sm">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
            <div className="lg:hidden mb-8">
              <TableOfContents items={toc} />
            </div>

            <div 
              className="prose prose-lg max-w-none 
                prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground 
                [&>h2]:text-[32px] [&>h2]:leading-[1.3] [&>h2]:tracking-tight [&>h2]:!mt-[40px] [&>h2]:!mb-[20px] 
                [&>h3]:text-[26px] [&>h3]:leading-[1.35] [&>h3]:tracking-tight [&>h3]:!mt-[30px] [&>h3]:!mb-[15px]
                [&>p]:text-[20px] [&>p]:text-[#2d2d2d] [&>p]:leading-[1.8] [&>p]:!mb-[28px]
                [&>ul]:!my-[28px] [&>li]:text-[#2d2d2d] [&>li]:text-[20px] [&>li]:leading-[1.8] [&>li]:mb-3
                [&>a]:text-primary [&>a]:font-semibold [&>a]:no-underline hover:[&>a]:underline hover:[&>a]:text-primary/90"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />

            <aside className="hidden lg:block sticky top-32">
              <TableOfContents items={toc} />
              <BlogCTA />
            </aside>
          </div>
        </article>
      </main>
    </div>
  );
}
