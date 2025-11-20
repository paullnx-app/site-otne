import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md border-b border-border py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-display font-bold tracking-tighter text-foreground">
          RANK<span className="text-primary">.AI</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/consultoria-seo" className={`text-sm font-medium transition-colors ${location === "/consultoria-seo" ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>
            Consultoria SEO
          </a>
          {isHome && (
            <>
              <a href="#beneficios" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Por que nós</a>
              <a href="#quem-atendemos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Para quem</a>
              <a href="#metodologia" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Como funciona</a>
            </>
          )}
          <Button variant="default" className="bg-primary text-white font-bold hover:bg-primary/90 rounded-full px-6 shadow-md shadow-primary/20">
            Diagnóstico Gratuito
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-border p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="/consultoria-seo" className="text-lg font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Consultoria SEO</a>
            {isHome && (
              <>
                <a href="#beneficios" className="text-lg font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Por que nós</a>
                <a href="#quem-atendemos" className="text-lg font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Para quem</a>
                <a href="#metodologia" className="text-lg font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>Como funciona</a>
              </>
            )}
            <Button className="w-full bg-primary text-white font-bold">Diagnóstico Gratuito</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
