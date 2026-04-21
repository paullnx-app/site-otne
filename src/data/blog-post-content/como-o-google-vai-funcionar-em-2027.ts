/**
 * Artigo 03
 * Links externos: exatamente 2 (1 autoridade + 1 parceiro).
 * Imagens do corpo: distintas entre si e do hero do post.
 */
import technicalSeoImg from "@/assets/images/blog/erros-seo-tecnicos.jpg";
import aiTrustImg from "@/assets/images/blog/confianca-conteudo-ia.jpg";

const bodyImgClass =
  'class="rounded-xl my-8 w-full max-w-4xl mx-auto object-cover h-[220px] sm:h-[260px]" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 896px"';

export const comoOGoogleVaiFuncionarEm2027FaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que são agentes de IA na busca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agentes de IA na busca são sistemas que não apenas retornam links. Eles planejam etapas, consultam várias fontes e executam tarefas (comparar, reservar, comprar, gerar relatórios) com o usuário validando o resultado.",
      },
    },
    {
      "@type": "Question",
      name: "Como o Google pode virar um gerenciador de agentes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A ideia é o Google organizar uma tarefa em várias ações, acionar ferramentas e fontes e entregar a resposta final. Em vez de você abrir 10 abas, o sistema faz a triagem e devolve uma solução pronta.",
      },
    },
    {
      "@type": "Question",
      name: "Isso significa o fim dos cliques?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não é o fim, mas muda a distribuição. Parte das consultas vira resposta direta, e os cliques ficam mais concentrados em fontes citadas, páginas de comparação e destinos que completam a tarefa.",
      },
    },
    {
      "@type": "Question",
      name: "O que muda no SEO quando a busca fica mais agêntica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O SEO deixa de competir apenas por posição e passa a competir por citação e confiança. Conteúdo com estrutura clara, autoria e provas reais tende a ser escolhido como base para respostas e recomendações.",
      },
    },
    {
      "@type": "Question",
      name: "O que um negócio brasileiro pode fazer agora para se preparar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fortalecer base técnica, publicar conteúdo de especialista com dados verificáveis, melhorar consistência de marca (NAP, contato, política) e construir autoridade com menções externas. Isso aumenta a chance de ser recomendado por IA e encontrado no Google.",
      },
    },
  ],
} as const;

const sections: string[] = [
  `<p class="lead"><strong>Futuro do Google 2027</strong> não é papo de ficção. A busca está mudando na frente de todo mundo. O que antes era um campo de links está virando um sistema que resolve tarefas. Para um negócio brasileiro, isso tem um efeito direto: como você aparece quando o cliente pede uma recomendação pronta.</p>

<p>O gancho aqui vem de uma declaração pública atribuída ao CEO do Google, Sundar Pichai, sobre 2027 como ponto de virada para experiências agênticas. Não dá para tratar isso como fofoca de mercado. Quando o Google sinaliza uma mudança desse tamanho, o impacto chega primeiro em quem depende de tráfego orgânico para vender.</p>

<p>Se você quer um panorama do que já mudou no SEO em 2026, vale ler antes: <a href="/blog/guia-seo-2026" class="text-primary font-bold hover:underline">guia completo de SEO para 2026</a>.</p>`,

  `<h2>O que o CEO do Google disse e por que isso importa para você</h2>
<p><strong>Resposta direta:</strong> a busca tende a virar um gerenciador de agentes. Em vez de você pesquisar, comparar e decidir abrindo várias páginas, o sistema faz parte desse trabalho e devolve uma opção pronta. Isso muda a lógica de visibilidade.</p>

<p>Para quem vende serviço, o risco é claro: menos cliques para artigos genéricos e mais peso para marcas que viram referência. Para quem vende produto, a mudança aparece como comparação automatizada e recomendação por critérios. O nome da sua empresa precisa estar em fontes que o sistema confia.</p>

<p>Fonte de autoridade para contexto sobre direção de busca e IA: <a href="https://developers.google.com/search/docs" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Google Search Central</a>.</p>`,

  `<h2>O que são agentes de IA na busca, explicado sem tecniquês</h2>
<p><strong>Agentes de IA</strong> são sistemas que recebem uma meta e executam etapas para chegar lá. Em vez de responder uma pergunta com um texto pronto, eles podem:</p>
<ul class="space-y-2 list-disc pl-5 mb-6">
  <li>entender contexto (orçamento, região, preferência, prazo);</li>
  <li>buscar fontes (sites, mapas, reviews, documentos);</li>
  <li>comparar opções e justificar a escolha;</li>
  <li>executar a ação (agendar, comprar, preencher cadastro) quando permitido.</li>
</ul>

<p>Na prática, parece simples: o cliente pergunta e já recebe a melhor opção para ele. O problema é que essa melhor opção depende de sinais públicos. Se você não tem sinais, você não entra na lista.</p>

<img src="${aiTrustImg.src}" alt="Confiança e verificação de informações em conteúdo para busca com IA" ${bodyImgClass} />`,

  `<h2>Como a busca vai funcionar com agentes e o que acontece com os cliques</h2>
<p><strong>O clique não some.</strong> Ele muda de lugar. Em consultas de topo de funil, a resposta pode ser entregue ali mesmo. Em consultas de compra, o usuário ainda precisa finalizar em algum lugar: site, WhatsApp, loja, checkout, formulário.</p>

<p>O que muda é a distribuição. Em vez de 10 resultados dividirem a atenção, duas ou três fontes viram base da resposta. O restante perde impressão e oportunidade.</p>

<p>Na nossa prática, isso já aparece em pequenas coisas: a pessoa chega no WhatsApp com uma pergunta mais informada e com critérios claros. Ela não quer discurso, quer confirmação.</p>`,

  `<h2>O que muda para tráfego orgânico e SEO</h2>
<p><strong>SEO não vira inútil.</strong> Ele fica mais exigente. A base técnica continua sendo o filtro de entrada. Se seu site é lento, confuso ou difícil de rastrear, você perde duas vezes: no ranking e na citação por IA.</p>

<p>Para diagnosticar sua base, comece pelo essencial: <a href="/blog/erros-tecnicos-seo" class="text-primary font-bold hover:underline">erros técnicos de SEO que drenam tráfego</a>. Esse ajuste costuma ser a diferença entre ter conteúdo bom e ter conteúdo invisível.</p>

<img src="${technicalSeoImg.src}" alt="Análise técnica de SEO com foco em indexação, performance e estrutura" ${bodyImgClass} />`,

  `<h2>O que sobrevive e fica mais forte: autoridade de marca e conteúdo de especialista</h2>
<p>Quando a busca sintetiza, ela precisa de critério. E critério nasce de confiança. Conteúdo de especialista, com autoria e prova real, tende a vencer texto genérico. A mesma lógica que protege seu SEO protege sua citação em IA.</p>

<p>Se você usa IA para produzir conteúdo, existe um limite claro: sem revisão humana e sem experiência real, o texto não sustenta. Para aprofundar esse ponto, leia: <a href="/blog/como-construir-confianca-conteudo-digital-ia" class="text-primary font-bold hover:underline">como construir confiança em conteúdo digital na era da IA</a>.</p>`,

  `<h2>Linha do tempo: busca hoje vs. busca em 2027</h2>
<div class="overflow-x-auto my-8">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr class="bg-primary/10">
        <th class="border border-border p-3 text-left font-semibold">Ano</th>
        <th class="border border-border p-3 text-left font-semibold">Como a busca funciona</th>
        <th class="border border-border p-3 text-left font-semibold">O que o negócio precisa</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-border p-3 font-medium">2010</td>
        <td class="border border-border p-3">Lista de links, palavra-chave exata</td>
        <td class="border border-border p-3">Conteúdo básico e links</td>
      </tr>
      <tr class="bg-muted/30">
        <td class="border border-border p-3 font-medium">2024</td>
        <td class="border border-border p-3">SERP rica, snippets, vídeo, mapas e respostas</td>
        <td class="border border-border p-3">Técnico, UX e E-E-A-T</td>
      </tr>
      <tr>
        <td class="border border-border p-3 font-medium">2027</td>
        <td class="border border-border p-3">Agentes planejam e executam tarefas com menos cliques</td>
        <td class="border border-border p-3">Marca confiável, dados consistentes e conteúdo citável</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Diagrama: busca tradicional vs. busca agêntica</h3>
<div class="bg-secondary/30 p-6 rounded-lg my-6 border-l-4 border-primary">
  <p><strong>Tradicional:</strong> pergunta → lista de links → várias abas → decisão.</p>
  <p><strong>Agêntica:</strong> pergunta + contexto → coleta de fontes → comparação → recomendação → ação.</p>
</div>`,

  `<h2>Plano de adaptação em 3 horizontes</h2>
<h3>Agora</h3>
<ul class="space-y-2 list-disc pl-5 mb-6">
  <li><strong>Corrija a base técnica:</strong> indexação, canonicals, velocidade e mobile.</li>
  <li><strong>Defina 10 perguntas que viram venda:</strong> dúvidas reais do WhatsApp e do balcão.</li>
  <li><strong>Atualize páginas de serviço:</strong> oferta, prova, processo e CTA.</li>
</ul>

<h3>Em 6 meses</h3>
<ul class="space-y-2 list-disc pl-5 mb-6">
  <li><strong>Crie um cluster de autoridade:</strong> 6 a 10 conteúdos profundos no mesmo tema.</li>
  <li><strong>Implemente FAQ consistente:</strong> títulos em pergunta e respostas diretas.</li>
  <li><strong>Ganhe menções externas:</strong> parcerias, podcasts, associações, cases.</li>
</ul>

<h3>Em 1 ano</h3>
<ul class="space-y-2 list-disc pl-5 mb-6">
  <li><strong>Formalize a governança de conteúdo:</strong> revisão, atualização e padrão de autoria.</li>
  <li><strong>Crie páginas por intenção:</strong> comparação, preços, atendimento por cidade ou setor.</li>
  <li><strong>Meça por lead,</strong> não por pageview.</li>
</ul>

<p>Se você quer acelerar esse plano com prioridade e sem aposta no escuro, a rota mais curta é uma conversa objetiva: <a href="/consultoria-seo" class="text-primary font-bold hover:underline">consultoria de SEO</a>.</p>`,

  `<h2>FAQ</h2>
<h3>O que são agentes de IA na busca?</h3>
<p>Agentes de IA na busca são sistemas que não apenas retornam links. Eles planejam etapas, consultam várias fontes e executam tarefas, com o usuário validando o resultado.</p>

<h3>Como o Google pode virar um gerenciador de agentes?</h3>
<p>A ideia é o Google organizar uma tarefa em várias ações, acionar ferramentas e fontes e entregar uma solução pronta. Isso reduz o número de abas que você precisa abrir.</p>

<h3>Isso significa o fim dos cliques?</h3>
<p>Não é o fim, mas muda a distribuição. Parte vira resposta direta e os cliques ficam mais concentrados em fontes citadas e destinos que completam a tarefa.</p>

<h3>O que muda no SEO quando a busca fica mais agêntica?</h3>
<p>O SEO passa a competir por citação e confiança. Conteúdo com estrutura clara, autoria e provas reais tende a ser escolhido como base da resposta.</p>

<h3>O que um negócio brasileiro pode fazer agora para se preparar?</h3>
<p>Fortalecer a base técnica, publicar conteúdo de especialista com dados verificáveis, manter consistência de marca e construir autoridade com menções externas.</p>`,

  `<h2>Conclusão com CTA</h2>
<p>Se 2027 for mesmo o ponto em que a busca vira tarefa, a pergunta muda: você quer disputar clique ou quer ser a fonte em que o sistema confia? Quem começa agora tem vantagem de composto.</p>

<div class="bg-primary/5 p-8 rounded-lg my-10 text-center border border-primary/20 shadow-sm">
  <h3 class="text-2xl font-bold mb-4 text-primary">Prepare seu conteúdo para a busca do futuro</h3>
  <p class="mb-6 text-muted-foreground max-w-2xl mx-auto">Se você quer um plano prático para fortalecer base técnica, estrutura de conteúdo e autoridade de marca, fale com a Otne. A prioridade aqui é resultado, não buzzword.</p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="/consultoria-seo" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Quero um plano de adaptação</a>
    <a href="https://consultingweb.com.br/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">Ver exemplo de site focado em ranqueamento</a>
  </div>
</div>`,
];

export const comoOGoogleVaiFuncionarEm2027Html = sections.join("\n\n");
