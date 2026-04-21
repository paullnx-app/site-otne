import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada | Otne SEO",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-6xl font-display font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-4">Página não encontrada</h2>
        <p className="text-muted-foreground mb-8">
          A página que você procura não existe ou foi removida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
