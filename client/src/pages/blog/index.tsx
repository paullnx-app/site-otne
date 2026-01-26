import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog-posts";
import { Link, useSearch } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function BlogIndex() {
  useSEO({
    title: "Blog de SEO | Dicas e Estratégias - Otne SEO",
    description: "Artigos sobre SEO, Marketing de Conteúdo e Estratégias Digitais para fazer sua empresa crescer no Google."
  });

  const search = useSearch();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Parse category from URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(search);
    const category = params.get("category");
    if (category) {
      setSelectedCategory(decodeURIComponent(category));
    } else {
      setSelectedCategory(null);
    }
  }, [search]);

  // Update URL when category changes
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    if (category) {
      window.history.pushState(null, "", `/blog?category=${encodeURIComponent(category)}`);
    } else {
      window.history.pushState(null, "", "/blog");
    }
  };

  // Get unique categories from blog posts
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Filter posts based on selection
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;


  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Blog de SEO
          </h1>
          <p className="text-xl text-muted-foreground">
            Estratégias, tendências e guias práticos para dominar o Google.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <button 
            onClick={() => handleCategoryChange(null)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-medium transition-all border", 
              !selectedCategory 
                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20" 
                : "bg-white text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
            )}
          >
            Todos
          </button>
          {categories
            .filter(cat => !selectedCategory || cat === selectedCategory)
            .map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all border", 
                selectedCategory === cat 
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20" 
                  : "bg-white text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
            <motion.article
              layout
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all group"
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
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-primary font-bold text-sm">
                    Ler artigo <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-muted-foreground text-lg">Nenhum artigo encontrado nesta categoria.</p>
              <button 
                onClick={() => handleCategoryChange(null)}
                className="mt-4 text-primary font-bold hover:underline"
              >
                Ver todos os artigos
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}