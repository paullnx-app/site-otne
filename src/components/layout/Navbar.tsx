"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  const getLinkHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? "bg-white/90 backdrop-blur-md border-b border-border py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-display font-bold tracking-tighter text-foreground cursor-pointer">
          Otne<span className="text-primary">.seo</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href={getLinkHref("#beneficios")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Por que nós
          </a>
          <a href={getLinkHref("#quem-atendemos")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Para quem
          </a>
          <a href={getLinkHref("#metodologia")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Como funciona
          </a>

          <Link href="/consultoria-seo" className={`text-sm font-medium transition-colors ${pathname === "/consultoria-seo" ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>
            Consultoria SEO
          </Link>
          <Link href="/quem-somos" className={`text-sm font-medium transition-colors ${pathname === "/quem-somos" ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>
            Quem Somos
          </Link>
          <Link href="/blog" className={`text-sm font-medium transition-colors ${pathname.startsWith("/blog") ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>
            Blog
          </Link>

          <a href="https://wa.me/553133609525" target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="bg-primary text-white font-bold hover:bg-primary/90 rounded-full px-6 shadow-md shadow-primary/20">
              Diagnóstico Gratuito
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden text-foreground"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav — CSS animation avoids framer-motion on the critical path */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-border p-6 flex flex-col gap-4 md:hidden shadow-xl animate-nav-menu-in">
            <a href={getLinkHref("#beneficios")} className="text-lg font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>
              Por que nós
            </a>
            <a href={getLinkHref("#quem-atendemos")} className="text-lg font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>
              Para quem
            </a>
            <a href={getLinkHref("#metodologia")} className="text-lg font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>
              Como funciona
            </a>
            <Link href="/consultoria-seo" className={`text-lg font-medium ${pathname === "/consultoria-seo" ? "text-primary" : "text-foreground"}`} onClick={() => setMobileMenuOpen(false)}>
              Consultoria SEO
            </Link>
            <Link href="/quem-somos" className={`text-lg font-medium ${pathname === "/quem-somos" ? "text-primary" : "text-foreground"}`} onClick={() => setMobileMenuOpen(false)}>
              Quem Somos
            </Link>
            <Link href="/blog" className={`text-lg font-medium ${pathname.startsWith("/blog") ? "text-primary" : "text-foreground"}`} onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <a href="https://wa.me/553133609525" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full bg-primary text-white font-bold">Diagnóstico Gratuito</Button>
            </a>
          </div>
        )}
    </nav>
  );
}
