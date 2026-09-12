import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-margin-sm lg:px-margin py-space-xxl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-xl pb-space-xl">
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="flex items-baseline font-headline-md text-headline-md tracking-tight text-on-surface uppercase">
              <span>VOLTRA</span><span className="text-primary-container text-headline-lg leading-none">.</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              LAB TEKNIKAL LAPANGAN JAKARTA. Dirancang untuk kecepatan laga tarkam akar rumput Indonesia, duel intens malam hari, dan estetika streetwear berkelas. Bahan sublimasi poliester kerapatan tinggi, siluet aero presisi, dan jersey tim siap tempur.
            </p>
            <div className="flex items-center gap-space-xs pt-space-xs">
              <span className="px-space-sm py-1 bg-surface-container rounded-full font-label-badge text-label-badge text-on-surface uppercase">IDN FUTSAL LABS</span>
              <span className="px-space-sm py-1 bg-surface-container rounded-full font-label-badge text-label-badge text-on-surface uppercase">BATCH #09-JKT</span>
            </div>
          </div>
          
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-wider">ROSTER & KOLEKSI</span>
            <nav className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface-variant">
              <Link href="#catalog" className="hover:text-on-surface transition-colors">Koleksi Jersey 24/25</Link>
              <Link href="#catalog" className="hover:text-on-surface transition-colors">Set Siap Tanding Tarkam</Link>
              <Link href="#catalog" className="hover:text-on-surface transition-colors">Jersey Khusus Kiper</Link>
              <Link href="#custom-flow" className="hover:text-on-surface transition-colors">Kirim Roster Tim Custom</Link>
              <Link href="#tech-specs" className="hover:text-on-surface transition-colors">Teknologi Bahan AeroVent</Link>
            </nav>
          </div>
          
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-wider">MEJA PRODUKSI LANGSUNG</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Terhubung langsung dengan tim produksi dan tailoring kami di Tebet, Jakarta Selatan. Custom nameset cepat dan pengiriman tim tepat waktu.
            </p>
            <Link href="https://wa.me/6281234567890?text=Halo%20VOLTRA%20Production%20Desk" className="inline-flex items-center justify-between px-space-md py-space-sm bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-lg font-label-caps text-label-caps uppercase tracking-wider transition-colors">
              <span>MEJA PRODUKSI WHATSAPP</span>
              <MessageCircle className="w-5 h-5 text-tertiary" />
            </Link>
            <div className="flex items-center gap-space-md pt-space-xs">
              <Link href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Instagram @voltra.idn</Link>
              <span className="text-outline-variant">•</span>
              <Link href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">TikTok @voltra.futsal</Link>
            </div>
          </div>
        </div>
        
        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant">
          <p>© 2025 PT VOLTRA KREASI ATLETIKA. HAK CIPTA DILINDUNGI. JAKARTA, INDONESIA.</p>
          <div className="flex items-center gap-space-lg font-label-caps text-label-caps uppercase">
            <Link href="#tech-specs" className="hover:text-on-surface transition-colors">SPEK TEKNIS</Link>
            <Link href="#custom-flow" className="hover:text-on-surface transition-colors">FAQ PEMESANAN TIM</Link>
            <Link href="https://wa.me/6281234567890" className="hover:text-on-surface transition-colors">HOTLINE WHATSAPP</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
