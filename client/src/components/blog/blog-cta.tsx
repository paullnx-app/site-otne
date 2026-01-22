import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";
import { TrendingUp, Search, BarChart3 } from "lucide-react";
import { useState } from "react";

export function BlogCTA() {
  const [url, setUrl] = useState("");

  return (
    <div className="bg-[#1e293b] rounded-xl p-6 text-white shadow-xl border border-slate-700 mt-8 relative overflow-hidden group">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon composition mimicking the 3D element */}
        <div className="mb-6 relative">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm rotate-3 group-hover:rotate-6 transition-transform duration-500">
            <BarChart3 className="w-8 h-8 text-primary" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg -rotate-6 group-hover:-rotate-12 transition-transform duration-500">
            <Search className="w-5 h-5 text-white" />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 leading-tight">
          Descubra oportunidades ocultas de SEO no seu site
        </h3>
        
        <p className="text-slate-400 text-sm mb-6">
          Receba uma análise gratuita de concorrentes e veja como dobrar seu tráfego.
        </p>

        <div className="w-full space-y-3">
          <div className="relative">
            <Input 
              placeholder="Digite seu site..." 
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 focus-visible:ring-primary focus-visible:border-primary h-12"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          
          <LeadFormDialog initialWebsite={url}>
            <Button className="w-full h-12 font-bold text-base bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
              ANALISAR MEU SITE
            </Button>
          </LeadFormDialog>
        </div>

        <p className="text-xs text-slate-500 mt-4">
          Análise 100% gratuita feita por especialistas
        </p>
      </div>
    </div>
  );
}
