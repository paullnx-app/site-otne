"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function TargetAudience() {
  return (
    <section id="quem-atendemos" className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Para quem é a <br />
              <span className="text-primary">Consultoria de SEO</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A consultoria é focada em <strong>empresários, gestores e profissionais</strong> que já entenderam que precisam estar bem posicionados no Google, mas não têm tempo ou equipe interna para montar uma estratégia sólida.
            </p>
            
            <div className="p-8 bg-secondary rounded-2xl border border-border mb-8">
              <p className="text-foreground/80 font-medium italic text-lg leading-relaxed">
                "Se você já tem ou está construindo um site, atende clientes recorrentemente e quer que o Google trabalhe a seu favor todos os dias, a consultoria foi desenhada para você."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {[
              "Pequenas e médias empresas que querem crescer com previsibilidade.",
              "Empresas de serviços que dependem de leads (B2B e B2C).",
              "Negócios locais (clínicas, escritórios, coworkings, etc.) que precisam dominar o SEO Local.",
              "Empreendedores digitais e infoprodutores que querem escalar tráfego orgânico.",
              "E-commerces menores que precisam competir com players maiores com inteligência, não só com verba."
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-border hover:border-primary/30 hover:shadow-md transition-all">
                <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-foreground/90 font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
