import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link 
        href="https://wa.me/6281234567890?text=Halo%20KING SPORT%20Desk" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center gap-space-xs pl-space-md pr-3 py-2.5 bg-on-surface text-surface rounded-full shadow-2xl border border-surface/20 hover:scale-105 transition-all group"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
        <span className="font-label-caps text-label-caps uppercase tracking-wider text-surface group-hover:text-primary-container transition-colors">
          QUICK CHAT
        </span>
        <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center ml-1">
          <MessageCircle className="w-4 h-4" />
        </span>
      </Link>
    </div>
  );
}
