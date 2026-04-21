import type { Metadata } from "next";
import QuemSomosContent from "./QuemSomosContent";

export const metadata: Metadata = {
  title: "Quem Somos | Otne SEO - Consultoria de SEO Especializada",
  description:
    "Conheça a Otne SEO, consultoria focada em resultados reais para PMEs. Nossa missão, valores e por que somos diferentes das agências tradicionais.",
  alternates: { canonical: "https://www.otne.com.br/quem-somos" },
  openGraph: {
    title: "Quem Somos | Otne SEO",
    description: "Conheça a Otne SEO, consultoria focada em resultados reais para PMEs.",
    url: "https://www.otne.com.br/quem-somos",
    images: [{ url: "https://www.otne.com.br/opengraph.jpg" }],
  },
};

export default function QuemSomosPage() {
  return <QuemSomosContent />;
}
