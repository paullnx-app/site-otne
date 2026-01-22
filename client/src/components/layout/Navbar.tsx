import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";
import { Link, useLocation } from "wouter";

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

  // Helper to handle navigation links
  const getLinkHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHome ? "bg-white/90 backdrop-blur-md border-b border-border py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-display font-bold tracking-tighter text-foreground cursor-pointer">
          Otne<span className="text-primary">.seo</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href={getLinkHref("#beneficios")} 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Por que nós
          </a>
          <a 
            href={getLinkHref("#quem-atendemos")} 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Para quem
          </a>
          <a 
            href={getLinkHref("#metodologia")} 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Como funciona
          </a>
          
          <Link href="/consultoria-seo" className={`text-sm font-medium transition-colors ${location === "/consultoria-seo" ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>
            Consultoria SEO
          </Link>

          <Link href="/quem-somos" className={`text-sm font-medium transition-colors ${location === "/quem-somos" ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>
            Quem Somos
          </Link>

          <Link href="/blog" className={`text-sm font-medium transition-colors ${location.startsWith("/blog") ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>
            Blog
          </Link>

          <LeadFormDialog>
            <Button variant="default" className="bg-primary text-white font-bold hover:bg-primary/90 rounded-full px-6 shadow-md shadow-primary/20">
              Diagnóstico Gratuito
            </Button>
          </LeadFormDialog>
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
             <a 
              href={getLinkHref("#beneficios")} 
              className="text-lg font-medium text-foreground" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Por que nós
            </a>
            <a 
              href={getLinkHref("#quem-atendemos")} 
              className="text-lg font-medium text-foreground" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Para quem
            </a>
            <a 
              href={getLinkHref("#metodologia")} 
              className="text-lg font-medium text-foreground" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Como funciona
            </a>
            <Link 
              href="/consultoria-seo"
              className={`text-lg font-medium ${location === "/consultoria-seo" ? "text-primary" : "text-foreground"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Consultoria SEO
            </Link>
            <Link 
              href="/quem-somos"
              className={`text-lg font-medium ${location === "/quem-somos" ? "text-primary" : "text-foreground"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Quem Somos
            </Link>
            <Link 
              href="/blog"
              className={`text-lg font-medium ${location.startsWith("/blog") ? "text-primary" : "text-foreground"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <LeadFormDialog>
              <Button className="w-full bg-primary text-white font-bold">Diagnóstico Gratuito</Button>
            </LeadFormDialog>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
