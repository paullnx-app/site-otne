import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter text-white">
          RANK<span className="text-primary">.AI</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Services</a>
          <a href="#methodology" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Methodology</a>
          <a href="#results" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Results</a>
          <Button variant="default" className="bg-primary text-black font-bold hover:bg-primary/90 rounded-full px-6">
            Free Audit
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
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
            className="absolute top-full left-0 w-full bg-background border-b border-white/5 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#services" className="text-lg font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#methodology" className="text-lg font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Methodology</a>
            <a href="#results" className="text-lg font-medium text-white" onClick={() => setMobileMenuOpen(false)}>Results</a>
            <Button className="w-full bg-primary text-black font-bold">Free Audit</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
