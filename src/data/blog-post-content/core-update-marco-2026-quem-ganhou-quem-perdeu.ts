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
      name: "O que é um core update do Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Core update é uma atualização ampla do algoritmo do Google que ajusta como ele avalia relevância e qualidade. Em geral, não é penalidade manual, e sim uma redistribuição de ranking conforme os sinais mudam.",
      },
    },
    {
      "@type": "Question",
      name: "Como saber se meu site foi afetado pelo core update de março de 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compare a data da queda com o período do update e valide no Google Search Console: cliques, impressões e consultas. Queda consistente por vários dias pesa mais do que oscilação de um ou dois dias.",
      },
    },
    {
      "@type": "Question",
      name: "Quais sites tendem a ganhar em core updates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Costumam ganhar sites com marca reconhecida, conteúdo atualizado, estrutura interna boa e provas de experiência. Páginas que resolvem a intenção sem enrolar também tendem a subir.",
      },
    },
    {
      "@type": "Question",
      name: "Como verificar a queda no Google Search Console?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No relatório de desempenho, compare os últimos 28 dias com o período anterior e depois entre em Páginas para ver as maiores quedas. Em seguida, cruze com Consultas para entender o que perdeu demanda ou posição.",
      },
    },
    {
      "@type": "Question",
      name: "Em quanto tempo dá para recuperar depois de um core update?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende do tamanho do site e do tipo de ajuste. Melhoras pontuais podem estabilizar em 30 dias, mas a recuperação completa costuma exigir consistência por 60 a 120 dias, até a próxima reavaliação do algoritmo.",
      },
    },
  ],
} as const;

const sections: string[] = [
  `<p class="lead"><strong>Core update de março de 2026</strong> terminou e agora vem a parte chata: entender quem caiu, quem subiu e por quê. Se o seu tráfego orgânico despencou, o pior erro é fazer cirurgia no escuro. Aqui vai um diagnóstico prático e um checklist de recuperação em 30 dias.</p>

<p>Se você ainda não tem uma base técnica confiável, vale revisar antes: <a href="/blog/erros-tecnicos-seo" class="text-primary font-bold hover:underline">erros técnicos de SEO que drenam tráfego</a>. Core update amplifica o que já estava fraco.</p>`,

  `<h2>O update terminou e agora?</h2>
<p><strong>Primeiro</strong>, respire. Oscilação depois de update é comum. <strong>Segundo</strong>, confirme se a queda é real, e não um recorte ruim de data. <strong>Terceiro</strong>, trate como projeto de melhoria por página, e não como reescrita total do site.</p>

<p>Para datas e confirmação oficial das atualizações, a referência mais segura é o painel do próprio Google: <a href="https://status.search.google.com/" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Google Search Status Dashboard</a>.</p>`,

  `<h2>O que é um core update</h2>
<p><strong>Core update</strong> é uma atualização ampla do algoritmo que recalibra como o Google avalia relevância e qualidade. Não é um botão de punição. Na prática, o Google reordena resultados conforme novos sinais pesam mais.</p>

<p>Isso explica um padrão que a gente vê muito: páginas que estavam em segundo lugar sobem, páginas antigas perdem espaço, e conteúdos com aparência genérica caem sem aviso.</p>`,

  `<h2>O que mudou no core update de março de 2026</h2>
<p><strong>Resposta direta:</strong> os sinais de satisfação e confiança ficaram mais duros. A leitura que fazemos, olhando projetos e o mercado, é que o Google está mais agressivo em:</p>
<ul class="space-y-2 list-disc pl-5 mb-6">
  <li>reduzir conteúdo raso e repetitivo;</li>
  <li>premiar marcas com prova pública e consistência;</li>
  <li>valorizar páginas com experiência real, não só texto bem escrito.</li>
</ul>

<p>Se você quer fortalecer E-E-A-T sem cair em fórmula, leia: <a href="/blog/como-construir-confianca-conteudo-digital-ia" class="text-primary font-bold hover:underline">como construir confiança em conteúdo digital na era da IA</a>.</p>`,

  `<h2>Setores mais afetados e o que costuma explicar</h2>
<p>Sem inventar dado, aqui vai a leitura mais útil para empresário: quem depende de conteúdo genérico para capturar volume tende a oscilar mais. Isso inclui sites que publicam muito e revisam pouco.</p>

<div class="bg-secondary/30 p-6 rounded-lg my-6 border-l-4 border-primary">
  <p><strong>O padrão:</strong> páginas de topo de funil caem primeiro. Páginas de serviço fortes, com prova e clareza, seguram melhor.</p>
</div>`,

  `<h2>O que os sites vencedores têm em comum</h2>
<p>Na prática, os vencedores raramente ganham por um truque. Eles ganham por conjunto:</p>
<ul class="space-y-2 list-disc pl-5 mb-6">
  <li><strong>Arquitetura interna:</strong> clusters e linkagem interna bem resolvidos.</li>
  <li><strong>Autoridade:</strong> menções e links de qualidade, sem padrão artificial.</li>
  <li><strong>Conteúdo útil:</strong> exemplos, checklist, comparação, definição clara.</li>
  <li><strong>UX:</strong> página rápida no celular e leitura fácil.</li>
</ul>

<img src="${linkBuildingImg.src}" alt="Autoridade e menções externas como sinal de confiança em SEO" ${bodyImgClass} />`,

  `<h2>Como verificar se seu site foi afetado no Google Search Console</h2>
<p>Esse passo a passo evita achismo:</p>
<ol class="space-y-2 list-decimal pl-5 mb-6">
  <li>Abra o relatório de Desempenho e compare os últimos 28 dias com o período anterior.</li>
  <li>Vá em Páginas e ordene por queda de cliques.</li>
  <li>Entre na página mais afetada e veja as consultas que mais perderam.</li>
  <li>Separe o que é queda de posição do que é queda de demanda.</li>
  <li>Crie uma lista de 10 páginas para atacar primeiro.</li>
</ol>

<img src="${frameworkImg.src}" alt="Fluxo de diagnóstico para decidir prioridades depois de queda em core update" ${bodyImgClass} />`,

  `<h2>Checklist de recuperação em 30 dias</h2>
<p>Objetivo: estabilizar e criar sinais claros de melhora. Use como lista numerada, com dono e prazo.</p>
<ol class="space-y-2 list-decimal pl-5 mb-6">
  <li><strong>Trave o escopo:</strong> escolha 10 páginas críticas. Não mexa no site inteiro.</li>
  <li><strong>Reescreva a introdução:</strong> responda à intenção em 2 ou 3 frases, sem floreio.</li>
  <li><strong>Adicione prova:</strong> casos, fotos, números, depoimentos, processo real.</li>
  <li><strong>Revise títulos e H2:</strong> deixe claro o que o leitor ganha em cada bloco.</li>
  <li><strong>Melhore a linkagem interna:</strong> 3 a 8 links por 1000 palavras, com âncora descritiva.</li>
  <li><strong>Corrija canibalização:</strong> quando duas páginas disputam a mesma query, consolide.</li>
  <li><strong>Atualize conteúdo antigo:</strong> datas, exemplos e recomendações práticas.</li>
  <li><strong>Meça conversão:</strong> clique no WhatsApp, formulário, ligação.</li>
</ol>

<p>Para um caminho de base e padrão, vale conhecer como um site feito para ranquear costuma ser estruturado: <a href="https://www.consultingweb.com.br/blog" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">blog da ConsultingWeb</a>.</p>`,

  `<h2>Como se preparar para o próximo update</h2>
<p>O melhor seguro é virar marca que o algoritmo reconhece como fonte. Isso vem de consistência, não de reação. Se você quer um plano contínuo, veja nosso conteúdo pilar: <a href="/blog/seo-ou-inteligencia-artificial-onde-apostar-2026" class="text-primary font-bold hover:underline">SEO ou IA: onde o seu negócio deve apostar agora</a>.</p>`,

  `<h2>FAQ</h2>
<h3>O que é um core update do Google?</h3>
<p>Core update é uma atualização ampla do algoritmo que ajusta como o Google avalia relevância e qualidade. Em geral, não é penalidade manual, e sim uma redistribuição de ranking conforme os sinais mudam.</p>

<h3>Como saber se meu site foi afetado pelo core update de março de 2026?</h3>
<p>Compare a data da queda com o período do update e valide no Search Console. Queda consistente por vários dias pesa mais do que oscilação curta.</p>

<h3>Quais sites tendem a ganhar em core updates?</h3>
<p>Costumam ganhar sites com marca reconhecida, conteúdo atualizado, estrutura interna boa e provas de experiência.</p>

<h3>Como verificar a queda no Google Search Console?</h3>
<p>No relatório de desempenho, compare períodos e depois entre em Páginas para ver as maiores quedas. Em seguida, cruze com Consultas para entender o que perdeu.</p>

<h3>Em quanto tempo dá para recuperar depois de um core update?</h3>
<p>Melhoras pontuais podem estabilizar em 30 dias, mas a recuperação completa costuma exigir consistência por 60 a 120 dias.</p>`,

  `<p>Core update não perdoa site sem método. Se você quer sair do modo reativo e montar um plano de recuperação com prioridades claras, fale com a Otne.</p>

<div class="bg-primary/5 p-8 rounded-lg my-10 text-center border border-primary/20 shadow-sm">
  <h3 class="text-2xl font-bold mb-4 text-primary">Analise se seu site foi impactado</h3>
  <p class="mb-6 text-muted-foreground max-w-2xl mx-auto">A gente cruza o Search Console, página por página, e transforma queda em lista de ações. Sem achismo e sem pânico.</p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="/consultoria-seo" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Quero um diagnóstico</a>
    <a href="/blog" class="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">Ver outros artigos</a>
  </div>
</div>`,
];

export const coreUpdateMarco2026Html = sections.join("\n\n");
