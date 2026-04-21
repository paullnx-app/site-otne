// WhatsApp Link Constant
export const WHATSAPP_LINK = "https://wa.me/553133609525";

// Kept for backward compatibility if needed, but we are refactoring to use direct links
export function LeadFormDialog({ children }: { children: React.ReactNode; initialWebsite?: string }) {
  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex hover:no-underline w-full sm:w-auto pointer-events-auto"
      style={{ textDecoration: 'none' }}
    >
      <span className="w-full pointer-events-none">
        {children}
      </span>
    </a>
  );
}
