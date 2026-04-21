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

/**
 * Frases-gatilho clássicas de IA e meta-frases sobre o próprio artigo.
 * Presença de qualquer uma derruba o build (SEO_GUIDELINES v2.1).
 */
const AI_GIVEAWAY_PATTERNS: Array<{ pattern: RegExp; label: string }> = [
  { pattern: /\bneste\s+artigo,?\s+(?:vamos|iremos)\s+(?:explorar|ver|entender|descobrir|mostrar|analisar|apresentar)\b/i, label: "meta-frase: 'neste artigo, vamos…'" },
  { pattern: /\bao\s+longo\s+deste\s+(?:artigo|texto|conte(?:ú|u)do|guia)\b/i, label: "meta-frase: 'ao longo deste artigo'" },
  { pattern: /\bno\s+decorrer\s+deste\s+(?:artigo|conte(?:ú|u)do|texto|guia)\b/i, label: "meta-frase: 'no decorrer deste…'" },
  { pattern: /\bcomo\s+veremos\s+a\s+seguir\b/i, label: "meta-frase: 'como veremos a seguir'" },
  { pattern: /\bneste\s+guia\s+completo\b/i, label: "abertura genérica: 'neste guia completo'" },
  { pattern: /\bno\s+mundo\s+atual\b/i, label: "abertura genérica: 'no mundo atual'" },
  { pattern: /\bem\s+um\s+cen(?:á|a)rio\s+cada\s+vez\s+mais\b/i, label: "abertura genérica: 'em um cenário cada vez mais'" },
  { pattern: /\bvoc(?:ê|e)\s+j(?:á|a)\s+se\s+perguntou\b/i, label: "abertura genérica: 'você já se perguntou'" },
  { pattern: /\bsem\s+d(?:ú|u)vida\s+alguma\b/i, label: "frase-gatilho: 'sem dúvida alguma'" },
  { pattern: /\b(?:é|e)\s+imperativo\s+que\b/i, label: "frase-gatilho: 'é imperativo que'" },
  { pattern: /\b(?:é|e)\s+fundamental\s+compreender\s+que\b/i, label: "frase-gatilho: 'é fundamental compreender que'" },
  { pattern: /\b(?:é|e)\s+importante\s+ressaltar\s+que\b/i, label: "frase-gatilho: 'é importante ressaltar que'" },
  { pattern: /\bvale\s+destacar\s+que\b/i, label: "frase-gatilho: 'vale destacar que'" },
  { pattern: /\bn(?:ã|a)o\s+podemos\s+negar\s+que\b/i, label: "frase-gatilho: 'não podemos negar que'" },
  { pattern: /\bem\s+(?:ú|u)ltima\s+an(?:á|a)lise\b/i, label: "frase-gatilho: 'em última análise'" },
  { pattern: /\bisso\s+nos\s+leva\s+a\s+refletir\b/i, label: "frase-gatilho: 'isso nos leva a refletir'" },
  { pattern: /\bisso\s+posto\b/i, label: "frase-gatilho: 'isso posto'" },
];

/**
 * Vocabulário AI-inflated: palavras-gatilho típicas de texto gerado por IA.
 * Uso esporádico é tolerado; abuso (mais de INFLATED_MAX ocorrências no mesmo
 * arquivo) derruba o build (SEO_GUIDELINES v2.1 seção 1.2).
 */
const AI_INFLATED_WORDS: string[] = [
  "crucial",
  "holístico",
  "holística",
  "holísticos",
  "holísticas",
  "robusto",
  "robusta",
  "robustos",
  "robustas",
  "alavancar",
  "alavancando",
  "potencializar",
  "potencializando",
  "desvendar",
  "desvendando",
  "paradigma",
  "jornada",
  "panorama",
  "disruptivo",
  "disruptiva",
  "tangível",
  "intangível",
  "subjacente",
  "intrínseco",
  "intrínseca",
  "incrivelmente",
  "notavelmente",
  "significativamente",
  "extremamente",
];
const INFLATED_MAX = 3;
const AI_INFLATED_REGEX = new RegExp(`\\b(?:${AI_INFLATED_WORDS.join("|")})\\b`, "gi");

function validateFile(relPath: string): Issue[] {
  const abs = join(ROOT, relPath);
  const text = readFileSync(abs, "utf8");
  const issues: Issue[] = [];
  const inflatedCount = new Map<string, number>();

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

    for (const { pattern, label } of AI_GIVEAWAY_PATTERNS) {
      if (pattern.test(stripped)) {
        issues.push({
          file: relPath,
          line: idx + 1,
          word: label,
          context: rawLine.trim().slice(0, 160),
        });
      }
    }

    const inflatedMatches = stripped.match(AI_INFLATED_REGEX);
    if (inflatedMatches) {
      for (const word of inflatedMatches) {
        const key = word.toLowerCase();
        inflatedCount.set(key, (inflatedCount.get(key) ?? 0) + 1);
      }
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

  for (const [word, count] of inflatedCount) {
    if (count > INFLATED_MAX) {
      issues.push({
        file: relPath,
        line: 0,
        word: `vocabulário AI-inflated excessivo: "${word}" x${count} (máx. ${INFLATED_MAX})`,
        context: `SEO_GUIDELINES v2.1 §1.2: reduza o uso de "${word}" ou substitua por termo concreto.`,
      });
    }
  }

  return issues;
}

function main() {
  const files = [...TARGET_FILES, ...walkContentDir(CONTENT_DIR)];
  const allIssues = files.flatMap(validateFile);

  if (allIssues.length === 0) {
    console.log(
      `[validate-ptbr] OK - nenhum problema de acentuação/voz humana em ${files.length} arquivos.`,
    );
    return;
  }

  console.error(
    `[validate-ptbr] ❌ ${allIssues.length} problema(s) detectado(s) (acentuação / rótulos / voz humana):`,
  );
  for (const issue of allIssues) {
    const where = issue.line > 0 ? `${issue.file}:${issue.line}` : issue.file;
    console.error(`  - ${where}  ${issue.word}  | ${issue.context}`);
  }
  process.exit(1);
}

main();
