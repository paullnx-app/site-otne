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
      name: "O que sao agentes de IA na busca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agentes de IA na busca sao sistemas que nao apenas retornam links. Eles planejam etapas, consultam varias fontes e executam tarefas (comparar, reservar, comprar, gerar relatarios) com o usuario validando o resultado.",
      },
    },
    {
      "@type": "Question",
      name: "Como o Google pode virar um gerenciador de agentes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A ideia e o Google organizar uma tarefa em varias acoes, acionar ferramentas e fontes e entregar a resposta final. Em vez de voce abrir 10 abas, o sistema faz a triagem e devolve uma solucao pronta.",
      },
    },
    {
      "@type": "Question",
      name: "Isso significa o fim dos cliques?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nao e o fim, mas muda a distribuicao. Parte das consultas vira resposta direta, e os cliques ficam mais concentrados em fontes citadas, paginas de comparacao e destinos que completam a tarefa.",
      },
    },
    {
      "@type": "Question",
      name: "O que muda no SEO quando a busca fica mais agntica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O SEO deixa de competir apenas por posicao e passa a competir por citacao e confianca. Conteudo com estrutura clara, autoria e provas reais tende a ser escolhido como base para respostas e recomendacoes.",
      },
    },
    {
      "@type": "Question",
      name: "O que um negocio brasileiro pode fazer agora para se preparar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fortalecer base tecnica, publicar conteudo de especialista com dados verificaveis, melhorar consistencia de marca (NAP, contato, politica) e construir autoridade com mencoes externas. Isso aumenta a chance de ser recomendado por IA e encontrado no Google.",
      },
    },
  ],
} as const;

const sections: string[] = [
  `<p class="lead"><strong>Futuro do Google 2027</strong> nao e papo de ficcao. A busca esta mudando na frente de todo mundo. O que antes era um campo de links esta virando um sistema que resolve tarefas. Para um negocio brasileiro, isso tem um efeito direto: como voce aparece quando o cliente pede uma recomendacao pronta.</p>

<p>O gancho aqui vem de uma declaracao publica atribuida ao CEO do Google, Sundar Pichai, sobre 2027 como ponto de virada para experiencias agnticas. Nao da para tratar isso como fofoca de mercado. Quando o Google sinaliza uma mudanca desse tamanho, o impacto chega primeiro em quem depende de trafego organico para vender.</p>

<p>Se voce quer um panorama do que ja mudou no SEO em 2026, vale ler antes: <a href="/blog/guia-seo-2026" class="text-primary font-bold hover:underline">guia completo de SEO para 2026</a>.</p>`,

  `<h2>O que o CEO do Google disse e por que isso importa para voce</h2>
<p><strong>Resposta direta:</strong> a busca tende a virar um gerenciador de agentes. Em vez de voce pesquisar, comparar e decidir abrindo varias paginas, o sistema faz parte desse trabalho e devolve uma opcao pronta. Isso muda a logica de visibilidade.</p>

<p>Para quem vende servico, o risco e claro: menos cliques para artigos genericos e mais peso para marcas que viram referencia. Para quem vende produto, a mudanca aparece como comparacao automatizada e recomendacao por criterios. O nome da sua empresa precisa estar em fontes que o sistema confia.</p>

<p>Fonte de autoridade para contexto sobre direcao de busca e IA: <a href="https://developers.google.com/search/docs" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Google Search Central</a>.</p>`,

  `<h2>O que sao agentes de IA na busca, explicado sem tecniquês</h2>
<p><strong>Agentes de IA</strong> sao sistemas que recebem uma meta e executam etapas para chegar la. Em vez de responder uma pergunta com um texto pronto, eles podem:</p>
<ul class="space-y-2 list-disc pl-5 mb-6">
  <li>entender contexto (orcamento, regiao, preferencia, prazo)</li>
  <li>buscar fontes (sites, mapas, reviews, documentos)</li>
  <li>comparar opcoes e justificar a escolha</li>
  <li>executar a acao (agendar, comprar, preencher cadastro) quando permitido</li>
</ul>

<p>Na pratica, isso parece simples: o cliente pergunta e ja recebe a melhor opcao para ele. O problema e que essa melhor opcao depende de sinais publicos. Se voce nao tem sinais, voce nao entra na lista.</p>

<img src="${aiTrustImg.src}" alt="Confianca e verificacao de informacoes em conteudo para busca com IA" ${bodyImgClass} />`,

  `<h2>Como a busca vai funcionar com agentes e o que acontece com os cliques</h2>
<p><strong>O clique nao some.</strong> Ele muda de lugar. Em consultas de topo de funil, a resposta pode ser entregue ali mesmo. Em consultas de compra, o usuario ainda precisa finalizar em algum lugar: site, WhatsApp, loja, checkout, formulario.</p>

<p>O que muda e a distribuicao. Em vez de 10 resultados dividirem a atencao, duas ou tres fontes viram base da resposta. O restante perde impressao e oportunidade.</p>

<p>Na nossa pratica, isso ja aparece em pequenas coisas: a pessoa chega no WhatsApp com uma pergunta mais informada e com criterios claros. Ela nao quer discurso, quer confirmacao.</p>`,

  `<h2>O que muda para trafego organico e SEO</h2>
<p><strong>SEO nao vira inutil.</strong> Ele vira mais exigente. A base tecnica continua sendo o filtro de entrada. Se seu site e lento, confuso ou dificil de rastrear, voce perde duas vezes: no ranking e na citacao por IA.</p>

<p>Para diagnosticar sua base, comece pelo essencial: <a href="/blog/erros-tecnicos-seo" class="text-primary font-bold hover:underline">erros tecnicos de SEO que drenam trafego</a>. Esse ajuste costuma ser a diferenca entre ter conteudo bom e ter conteudo invisivel.</p>

<img src="${technicalSeoImg.src}" alt="Analise tecnica de SEO com foco em indexacao, performance e estrutura" ${bodyImgClass} />`,

  `<h2>O que sobrevive e vira mais forte: autoridade de marca e conteudo de especialista</h2>
<p>Quando a busca sintetiza, ela precisa de criterio. E criterio nasce de confianca. Conteudo de especialista, com autoria e prova real, tende a vencer texto generico. A mesma logica que protege seu SEO protege sua citacao em IA.</p>

<p>Se voce usa IA para produzir conteudo, existe um limite claro: sem revisao humana e sem experiencia real, o texto nao sustenta. Para aprofundar esse ponto, leia: <a href="/blog/como-construir-confianca-conteudo-digital-ia" class="text-primary font-bold hover:underline">como construir confianca em conteudo digital na era da IA</a>.</p>`,

  `<h2>Linha do tempo: busca hoje vs busca em 2027</h2>
<div class="overflow-x-auto my-8">
  <table class="w-full border-collapse text-sm">
    <thead>
      <tr class="bg-primary/10">
        <th class="border border-border p-3 text-left font-semibold">Ano</th>
        <th class="border border-border p-3 text-left font-semibold">Como a busca funciona</th>
        <th class="border border-border p-3 text-left font-semibold">O que o negocio precisa</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-border p-3 font-medium">2010</td>
        <td class="border border-border p-3">Lista de links, palavra chave exata</td>
        <td class="border border-border p-3">Conteudo basico e links</td>
      </tr>
      <tr class="bg-muted/30">
        <td class="border border-border p-3 font-medium">2024</td>
        <td class="border border-border p-3">SERP rica, snippets, video, mapas e respostas</td>
        <td class="border border-border p-3">Tecnico, UX e E-E-A-T</td>
      </tr>
      <tr>
        <td class="border border-border p-3 font-medium">2027</td>
        <td class="border border-border p-3">Agentes planejam e executam tarefas com menos cliques</td>
        <td class="border border-border p-3">Marca confiavel, dados consistentes e conteudo citavel</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Diagrama: busca tradicional vs busca agntica</h3>
<div class="bg-secondary/30 p-6 rounded-lg my-6 border-l-4 border-primary">
  <p><strong>Tradicional:</strong> pergunta → lista de links → varias abas → decisao.</p>
  <p><strong>Agntica:</strong> pergunta + contexto → coleta de fontes → comparacao → recomendacao → acao.</p>
</div>`,

  `<h2>Plano de adaptacao em 3 horizontes</h2>
<h3>Agora</h3>
<ul class="space-y-2 list-disc pl-5 mb-6">
  <li><strong>Corrija base tecnica:</strong> indexacao, canonicals, velocidade e mobile.</li>
  <li><strong>Defina 10 perguntas que viram venda:</strong> duvidas reais do WhatsApp e do balcão.</li>
  <li><strong>Atualize paginas de servico:</strong> oferta, prova, processo e CTA.</li>
</ul>

<h3>Em 6 meses</h3>
<ul class="space-y-2 list-disc pl-5 mb-6">
  <li><strong>Crie cluster de autoridade:</strong> 6 a 10 conteudos profundos no mesmo tema.</li>
  <li><strong>Implemente FAQ consistente:</strong> headings em pergunta e respostas diretas.</li>
  <li><strong>Ganhe mencoes externas:</strong> parcerias, podcasts, associacoes, cases.</li>
</ul>

<h3>Em 1 ano</h3>
<ul class="space-y-2 list-disc pl-5 mb-6">
  <li><strong>Formalize governanca de conteudo:</strong> revisao, atualizacao e padrao de autoria.</li>
  <li><strong>Crie paginas por intencao:</strong> comparacao, precos, atendimento por cidade ou setor.</li>
  <li><strong>Meça por lead:</strong> nao por pageview.</li>
</ul>

<p>Se voce quer acelerar esse plano com prioridade e sem aposta no escuro, a rota mais curta e uma conversa objetiva: <a href="/consultoria-seo" class="text-primary font-bold hover:underline">consultoria de SEO</a>.</p>`,

  `<h2>FAQ</h2>
<h3>O que sao agentes de IA na busca?</h3>
<p>Agentes de IA na busca sao sistemas que nao apenas retornam links. Eles planejam etapas, consultam varias fontes e executam tarefas, com o usuario validando o resultado.</p>

<h3>Como o Google pode virar um gerenciador de agentes?</h3>
<p>A ideia e o Google organizar uma tarefa em varias acoes, acionar ferramentas e fontes e entregar uma solucao pronta. Isso reduz o numero de abas que voce precisa abrir.</p>

<h3>Isso significa o fim dos cliques?</h3>
<p>Nao e o fim, mas muda a distribuicao. Parte vira resposta direta e os cliques ficam mais concentrados em fontes citadas e destinos que completam a tarefa.</p>

<h3>O que muda no SEO quando a busca fica mais agntica?</h3>
<p>O SEO passa a competir por citacao e confianca. Conteudo com estrutura clara, autoria e provas reais tende a ser escolhido como base da resposta.</p>

<h3>O que um negocio brasileiro pode fazer agora para se preparar?</h3>
<p>Fortalecer base tecnica, publicar conteudo de especialista com dados verificaveis, manter consistencia de marca e construir autoridade com mencoes externas.</p>`,

  `<h2>Conclusao com CTA</h2>
<p>Se 2027 for mesmo o ponto em que a busca vira tarefa, a pergunta muda: voce quer disputar clique ou quer ser a fonte em que o sistema confia. Quem comeca agora tem vantagem de composto.</p>

<div class="bg-primary/5 p-8 rounded-lg my-10 text-center border border-primary/20 shadow-sm">
  <h3 class="text-2xl font-bold mb-4 text-primary">Prepare seu conteudo para a busca do futuro</h3>
  <p class="mb-6 text-muted-foreground max-w-2xl mx-auto">Se voce quer um plano pratico para fortalecer base tecnica, estrutura de conteudo e autoridade de marca, fale com a Otne. A prioridade aqui e resultado, nao buzzword.</p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="/consultoria-seo" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Quero um plano de adaptacao</a>
    <a href="https://consultingweb.com.br/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">Ver exemplo de site focado em ranqueamento</a>
  </div>
</div>`,
];

export const comoOGoogleVaiFuncionarEm2027Html = sections.join("\n\n");

