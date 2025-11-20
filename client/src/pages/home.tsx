import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { Methodology } from "@/components/sections/Methodology";
import { Trust } from "@/components/sections/Trust";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <TargetAudience />
        <Methodology />
        <Trust />
      </main>
      
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 RANK.AI - Consultoria de SEO. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
