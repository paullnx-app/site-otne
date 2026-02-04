import React from "react";

interface LeadFormDialogProps {
  children: React.ReactNode;
  initialWebsite?: string;
}

export function LeadFormDialog({ children }: LeadFormDialogProps) {
  return (
    <a 
      href="https://wa.me/553133609525" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex hover:no-underline"
    >
      {children}
    </a>
  );
}
