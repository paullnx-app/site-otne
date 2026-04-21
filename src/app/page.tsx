import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { Methodology } from "@/components/sections/Methodology";
import { Trust } from "@/components/sections/Trust";
import { RecentPosts } from "@/components/sections/RecentPosts";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Otne SEO | Consultoria de SEO Especializada em PMEs",
  description:
    "Aumente suas vendas com SEO estratégico. Consultoria especializada para pequenas e médias empresas que buscam crescimento orgânico real e previsível.",
  alternates: { canonical: "https://www.otne.com.br/" },
  openGraph: {
    title: "Otne SEO | Consultoria de SEO Especializada em PMEs",
    description:
      "Aumente suas vendas com SEO estratégico. Consultoria especializada para pequenas e médias empresas.",
    url: "https://www.otne.com.br/",
    type: "website",
    images: [
      {
        url: "https://www.otne.com.br/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Otne SEO — consultoria de SEO para PMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Otne SEO | Consultoria de SEO Especializada em PMEs",
    description:
      "Aumente suas vendas com SEO estratégico. Consultoria especializada para pequenas e médias empresas.",
    images: ["https://www.otne.com.br/opengraph.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Otne SEO",
  url: "https://www.otne.com.br",
  description: "Consultoria de SEO especializada em pequenas e médias empresas.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-31-3360-9525",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
  sameAs: [
    "https://www.instagram.com/otne.seo",
    "https://www.linkedin.com/company/otne-seo",
  ],
};

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <SchemaMarkup data={organizationSchema} />
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <TargetAudience />
        <Methodology />
        <Trust />
        <RecentPosts posts={latestPosts} />
      </main>
      <Footer />
    </div>
  );
}
