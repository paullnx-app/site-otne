"use client";

import { Navbar } from "@/components/layout/Navbar";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import Link from "next/link";
import { ArrowRight, Linkedin, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import authorPhoto from "@/assets/images/about/paul-leite-autor.jpg";
import { blogPosts } from "@/data/blog-posts";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Paul Leite",
  url: "https://www.otne.com.br/autor/paul-leite",
  image: "https://www.otne.com.br/autor/paul-leite/foto.jpg",
  jobTitle: "Consultor de SEO",
  worksFor: {
    "@type": "Organization",
    name: "Otne SEO",
    url: "https://www.otne.com.br",
  },
  description:
    "Paul Leite é consultor de SEO com mais de 8 anos de experiência, especializado em PMEs brasileiras. Fundador da Otne SEO, auditou mais de 30 sites em 2026 e acompanhou de perto os impactos dos core updates e da IA generativa no tráfego orgânico.",
  sameAs: ["https://www.linkedin.com/in/paul-leite/"],
};

const authorArticles = blogPosts.filter((p) => p.author === "Paul Leite");

export function AutorPaulLeiteContent() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup data={personSchema} />
      <Navbar />

      <main className="pt-32 pb-20 container mx-auto px-6">
        {/* Header do autor */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[860px] mx-auto mb-20"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="flex-shrink-0">
              <img
                src={authorPhoto.src}
                alt="Foto de Paul Leite, consultor de SEO na Otne SEO"
                width={180}
                height={180}
                className="rounded-full object-cover w-44 h-44 ring-4 ring-primary/20 shadow-lg"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                Autor
              </p>
              <h1 className="text-4xl md:text-[48px] font-display font-bold text-foreground leading-tight mb-4">
                Paul Leite
              </h1>
              <p className="text-muted-foreground text-lg font-medium mb-6">
                Consultor de SEO · Fundador da Otne SEO
              </p>

              <p className="text-[18px] text-foreground/80 leading-[1.8] mb-4">
                Mais de 8 anos ajudando pequenas e médias empresas a crescerem no Google de forma previsível. Já auditei mais de 30 sites em 2026 e acompanho de perto o impacto dos core updates e da IA generativa no tráfego orgânico de PMEs brasileiras.
              </p>
              <p className="text-[18px] text-foreground/80 leading-[1.8] mb-6">
                Minha aposta: SEO de qualidade ainda é o canal de menor custo por lead quando feito com consistência. Escrevo sobre o que vejo na prática — sem teoria de almanaque, sem jargão de consultoria.
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/in/paul-leite/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors text-sm font-medium"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <Link
                  href="/consultoria-seo"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  Fale comigo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Especialidades */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-[860px] mx-auto mb-20"
        >
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">
            Especialidades
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "SEO técnico e auditoria", desc: "Diagnóstico de indexação, Core Web Vitals, schema e velocidade." },
              { label: "SEO local e Google Maps", desc: "Google Business Profile, NAP, reviews e presença regional para PMEs." },
              { label: "Conteúdo e GEO", desc: "Artigos que ranqueiam no Google e são citados por ChatGPT e Perplexity." },
              { label: "Link building e autoridade", desc: "Menções, imprensa e parceiros estratégicos para aumentar E-E-A-T." },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-border rounded-xl p-5 hover:border-primary/40 transition-colors"
              >
                <p className="font-semibold text-foreground mb-1">{item.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Artigos publicados */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-[860px] mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-display font-bold text-foreground">
              Artigos publicados
            </h2>
            <span className="ml-auto text-sm text-muted-foreground">
              {authorArticles.length} artigos
            </span>
          </div>

          <div className="divide-y divide-border">
            {authorArticles.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex gap-5 py-6 hover:bg-muted/30 -mx-4 px-4 rounded-lg transition-colors"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  width={96}
                  height={64}
                  className="w-24 h-16 object-cover rounded-lg flex-shrink-0 mt-0.5"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary/70 mb-1 block">
                    {post.category}
                  </span>
                  <h3 className="font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {post.date}
                    {post.updatedDate && (
                      <> · <span className="text-primary/70">Atualizado em {post.updatedDate}</span></>
                    )}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 self-center" />
              </Link>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
