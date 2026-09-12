import Link from "next/link";
import { ArrowUpRight, Heart, DesignServices } from "lucide-react";

export function ProductShowcaseSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-sm lg:px-margin py-space-xl" id="catalog">
      {/* Section Header with Editorial Meta */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-lg gap-space-sm border-b border-surface-container-highest">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
            <span className="font-label-badge text-label-badge uppercase tracking-widest text-on-surface-variant font-bold">
              BATCH #09 // KATALOG EDITORIAL 2025
            </span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">
            JERSEY TAMPIL BEDA DI LAPANGAN.
          </h2>
        </div>
        
        {/* Filter / Category Micro Tabs */}
        <div className="flex items-center gap-space-xs bg-surface-container p-1 rounded-full overflow-x-auto whitespace-nowrap">
          <button className="px-space-md py-1.5 rounded-full bg-on-surface text-surface font-label-caps text-label-caps uppercase">SEMUA JERSEY</button>
          <button className="px-space-md py-1.5 rounded-full text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps uppercase transition-colors">SPEK PRO</button>
          <button className="px-space-md py-1.5 rounded-full text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps uppercase transition-colors">CUSTOM TIM</button>
          <button className="px-space-md py-1.5 rounded-full text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps uppercase transition-colors">JERSEY KIPER</button>
        </div>
      </div>
      
      {/* 4-Column Asymmetric Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter pt-space-lg">
        
        {/* Item 1: Redline Titan */}
        <div className="bg-surface-container-low rounded-3xl p-space-md flex flex-col justify-between border border-surface-container-highest hover:border-outline-variant transition-colors group">
          <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-4 aspect-[4/5] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://lh3.googleusercontent.com/aida/AEtjO1UUybog0cOZCnNCSwEwyDqOt_uZ_MtpBasHqz4hwDrVwCPfkf3Mcs2VSRdsJ5CGafsQXvK4zKLo0jVluZOKYxvS7BxJY_LfbsBEzcZIk6R2nwdwijKngv7lMrjOR4z_glzC3tyJYjpi4-z00SqhFn3D1UACyrdGkYiUczi8RIXjwH53s4DMZDW23nXmt2uZt6TiOK-iXGjTeF9m4k2PnawLt0AEjVwbD5LzmfxCl_Fjg2n-CvKlIH6YbsU" alt="Redline Titan" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute top-3 left-3 bg-surface text-on-surface font-label-badge text-label-badge px-2.5 py-1 rounded-full font-bold uppercase shadow-sm">
              POLY DRYFIT 180
            </div>
            <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-surface-container-highest hover:bg-primary-container text-on-surface flex items-center justify-center transition-colors">
              <Heart className="w-4 h-4" />
            </button>
          </div>
          <div className="pt-space-md space-y-space-xs">
            <div className="flex items-center justify-between">
              <span className="font-headline-sm text-headline-sm uppercase text-on-surface">REDLINE TITAN</span>
              <span className="font-headline-sm text-headline-sm text-tertiary">Rp 189K</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Set Lengkap: Jersey + Celana Custom dengan Emblem Tim.</p>
            <Link href="https://wa.me/6281234567890?text=Halo%20KING SPORT%2C%20saya%20tertarik%20pesan%20Redline%20Titan" className="w-full mt-2 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-surface-container-high hover:bg-on-surface hover:text-surface text-on-surface font-label-caps text-label-caps uppercase tracking-wider transition-all">
              <span>PESAN VIA WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        {/* Item 2: Neon Volt 07 */}
        <div className="bg-surface-container-low rounded-3xl p-space-md flex flex-col justify-between border border-surface-container-highest hover:border-outline-variant transition-colors group">
          <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-4 aspect-[4/5] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://lh3.googleusercontent.com/aida/AEtjO1VwCjxn3mi1NAO3bIhv7ZtKmjCAJhSfvBx3WHRBqaTn4q4qpRH5PDioIswOEu433NDIhyNSfyhnv4hsPsCNcSFTXdn75YbgHdooyUDjh7PGHOZJSLuZDViPDGP5L_7RK-_MS02iynj-OUymlPEC_OFmfpKNhp9QSc8kjvMJNIvj5WYtg8sVMvJ-g-KHnEeJlrFGoPcwZnhohuFZkQKOEPHlaaBkTF1OywL2_6WNYJgWoUwLEZMSic4m1rbb" alt="Neon Volt" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute top-3 left-3 bg-primary-container text-on-primary-container font-label-badge text-label-badge px-2.5 py-1 rounded-full font-bold uppercase shadow-sm">
              BEST SELLER
            </div>
            <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-surface-container-highest hover:bg-primary-container text-on-surface flex items-center justify-center transition-colors">
              <Heart className="w-4 h-4" />
            </button>
          </div>
          <div className="pt-space-md space-y-space-xs">
            <div className="flex items-center justify-between">
              <span className="font-headline-sm text-headline-sm uppercase text-on-surface">NEON VOLT 07</span>
              <span className="font-headline-sm text-headline-sm text-tertiary">Rp 199K</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Termasuk Emblem Badge Silikon 3D Kerapatan Tinggi.</p>
            <Link href="https://wa.me/6281234567890?text=Halo%20KING SPORT%2C%20saya%20tertarik%20pesan%20Neon%20Volt%2007" className="w-full mt-2 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-surface-container-high hover:bg-on-surface hover:text-surface text-on-surface font-label-caps text-label-caps uppercase tracking-wider transition-all">
              <span>PESAN VIA WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        {/* Item 3: Dark Charcoal Stealth */}
        <div className="bg-surface-container-low rounded-3xl p-space-md flex flex-col justify-between border border-surface-container-highest hover:border-outline-variant transition-colors group">
          <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-4 aspect-[4/5] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://lh3.googleusercontent.com/aida/AEtjO1UqOfP_QRzlILjAJ00i23WrVFoelDE8BUp76EE7pAktF8LGYUphlBDi1loWPGD8BiD-Yc8nzzLYntP6TKidrwkyyndy3v0aSGAifI9jPm9WR_5UEPCyg-fSsuEPibUX3II6edxs6vGtS9d1LQch-QJCk_jG9yMP3CTmhLjsrryboFhccPXXHHX_B02nQR7_Yu1FwwlLOW1s5v6D0lwUfii5zZJyd9bs9gX-fB-KYESUU3-xxMvqmWQ44_k" alt="Stealth Raven" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute top-3 left-3 bg-on-surface text-surface font-label-badge text-label-badge px-2.5 py-1 rounded-full font-bold uppercase shadow-sm">
              SERI MALAM
            </div>
            <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-surface-container-highest hover:bg-primary-container text-on-surface flex items-center justify-center transition-colors">
              <Heart className="w-4 h-4" />
            </button>
          </div>
          <div className="pt-space-md space-y-space-xs">
            <div className="flex items-center justify-between">
              <span className="font-headline-sm text-headline-sm uppercase text-on-surface">STEALTH RAVEN</span>
              <span className="font-headline-sm text-headline-sm text-tertiary">Rp 185K</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Hitam pekat doff dengan strip reflektif khusus laga malam.</p>
            <Link href="https://wa.me/6281234567890?text=Halo%20KING SPORT%2C%20saya%20tertarik%20pesan%20Stealth%20Raven" className="w-full mt-2 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-surface-container-high hover:bg-on-surface hover:text-surface text-on-surface font-label-caps text-label-caps uppercase tracking-wider transition-all">
              <span>PESAN VIA WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        {/* Item 4: Hero Custom Squad Callout Card */}
        <div className="bg-on-surface text-surface rounded-3xl p-space-md flex flex-col justify-between border-2 border-primary-container relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-primary-container/20 rounded-full blur-xl pointer-events-none"></div>
          <div>
            <div className="flex items-center justify-between pb-space-md">
              <span className="px-2.5 py-1 rounded-full bg-primary-container text-on-primary-container font-label-badge text-label-badge uppercase font-bold">
                CUSTOM SQUAD
              </span>
              <span className="text-primary-container text-2xl">✍️</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg uppercase text-surface leading-[0.92] tracking-tight">
              BUAT JERSEY TIM KAMU SENDIRI.
            </h3>
            <p className="font-body-sm text-body-sm text-surface-dim pt-space-sm leading-relaxed">
              Kirim logo tim, tentukan model kerah, dan masukkan daftar nama serta nomor pemain. Dapatkan preview visual 3D gratis dalam 24 jam.
            </p>
            <ul className="pt-space-md space-y-2 font-body-sm text-body-sm text-surface">
              <li className="flex items-center gap-2">
                <span className="text-primary-container text-base">✓</span>
                <span>Min. Order 12 Pcs Roster</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-container text-base">✓</span>
                <span>Sublimasi / Emboss / Patch 3D</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary-container text-base">✓</span>
                <span>Mulai dari Rp 165.000 / Set</span>
              </li>
            </ul>
          </div>
          <div className="pt-space-lg">
            <Link href="https://wa.me/6281234567890?text=Halo%20KING SPORT%2C%20saya%20mau%20bikin%20custom%20jersey%20tim%20futsal" className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-primary-container text-on-primary-container hover:bg-surface hover:text-on-surface font-label-caps text-label-caps uppercase tracking-wider transition-all font-bold">
              <span>KONSULTASI DESAINER</span>
              <span className="material-symbols-outlined text-[18px]">chat</span>
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}
