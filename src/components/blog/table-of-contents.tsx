"use client";

import { TOCItem } from "@/lib/blog-utils";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  if (items.length === 0) return null;

  return (
    <nav className="p-6 bg-secondary/20 rounded-xl border border-border/50">
      <h4 className="font-bold text-lg mb-4 text-foreground relative inline-block">
        O que você vai encontrar
        <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
      </h4>
      
      <ul className="space-y-3">
        {items.map((item) => (
          <li 
            key={item.id} 
            className={cn(
              "text-sm transition-colors",
              item.level === 3 && "pl-4"
            )}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={cn(
                "flex items-start gap-2 hover:text-primary transition-colors",
                activeId === item.id 
                  ? "text-primary font-bold" 
                  : "text-muted-foreground"
              )}
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-primary shrink-0 opacity-70" />
              <span className="leading-relaxed">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
