import { useEffect } from 'react';

interface SchemaMarkupProps {
  data: Record<string, any>;
}

export function SchemaMarkup({ data }: SchemaMarkupProps) {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    
    // Append to head
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      try {
        document.head.removeChild(script);
      } catch (e) {
        // Ignore if already removed
      }
    };
  }, [data]);

  return null;
}
