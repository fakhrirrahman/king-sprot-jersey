import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <aside className="fixed bottom-4 right-4 z-50">
      <Link
        href="https://wa.me/6281234567890?text=Halo%20VOLTRA,%20mau%20tanya%20jersey"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2 bg-neutral-950 text-white pl-3 pr-4 py-2.5 rounded-full shadow-2xl border border-neutral-700 hover:scale-105 active:scale-95 transition-transform group"
        aria-label="Chat directly on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-lime"></span>
        </span>
        <span className="text-xs font-condensed font-black tracking-wider uppercase">CHAT NOW</span>
        <ArrowUpRight className="text-brand-lime w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </aside>
  );
}
