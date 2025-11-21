import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Save, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminWrite() {
  useSEO({
    title: "Escrever Artigo | Rank.ai Admin",
    description: "Área administrativa para redação de conteúdo."
  });

  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Artigo Salvo!",
        description: "O rascunho foi salvo com sucesso (Simulação).",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-display font-bold">Novo Artigo</h1>
          <div className="flex gap-3">
            <Button variant="outline">Cancelar</Button>
            <Button onClick={handleSave} disabled={isLoading}>
              <Save className="w-4 h-4 mr-2" />
              {isLoading ? "Salvando..." : "Publicar"}
            </Button>
          </div>
        </div>

        <div className="space-y-8 bg-white p-8 rounded-2xl border border-border shadow-sm">
          <div className="space-y-2">
            <Label htmlFor="title">Título do Artigo (H1)</Label>
            <Input id="title" placeholder="Ex: Guia de SEO para 2025" className="text-lg font-medium h-12" />
            <p className="text-xs text-muted-foreground">Ideal entre 50-60 caracteres para o Google.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="slug">Slug (URL)</Label>
              <Input id="slug" placeholder="guia-seo-2025" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Categoria</Label>
              <Input id="category" placeholder="Ex: SEO Técnico" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Resumo (Meta Description)</Label>
            <Textarea id="excerpt" placeholder="Resumo curto para aparecer no Google..." className="h-24 resize-none" />
            <p className="text-xs text-muted-foreground">Ideal entre 150-160 caracteres.</p>
          </div>

          <div className="space-y-2">
            <Label>Imagem de Capa</Label>
            <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-muted-foreground hover:bg-secondary/50 transition-colors cursor-pointer">
              <ImageIcon className="w-8 h-8 mb-2" />
              <span className="text-sm">Clique para fazer upload ou arraste uma imagem</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Conteúdo (HTML/Markdown)</Label>
            <Textarea id="content" placeholder="Comece a escrever seu artigo..." className="min-h-[400px] font-mono text-sm" />
          </div>
        </div>
      </main>
    </div>
  );
}