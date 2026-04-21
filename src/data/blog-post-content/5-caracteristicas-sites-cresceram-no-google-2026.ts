/**
 * Artigo 05
 * Links externos: exatamente 2 (2 autoridade, sem parceiro por falta de encaixe real).
 * Imagens do corpo: distintas entre si e do hero do post.
 */
import crescimentoOrganicoImg from "@/assets/images/blog/crescimento-organico-site.jpg";

const bodyImgClass =
  'class="rounded-xl my-8 w-full max-w-4xl mx-auto object-cover h-[220px] sm:h-[260px]" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 896px"';

export const cincoCaracteristicasSitesCresceramGoogle2026FaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que faz um site crescer no Google em 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sites crescem quando combinam conteúdo profundo, boa experiência no celular, autoridade de marca e atualização constante. Em 2026, o Google está menos tolerante com texto raso e sinais técnicos fracos.",
      },
    },
    {
      "@type": "Question",
      name: "Topical authority ainda importa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Topical authority é o Google entender que seu site cobre um tema com profundidade e consistência. Isso aumenta a chance de ranquear em várias consultas do mesmo cluster, não só em uma palavra-chave.",
      },
    },
    {
      "@type": "Question",
      name: "Core Web Vitals ainda afetam ranking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Afetam, principalmente em mercados competitivos. Performance e responsividade influenciam a satisfação do usuário, e o Google usa isso como sinal de qualidade.",
      },
    },
    {
      "@type": "Question",
      name: "Atualizar conteúdo antigo funciona mesmo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Funciona quando você melhora o que realmente trava a intenção: exemplos, dados, estrutura e clareza. Atualização cosmética raramente muda o jogo.",
      },
    },
    {
      "@type": "Question",
      name: "Como aplicar isso em um site pequeno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comece com 10 páginas que geram receita ou lead. Ajuste a parte técnica, reescreva as introduções, crie FAQ e conecte com linkagem interna. Depois você expande o cluster com consistência.",
      },
    },
  ],
} as const;

const sections: string[] = [
  `<p class="lead"><strong>Como crescer no Google em 2026</strong> deixou de ser questão de publicar muito. O que separa quem sobe de quem trava é um conjunto de sinais que se reforçam: profundidade, experiência do usuário e autoridade. A seguir, estão 5 padrões que aparecem com frequência em sites que crescem de verdade.</p>

<p>Antes de tudo, um alerta honesto: não existe um único truque. O crescimento orgânico que sustenta vendas costuma ser composto. Isso é chato, mas é previsível.</p>`,

  `<h2>Metodologia em poucas linhas</h2>
<p>Este artigo segue uma lógica simples de auditoria: olhar páginas que ganham visibilidade e identificar o que elas têm em comum. Não é ciência de laboratório, é rotina de operação. Quando um padrão aparece em projetos diferentes, em setores diferentes, vale prestar atenção.</p>

<p>Para base técnica e critérios oficiais, a fonte mais segura é a documentação do próprio Google: <a href="https://developers.google.com/search/docs" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Google Search Central</a>.</p>`,

  `<h2>Característica 1: conteúdo com profundidade e especialização</h2>
<p><strong>Topical authority</strong> é quando seu site cobre um tema como quem trabalha com aquilo, e não como quem leu por cima. O leitor sente. O Google também.</p>

<p>Na prática, isso significa:</p>
<ul class="space-y-2 list-disc pl-5 mb-6">
  <li>definições claras e exemplos;</li>
  <li>subtópicos que respondem às dúvidas reais;</li>
  <li>página de serviço que explica processo e limites.</li>
</ul>

<p>Se você quer um exemplo de estrutura que funciona bem para intenção de compra, comece por: <a href="/blog/como-aparecer-nas-buscas-do-seu-cliente" class="text-primary font-bold hover:underline">como aparecer nas buscas do seu cliente</a>.</p>`,

  `<h2>Característica 2: experiência do usuário e velocidade</h2>
<p>Em 2026, o usuário não tolera site pesado, travado e cheio de pop-ups. E o Google não precisa adivinhar, ele mede. Se seu site falha no celular, ele perde ranking e perde lead.</p>

<p>Se você quer atacar o básico rápido, aqui está o ponto de entrada: <a href="/blog/erros-tecnicos-seo" class="text-primary font-bold hover:underline">erros técnicos de SEO</a>.</p>

<img src="${crescimentoOrganicoImg.src}" alt="Crescimento orgânico de site sustentado por conteúdo, autoridade e base técnica sólida" ${bodyImgClass} />`,

  `<h2>Característica 3: autoridade construída de forma consistente</h2>
<p>Autoridade não é um número mágico. É um rastro público de confiança. Sites que crescem têm menções, citações e links que fazem sentido editorial.</p>

<p>Para entrar nesse jogo sem atalho tóxico, use um método simples: <a href="/blog/como-aumentar-autoridade-conquistar-links" class="text-primary font-bold hover:underline">como aumentar autoridade e conquistar links</a>.</p>`,

  `<h2>Característica 4: atualização regular de conteúdo existente</h2>
<p>Quem cresce não escreve e esquece. Revisa o que já traz demanda e melhora a resposta. Isso inclui atualizar dados, incluir exemplos atuais e ajustar a estrutura para leitura rápida.</p>

<div class="bg-secondary/30 p-6 rounded-lg my-6 border-l-4 border-primary">
  <p><strong>Regra prática:</strong> se uma página já aparece no top 10, ela merece mais cuidado do que um post novo que ainda não ranqueia.</p>
</div>`,

  `<h2>Característica 5: presença em múltiplos canais, incluindo IAs</h2>
<p>O usuário pesquisa no Google, no Maps, em redes e em IAs. Sites que crescem têm sinais consistentes em várias fontes. Isso melhora tanto a descoberta quanto a confiança.</p>

<p>Se você quer testar sua presença em IAs agora, este tutorial ajuda: <a href="/blog/empresa-aparece-chatgpt-como-testar" class="text-primary font-bold hover:underline">sua empresa aparece quando alguém pergunta ao ChatGPT</a>.</p>
`,

  `<h2>Como aplicar os 5 pontos: autoavaliação rápida</h2>
<div class="overflow-x-auto my-8">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr class="bg-primary/10">
        <th class="border border-border p-3 text-left font-semibold">Item</th>
        <th class="border border-border p-3 text-left font-semibold">Sim</th>
        <th class="border border-border p-3 text-left font-semibold">Parcial</th>
        <th class="border border-border p-3 text-left font-semibold">Não</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-border p-3 font-medium">Conteúdo profundo no tema principal</td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
      </tr>
      <tr class="bg-muted/30">
        <td class="border border-border p-3 font-medium">Site rápido no celular</td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
      </tr>
      <tr>
        <td class="border border-border p-3 font-medium">Menções e links de qualidade</td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
      </tr>
      <tr class="bg-muted/30">
        <td class="border border-border p-3 font-medium">Conteúdos antigos atualizados</td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
      </tr>
      <tr>
        <td class="border border-border p-3 font-medium">Presença consistente em múltiplos canais</td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
      </tr>
    </tbody>
  </table>
</div>

<p>Para referência sobre experiência de página e performance, use o PageSpeed Insights: <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">PageSpeed Insights</a>.</p>`,

  `<h2>FAQ</h2>
<h3>O que faz um site crescer no Google em 2026?</h3>
<p>Sites crescem quando combinam conteúdo profundo, boa experiência no celular, autoridade de marca e atualização constante.</p>

<h3>Topical authority ainda importa?</h3>
<p>Sim. Topical authority aumenta a chance de ranquear em várias consultas de um mesmo cluster.</p>

<h3>Core Web Vitals ainda afetam ranking?</h3>
<p>Afetam, principalmente em mercados competitivos. Performance e responsividade influenciam a satisfação.</p>

<h3>Atualizar conteúdo antigo funciona mesmo?</h3>
<p>Funciona quando melhora a resposta de verdade, com clareza, exemplos e estrutura.</p>

<h3>Como aplicar isso em um site pequeno?</h3>
<p>Comece com 10 páginas que geram receita ou lead, ajuste a parte técnica, crie FAQ e conecte com linkagem interna.</p>`,

  `<p>Se você quer crescer no Google em 2026, o caminho passa menos por volume e mais por consistência. Quando esses cinco pontos entram em rotina, o resultado costuma aparecer.</p>

<div class="bg-primary/5 p-8 rounded-lg my-10 text-center border border-primary/20 shadow-sm">
  <h3 class="text-2xl font-bold mb-4 text-primary">Faça a auditoria gratuita do seu site</h3>
  <p class="mb-6 text-muted-foreground max-w-2xl mx-auto">A Otne prioriza o que move resultado no seu caso: técnico, conteúdo e autoridade. Sem checklist genérico.</p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="/consultoria-seo" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Quero um diagnóstico</a>
    <a href="/blog" class="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">Ler mais</a>
  </div>
</div>`,
];

export const cincoCaracteristicasSitesCresceramGoogle2026Html =
  sections.join("\n\n");
