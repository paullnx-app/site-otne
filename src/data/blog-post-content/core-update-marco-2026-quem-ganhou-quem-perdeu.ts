/**
 * Artigo 04
 * Links externos: exatamente 2 (1 autoridade + 1 parceiro).
 * Imagens do corpo: distintas entre si e do hero do post.
 */
import linkBuildingImg from "@/assets/images/blog/rede-construcao-links.jpg";
import frameworkImg from "@/assets/images/blog/framework-decisao-seo-ia.jpg";

const bodyImgClass =
  'class="rounded-xl my-8 w-full max-w-4xl mx-auto object-cover h-[220px] sm:h-[260px]" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 896px"';

export const coreUpdateMarco2026FaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que e um core update do Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Core update e uma atualizacao ampla do algoritmo do Google que ajusta como ele avalia relevancia e qualidade. Em geral, nao e penalidade manual, e uma redistribuicao de ranking conforme sinais mudam.",
      },
    },
    {
      "@type": "Question",
      name: "Como saber se meu site foi afetado pelo core update de marco de 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compare a data da queda com o periodo do update e valide no Google Search Console: cliques, impressoes e consultas. Queda consistente por varios dias pesa mais do que oscilacao de um ou dois dias.",
      },
    },
    {
      "@type": "Question",
      name: "Quais sites tendem a ganhar em core updates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Costumam ganhar sites com marca reconhecida, conteudo atualizado, estrutura interna boa e provas de experiencia. Paginas que resolvem a intencao sem enrolar tambem tendem a subir.",
      },
    },
    {
      "@type": "Question",
      name: "Como verificar a queda no Google Search Console?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No relatorio de desempenho, compare os ultimos 28 dias com o periodo anterior e depois entre em Paginas para ver as maiores quedas. Em seguida, cruze com Consultas para entender o que perdeu demanda ou posicao.",
      },
    },
    {
      "@type": "Question",
      name: "Em quanto tempo da para recuperar apos um core update?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende do tamanho do site e do tipo de ajuste. Melhoras pontuais podem estabilizar em 30 dias, mas recuperacao completa costuma exigir consistencia por 60 a 120 dias, ate a proxima reavaliacao do algoritmo.",
      },
    },
  ],
} as const;

const sections: string[] = [
  `<p class="lead"><strong>Core update de marco de 2026</strong> terminou e agora vem a parte chata: entender quem caiu, quem subiu e por que. Se o seu trafego organico despencou, o pior erro e fazer cirurgia no escuro. Aqui vai um diagnostico pratico e um checklist de recuperacao em 30 dias.</p>

<p>Se voce ainda nao tem uma base tecnica confiavel, vale revisar antes: <a href="/blog/erros-tecnicos-seo" class="text-primary font-bold hover:underline">erros tecnicos de SEO que drenam trafego</a>. Core update amplifica o que ja estava fraco.</p>`,

  `<h2>O update terminou e agora?</h2>
<p><strong>Primeiro</strong>, respire. Oscilacao apos update e comum. <strong>Segundo</strong>, confirme se a queda e real, nao um recorte ruim de data. <strong>Terceiro</strong>, trate como projeto de melhoria por pagina, nao como reescrita total do site.</p>

<p>Para datas e confirmacao oficial de atualizacoes, a referencia mais segura e o painel do proprio Google: <a href="https://status.search.google.com/" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Google Search Status Dashboard</a>.</p>`,

  `<h2>O que e um core update</h2>
<p><strong>Core update</strong> e uma atualizacao ampla do algoritmo que recalibra como o Google avalia relevancia e qualidade. Nao e um botao de punicao. Na pratica, o Google reordena resultados conforme novos sinais pesam mais.</p>

<p>Isso explica um padrao que a gente ve muito: paginas que estavam em segundo lugar sobem, paginas antigas perdem espaco, e conteudos com aparencia generica caem sem aviso.</p>`,

  `<h2>O que mudou no core update de marco de 2026</h2>
<p><strong>Resposta direta:</strong> os sinais de satisfacao e confianca ficaram mais duros. A leitura que fazemos, olhando projetos e o mercado, e que o Google esta mais agressivo em:</p>
<ul class="space-y-2 list-disc pl-5 mb-6">
  <li>reduzir conteudo raso e repetitivo</li>
  <li>premiar marcas com prova publica e consistencia</li>
  <li>valorizar paginas com experiencia real, nao so texto bem escrito</li>
</ul>

<p>Se voce quer fortalecer E-E-A-T sem cair em formula, leia: <a href="/blog/como-construir-confianca-conteudo-digital-ia" class="text-primary font-bold hover:underline">como construir confianca em conteudo digital na era da IA</a>.</p>`,

  `<h2>Setores mais afetados e o que costuma explicar</h2>
<p>Sem inventar dado, aqui vai a leitura mais util para empresario: quem depende de conteudo genérico para capturar volume tende a oscilar mais. Isso inclui sites que publicam muito e revisam pouco.</p>

<div class="bg-secondary/30 p-6 rounded-lg my-6 border-l-4 border-primary">
  <p><strong>O padrao:</strong> paginas de topo de funil caem primeiro. Paginas de servico fortes, com prova e clareza, seguram melhor.</p>
</div>`,

  `<h2>O que os sites vencedores tem em comum</h2>
<p>Na pratica, os vencedores raramente ganham por um truque. Eles ganham por conjunto:</p>
<ul class="space-y-2 list-disc pl-5 mb-6">
  <li><strong>Arquitetura interna:</strong> clusters e linkagem interna boa.</li>
  <li><strong>Autoridade:</strong> mencoes e links de qualidade, sem padrao artificial.</li>
  <li><strong>Conteudo util:</strong> exemplos, checklist, comparacao, definicao clara.</li>
  <li><strong>UX:</strong> pagina rapida no celular e leitura facil.</li>
</ul>

<img src="${linkBuildingImg.src}" alt="Autoridade e mencoes externas como sinal de confianca em SEO" ${bodyImgClass} />`,

  `<h2>Como verificar se seu site foi afetado no Google Search Console</h2>
<p>Esse passo a passo evita achismo:</p>
<ol class="space-y-2 list-decimal pl-5 mb-6">
  <li>Abra Desempenho e compare os ultimos 28 dias com o periodo anterior.</li>
  <li>Vá em Paginas e ordene por queda de cliques.</li>
  <li>Entre na pagina mais afetada e veja as consultas que mais perderam.</li>
  <li>Separe o que e queda de posicao do que e queda de demanda.</li>
  <li>Crie uma lista de 10 paginas para atacar primeiro.</li>
</ol>

<img src="${frameworkImg.src}" alt="Fluxo de diagnostico para decidir prioridades apos queda em core update" ${bodyImgClass} />`,

  `<h2>Checklist de recuperacao em 30 dias</h2>
<p>Objetivo: estabilizar e criar sinais claros de melhora. Use como lista numerada, com dono e prazo.</p>
<ol class="space-y-2 list-decimal pl-5 mb-6">
  <li><strong>Trave o escopo:</strong> escolha 10 paginas criticas. Nao mexa no site inteiro.</li>
  <li><strong>Reescreva a introducao:</strong> responda a intencao em 2 a 3 frases, sem floreio.</li>
  <li><strong>Adicione prova:</strong> casos, fotos, numeros, depoimentos, processo real.</li>
  <li><strong>Revise titulos e H2:</strong> deixe claro o que o leitor ganha em cada bloco.</li>
  <li><strong>Melhore linkagem interna:</strong> 3 a 8 links por 1000 palavras, com ancora descritiva.</li>
  <li><strong>Corrija canibalizacao:</strong> duas paginas disputando a mesma query, consolide.</li>
  <li><strong>Atualize conteudo antigo:</strong> datas, exemplos e recomendacoes praticas.</li>
  <li><strong>Meça conversao:</strong> clique no WhatsApp, formulario, ligacao.</li>
</ol>

<p>Para um caminho de base e padrao, vale conhecer como um site feito para ranquear costuma ser estruturado: <a href="https://www.consultingweb.com.br/blog" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">blog da ConsultingWeb</a>.</p>`,

  `<h2>Como se preparar para o proximo update</h2>
<p>O melhor seguro e virar marca que o algoritmo reconhece como fonte. Isso vem de consistencia, nao de reacao. Se voce quer um plano continuo, veja nosso conteudo pilar: <a href="/blog/seo-ou-inteligencia-artificial-onde-apostar-2026" class="text-primary font-bold hover:underline">SEO ou IA: onde o seu negocio deve apostar agora</a>.</p>`,

  `<h2>FAQ</h2>
<h3>O que e um core update do Google?</h3>
<p>Core update e uma atualizacao ampla do algoritmo que ajusta como o Google avalia relevancia e qualidade. Em geral, nao e penalidade manual, e redistribuicao de ranking conforme sinais mudam.</p>

<h3>Como saber se meu site foi afetado pelo core update de marco de 2026?</h3>
<p>Compare a data da queda com o periodo do update e valide no Search Console. Queda consistente por varios dias pesa mais do que oscilacao curta.</p>

<h3>Quais sites tendem a ganhar em core updates?</h3>
<p>Costumam ganhar sites com marca reconhecida, conteudo atualizado, estrutura interna boa e provas de experiencia.</p>

<h3>Como verificar a queda no Google Search Console?</h3>
<p>No relatorio de desempenho, compare periodos e depois entre em Paginas para ver as maiores quedas. Em seguida, cruze com Consultas para entender o que perdeu.</p>

<h3>Em quanto tempo da para recuperar apos um core update?</h3>
<p>Melhoras pontuais podem estabilizar em 30 dias, mas recuperacao completa costuma exigir consistencia por 60 a 120 dias.</p>`,

  `<h2>Conclusao com CTA</h2>
<p>Core update nao perdoa site sem metodo. Se voce quer sair do modo reativo e montar um plano de recuperacao com prioridades claras, fale com a Otne.</p>

<div class="bg-primary/5 p-8 rounded-lg my-10 text-center border border-primary/20 shadow-sm">
  <h3 class="text-2xl font-bold mb-4 text-primary">Analise se seu site foi impactado</h3>
  <p class="mb-6 text-muted-foreground max-w-2xl mx-auto">A gente cruza Search Console, pagina por pagina, e transforma queda em lista de acoes. Sem achismo e sem panico.</p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="/consultoria-seo" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Quero um diagnostico</a>
    <a href="/blog" class="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">Ver outros artigos</a>
  </div>
</div>`,
];

export const coreUpdateMarco2026Html = sections.join("\n\n");

