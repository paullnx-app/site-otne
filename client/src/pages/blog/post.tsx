import { Navbar } from "@/components/layout/Navbar";
import { useRoute, Link } from "wouter";
import { blogPosts } from "@/data/blog-posts";
import { useSEO } from "@/hooks/use-seo";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = blogPosts.find(p => p.slug === params?.slug);

  useSEO({
    title: post ? `${post.title} | Blog Otne.seo` : "Artigo não encontrado",
    description: post ? post.excerpt : "Artigo não encontrado"
  });

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
        <Link href="/blog">
          <a className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para o blog
          </a>
        </Link>

        <article className="max-w-3xl mx-auto">
          <header className="mb-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground border-y border-border py-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-12 shadow-sm">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div 
            className="prose prose-lg prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-headings:mt-10 prose-headings:mb-4 prose-p:text-muted-foreground prose-p:text-lg prose-p:leading-loose prose-p:mb-6 prose-li:text-muted-foreground prose-li:leading-loose prose-li:mb-2 prose-a:text-primary hover:prose-a:text-primary/80 max-w-none [&>h2]:text-3xl [&>h3]:text-2xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </div>
  );
}