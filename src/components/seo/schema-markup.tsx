interface SchemaMarkupProps {
  data: Record<string, any>;
}

// Renders JSON-LD inline in the HTML — works in Server and Client Components.
// No useEffect needed: script tag is part of the initial response.
export function SchemaMarkup({ data }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
