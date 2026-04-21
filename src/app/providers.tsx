"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";

// Lenis accesses browser globals at module level — skip SSR entirely
const SmoothScroll = dynamic(
  () => import("@/components/layout/SmoothScroll").then((m) => ({ default: m.SmoothScroll })),
  { ssr: false }
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SmoothScroll />
        <Toaster />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
}
