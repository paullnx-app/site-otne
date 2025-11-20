import { motion } from "framer-motion";
import { Search, Map, Settings, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import prismImg from "@assets/generated_images/3D_glass_prism_on_white_background_with_orange_light_4ab32b32.png";

const steps = [
  {
    id: "01",
    title: "Diagnóstico 360º",
    desc: "Análise completa do site, mercado e concorrentes. Identificação de tudo o que trava o crescimento orgânico hoje: parte técnica, conteúdo, SEO Local, autoridade e experiência do usuário.",
    icon: Search
  },
  {
    id: "02",
    title: "Estratégia sob Medida",
    desc: "Transformação do diagnóstico em um plano prático: palavras-chave certas, prioridades, mapa de conteúdo, ajustes técnicos e oportunidades rápidas de ganho.",
    icon: Map
  },
  {
    id: "03",
    title: "Implementação e Ajustes",
    desc: "Execução do plano na prática: otimizações no site, estrutura, páginas de serviço, blog, Google Business Profile e demais pontos definidos na estratégia.",
    icon: Settings
  },
  {
    id: "04",
    title: "Acompanhamento e Evolução",
    desc: "SEO não é algo que se faz uma vez só. Monitoramento de números, ajuste de rotas e busca de melhorias contínuas para manter e ampliar resultados.",
    icon: TrendingUp
  }
];

export function Methodology() {
  return (
    <section id="metodologia" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Prism Background */}
      <div className="absolute left-0 top-1/4 w-1/3 opacity-10 pointer-events-none">
        <img src={prismImg} alt="" className="w-full h-auto mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Como funciona a consultoria <br/>
            <span className="text-primary">na prática</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Nada de relatórios complicados e ações soltas. O cliente sabe exatamente <strong>o que será feito, quando e por quê</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex flex-col gap-6 w-full">
                <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <step.icon className="w-7 h-7" />
                    </div>
                    <span className="text-5xl font-display font-bold text-slate-100 select-none">
                        {step.id}
                    </span>
                </div>
                
                <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">
                        {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {step.desc}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <p className="text-foreground mb-6 font-medium">Quer ver como isso se aplica ao seu negócio?</p>
           <Button size="lg" className="h-14 px-8 bg-primary text-white font-bold hover:bg-primary/90 rounded-xl text-lg shadow-lg shadow-primary/20">
             Solicitar diagnóstico gratuito <ArrowRight className="ml-2 w-5 h-5" />
           </Button>
        </div>

      </div>
    </section>
  );
}
