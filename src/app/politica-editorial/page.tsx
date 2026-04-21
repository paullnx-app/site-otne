import type { Metadata } from "next";
import { PoliticaEditorialContent } from "./PoliticaEditorialContent";

export const metadata: Metadata = {
  title: "Política editorial | Otne SEO",
  description:
    "Entenda como produzimos, revisamos e atualizamos os conteúdos do blog Otne SEO. Autoria humana, uso responsável de IA e compromisso com a precisão das informações.",
  alternates: { canonical: "https://www.otne.com.br/politica-editorial" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Política editorial | Otne SEO",
    description:
      "Como produzimos, revisamos e atualizamos os conteúdos do blog Otne SEO.",
    url: "https://www.otne.com.br/politica-editorial",
    type: "website",
    images: [
      {
        url: "https://www.otne.com.br/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Política editorial — Otne SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Política editorial | Otne SEO",
    description:
      "Como produzimos, revisamos e atualizamos os conteúdos do blog Otne SEO.",
    images: ["https://www.otne.com.br/opengraph.jpg"],
  },
};

export default function PoliticaEditorialPage() {
  return <PoliticaEditorialContent />;
}
