import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

export function BrandIntroSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-sm lg:px-margin py-space-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-lg items-stretch">
        
        {/* Left Anchor Column */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-surface-container-low p-space-lg rounded-[2rem] border border-surface-container-high">
          <div className="space-y-space-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-badge text-label-badge uppercase">
              <span>STREETWEAR × KECEPATAN LAPANGAN</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase leading-[0.92] tracking-tight">
              JERSEY DENGAN<br/>ENERGI MAIN<br/>CHARACTER<span className="text-tertiary">.</span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Bukan sekadar template pasaran. Kami memperlakukan setiap klub futsal layaknya brand street football profesional—pita lengan custom, tipografi geometris, dan emblem klub heat-press premium.
            </p>
          </div>
          
          {/* Social Proof Avatars Stack */}
          <div className="pt-space-lg space-y-space-sm border-t border-surface-container-highest">
            <div className="flex items-center gap-space-sm">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-surface bg-primary-container text-on-primary-container font-headline-sm text-headline-sm flex items-center justify-center uppercase">V1</div>
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-surface bg-tertiary text-on-tertiary font-headline-sm text-headline-sm flex items-center justify-center uppercase">07</div>
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-surface bg-on-surface text-surface font-headline-sm text-headline-sm flex items-center justify-center uppercase">JKT</div>
              </div>
              <div>
                <div className="flex items-center text-tertiary">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="font-body-sm text-body-sm text-on-surface font-semibold">120+ Tim Terverifikasi 2024</p>
              </div>
            </div>
            <Link href="#tech-specs" className="inline-flex items-center gap-space-xs font-label-caps text-label-caps text-on-surface hover:text-primary tracking-widest uppercase pt-space-xs group">
              <span className="underline underline-offset-4 decoration-2">LIHAT SEMUA SPEK APPAREL</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
        
        {/* Right Mosaic: 3 Distinct Editorial Cards Side-by-Side */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-space-md">
          
          {/* CARD 1: Electric Lime Technical Tile */}
          <div className="bg-primary-container text-on-primary-container p-space-md rounded-[2rem] flex flex-col justify-between relative overflow-hidden group hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-full bg-on-primary-container text-primary-container flex items-center justify-center font-bold text-lg">
                <span className="material-symbols-outlined text-[18px]">texture</span>
              </div>
              <span className="font-label-badge text-label-badge uppercase tracking-wider bg-on-primary-container/10 px-2.5 py-1 rounded-full font-bold">
                KERAPATAN KAIN
              </span>
            </div>
            <div className="my-space-md relative rounded-xl overflow-hidden shadow-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://lh3.googleusercontent.com/aida/AEtjO1VwCjxn3mi1NAO3bIhv7ZtKmjCAJhSfvBx3WHRBqaTn4q4qpRH5PDioIswOEu433NDIhyNSfyhnv4hsPsCNcSFTXdn75YbgHdooyUDjh7PGHOZJSLuZDViPDGP5L_7RK-_MS02iynj-OUymlPEC_OFmfpKNhp9QSc8kjvMJNIvj5WYtg8sVMvJ-g-KHnEeJlrFGoPcwZnhohuFZkQKOEPHlaaBkTF1OywL2_6WNYJgWoUwLEZMSic4m1rbb" alt="Texture" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-2 left-2 bg-on-surface/90 text-surface px-2 py-0.5 rounded text-body-sm font-semibold uppercase">
                AERO-VENT 180GSM
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-headline-md text-headline-md tracking-tight uppercase leading-none font-black">
                475+ KERAPATAN KAIN
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                Mikro-perforasi laser yang dirancang khusus untuk kelembapan hall futsal tropis indoor.
              </p>
            </div>
          </div>
          
          {/* CARD 2: Crimson Red / Vermilion Teamwear Card */}
          <div className="bg-tertiary text-on-tertiary p-space-md rounded-[2rem] flex flex-col justify-between relative overflow-hidden group hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-label-caps uppercase tracking-wider font-bold">
                JERSEY TANDING
              </span>
              <div className="w-8 h-8 rounded-full bg-on-tertiary text-tertiary flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </div>
            </div>
            <div className="my-space-md relative rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://lh3.googleusercontent.com/aida/AEtjO1UqOfP_QRzlILjAJ00i23WrVFoelDE8BUp76EE7pAktF8LGYUphlBDi1loWPGD8BiD-Yc8nzzLYntP6TKidrwkyyndy3v0aSGAifI9jPm9WR_5UEPCyg-fSsuEPibUX3II6edxs6vGtS9d1LQch-QJCk_jG9yMP3CTmhLjsrryboFhccPXXHHX_B02nQR7_Yu1FwwlLOW1s5v6D0lwUfii5zZJyd9bs9gX-fB-KYESUU3-xxMvqmWQ44_k" alt="Teamwear" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-2 right-2 bg-on-tertiary text-tertiary font-label-badge text-label-badge px-2 py-0.5 rounded-full font-bold uppercase">
                SIAP TARKAM
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-headline-md text-headline-md uppercase tracking-tight leading-none font-black text-on-tertiary">
                SPEK TANDING PRO
              </div>
              <p className="font-body-sm text-body-sm text-tertiary-fixed font-medium">
                Jahitan ganda diperkuat, sanggup menahan tarikan keras baju lawan saat sprint box-to-box agresif.
              </p>
            </div>
          </div>
          
          {/* CARD 3: Warm Taupe / Neutral Product Tile */}
          <div className="bg-surface-container-high text-on-surface p-space-md rounded-[2rem] flex flex-col justify-between relative overflow-hidden group hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-label-caps uppercase tracking-wider font-bold text-on-surface">
                VOLTRA REDLINE 01
              </span>
              <span className="w-8 h-8 rounded-full bg-surface text-on-surface flex items-center justify-center text-lg">
                👕
              </span>
            </div>
            <div className="my-space-md relative rounded-xl overflow-hidden bg-surface-container-lowest p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://lh3.googleusercontent.com/aida/AEtjO1UUybog0cOZCnNCSwEwyDqOt_uZ_MtpBasHqz4hwDrVwCPfkf3Mcs2VSRdsJ5CGafsQXvK4zKLo0jVluZOKYxvS7BxJY_LfbsBEzcZIk6R2nwdwijKngv7lMrjOR4z_glzC3tyJYjpi4-z00SqhFn3D1UACyrdGkYiUczi8RIXjwH53s4DMZDW23nXmt2uZt6TiOK-iXGjTeF9m4k2PnawLt0AEjVwbD5LzmfxCl_Fjg2n-CvKlIH6YbsU" alt="Product" className="w-full h-40 object-contain mx-auto group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-2 left-2 flex gap-1">
                <span className="bg-surface-container text-on-surface px-1.5 py-0.5 rounded text-[10px] font-bold uppercase">NYAMAN</span>
                <span className="bg-surface-container text-on-surface px-1.5 py-0.5 rounded text-[10px] font-bold uppercase">KUAT</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold">SATU SET LENGKAP</span>
                <span className="font-label-caps text-label-caps text-tertiary font-extrabold">Rp 189.000</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Sudah termasuk celana, nama tim sublimasi, nomor punggung, dan logo sponsor custom.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
