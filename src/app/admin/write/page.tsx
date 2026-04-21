import type { Metadata } from "next";
import WriteContent from "./WriteContent";

export const metadata: Metadata = {
  title: "Editor | Otne SEO",
  robots: { index: false, follow: false },
};

export default function AdminWritePage() {
  return <WriteContent />;
}
