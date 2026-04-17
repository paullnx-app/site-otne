import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { blogPostsMeta as blogPosts } from "../client/src/data/blog-posts.meta.ts";

const SITE_URL = "https://www.otne.com.br";

type SeoRecord = {
  path: string;
  title: string;
  description: string;
  ogType: string;
  image?: string;
  robots?: string;
};

const records: SeoRecord[] = [
  {
    path: "/",
    title: "Otne SEO | Consultoria de SEO Especializada em PMEs",
    description:
      "Aumente suas vendas com SEO estratégico. Consultoria especializada para pequenas e médias empresas que buscam crescimento orgânico real e previsível.",
    ogType: "website",
    image: `${SITE_URL}/og-image.png`,
  },
  {
    path: "/consultoria-seo",
    title: "Consultoria de SEO Estratégica para Empresas | Otne SEO",
    description:
      "Aumente seu tráfego orgânico e vendas com nossa Consultoria de SEO. Diagnóstico técnico, estratégia de conteúdo e SEO Local para PMEs.",
    ogType: "website",
    image: `${SITE_URL}/og-image.png`,
  },
  {
    path: "/quem-somos",
    title: "Quem Somos | Otne SEO - Consultoria de SEO Especializada",
    description:
      "Conheça a Otne SEO, consultoria focada em resultados reais para PMEs. Nossa missão, valores e por que somos diferentes das agências tradicionais.",
    ogType: "website",
    image: `${SITE_URL}/og-image.png`,
  },
  {
    path: "/blog",
    title: "Blog de SEO | Dicas e Estratégias - Otne SEO",
    description:
      "Artigos sobre SEO, Marketing de Conteúdo e Estratégias Digitais para fazer sua empresa crescer no Google.",
    ogType: "website",
    image: `${SITE_URL}/og-image.png`,
  },
  {
    path: "/admin/write",
    title: "Escrever Artigo | Rank.ai Admin",
    description: "Área administrativa para redação de conteúdo.",
    ogType: "website",
    image: `${SITE_URL}/og-image.png`,
    robots: "noindex, nofollow",
  },
  {
    path: "/blog/rascunho",
    title: "Rascunho | Otne SEO",
    description: "Visualização interna de rascunho (não indexar).",
    ogType: "article",
    image: `${SITE_URL}/og-image.png`,
    robots: "noindex, nofollow",
  },
];

for (const post of blogPosts) {
  records.push({
    path: `/blog/${post.slug}`,
    title: `${post.title} | Blog Otne SEO`,
    description: post.excerpt,
    ogType: "article",
    image: post.imageUrl.startsWith("http")
      ? post.imageUrl
      : `${SITE_URL}${post.imageUrl}`,
  });
}

const outDir = path.resolve("server/seo");
const outPath = path.join(outDir, "blog-posts.json");
await mkdir(outDir, { recursive: true });
await writeFile(outPath, JSON.stringify({ siteUrl: SITE_URL, records }, null, 2), "utf8");
console.log(`Wrote SEO dataset: ${outPath} (${records.length} records)`);
