import { Link } from "wouter";
import { blogPosts } from "@/data/blog-posts";
import { useMemo } from "react";

export function BlogCategories() {
  const categories = useMemo(() => {
    const uniqueCategories = new Set(blogPosts.map(post => post.category));
    return Array.from(uniqueCategories).sort();
  }, []);

  return (
    <nav className="p-6 bg-white rounded-xl border border-border mt-8">
      <h4 className="font-bold text-lg mb-4 text-foreground relative inline-block">
        Conteúdos
        <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
      </h4>
      
      <ul className="space-y-3">
        {categories.map((category) => (
          <li key={category} className="text-sm">
            <Link href={`/blog?category=${encodeURIComponent(category)}`}>
              <a className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                <span className="w-1.5 h-1.5 rounded-sm bg-primary/70 group-hover:bg-primary transition-colors" />
                {category}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
