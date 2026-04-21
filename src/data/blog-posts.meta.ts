export type BlogPostMeta = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
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
      "Como o Google vai funcionar em 2027 e o que seu negocio precisa fazer agora",
    excerpt:
      "O CEO do Google apontou a busca agntica como virada. Entenda o impacto no trafego organico e o plano pratico para se preparar no Brasil.",
    author: "Equipe Otne SEO",
    date: "20 Fev 2026",
    category: "Tendências",
    readTime: "10 min",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "18",
    slug: "core-update-marco-2026",
    title:
      "Core update de marco de 2026: quem ganhou, quem perdeu e como se recuperar",
    excerpt:
      "O maior update do Google no Q1 de 2026 mudou rankings. Veja sinais no Search Console e um checklist de recuperacao em 30 dias.",
    author: "Equipe Otne SEO",
    date: "27 Fev 2026",
    category: "Atualizações do Google",
    readTime: "12 min",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "17",
    slug: "5-caracteristicas-sites-cresceram-no-google-2026",
    title: "5 caracteristicas de sites que cresceram no Google em 2026",
    excerpt:
      "O que sites com crescimento organico real tem em comum. Veja 5 padroes e como aplicar no seu negocio com foco em resultado.",
    author: "Equipe Otne SEO",
    date: "06 Mar 2026",
    category: "Estudos",
    readTime: "11 min",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "16",
    slug: "por-que-chatgpt-cita-alguns-sites",
    title:
      "Por que o ChatGPT cita alguns sites e ignora outros e como entrar nessa lista",
    excerpt:
      "Entenda como IAs escolhem fontes para citar e siga um guia pratico para otimizar seu site e ser referenciado por ChatGPT e Gemini.",
    author: "Equipe Otne SEO",
    date: "13 Mar 2026",
    category: "Inteligência Artificial",
    readTime: "12 min",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "15",
    slug: "o-que-mudou-na-busca-no-inicio-de-2026",
    title:
      "O que mudou na busca no inicio de 2026: o resumo que todo empresario precisa ler",
    excerpt:
      "Core update, spam update e busca com IA: o que mudou no Q1 de 2026 e como isso afeta trafego e vendas de negocios no Brasil.",
    author: "Equipe Otne SEO",
    date: "20 Mar 2026",
    category: "Tendências",
    readTime: "9 min",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "14",
    slug: "seo-ainda-funciona-em-2026",
    title:
      "SEO ainda funciona em 2026? A resposta honesta com 3 estrategias que estao dando resultado",
    excerpt:
      "SEO funciona em 2026 quando voce faz o basico muito bem. Veja 3 estrategias e um roteiro de 90 dias para gerar lead e venda.",
    author: "Equipe Otne SEO",
    date: "27 Mar 2026",
    category: "Estratégia",
    readTime: "10 min",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "13",
    slug: "spam-update-marco-2026",
    title:
      "Spam update de marco de 2026: seu site foi penalizado e como identificar e se recuperar",
    excerpt:
      "O Google ficou mais rigido com conteudo sem qualidade. Aprenda a diagnosticar no Search Console e siga um plano de recuperacao.",
    author: "Equipe Otne SEO",
    date: "03 Abr 2026",
    category: "Atualizações do Google",
    readTime: "11 min",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "12",
    slug: "turboquant-tecnologia-que-pode-mudar-seo",
    title: "TurboQuant: a tecnologia que pode mudar tudo que voce sabe sobre SEO",
    excerpt:
      "Entenda o conceito por tras do TurboQuant e use um metodo para avaliar tecnologias emergentes e se preparar sem cair em hype.",
    author: "Equipe Otne SEO",
    date: "10 Abr 2026",
    category: "Tecnologia",
    readTime: "9 min",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "11",
    slug: "empresa-aparece-chatgpt-como-testar",
    title: "Sua empresa aparece quando alguém pergunta ao ChatGPT?",
    excerpt:
      "Saiba como verificar se seu negócio é citado pelas inteligências artificiais e o que fazer para aparecer nas respostas do ChatGPT, Gemini e Perplexity.",
    author: "Equipe Otne SEO",
    date: "17 Abr 2026",
    category: "Inteligência Artificial",
    readTime: "10 min",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "10",
    slug: "seo-ou-inteligencia-artificial-onde-apostar-2026",
    title: "SEO ou IA: onde o seu negócio deve apostar agora?",
    excerpt:
      "Guia prático para decidir entre SEO tradicional e otimização para inteligência artificial, com checklist e framework de decisão para 2026.",
    author: "Equipe Otne SEO",
    date: "17 Abr 2026",
    category: "Tendências",
    readTime: "12 min",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "8",
    slug: "marketing-digital-para-empresarios",
    title:
      "Marketing digital para empresários: o guia prático para crescer sem desperdiçar verba",
    excerpt:
      "Marketing digital não é postar todo dia: é um sistema para atrair demanda, transformar visitas em leads e leads em vendas. Veja um plano prático para PMEs com métricas, canais e exemplos.",
    author: "Equipe Otne SEO",
    date: "28 Jan 2026",
    category: "Marketing",
    readTime: "8 min",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "7",
    slug: "como-aparecer-no-google-maps",
    title: "Como Aparecer no Google Maps: Guia Passo a Passo para 2026",
    excerpt:
      "Sua empresa não aparece no mapa? Descubra como cadastrar, verificar e otimizar seu perfil no Google Maps para atrair clientes locais hoje mesmo.",
    author: "Equipe Otne SEO",
    date: "02 Fev 2026",
    category: "Tutorial",
    readTime: "7 min",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "6",
    slug: "seo-local-para-pequenas-empresas",
    title: "Guia Definitivo de SEO Local para Pequenas Empresas: Domine sua Região",
    excerpt:
      "Aprenda como colocar sua empresa no mapa (literalmente) e atrair clientes da sua região que estão prontos para comprar.",
    author: "Equipe Otne SEO",
    date: "28 Jan 2026",
    category: "SEO Local",
    readTime: "6 min",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "4",
    slug: "como-aumentar-autoridade-conquistar-links",
    title: "Como Aumentar a Autoridade e Conquistar Links: 5 Estratégias Comprovadas",
    excerpt:
      "Descubra táticas práticas para estabelecer credibilidade instantânea e atrair backlinks de qualidade para o seu site através da construção de autoridade.",
    author: "Equipe Otne SEO",
    date: "25 Jan 2025",
    category: "Link Building",
    readTime: "8 min",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "1",
    slug: "guia-seo-2026",
    title: "Guia Completo de SEO para 2026: O que muda? (E como sobreviver)",
    excerpt:
      "O SEO morreu? Não, ele evoluiu. Descubra como a IA, o Search Generative Experience (SGE) e os novos fatores de ranqueamento vão impactar seu negócio em 2026.",
    author: "Equipe Rank.AI",
    date: "22 Jan 2026",
    category: "Tendências",
    readTime: "10 min",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "3",
    slug: "erros-tecnicos-seo",
    title: "5 Erros Técnicos de SEO que matam seu tráfego: Guia de Correção",
    excerpt:
      "Links quebrados, site lento e falta de sitemap invisibilizam seu negócio. Descubra os 5 erros técnicos mais comuns e como blindar seu site para o Google.",
    author: "Equipe Otne SEO",
    date: "15 Nov 2025",
    category: "Técnico",
    readTime: "8 min",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "5",
    slug: "como-construir-confianca-conteudo-digital-ia",
    title:
      "Como Construir Confiança em Conteúdo Digital na Era da Inteligência Artificial: Guia Completo 2026",
    excerpt:
      "Em um mundo saturado de conteúdo gerado por IA, a confiança é a nova moeda valiosa. Descubra como diferenciar sua marca, dominar o E-E-A-T e por que uma Consultoria de SEO estratégica é vital para sua sobrevivência digital.",
    author: "Equipe Rank.AI",
    date: "22 Jan 2026",
    category: "Inteligência Artificial",
    readTime: "15 min",
    imageUrl: "/opengraph.jpg",
  },
  {
    id: "9",
    slug: "como-aparecer-nas-buscas-do-seu-cliente",
    title: "Por que seu concorrente aparece no Google e você não? (E como mudar isso)",
    excerpt:
      "Sabe quando você tem certeza de que o seu serviço é melhor, mas, na hora de fechar negócio, o cliente escolhe o concorrente? Descubra o que seu cliente realmente digita antes de comprar.",
    author: "Equipe Otne SEO",
    date: "03 Mar 2026",
    category: "Estratégia de Conteúdo",
    readTime: "6 min",
    imageUrl: "/opengraph.jpg",
  },
];

