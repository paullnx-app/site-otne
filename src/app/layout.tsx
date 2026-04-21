import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "./providers";
import "@/globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.otne.com.br"),
  title: {
    default: "Otne SEO | Consultoria de SEO Especializada em PMEs",
    template: "%s | Otne SEO",
  },
  description:
    "Aumente suas vendas com SEO estratégico. Consultoria especializada para pequenas e médias empresas que buscam crescimento orgânico real e previsível.",
  openGraph: {
    siteName: "Otne SEO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={plusJakarta.variable}>
      <head>
        {/* Preconnect para Google Fonts CDN (next/font usa fonts.gstatic.com) */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload da imagem LCP — hero background (AVIF para Chrome, WebP para outros) */}
        <link
          rel="preload"
          as="image"
          href="/hero/hero-bg.avif"
          type="image/avif"
          fetchPriority="high"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
