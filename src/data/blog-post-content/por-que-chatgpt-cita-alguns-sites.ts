/**
 * Artigo 06
 * Links externos: exatamente 2 (1 autoridade + 1 parceiro).
 */
import aiTrustImg from "@/assets/images/blog/confianca-conteudo-ia.jpg";
import frameworkImg from "@/assets/images/blog/framework-decisao-seo-ia.jpg";

const bodyImgClass =
  'class="rounded-xl my-8 w-full max-w-4xl mx-auto object-cover h-[220px] sm:h-[260px]" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 896px"';

export const porQueChatgptCitaAlgunsSitesFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Por que o ChatGPT cita alguns sites e ignora outros?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Em geral, o ChatGPT tende a citar fontes mais confiaveis, claras e faceis de verificar. Sites com estrutura boa, autoria, dados consistentes e mencoes externas tem mais chance de virar referencia.",
      },
    },
    {
      "@type": "Question",
      name: "O que faz um conteudo ser citavel por IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conteudo citavel tem definicoes diretas, listas, tabelas e respostas curtas logo no inicio de cada secao. Tambem deixa claro quem escreveu e como a informacao pode ser conferida.",
      },
    },
    {
      "@type": "Question",
      name: "O que e llms.txt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Llms.txt e uma convencao para declarar orientacoes e caminhos de conteudo para modelos de linguagem. Ele pode ajudar organizacao e descoberta, mas nao substitui qualidade, autoridade e acessibilidade tecnica do site.",
      },
    },
    {
      "@type": "Question",
      name: "Como aumentar a chance de ser citado pelo ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabalhe quatro frentes: autoridade (mencoes), estrutura (perguntas e respostas), profundidade (tema bem coberto) e tecnica (site rastreavel). Depois, monitore com prompts padronizados e ajuste.",
      },
    },
    {
      "@type": "Question",
      name: "Em quanto tempo da para ver melhora?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende do seu ponto de partida. Em geral, melhorias tecnicas e de estrutura aparecem antes. Para ganhar mencoes e virar referencia, pense em 60 a 120 dias de consistencia.",
      },
    },
  ],
} as const;

const sections: string[] = [
  `<p class="lead"><strong>Como aparecer nas respostas do ChatGPT</strong> parece sorte para quem olha de fora. Na pratica, nao e aleatorio. Existe logica. E quando voce entende essa logica, consegue montar um plano para o seu site virar fonte.</p>

<p>Se voce ainda nao testou se sua empresa aparece nas IAs, comece por aqui: <a href="/blog/empresa-aparece-chatgpt-como-testar" class="text-primary font-bold hover:underline">sua empresa aparece quando alguem pergunta ao ChatGPT</a>.</p>`,

  `<h2>Como as IAs escolhem fontes para citar</h2>
<p><strong>Resposta direta:</strong> modelos de linguagem tendem a preferir fontes que parecem confiaveis, estruturadas e verificaveis. Em ferramentas com busca na web e citacao, as fontes mais claras e consistentes aparecem com mais frequencia.</p>

<p>Referencia tecnica sobre rastreamento e como o Google entende conteudo na web: <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">SEO starter guide do Google</a>.</p>

<img src="${aiTrustImg.src}" alt="Confianca, autoria e verificacao como base para citacao por IA" ${bodyImgClass} />`,

  `<h2>Os 4 fatores que determinam se uma IA vai citar seu site</h2>
<h3>Fator 1: autoridade e citacoes externas</h3>
<p>Se ninguem menciona sua marca fora do seu dominio, fica dificil o sistema tratar voce como referencia. Isso nao e sobre comprar link. E sobre conquistar mencoes editoriais.</p>

<h3>Fator 2: clareza e estrutura do conteudo</h3>
<p>Headings em pergunta, respostas em 2 a 3 frases e tabelas objetivas aumentam citabilidade. O modelo consegue extrair com menos risco.</p>

<h3>Fator 3: especificidade e profundidade</h3>
<p>Texto generico compete com milhares. Texto especifico, com exemplos brasileiros e limites claros, vira base.</p>

<h3>Fator 4: acessibilidade tecnica</h3>
<p>Se o site e lento, bloqueia rastreio ou tem conteudo escondido, voce perde. Comece pelo basico: <a href="/blog/erros-tecnicos-seo" class="text-primary font-bold hover:underline">erros tecnicos de SEO</a>.</p>

<img src="${frameworkImg.src}" alt="Checklist de estrutura e sinais para aumentar citabilidade em respostas de IA" ${bodyImgClass} />`,

  `<h2>O que e llms.txt e como implementar no seu site</h2>
<p><strong>Llms.txt</strong> e um arquivo que descreve, em formato simples, o que seu site tem de mais importante para consumo por modelos. Ele nao resolve falta de autoridade. Ele ajuda organizacao.</p>

<div class="bg-secondary/30 p-6 rounded-lg my-6 border-l-4 border-primary">
  <p><strong>Uso pratico:</strong> liste paginas de servico, guias pilares, pagina sobre e politicas. Mantenha curto e atual.</p>
</div>`,

  `<h2>Guia pratico: 6 passos para otimizar seu site para ser citado</h2>
<ol class="space-y-2 list-decimal pl-5 mb-6">
  <li><strong>Defina o tema central:</strong> escolha um cluster que paga a conta.</li>
  <li><strong>Crie um artigo pilar:</strong> profundidade, exemplos e limites claros.</li>
  <li><strong>Estruture para AEO:</strong> perguntas em H2 e respostas curtas logo abaixo.</li>
  <li><strong>Adicione FAQ com 5 perguntas:</strong> sempre no final.</li>
  <li><strong>Reforce prova:</strong> cases, equipe, processo, fotos reais.</li>
  <li><strong>Construa mencoes externas:</strong> parcerias e conteudo que mereca ser citado.</li>
</ol>

<p>Se sua empresa precisa de endereco comercial e fiscal para passar mais confianca e padronizar dados publicos (inclusive para NAP), um caminho comum para PMEs e usar estrutura profissional. Um exemplo de servico relevante: <a href="https://www.escritoriovirtualbh.com.br/" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">escritorio virtual com endereco fiscal e comercial</a>.</p>`,

  `<h2>FAQ</h2>
<h3>Por que o ChatGPT cita alguns sites e ignora outros?</h3>
<p>Em geral, ele tende a citar fontes mais confiaveis, claras e faceis de verificar. Sites com boa estrutura, autoria e mencoes externas tem mais chance.</p>

<h3>O que faz um conteudo ser citavel por IA?</h3>
<p>Definicoes diretas, listas, tabelas e respostas curtas logo no inicio de cada secao.</p>

<h3>O que e llms.txt?</h3>
<p>Um arquivo de orientacao para modelos de linguagem, util para organizacao, mas nao substitui qualidade e autoridade.</p>

<h3>Como aumentar a chance de ser citado pelo ChatGPT?</h3>
<p>Trabalhe autoridade, estrutura, profundidade e tecnica. Depois monitore com prompts padronizados.</p>

<h3>Em quanto tempo da para ver melhora?</h3>
<p>Melhorias tecnicas e de estrutura aparecem antes. Para virar referencia, pense em 60 a 120 dias de consistencia.</p>`,

  `<h2>Conclusao com CTA</h2>
<p>Ser citado por IA e consequencia de ser fonte. E fonte se constrói com metodo. Se voce quer um plano de GEO e SEO que de para executar, fale com a Otne.</p>

<div class="bg-primary/5 p-8 rounded-lg my-10 text-center border border-primary/20 shadow-sm">
  <h3 class="text-2xl font-bold mb-4 text-primary">Baixe o guia de otimizacao GEO para seu site</h3>
  <p class="mb-6 text-muted-foreground max-w-2xl mx-auto">A gente organiza seu cluster, estrutura FAQ e prioriza o que aumenta citabilidade com seguranca.</p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="/consultoria-seo" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Quero otimizar meu site</a>
    <a href="/blog" class="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">Ver mais artigos</a>
  </div>
</div>`,
];

export const porQueChatgptCitaAlgunsSitesHtml = sections.join("\n\n");

