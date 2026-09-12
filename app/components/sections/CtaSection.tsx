import Link from "next/link";
import { Zap, ArrowUpRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="bg-neutral-950 text-white rounded-3xl p-6 relative overflow-hidden text-center border border-neutral-800 space-y-4">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-brand-lime text-[11px] font-bold uppercase">
        <Zap className="w-3 h-3" /> SEASON 2025 SLOTS OPEN
      </div>
      
      <h3 className="font-condensed font-black text-4xl uppercase tracking-tighter leading-none text-white">
        READY TO OWN<br />
        THE COURT?
      </h3>
      
      <p className="text-xs text-neutral-400 max-w-xs mx-auto">
        Join hundreds of competitive Indonesian teams wearing VOLTRA. Fast response on WhatsApp daily.
      </p>
      
      <div className="pt-2">
        <Link
          href="https://wa.me/6281234567890?text=Halo%20VOLTRA%20saya%20siap%20pesan%20jersey%20tim"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-brand-lime text-black hover:bg-[#cbef28] font-condensed font-black text-lg tracking-wider uppercase py-4 px-6 rounded-xl inline-flex items-center justify-center gap-2 shadow-xl shadow-brand-lime/10 transition-colors"
        >
          <span>CHAT ON WHATSAPP (+62)</span>
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
      
      <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider pt-1">
        JAKARTA TIMUR & BANDUNG WORKSHOP
      </div>
    </section>
  );
}
