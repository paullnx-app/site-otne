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
      name: "O que aconteceu de mais importante no SEO no inicio de 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O inicio de 2026 foi marcado por mais volatilidade de ranking, mais espaco para respostas com IA e uma exigencia maior de confianca e experiencia real no conteudo. Para negocios, isso significa menos tolerancia a paginas genericas.",
      },
    },
    {
      "@type": "Question",
      name: "O que e Google AI Mode e por que importa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Mode e uma forma de busca em que a resposta gerada tem mais destaque e organiza o caminho do usuario. Isso muda onde o clique acontece e aumenta o valor de ser citado como fonte confiavel.",
      },
    },
    {
      "@type": "Question",
      name: "Como core updates e spam updates afetam um negocio pequeno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Afetam porque redistribuem visibilidade. Se seu site depende de organico, uma queda pode impactar caixa. O antídoto e base tecnica, paginas de servico fortes e conteudo com prova.",
      },
    },
    {
      "@type": "Question",
      name: "O que parou de funcionar em 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conteudo raso feito para volume, paginas sem autoria e sites lentos no celular. Tambem perdeu forca a estrategia de publicar sem atualizar nada e esperar ranking permanente.",
      },
    },
    {
      "@type": "Question",
      name: "Quais sao as 3 prioridades para o proximo trimestre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Priorize: corrigir base tecnica, fortalecer paginas que geram lead e criar um cluster de autoridade com perguntas reais. Isso protege seu trafego em cenarios de mudanca.",
      },
    },
  ],
} as const;

const sections: string[] = [
  `<p class="lead"><strong>Novidades de SEO em 2026</strong> nao faltaram. E para empresario isso e um problema: o barulho e grande e o tempo e curto. Aqui vai um resumo direto do que mudou no inicio de 2026 e o que fazer na pratica.</p>

<p>Se voce precisa do panorama completo de SEO para o ano, leia tambem: <a href="/blog/guia-seo-2026" class="text-primary font-bold hover:underline">guia completo de SEO para 2026</a>.</p>`,

  `<h2>Por que o Q1 de 2026 foi tao agitado</h2>
<p>Mais mudancas em interfaces de busca, mais foco em confianca e mais volatilidade. Quando isso acontece, o que estava ok vira fraco.</p>

<p>Para acompanhar comunicacoes oficiais de atualizacoes e incidentes, use: <a href="https://status.search.google.com/" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Google Search Status Dashboard</a>.</p>

<img src="${futureSeoImg.src}" alt="Tendencias de SEO e mudancas na busca com impacto em 2026" ${bodyImgClass} />`,

  `<h2>O que esta em alta: busca com IA em ascensao acelerada</h2>
<p>O usuario quer resposta pronta. Isso puxa AEO e GEO para o centro do jogo. Headings em pergunta, respostas curtas e conteudo estruturado passaram a valer mais.</p>

<p>Se voce quer entender essa logica com exemplo pratico, comece aqui: <a href="/blog/seo-ou-inteligencia-artificial-onde-apostar-2026" class="text-primary font-bold hover:underline">SEO ou IA: onde apostar</a>.</p>`,

  `<h2>O que perdeu forca: taticas que pararam de funcionar</h2>
<ul class="space-y-2 list-disc pl-5 mb-6">
  <li>publicar volume sem revisao humana</li>
  <li>pagina de servico generica, sem prova e sem processo</li>
  <li>site lento no celular e arquitetura confusa</li>
</ul>

<img src="${marketingDigitalImg.src}" alt="Empresario organizando prioridades de marketing e SEO com foco em resultado" ${bodyImgClass} />`,

  `<h2>As 3 prioridades para o proximo trimestre</h2>
<ol class="space-y-2 list-decimal pl-5 mb-6">
  <li><strong>Base tecnica:</strong> performance, indexacao e experiencia mobile.</li>
  <li><strong>Paginas que vendem:</strong> oferta clara, prova e CTA direto.</li>
  <li><strong>Cluster de autoridade:</strong> 6 a 10 conteudos profundos conectados.</li>
</ol>

<p>Se voce quer um plano de 90 dias com foco em caixa, este texto complementa: <a href="/blog/marketing-digital-para-empresarios" class="text-primary font-bold hover:underline">marketing digital para empresarios</a>.</p>`,

  `<h2>FAQ</h2>
<h3>O que aconteceu de mais importante no SEO no inicio de 2026?</h3>
<p>Mais volatilidade de ranking, mais espaco para respostas com IA e mais exigencia de confianca e experiencia real.</p>

<h3>O que e Google AI Mode e por que importa?</h3>
<p>Uma forma de busca em que a resposta gerada ganha destaque, mudando onde o clique acontece e aumentando o valor de ser citado como fonte.</p>

<h3>Como core updates e spam updates afetam um negocio pequeno?</h3>
<p>Redistribuem visibilidade. Se voce depende de organico, queda pode afetar caixa. A protecao vem de base tecnica e paginas fortes.</p>

<h3>O que parou de funcionar em 2026?</h3>
<p>Conteudo raso feito para volume, paginas sem autoria e sites lentos no celular.</p>

<h3>Quais sao as 3 prioridades para o proximo trimestre?</h3>
<p>Corrigir base tecnica, fortalecer paginas que geram lead e criar um cluster de autoridade com perguntas reais.</p>`,

  `<h2>Conclusao com CTA</h2>
<p>O resumo executivo do Q1 de 2026 e simples: quem trabalha com metodo ganha respiro, quem vive de atalho sofre. Se voce quer montar um plano trimestral e medir por lead, fale com a Otne.</p>

<div class="bg-primary/5 p-8 rounded-lg my-10 text-center border border-primary/20 shadow-sm">
  <h3 class="text-2xl font-bold mb-4 text-primary">Assine e receba o proximo resumo trimestral</h3>
  <p class="mb-6 text-muted-foreground max-w-2xl mx-auto">Se voce prefere clareza a barulho, a gente organiza o que importa e o que fazer.</p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="/consultoria-seo" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Quero um plano trimestral</a>
    <a href="/blog" class="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">Ver mais artigos</a>
  </div>
</div>`,
];

export const oQueMudouNaBuscaNoInicioDe2026Html = sections.join("\n\n");

