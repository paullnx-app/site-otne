/**
 * Artigo 08
 * Links externos: exatamente 2 (1 autoridade + 1 parceiro).
 */
import seoContinuaFuncionandoImg from "@/assets/images/blog/seo-continua-funcionando.jpg";

const bodyImgClass =
  'class="rounded-xl my-8 w-full max-w-4xl mx-auto object-cover h-[220px] sm:h-[260px]" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 896px"';

export const seoAindaFuncionaEm2026FaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "SEO ainda funciona em 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, funciona, desde que você trate SEO como sistema e não como truque. Em 2026, o que funciona é base técnica, conteúdo de especialista e páginas feitas para converter, não apenas para atrair visitas.",
      },
    },
    {
      "@type": "Question",
      name: "O que não funciona mais em SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não funciona bem publicar conteúdo raso em escala, ignorar mobile e depender de páginas genéricas. Também perdeu força a estratégia de ranquear sem prova real, sem autoria e sem atualização.",
      },
    },
    {
      "@type": "Question",
      name: "O que é E-E-A-T na prática?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "E-E-A-T é mostrar experiência, especialização, autoridade e confiança. Na prática, isso aparece em autoria clara, cases, dados verificáveis, páginas transparentes e reputação fora do seu site.",
      },
    },
    {
      "@type": "Question",
      name: "SEO local ainda vale a pena no Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vale muito para negócios que atendem cidade ou bairro. Perfil da empresa, reviews e páginas por serviço e região costumam trazer demanda pronta para compra.",
      },
    },
    {
      "@type": "Question",
      name: "Como começar um plano de 90 dias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comece com diagnóstico técnico, ajuste as páginas de serviço e publique um cluster de conteúdo baseado em perguntas reais. Meça por lead e revise semanalmente.",
      },
    },
  ],
} as const;

const sections: string[] = [
  `<p class="lead"><strong>SEO ainda funciona em 2026?</strong> Sim, com uma condição: você precisa parar de tratar SEO como lista de hacks. O SEO que funciona hoje é o que melhora a experiência do usuário e deixa claro por que sua empresa é a escolha certa.</p>

<p>Se você quer o panorama do ano, aqui está o pilar: <a href="/blog/guia-seo-2026" class="text-primary font-bold hover:underline">guia completo de SEO para 2026</a>.</p>`,

  `<h2>A resposta direta</h2>
<p><strong>Sim, SEO funciona.</strong> O que mudou foi o filtro. Conteúdo raso perdeu espaço. Páginas que resolvem a intenção e convertem ganharam valor.</p>

<p>Para referência oficial sobre como o Google orienta a criação de conteúdo útil, use: <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Helpful Content no Search Central</a>.</p>`,

  `<h2>O que não funciona mais</h2>
<ul class="space-y-2 list-disc pl-5 mb-6">
  <li>publicar volume sem revisão e sem experiência real;</li>
  <li>site lento e ruim no celular;</li>
  <li>página de serviço genérica, sem prova e sem processo.</li>
</ul>`,

  `<h2>Estratégia 1: E-E-A-T com prova verificável</h2>
<p>O caminho mais curto para fortalecer E-E-A-T é mostrar prova: quem escreve, o que já fez e como entrega. Conteúdo que parece catálogo de promessas não sustenta.</p>

<img src="${seoContinuaFuncionandoImg.src}" alt="SEO continua funcionando em 2026 sustentado por conteúdo, autoridade e técnica" ${bodyImgClass} />`,

  `<h2>Estratégia 2: SEO local como oportunidade subestimada</h2>
<p>Para negócio local, o melhor SEO é o que coloca você no mapa e no top 3. Se isso vale para seu caso, este guia é o ponto de partida: <a href="/blog/seo-local-para-pequenas-empresas" class="text-primary font-bold hover:underline">SEO local para pequenas empresas</a>.</p>
`,

  `<h2>Estratégia 3: conteúdo baseado em perguntas reais</h2>
<p>O conteúdo que funciona em 2026 nasce do que o cliente pergunta no WhatsApp. Estruture H2 como perguntas e responda em 2 ou 3 frases antes de aprofundar. Isso ajuda SEO, AEO e GEO ao mesmo tempo.</p>`,

  `<h2>Roteiro de 90 dias para começar</h2>
<ol class="space-y-2 list-decimal pl-5 mb-6">
  <li><strong>Semana 1 a 2:</strong> diagnóstico técnico e correções críticas.</li>
  <li><strong>Semana 3 a 6:</strong> reescrever as páginas de serviço e criar o FAQ.</li>
  <li><strong>Semana 7 a 12:</strong> publicar 6 conteúdos do mesmo cluster e conectar com linkagem interna.</li>
</ol>

<p>Se você precisa de um site bem estruturado desde a base, um exemplo de referência de como isso é vendido para PMEs é o portfólio da ConsultingWeb: <a href="https://www.consultingweb.com.br/portfolio" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">sites que ranqueiam no Google</a>.</p>`,

  `<h2>FAQ</h2>
<h3>SEO ainda funciona em 2026?</h3>
<p>Sim, funciona quando você trata SEO como sistema: técnico, conteúdo de especialista e páginas feitas para converter.</p>

<h3>O que não funciona mais em SEO?</h3>
<p>Conteúdo raso em escala, mobile ruim e páginas genéricas sem prova e sem atualização.</p>

<h3>O que é E-E-A-T na prática?</h3>
<p>Autoria clara, cases, dados verificáveis, páginas transparentes e reputação fora do seu site.</p>

<h3>SEO local ainda vale a pena no Brasil?</h3>
<p>Vale muito para o negócio que atende cidade ou bairro, com perfil, reviews e páginas por serviço.</p>

<h3>Como começar um plano de 90 dias?</h3>
<p>Diagnóstico técnico, ajuste das páginas de serviço e cluster de conteúdo baseado em perguntas reais, medindo por lead.</p>`,

  `<p>SEO ainda vale a pena. O que não vale é insistir em estratégia velha com cara de 2020. Se você quer escolher o que fazer primeiro, com impacto em caixa, fale com a Otne.</p>

<div class="bg-primary/5 p-8 rounded-lg my-10 text-center border border-primary/20 shadow-sm">
  <h3 class="text-2xl font-bold mb-4 text-primary">Veja qual estratégia se aplica ao seu negócio</h3>
  <p class="mb-6 text-muted-foreground max-w-2xl mx-auto">A gente define prioridades e cronograma realista. Sem promessa mágica.</p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="/consultoria-seo" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Quero um plano de 90 dias</a>
    <a href="/blog" class="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">Ler mais</a>
  </div>
</div>`,
];

export const seoAindaFuncionaEm2026Html = sections.join("\n\n");
