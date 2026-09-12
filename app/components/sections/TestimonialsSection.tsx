import { Star, Verified } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-sm lg:px-margin py-space-xl">
      {/* Testimonial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pb-space-xl">
        <div className="bg-surface-container-low p-space-lg rounded-3xl border border-surface-container-high flex flex-col justify-between">
          <div className="space-y-space-sm">
            <div className="flex items-center gap-1 text-tertiary">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <p className="font-body-md text-body-md text-on-surface leading-relaxed">
              &quot;Kainnya enteng banget buat main intens 40 menit di lapangan semen atau vinyl. Sablon nama nggak gampang pecah walau ditarik lawan.&quot;
            </p>
          </div>
          <div className="pt-space-md border-t border-surface-container-highest mt-space-md flex items-center justify-between">
            <div>
              <div className="font-label-caps text-label-caps uppercase text-on-surface font-bold">GARUDA FUTSAL ACADEMY</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">Jakarta Selatan • 18 Set</div>
            </div>
            <Verified className="text-primary w-5 h-5" />
          </div>
        </div>
        
        <div className="bg-surface-container-low p-space-lg rounded-3xl border border-surface-container-high flex flex-col justify-between">
          <div className="space-y-space-sm">
            <div className="flex items-center gap-1 text-tertiary">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <p className="font-body-md text-body-md text-on-surface leading-relaxed">
              &quot;Proses di WhatsApp cepet parah. Revisi desain 3D 2 jam langsung jadi, barang sampe Bandung sebelum jadwal kickoff turnamen.&quot;
            </p>
          </div>
          <div className="pt-space-md border-t border-surface-container-highest mt-space-md flex items-center justify-between">
            <div>
              <div className="font-label-caps text-label-caps uppercase text-on-surface font-bold">KANCIL MUDA FC</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">Bandung • 24 Set</div>
            </div>
            <Verified className="text-primary w-5 h-5" />
          </div>
        </div>
        
        <div className="bg-surface-container-low p-space-lg rounded-3xl border border-surface-container-high flex flex-col justify-between">
          <div className="space-y-space-sm">
            <div className="flex items-center gap-1 text-tertiary">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <p className="font-body-md text-body-md text-on-surface leading-relaxed">
              &quot;Logo rubber 3D tim kami tebel dan finishingnya mewah kayak jersey klub Eropa. Pas dipakai tanding keliatan paling profesional di lapangan.&quot;
            </p>
          </div>
          <div className="pt-space-md border-t border-surface-container-highest mt-space-md flex items-center justify-between">
            <div>
              <div className="font-label-caps text-label-caps uppercase text-on-surface font-bold">ALTA FC SURABAYA</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">Surabaya • 15 Set</div>
            </div>
            <Verified className="text-primary w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
