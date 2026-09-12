import Link from "next/link";
import { Wind, Shield, Droplets, Activity } from "lucide-react";

export function PerformanceSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-sm lg:px-margin py-space-xl" id="tech-specs">
      <div className="bg-on-surface text-surface rounded-[2.5rem] p-space-lg lg:p-space-xxl relative overflow-hidden">
        {/* Tech Badge Watermark */}
        <div className="absolute -bottom-10 -right-10 font-headline-xl text-[160px] text-surface/5 select-none pointer-events-none font-black leading-none">
          KING SPORT
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
          {/* Left Tech Narrative */}
          <div className="lg:col-span-6 space-y-space-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/10 text-primary-container font-label-badge text-label-badge uppercase">
              <span>LAB LAPANGAN INDONESIA</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl uppercase leading-[0.9] tracking-tight">
              DIRANCANG UNTUK BERGERAK.<br/>DIBUAT UNTUK KECEPATAN.
            </h2>
            <p className="font-body-lg text-body-lg text-surface-dim leading-relaxed">
              Futsal di Indonesia sangat menguras fisik, super cepat, dan dimainkan di lapangan tertutup yang lembap. Kami meninggalkan poliester sepak bola tebal biasa dan beralih ke rajutan micro-jacquard berpori.
            </p>
            
            {/* 4 Core Specs Grid */}
            <div className="grid grid-cols-2 gap-space-md pt-space-xs">
              <div className="p-space-sm bg-surface/5 rounded-2xl border border-surface/10">
                <Wind className="text-primary-container w-6 h-6" />
                <h4 className="font-label-caps text-label-caps uppercase text-surface mt-1 font-bold">JACQUARD AERO-VENT</h4>
                <p className="font-body-sm text-body-sm text-surface-dim">Sirkulasi udara tinggi melepas keringat dalam hitungan detik.</p>
              </div>
              <div className="p-space-sm bg-surface/5 rounded-2xl border border-surface/10">
                <Shield className="text-primary-container w-6 h-6" />
                <h4 className="font-label-caps text-label-caps uppercase text-surface mt-1 font-bold">EMBLEM 3D RUBBER</h4>
                <p className="font-body-sm text-body-sm text-surface-dim">Silikon lentur heat-press frekuensi tinggi bertekstur tajam.</p>
              </div>
              <div className="p-space-sm bg-surface/5 rounded-2xl border border-surface/10">
                <Droplets className="text-primary-container w-6 h-6" />
                <h4 className="font-label-caps text-label-caps uppercase text-surface mt-1 font-bold">LAPISAN ANTI-BAKTERI</h4>
                <p className="font-body-sm text-body-sm text-surface-dim">Mencegah bau apek saat sparring intens back-to-back.</p>
              </div>
              <div className="p-space-sm bg-surface/5 rounded-2xl border border-surface/10">
                <Activity className="text-primary-container w-6 h-6" />
                <h4 className="font-label-caps text-label-caps uppercase text-surface mt-1 font-bold">LENGAN RAGLAN DINAMIS</h4>
                <p className="font-body-sm text-body-sm text-surface-dim">Gerak bahu dan ayunan lengan bebas tanpa hambatan.</p>
              </div>
            </div>
            
            <div className="pt-space-xs">
              <Link href="https://wa.me/6281236305053?text=Halo%20KING SPORT%2C%20saya%20mau%20request%20sampel%20kain%20swatch" className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-full bg-surface text-on-surface hover:bg-primary-container hover:text-on-primary-container font-label-caps text-label-caps uppercase tracking-wider transition-all font-bold">
                <span>MINTA SAMPLE KAIN TIM GRATIS</span>
                <span className="material-symbols-outlined text-[18px]">package_2</span>
              </Link>
            </div>
          </div>
          
          {/* Right Tech Spec Graphic / Macro Close Up */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-surface/15 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://lh3.googleusercontent.com/aida/AEtjO1VwCjxn3mi1NAO3bIhv7ZtKmjCAJhSfvBx3WHRBqaTn4q4qpRH5PDioIswOEu433NDIhyNSfyhnv4hsPsCNcSFTXdn75YbgHdooyUDjh7PGHOZJSLuZDViPDGP5L_7RK-_MS02iynj-OUymlPEC_OFmfpKNhp9QSc8kjvMJNIvj5WYtg8sVMvJ-g-KHnEeJlrFGoPcwZnhohuFZkQKOEPHlaaBkTF1OywL2_6WNYJgWoUwLEZMSic4m1rbb" alt="Macro Fabric" className="w-full h-[460px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <span className="font-label-badge text-label-badge text-primary-container uppercase tracking-wider">PROTOKOL UJI LAB</span>
                  <p className="font-headline-sm text-headline-sm uppercase text-surface">LAB TEKNIKAL APPAREL TEBET • JAKSEL</p>
                </div>
                <div className="px-3 py-1 bg-surface/20 backdrop-blur-md rounded-full font-label-badge text-label-badge text-surface uppercase font-bold">
                  TERUJI 50+ KALI CUCI
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
