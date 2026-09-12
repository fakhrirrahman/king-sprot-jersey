import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-sm lg:px-margin pb-space-xl">
      {/* Final High-Impact Dark CTA Banner */}
      <div className="bg-on-surface text-surface rounded-[2.5rem] p-space-lg lg:p-space-xxl relative overflow-hidden flex flex-col items-center text-center space-y-space-md shadow-2xl">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-container/15 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/10 text-primary-container font-label-caps text-label-caps uppercase tracking-wider font-bold">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
          <span>SLOT PRODUKSI TERSEDIA UNTUK BATCH INI</span>
        </div>
        
        <h2 className="font-display-hero text-display-hero uppercase tracking-tight leading-[0.88] max-w-3xl">
          SIAP KUASAI<br/><span className="text-primary-container">LAPANGAN?</span>
        </h2>
        
        <p className="font-body-lg text-body-lg text-surface-dim max-w-xl">
          Lengkapi tim kamu dengan apparel futsal teknis buatan Indonesia. Konsultasikan ukuran, logo, dan desain 3D langsung via tim produksi kami di Tebet.
        </p>
        
        <div className="pt-space-md flex flex-col sm:flex-row items-center gap-space-md">
          <Link href="https://wa.me/6281236305053?text=Halo%20KING SPORT%2C%20saya%20siap%20pesan%20jersey%20squad" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-space-md px-space-xl py-4 bg-primary-container text-on-primary-container hover:bg-surface hover:text-on-surface rounded-full font-headline-sm text-headline-sm uppercase tracking-wider transition-all shadow-xl font-black group">
            <span>CHAT WHATSAPP SEKARANG (+62)</span>
            <span className="w-8 h-8 rounded-full bg-on-surface text-surface flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
          <Link href="#catalog" className="font-label-caps text-label-caps uppercase tracking-widest text-surface hover:text-primary-container py-3 px-space-md transition-colors">
            LIHAT KATALOG READY-STOCK →
          </Link>
        </div>
        
        <div className="pt-space-md flex flex-col md:flex-row items-center gap-space-lg text-surface-dim font-label-badge text-label-badge uppercase tracking-wider">
          <span>• PENGIRIMAN 7-10 HARI SELURUH INDONESIA</span>
          <span>• TRANSFER BANK & INVOICE RESMI TIM</span>
          <span>• STUDIO WORKSHOP TEBET JAKARTA SELATAN</span>
        </div>
      </div>
    </section>
  );
}
