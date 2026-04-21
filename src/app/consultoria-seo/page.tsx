import type { Metadata } from "next";
import ConsultoriaContent from "./ConsultoriaContent";

export const metadata: Metadata = {
  title: "Consultoria de SEO para PMEs | Otne SEO",
  description:
    "Consultoria de SEO estratégica para pequenas e médias empresas. Aumente seu tráfego orgânico, gere leads qualificados e cresça no Google com método e consistência.",
  alternates: { canonical: "https://www.otne.com.br/consultoria-seo" },
  openGraph: {
    title: "Consultoria de SEO para PMEs | Otne SEO",
    description:
      "Consultoria de SEO estratégica para pequenas e médias empresas.",
    url: "https://www.otne.com.br/consultoria-seo",
    images: [{ url: "https://www.otne.com.br/opengraph.jpg" }],
  },
};

export default function ConsultoriaSEOPage() {
  return <ConsultoriaContent />;
}
