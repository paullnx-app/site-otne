import { writeFile } from "node:fs/promises";
import path from "node:path";
import { blogPosts } from "../client/src/data/blog-posts.ts";

const SITE_URL = "https://www.otne.com.br";

const months: Record<string, number> = {
  Jan: 0,
  Fev: 1,
  Mar: 2,
  Abr: 3,
  Mai: 4,
  Jun: 5,
  Jul: 6,
  Ago: 7,
  Set: 8,
  Out: 9,
  Nov: 10,
  Dez: 11,
};

function parsePtBrDate(dateStr: string) {
  const [day, month, year] = dateStr.split(" ");
  return new Date(parseInt(year, 10), months[month], parseInt(day, 10));
}

function isoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

function xmlEscape(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const staticPages: Array<{
  loc: string;
  changefreq: string;
  priority: string;
  lastmodFrom: "fixed" | "blogMax";
  fixedLastmod?: string;
}> = [
  { loc: "/", changefreq: "weekly", priority: "1.0", lastmodFrom: "blogMax" },
  {
    loc: "/consultoria-seo",
    changefreq: "monthly",
    priority: "0.9",
    lastmodFrom: "fixed",
    fixedLastmod: "2026-02-02",
  },
  {
    loc: "/quem-somos",
    changefreq: "monthly",
    priority: "0.8",
    lastmodFrom: "fixed",
    fixedLastmod: "2026-02-02",
  },
  { loc: "/blog", changefreq: "daily", priority: "0.8", lastmodFrom: "blogMax" },
];

const latestBlogDateIso = isoDate(
  blogPosts
    .map((p) => parsePtBrDate(p.date))
    .reduce((max, d) => (d.getTime() > max.getTime() ? d : max), new Date(0)),
);

const urlsXml: string[] = [];

for (const page of staticPages) {
  const lastmod =
    page.lastmodFrom === "blogMax" ? latestBlogDateIso : page.fixedLastmod!;
  urlsXml.push(`  <url>
    <loc>${xmlEscape(`${SITE_URL}${page.loc}`)}</loc>
    <lastmod>${xmlEscape(lastmod)}</lastmod>
    <changefreq>${xmlEscape(page.changefreq)}</changefreq>
    <priority>${xmlEscape(page.priority)}</priority>
  </url>`);
}

for (const post of blogPosts) {
  const lastmod = isoDate(parsePtBrDate(post.date));
  urlsXml.push(`  <url>
    <loc>${xmlEscape(`${SITE_URL}/blog/${post.slug}`)}</loc>
    <lastmod>${xmlEscape(lastmod)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml.join("\n")}
</urlset>
`;

const outPath = path.resolve("client/public/sitemap.xml");
await writeFile(outPath, xml, "utf8");
console.log(`Wrote sitemap: ${outPath} (${blogPosts.length} posts)`);
