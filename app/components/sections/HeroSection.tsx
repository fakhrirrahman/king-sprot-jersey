import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight, ArrowDown } from "lucide-react";
import heroImg from "../../assets/image.png";

export function HeroSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-sm lg:px-margin pt-space-md pb-space-xl">
      <div className="relative bg-on-surface text-surface rounded-[2.5rem] overflow-hidden p-space-lg lg:p-space-xl shadow-2xl">
        {/* Background Ambient Glow & Grid Accent */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-lg items-center relative z-10">
          
          {/* Left Sidebar Inside Hero Container */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-space-lg lg:border-r lg:border-surface/10 lg:pr-space-md">
            {/* Top Arc Badge & Performance Micro Module */}
            <div className="space-y-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface/10 text-primary-container text-lg">
                  ⚽
                </span>
                <span className="font-label-badge text-label-badge tracking-widest text-primary-container uppercase">
                  DIRANCANG UNTUK LAPANGAN
                </span>
              </div>
              <div className="pt-space-xs">
                <div className="w-16 h-1 bg-primary-container mb-space-xs rounded-full"></div>
                <h3 className="font-headline-sm text-headline-sm uppercase text-surface leading-tight tracking-wide">
                  PERFORMA TANDING TERBAIK UNTUK TIM INDONESIA
                </h3>
                <p className="font-body-sm text-body-sm text-surface-dim pt-1">
                  Bebas hambatan gesek. Rajutan anti-bakteri dirancang khusus untuk intensitas futsal malam hari.
                </p>
              </div>
              {/* Carousel Micro Controls */}
              <div className="flex items-center gap-space-xs pt-space-xs">
                <button className="w-8 h-8 rounded-full bg-surface/10 hover:bg-primary-container hover:text-on-primary-container text-surface flex items-center justify-center transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-surface/10 hover:bg-primary-container hover:text-on-primary-container text-surface flex items-center justify-center transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="font-label-badge text-label-badge text-surface-dim ml-space-xs uppercase">SPEK 01 // 03</span>
              </div>
            </div>
            
            {/* Mid / Lower Left Metric Feature */}
            <div className="bg-surface/5 p-space-md rounded-2xl border border-surface/10 space-y-space-xs">
              <div className="flex items-center justify-between">
                <span className="text-primary-container text-xl">🛡️</span>
                <span className="px-2 py-0.5 rounded-full bg-tertiary text-on-tertiary font-label-badge text-label-badge uppercase">STANDAR PRO</span>
              </div>
              <div className="font-headline-sm text-headline-sm text-surface uppercase">JERSEY CUSTOM ELITE UNTUK JUARA</div>
              <p className="font-body-sm text-body-sm text-surface-dim">
                Kerah kompresi presisi & potongan raglan yang teruji di turnamen akar rumput Jabodetabek.
              </p>
            </div>
            
            {/* Bottom Micro Tag */}
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="font-label-badge text-label-badge text-surface-dim uppercase tracking-wider">LAB TEBET • PENGERJAAN CEPAT</span>
            </div>
          </div>
          
          {/* Center Player Cutout Action Column */}
          <div className="lg:col-span-4 flex items-center justify-center relative min-h-[460px] lg:min-h-[560px]">
            {/* Geometric Graphic Frame behind player */}
            <div className="absolute inset-0 m-auto w-64 h-80 lg:w-72 lg:h-[460px] bg-gradient-to-b from-surface/10 to-transparent rounded-[2rem] border border-surface/10 rotate-[-3deg] pointer-events-none"></div>
            {/* Athlete Cutout Image breaking through frame */}
            <div className="relative z-10 w-full flex flex-col items-center">
              <Image 
                src={heroImg} 
                alt="Intense Indonesian female futsal player mid-action dribbling" 
                className="w-full max-w-[340px] lg:max-w-[400px] h-[480px] lg:h-[540px] object-cover object-top rounded-2xl drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
                placeholder="blur"
              />
              {/* Float Floating Performance Tag on Athlete */}
              <div className="absolute bottom-6 bg-surface/90 backdrop-blur-md text-on-surface px-space-md py-1.5 rounded-full flex items-center gap-space-xs shadow-lg">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                <span className="font-label-caps text-label-caps tracking-wider uppercase text-on-surface">SPEED FIT // AEROVENT™</span>
              </div>
            </div>
          </div>
          
          {/* Right Column Headline & Conversion Desk */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-space-md lg:pl-space-md">
            {/* Pill Badge Overline */}
            <div className="flex items-center gap-space-xs">
              <div className="inline-flex items-center gap-1.5 px-space-md py-1 rounded-full bg-surface/10 text-primary-container border border-surface/10">
                <span className="text-lg">⚡</span>
                <span className="font-label-caps text-label-caps tracking-widest uppercase">UPGRADE TIM KAMU</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-space-md py-1 rounded-full bg-primary-container text-on-primary-container font-label-badge text-label-badge uppercase">
                SPEK TANDING 2025
              </div>
            </div>
            
            {/* Massive Condensed Headline with Integrated Stat Card */}
            <div className="space-y-space-xs">
              <h1 className="font-display-hero text-display-hero text-surface tracking-tight uppercase leading-[0.88] select-none">
                KUASAI<br/>
                <span className="text-primary-container">LAPANGAN.</span>
              </h1>
              <div className="flex items-center gap-space-sm pt-space-xs">
                <div className="px-space-md py-space-xs bg-surface/10 rounded-xl border border-surface/15 flex items-center gap-space-sm">
                  <span className="font-headline-md text-headline-md text-primary-container font-black">475+</span>
                  <span className="font-body-sm text-body-sm text-surface uppercase leading-tight font-bold">
                    TIM<br/>TERPASANG
                  </span>
                </div>
                <p className="font-body-md text-body-md text-surface-dim max-w-xs">
                  Liga Futsal Nusantara, Tarkam regional & klub amatir Jabodetabek.
                </p>
              </div>
            </div>
            
            {/* Subtitle / Value Narrative */}
            <p className="font-body-lg text-body-lg text-surface-dim leading-relaxed">
              Dari sparring panas tengah malam di Sudirman hingga babak gugur turnamen nasional. Dipersenjatai mikro-perforasi laser, emblem silikon 3D tahan banting, dan bahan poly-dryfit sublimasi siap tempur.
            </p>
            
            {/* Dual Call to Actions */}
            <div className="pt-space-xs flex flex-wrap items-center gap-space-md">
              <Link href="https://wa.me/6281234567890?text=Halo%20VOLTRA%2C%20saya%20mau%20konsultasi%20custom%20jersey%20squad" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-space-sm pl-space-lg pr-space-xs py-2.5 bg-primary-container text-on-primary-container rounded-full font-label-caps text-label-caps uppercase tracking-wider hover:bg-surface hover:text-on-surface transition-all shadow-md group">
                <span className="font-bold">PESAN VIA WHATSAPP</span>
                <span className="w-8 h-8 rounded-full bg-on-surface text-surface flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="#custom-flow" className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-full bg-surface/10 hover:bg-surface/20 text-surface border border-surface/20 font-label-caps text-label-caps uppercase tracking-wider transition-colors">
                <span>INFO PESAN ROSTER</span>
                <ArrowDown className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Trust Badges Under CTA */}
            <div className="pt-space-sm flex items-center gap-space-lg border-t border-surface/10 text-surface-dim font-body-sm text-body-sm">
              <div className="flex items-center gap-1.5">
                <span className="text-primary-container text-base">✓</span>
                <span>Min. Order 12 Pcs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-primary-container text-base">🎨</span>
                <span>Gratis Mockup 3D</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-primary-container text-base">🚚</span>
                <span>Kirim 7-10 Hari</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
