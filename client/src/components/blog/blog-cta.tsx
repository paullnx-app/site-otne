import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";
import { TrendingUp, Search, BarChart3 } from "lucide-react";
import { useState } from "react";

export function BlogCTA() {
  const [url, setUrl] = useState("");

  return (
    <div className="bg-slate-900 rounded-xl p-6 text-white shadow-2xl border border-slate-700/50 mt-8 relative overflow-hidden group">
      {/* Decorative background elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[60px]"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px]"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon composition mimicking the 3D element */}
        <div className="mb-6 relative">
          <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center shadow-inner border border-slate-600 rotate-3 group-hover:rotate-6 transition-transform duration-500">
            <BarChart3 className="w-8 h-8 text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-900/20 -rotate-6 group-hover:-rotate-12 transition-transform duration-500 border border-white/10">
            <Search className="w-5 h-5 text-white" />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 leading-tight text-white drop-shadow-sm">
          Coloque o seu site na frente dos seus concorrentes
        </h3>
        
        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
          Receba uma análise gratuita de concorrentes e veja como dobrar seu tráfego orgânico.
        </p>

        <div className="w-full space-y-3">
          <div className="relative group/input">
            <Input 
              placeholder="Digite seu site (ex: empresa.com.br)" 
              className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus-visible:ring-primary focus-visible:border-primary h-12 transition-all group-hover/input:border-slate-500"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          
          <LeadFormDialog initialWebsite={url}>
            <Button className="w-full h-12 font-bold text-base bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 text-white shadow-lg shadow-orange-900/20 border border-white/10 transition-all hover:scale-[1.02]">
              ANALISAR MEU SITE
            </Button>
          </LeadFormDialog>
        </div>

        <p className="text-xs text-slate-400 mt-4 flex items-center gap-1.5 opacity-80">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
          Análise 100% gratuita feita por especialistas
        </p>
      </div>
    </div>
  );
}
