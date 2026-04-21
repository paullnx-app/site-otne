/**
 * Validação automática de acentuação pt-BR.
 *
 * Objetivo: impedir que conteúdo publicado no blog contenha palavras
 * comuns do português escritas sem acentuação (ex.: "nao" em vez de "não",
 * "voce" em vez de "você", "trafego" em vez de "tráfego").
 *
 * Alvo:
 *   - src/data/blog-posts.ts
 *   - src/data/blog-posts.meta.ts
 *   - src/data/blog-post-content/*.ts
 *
 * Exceções: trechos que o script sabe que NÃO são texto humano
 *   - imports/exports (`from "..."`, nomes de identificadores);
 *   - URLs e paths (http/https, /blog/, slugs com hífen);
 *   - nomes de arquivos de imagem (`*.jpg/png/webp/svg`).
 */
import { readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(process.cwd());

const TARGET_FILES: string[] = [
  "src/data/blog-posts.ts",
  "src/data/blog-posts.meta.ts",
];

const CONTENT_DIR = "src/data/blog-post-content";

// Lista curada de palavras pt-BR que DEVEM ter acento/ç/til.
// Se uma dessas aparecer como palavra "solta" no texto humano, é erro.
const OFFENDERS: string[] = [
  "nao",
  "sao",
  "voce",
  "voces",
  "ja",
  "tambem",
  "entao",
  "tecnico",
  "tecnica",
  "tecnicos",
  "tecnicas",
  "pratica",
  "pratico",
  "praticas",
  "praticos",
  "trafego",
  "organico",
  "organica",
  "organicos",
  "organicas",
  "analises",
  "referencia",
  "referencias",
  "experiencia",
  "experiencias",
  "pagina",
  "paginas",
  "opcao",
  "opcoes",
  "acao",
  "acoes",
  "mencao",
  "mencoes",
  "citacao",
  "citacoes",
  "solucao",
  "solucoes",
  "recomendacao",
  "recomendacoes",
  "comparacao",
  "comparacoes",
  "distribuicao",
  "decisao",
  "posicao",
  "posicoes",
  "intencao",
  "informacao",
  "informacoes",
  "servico",
  "servicos",
  "confianca",
  "atencao",
  "mudanca",
  "mudancas",
  "diferenca",
  "diferencas",
  "governanca",
  "adaptacao",
  "conteudo",
  "conteudos",
  "duvida",
  "duvidas",
  "logica",
  "numero",
  "numeros",
  "politica",
  "politicas",
  "generico",
  "generica",
  "genericos",
  "genericas",
  "agntica", // typo de "agêntica"
  "agntico",
  "relatarios", // typo de "relatórios"
  "util",
  "uteis",
  "inutil",
  "dificil",
  "facil",
  "visivel",
  "invisivel",
  "citavel",
  "nivel",
  "niveis",
  "basico",
  "basica",
  "basicos",
  "basicas",
  "topico",
  "topicos",
  "regiao",
  "regioes",
  "preco",
  "precos",
  "metodo",
  "metodos",
  "propria",
  "proprio",
  "ultimo",
  "ultima",
  "ultimos",
  "ultimas",
  "rapido",
  "rapida",
  "rapidos",
  "rapidas",
  "algoritmico",
  "algoritmica",
  "indexacao",
  "execucao",
  "revisao",
  "revisoes",
  "atualizacao",
  "atualizacoes",
  "criacao",
  "criterio",
  "criterios",
  "cenario",
  "cenarios",
  "periodo",
  "periodos",
  "padrao",
  "padroes",
  "especializacao",
  "ciencia",
  "inicio",
  "proximo",
  "proxima",
  "proximos",
  "proximas",
  "preparacao",
  "classificacao",
  "priorizacao",
  "monitoramento", // correto, fica só como exemplo de prefixo comum
].filter((w) => w !== "monitoramento");

// Palavras acima são "isoladas" (com word boundaries).
// Linhas que contenham esses trechos são ignoradas (imports, URLs, etc.).
const IGNORE_LINE_PATTERNS: RegExp[] = [
  /^\s*import\s/i,
  /^\s*export\s+\*\s+from/i,
  /from\s+["']/i,
  /\brequire\s*\(/i,
];

// Dentro de uma linha "humana", ainda ignoramos pedaços que são URLs,
// slugs, caminhos de asset, código ou nomes de identificadores.
const INLINE_STRIP_PATTERNS: RegExp[] = [
  /<code[^>]*>[\s\S]*?<\/code>/gi, // conteúdo dentro de <code> (exemplos de URL, código)
  /https?:\/\/\S+/g, // URLs absolutas
  /href="[^"]*"/g, // atributos href (slugs internos)
  /src=\$\{[^}]+\}/g, // src dinâmico via template string
  /src="[^"]*"/g, // src literal
  /@\/assets\/\S+/g, // asset imports
  /\b[\w-]+\.(?:jpg|jpeg|png|webp|svg|gif|ts|tsx|js|jsx|mjs|cjs|json|md)\b/gi,
  /\b[a-z][a-zA-Z0-9]*(?:[A-Z][a-zA-Z0-9]*)+\b/g, // camelCase (identifiers)
  /\b[a-z]+(?:-[a-z0-9]+)+\b/gi, // kebab-case (slugs, css classes)
  /class="[^"]*"/g, // class attributes
  /\bNAP\b|\bCTA\b|\bSEO\b|\bAEO\b|\bGEO\b|\bIA\b|\bUI\b|\bUX\b/g, // siglas
];

function buildRegex(words: string[]): RegExp {
  return new RegExp(`\\b(?:${words.join("|")})\\b`, "gi");
}

const OFFENDER_REGEX = buildRegex(OFFENDERS);

function* walkContentDir(dir: string): Generator<string> {
  const abs = join(ROOT, dir);
  for (const entry of readdirSync(abs, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith(".ts")) {
      yield join(dir, entry.name);
    }
  }
}

interface Issue {
  file: string;
  line: number;
  word: string;
  context: string;
}

/**
 * Rótulos da instrução de produção que NUNCA podem virar heading do artigo.
 * São nomes de seções do briefing interno, não títulos para o leitor.
 */
const INSTRUCTION_LABEL_HEADINGS: RegExp[] = [
  /<h[1-6][^>]*>\s*Conclus(?:ão|ao)\s+com\s+CTA\s*<\/h[1-6]>/i,
  /<h[1-6][^>]*>\s*Introdu(?:ção|cao)\s*<\/h[1-6]>/i,
  /<h[1-6][^>]*>\s*Desenvolvimento\s*<\/h[1-6]>/i,
  /<h[1-6][^>]*>\s*Gancho\s*<\/h[1-6]>/i,
  /<h[1-6][^>]*>\s*Lead\s*<\/h[1-6]>/i,
  /<h[1-6][^>]*>\s*CTA\s+final\s*<\/h[1-6]>/i,
  /<h[1-6][^>]*>\s*FAQ\s*:\s*cinco\s+perguntas\s+frequentes\s*\(\s*formato\s+snippet\s*\)\s*<\/h[1-6]>/i,
];

function validateFile(relPath: string): Issue[] {
  const abs = join(ROOT, relPath);
  const text = readFileSync(abs, "utf8");
  const issues: Issue[] = [];

  text.split("\n").forEach((rawLine, idx) => {
    if (IGNORE_LINE_PATTERNS.some((re) => re.test(rawLine))) return;

    for (const pattern of INSTRUCTION_LABEL_HEADINGS) {
      const m = rawLine.match(pattern);
      if (m) {
        issues.push({
          file: relPath,
          line: idx + 1,
          word: `rótulo-de-instrução: "${m[0]}"`,
          context: rawLine.trim().slice(0, 160),
        });
      }
    }

    let stripped = rawLine;
    for (const pattern of INLINE_STRIP_PATTERNS) {
      stripped = stripped.replace(pattern, " ");
    }

    const matches = stripped.match(OFFENDER_REGEX);
    if (!matches) return;

    for (const m of matches) {
      issues.push({
        file: relPath,
        line: idx + 1,
        word: m,
        context: rawLine.trim().slice(0, 160),
      });
    }
  });

  return issues;
}

function main() {
  const files = [...TARGET_FILES, ...walkContentDir(CONTENT_DIR)];
  const allIssues = files.flatMap(validateFile);

  if (allIssues.length === 0) {
    console.log(
      `[validate-ptbr] OK - nenhum problema de acentuação encontrado em ${files.length} arquivos.`,
    );
    return;
  }

  console.error(
    `[validate-ptbr] ❌ ${allIssues.length} possível(is) problema(s) de acentuação pt-BR:`,
  );
  for (const issue of allIssues) {
    console.error(
      `  - ${issue.file}:${issue.line}  palavra="${issue.word}"  | ${issue.context}`,
    );
  }
  process.exit(1);
}

main();
