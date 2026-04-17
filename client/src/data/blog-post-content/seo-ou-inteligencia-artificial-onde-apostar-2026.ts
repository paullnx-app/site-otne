import futureSeoImg from "@/assets/images/blog/future-seo-2026.jpg";
import aiTrustImg from "@/assets/images/blog/ai-trust-human.jpg";

/** FAQPage JSON-LD (BlogPost pode referenciar em post.tsx). */
export const seoOuInteligenciaArtificialFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Preciso parar de investir em SEO para investir em IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não necessariamente. IA costuma acelerar produção e análise, mas SEO ainda organiza a descoberta na busca clássica. Trate IA como alavanca, não como substituto total de arquitetura e intenção.",
      },
    },
    {
      "@type": "Question",
      name: "O que é AEO, em uma frase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AEO é a prática de estruturar conteúdo com respostas curtas, headings em pergunta e FAQ para facilitar citação em interfaces de resposta.",
      },
    },
    {
      "@type": "Question",
      name: "GEO marketing digital é a mesma coisa que SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. GEO marketing digital, no sentido deste artigo, foca formato citável (definições, listas, tabelas). SEO cobre sinais mais amplos de busca, técnico e autoridade.",
      },
    },
    {
      "@type": "Question",
      name: "Como escolher entre SEO e IA para meu negócio em 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use um framework: verifique se o site já converte tráfego, defina queries que pagam a conta, avalie necessidade local, garanta revisão humana de conteúdo assistido por IA e meça resultado em leads.",
      },
    },
    {
      "@type": "Question",
      name: "Vale a pena investir em SEO em 2026 se meu concorrente usa IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, com ressalvas. Se o concorrente publica volume com IA sem revisão, você pode ganhar com profundidade, prova e experiência real no conteúdo, combinando qualidade humana com ferramentas.",
      },
    },
  ],
} as const;

const sections: string[] = [
  `<p class="lead"><strong>SEO ou inteligência artificial</strong> — onde colocar o próximo real? Em 2026, essa pergunta aparece em reuniões, grupos de WhatsApp e orçamentos de marketing. <strong>Portanto</strong>, vamos responder com calma.</p>

<h2>Introdução: o dilema real que todo empresário está enfrentando</h2>
<p><strong>Resposta direta:</strong> não é escolha única. Na prática, <strong>SEO</strong> (aparecer bem na busca clássica) e <strong>uso estratégico de IA</strong> (conteúdo, análise, automação) convivem. O erro comum é tratar <strong>busca com IA</strong> como substituto total do trabalho de base.</p>

<p><strong>Além disso</strong>, o mercado empurra dois extremos. De um lado, quem diz que “SEO morreu”. De outro, quem ignora que <strong>tráfego orgânico 2026</strong> ainda nasce de problema bem definido, página boa e autoridade. <strong>Assim</strong>, este texto entrega um <strong>framework de decisão</strong> e um <strong>checklist</strong> para o seu perfil.</p>

<p><strong>Na prática</strong>, o que mais vemos em diagnósticos é decisão tomada por narrativa, não por dado. <strong>Enfim</strong>, você vai sair com critérios claros — não com “modinha”.</p>

<p>Se você quer um <strong>guia completo de SEO para 2026</strong> com visão macro, leia também o nosso <a href="/blog/guia-seo-2026" class="text-primary font-bold hover:underline">guia completo de SEO para 2026</a>. Aqui o foco é decidir investimento com método.</p>

<img src="${futureSeoImg}" alt="Empresária analisando métricas de SEO e estratégia de marketing digital em 2026" class="rounded-xl my-8 w-full object-cover h-[300px]" />`,

  `<h2>O que mudou na busca em 2026 (contexto em três blocos)</h2>
<p><strong>Primeiro</strong>, a busca ganhou camadas. O usuário pesquisa no Google, em apps e em assistentes. <strong>Por isso</strong>, “ranquear” virou família de tarefas: clássica, com respostas geradas e com citação em ferramentas de IA.</p>

<p><strong>Em segundo lugar</strong>, a qualidade do sinal importa mais. Páginas genéricas perdem para conteúdo com <strong>experiência</strong> clara, fontes e utilidade. <strong>Da mesma forma</strong>, conteúdo feito só para volume sem revisão humana tende a irritar leitor e crawler.</p>

<p><strong>Terceiro</strong>, a <strong>estratégia de marketing digital 2026</strong> precisa de métrica de negócio. Tráfego sem conversão não paga conta. <strong>Logo</strong>, o artigo ancora decisões em <strong>custo de aquisição</strong>, prazo e risco — não em hype.</p>

<p>Para base técnica oficial sobre como o Google pensa busca e qualidade, use a documentação do <a href="https://developers.google.com/search/docs" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Google para desenvolvedores — Search Central</a>. <strong>Outrossim</strong>, evitamos prometer “fórmula mágica”: aqui há método.</p>`,

  `<h2>SEO ou inteligência artificial: o que os dados costumam mostrar (sem sensacionalismo)</h2>
<p><strong>SEO ainda funciona?</strong> Em geral, sim — quando significa <strong>problema correto</strong>, página rápida, intenção atendida e reputação. <strong>Contudo</strong>, “funciona” não quer dizer “post de 300 palavras ranqueia amanhã”.</p>

<p><strong>Na prática</strong>, vemos três padrões em projetos de <strong>consultoria de SEO</strong> para PMEs:</p>
<ul class="space-y-2 list-disc pl-5 mb-6">
<li><strong>Sites novos</strong> precisam de tempo e consistência. <strong>Portanto</strong>, esperar resultado em 30 dias é raro.</li>
<li><strong>Sites com histórico</strong> melhoram com ajuste técnico e conteúdo alinhado à intenção. <strong>Assim</strong>, ganhos podem vir em ondas.</li>
<li><strong>Sites com penalidade ou arquitetura frágil</strong> precisam de diagnóstico antes de escalar produção. <strong>Por conseguinte</strong>, IA não resolve buraco técnico sozinha.</li>
</ul>

<p>Se o tema é “<strong>vale a pena investir em SEO em 2026</strong>”, a resposta depende do seu <strong>ciclo de venda</strong> e da margem. <strong>Enfim</strong>, SEO costuma ser <strong>ativo composto</strong>: demora, porém acumula.</p>

<p>Para aprofundar riscos técnicos, veja o artigo sobre <a href="/blog/erros-tecnicos-seo" class="text-primary font-bold hover:underline">erros técnicos de SEO que drenam tráfego</a>.</p>

<img src="${aiTrustImg}" alt="Ilustração de crescimento de tráfego orgânico e otimização para buscadores" class="rounded-xl my-8 w-full object-cover h-[300px]" />`,

  `<h2>O que é busca por IA e como ela afeta negócios reais</h2>
<p><strong>Busca por IA</strong> é o ato de pedir resposta a um modelo (resumo, comparação, roteiro) em interface de chat ou recurso integrado em buscador. <strong>Isto é</strong>, o usuário recebe texto sintetizado, nem sempre com link clicável como antes.</p>

<p><strong>Como isso afeta o negócio?</strong></p>
<ul class="space-y-2 list-disc pl-5 mb-6">
<li><strong>Primeiro</strong>, parte da descoberta migra para respostas curtas. <strong>Assim</strong>, marcas precisam de definições claras e fatos verificáveis.</li>
<li><strong>Segundo</strong>, a marca pode ser citada sem visita imediata ao site. <strong>Porém</strong>, ainda existe caminho para tráfego quando a resposta recomenda fontes.</li>
<li><strong>Terceiro</strong>, conteúdo confiável vira moeda. <strong>Por isso</strong>, pautas sobre <strong>confiança em conteúdo digital na era da IA</strong> importam para E-E-A-T.</li>
</ul>

<p>Leia o guia <a href="/blog/como-construir-confianca-conteudo-digital-ia" class="text-primary font-bold hover:underline">como construir confiança em conteúdo digital na era da IA</a>. <strong>Além disso</strong>, para intenção de compra, o artigo <a href="/blog/como-aparecer-nas-buscas-do-seu-cliente" class="text-primary font-bold hover:underline">por que o concorrente aparece no Google e você não</a> ajuda a alinhar mensagem à busca real do cliente.</p>

<p><strong>Otimização para ChatGPT</strong> (e similares) não é “truque oculto”. <strong>Em outras palavras</strong>, é <strong>clareza</strong>, estrutura, dados e consistência — o mesmo espírito do bom <strong>SEO 2026</strong>, com formato que modelos conseguem extrair.</p>`,

  `<h2>Framework de decisão: cinco perguntas para responder antes de escolher</h2>
<p>Responda com honestidade. <strong>Se acaso</strong> marque muitos “não”, priorize base antes de escalar IA.</p>

<h3>1) O seu site converte hoje tráfego qualificado?</h3>
<p><strong>Se não</strong>, ajuste página de serviço, velocidade e mensagem antes de discutir ferramenta. <strong>Logo</strong>, IA acelera texto, não fecha venda sozinha.</p>

<h3>2) Você sabe quais queries pagam a conta?</h3>
<p><strong>Sem isso</strong>, você produz conteúdo aleatório. <strong>Portanto</strong>, faça mini-pesquisa de intenção com buscas reais e concorrentes.</p>

<h3>3) O seu negócio depende de prova local?</h3>
<p><strong>Em caso positivo</strong>, <strong>SEO local</strong> e perfil de empresa importam muito. <strong>Assim</strong>, veja o <a href="/blog/seo-local-para-pequenas-empresas" class="text-primary font-bold hover:underline">guia de SEO local para pequenas empresas</a>.</p>

<h3>4) Você tem pessoa para revisar conteúdo assistido por IA?</h3>
<p><strong>Sem revisão</strong>, o risco é página “correta” e vazia de experiência. <strong>Dessa forma</strong>, combine IA com editor humano.</p>

<h3>5) Você mede resultado em lead, não em “post publicado”?</h3>
<p><strong>Por fim</strong>, métrica boa evita discussão ideológica entre times. <strong>Enfim</strong>, números cortam ruído.</p>

<img src="${futureSeoImg}" alt="Fluxograma de decisão entre priorizar SEO tradicional, IA ou combinação dos dois no marketing" class="rounded-xl my-8 w-full object-cover h-[300px]" />`,

  `<h2>Checklist: quando priorizar SEO, IA ou os dois</h2>
<p>Use como <strong>roteiro interno</strong>. <strong>Além disso</strong>, salve em planilha e revise trimestralmente.</p>

<p><strong>Priorize SEO clássico (base) quando:</strong></p>
<ol class="space-y-2 list-decimal pl-5 mb-6">
<li>Você precisa de demanda estável por busca.</li>
<li>O ticket é médio ou alto e a jornada pesquisa muito.</li>
<li>Você tem poucos canais pagos. <strong>Assim</strong>, orgânico reduz dependência.</li>
</ol>

<p><strong>Priorize IA como acelerador (com governança) quando:</strong></p>
<ol class="space-y-2 list-decimal pl-5 mb-6">
<li>Você já tem estratégia de palavra-chave.</li>
<li>Você precisa escalar rascunhos com revisão.</li>
<li>Você quer resumir dados internos para páginas de vendas.</li>
</ol>

<p><strong>Combine os dois quando:</strong></p>
<ol class="space-y-2 list-decimal pl-5 mb-6">
<li>Você publica com frequência e precisa manter qualidade.</li>
<li>Você testa landing pages com variações. <strong>Porém</strong>, sempre com checagem factual.</li>
</ol>

<p>Para <strong>marketing digital para empresários</strong> com foco em plano e métricas, leia o <a href="/blog/marketing-digital-para-empresarios" class="text-primary font-bold hover:underline">guia prático de marketing digital para empresários</a>.</p>

<img src="${aiTrustImg}" alt="Checklist de marketing com itens sobre SEO, IA e métricas de resultado" class="rounded-xl my-8 w-full object-cover h-[300px]" />`,

  `<h2>Orientação por perfil de negócio (local, e-commerce, B2B, startup)</h2>

<h3>Negócio local (bairro, cidade, região)</h3>
<p><strong>Local é</strong> demanda com intenção imediata. <strong>Portanto</strong>, Google Business Profile, NAP consistente e páginas por serviço ajudam. <strong>Além disso</strong>, use o <a href="/blog/como-aparecer-no-google-maps" class="text-primary font-bold hover:underline">guia de como aparecer no Google Maps</a>.</p>

<h3>E-commerce</h3>
<p><strong>E-commerce vive</strong> de escala, taxa de erro e estoque de conteúdo. <strong>Assim</strong>, SEO técnico e páginas de categoria são base. <strong>IA</strong> pode apoiar descrições, mas <strong>não</strong> substitui política de preço e logística.</p>

<h3>B2B com ciclo longo</h3>
<p><strong>B2B exige</strong> prova, cases e páginas por segmento. <strong>Logo</strong>, conteúdo profundo e linkagem interna sustentam autoridade. <strong>Veja</strong> também <a href="/blog/como-aumentar-autoridade-conquistar-links" class="text-primary font-bold hover:underline">como aumentar autoridade e conquistar links</a>.</p>

<h3>Startup em fase de tração</h3>
<p><strong>Startups</strong> precisam velocidade. <strong>Contudo</strong>, atalho sem mensagem clara queima orçamento. <strong>Por isso</strong>, use IA para experimentar, mas fixe <strong>posicionamento</strong> cedo.</p>

<p>Conheça a <a href="/quem-somos" class="text-primary font-bold hover:underline">equipe e a abordagem da Otne</a>. <strong>Enfim</strong>, alinhar expectativa evita fricção com agência ou time interno.</p>

<img src="${futureSeoImg}" alt="Quatro perfis de negócio — local, e-commerce, B2B e startup — para orientação de SEO e IA" class="rounded-xl my-8 w-full object-cover h-[300px]" />`,

  `<h2>Tabela comparativa de referência rápida (SEO vs AEO vs GEO)</h2>
<p><strong>SEO</strong> é o conjunto de práticas para melhorar visibilidade e relevância em buscadores tradicionais. <strong>AEO</strong> (<em>Answer Engine Optimization</em>) é o conjunto de práticas para respostas diretas, headings em pergunta e formato citável. <strong>GEO</strong> (<em>Generative Engine Optimization</em>, na definição usada aqui) é otimizar formato e clareza para síntese por modelos generativos (listas, definições, tabelas).</p>

<div class="overflow-x-auto my-8">
<table class="w-full text-sm border-collapse border border-border">
<thead>
<tr class="bg-muted/50">
<th class="border border-border p-3 text-left font-bold">Pilar</th>
<th class="border border-border p-3 text-left font-bold">Definição curta</th>
<th class="border border-border p-3 text-left font-bold">Quando usar</th>
<th class="border border-border p-3 text-left font-bold">Resultado esperado</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-border p-3 font-semibold">SEO</td>
<td class="border border-border p-3">Otimização para buscadores clássicos</td>
<td class="border border-border p-3">Base estável de aquisição</td>
<td class="border border-border p-3">Tráfego orgânico e leads qualificados ao longo do tempo</td>
</tr>
<tr>
<td class="border border-border p-3 font-semibold">AEO</td>
<td class="border border-border p-3">Otimização para “motores de resposta”</td>
<td class="border border-border p-3">Páginas com dúvidas frequentes</td>
<td class="border border-border p-3">Trechos citáveis e melhor ocupação de espaço em SERP</td>
</tr>
<tr>
<td class="border border-border p-3 font-semibold">GEO</td>
<td class="border border-border p-3">Formatação amigável a IA generativa</td>
<td class="border border-border p-3">Conteúdos densos que viram resumo</td>
<td class="border border-border p-3">Maior chance de inclusão em respostas com lista ou comparação</td>
</tr>
</tbody>
</table>
</div>

<p><strong>Em resumo</strong>, os três se reforçam. <strong>Todavia</strong>, SEO sem página útil não sustenta os outros.</p>

<img src="${aiTrustImg}" alt="Tabela comparativa entre SEO, AEO e GEO para marketing digital em 2026" class="rounded-xl my-8 w-full object-cover h-[300px]" />`,

  `<h2>FAQ: cinco perguntas frequentes (formato snippet)</h2>

<h3>Preciso parar de investir em SEO para investir em IA?</h3>
<p><strong>Não necessariamente.</strong> <strong>Em geral</strong>, IA acelera produção e análise, mas <strong>SEO</strong> ainda organiza descoberta em busca clássica. <strong>Portanto</strong>, trate IA como alavanca, não como substituto total de arquitetura e intenção.</p>

<h3>O que é AEO, em uma frase?</h3>
<p><strong>AEO</strong> é a prática de estruturar conteúdo com <strong>respostas curtas</strong>, headings em pergunta e FAQ para facilitar citação em interfaces de resposta.</p>

<h3>GEO marketing digital é a mesma coisa que SEO?</h3>
<p><strong>Não.</strong> <strong>GEO marketing digital</strong>, no sentido deste artigo, foca <strong>formato citável</strong> (definições, listas, tabelas). <strong>SEO</strong> cobre sinais mais amplos de busca, técnico e autoridade.</p>

<h3>Como escolher entre SEO e IA para meu negócio em 2026?</h3>
<p><strong>Use o framework deste artigo.</strong> <strong>Primeiro</strong>, defina se você já converte tráfego. <strong>Em seguida</strong>, defina queries que pagam a conta. <strong>Por fim</strong>, decida se precisa de base técnica antes de escalar conteúdo com IA.</p>

<h3>Vale a pena investir em SEO em 2026 se meu concorrente usa IA?</h3>
<p><strong>Sim, com ressalvas.</strong> <strong>Se</strong> seu concorrente publica volume com IA sem revisão, você ganha com <strong>profundidade</strong> e <strong>prova</strong>. <strong>Assim</strong>, combine qualidade humana com ferramentas.</p>`,

  `<h2>Checklist para aplicar hoje (SEO / IA / ambos)</h2>
<p><strong>Título interno:</strong> qual estratégia é certa para o meu negócio?</p>
<ol class="space-y-2 list-decimal pl-5 mb-6">
<li>Meu site converte tráfego qualificado hoje? (sim / não)</li>
<li>Eu listei as 20 queries que mais geram receita? (sim / não)</li>
<li>Eu tenho revisão humana para conteúdo feito com IA? (sim / não)</li>
<li>Meu negócio depende de busca local? (sim / não)</li>
<li>Eu tenho métrica de lead ou venda, não só de pageview? (sim / não)</li>
<li>Eu corrigi erros técnicos críticos (indexação, velocidade, canônico)? (sim / não)</li>
<li>Eu tenho página de serviço clara por oferta? (sim / não)</li>
<li>Eu publico com regularidade mínima mensurável? (sim / não)</li>
</ol>
<p><strong>Interpretação rápida:</strong> muitos “não” nas três primeiras → priorize <strong>SEO</strong> e base. Muitos “sim” nas de conteúdo → <strong>SEO</strong> + <strong>IA</strong> com governança.</p>`,

  `<h2>Conclusão: três decisões que você pode tomar hoje</h2>
<p><strong>Primeiro</strong>, pare de tratar <strong>SEO ou inteligência artificial</strong> como guerra de time. <strong>Em síntese</strong>, o jogo é <strong>sistema</strong>: base técnica, intenção, conteúdo revisado e métrica de negócio.</p>

<p><strong>Segundo</strong>, use a tabela <strong>SEO / AEO / GEO</strong> para planejar formato, não só palavra-chave. <strong>Logo</strong>, cada página ganha função clara.</p>

<p><strong>Terceiro</strong>, se você quer diagnóstico com critério comercial, fale com a Otne. <strong>Por conseguinte</strong>, indicamos o próximo passo com prioridade honesta.</p>

<div class="bg-primary/5 p-8 rounded-lg my-10 text-center border border-primary/20 shadow-sm">
<h3 class="text-2xl font-bold mb-4 text-primary">Próximo passo: diagnóstico com a Otne</h3>
<p class="mb-6 text-muted-foreground max-w-2xl mx-auto">Solicite uma conversa sobre consultoria em SEO estratégica para PMEs. Explore também o blog para aprofundar clusters de conteúdo.</p>
<div class="flex flex-col sm:flex-row gap-4 justify-center">
<a href="/consultoria-seo" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Falar sobre consultoria em SEO</a>
<a href="/blog" class="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">Ver mais artigos no blog</a>
</div>
</div>`,
];

export const seoOuInteligenciaArtificialHtml = sections.join("\n\n");
