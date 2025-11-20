import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroBg from "@assets/generated_images/Abstract_dark_data_visualization_background_7d33090a.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Data Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-white/80 uppercase tracking-widest">AI-Powered SEO V2.0</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Dominate the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Search Results</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We don't just chase keywords. We engineer organic growth engines using data-driven strategies and next-gen technical SEO.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-xl mx-auto bg-white/5 backdrop-blur-md p-2 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-2 shadow-2xl shadow-primary/5"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              type="url" 
              placeholder="Enter your website URL..." 
              className="w-full h-12 pl-12 bg-transparent border-none text-white placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <Button size="lg" className="h-12 px-8 bg-primary text-black font-bold hover:bg-primary/90 rounded-xl whitespace-nowrap">
            Analyze Now <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {/* Mock Logos */}
          {["Google", "Semrush", "Ahrefs", "Moz"].map((logo) => (
            <span key={logo} className="text-xl font-display font-bold text-white/40">{logo}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
