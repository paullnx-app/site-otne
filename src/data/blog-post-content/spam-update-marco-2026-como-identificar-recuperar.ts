/**
 * Artigo 09
 * Links externos: exatamente 2 (2 autoridade).
 */
import technicalSeoImg from "@/assets/images/blog/erros-seo-tecnicos.jpg";
import linkBuildingImg from "@/assets/images/blog/rede-construcao-links.jpg";

const bodyImgClass =
  'class="rounded-xl my-8 w-full max-w-4xl mx-auto object-cover h-[220px] sm:h-[260px]" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 896px"';

export const spamUpdateMarco2026FaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é o spam update do Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spam update é uma atualização focada em reduzir conteúdo e práticas consideradas spam nos resultados. Ele pode afetar sites com conteúdo autogerado sem valor, páginas enganosas e sinais artificiais de autoridade.",
      },
    },
    {
      "@type": "Question",
      name: "Como saber se meu site foi penalizado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Procure queda brusca e consistente em cliques no Search Console e verifique se há mensagens de ação manual. Se não houver ação manual, pode ser reavaliação algorítmica, e o caminho é melhoria de qualidade e limpeza do site.",
      },
    },
    {
      "@type": "Question",
      name: "Conteúdo gerado por IA é sempre penalizado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. O problema é conteúdo sem utilidade, repetitivo ou enganoso. IA sem revisão humana aumenta o risco de erro e de texto genérico, o que pode derrubar o desempenho.",
      },
    },
    {
      "@type": "Question",
      name: "Qual é o plano de recuperação passo a passo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mapeie as páginas de baixa qualidade, consolide duplicatas, reescreva o que precisa de experiência real, melhore as páginas de serviço e elimine sinais de spam. Depois, acompanhe a recuperação por página, não por site inteiro.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para recuperar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende do tamanho do site e do nível de limpeza. Ajustes podem estabilizar em 30 dias, mas a recuperação costuma exigir 60 a 120 dias de consistência, até a nova reavaliação.",
      },
    },
  ],
} as const;

const sections: string[] = [
  `<p class="lead"><strong>Spam update de março de 2026</strong> pegou muita empresa de surpresa, principalmente quem publicou conteúdo com IA sem revisão. O resultado costuma ser silencioso: o tráfego cai e ninguém entende o motivo. Aqui está como identificar e o que fazer sem piorar a situação.</p>

<p>Referência oficial para entender como o Google define spam e políticas: <a href="https://developers.google.com/search/docs/essentials/spam-policies" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Spam Policies do Google</a>.</p>`,

  `<h2>O que o Google combate em um spam update</h2>
<p>O alvo é simples: conteúdo que existe para manipular ranking, e não para ajudar o usuário. Isso inclui páginas geradas em escala sem valor, cópias com pequenas mudanças e táticas enganosas.</p>

<img src="${linkBuildingImg.src}" alt="Sinais de autoridade e menções externas como proteção contra queda por spam" ${bodyImgClass} />`,

  `<h2>Como verificar se seu site foi afetado</h2>
<ol class="space-y-2 list-decimal pl-5 mb-6">
  <li>Abra o Search Console e compare períodos antes e depois da data do update.</li>
  <li>Vá em Páginas e identifique onde a queda se concentrou.</li>
  <li>Cheque se existe mensagem de ação manual.</li>
  <li>Revise as páginas mais afetadas com critério de utilidade.</li>
</ol>

<p>Se você quer reforçar a base técnica para não perder rastreio e conversão, comece aqui: <a href="/blog/erros-tecnicos-seo" class="text-primary font-bold hover:underline">erros técnicos de SEO</a>.</p>

<img src="${technicalSeoImg.src}" alt="Checklist técnico de SEO para reduzir risco de queda e melhorar rastreabilidade" ${bodyImgClass} />`,

  `<h2>Os 5 tipos de conteúdo mais penalizados</h2>
<ol class="space-y-2 list-decimal pl-5 mb-6">
  <li><strong>Páginas duplicadas:</strong> mesma resposta com palavras trocadas.</li>
  <li><strong>Conteúdo autogerado raso:</strong> volume sem experiência real.</li>
  <li><strong>Página feita para palavra-chave:</strong> promessa vazia e pouco valor.</li>
  <li><strong>Intermediação sem utilidade:</strong> página que só empurra clique.</li>
  <li><strong>Sinais artificiais:</strong> links e menções sem contexto editorial.</li>
</ol>`,

  `<h2>Como usar IA sem ser penalizado</h2>
<p>Use IA como assistente, não como autora. O conteúdo precisa de revisão humana, exemplos reais, limites e prova. Se sua equipe não consegue revisar, reduza o volume e aumente a profundidade.</p>

<p>Se você quer reforçar o lado da confiança e da autoria, este texto complementa: <a href="/blog/como-construir-confianca-conteudo-digital-ia" class="text-primary font-bold hover:underline">como construir confiança em conteúdo digital na era da IA</a>.</p>`,

  `<h2>Plano de recuperação para quem foi atingido</h2>
<ol class="space-y-2 list-decimal pl-5 mb-6">
  <li><strong>Inventário:</strong> liste as páginas que perderam mais.</li>
  <li><strong>Classificação:</strong> manter, reescrever, consolidar ou remover.</li>
  <li><strong>Reescrita com prova:</strong> experiência, processo, exemplos e dados.</li>
  <li><strong>Arquitetura:</strong> linkagem interna por cluster.</li>
  <li><strong>Monitoramento:</strong> acompanhe por página e consulta.</li>
</ol>

<p>Para apoio com priorização e execução, o caminho mais curto é a <a href="/consultoria-seo" class="text-primary font-bold hover:underline">consultoria de SEO</a>.</p>

<p>Segundo link de autoridade para orientar a criação de conteúdo útil: <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Helpful Content no Search Central</a>.</p>`,

  `<h2>FAQ</h2>
<h3>O que é o spam update do Google?</h3>
<p>É uma atualização focada em reduzir conteúdo e práticas consideradas spam nos resultados.</p>

<h3>Como saber se meu site foi penalizado?</h3>
<p>Queda brusca no Search Console e, se houver, mensagem de ação manual. Sem ação manual, o caminho é melhoria de qualidade e limpeza.</p>

<h3>Conteúdo gerado por IA é sempre penalizado?</h3>
<p>Não. O problema é conteúdo sem utilidade e sem revisão humana.</p>

<h3>Qual é o plano de recuperação passo a passo?</h3>
<p>Mapear páginas fracas, consolidar duplicatas, reescrever com prova e melhorar a arquitetura interna.</p>

<h3>Quanto tempo leva para recuperar?</h3>
<p>Em geral, de 60 a 120 dias de consistência, dependendo do tamanho e do nível de limpeza.</p>`,

  `<p>Se o seu site foi atingido, a saída é limpar e reforçar utilidade, e não maquiar. Quem corrige agora costuma sair mais forte no próximo ciclo.</p>

<div class="bg-primary/5 p-8 rounded-lg my-10 text-center border border-primary/20 shadow-sm">
  <h3 class="text-2xl font-bold mb-4 text-primary">Faça a auditoria de conteúdo do seu site</h3>
  <p class="mb-6 text-muted-foreground max-w-2xl mx-auto">A Otne identifica risco, prioriza as correções e acompanha a recuperação por página. Sem achismo.</p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="/consultoria-seo" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Quero recuperar meu tráfego</a>
    <a href="/blog" class="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">Ver mais artigos</a>
  </div>
</div>`,
];

export const spamUpdateMarco2026Html = sections.join("\n\n");
