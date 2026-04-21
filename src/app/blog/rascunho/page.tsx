import type { Metadata } from "next";
import { RascunhoClient } from "./RascunhoClient";

export const metadata: Metadata = {
  title: "Rascunho | Otne SEO",
  robots: { index: false, follow: false },
};

export default function RascunhoPage() {
  return <RascunhoClient />;
}
