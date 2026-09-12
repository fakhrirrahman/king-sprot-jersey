import Link from "next/link";
import { Send } from "lucide-react";

export function CustomBuilderSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-sm lg:px-margin py-space-xl" id="custom-flow">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
        
        {/* Left Column: Custom Squad Philosophy & Upload Trigger */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-surface-container-low p-space-lg lg:p-space-xl rounded-[2.5rem] border border-surface-container-high">
          <div className="space-y-space-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-badge text-label-badge uppercase font-bold">
              ALUR MUDAH 4 LANGKAH
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight leading-[0.92]">
              TIM KAMU.<br/>WARNA KAMU.<br/><span className="text-tertiary">IDENTITAS KAMU.</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Punya file Illustrator, coretan sketsa, atau moodboard Instagram? Tim desain kami siap menyulap konsepmu jadi render 3D siap produksi.
            </p>
            
            {/* Squad Customizer Interactive Checklist */}
            <div className="space-y-space-sm pt-space-xs">
              <div className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-lowest">
                <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-body-sm">01</span>
                <div>
                  <div className="font-label-caps text-label-caps uppercase text-on-surface font-bold">BEBAS PILIH MODEL KERAH & LENGAN</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">V-Neck Rib, Kerah Polo Retro, atau Jahitan Datar Modern.</div>
                </div>
              </div>
              <div className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-lowest">
                <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-body-sm">02</span>
                <div>
                  <div className="font-label-caps text-label-caps uppercase text-on-surface font-bold">VEKTORISASI LOGO SPONSOR GRATIS</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Kirim gambar JPEG biasa dan kami buatkan file vektornya gratis.</div>
                </div>
              </div>
              <div className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-lowest">
                <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-body-sm">03</span>
                <div>
                  <div className="font-label-caps text-label-caps uppercase text-on-surface font-bold">CUSTOM NAMA & NOMOR TIAP PEMAIN</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Ukuran jersey dari S hingga 5XL tanpa biaya tambahan.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-space-lg">
            <Link href="https://wa.me/6281234567890?text=Halo%20KING SPORT%2C%20mau%20tanya%20prosedur%20pembuatan%20custom%20jersey%20squad" className="w-full inline-flex items-center justify-between px-space-lg py-3.5 rounded-full bg-tertiary text-on-tertiary hover:bg-on-surface hover:text-surface font-label-caps text-label-caps uppercase tracking-wider transition-all font-bold group">
              <span>MULAI PESANAN TIM VIA WHATSAPP</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        
        {/* Right Column: 4 Clean Process Flow Cards */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-space-md">
          
          {/* Step 1 */}
          <div className="bg-surface-container p-space-lg rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-space-md hover:bg-surface-container-high transition-colors">
            <div className="flex items-start gap-space-md">
              <span className="font-headline-lg text-headline-lg text-outline-variant font-black leading-none">01</span>
              <div>
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold">KIRIM DESAIN ATAU PILIH TEMPLATE</h3>
                <p className="font-body-md text-body-md text-on-surface-variant pt-1">
                  Pilih dari katalog 2025 atau kirimkan logo tim, kode warna, dan sponsor via WhatsApp.
                </p>
              </div>
            </div>
            <span className="font-label-badge text-label-badge uppercase px-3 py-1 rounded-full bg-surface-container-highest text-on-surface self-start sm:self-center font-bold">HARI 1</span>
          </div>
          
          {/* Step 2 */}
          <div className="bg-surface-container p-space-lg rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-space-md hover:bg-surface-container-high transition-colors">
            <div className="flex items-start gap-space-md">
              <span className="font-headline-lg text-headline-lg text-outline-variant font-black leading-none">02</span>
              <div>
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold">PERSETUJUAN MOCKUP DIGITAL 3D</h3>
                <p className="font-body-md text-body-md text-on-surface-variant pt-1">
                  Terima render visual 3D tampak depan-belakang dalam 24 jam. Bebas revisi warna dan penempatan nama.
                </p>
              </div>
            </div>
            <span className="font-label-badge text-label-badge uppercase px-3 py-1 rounded-full bg-surface-container-highest text-on-surface self-start sm:self-center font-bold">HARI 2</span>
          </div>
          
          {/* Step 3 */}
          <div className="bg-surface-container p-space-lg rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-space-md hover:bg-surface-container-high transition-colors">
            <div className="flex items-start gap-space-md">
              <span className="font-headline-lg text-headline-lg text-outline-variant font-black leading-none">03</span>
              <div>
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold">DAFTAR UKURAN & PEMBAYARAN DP</h3>
                <p className="font-body-md text-body-md text-on-surface-variant pt-1">
                  Kirim daftar nama punggung, nomor, dan ukuran pemain. Slot jadwal produksi langsung dikunci dengan DP 50%.
                </p>
              </div>
            </div>
            <span className="font-label-badge text-label-badge uppercase px-3 py-1 rounded-full bg-surface-container-highest text-on-surface self-start sm:self-center font-bold">HARI 3</span>
          </div>
          
          {/* Step 4 */}
          <div className="bg-surface-container p-space-lg rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-space-md hover:bg-surface-container-high transition-colors">
            <div className="flex items-start gap-space-md">
              <span className="font-headline-lg text-headline-lg text-primary font-black leading-none">04</span>
              <div>
                <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold">PRODUKSI, QC & PENGIRIMAN SELURUH INDONESIA</h3>
                <p className="font-body-md text-body-md text-on-surface-variant pt-1">
                  Tinta sublimasi Jepang presisi tinggi, QC jahitan ketat berlapis, dan langsung dikirim ke kotamu.
                </p>
              </div>
            </div>
            <span className="font-label-badge text-label-badge uppercase px-3 py-1 rounded-full bg-primary-container text-on-primary-container self-start sm:self-center font-bold">HARI 7-10</span>
          </div>
          
        </div>
      </div>
    </section>
  );
}
