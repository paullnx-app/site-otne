import type { Metadata } from "next";
import QuemSomosContent from "./QuemSomosContent";

export const metadata: Metadata = {
  title: "Quem somos | Otne SEO - Consultoria de SEO Especializada",
  description:
    "Conheça a Otne SEO, consultoria focada em resultados reais para PMEs. Nossa missão, valores e por que somos diferentes das agências tradicionais.",
  alternates: { canonical: "https://www.otne.com.br/quem-somos" },
  openGraph: {
    title: "Quem somos | Otne SEO",
    description:
      "Conheça a Otne SEO, consultoria focada em resultados reais para PMEs. Nossa missão, valores e diferenciais.",
    url: "https://www.otne.com.br/quem-somos",
    type: "website",
    images: [
      {
        url: "https://www.otne.com.br/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Quem somos — Otne SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quem somos | Otne SEO",
    description:
      "Conheça a Otne SEO, consultoria focada em resultados reais para PMEs.",
    images: ["https://www.otne.com.br/opengraph.jpg"],
  },
};

export default function QuemSomosPage() {
  return <QuemSomosContent />;
}
