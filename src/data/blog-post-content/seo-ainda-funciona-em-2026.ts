/**
 * Artigo 08
 * Links externos: exatamente 2 (1 autoridade + 1 parceiro).
 */
import localSearchImg from "@/assets/images/blog/guia-seo-local-diferenciado.jpg";
import teamImg from "@/assets/images/blog/equipe-autoridade.jpg";

const bodyImgClass =
  'class="rounded-xl my-8 w-full max-w-4xl mx-auto object-cover h-[220px] sm:h-[260px]" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 896px"';

export const seoAindaFuncionaEm2026FaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "SEO ainda funciona em 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, funciona, desde que voce trate SEO como sistema e nao como truque. Em 2026, o que funciona e base tecnica, conteudo de especialista e paginas feitas para converter, nao apenas para atrair visitas.",
      },
    },
    {
      "@type": "Question",
      name: "O que nao funciona mais em SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nao funciona bem publicar conteudo raso em escala, ignorar mobile e depender de paginas genericas. Tambem perdeu forca a estrategia de ranquear sem prova real, sem autoria e sem atualizacao.",
      },
    },
    {
      "@type": "Question",
      name: "O que e E-E-A-T na pratica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "E-E-A-T e mostrar experiencia, especializacao, autoridade e confianca. Na pratica, isso aparece em autoria clara, cases, dados verificaveis, paginas transparentes e reputacao fora do seu site.",
      },
    },
    {
      "@type": "Question",
      name: "SEO local ainda vale a pena no Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vale muito para negocios que atendem cidade ou bairro. Perfil da empresa, reviews e paginas por servico e regiao costumam trazer demanda pronta para compra.",
      },
    },
    {
      "@type": "Question",
      name: "Como comecar um plano de 90 dias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comece com diagnostico tecnico, ajuste paginas de servico e publique um cluster de conteudo baseado em perguntas reais. Meça por lead e revise semanalmente.",
      },
    },
  ],
} as const;

const sections: string[] = [
  `<p class="lead"><strong>SEO ainda funciona em 2026?</strong> Sim, com uma condicao: voce precisa parar de tratar SEO como lista de hacks. O SEO que funciona hoje e o que melhora a experiencia do usuario e deixa claro por que sua empresa e a escolha certa.</p>

<p>Se voce quer o panorama do ano, aqui esta o pilar: <a href="/blog/guia-seo-2026" class="text-primary font-bold hover:underline">guia completo de SEO para 2026</a>.</p>`,

  `<h2>A resposta direta</h2>
<p><strong>Sim, SEO funciona.</strong> O que mudou foi o filtro. Conteudo raso perdeu espaco. Paginas que resolvem a intencao e convertem ganharam valor.</p>

<p>Para referencia oficial sobre como o Google orienta criacao de conteudo util, use: <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">helpful content no Search Central</a>.</p>`,

  `<h2>O que nao funciona mais</h2>
<ul class="space-y-2 list-disc pl-5 mb-6">
  <li>publicar volume sem revisao e sem experiencia real</li>
  <li>site lento e ruim no celular</li>
  <li>pagina de servico generica, sem prova e sem processo</li>
</ul>`,

  `<h2>Estrategia 1: E-E-A-T com prova verificavel</h2>
<p>O caminho mais curto para fortalecer E-E-A-T e mostrar prova: quem escreve, o que ja fez e como entrega. Conteudo que parece catalogo de promessas nao sustenta.</p>

<img src="${teamImg.src}" alt="Equipe e autoria clara como sinal de experiencia e confianca em SEO" ${bodyImgClass} />`,

  `<h2>Estrategia 2: SEO local como oportunidade subestimada</h2>
<p>Para negocio local, o melhor SEO e o que coloca voce no mapa e no top 3. Se isso vale para seu caso, este guia e o ponto de partida: <a href="/blog/seo-local-para-pequenas-empresas" class="text-primary font-bold hover:underline">SEO local para pequenas empresas</a>.</p>

<img src="${localSearchImg.src}" alt="Busca local e mapa como canal de aquisicao em SEO local" ${bodyImgClass} />`,

  `<h2>Estrategia 3: conteudo baseado em perguntas reais</h2>
<p>O conteudo que funciona em 2026 nasce do que o cliente pergunta no WhatsApp. Estruture H2 como perguntas e responda em 2 a 3 frases antes de aprofundar. Isso ajuda SEO, AEO e GEO ao mesmo tempo.</p>`,

  `<h2>Roteiro de 90 dias para comecar</h2>
<ol class="space-y-2 list-decimal pl-5 mb-6">
  <li><strong>Semana 1 a 2:</strong> diagnostico tecnico e correcoes criticas.</li>
  <li><strong>Semana 3 a 6:</strong> reescrever paginas de servico e criar FAQ.</li>
  <li><strong>Semana 7 a 12:</strong> publicar 6 conteudos do mesmo cluster e conectar com linkagem interna.</li>
</ol>

<p>Se voce precisa de um site bem estruturado desde a base, um exemplo de referencia de como isso e vendido para PMEs e o portifolio da ConsultingWeb: <a href="https://www.consultingweb.com.br/portfolio" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">sites que ranqueiam no Google</a>.</p>`,

  `<h2>FAQ</h2>
<h3>SEO ainda funciona em 2026?</h3>
<p>Sim, funciona quando voce trata SEO como sistema: tecnico, conteudo de especialista e paginas feitas para converter.</p>

<h3>O que nao funciona mais em SEO?</h3>
<p>Conteudo raso em escala, mobile ruim e paginas genericas sem prova e sem atualizacao.</p>

<h3>O que e E-E-A-T na pratica?</h3>
<p>Autoria clara, cases, dados verificaveis, paginas transparentes e reputacao fora do seu site.</p>

<h3>SEO local ainda vale a pena no Brasil?</h3>
<p>Vale muito para negocio que atende cidade ou bairro, com perfil, reviews e paginas por servico.</p>

<h3>Como comecar um plano de 90 dias?</h3>
<p>Diagnostico tecnico, ajuste paginas de servico e cluster de conteudo baseado em perguntas reais, medindo por lead.</p>`,

  `<h2>Conclusao com CTA</h2>
<p>SEO ainda vale a pena. O que nao vale e insistir em estrategia velha com cara de 2020. Se voce quer escolher o que fazer primeiro, com impacto em caixa, fale com a Otne.</p>

<div class="bg-primary/5 p-8 rounded-lg my-10 text-center border border-primary/20 shadow-sm">
  <h3 class="text-2xl font-bold mb-4 text-primary">Veja qual estrategia se aplica ao seu negocio</h3>
  <p class="mb-6 text-muted-foreground max-w-2xl mx-auto">A gente define prioridades e cronograma realista. Sem promessa magica.</p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="/consultoria-seo" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Quero um plano de 90 dias</a>
    <a href="/blog" class="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">Ler mais</a>
  </div>
</div>`,
];

export const seoAindaFuncionaEm2026Html = sections.join("\n\n");

