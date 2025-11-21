import { Helmet } from "react-helmet-async";

interface SchemaMarkupProps {
  data: Record<string, any>;
}

export function SchemaMarkup({ data }: SchemaMarkupProps) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
}
