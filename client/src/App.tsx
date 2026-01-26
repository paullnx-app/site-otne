import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy } from "react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

// Lazy load pages for better initial performance (Code Splitting)
const Home = lazy(() => import("@/pages/home"));
const ConsultoriaSEO = lazy(() => import("@/pages/consultoria-seo"));
const QuemSomos = lazy(() => import("@/pages/quem-somos"));
const BlogIndex = lazy(() => import("@/pages/blog/index"));
const BlogPost = lazy(() => import("@/pages/blog/post"));
const AdminWrite = lazy(() => import("@/pages/admin/write"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/index.html" component={Home}/>
        <Route path="/index.htm" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/consultoria-seo" component={ConsultoriaSEO}/>
        <Route path="/quem-somos" component={QuemSomos}/>
        <Route path="/blog" component={BlogIndex}/>
        <Route path="/blog/:slug" component={BlogPost}/>
        <Route path="/admin/write" component={AdminWrite}/>
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SmoothScroll />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
