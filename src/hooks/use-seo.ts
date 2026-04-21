import { useEffect } from "react";
import { absoluteUrl } from "@/lib/site";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
  robots?: string;
  canonicalPath?: string;
}

function upsertMeta(attrs: Record<string, string>) {
  const selector = Object.entries(attrs)
    .map(([k, v]) => `[${CSS.escape(k)}="${CSS.escape(v)}"]`)
    .join("");

  let el = document.head.querySelector(`meta${selector}`) as HTMLMetaElement | null;

  if (!el) {
    el = document.createElement("meta");
    for (const [k, v] of Object.entries(attrs)) {
      el.setAttribute(k, v);
    }
    document.head.appendChild(el);
  }

  return el;
}

function setMetaContent(attrs: Record<string, string>, content: string) {
  const el = upsertMeta(attrs);
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO({
  title,
  description,
  image,
  type = "website",
  robots,
  canonicalPath,
}: SEOProps) {
  useEffect(() => {
    // Atualiza título da página
    document.title = title;

    const canonicalUrl = absoluteUrl((canonicalPath ?? window.location.pathname) || "/");
    const ogImage = image ? absoluteUrl(image) : absoluteUrl("/og-image.png");

    upsertLink("canonical", canonicalUrl);

    // Meta Description Padrão
    setMetaContent({ name: "description" }, description);

    // Open Graph (Facebook, LinkedIn, WhatsApp)
    setMetaContent({ property: "og:title" }, title);
    setMetaContent({ property: "og:description" }, description);
    setMetaContent({ property: "og:type" }, type);
    setMetaContent({ property: "og:url" }, canonicalUrl);
    setMetaContent({ property: "og:site_name" }, "Otne SEO");
    setMetaContent({ property: "og:locale" }, "pt_BR");
    setMetaContent({ property: "og:image" }, ogImage);

    // Twitter Cards
    setMetaContent({ name: "twitter:title" }, title);
    setMetaContent({ name: "twitter:description" }, description);
    setMetaContent({ name: "twitter:image" }, ogImage);
    setMetaContent({ name: "twitter:card" }, "summary_large_image");
    setMetaContent({ name: "twitter:url" }, canonicalUrl);

    if (robots) {
      setMetaContent({ name: "robots" }, robots);
    } else {
      const robotsEl = document.head.querySelector('meta[name="robots"]');
      robotsEl?.remove();
    }
  }, [title, description, image, type, robots, canonicalPath]);
}