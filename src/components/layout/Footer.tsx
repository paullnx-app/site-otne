import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6 text-center space-y-3">
        <p className="text-muted-foreground text-sm">
          © 2026 Otne SEO — Consultoria de SEO. Todos os direitos reservados.
        </p>
        <nav aria-label="Links do rodapé" className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link
            href="/politica-editorial"
            className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
          >
            Política editorial
          </Link>
          <span className="text-border" aria-hidden="true">·</span>
          <Link
            href="/quem-somos"
            className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
          >
            Quem somos
          </Link>
          <span className="text-border" aria-hidden="true">·</span>
          <Link
            href="/autor/paul-leite"
            className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
          >
            Paul Leite
          </Link>
        </nav>
      </div>
    </footer>
  );
}
