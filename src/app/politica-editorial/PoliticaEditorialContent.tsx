"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, RefreshCw, Mail, FileText, Users, AlertCircle } from "lucide-react";

const LAST_REVIEW = "21 de abril de 2026";
const EDITOR_NAME = "Paul Leite";
const EDITOR_ROLE = "Fundador e editor-chefe, Otne SEO";
const EDITOR_URL = "/autor/paul-leite";
const CONTACT_EMAIL = "contato@otne.com.br";

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Política editorial | Otne SEO",
  url: "https://www.otne.com.br/politica-editorial",
  description:
    "Como produzimos, revisamos e atualizamos os conteúdos do blog Otne SEO.",
  publisher: {
    "@type": "Organization",
    name: "Otne SEO",
    url: "https://www.otne.com.br",
  },
  dateModified: "2026-04-21",
};

const sections = [
  {
    icon: Users,
    title: "1. Autoria humana",
    content: (
      <>
        <p>
          Todos os artigos publicados no blog da Otne SEO são <strong>escritos, revisados e publicados por profissionais humanos</strong>. A inteligência artificial é usada exclusivamente como ferramenta de apoio — pesquisa de dados, checagem de termos técnicos e brainstorming de estrutura. O texto final, a análise, as opiniões e as revisões são sempre responsabilidade de um profissional identificado.
        </p>
        <p className="mt-4">
          O editor responsável pela linha editorial é{" "}
          <Link href={EDITOR_URL} className="text-primary font-semibold hover:underline">
            {EDITOR_NAME}
          </Link>
          , {EDITOR_ROLE}.
        </p>
      </>
    ),
  },
  {
    icon: FileText,
    title: "2. Processo de produção",
    content: (
      <ol className="list-decimal list-inside space-y-2 text-foreground/80">
        <li><strong>Briefing:</strong> definição de keyword principal (única no site), intenção de busca e ângulo editorial.</li>
        <li><strong>Pesquisa:</strong> fontes primárias consultadas — Google Search Central, estudos de setor, dados de ferramentas (Search Console, PageSpeed Insights, Semrush) e experiência prática com clientes.</li>
        <li><strong>Rascunho:</strong> texto produzido por redator ou consultor humano. IA pode sugerir estrutura, não escreve o artigo.</li>
        <li><strong>Revisão técnica:</strong> verificação de precisão das informações, links e dados.</li>
        <li><strong>Revisão editorial:</strong> checagem de gramática, voz da marca, sentence case, acentuação em pt-BR e ausência de marcadores de texto gerado por IA.</li>
        <li><strong>Publicação:</strong> artigo publicado com autor identificado, data de publicação e schema <code>BlogPosting</code> completo.</li>
      </ol>
    ),
  },
  {
    icon: RefreshCw,
    title: "3. Atualização e freshness",
    content: (
      <>
        <p>
          Artigos evergreen são revisados a cada <strong>6 a 12 meses</strong> ou sempre que houver mudança relevante no tema (novo core update do Google, mudança de interface de ferramenta, dado desatualizado). Atualizações substantivas geram:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-3 text-foreground/80">
          <li>Atualização do campo <code>dateModified</code> no schema <code>BlogPosting</code>.</li>
          <li>Exibição do selo <em>"Atualizado em DD/MM/AAAA"</em> no cabeçalho do artigo.</li>
          <li>Atualização do <code>lastmod</code> no sitemap.xml.</li>
        </ul>
        <p className="mt-4">
          Correções de digitação sem impacto no conteúdo não geram atualização de data.
        </p>
      </>
    ),
  },
  {
    icon: CheckCircle2,
    title: "4. Fontes e verificação de fatos",
    content: (
      <>
        <p>
          Priorizamos fontes primárias: documentação oficial do Google, dados de ferramentas de SEO, estudos de setor com metodologia pública e experiência direta com clientes. Quando citamos um dado, indicamos origem e período.
        </p>
        <p className="mt-4">
          <strong>Não publicamos dados sem atribuição.</strong> Quando a informação vem da nossa própria operação, declaramos explicitamente — "na nossa operação com X clientes em 2026" ou equivalente.
        </p>
      </>
    ),
  },
  {
    icon: AlertCircle,
    title: "5. Afiliação e parcerias",
    content: (
      <p>
        Quando um artigo contém link para um parceiro comercial da Otne SEO, isso é sinalizado no próprio texto com a descrição da relação. Não aceitamos links pagos não identificados. A seleção de parceiros leva em conta relevância editorial e não prejudica a independência do conteúdo.
      </p>
    ),
  },
  {
    icon: Mail,
    title: "6. Política de correções e contato",
    content: (
      <>
        <p>
          Encontrou um erro factual, link quebrado ou dado desatualizado? Envie um e-mail para{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary font-semibold hover:underline">
            {CONTACT_EMAIL}
          </a>{" "}
          com o título "Correção editorial" e a URL do artigo. Analisamos toda sugestão e respondemos em até 5 dias úteis.
        </p>
        <p className="mt-4">
          Correções aceitas são aplicadas imediatamente e o artigo recebe atualização de <code>dateModified</code> quando o erro impactava a compreensão do conteúdo.
        </p>
      </>
    ),
  },
];

export function PoliticaEditorialContent() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup data={webPageSchema} />
      <Navbar />

      <main className="pt-32 pb-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[780px] mx-auto"
        >
          {/* Header */}
          <div className="mb-14">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
              Transparência editorial
            </p>
            <h1 className="text-4xl md:text-[46px] font-display font-bold text-foreground leading-tight mb-6">
              Política editorial
            </h1>
            <p className="text-[19px] text-foreground/70 leading-[1.8]">
              Como produzimos, revisamos e atualizamos os conteúdos do blog Otne SEO. Esta página existe para que você saiba exatamente em quem está confiando quando lê um artigo nosso.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Última revisão desta política:{" "}
              <time dateTime="2026-04-21" className="font-medium text-foreground">
                {LAST_REVIEW}
              </time>
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-14">
            {sections.map((section, i) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h2 className="text-xl font-display font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>
                <div className="pl-12 text-[17px] text-foreground/80 leading-[1.85]">
                  {section.content}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Editor box */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="mt-16 border border-border rounded-2xl p-8 bg-secondary/30"
          >
            <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-2">
              Editor responsável
            </p>
            <p className="text-xl font-display font-bold text-foreground mb-1">
              <Link href={EDITOR_URL} className="hover:text-primary transition-colors">
                {EDITOR_NAME}
              </Link>
            </p>
            <p className="text-muted-foreground text-sm mb-4">{EDITOR_ROLE}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
            >
              <Mail className="w-4 h-4" />
              {CONTACT_EMAIL}
            </a>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
