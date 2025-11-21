export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML content
  author: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "guia-seo-2025",
    title: "Guia Completo de SEO para 2025: O que muda?",
    excerpt: "Descubra as principais tendências de SEO para o próximo ano, incluindo IA, Core Web Vitals e a importância da experiência do usuário.",
    content: `
      <h2>O Futuro do SEO</h2>
      <p>O SEO está em constante evolução. Com a chegada de novas tecnologias de Inteligência Artificial, a forma como pesquisamos está mudando.</p>
      <h3>1. Conteúdo Útil e Humano</h3>
      <p>O Google prioriza cada vez mais conteúdo escrito por especialistas para humanos, não apenas para robôs. A autenticidade é a chave.</p>
      <h3>2. Core Web Vitals</h3>
      <p>A velocidade e a estabilidade visual do seu site continuam sendo fatores cruciais para o ranqueamento.</p>
    `,
    author: "Equipe Rank.ai",
    date: "21 Nov 2025",
    category: "Tendências",
    readTime: "5 min",
    imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "2",
    slug: "seo-local-para-pequenas-empresas",
    title: "SEO Local: Como colocar sua empresa no mapa",
    excerpt: "Aprenda estratégias práticas para dominar as buscas locais e atrair clientes na sua região.",
    content: `
      <h2>Por que investir em SEO Local?</h2>
      <p>Para pequenas empresas, competir com gigantes globais é difícil. O SEO Local permite que você domine o seu território.</p>
      <h3>Google Business Profile</h3>
      <p>Manter seu perfil atualizado com fotos, horários e avaliações é o primeiro passo para o sucesso local.</p>
    `,
    author: "Ana Silva",
    date: "18 Nov 2025",
    category: "SEO Local",
    readTime: "4 min",
    imageUrl: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "3",
    slug: "erros-tecnicos-seo",
    title: "5 Erros Técnicos de SEO que matam seu tráfego",
    excerpt: "Links quebrados, site lento e falta de sitemap. Veja como corrigir os problemas invisíveis que prejudicam seu site.",
    content: `
      <h2>Não deixe a técnica atrapalhar seu conteúdo</h2>
      <p>Você pode ter o melhor texto do mundo, mas se o Google não conseguir ler seu site, ninguém vai encontrá-lo.</p>
      <h3>1. Velocidade de Carregamento</h3>
      <p>Sites lentos aumentam a taxa de rejeição. Otimize suas imagens e scripts.</p>
    `,
    author: "Carlos Tech",
    date: "15 Nov 2025",
    category: "Técnico",
    readTime: "6 min",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000"
  }
];