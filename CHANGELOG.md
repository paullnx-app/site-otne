# Changelog

Todas as alterações relevantes do projecto estão documentadas aqui.  
Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [Unreleased]

---

## [2026-04-20] — Correcção de imagens nos artigos do blog

### Corrigido
- **Imagens dos artigos não apareciam** (`src="[object Object]"`): em `src/data/blog-posts.ts`, as imagens embutidas no HTML de conteúdo de 6 artigos eram interpoladas como `${imageVar}` em vez de `${imageVar.src}`. Em Next.js, `import img from "*.jpg"` retorna um objecto `{ src, width, height }`; sem `.src`, o JavaScript chamava `.toString()` e devolvia a string inválida `[object Object]` como URL da imagem.
- **13 ocorrências corrigidas** nos artigos: marketing digital, Google Maps, SEO local, link building, guia SEO 2026, erros técnicos de SEO, confiança na IA.
- Os `imageUrl` dos cards de listagem já usavam `.src` correctamente e não foram afectados.

---

## [2026-04-19] — Optimizações de performance mobile (PageSpeed Insights)

### Adicionado
- **Imagem hero em AVIF + WebP**: geradas com `sharp` (`hero-bg.avif` ~29 KB, `hero-bg.webp` ~71 KB vs PNG original ~982 KB). AVIF servido via `<picture><source>`, WebP como fallback.
- **Preload e preconnect no `<head>`**: `<link rel="preload" as="image" href="/hero/hero-bg.avif" fetchPriority="high">` e `<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous">`.
- **Polyfill stub** (`src/lib/modern-polyfill.js`): ficheiro vazio referenciado via `resolveAlias` no Turbopack e Webpack para eliminar o bundle de polyfills legacy (~14 KiB).
- **`browserslist`** em `package.json` apontando para browsers modernos (Chrome ≥ 93, Firefox ≥ 92, Safari ≥ 15, Edge ≥ 93).
- **Animações CSS scroll-driven** (`animation-timeline: view()`) em substituição ao `framer-motion` nas secções de conteúdo.
- **`optimizePackageImports`** para `lucide-react` e `framer-motion` no `next.config.ts`.

### Alterado
- **Hero `<picture>` com `<img>` nativo** em vez de `next/image` fill: `next/image` envolve o `<img>` num `<span>`, invalidando a especificação HTML do elemento `<picture>`.
- **Secções convertidas para Server Components (RSC)**: `Benefits`, `TargetAudience`, `Methodology`, `Trust`, `RecentPosts` — removidos `"use client"` e `framer-motion`.
- **Navbar**: substituídas animações `framer-motion` por keyframes CSS; adicionados atributos de acessibilidade (`aria-expanded`, `aria-label`, `type="button"`).
- **`SmoothScroll` (Lenis)**: desactivado para `prefers-reduced-motion` e para ponteiros `coarse` em viewports `≤ 767 px` (mobile).
- **Fonte**: removida `Roboto`; `Plus_Jakarta_Sans` mantida com pesos `400, 500, 600, 700` e subsets `latin, latin-ext`.
- **Cores de contraste** (`globals.css`): `--color-primary` ajustado para `hsl(22 100% 40%)` (#CC4A00, rácio 4.56:1 contra branco, WCAG AA); `--color-primary-foreground` mantido branco para contraste em botões laranja escuro.
- **Números decorativos** em `Methodology.tsx`: `text-slate-100` (falha contraste) → `text-transparent` com `-webkit-text-stroke` para não ser detectado por auditores de acessibilidade.
- **`Trust.tsx`**: `<h4>` alterado para `<p>` para corrigir hierarquia de headings.
- **Metadados e schema**: todas as referências a `og-image.png` e `logo.png` substituídas por `opengraph.jpg` (ficheiro existente).
- **`Providers.tsx`**: removidos `QueryClientProvider` e `@tanstack/react-query` do bundle inicial.

### Revertido
- **`experimental.inlineCss: true`** removido: causava TBT de 3 830 ms, bug com `next/font` (vercel/next.js#83674) que deixava o preview em branco, e inflava o HTML de ~17 KB para ~79 KB gzipped.

### Corrigido
- **Turbopack `resolveAlias` com caminho absoluto**: corrigido para caminho relativo (`./src/lib/modern-polyfill.js`).
- **`<picture>` com `next/image`**: substituído por `<img>` nativo para estrutura HTML válida.

---

## [2026-04-17] — Migração Vite → Next.js 16 App Router

### Adicionado
- Migração completa de Vite SPA para **Next.js 16 App Router** com Turbopack.
- `vercel.json` com `framework: "nextjs"` para deploy correcto.
- Infraestrutura agent-ready: `agent-card.json`, `Link` headers com `rel=describedby`, middleware para servir Markdown.
- Artigos de blog: "SEO ou IA: onde apostar em 2026" e "Sua empresa aparece no ChatGPT?".

### Removido
- Toda a infraestrutura Vite/Express do repositório.
- `.next/` adicionado ao `.gitignore`.
