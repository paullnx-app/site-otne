import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import prismImg from "@assets/generated_images/3D_glass_prism_refracting_light_2acae17c.png";

export function Methodology() {
  return (
    <section id="methodology" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-50" />
            <img 
              src={prismImg} 
              alt="Transparent Methodology" 
              className="relative z-10 rounded-3xl border border-white/10 shadow-2xl w-full max-w-md mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Crystal Clear <br />
              <span className="text-primary">Methodology</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              The SEO industry is full of smoke and mirrors. We built our consultancy on radical transparency. You see exactly what we do, why we do it, and the impact it has.
            </p>

            <ul className="space-y-4">
              {[
                "Real-time Dashboard Access",
                "Monthly ROI & Attribution Reports",
                "Quarterly Strategy Pivots",
                "Direct Access to Technical Leads"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
