export function HowToOrderSection() {
  return (
    <section className="py-2 space-y-3">
      <div className="px-1">
        <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">Seamless Workflow</span>
        <h3 className="font-condensed font-black text-3xl uppercase tracking-tight text-neutral-900">
          FOUR STEPS TO COURT READY.
        </h3>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-brand-border">
          <span className="font-condensed font-black text-2xl text-brand-dark bg-brand-sand px-2.5 py-0.5 rounded-lg">01</span>
          <div>
            <h4 className="font-condensed font-bold text-sm uppercase text-neutral-900">CHOOSE OR SUBMIT STYLE</h4>
            <p className="text-[11px] text-neutral-600">Pick from our catalog or upload your squad&apos;s concept sketch.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-brand-border">
          <span className="font-condensed font-black text-2xl text-brand-dark bg-brand-sand px-2.5 py-0.5 rounded-lg">02</span>
          <div>
            <h4 className="font-condensed font-bold text-sm uppercase text-neutral-900">DIRECT WHATSAPP CONSULT</h4>
            <p className="text-[11px] text-neutral-600">Our jersey specialist helps you choose fabric, collar, and fit.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-brand-border">
          <span className="font-condensed font-black text-2xl text-brand-dark bg-brand-sand px-2.5 py-0.5 rounded-lg">03</span>
          <div>
            <h4 className="font-condensed font-bold text-sm uppercase text-neutral-900">CONFIRM ROSTER & SIZES</h4>
            <p className="text-[11px] text-neutral-600">Submit names, numbers, and squad sizes from S to 4XL.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-brand-border">
          <span className="font-condensed font-black text-2xl text-brand-lime bg-neutral-950 px-2.5 py-0.5 rounded-lg">04</span>
          <div>
            <h4 className="font-condensed font-bold text-sm uppercase text-neutral-900">PRODUCTION & EXPRESS DELIVERY</h4>
            <p className="text-[11px] text-neutral-600">7 to 10 working days production straight to your arena door.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
