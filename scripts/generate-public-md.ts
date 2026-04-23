import fs from "node:fs/promises";
import path from "node:path";
import { blogPostsMeta } from "../src/data/blog-posts.meta";

function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.otne.com.br").replace(
    /\/+$/,
    ""
  );
}

function safeSlug(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function mdEscapeInline(text: string): string {
  return text.replace(/[\[\]()*_`]/g, (m) => `\\${m}`);
}

async function writeFileEnsuringDir(filePath: string, content: string) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content, "utf8");
}

function renderStaticPageMd(opts: {
  pathname: string;
  title: string;
  description: string;
  bullets?: string[];
}): string {
  const base = siteUrl();
  const url = `${base}${opts.pathname}`;
  const lines: string[] = [];

  lines.push(`# ${opts.title}`);
  lines.push("");
  lines.push(`URL canônica: ${url}`);
  lines.push("");
  lines.push(opts.description);
  lines.push("");

  if (opts.bullets && opts.bullets.length > 0) {
    lines.push("## Pontos principais");
    lines.push("");
    for (const item of opts.bullets) {
      lines.push(`- ${item}`);
    }
    lines.push("");
  }

  lines.push("## Fonte (HTML)");
  lines.push("");
  lines.push(`Se você precisa de todos os detalhes, use a página HTML: ${url}`);
  lines.push("");

  return lines.join("\n");
}

function renderBlogIndexMd(): string {
  const base = siteUrl();
  const lines: string[] = [];

  lines.push(`# Blog`);
  lines.push("");
  lines.push(
    `Lista de artigos publicados. Versão em Markdown para agentes (GEO/AEO).`
  );
  lines.push("");
  lines.push(`URL canônica: ${base}/blog`);
  lines.push("");
  lines.push(`## Artigos`);
  lines.push("");

  for (const post of blogPostsMeta) {
    const url = `${base}/blog/${post.slug}`;
    lines.push(
      `- **${mdEscapeInline(post.title)}** (${mdEscapeInline(post.date)}) — ${mdEscapeInline(
        post.excerpt
      )}`
    );
    lines.push(`  - URL: ${url}`);
  }

  lines.push("");
  return lines.join("\n");
}

function renderBlogPostMd(post: (typeof blogPostsMeta)[number]): string {
  const base = siteUrl();
  const url = `${base}/blog/${post.slug}`;

  return [
    `# ${post.title}`,
    ``,
    `URL canônica: ${url}`,
    ``,
    `- Autor: ${post.author}`,
    `- Data: ${post.date}`,
    `- Categoria: ${post.category}`,
    `- Tempo de leitura: ${post.readTime}`,
    post.keywordPrincipal ? `- Palavra-chave principal: ${post.keywordPrincipal}` : ``,
    ``,
    `## Resumo`,
    ``,
    post.excerpt,
    ``,
    `## Fonte (HTML)`,
    ``,
    `Se você precisa de todos os detalhes, use a página HTML: ${url}`,
    ``,
  ]
    .filter(Boolean)
    .join("\n");
}

async function main() {
  const repoRoot = process.cwd();
  const publicMdRoot = path.join(repoRoot, "public", "md");

  // static pages that agents frequently request
  const staticPages = [
    {
      pathname: "/blog",
      file: "blog.md",
      title: "Blog",
      description:
        "Lista de artigos publicados. Versão em Markdown para agentes (GEO/AEO).",
    },
    {
      pathname: "/consultoria-seo",
      file: "consultoria-seo.md",
      title: "Consultoria de SEO",
      description:
        "Página de serviço. Versão em Markdown para agentes (GEO/AEO), com link para a versão completa em HTML.",
      bullets: [
        "SEO técnico (Core Web Vitals, indexação e arquitetura)",
        "Estratégia editorial e produção em pt-BR (qualidade e consistência)",
        "AEO/GEO: estrutura citável (FAQs, headings em pergunta, clareza)",
      ],
    },
    {
      pathname: "/quem-somos",
      file: "quem-somos.md",
      title: "Quem somos",
      description:
        "Página institucional. Versão em Markdown para agentes (GEO/AEO), com link para a versão completa em HTML.",
      bullets: [
        "Foco em SEO com resultado mensurável",
        "Transparência editorial e autoria definida",
        "Performance e experiência do usuário como base",
      ],
    },
    {
      pathname: "/politica-editorial",
      file: "politica-editorial.md",
      title: "Política editorial",
      description:
        "Diretrizes editoriais do site. Versão em Markdown para agentes (GEO/AEO), com link para a versão completa em HTML.",
      bullets: [
        "Critérios de qualidade, revisão e atualização",
        "Boas práticas para evitar conteúdo genérico",
        "Padrões de schema e metadados",
      ],
    },
    {
      pathname: "/autor/paul-leite",
      file: path.join("autor", "paul-leite.md"),
      title: "Autor: Paul Leite",
      description:
        "Página de autor. Versão em Markdown para agentes (GEO/AEO), com link para a versão completa em HTML.",
      bullets: [
        "Biografia e credenciais do autor",
        "Relação com os conteúdos publicados",
        "Links para perfis públicos (quando aplicável)",
      ],
    },
  ] as const;

  for (const p of staticPages) {
    // blog index is rendered from metadata list to remain always in sync
    if (p.pathname === "/blog") continue;
    await writeFileEnsuringDir(
      path.join(publicMdRoot, p.file),
      renderStaticPageMd({
        pathname: p.pathname,
        title: p.title,
        description: p.description,
        bullets: p.bullets ? [...p.bullets] : undefined,
      })
    );
  }

  // index
  await writeFileEnsuringDir(
    path.join(publicMdRoot, "blog.md"),
    renderBlogIndexMd()
  );

  // per post
  for (const post of blogPostsMeta) {
    const slug = safeSlug(post.slug);
    await writeFileEnsuringDir(
      path.join(publicMdRoot, "blog", `${slug}.md`),
      renderBlogPostMd(post)
    );
  }

  // Optional: leave a small marker for debugging.
  await writeFileEnsuringDir(
    path.join(publicMdRoot, ".generated.txt"),
    `generated_at=${new Date().toISOString()}\ncount=${blogPostsMeta.length}\n`
  );
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

