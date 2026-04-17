import type { Express, Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";

type SeoRecord = {
  path: string;
  title: string;
  description: string;
  ogType: string;
  image?: string;
  robots?: string;
};

type SeoDataset = {
  siteUrl: string;
  records: SeoRecord[];
};

let cached: { dataset: SeoDataset; byPath: Map<string, SeoRecord> } | null =
  null;

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizePath(p: string) {
  if (!p) return "/";
  const noQuery = p.split("?")[0] ?? "/";
  if (noQuery === "") return "/";
  return noQuery;
}

function isBotUa(ua: string) {
  return /(googlebot|bingbot|duckduckbot|baiduspider|yandex|facebookexternalhit|facebot|twitterbot|linkedinbot|slackbot|discordbot|whatsapp|telegrambot|pinterest|embedly|openai|chatgpt-user|oai-searchbot|anthropic|claudebot|perplexitybot|google-extended|ccbot)/i.test(
    ua,
  );
}

function seoOgTypeFix(t: string) {
  return t || "website";
}

function loadSeoDataset(): { dataset: SeoDataset; byPath: Map<string, SeoRecord> } | null {
  if (cached) return cached;

  const jsonPath = path.resolve(import.meta.dirname, "seo", "blog-posts.json");
  if (!fs.existsSync(jsonPath)) {
    return null;
  }

  const raw = fs.readFileSync(jsonPath, "utf8");
  const dataset = JSON.parse(raw) as SeoDataset;

  const byPath = new Map<string, SeoRecord>();
  for (const r of dataset.records) {
    const p = normalizePath(r.path);
    byPath.set(p, { ...r, path: p });
  }

  cached = { dataset, byPath };
  return cached;
}

function upsertMeta(html: string, attr: "name" | "property", key: string, value: string) {
  const escapedKey = escapeHtml(key);
  const escapedValue = escapeHtml(value);

  const re = new RegExp(`<meta\\s+${attr}="${escapedKey}"[^>]*>`, "i");
  const tag = `<meta ${attr}="${escapedKey}" content="${escapedValue}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace("</head>", `  ${tag}\n</head>`);
}

function upsertLinkCanonical(html: string, href: string) {
  const escapedHref = escapeHtml(href);
  const re = new RegExp(`<link\\s+rel="canonical"[^>]*>`, "i");
  const tag = `<link rel="canonical" href="${escapedHref}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace("</head>", `  ${tag}\n</head>`);
}

function upsertTitle(html: string, title: string) {
  const escapedTitle = escapeHtml(title);
  const re = new RegExp(`<title>[^<]*</title>`, "i");
  const tag = `<title>${escapedTitle}</title>`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace("</head>", `  ${tag}\n</head>`);
}

function removeRobotsMeta(html: string) {
  return html.replace(/<meta\s+name="robots"[^>]*>\s*/gi, "");
}

function patchHtml(html: string, seo: SeoRecord, siteUrl: string) {
  const canonicalUrl = `${siteUrl}${seo.path}`;
  const ogImage = seo.image ?? `${siteUrl}/og-image.png`;

  let out = html;
  out = upsertTitle(out, seo.title);
  out = upsertMeta(out, "name", "description", seo.description);
  out = upsertLinkCanonical(out, canonicalUrl);

  out = upsertMeta(out, "property", "og:title", seo.title);
  out = upsertMeta(out, "property", "og:description", seo.description);
  out = upsertMeta(out, "property", "og:type", seoOgTypeFix(seo.ogType));
  out = upsertMeta(out, "property", "og:url", canonicalUrl);
  out = upsertMeta(out, "property", "og:image", ogImage);
  out = upsertMeta(out, "property", "og:site_name", "Otne SEO");
  out = upsertMeta(out, "property", "og:locale", "pt_BR");

  out = upsertMeta(out, "name", "twitter:card", "summary_large_image");
  out = upsertMeta(out, "name", "twitter:url", canonicalUrl);
  out = upsertMeta(out, "name", "twitter:title", seo.title);
  out = upsertMeta(out, "name", "twitter:description", seo.description);
  out = upsertMeta(out, "name", "twitter:image", ogImage);

  if (seo.robots) {
    out = upsertMeta(out, "name", "robots", seo.robots);
  } else {
    out = removeRobotsMeta(out);
  }

  return out;
}

function shouldAttemptHtmlPatch(req: Request) {
  if (req.method !== "GET") return false;
  const p = normalizePath(req.path);
  if (p.startsWith("/api")) return false;
  // Vite dev tooling
  if (p.startsWith("/@") || p.startsWith("/src") || p.startsWith("/node_modules")) {
    return false;
  }
  // common static extensions
  if (/\.(js|mjs|cjs|css|png|jpe?g|gif|webp|svg|ico|txt|xml|map|woff2?|ttf|eot)$/i.test(p)) {
    return false;
  }
  return true;
}

function installInterceptor(req: Request, res: Response) {
  const ua = req.get("user-agent") ?? "";
  if (!isBotUa(ua)) return;
  if (!shouldAttemptHtmlPatch(req)) return;

  const loaded = loadSeoDataset();
  if (!loaded) return;

  const pathname = normalizePath(req.path);
  const seo = loaded.byPath.get(pathname);
  if (!seo) return;

  const origSend = res.send.bind(res);
  res.send = ((body: any) => {
    try {
      if (typeof body === "string" && body.includes("<head")) {
        const patched = patchHtml(body, seo, loaded.dataset.siteUrl);
        return origSend(patched);
      }
    } catch {
      // fall through
    }
    return origSend(body);
  }) as any;
}

export function installSeoBotHtmlInjection(app: Express) {
  app.use((req: Request, res: Response, next: NextFunction) => {
    const enabled =
      process.env.NODE_ENV === "production" || process.env.SEO_BOT_META === "1";
    if (!enabled) return next();

    installInterceptor(req, res);
    next();
  });
}
