
export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

function escapeAttr(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function buildNextImageUrl(src: string, width: number, quality: number): string {
  const url = `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
  return url;
}

function optimizeHtmlImages(html: string): string {
  // Replace <img ...> tags by rewriting src/srcset/sizes to use Next's image optimizer.
  // This keeps authoring simple (plain <img src="...">) while shipping responsive AVIF/WebP.
  const widths = [480, 640, 768, 1024, 1280];
  const quality = 82;

  return html.replace(/<img\b[^>]*>/gi, (tag) => {
    // Skip if already using Next optimizer, or explicitly disabled.
    if (tag.includes("/_next/image?") || tag.includes('data-no-opt="true"')) {
      return tag;
    }

    const srcMatch = tag.match(/\bsrc=(?:"|')([^"']+)(?:"|')/i);
    if (!srcMatch) return tag;

    const rawSrc = srcMatch[1];
    // Only optimize same-origin/relative images. External images should be handled via next/image remotePatterns.
    if (!rawSrc.startsWith("/")) return tag;

    const optimizedSrc = buildNextImageUrl(rawSrc, 1280, quality);
    const srcset = widths
      .map((w) => `${buildNextImageUrl(rawSrc, w, quality)} ${w}w`)
      .join(", ");

    const hasLoading = /\bloading=(?:"|')/i.test(tag);
    const hasDecoding = /\bdecoding=(?:"|')/i.test(tag);
    const hasSizes = /\bsizes=(?:"|')/i.test(tag);
    const hasSrcset = /\bsrcset=(?:"|')/i.test(tag);

    let out = tag;
    out = out.replace(/\bsrc=(?:"|')[^"']+(?:"|')/i, `src="${escapeAttr(optimizedSrc)}"`);

    if (!hasSrcset) {
      out = out.replace(/<img\b/i, `<img srcset="${escapeAttr(srcset)}"`);
    }
    if (!hasSizes) {
      out = out.replace(/<img\b/i, `<img sizes="(max-width: 768px) 100vw, 896px"`);
    }
    if (!hasLoading) {
      out = out.replace(/<img\b/i, `<img loading="lazy"`);
    }
    if (!hasDecoding) {
      out = out.replace(/<img\b/i, `<img decoding="async"`);
    }

    return out;
  });
}

export function processContent(html: string): { content: string; toc: TOCItem[] } {
  const toc: TOCItem[] = [];
  
  // Regex to match h2 tags only (minimalist approach)
  // Captures: 1=level (2), 2=attributes (optional), 3=content
  const regex = /<h(2)([^>]*)>(.*?)<\/h\1>/gi;
  
  const processedContent = html.replace(regex, (match, level, attrs, text) => {
    // Strip HTML tags from text for the ID and TOC display
    const cleanText = text.replace(/<[^>]*>/g, "");
    
    // Create a slug for the ID
    const id = cleanText
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove accents
      .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
      .replace(/^-+|-+$/g, ""); // Trim hyphens
      
    // Add to TOC
    toc.push({
      id,
      text: cleanText,
      level: parseInt(level)
    });
    
    // Return modified tag with ID
    // Check if it already has an ID (unlikely in our data but good practice)
    if (attrs.includes("id=")) {
      return match;
    }
    
    return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
  });

  const contentWithOptimizedImages = optimizeHtmlImages(processedContent);
  return { content: contentWithOptimizedImages, toc };
}
