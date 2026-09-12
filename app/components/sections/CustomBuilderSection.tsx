import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CustomBuilderSection() {
  return (
    <section className="bg-white rounded-3xl p-5 border border-brand-border space-y-4" id="custom">
      <div className="space-y-1">
        <span className="text-[10px] font-mono font-bold tracking-widest text-brand-orange uppercase">Squad Customization</span>
        <h3 className="font-condensed font-black text-3xl uppercase tracking-tight text-neutral-950 leading-tight">
          YOUR TEAM.<br />
          YOUR COLORS.<br />
          YOUR IDENTITY.
        </h3>
        <p className="text-xs text-neutral-600">
          Got a sketch, sponsor file, or Instagram moodboard? Send it over. Our design studio will build 3D mockups within 24 hours.
        </p>
      </div>

      {/* Checklist Points */}
      <div className="grid grid-cols-2 gap-2.5 pt-1">
        <div className="p-2.5 rounded-xl bg-[#F7F4EE] border border-brand-border/80">
          <div className="text-brand-crimson font-black text-sm">01</div>
          <div className="font-condensed font-bold text-xs uppercase text-neutral-900 mt-1">Free 3D Mockup</div>
          <div className="text-[10px] text-neutral-500">Revisions until approved</div>
        </div>
        <div className="p-2.5 rounded-xl bg-[#F7F4EE] border border-brand-border/80">
          <div className="text-brand-crimson font-black text-sm">02</div>
          <div className="font-condensed font-bold text-xs uppercase text-neutral-900 mt-1">Custom Names & No.</div>
          <div className="text-[10px] text-neutral-500">Every player customized</div>
        </div>
        <div className="p-2.5 rounded-xl bg-[#F7F4EE] border border-brand-border/80">
          <div className="text-brand-crimson font-black text-sm">03</div>
          <div className="font-condensed font-bold text-xs uppercase text-neutral-900 mt-1">Rubber 3D Badge</div>
          <div className="text-[10px] text-neutral-500">Like professional clubs</div>
        </div>
        <div className="p-2.5 rounded-xl bg-[#F7F4EE] border border-brand-border/80">
          <div className="text-brand-crimson font-black text-sm">04</div>
          <div className="font-condensed font-bold text-xs uppercase text-neutral-900 mt-1">Fast 7-10 Days</div>
          <div className="text-[10px] text-neutral-500">Shipped across Indonesia</div>
        </div>
      </div>

      <Link
        href="https://wa.me/6281234567890?text=Halo%20VOLTRA%20saya%20punya%20desain%20tim%20mau%20bikin%20mockup"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-brand-orange text-white hover:bg-[#e04509] font-condensed font-black tracking-wider uppercase text-base py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
      >
        <span>START CUSTOM ORDER ON WHATSAPP</span>
        <ArrowUpRight className="w-5 h-5" />
      </Link>
    </section>
  );
}
