import { useReveal } from "@/hooks/use-reveal";

export default function Admissions() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section id="admissions" className="relative overflow-hidden bg-maroon py-28 text-cream lg:py-36">
      <div className="grain pointer-events-none absolute inset-0 opacity-40" />
      <div className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-gold/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div ref={r} className="reveal lg:col-span-7">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold">
            Admissions 2026/27
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.0] tracking-[-0.03em] text-white">
            Begin your child's Dayspring <span className="italic text-gold">journey.</span>
          </h2>
          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-cream/80">
            Places are limited and intentionally so. We accept a small number of new pupils each term to preserve the
            atmosphere and care that have defined Dayspring for nearly three decades.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-[14px] font-semibold uppercase tracking-[0.18em] text-maroon-deep transition-all hover:shadow-[0_18px_50px_-12px_rgba(224,162,58,0.7)]"
            >
              Start application
            </a>
            <a href="#" className="text-[13px] font-semibold uppercase tracking-[0.22em] text-cream/80 hover:text-gold">
              Download prospectus →
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-[10px] border border-cream/20 bg-cream/[0.06] p-8 backdrop-blur-md lg:p-10"
          >
            <p className="font-display text-2xl text-cream">Request a campus visit</p>
            <p className="mt-2 text-[14px] leading-relaxed text-cream/60">We'll be in touch within one working day to confirm your slot.</p>
            <div className="mt-8 space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] uppercase tracking-[0.2em] text-cream/50">Parent / Guardian Name</label>
                <input
                  placeholder="Full name"
                  className="w-full rounded-[10px] border border-cream/15 bg-cream/5 px-5 py-4 text-[15px] text-cream placeholder:text-cream/35 focus:border-gold/60 focus:bg-cream/10 focus:outline-none transition-all duration-200"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] uppercase tracking-[0.2em] text-cream/50">Email Address</label>
                <input
                  placeholder="your@email.com"
                  type="email"
                  className="w-full rounded-[10px] border border-cream/15 bg-cream/5 px-5 py-4 text-[15px] text-cream placeholder:text-cream/35 focus:border-gold/60 focus:bg-cream/10 focus:outline-none transition-all duration-200"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-cream/50">Phone</label>
                  <input
                    placeholder="+233 …"
                    className="w-full rounded-[10px] border border-cream/15 bg-cream/5 px-5 py-4 text-[15px] text-cream placeholder:text-cream/35 focus:border-gold/60 focus:bg-cream/10 focus:outline-none transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-cream/50">Programme</label>
                  <select className="w-full rounded-[10px] border border-cream/15 bg-maroon px-5 py-4 text-[15px] text-cream/70 focus:border-gold/60 focus:outline-none transition-all duration-200 appearance-none">
                    <option className="bg-maroon-deep" value="">Select…</option>
                    <option className="bg-maroon-deep">Nursery</option>
                    <option className="bg-maroon-deep">Lower Primary</option>
                    <option className="bg-maroon-deep">Upper Primary</option>
                    <option className="bg-maroon-deep">Junior High</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-[10px] bg-gold py-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-maroon-deep transition-all duration-300 hover:bg-cream hover:shadow-[0_12px_40px_-12px_rgba(224,162,58,0.6)]"
              >
                Book my visit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}