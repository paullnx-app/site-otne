import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Trust() {
  return (
    <section id="confianca" className="py-24 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Por que confiar <br />
              <span className="text-primary">no meu trabalho</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Ao longo dos últimos anos, ajudei diversas empresas a organizarem sua presença digital, estruturarem seus sites e melhorarem a aquisição de clientes.
              </p>
              <p>
                A consultoria de SEO nasceu justamente da prática: entender o que funciona no dia a dia de quem precisa vender, não só gerar relatórios bonitos.
              </p>
            </div>

            <div className="mt-10">
              <h4 className="text-foreground font-bold mb-4">Pronto para ver onde o Google está desperdiçando oportunidades para o seu negócio?</h4>
              <a href="https://wa.me/553133609525" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-8 bg-primary text-white font-bold hover:bg-primary/90 rounded-xl text-lg w-full sm:w-auto shadow-lg shadow-primary/20">
                  Quero meu diagnóstico gratuito <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full opacity-50 blur-3xl" />
            <Card className="bg-white border border-border p-10 shadow-xl relative z-10 rounded-3xl">
              <div className="space-y-10">
                <div>
                  <h3 className="text-6xl font-display font-bold text-foreground mb-2 tracking-tight">SEO</h3>
                  <p className="text-muted-foreground font-medium text-lg">Otimização para Motores de Busca</p>
                </div>
                
                <div className="h-px w-full bg-border" />
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="block text-4xl font-bold text-primary mb-2">360º</span>
                    <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Visão Completa</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-bold text-primary mb-2">100%</span>
                    <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Foco em Vendas</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
