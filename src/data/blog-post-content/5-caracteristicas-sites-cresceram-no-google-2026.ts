/**
 * Artigo 05
 * Links externos: exatamente 2 (2 autoridade, sem parceiro por falta de encaixe real).
 * Imagens do corpo: distintas entre si e do hero do post.
 */
import technicalSeoImg from "@/assets/images/blog/erros-seo-tecnicos.jpg";
import teamImg from "@/assets/images/blog/equipe-autoridade.jpg";

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
        text: "Sites crescem quando combinam conteudo profundo, boa experiencia no celular, autoridade de marca e atualizacao constante. Em 2026, o Google esta menos tolerante com texto raso e sinais tecnicos fracos.",
      },
    },
    {
      "@type": "Question",
      name: "Topical authority ainda importa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Topical authority e o Google entender que seu site cobre um tema com profundidade e consistencia. Isso aumenta a chance de ranquear em varias consultas do mesmo cluster, nao so em uma palavra chave.",
      },
    },
    {
      "@type": "Question",
      name: "Core web vitals ainda afetam ranking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Afetam, principalmente em mercados competitivos. Performance e responsividade influenciam satisfacao do usuario, e o Google usa isso como sinal de qualidade.",
      },
    },
    {
      "@type": "Question",
      name: "Atualizar conteudo antigo funciona mesmo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Funciona quando voce melhora o que realmente trava a intencao: exemplos, dados, estrutura e clareza. Atualizacao cosmetica raramente muda o jogo.",
      },
    },
    {
      "@type": "Question",
      name: "Como aplicar isso em um site pequeno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comece com 10 paginas que geram receita ou lead. Ajuste tecnico, reescreva introducoes, crie FAQ e conecte com linkagem interna. Depois voce expande o cluster com consistencia.",
      },
    },
  ],
} as const;

const sections: string[] = [
  `<p class="lead"><strong>Como crescer no Google em 2026</strong> deixou de ser questao de publicar muito. O que separa quem sobe de quem trava e um conjunto de sinais que se reforcam: profundidade, experiencia do usuario e autoridade. A seguir, estao 5 padroes que aparecem com frequencia em sites que crescem de verdade.</p>

<p>Antes de tudo, um alerta honesto: nao existe um unico truque. O crescimento organico que sustenta vendas costuma ser composto. Isso e chato, mas e previsivel.</p>`,

  `<h2>Metodologia em poucas linhas</h2>
<p>Este artigo segue uma logica simples de auditoria: olhar paginas que ganham visibilidade e identificar o que elas tem em comum. Nao e ciencia de laboratorio, e rotina de operacao. Quando um padrao aparece em projetos diferentes, em setores diferentes, vale prestar atencao.</p>

<p>Para base tecnica e criterios oficiais, a fonte mais segura e a documentacao do proprio Google: <a href="https://developers.google.com/search/docs" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Google Search Central</a>.</p>`,

  `<h2>Caracteristica 1: conteudo com profundidade e especializacao</h2>
<p><strong>Topical authority</strong> e quando seu site cobre um tema como quem trabalha com aquilo, nao como quem leu por cima. O leitor sente. O Google tambem.</p>

<p>Na pratica, isso significa:</p>
<ul class="space-y-2 list-disc pl-5 mb-6">
  <li>definicoes claras e exemplos</li>
  <li>subtopicos que respondem as duvidas reais</li>
  <li>pagina de servico que explica processo e limites</li>
</ul>

<p>Se voce quer um exemplo de estrutura que funciona bem para intencao de compra, comece por: <a href="/blog/como-aparecer-nas-buscas-do-seu-cliente" class="text-primary font-bold hover:underline">como aparecer nas buscas do seu cliente</a>.</p>`,

  `<h2>Caracteristica 2: experiencia do usuario e velocidade</h2>
<p>Em 2026, o usuario nao tolera site pesado, travado e cheio de popups. E o Google nao precisa adivinhar, ele mede. Se seu site falha no celular, ele perde ranking e perde lead.</p>

<p>Se voce quer atacar o basico rapido, aqui esta o ponto de entrada: <a href="/blog/erros-tecnicos-seo" class="text-primary font-bold hover:underline">erros tecnicos de SEO</a>.</p>

<img src="${technicalSeoImg.src}" alt="Auditoria tecnica com foco em performance e problemas que travam crescimento organico" ${bodyImgClass} />`,

  `<h2>Caracteristica 3: autoridade construida de forma consistente</h2>
<p>Autoridade nao e um numero magico. E um rastro publico de confianca. Sites que crescem tem mencoes, citacoes e links que fazem sentido editorial.</p>

<p>Para entrar nesse jogo sem atalho toxico, use um metodo simples: <a href="/blog/como-aumentar-autoridade-conquistar-links" class="text-primary font-bold hover:underline">como aumentar autoridade e conquistar links</a>.</p>`,

  `<h2>Caracteristica 4: atualizacao regular de conteudo existente</h2>
<p>Quem cresce nao escreve e esquece. Ele revisa o que ja traz demanda e melhora a resposta. Isso inclui atualizar dados, incluir exemplos atuais e ajustar estrutura para leitura rapida.</p>

<div class="bg-secondary/30 p-6 rounded-lg my-6 border-l-4 border-primary">
  <p><strong>Regra pratica:</strong> se uma pagina ja aparece no top 10, ela merece mais cuidado do que um post novo que ainda nao ranqueia.</p>
</div>`,

  `<h2>Caracteristica 5: presenca em multiplos canais, incluindo IAs</h2>
<p>O usuario pesquisa no Google, no Maps, em redes e em IAs. Sites que crescem tem sinais consistentes em varias fontes. Isso melhora tanto descoberta quanto confianca.</p>

<p>Se voce quer testar sua presenca em IAs agora, este tutorial ajuda: <a href="/blog/empresa-aparece-chatgpt-como-testar" class="text-primary font-bold hover:underline">sua empresa aparece quando alguem pergunta ao ChatGPT</a>.</p>

<img src="${teamImg.src}" alt="Equipe revisando conteudo e estrategia de autoridade com foco em crescimento organico" ${bodyImgClass} />`,

  `<h2>Como aplicar os 5 pontos: autoavaliacao rapida</h2>
<div class="overflow-x-auto my-8">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr class="bg-primary/10">
        <th class="border border-border p-3 text-left font-semibold">Item</th>
        <th class="border border-border p-3 text-left font-semibold">Sim</th>
        <th class="border border-border p-3 text-left font-semibold">Parcial</th>
        <th class="border border-border p-3 text-left font-semibold">Nao</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-border p-3 font-medium">Conteudo profundo no tema principal</td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
      </tr>
      <tr class="bg-muted/30">
        <td class="border border-border p-3 font-medium">Site rapido no celular</td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
      </tr>
      <tr>
        <td class="border border-border p-3 font-medium">Mencoes e links de qualidade</td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
      </tr>
      <tr class="bg-muted/30">
        <td class="border border-border p-3 font-medium">Conteudos antigos atualizados</td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
      </tr>
      <tr>
        <td class="border border-border p-3 font-medium">Presenca consistente em multiplos canais</td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
        <td class="border border-border p-3"> </td>
      </tr>
    </tbody>
  </table>
</div>

<p>Para referencia sobre experiencia de pagina e performance, use o PageSpeed Insights: <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">PageSpeed Insights</a>.</p>`,

  `<h2>FAQ</h2>
<h3>O que faz um site crescer no Google em 2026?</h3>
<p>Sites crescem quando combinam conteudo profundo, boa experiencia no celular, autoridade de marca e atualizacao constante.</p>

<h3>Topical authority ainda importa?</h3>
<p>Sim. Topical authority aumenta a chance de ranquear em varias consultas de um mesmo cluster.</p>

<h3>Core web vitals ainda afetam ranking?</h3>
<p>Afetam, principalmente em mercados competitivos. Performance e responsividade influenciam satisfacao.</p>

<h3>Atualizar conteudo antigo funciona mesmo?</h3>
<p>Funciona quando melhora a resposta de verdade, com clareza, exemplos e estrutura.</p>

<h3>Como aplicar isso em um site pequeno?</h3>
<p>Comece com 10 paginas que geram receita ou lead, ajuste tecnico, crie FAQ e conecte com linkagem interna.</p>`,

  `<h2>Conclusao com CTA</h2>
<p>Se voce quer crescer no Google em 2026, o caminho e menos sobre volume e mais sobre consistencia. Quando esses cinco pontos entram em rotina, o resultado costuma aparecer.</p>

<div class="bg-primary/5 p-8 rounded-lg my-10 text-center border border-primary/20 shadow-sm">
  <h3 class="text-2xl font-bold mb-4 text-primary">Faça a auditoria gratuita do seu site</h3>
  <p class="mb-6 text-muted-foreground max-w-2xl mx-auto">A Otne pode priorizar o que move resultado no seu caso: tecnico, conteudo e autoridade. Sem checklist genérico.</p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="/consultoria-seo" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Quero um diagnostico</a>
    <a href="/blog" class="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">Ler mais</a>
  </div>
</div>`,
];

export const cincoCaracteristicasSitesCresceramGoogle2026Html =
  sections.join("\n\n");

