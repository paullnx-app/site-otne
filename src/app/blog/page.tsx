import type { Metadata } from "next";
import { Suspense } from "react";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog de SEO | Dicas e Estratégias - Otne SEO",
  description:
    "Artigos sobre SEO, Marketing de Conteúdo e Estratégias Digitais para fazer sua empresa crescer no Google.",
  alternates: { canonical: "https://www.otne.com.br/blog" },
  openGraph: {
    title: "Blog de SEO | Otne SEO",
    description: "Artigos sobre SEO, Marketing de Conteúdo e Estratégias Digitais.",
    url: "https://www.otne.com.br/blog",
  },
};

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <BlogContent />
    </Suspense>
  );
}
