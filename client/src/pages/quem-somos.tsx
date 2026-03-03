import { Navbar } from "@/components/layout/Navbar";
import { useSEO } from "@/hooks/use-seo";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Trophy, Handshake, ArrowRight } from "lucide-react";
import teamImg from "@/assets/images/about/team-meeting.jpg";
import officeImg from "@/assets/images/about/office-space.jpg";
import { Button } from "@/components/ui/button";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";

export default function QuemSomos() {
  useSEO({
    title: "Quem Somos | Otne SEO - Consultoria de SEO Especializada",
    description: "Conheça a Otne SEO, consultoria focada em resultados reais para PMEs. Nossa missão, valores e por que somos diferentes das agências tradicionais."
  });

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Otne SEO",
      "description": "Consultoria de SEO especializada em pequenas e médias empresas.",
      "foundingDate": "2020",
      "url": "https://www.otne.com.br",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-31-3360-9525",
        "contactType": "customer service"
      }
    }
  };

  const values = [
    {
      icon: Target,
      title: "Resultado Real",
      description: "Não vendemos relatórios de vaidade. Nosso foco é tráfego qualificado que vira venda."
    },
    {
      icon: Lightbulb,
      title: "Transparência Radical",
      description: "Você vai saber exatamente o que estamos fazendo e porquê. Sem caixa preta."
    },
    {
      icon: Users,
      title: "Parceria Próxima",
      description: "Não somos apenas fornecedores. Entramos no seu negócio como um braço estratégico."
    },
    {
      icon: Trophy,
      title: "Excelência Técnica",
      description: "SEO muda todo dia. Nossa obsessão é estar sempre à frente das atualizações do Google."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup data={organizationSchema} />
      <Navbar />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">
              Sobre a Otne SEO
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-8">
              Não somos uma agência de marketing 360º. <br/>
              <span className="text-primary">Somos especialistas em SEO.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Nascemos de uma frustração: ver pequenas empresas gastando fortunas em anúncios pagos sem construir nenhum ativo digital próprio. Decidimos mudar isso.
            </p>
          </motion.div>
        </section>

        {/* Our Story / Mission */}
        <section className="container mx-auto px-6 mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={teamImg} 
                  alt="Equipe Otne SEO reunida analisando dados" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-border max-w-xs hidden md:block">
                <p className="text-4xl font-display font-bold text-primary mb-1">+50</p>
                <p className="text-sm text-muted-foreground font-medium">Projetos de PMEs alavancados nos últimos 2 anos</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Nossa Missão: Democratizar o SEO de Alta Performance
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Durante anos, o SEO técnico de verdade estava restrito a grandes corporações com orçamentos milionários. As pequenas empresas ficavam reféns de "pacotes básicos" que não traziam resultado, ou dependentes eternamente do Google Ads.
                </p>
                <p>
                  A <strong>Otne SEO</strong> foi fundada para quebrar esse ciclo. Acreditamos que uma padaria local, um escritório de advocacia ou uma startup nascente merecem a mesma qualidade técnica de SEO que um gigante do varejo.
                </p>
                <p>
                  Usamos inteligência de dados, automação e uma metodologia proprietária para entregar resultados de elite com um investimento que faz sentido para o seu momento de negócio.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Methodology / Values */}
        <section className="bg-secondary/30 py-24 mb-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Nossos Pilares
              </h2>
              <p className="text-lg text-muted-foreground">
                O que guia cada decisão técnica e estratégica que tomamos para o seu site.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Office / Culture */}
        <section className="container mx-auto px-6 mb-24">
          <div className="bg-black text-white rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-40">
              <img 
                src={officeImg} 
                alt="Escritório moderno" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
            
            <div className="relative z-10 p-12 md:p-24 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                Queremos ser o último parceiro de SEO que você vai contratar.
              </h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                A maioria dos nossos clientes chega até nós depois de experiências frustrantes com outras agências. Nosso objetivo é simples: entregar tanto valor que você nunca mais precise procurar outra consultoria.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/553133609525" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-primary text-white font-bold hover:bg-primary/90 text-lg h-14 px-8 rounded-xl w-full">
                    Converse com um Especialista
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Otne SEO - Consultoria de SEO. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}