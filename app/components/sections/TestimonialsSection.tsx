export function TestimonialsSection() {
  return (
    <section className="py-2 space-y-3">
      <div className="flex justify-between items-end px-1">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">Court Approved</span>
          <h3 className="font-condensed font-black text-3xl uppercase tracking-tight text-neutral-900">
            SQUAD REVIEWS.
          </h3>
        </div>
        <div className="text-right">
          <span className="text-amber-500 text-xs">★★★★★</span>
          <div className="text-[10px] font-mono text-neutral-500">5.0 RATING (120+ TEAMS)</div>
        </div>
      </div>
      
      <div className="space-y-2.5">
        {/* Review 1 */}
        <div className="bg-white p-4 rounded-2xl border border-brand-border">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-condensed font-bold text-sm uppercase text-neutral-900">Garuda Futsal Academy</span>
            <span className="text-[10px] font-mono text-neutral-400">Jakarta Selatan</span>
          </div>
          <p className="text-xs text-neutral-700 italic">
            &quot;Bahan Jacquard-nya dingin banget pas tanding intens jam 9 malem. Sablon nama sama rubber badge-nya tebel presisi!&quot;
          </p>
        </div>

        {/* Review 2 */}
        <div className="bg-white p-4 rounded-2xl border border-brand-border">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-condensed font-bold text-sm uppercase text-neutral-900">Kancil Muda Futsal Club</span>
            <span className="text-[10px] font-mono text-neutral-400">Bandung</span>
          </div>
          <p className="text-xs text-neutral-700 italic">
            &quot;Repeat order ke-3 untuk turnamen regional. Finishing kerah V-neck rapi dan cutting pas badan atletis.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
