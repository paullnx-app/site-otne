/**
 * Artigo 02 — "Sua empresa aparece quando alguém pergunta ao ChatGPT?"
 * Hero (em blog-posts.ts): comparativo-seo-ia.jpg
 * Imagens do corpo: distintas do hero e entre si.
 *   1. framework-decisao-seo-ia.jpg — após o tutorial passo a passo
 *   2. rede-construcao-links.jpg    — após as 5 ações / antes da tabela
 */
import frameworkImg from "@/assets/images/blog/framework-decisao-seo-ia.jpg";
import linkBuildingImg from "@/assets/images/blog/rede-construcao-links.jpg";

const bodyImgClass =
  'class="rounded-xl my-8 w-full max-w-4xl mx-auto object-cover h-[220px] sm:h-[260px]" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 896px"';

/** FAQPage JSON-LD — espelha exatamente o bloco FAQ visível no artigo. */
export const empresaApareceChatgptFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como saber se minha empresa aparece no ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Faça perguntas neutras que imitem um comprador — sem citar sua marca. Depois, perguntas que incluam seu segmento e região. Registre se a IA cita seu site, Google Business Profile ou menções consistentes da marca.",
      },
    },
    {
      "@type": "Question",
      name: "O ChatGPT sempre mostra as mesmas empresas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. As respostas variam por modelo, data do conteúdo, idioma e contexto do prompt. Por isso o teste deve ser repetível e documentado — não uma tentativa única.",
      },
    },
    {
      "@type": "Question",
      name: "O que é GEO em marketing digital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GEO (Generative Engine Optimization) é o conjunto de práticas para aumentar a chance de sua marca ser citada em respostas geradas por IA. O foco é conteúdo claro, verificável e bem conectado a fontes públicas.",
      },
    },
    {
      "@type": "Question",
      name: "Aparecer na IA substitui aparecer no Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "São canais diferentes que se influenciam. Muitas IAs usam a web indexada como base. Um site bem estruturado e citável costuma ajudar em ambos, mas não há garantia única.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para melhorar após as mudanças no site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de rastreamento, autoridade e consistência. Trate como projeto contínuo: corrija a base técnica, publique provas (cases, FAQs) e ganhe menções em fontes confiáveis.",
      },
    },
  ],
};

export const empresaApareceChatgptHtml = `
  <p class="lead"><strong>Sua empresa no ChatGPT</strong> — isso é possível? Em 2026, as IAs generativas já respondem milhões de perguntas sobre serviços, recomendam marcas e orientam decisões de compra. <strong>Por isso</strong>, se seu negócio não aparece nessas respostas, você está perdendo visibilidade sem nem saber. Neste artigo, você vai testar isso agora mesmo — em menos de 10 minutos.</p>

  <p>A maioria dos empresários brasileiros ainda foca toda a energia em Google e redes sociais. <strong>No entanto</strong>, existe uma nova vitrine digital crescendo em paralelo: as IAs generativas. Quando um cliente em potencial pergunta ao ChatGPT "qual agência de marketing você recomenda em São Paulo?", alguém aparece na resposta. Pode ser seu concorrente — ou pode ser você.</p>

  <p>Antes de seguir: se você quer entender o cenário completo entre SEO tradicional e estratégias de IA, leia nosso artigo pilar: <a href="/blog/seo-ou-inteligencia-artificial-onde-apostar-2026" class="text-primary font-bold hover:underline">SEO ou IA: onde o seu negócio deve apostar agora?</a></p>

  <h2>Como funciona a busca dentro das IAs?</h2>

  <p><strong>Busca com IA</strong> é diferente da busca tradicional no Google. No Google, você vê uma lista de links para escolher. Nas IAs generativas, a ferramenta constrói uma resposta completa — usando o que aprendeu durante o treinamento e, dependendo do sistema, também realizando buscas em tempo real na web.</p>

  <p>As três principais plataformas funcionam assim:</p>

  <ul>
    <li><strong>ChatGPT (OpenAI):</strong> combina conhecimento do treinamento com busca na web em tempo real (disponível na versão Plus e superior). Ótimo para testar percepção geral da marca.</li>
    <li><strong>Gemini (Google):</strong> integrado diretamente ao Google Search, atualiza em tempo real com resultados recentes. Especialmente relevante para empresas locais com Google Business Profile ativo.</li>
    <li><strong>Perplexity:</strong> focado em respostas baseadas em fontes citáveis. Mostra de onde vem cada informação — tornando mais fácil identificar se seu site está sendo referenciado.</li>
  </ul>

  <p>O ponto em comum entre todas: <strong>dependem de conteúdo publicado e rastreável online</strong>. Sites, artigos, perfis em diretórios, avaliações e menções em fontes confiáveis alimentam essas respostas. Se sua marca não aparece em conteúdo indexável, as IAs simplesmente não sabem que você existe.</p>

  <h2>Tutorial: como testar se sua empresa aparece (passo a passo)</h2>

  <p>Este tutorial funciona agora. Separe 10 minutos e siga os passos abaixo nas três plataformas. <strong>Importante:</strong> documente cada resultado — data, plataforma, prompt usado e resposta completa.</p>

  <h3>No ChatGPT</h3>
  <ol>
    <li>Acesse <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">chat.openai.com</a> (conta gratuita funciona para testes iniciais).</li>
    <li>Ative a busca na web, se disponível na sua versão.</li>
    <li>Comece com prompts <strong>neutros</strong> — sem citar sua marca diretamente:<br>
      <em>"Qual [seu setor] você recomenda em [sua cidade]?"</em><br>
      <em>"Quais empresas de [seu serviço] são referência no Brasil?"</em>
    </li>
    <li>Depois, teste com sua marca:<br>
      <em>"O que você sabe sobre [nome da empresa]?"</em><br>
      <em>"[Nome da empresa] é confiável?"</em>
    </li>
    <li>Registre: sua empresa aparece? Qual é o tom da resposta? Se não aparecer, quem o ChatGPT cita no lugar?</li>
  </ol>

  <h3>No Gemini</h3>
  <ol>
    <li>Acesse <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">gemini.google.com</a>.</li>
    <li>Use os mesmos prompts neutros do passo anterior.</li>
    <li>Observe se o Gemini cita fontes — e quais são. Seu Google Business Profile aparece?</li>
  </ol>

  <h3>No Perplexity</h3>
  <ol>
    <li>Acesse <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">perplexity.ai</a>.</li>
    <li>Pesquise pelo nome da sua empresa e pelo seu segmento.</li>
    <li>Leia as fontes citadas à direita: seu site, seu GBP ou menções em artigos aparecem lá?</li>
  </ol>

  <p><strong>Repita esse teste</strong> em 30 e 60 dias após as mudanças que você vai aprender a seguir. Comparar os resultados ao longo do tempo é o único jeito de medir evolução real.</p>

  <img src="${frameworkImg}" alt="Fluxograma de processo para testar e monitorar presença de empresa nas IAs generativas" ${bodyImgClass} />

  <h2>Por que algumas empresas aparecem e outras não?</h2>

  <p>Não é sorte e não é pago. As IAs tendem a citar empresas com <strong>presença digital consistente em múltiplas fontes verificáveis</strong>. Veja os motivos mais comuns de invisibilidade:</p>

  <ol>
    <li><strong>Site sem conteúdo de profundidade:</strong> páginas rasas, sem informações específicas sobre serviços, localização ou diferenciais reais.</li>
    <li><strong>Nenhuma menção externa:</strong> falta de matérias, casos de sucesso, avaliações em diretórios ou citações em blogs do setor.</li>
    <li><strong>Google Business Profile desatualizado ou ausente:</strong> para empresas locais, esse é um dos sinais mais lidos pelas IAs — especialmente pelo Gemini.</li>
    <li><strong>Inconsistência de NAP:</strong> Nome, Endereço e Telefone diferentes entre site, GBP e diretórios confundem os sistemas de inferência.</li>
    <li><strong>Conteúdo sem autoria clara:</strong> as IAs priorizam fontes com E-E-A-T evidente — experiência, especialização, autoridade e confiança demonstráveis.</li>
  </ol>

  <p>Problemas técnicos no site também comprometem a citabilidade. Se seu site tem erros de rastreamento, páginas lentas ou links quebrados, as IAs encontram menos material para associar à sua marca. Veja como corrigir isso: <a href="/blog/erros-tecnicos-seo" class="text-primary font-bold hover:underline">5 erros técnicos de SEO que matam seu tráfego</a>.</p>

  <h2>O que é GEO — Generative Engine Optimization?</h2>

  <p><strong>GEO (Generative Engine Optimization) é o conjunto de práticas para aumentar a probabilidade de sua marca ser citada nas respostas geradas por IAs generativas.</strong> É a evolução natural do SEO para um mundo onde nem todo resultado de busca é uma lista de links.</p>

  <p>GEO não substitui SEO. Os dois se complementam. Um site bem construído, com conteúdo de qualidade e autoridade técnica, é o pré-requisito de ambos. O que o GEO adiciona é o foco em <strong>citabilidade</strong>: ser reconhecido pelos modelos de linguagem como uma fonte confiável e relevante.</p>

  <p>As práticas centrais de GEO incluem:</p>

  <ul>
    <li>Criar definições claras e verificáveis sobre temas do seu setor</li>
    <li>Manter consistência de dados da empresa em todas as fontes públicas</li>
    <li>Publicar casos reais, resultados e provas de experiência</li>
    <li>Estruturar conteúdo com FAQ, listas e tabelas — formatos que os modelos de linguagem priorizam ao gerar respostas</li>
    <li>Garantir que o conteúdo tenha autoria identificável e data de publicação clara</li>
  </ul>

  <p>Para entender como E-E-A-T e conteúdo de qualidade sustentam tanto SEO quanto GEO, leia: <a href="/blog/como-construir-confianca-conteudo-digital-ia" class="text-primary font-bold hover:underline">Como construir confiança em conteúdo digital na era da IA</a>.</p>

  <h2>5 ações concretas para aparecer nas respostas das IAs</h2>

  <p>Essas ações são verificáveis e têm efeito cumulativo. Comece pelas primeiras — elas têm retorno mais rápido e custam menos.</p>

  <p><strong>1. Complete e otimize seu Google Business Profile</strong><br>
  Preencha todas as informações: horário, serviços, fotos, respostas a avaliações. O GBP é uma das fontes mais consultadas pelas IAs para empresas locais, especialmente no Gemini.</p>

  <p><strong>2. Publique conteúdo com definições e perguntas reais</strong><br>
  Escreva artigos que respondam exatamente o que seus clientes perguntam. Use H2/H3 como perguntas. Inicie seções com definições no formato "X é...". Inclua FAQ com pelo menos 5 perguntas ao final de cada artigo.</p>

  <p><strong>3. Consiga menções em fontes externas confiáveis</strong><br>
  Matérias em portais do seu setor, participações em podcasts, citações em artigos de terceiros — essas menções criam o rastro que as IAs seguem para identificar autoridade de marca.</p>

  <p><strong>4. Corrija inconsistências de NAP</strong><br>
  Verifique que nome, endereço e telefone estão idênticos em todas as plataformas. Use uma planilha simples para mapear cada presença digital da empresa e eliminar variações.</p>

  <p><strong>5. Adicione schema markup ao seu site</strong><br>
  <code>Organization</code>, <code>LocalBusiness</code> e <code>FAQPage</code> em JSON-LD ajudam as IAs a identificar sua empresa com precisão. É uma ação técnica de configuração única que melhora a citabilidade de longo prazo.</p>

  <img src="${linkBuildingImg}" alt="Rede de conexões representando menções externas e autoridade de marca para citabilidade nas IAs" ${bodyImgClass} />

  <h2>Tabela comparativa: ChatGPT × Gemini × Perplexity</h2>

  <div class="overflow-x-auto my-8">
    <table class="w-full border-collapse text-sm">
      <thead>
        <tr class="bg-primary/10">
          <th class="border border-border p-3 text-left font-semibold">Característica</th>
          <th class="border border-border p-3 text-left font-semibold">ChatGPT</th>
          <th class="border border-border p-3 text-left font-semibold">Gemini</th>
          <th class="border border-border p-3 text-left font-semibold">Perplexity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-border p-3 font-medium">Base de dados</td>
          <td class="border border-border p-3">Treinamento + web (versão Plus)</td>
          <td class="border border-border p-3">Google Search em tempo real</td>
          <td class="border border-border p-3">Web em tempo real</td>
        </tr>
        <tr class="bg-muted/30">
          <td class="border border-border p-3 font-medium">Mostra fontes?</td>
          <td class="border border-border p-3">Parcialmente</td>
          <td class="border border-border p-3">Sim, com links</td>
          <td class="border border-border p-3">Sim, sempre</td>
        </tr>
        <tr>
          <td class="border border-border p-3 font-medium">Foco em empresas locais</td>
          <td class="border border-border p-3">Moderado</td>
          <td class="border border-border p-3">Alto (integrado ao GBP)</td>
          <td class="border border-border p-3">Moderado</td>
        </tr>
        <tr class="bg-muted/30">
          <td class="border border-border p-3 font-medium">Melhor uso no teste</td>
          <td class="border border-border p-3">Percepção geral da marca</td>
          <td class="border border-border p-3">Presença local e recente</td>
          <td class="border border-border p-3">Citabilidade em fontes</td>
        </tr>
        <tr>
          <td class="border border-border p-3 font-medium">Qualidade em PT-BR</td>
          <td class="border border-border p-3">Boa</td>
          <td class="border border-border p-3">Muito boa</td>
          <td class="border border-border p-3">Boa</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Ferramentas para monitorar sua presença nas IAs</h2>

  <p>Medir a evolução é parte fundamental do processo. <strong>Antes de contratar qualquer ferramenta</strong>, defina o que você quer medir — o mercado de monitoramento de presença em IAs ainda está se formando e muda rápido.</p>

  <p>O que vale acompanhar independentemente da ferramenta:</p>

  <ul>
    <li><strong>Frequência</strong> com que seu nome aparece nas respostas das três IAs principais</li>
    <li><strong>Tom das menções:</strong> neutro, positivo ou negativo</li>
    <li><strong>Concorrentes citados</strong> quando você não aparece — eles estão fazendo algo diferente</li>
    <li><strong>Fontes referenciadas</strong> pelas IAs: seu site, GBP, diretórios ou portais de terceiros?</li>
  </ul>

  <p><strong>Como fazer sem ferramentas pagas:</strong> crie um documento compartilhado com os prompts padronizados deste tutorial. Registre data, plataforma e resposta completa. Repita mensalmente. Em três meses, você terá uma linha do tempo real de evolução.</p>

  <p>Se quiser ir além, priorize ferramentas que entregam dados acionáveis — não apenas relatórios de vaidade. Valide se a ferramenta cobre as IAs que seus clientes realmente usam e se o custo justifica o volume de dados para o porte do seu negócio.</p>

  <h2>FAQ</h2>

  <h3>Como saber se minha empresa aparece no ChatGPT?</h3>
  <p>Faça perguntas neutras que imitem um comprador — sem citar sua marca. Depois, perguntas que incluam seu segmento e região. Registre se a IA cita seu site, Google Business Profile ou menções consistentes da marca.</p>

  <h3>O ChatGPT sempre mostra as mesmas empresas?</h3>
  <p>Não. As respostas variam por modelo, data do conteúdo, idioma e contexto do prompt. <strong>Por isso</strong>, o teste deve ser repetível e documentado — não uma tentativa única.</p>

  <h3>O que é GEO em marketing digital?</h3>
  <p><strong>GEO (Generative Engine Optimization)</strong> é o conjunto de práticas para aumentar a chance de sua marca ser citada em respostas geradas por IA. O foco é conteúdo claro, verificável e bem conectado a fontes públicas.</p>

  <h3>Aparecer na IA substitui aparecer no Google?</h3>
  <p>São canais diferentes que se influenciam. Muitas IAs usam a web indexada como base. <strong>Assim</strong>, um site bem estruturado e citável costuma ajudar em ambos — mas não há garantia única para nenhum dos canais.</p>

  <h3>Quanto tempo leva para melhorar após as mudanças no site?</h3>
  <p>Depende de rastreamento, autoridade e consistência. Trate como projeto contínuo: corrija a base técnica, publique provas (cases, FAQs) e ganhe menções em fontes confiáveis. Resultados costumam aparecer entre 60 e 120 dias de esforço consistente.</p>

  <h2>Conclusão: o teste que você pode fazer hoje</h2>

  <p><strong>Visibilidade nas inteligências artificiais</strong> já é realidade para empresas que investem em presença digital consistente. A boa notícia: você pode saber onde está agora mesmo, com os prompts deste artigo — sem pagar nada.</p>

  <p>O caminho é claro. <strong>Primeiro</strong>, faça o teste e documente o resultado. <strong>Em seguida</strong>, corrija a base técnica do site. <strong>Depois</strong>, publique conteúdo com definições reais, FAQ e autoria identificável. <strong>Por fim</strong>, busque menções em fontes externas confiáveis.</p>

  <p><strong>Otimização para IA</strong> não é ação pontual — é processo. Quem começa agora sai na frente de concorrentes que ainda nem perceberam que essa vitrine existe.</p>

  <div class="bg-primary/5 p-8 rounded-lg my-10 text-center border border-primary/20 shadow-sm">
    <h3 class="text-2xl font-bold mb-4 text-primary">Sua empresa aparece quando o cliente pergunta ao ChatGPT?</h3>
    <p class="mb-6 text-muted-foreground max-w-2xl mx-auto">Faça o teste com os prompts do tutorial. Se quiser um plano priorizado para citabilidade e SEO — cobrindo base técnica, conteúdo e autoridade — fale com a equipe Otne.</p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/consultoria-seo" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        QUERO APARECER NAS IAs
      </a>
    </div>
    <p class="mt-4 text-sm text-muted-foreground">Diagnóstico gratuito. Sem compromisso.</p>
  </div>
`;
