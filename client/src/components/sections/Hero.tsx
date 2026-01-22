import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/Clean_white_abstract_background_with_orange_data_lines_b69012b2.png";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Data Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-foreground/80 uppercase tracking-widest">Consultoria SEO Especializada</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground tracking-tight mb-6 leading-[1.1]">
            Consultoria de SEO para <br />
            <span className="text-primary text-[65px]">empresas que querem crescer</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Se você já investe em site, conteúdo ou anúncios, mas sente que “o Google não funciona” para o seu negócio, o problema não é o canal — é a estratégia. Ajudamos empresários e gestores a organizarem o SEO de forma simples, técnica e orientada a resultados: mais visitas qualificadas, mais leads e mais vendas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <LeadFormDialog>
            <Button size="lg" className="h-14 px-8 bg-primary text-white font-bold hover:bg-primary/90 rounded-xl text-lg w-full sm:w-auto shadow-lg shadow-primary/20">
              Quero um diagnóstico gratuito <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </LeadFormDialog>
          
          <a href="#metodologia">
            <Button variant="outline" size="lg" className="h-14 px-8 border-border text-foreground hover:bg-secondary rounded-xl text-lg w-full sm:w-auto shadow-sm bg-white">
              Ver como funciona a consultoria
            </Button>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="relative inline-block group cursor-default">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-0 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative bg-white/60 backdrop-blur-md border border-black/5 rounded-xl py-4 px-6 text-sm md:text-base text-muted-foreground leading-relaxed shadow-sm">
              <span className="font-bold text-primary block md:inline md:mr-2 mb-1 md:mb-0">
                O que é SEO?
              </span>
              É organizar o seu site para que o Google entenda que você é a melhor resposta para o seu cliente, colocando sua empresa no topo das buscas.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
