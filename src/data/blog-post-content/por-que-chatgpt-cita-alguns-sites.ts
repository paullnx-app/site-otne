/**
 * Artigo 06
 * Links externos: exatamente 2 (1 autoridade + 1 parceiro).
 */
import citacaoChatgptImg from "@/assets/images/blog/citacao-chatgpt-resposta.jpg";

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
        text: "Em geral, o ChatGPT tende a citar fontes mais confiáveis, claras e fáceis de verificar. Sites com estrutura boa, autoria, dados consistentes e menções externas têm mais chance de virar referência.",
      },
    },
    {
      "@type": "Question",
      name: "O que faz um conteúdo ser citável por IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conteúdo citável tem definições diretas, listas, tabelas e respostas curtas logo no início de cada seção. Também deixa claro quem escreveu e como a informação pode ser conferida.",
      },
    },
    {
      "@type": "Question",
      name: "O que é llms.txt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Llms.txt é uma convenção para declarar orientações e caminhos de conteúdo para modelos de linguagem. Ele pode ajudar na organização e descoberta, mas não substitui qualidade, autoridade e acessibilidade técnica do site.",
      },
    },
    {
      "@type": "Question",
      name: "Como aumentar a chance de ser citado pelo ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabalhe quatro frentes: autoridade (menções), estrutura (perguntas e respostas), profundidade (tema bem coberto) e técnica (site rastreável). Depois, monitore com prompts padronizados e ajuste.",
      },
    },
    {
      "@type": "Question",
      name: "Em quanto tempo dá para ver melhora?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende do seu ponto de partida. Em geral, as melhorias técnicas e de estrutura aparecem antes. Para ganhar menções e virar referência, pense em 60 a 120 dias de consistência.",
      },
    },
  ],
} as const;

const sections: string[] = [
  `<p class="lead"><strong>Como aparecer nas respostas do ChatGPT</strong> parece sorte para quem olha de fora. Na prática, não é aleatório. Existe lógica. E, quando você entende essa lógica, consegue montar um plano para o seu site virar fonte.</p>

<p>Se você ainda não testou se sua empresa aparece nas IAs, comece por aqui: <a href="/blog/empresa-aparece-chatgpt-como-testar" class="text-primary font-bold hover:underline">sua empresa aparece quando alguém pergunta ao ChatGPT</a>.</p>`,

  `<h2>Como as IAs escolhem fontes para citar</h2>
<p><strong>Resposta direta:</strong> os modelos de linguagem tendem a preferir fontes que parecem confiáveis, estruturadas e verificáveis. Em ferramentas com busca na web e citação, as fontes mais claras e consistentes aparecem com mais frequência.</p>

<p>Referência técnica sobre rastreamento e como o Google entende conteúdo na web: <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">SEO Starter Guide do Google</a>.</p>

<img src="${citacaoChatgptImg.src}" alt="Resposta de IA citando fontes confiáveis com sinais de autoridade" ${bodyImgClass} />`,

  `<h2>Os 4 fatores que determinam se uma IA vai citar seu site</h2>
<h3>Fator 1: autoridade e citações externas</h3>
<p>Se ninguém menciona sua marca fora do seu domínio, fica difícil o sistema tratar você como referência. Isso não é sobre comprar link. É sobre conquistar menções editoriais.</p>

<h3>Fator 2: clareza e estrutura do conteúdo</h3>
<p>Títulos em pergunta, respostas em 2 ou 3 frases e tabelas objetivas aumentam a citabilidade. O modelo consegue extrair com menos risco.</p>

<h3>Fator 3: especificidade e profundidade</h3>
<p>Texto genérico compete com milhares. Texto específico, com exemplos brasileiros e limites claros, vira base.</p>

<h3>Fator 4: acessibilidade técnica</h3>
<p>Se o site é lento, bloqueia rastreio ou tem conteúdo escondido, você perde. Comece pelo básico: <a href="/blog/erros-tecnicos-seo" class="text-primary font-bold hover:underline">erros técnicos de SEO</a>.</p>
`,

  `<h2>O que é llms.txt e como implementar no seu site</h2>
<p><strong>Llms.txt</strong> é um arquivo que descreve, em formato simples, o que seu site tem de mais importante para consumo por modelos. Ele não resolve falta de autoridade. Ele ajuda na organização.</p>

<div class="bg-secondary/30 p-6 rounded-lg my-6 border-l-4 border-primary">
  <p><strong>Uso prático:</strong> liste páginas de serviço, guias pilares, página sobre e políticas. Mantenha curto e atualizado.</p>
</div>`,

  `<h2>Guia prático: 6 passos para otimizar seu site para ser citado</h2>
<ol class="space-y-2 list-decimal pl-5 mb-6">
  <li><strong>Defina o tema central:</strong> escolha um cluster que paga a conta.</li>
  <li><strong>Crie um artigo pilar:</strong> profundidade, exemplos e limites claros.</li>
  <li><strong>Estruture para AEO:</strong> perguntas em H2 e respostas curtas logo abaixo.</li>
  <li><strong>Adicione FAQ com 5 perguntas</strong> sempre no final.</li>
  <li><strong>Reforce a prova:</strong> cases, equipe, processo, fotos reais.</li>
  <li><strong>Construa menções externas:</strong> parcerias e conteúdo que mereça ser citado.</li>
</ol>

<p>Se sua empresa precisa de endereço comercial e fiscal para passar mais confiança e padronizar dados públicos (inclusive para NAP), um caminho comum para PMEs é usar estrutura profissional. Um exemplo de serviço relevante: <a href="https://www.escritoriovirtualbh.com.br/" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">escritório virtual com endereço fiscal e comercial</a>.</p>`,

  `<h2>FAQ</h2>
<h3>Por que o ChatGPT cita alguns sites e ignora outros?</h3>
<p>Em geral, ele tende a citar fontes mais confiáveis, claras e fáceis de verificar. Sites com boa estrutura, autoria e menções externas têm mais chance.</p>

<h3>O que faz um conteúdo ser citável por IA?</h3>
<p>Definições diretas, listas, tabelas e respostas curtas logo no início de cada seção.</p>

<h3>O que é llms.txt?</h3>
<p>Um arquivo de orientação para modelos de linguagem, útil para organização, mas não substitui qualidade e autoridade.</p>

<h3>Como aumentar a chance de ser citado pelo ChatGPT?</h3>
<p>Trabalhe autoridade, estrutura, profundidade e parte técnica. Depois, monitore com prompts padronizados.</p>

<h3>Em quanto tempo dá para ver melhora?</h3>
<p>As melhorias técnicas e de estrutura aparecem antes. Para virar referência, pense em 60 a 120 dias de consistência.</p>`,

  `<p>Ser citado por IA é consequência de ser fonte. E fonte se constrói com método. Se você quer um plano de GEO e SEO que dê para executar, fale com a Otne.</p>

<div class="bg-primary/5 p-8 rounded-lg my-10 text-center border border-primary/20 shadow-sm">
  <h3 class="text-2xl font-bold mb-4 text-primary">Baixe o guia de otimização GEO para seu site</h3>
  <p class="mb-6 text-muted-foreground max-w-2xl mx-auto">A gente organiza seu cluster, estrutura o FAQ e prioriza o que aumenta a citabilidade com segurança.</p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="/consultoria-seo" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Quero otimizar meu site</a>
    <a href="/blog" class="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">Ver mais artigos</a>
  </div>
</div>`,
];

export const porQueChatgptCitaAlgunsSitesHtml = sections.join("\n\n");
