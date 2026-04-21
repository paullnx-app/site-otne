import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog-posts";

export function RecentPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Blog</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
              Últimos Artigos
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Estratégias e insights para dominar o Google.
            </p>
          </div>
          <Link href="/blog" className="inline-flex items-center text-primary font-bold hover:translate-x-1 transition-transform">
            Ver todos os artigos <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="reveal-up bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="aspect-video overflow-hidden cursor-pointer bg-muted">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    loading="lazy"
                    width="400"
                    height="225"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-primary font-bold text-sm">
                    Ler artigo <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
