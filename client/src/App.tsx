import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import ConsultoriaSEO from "@/pages/consultoria-seo";
import BlogIndex from "@/pages/blog/index";
import BlogPost from "@/pages/blog/post";
import AdminWrite from "@/pages/admin/write";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/consultoria-seo" component={ConsultoriaSEO}/>
      <Route path="/blog" component={BlogIndex}/>
      <Route path="/blog/:slug" component={BlogPost}/>
      <Route path="/admin/write" component={AdminWrite}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
