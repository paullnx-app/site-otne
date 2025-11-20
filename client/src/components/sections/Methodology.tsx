import { motion } from "framer-motion";
import { Search, Map, Settings, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import prismImg from "@assets/generated_images/3D_glass_prism_refracting_orange_light_d8ad0b15.png";

const steps = [
  {
    id: "01",
    title: "Diagnóstico 360º",
    desc: "Analisamos o seu site, seu mercado e seus concorrentes. Identificamos tudo o que trava seu crescimento orgânico hoje: parte técnica, conteúdo, SEO Local, autoridade e experiência do usuário.",
    icon: Search
  },
  {
    id: "02",
    title: "Estratégia sob Medida",
    desc: "Transformamos o diagnóstico em um plano prático: palavras-chave certas, prioridades, mapa de conteúdo, ajustes técnicos e oportunidades rápidas de ganho.",
    icon: Map
  },
  {
    id: "03",
    title: "Implementação e Ajustes",
    desc: "Colocamos o plano em prática: otimizações no site, estrutura, páginas de serviço, blog, Google Business Profile e demais pontos definidos na estratégia.",
    icon: Settings
  },
  {
    id: "04",
    title: "Acompanhamento e Evolução",
    desc: "SEO não é algo que se faz uma vez só. Acompanhamos seus números, ajustamos rotas e buscamos melhorias contínuas para manter e ampliar resultados.",
    icon: TrendingUp
  }
];

export function Methodology() {
  return (
    <section id="metodologia" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Prism Background */}
      <div className="absolute right-0 top-1/4 w-1/2 opacity-10 pointer-events-none mix-blend-screen">
        <img src={prismImg} alt="" className="w-full h-auto rotate-180" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Como funciona a consultoria de SEO <span className="text-primary">na prática</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Nada de relatórios complicados e ações soltas. Você vai saber exatamente <strong>o que será feito, quando e por quê</strong>. O processo é dividido em etapas claras:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-12 border-l border-white/10 pb-12 last:pb-0"
            >
              <div className="absolute left-[-24px] top-0 flex items-center justify-center w-12 h-12 rounded-full bg-background border border-primary/30 text-primary font-mono font-bold shadow-[0_0_15px_rgba(255,119,43,0.2)]">
                {step.id}
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
           <p className="text-white mb-6 font-medium">Quer ver como isso se aplica ao seu negócio?</p>
           <Button size="lg" className="h-14 px-8 bg-primary text-white font-bold hover:bg-primary/90 rounded-xl text-lg shadow-[0_0_30px_rgba(255,119,43,0.2)]">
             Solicitar diagnóstico gratuito <ArrowRight className="ml-2 w-5 h-5" />
           </Button>
        </div>

      </div>
    </section>
  );
}
