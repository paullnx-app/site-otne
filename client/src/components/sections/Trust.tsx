import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Trust() {
  return (
    <section id="confianca" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
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
              <h4 className="text-white font-bold mb-4">Pronto para ver onde o Google está desperdiçando oportunidades para o seu negócio?</h4>
              <Button size="lg" className="h-14 px-8 bg-primary text-white font-bold hover:bg-primary/90 rounded-xl text-lg w-full sm:w-auto shadow-[0_0_30px_rgba(255,119,43,0.2)]">
                Quero meu diagnóstico gratuito <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-[80px] rounded-full opacity-30" />
            <Card className="bg-background/80 border-white/10 p-8 backdrop-blur-md relative z-10">
              <div className="space-y-8">
                <div>
                  <h3 className="text-6xl font-display font-bold text-white mb-2">SEO</h3>
                  <p className="text-muted-foreground">Otimização para Motores de Busca</p>
                </div>
                
                <div className="h-px w-full bg-white/10" />
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="block text-3xl font-bold text-primary mb-1">360º</span>
                    <span className="text-sm text-white/60">Visão Completa</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-bold text-primary mb-1">100%</span>
                    <span className="text-sm text-white/60">Foco em Vendas</span>
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
