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
      name: "O que e o spam update do Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spam update e uma atualizacao focada em reduzir conteudo e praticas consideradas spam nos resultados. Ele pode afetar sites com conteudo auto gerado sem valor, paginas enganosas e sinais artificiais de autoridade.",
      },
    },
    {
      "@type": "Question",
      name: "Como saber se meu site foi penalizado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Procure queda brusca e consistente em cliques no Search Console e verifique mensagens de acao manual. Se nao houver acao manual, pode ser reavaliacao algoritmica, e o caminho e melhoria de qualidade e limpeza do site.",
      },
    },
    {
      "@type": "Question",
      name: "Conteudo gerado por IA e sempre penalizado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nao. O problema e conteudo sem utilidade, repetitivo ou enganoso. IA sem revisao humana aumenta risco de erro e de texto generico, o que pode derrubar desempenho.",
      },
    },
    {
      "@type": "Question",
      name: "Qual e o plano de recuperacao passo a passo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mapeie paginas de baixa qualidade, consolide duplicatas, reescreva o que precisa de experiencia real, melhore paginas de servico e elimine sinais de spam. Depois acompanhe recuperacao por pagina, nao por site inteiro.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para recuperar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende do tamanho do site e do nivel de limpeza. Ajustes podem estabilizar em 30 dias, mas recuperacao costuma exigir 60 a 120 dias de consistencia, ate nova reavaliacao.",
      },
    },
  ],
} as const;

const sections: string[] = [
  `<p class="lead"><strong>Spam update de marco de 2026</strong> pegou muita empresa de surpresa, principalmente quem publicou conteudo com IA sem revisao. O resultado costuma ser silencioso: trafego cai e ninguem entende o motivo. Aqui esta como identificar e o que fazer sem piorar a situacao.</p>

<p>Referencia oficial para entender como o Google define spam e politicas: <a href="https://developers.google.com/search/docs/essentials/spam-policies" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">spam policies do Google</a>.</p>`,

  `<h2>O que o Google combate em um spam update</h2>
<p>O alvo e simples: conteudo que existe para manipular ranking, nao para ajudar o usuario. Isso inclui paginas geradas em escala sem valor, copias com pequenas mudancas e taticas enganosas.</p>

<img src="${linkBuildingImg.src}" alt="Sinais de autoridade e mencoes externas como protecao contra queda por spam" ${bodyImgClass} />`,

  `<h2>Como verificar se seu site foi afetado</h2>
<ol class="space-y-2 list-decimal pl-5 mb-6">
  <li>Abra o Search Console e compare periodos antes e depois da data do update.</li>
  <li>Veja Paginas e identifique onde a queda concentrou.</li>
  <li>Cheque se existe mensagem de acao manual.</li>
  <li>Revise as paginas mais afetadas com criterio de utilidade.</li>
</ol>

<p>Se voce quer reforcar base tecnica para nao perder rastreio e conversao, comece aqui: <a href="/blog/erros-tecnicos-seo" class="text-primary font-bold hover:underline">erros tecnicos de SEO</a>.</p>

<img src="${technicalSeoImg.src}" alt="Checklist tecnico de SEO para reduzir risco de queda e melhorar rastreabilidade" ${bodyImgClass} />`,

  `<h2>Os 5 tipos de conteudo mais penalizados</h2>
<ol class="space-y-2 list-decimal pl-5 mb-6">
  <li><strong>Paginas duplicadas:</strong> mesma resposta com palavras trocadas.</li>
  <li><strong>Conteudo auto gerado raso:</strong> volume sem experiencia real.</li>
  <li><strong>Pagina feita para palavra chave:</strong> promessa vazia e pouco valor.</li>
  <li><strong>Intermediacao sem utilidade:</strong> pagina que so empurra clique.</li>
  <li><strong>Sinais artificiais:</strong> links e mencoes sem contexto editorial.</li>
</ol>`,

  `<h2>Como usar IA sem ser penalizado</h2>
<p>Use IA como assistente, nao como autora. O conteudo precisa de revisao humana, exemplos reais, limites e prova. Se sua equipe nao consegue revisar, reduza volume e aumente profundidade.</p>

<p>Se voce quer reforcar o lado de confianca e autoria, este texto complementa: <a href="/blog/como-construir-confianca-conteudo-digital-ia" class="text-primary font-bold hover:underline">como construir confianca em conteudo digital na era da IA</a>.</p>`,

  `<h2>Plano de recuperacao para quem foi atingido</h2>
<ol class="space-y-2 list-decimal pl-5 mb-6">
  <li><strong>Inventario:</strong> liste paginas que perderam mais.</li>
  <li><strong>Classificacao:</strong> manter, reescrever, consolidar ou remover.</li>
  <li><strong>Reescrita com prova:</strong> experiencia, processo, exemplos e dados.</li>
  <li><strong>Arquitetura:</strong> linkagem interna por cluster.</li>
  <li><strong>Monitoramento:</strong> acompanhe por pagina e consulta.</li>
</ol>

<p>Para apoio com priorizacao e execucao, o caminho mais curto e: <a href="/consultoria-seo" class="text-primary font-bold hover:underline">consultoria de SEO</a>.</p>

<p>Segundo link de autoridade para orientar criacao de conteudo util: <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">helpful content no Search Central</a>.</p>`,

  `<h2>FAQ</h2>
<h3>O que e o spam update do Google?</h3>
<p>E uma atualizacao focada em reduzir conteudo e praticas consideradas spam nos resultados.</p>

<h3>Como saber se meu site foi penalizado?</h3>
<p>Queda brusca no Search Console e, se houver, mensagem de acao manual. Sem acao manual, o caminho e melhoria de qualidade e limpeza.</p>

<h3>Conteudo gerado por IA e sempre penalizado?</h3>
<p>Nao. O problema e conteudo sem utilidade e sem revisao humana.</p>

<h3>Qual e o plano de recuperacao passo a passo?</h3>
<p>Mapear paginas fracas, consolidar duplicatas, reescrever com prova e melhorar arquitetura interna.</p>

<h3>Quanto tempo leva para recuperar?</h3>
<p>Em geral, 60 a 120 dias de consistencia, dependendo do tamanho e do nivel de limpeza.</p>`,

  `<h2>Conclusao com CTA</h2>
<p>Se o seu site foi atingido, a saida e limpar e reforcar utilidade, nao maquiar. Quem corrige agora costuma sair mais forte no proximo ciclo.</p>

<div class="bg-primary/5 p-8 rounded-lg my-10 text-center border border-primary/20 shadow-sm">
  <h3 class="text-2xl font-bold mb-4 text-primary">Faca a auditoria de conteudo do seu site</h3>
  <p class="mb-6 text-muted-foreground max-w-2xl mx-auto">A Otne identifica risco, prioriza correcoes e acompanha recuperacao por pagina. Sem achismo.</p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="/consultoria-seo" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Quero recuperar meu trafego</a>
    <a href="/blog" class="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">Ver mais artigos</a>
  </div>
</div>`,
];

export const spamUpdateMarco2026Html = sections.join("\n\n");

