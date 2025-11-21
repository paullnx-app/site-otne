import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, BarChart3, FileText, Globe, Layout, Search, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/Clean_white_abstract_background_with_orange_data_lines_b69012b2.png";
import { useSEO } from "@/hooks/use-seo";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";

const services = [
  {
    title: "Diagnóstico 360º",
    description: "Análise completa de tudo que influencia seu SEO.",
    items: [
      "Auditoria técnica do site",
      "Indexação, velocidade e Core Web Vitals",
      "Análise estrutural (URLs, headings, HTML)",
      "Qualidade do conteúdo atual",
      "Análise de concorrentes e SERP real",
      "SEO Local (Google Business Profile)",
      "Auditoria de backlinks",
      "Mapa das principais causas de baixo desempenho"
    ],
    result: "Relatório completo + plano de correções prioritárias.",
    icon: Search
  },
  {
    title: "Planejamento Estratégico de SEO",
    description: "Criamos toda a estratégia baseada nos dados do diagnóstico.",
    items: [
      "Pesquisa profunda de palavras-chave",
      "Clusterização por intenção e funil",
      "Arquitetura SEO do site (silos, hubs)",
      "Definição das páginas prioritárias",
      "Estratégia para SEO Local",
      "Guia de escrita SEO (copy + SEO)",
      "Calendário editorial completo"
    ],
    result: "Documento mestre de estratégia (roadmap de 90 dias).",
    icon: Layout
  },
  {
    title: "Implementação Técnica",
    description: "Ajustes essenciais para que o Google “entenda” seu site.",
    items: [
      "Correções de erros técnicos de SEO",
      "Ajustes de performance e velocidade",
      "Melhoria na estrutura de URLs",
      "Configuração de dados estruturados (Schema)",
      "Otimização de imagens e carregamento",
      "Ajustes de tags, metas e headings",
      "Configuração avançada de Search Console",
      "SEO Técnico Local (NAP, categorias, GBP)"
    ],
    result: "Site tecnicamente otimizado e mais rápido.",
    icon: Settings
  },
  {
    title: "Otimização e Criação de Conteúdo",
    description: "Conteúdo pensado para gerar tráfego qualificado e conversão.",
    items: [
      "Revisão e otimização de páginas já existentes",
      "Criação de conteúdos novos",
      "Otimização de páginas de serviço para conversão",
      "Conteúdos estratégicos para SEO Local",
      "Implementação de CTA inteligente e copy",
      "Linkagem interna inteligente",
      "Atualização de conteúdos antigos"
    ],
    result: "Conteúdo que ranqueia e gera leads.",
    icon: FileText
  },
  {
    title: "Autoridade e SEO Local",
    description: "Reforçamos sua relevância no Google e regionalmente.",
    items: [
      "Estratégia completa de SEO Local",
      "Gestão e otimização do Google Business Profile",
      "Criação e otimização de conteúdos locais",
      "Construção de citações e backlinks locais",
      "Estratégia de autoridade digital"
    ],
    result: "Mais visibilidade, presença e relevância na sua região.",
    icon: Globe
  },
  {
    title: "Monitoramento e Evolução Contínua",
    description: "SEO não é “configurar e largar”. É acompanhar e ajustar.",
    items: [
      "Acompanhamento semanal de posições",
      "Relatórios mensais com indicadores chave",
      "Ajustes no roadmap conforme performance",
      "Dashboards com métricas em tempo real",
      "Reuniões recorrentes de alinhamento"
    ],
    result: "Crescimento contínuo e previsível baseado em dados.",
    icon: BarChart3
  }
];

const benefits = [
  "Crescimento de tráfego qualificado",
  "Aumento de leads e oportunidades",
  "Páginas mais fortes para conversão",
  "Redução de CAC",
  "Independência (parcial) de mídia paga",
  "Autoridade digital real",
  "Domínio do SEO Local",
  "Melhoria da percepção de marca",
  "Resultados consistentes mês a mês"
];

export default function ConsultoriaSEO() {
  useSEO({
    title: "Consultoria de SEO Estratégica para Empresas | Rank.ai",
    description: "Aumente seu tráfego orgânico e vendas com nossa Consultoria de SEO. Diagnóstico técnico, estratégia de conteúdo e SEO Local para PMEs."
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Header Section with Hero Background */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden mb-20">
           {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBg} 
              alt="Data Background" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white" />
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 tracking-tight">
                Consultoria de SEO Completa para <br/>
                <span className="text-primary">Pequenas e Médias Empresas</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Estratégia + Correções Técnicas + Conteúdo + SEO Local + Monitoramento. <br/>
                Tudo o que sua empresa precisa para aparecer, atrair clientes e crescer com previsibilidade.
              </p>

              <div className="inline-block p-6 bg-white/80 rounded-2xl border border-border backdrop-blur-sm shadow-sm">
                <p className="text-2xl font-display font-bold text-foreground">
                  "SEO não é sobre visitas. É sobre vendas."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A consultoria foi criada para empresários que querem resultados reais, não relatórios complicados.
              Entramos no seu negócio, analisamos profundamente o cenário atual e construímos uma estratégia completa para fazer seu site aparecer nas posições certas do Google — e transformar essas posições em vendas.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-6 mb-24">
          <h2 className="text-3xl font-display font-bold text-foreground mb-12 text-center">O que está incluído na consultoria</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all p-8 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <service.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6 border-t border-border mt-auto">
                  <p className="text-sm font-bold text-primary flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Resultado: <span className="text-foreground font-normal">{service.result}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-secondary/30 py-20 mb-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">O que sua empresa ganha com isso</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-border shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reinforcement & CTA */}
        <section className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto bg-foreground text-white rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-20" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                "O SEO certo não faz você competir por preço. <br/>
                Ele faz você competir por autoridade."
              </h2>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/10">
                <p className="text-xl text-white/90 font-medium mb-2">
                  Quer saber quanto sua empresa está deixando de ganhar hoje por falta de SEO?
                </p>
                <p className="text-white/70">
                  Solicite um diagnóstico gratuito e mostraremos — com dados — onde estão as oportunidades.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <LeadFormDialog>
                  <Button size="lg" className="h-14 px-8 bg-primary text-white font-bold hover:bg-white hover:text-foreground rounded-xl text-lg shadow-lg shadow-primary/20 w-full sm:w-auto">
                    Quero um diagnóstico gratuito de SEO <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </LeadFormDialog>
                <Button variant="outline" size="lg" className="h-14 px-8 border-white/20 text-white hover:bg-white hover:text-foreground rounded-xl text-lg w-full sm:w-auto bg-transparent">
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-12 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Otne - Consultoria de SEO. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
