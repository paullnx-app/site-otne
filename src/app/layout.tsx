import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto } from "next/font/google";
import { Providers } from "./providers";
import "@/globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
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
    <html lang="pt-BR" className={`${plusJakarta.variable} ${roboto.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
