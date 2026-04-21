/**
 * Artigo 07
 * Links externos: exatamente 2 (2 autoridade).
 */
import marketingDigitalImg from "@/assets/images/blog/marketing-digital-empreendedores.png";
import futureSeoImg from "@/assets/images/blog/tendencias-seo-2026.jpg";

const bodyImgClass =
  'class="rounded-xl my-8 w-full max-w-4xl mx-auto object-cover h-[220px] sm:h-[260px]" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 896px"';

export const oQueMudouNaBuscaNoInicioDe2026FaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que aconteceu de mais importante no SEO no início de 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O início de 2026 foi marcado por mais volatilidade de ranking, mais espaço para respostas com IA e uma exigência maior de confiança e experiência real no conteúdo. Para os negócios, isso significa menos tolerância a páginas genéricas.",
      },
    },
    {
      "@type": "Question",
      name: "O que é Google AI Mode e por que importa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Mode é uma forma de busca em que a resposta gerada tem mais destaque e organiza o caminho do usuário. Isso muda onde o clique acontece e aumenta o valor de ser citado como fonte confiável.",
      },
    },
    {
      "@type": "Question",
      name: "Como core updates e spam updates afetam um negócio pequeno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Afetam porque redistribuem a visibilidade. Se seu site depende de orgânico, uma queda pode impactar o caixa. O antídoto é base técnica, páginas de serviço fortes e conteúdo com prova.",
      },
    },
    {
      "@type": "Question",
      name: "O que parou de funcionar em 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conteúdo raso feito para volume, páginas sem autoria e sites lentos no celular. Também perdeu força a estratégia de publicar sem atualizar nada e esperar ranking permanente.",
      },
    },
    {
      "@type": "Question",
      name: "Quais são as 3 prioridades para o próximo trimestre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Priorize: corrigir a base técnica, fortalecer as páginas que geram lead e criar um cluster de autoridade com perguntas reais. Isso protege seu tráfego em cenários de mudança.",
      },
    },
  ],
} as const;

const sections: string[] = [
  `<p class="lead"><strong>Novidades de SEO em 2026</strong> não faltaram. E, para o empresário, isso é um problema: o barulho é grande e o tempo é curto. Aqui vai um resumo direto do que mudou no início de 2026 e o que fazer na prática.</p>

<p>Se você precisa do panorama completo de SEO para o ano, leia também: <a href="/blog/guia-seo-2026" class="text-primary font-bold hover:underline">guia completo de SEO para 2026</a>.</p>`,

  `<h2>Por que o Q1 de 2026 foi tão agitado</h2>
<p>Mais mudanças em interfaces de busca, mais foco em confiança e mais volatilidade. Quando isso acontece, o que estava "ok" vira fraco.</p>

<p>Para acompanhar comunicações oficiais das atualizações e incidentes, use: <a href="https://status.search.google.com/" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Google Search Status Dashboard</a>.</p>

<img src="${futureSeoImg.src}" alt="Tendências de SEO e mudanças na busca com impacto em 2026" ${bodyImgClass} />`,

  `<h2>O que está em alta: busca com IA em ascensão acelerada</h2>
<p>O usuário quer resposta pronta. Isso puxa AEO e GEO para o centro do jogo. Títulos em pergunta, respostas curtas e conteúdo estruturado passaram a valer mais.</p>

<p>Se você quer entender essa lógica com um exemplo prático, comece aqui: <a href="/blog/seo-ou-inteligencia-artificial-onde-apostar-2026" class="text-primary font-bold hover:underline">SEO ou IA: onde apostar</a>.</p>`,

  `<h2>O que perdeu força: táticas que pararam de funcionar</h2>
<ul class="space-y-2 list-disc pl-5 mb-6">
  <li>publicar volume sem revisão humana;</li>
  <li>página de serviço genérica, sem prova e sem processo;</li>
  <li>site lento no celular e arquitetura confusa.</li>
</ul>

<img src="${marketingDigitalImg.src}" alt="Empresário organizando prioridades de marketing e SEO com foco em resultado" ${bodyImgClass} />`,

  `<h2>As 3 prioridades para o próximo trimestre</h2>
<ol class="space-y-2 list-decimal pl-5 mb-6">
  <li><strong>Base técnica:</strong> performance, indexação e experiência mobile.</li>
  <li><strong>Páginas que vendem:</strong> oferta clara, prova e CTA direto.</li>
  <li><strong>Cluster de autoridade:</strong> 6 a 10 conteúdos profundos conectados.</li>
</ol>

<p>Se você quer um plano de 90 dias com foco em caixa, este texto complementa: <a href="/blog/marketing-digital-para-empresarios" class="text-primary font-bold hover:underline">marketing digital para empresários</a>.</p>`,

  `<h2>FAQ</h2>
<h3>O que aconteceu de mais importante no SEO no início de 2026?</h3>
<p>Mais volatilidade de ranking, mais espaço para respostas com IA e mais exigência de confiança e experiência real.</p>

<h3>O que é Google AI Mode e por que importa?</h3>
<p>Uma forma de busca em que a resposta gerada ganha destaque, mudando onde o clique acontece e aumentando o valor de ser citado como fonte.</p>

<h3>Como core updates e spam updates afetam um negócio pequeno?</h3>
<p>Eles redistribuem a visibilidade. Se você depende de orgânico, uma queda pode afetar o caixa. A proteção vem de base técnica e páginas fortes.</p>

<h3>O que parou de funcionar em 2026?</h3>
<p>Conteúdo raso feito para volume, páginas sem autoria e sites lentos no celular.</p>

<h3>Quais são as 3 prioridades para o próximo trimestre?</h3>
<p>Corrigir a base técnica, fortalecer as páginas que geram lead e criar um cluster de autoridade com perguntas reais.</p>`,

  `<p>O resumo executivo do Q1 de 2026 é simples: quem trabalha com método ganha respiro, quem vive de atalho sofre. Se você quer montar um plano trimestral e medir por lead, fale com a Otne.</p>

<div class="bg-primary/5 p-8 rounded-lg my-10 text-center border border-primary/20 shadow-sm">
  <h3 class="text-2xl font-bold mb-4 text-primary">Assine e receba o próximo resumo trimestral</h3>
  <p class="mb-6 text-muted-foreground max-w-2xl mx-auto">Se você prefere clareza a barulho, a gente organiza o que importa e o que fazer.</p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="/consultoria-seo" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Quero um plano trimestral</a>
    <a href="/blog" class="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">Ver mais artigos</a>
  </div>
</div>`,
];

export const oQueMudouNaBuscaNoInicioDe2026Html = sections.join("\n\n");
