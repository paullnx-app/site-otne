import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Methodology } from "@/components/sections/Methodology";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Methodology />
      </main>
      
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 RANK.AI - High Performance SEO Consultancy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
