import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { Methodology } from "@/components/sections/Methodology";
import { Trust } from "@/components/sections/Trust";
import { useSEO } from "@/hooks/use-seo";
import { SchemaMarkup } from "@/components/seo/schema-markup";

export default function Home() {
  useSEO({
    title: "Otne.seo | Consultoria de SEO Especializada em PMEs",
    description: "Aumente suas vendas com SEO estratégico. Consultoria especializada para pequenas e médias empresas que buscam crescimento orgânico real e previsível."
  });

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Otne.seo",
    "url": "https://otne.seo",
    "logo": "https://otne.seo/logo.png",
    "description": "Consultoria de SEO especializada em pequenas e médias empresas.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-99999-9999",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://instagram.com/otne.seo",
      "https://linkedin.com/company/otne-seo"
    ]
  };

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
      </main>
      
      <footer className="py-12 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Otne.seo - Consultoria de SEO. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
