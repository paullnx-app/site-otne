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
      "Consultoria de SEO estratégica para pequenas e médias empresas. Aumente seu tráfego orgânico com método e consistência.",
    url: "https://www.otne.com.br/consultoria-seo",
    type: "website",
    images: [
      {
        url: "https://www.otne.com.br/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Consultoria de SEO para PMEs — Otne SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoria de SEO para PMEs | Otne SEO",
    description:
      "Consultoria de SEO estratégica para pequenas e médias empresas.",
    images: ["https://www.otne.com.br/opengraph.jpg"],
  },
};

export default function ConsultoriaSEOPage() {
  return <ConsultoriaContent />;
}
