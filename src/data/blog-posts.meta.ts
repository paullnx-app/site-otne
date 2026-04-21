export type BlogPostMeta = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  /** Data da última revisão substantiva (DD MMM YYYY). Alimenta `lastmod` no sitemap. */
  updatedDate?: string;
  category: string;
  readTime: string;
  /**
   * Palavra-chave principal do artigo (única no site).
   * Deve ser preenchida em todo novo post. O validador `scripts/validate-keywords.ts`
   * falha o build se dois posts tiverem a mesma keywordPrincipal.
   */
  keywordPrincipal?: string;
  /**
   * Stable path used by server-side SEO generation scripts.
   * Client pages can still use their own imported images for rendering.
   */
  imageUrl: string;
};

/**
 * Node-friendly blog post metadata (no asset imports).
 *
 * This is intentionally separated from `blog-posts.ts` because build scripts
 * execute under Node (tsx) and cannot import `.jpg/.png` modules.
 */
export const blogPostsMeta: BlogPostMeta[] = [
  {
    id: "19",
    slug: "como-o-google-vai-funcionar-em-2027",
    title:
      "Como o Google vai funcionar em 2027 e o que seu negócio precisa fazer agora",
    excerpt:
      "O CEO do Google apontou a busca agêntica como virada. Entenda o impacto no tráfego orgânico e o plano prático para se preparar no Brasil.",
    author: "Paul Leite",
    date: "20 Fev 2026",
    category: "Tendências",
    readTime: "10 min",
        keywordPrincipal: "como o Google vai funcionar em 2027",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "18",
    slug: "core-update-marco-2026",
    title:
      "Core update de março de 2026: quem ganhou, quem perdeu e como se recuperar",
    excerpt:
      "O maior update do Google no Q1 de 2026 mudou rankings. Veja sinais no Search Console e um checklist de recuperação em 30 dias.",
    author: "Paul Leite",
    date: "27 Fev 2026",
    category: "Atualizações do Google",
    readTime: "12 min",
        keywordPrincipal: "core update março 2026",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "17",
    slug: "5-caracteristicas-sites-cresceram-no-google-2026",
    title: "5 características de sites que cresceram no Google em 2026",
    excerpt:
      "O que sites com crescimento orgânico real têm em comum. Veja 5 padrões e como aplicar no seu negócio com foco em resultado.",
    author: "Paul Leite",
    date: "06 Mar 2026",
    category: "Estudos",
    readTime: "11 min",
        keywordPrincipal: "sites que cresceram no Google 2026",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "16",
    slug: "por-que-chatgpt-cita-alguns-sites",
    title:
      "Por que o ChatGPT cita alguns sites e ignora outros e como entrar nessa lista",
    excerpt:
      "Entenda como as IAs escolhem fontes para citar e siga um guia prático para otimizar seu site e ser referenciado por ChatGPT e Gemini.",
    author: "Paul Leite",
    date: "13 Mar 2026",
    category: "Inteligência Artificial",
    readTime: "12 min",
        keywordPrincipal: "por que o ChatGPT cita alguns sites",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "15",
    slug: "o-que-mudou-na-busca-no-inicio-de-2026",
    title:
      "O que mudou na busca no início de 2026: o resumo que todo empresário precisa ler",
    excerpt:
      "Core update, spam update e busca com IA: o que mudou no Q1 de 2026 e como isso afeta tráfego e vendas de negócios no Brasil.",
    author: "Paul Leite",
    date: "20 Mar 2026",
    category: "Tendências",
    readTime: "9 min",
        keywordPrincipal: "o que mudou na busca 2026",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "14",
    slug: "seo-ainda-funciona-em-2026",
    title:
      "SEO ainda funciona em 2026? A resposta honesta com 3 estratégias que estão dando resultado",
    excerpt:
      "SEO funciona em 2026 quando você faz o básico muito bem. Veja 3 estratégias e um roteiro de 90 dias para gerar lead e venda.",
    author: "Paul Leite",
    date: "27 Mar 2026",
    category: "Estratégia",
    readTime: "10 min",
        keywordPrincipal: "SEO ainda funciona em 2026",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "13",
    slug: "spam-update-marco-2026",
    title:
      "Spam update de março de 2026: seu site foi penalizado? Como identificar e se recuperar",
    excerpt:
      "O Google ficou mais rígido com conteúdo sem qualidade. Aprenda a diagnosticar no Search Console e siga um plano de recuperação.",
    author: "Paul Leite",
    date: "03 Abr 2026",
    category: "Atualizações do Google",
    readTime: "11 min",
        keywordPrincipal: "spam update março 2026",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "12",
    slug: "turboquant-tecnologia-que-pode-mudar-seo",
    title: "TurboQuant: a tecnologia que pode mudar tudo o que você sabe sobre SEO",
    excerpt:
      "Entenda o conceito por trás do TurboQuant e use um método para avaliar tecnologias emergentes e se preparar sem cair no hype.",
    author: "Paul Leite",
    date: "10 Abr 2026",
    category: "Tecnologia",
    readTime: "9 min",
        keywordPrincipal: "turboquant SEO",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "11",
    slug: "empresa-aparece-chatgpt-como-testar",
    title: "Sua empresa aparece quando alguém pergunta ao ChatGPT?",
    excerpt:
      "Saiba como verificar se seu negócio é citado pelas inteligências artificiais e o que fazer para aparecer nas respostas do ChatGPT, Gemini e Perplexity.",
    author: "Paul Leite",
    date: "17 Abr 2026",
    category: "Inteligência Artificial",
    readTime: "10 min",
        keywordPrincipal: "empresa no ChatGPT",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "10",
    slug: "seo-ou-inteligencia-artificial-onde-apostar-2026",
    title: "SEO ou IA: onde o seu negócio deve apostar agora?",
    excerpt:
      "Guia prático para decidir entre SEO tradicional e otimização para inteligência artificial, com checklist e framework de decisão para 2026.",
    author: "Paul Leite",
    date: "17 Abr 2026",
    category: "Tendências",
    readTime: "12 min",
        keywordPrincipal: "seo vs inteligência artificial",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "8",
    slug: "marketing-digital-para-empresarios",
    title:
      "Marketing digital para empresários: o guia prático para crescer sem desperdiçar verba",
    excerpt:
      "Marketing digital não é postar todo dia: é um sistema para atrair demanda, transformar visitas em leads e leads em vendas. Veja um plano prático para PMEs com métricas, canais e exemplos.",
    author: "Paul Leite",
    date: "28 Jan 2026",
    category: "Marketing",
    readTime: "8 min",
        keywordPrincipal: "marketing digital para empresários",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "7",
    slug: "como-aparecer-no-google-maps",
    title: "Como Aparecer no Google Maps: Guia Passo a Passo para 2026",
    excerpt:
      "Sua empresa não aparece no mapa? Descubra como cadastrar, verificar e otimizar seu perfil no Google Maps para atrair clientes locais hoje mesmo.",
    author: "Paul Leite",
    date: "02 Fev 2026",
    category: "Tutorial",
    readTime: "7 min",
        keywordPrincipal: "como aparecer no Google Maps",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "6",
    slug: "seo-local-para-pequenas-empresas",
    title: "Guia Definitivo de SEO Local para Pequenas Empresas: Domine sua Região",
    excerpt:
      "Aprenda como colocar sua empresa no mapa (literalmente) e atrair clientes da sua região que estão prontos para comprar.",
    author: "Paul Leite",
    date: "28 Jan 2026",
    category: "SEO Local",
    readTime: "6 min",
        keywordPrincipal: "SEO local para pequenas empresas",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "4",
    slug: "como-aumentar-autoridade-conquistar-links",
    title: "Como Aumentar a Autoridade e Conquistar Links: 5 Estratégias Comprovadas",
    excerpt:
      "Descubra táticas práticas para estabelecer credibilidade instantânea e atrair backlinks de qualidade para o seu site através da construção de autoridade.",
    author: "Paul Leite",
    date: "25 Jan 2025",
    category: "Link Building",
    readTime: "8 min",
        keywordPrincipal: "autoridade e links",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "1",
    slug: "guia-seo-2026",
    title: "Guia Completo de SEO para 2026: O que muda? (E como sobreviver)",
    excerpt:
      "O SEO morreu? Não, ele evoluiu. Descubra como a IA, o Search Generative Experience (SGE) e os novos fatores de ranqueamento vão impactar seu negócio em 2026.",
    author: "Paul Leite",
    date: "22 Jan 2026",
    category: "Tendências",
    readTime: "10 min",
        keywordPrincipal: "guia de SEO 2026",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "3",
    slug: "erros-tecnicos-seo",
    title: "5 Erros Técnicos de SEO que matam seu tráfego: Guia de Correção",
    excerpt:
      "Links quebrados, site lento e falta de sitemap invisibilizam seu negócio. Descubra os 5 erros técnicos mais comuns e como blindar seu site para o Google.",
    author: "Paul Leite",
    date: "15 Nov 2025",
    category: "Técnico",
    readTime: "8 min",
        keywordPrincipal: "erros técnicos de SEO",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "5",
    slug: "como-construir-confianca-conteudo-digital-ia",
    title:
      "Como Construir Confiança em Conteúdo Digital na Era da Inteligência Artificial: Guia Completo 2026",
    excerpt:
      "Em um mundo saturado de conteúdo gerado por IA, a confiança é a nova moeda valiosa. Descubra como diferenciar sua marca, dominar o E-E-A-T e por que uma Consultoria de SEO estratégica é vital para sua sobrevivência digital.",
    author: "Paul Leite",
    date: "22 Jan 2026",
    category: "Inteligência Artificial",
    readTime: "15 min",
        keywordPrincipal: "confiança em conteúdo digital na era da IA",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "9",
    slug: "como-aparecer-nas-buscas-do-seu-cliente",
    title: "Por que seu concorrente aparece no Google e você não? (E como mudar isso)",
    excerpt:
      "Sabe quando você tem certeza de que o seu serviço é melhor, mas, na hora de fechar negócio, o cliente escolhe o concorrente? Descubra o que seu cliente realmente digita antes de comprar.",
    author: "Paul Leite",
    date: "03 Mar 2026",
    category: "Estratégia de Conteúdo",
    readTime: "6 min",
        keywordPrincipal: "como aparecer nas buscas",
    imageUrl: "/opengraph.jpg",
  },
];

