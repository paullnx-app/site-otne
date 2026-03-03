import { motion } from "framer-motion";
import { BarChart3, Globe, Layers, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Technical SEO",
    description: "Deep architecture audits, Core Web Vitals optimization, and JS rendering fixes."
  },
  {
    icon: Layers,
    title: "Content Architecture",
    description: "Topic clusters and semantic mapping designed to dominate topical authority."
  },
  {
    icon: BarChart3,
    title: "Data-Led PR",
    description: "High-authority backlink acquisition through viral data studies and digital PR."
  },
  {
    icon: Zap,
    title: "Conversion Rate",
    description: "Turning traffic into revenue with behavioral analysis and UX optimization."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Precision Engineering for <span className="text-primary">Rankings</span>
          </h2>
          <p className="text-muted-foreground">
            No fluff. Just executed strategies that move the needle for enterprise brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                <Icon className="w-6 h-6 text-primary group-hover:text-black" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
