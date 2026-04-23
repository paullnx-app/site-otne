"use client";

import React from 'react';
import { artigoSeoIa2026 } from './draft-article';
import { Share2, Twitter, Linkedin, Facebook, ArrowLeft, Calendar, Clock } from 'lucide-react';
import { ScrollProgress } from '@/components/blog/scroll-progress';
import { processContent } from "@/lib/blog-utils";

// Visualizador de rascunho — metadata gerenciada em app/blog/rascunho/page.tsx
export default function RascunhoArtigo() {
  const post = artigoSeoIa2026;
  const shareUrl = "https://www.otne.com.br/blog/seo-ou-inteligencia-artificial-2026";
  const { content: processedContent } = processContent(post.content);

  return (
    <div className="min-h-screen bg-background relative">
      <ScrollProgress />
      
      <main className="pt-32 pb-24">
        <article className="container mx-auto px-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-muted-foreground transition-colors mb-8 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> (Rascunho - Visualização)
          </div>

          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {post.readTime}
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between border-y border-border py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{post.author}</p>
                  <p className="text-xs text-muted-foreground">Especialista em SEO</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 opacity-50">
                <span className="text-sm text-muted-foreground mr-2 flex items-center gap-1">
                  <Share2 className="w-4 h-4" /> Compartilhar:
                </span>
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                  <Twitter className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                  <Facebook className="w-4 h-4" />
                </div>
              </div>
            </div>
          </header>

          <div className="rounded-2xl overflow-hidden mb-12 aspect-[21/9] shadow-xl">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div 
            className="prose prose-lg prose-slate max-w-none 
              prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-bold
              prose-ul:text-muted-foreground prose-ul:mb-6
              prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-secondary/50 prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:text-foreground prose-blockquote:font-medium prose-blockquote:italic
              prose-img:rounded-xl prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />

        </article>
      </main>
    </div>
  );
}