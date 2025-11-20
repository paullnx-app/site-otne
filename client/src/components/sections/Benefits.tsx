import { motion } from "framer-motion";
import { BarChart3, Target, Users, Zap, Search, FileText } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Mais Clientes",
    description: "Mais clientes sem depender só de anúncios pagos."
  },
  {
    icon: Target,
    title: "Posicionamento Estratégico",
    description: "Posicionamento estratégico no Google nas buscas certas."
  },
  {
    icon: BarChart3,
    title: "Leads Qualificados",
    description: "Aumento de leads qualificados, não só visitas."
  },
  {
    icon: Zap,
    title: "Site Rápido e Confiável",
    description: "Site mais rápido, organizado e confiável aos olhos do Google."
  },
  {
    icon: FileText,
    title: "Conteúdo para Vender",
    description: "Conteúdos pensados para vender, não apenas para encher blog."
  },
  {
    icon: Search,
    title: "Acompanhamento Contínuo",
    description: "Acompanhamento contínuo, com números e ações claras."
  }
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Por que trabalhar o SEO <br />
            <span className="text-primary">da sua empresa conosco</span>
          </h2>
          <p className="text-xl text-muted-foreground italic">
            "SEO não é sobre aparecer 'em qualquer lugar' no Google, é sobre aparecer na hora certa, para a pessoa certa, com a oferta certa."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary group-hover:text-black" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
