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
    type: "website",
    images: [
      {
        url: "https://www.otne.com.br/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Blog Otne SEO — artigos sobre SEO para PMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de SEO | Otne SEO",
    description: "Artigos sobre SEO, Marketing de Conteúdo e Estratégias Digitais.",
    images: ["https://www.otne.com.br/opengraph.jpg"],
  },
};

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <BlogContent />
    </Suspense>
  );
}
