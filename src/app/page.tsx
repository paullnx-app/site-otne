import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { blogPosts } from "@/data/blog-posts";

const Benefits = dynamic(() =>
  import("@/components/sections/Benefits").then((m) => ({ default: m.Benefits }))
);
const TargetAudience = dynamic(() =>
  import("@/components/sections/TargetAudience").then((m) => ({ default: m.TargetAudience }))
);
const Methodology = dynamic(() =>
  import("@/components/sections/Methodology").then((m) => ({ default: m.Methodology }))
);
const Trust = dynamic(() => import("@/components/sections/Trust").then((m) => ({ default: m.Trust })));
const RecentPosts = dynamic(() =>
  import("@/components/sections/RecentPosts").then((m) => ({ default: m.RecentPosts }))
);

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
    images: [{ url: "https://www.otne.com.br/og-image.png" }],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Otne SEO",
  url: "https://www.otne.com.br",
  logo: "https://www.otne.com.br/logo.png",
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
      <footer className="py-12 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Otne SEO - Consultoria de SEO. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
