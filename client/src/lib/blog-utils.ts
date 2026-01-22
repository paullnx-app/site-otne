
export interface TOCItem {
  id: string;
  text: string;
  level: number;
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
  
  return { content: processedContent, toc };
}
