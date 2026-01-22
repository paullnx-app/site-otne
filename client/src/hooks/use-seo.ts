import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

export function useSEO({ title, description, image, type = "website" }: SEOProps) {
  useEffect(() => {
    // Atualiza título da página
    document.title = title;
    
    // Helper para atualizar ou criar meta tags
    const updateMetaTag = (selector: string, attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${selector}]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Meta Description Padrão
    updateMetaTag('name="description"', 'name', 'description', description);

    // Open Graph (Facebook, LinkedIn, WhatsApp)
    updateMetaTag('property="og:title"', 'property', 'og:title', title);
    updateMetaTag('property="og:description"', 'property', 'og:description', description);
    updateMetaTag('property="og:type"', 'property', 'og:type', type);
    
    if (image) {
      updateMetaTag('property="og:image"', 'property', 'og:image', image);
    }

    // Twitter Cards
    updateMetaTag('name="twitter:title"', 'name', 'twitter:title', title);
    updateMetaTag('name="twitter:description"', 'name', 'twitter:description', description);
    
    if (image) {
      updateMetaTag('name="twitter:image"', 'name', 'twitter:image', image);
      updateMetaTag('name="twitter:card"', 'name', 'twitter:card', 'summary_large_image');
    }

  }, [title, description, image, type]);
}