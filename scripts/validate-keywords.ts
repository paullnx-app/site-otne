/**
 * Validação de canibalização de palavra-chave principal.
 *
 * Regra (SEO_GUIDELINES v2.1 §2.2):
 *   Cada `keywordPrincipal` deve ser única no site.
 *   Se dois posts tiverem a mesma keyword principal, ambos perdem posição.
 *
 * Execução: tsx scripts/validate-keywords.ts
 * Integrado em: npm run check (via package.json)
 */
import { blogPostsMeta } from "../src/data/blog-posts.meta";

function normalize(kw: string): string {
  return kw
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/\s+/g, " ")
    .trim();
}

function main() {
  const errors: string[] = [];
  const warnings: string[] = [];

  // ── 1. Canibalização: duas keywords principais iguais (após normalização) ──
  const seen = new Map<string, string[]>(); // normalized kw → slugs

  for (const post of blogPostsMeta) {
    if (!post.keywordPrincipal) {
      warnings.push(
        `  - [AVISO] Post sem keywordPrincipal: "${post.slug}" — preencha para ativar a proteção anti-canibalização.`,
      );
      continue;
    }
    const key = normalize(post.keywordPrincipal);
    const list = seen.get(key) ?? [];
    list.push(post.slug);
    seen.set(key, list);
  }

  for (const [kw, slugs] of seen.entries()) {
    if (slugs.length > 1) {
      errors.push(
        `  - Canibalização detectada — keyword "${kw}" aparece em ${slugs.length} posts: ${slugs.join(", ")}`,
      );
    }
  }

  // ── 2. Relatório ──
  if (warnings.length > 0) {
    console.warn(`[validate-keywords] ⚠️  ${warnings.length} aviso(s):`);
    warnings.forEach((w) => console.warn(w));
  }

  if (errors.length > 0) {
    console.error(
      `\n[validate-keywords] ❌ ${errors.length} canibalização(ões) de keyword detectada(s):`,
    );
    errors.forEach((e) => console.error(e));
    console.error(
      "\nAção: mantenha 1 keywordPrincipal única por artigo. Se dois posts competem pela mesma query, consolide o conteúdo no mais forte e redirecione (301) o outro.",
    );
    process.exit(1);
  }

  const total = blogPostsMeta.length;
  const withKw = blogPostsMeta.filter((p) => p.keywordPrincipal).length;
  console.log(
    `[validate-keywords] OK — ${withKw}/${total} posts com keywordPrincipal; nenhuma canibalização detectada.`,
  );
}

main();
