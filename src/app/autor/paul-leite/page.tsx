import type { Metadata } from "next";
import { AutorPaulLeiteContent } from "./AutorPaulLeiteContent";

export const metadata: Metadata = {
  title: "Paul Leite — especialista em SEO | Otne SEO",
  description:
    "Paul Leite é consultor de SEO com mais de 8 anos de experiência, especializado em PMEs brasileiras. Conheça o trabalho e os artigos publicados na Otne SEO.",
  alternates: { canonical: "https://www.otne.com.br/autor/paul-leite" },
  openGraph: {
    title: "Paul Leite — especialista em SEO | Otne SEO",
    description:
      "Paul Leite é consultor de SEO com mais de 8 anos de experiência, especializado em PMEs brasileiras.",
    url: "https://www.otne.com.br/autor/paul-leite",
    images: [
      {
        url: "https://www.otne.com.br/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Paul Leite — Otne SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Leite — especialista em SEO | Otne SEO",
    description:
      "Paul Leite é consultor de SEO com mais de 8 anos de experiência, especializado em PMEs brasileiras.",
  },
};

export default function AutorPaulLeitePage() {
  return <AutorPaulLeiteContent />;
}
