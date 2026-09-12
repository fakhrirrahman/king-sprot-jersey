import Link from "next/link";
import { Zap, ArrowUpRight } from "lucide-react";

export function PerformanceSection() {
  return (
    <section className="bg-brand-dark text-white rounded-3xl p-5 relative overflow-hidden border border-neutral-800">
      <div className="absolute -right-16 -top-16 w-52 h-52 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-brand-lime text-[10px] font-bold uppercase tracking-wider mb-3">
          <Zap className="w-3 h-3" /> VOLTRA LABS INDONESIA
        </div>
        
        <h3 className="font-condensed font-black text-4xl uppercase tracking-tighter text-white leading-tight">
          DESIGNED<br />
          TO MOVE.
        </h3>
        
        <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
          Crafted specifically for fast-paced 5v5 hardwood courts and artificial turf arenas. Resists pulling, breathes instantly, and retains vivid colors after 100+ matches.
        </p>

        {/* Spec Pill Badges */}
        <div className="flex flex-wrap gap-1.5 my-4">
          <span className="text-[10px] font-mono uppercase bg-neutral-900 border border-neutral-700 text-neutral-200 px-2.5 py-1 rounded-md">
            Jacquard Micro-Hex
          </span>
          <span className="text-[10px] font-mono uppercase bg-neutral-900 border border-neutral-700 text-neutral-200 px-2.5 py-1 rounded-md">
            High Density 3D Crest
          </span>
          <span className="text-[10px] font-mono uppercase bg-neutral-900 border border-neutral-700 text-neutral-200 px-2.5 py-1 rounded-md">
            Thermal Transfer Foil
          </span>
          <span className="text-[10px] font-mono uppercase bg-neutral-900 border border-neutral-700 text-neutral-200 px-2.5 py-1 rounded-md">
            Anti-Bacterial Coating
          </span>
        </div>

        {/* Visual Highlight */}
        <div className="rounded-2xl overflow-hidden border border-neutral-700 my-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqyNUfyUPXB1piGM_cfSQ9AW1HuuN3V9_JtKzUltCm9Ara9JOyuewRBgWdQJeECoejfA0mX3bZZE4SF96jxxFV9SFOfTm94KoGEyCm-Reecwvn3UA3YlpMsL-RQaHLwq1b-2F2gBva7kDwQ54eD9I72JhjiK3C9fvbSzjh8ftSlsKIE8iv0zcSEMcwPbxZQm9KInRyLbe2pS9KLpP9QpaoZi9ogxck8BlgEGhwmGuB8Ofura7Wx4d-_A"
            alt="Studio sportswear product shot of a sleek modern futsal jersey"
            className="w-full h-56 object-cover object-top"
          />
        </div>

        <Link
          href="https://wa.me/6281234567890?text=Halo%20VOLTRA%20saya%20mau%20konsultasi%20bahan%20jersey"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-white hover:bg-brand-lime text-brand-dark hover:text-black font-condensed font-black tracking-wider uppercase text-base py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-all"
        >
          <span>REQUEST FABRIC SWATCH (FREE)</span>
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
