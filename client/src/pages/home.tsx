import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { Methodology } from "@/components/sections/Methodology";
import { Trust } from "@/components/sections/Trust";
import { useSEO } from "@/hooks/use-seo";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { blogPosts } from "@/data/blog-posts";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  useSEO({
    title: "Otne SEO | Consultoria de SEO Especializada em PMEs",
    description: "Aumente suas vendas com SEO estratégico. Consultoria especializada para pequenas e médias empresas que buscam crescimento orgânico real e previsível.",
    canonicalPath: "/",
  });

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Otne SEO",
    "url": "https://www.otne.com.br",
    "logo": "https://www.otne.com.br/logo.png",
    "description": "Consultoria de SEO especializada em pequenas e médias empresas.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-31-3360-9525",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://www.instagram.com/otne.seo",
      "https://www.linkedin.com/company/otne-seo"
    ]
  };

  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <SchemaMarkup data={organizationSchema} />
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <TargetAudience />
        <Methodology />
        <Trust />

        {/* Latest Blog Posts Section */}
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
              
              <Link href="/blog">
                <div className="inline-flex items-center text-primary font-bold hover:translate-x-1 transition-transform cursor-pointer">
                  Ver todos os artigos <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-12 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Otne SEO - Consultoria de SEO. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
