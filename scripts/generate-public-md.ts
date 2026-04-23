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

