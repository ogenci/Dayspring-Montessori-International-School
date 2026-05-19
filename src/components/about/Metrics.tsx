import { useReveal, attachReveal } from "@/hooks/use-reveal";

const stats = [
  { n: "28", unit: "Yrs", t: "Years of Excellence", d: "A proven legacy of guiding young minds since our founding in 1996.", icon: "◆" },
  { n: "45", unit: "+", t: "Dedicated Guides", d: "Trained Montessori educators committed to observing and nurturing each child.", icon: "◆" },
  { n: "400", unit: "+", t: "Enrolled Pupils", d: "A thriving, diverse community of young learners at every stage of development.", icon: "◆" },
  { n: "100", unit: "%", t: "Holistic Focus", d: "Every activity is designed for intellectual, physical, and emotional growth.", icon: "◆" },
  { n: "12", unit: "+", t: "Specialist Subjects", d: "From French and coding to music, art, and PE — taught by expert practitioners.", icon: "◆" },
  { n: "3", unit: "x", t: "Accredited", d: "Internationally recognised across three frameworks for outstanding Montessori delivery.", icon: "◆" },
];

export default function Metrics() {
  const h = useReveal<HTMLDivElement>();
  return (
    <section className="relative bg-cream py-28 text-ink lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(224,162,58,0.07),transparent_55%)] pointer-events-none" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">

        <div ref={h} className="reveal mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              By The Numbers
            </p>
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
              A community built on <span className="italic text-maroon">dedication.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
            Every number tells a story of commitment — to our pupils, our families, and the Montessori philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.t}
              ref={attachReveal}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-3xl border border-ink/[0.06] bg-white p-10 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:border-gold/20`}
            >
              {/* Watermark number */}
              <div className="absolute -right-3 -top-3 select-none font-display text-[7rem] font-light leading-none tracking-tighter text-ink/[0.03] transition-all duration-700 group-hover:text-gold/[0.07] group-hover:scale-110 origin-top-right">
                {s.n}
              </div>

              {/* Content */}
              <div className="relative">
                <div className="mb-8 flex items-start gap-1">
                  <span className="font-display text-[3.5rem] font-light leading-none tracking-tight text-maroon">
                    {s.n}
                  </span>
                  <span className="mt-3 font-display text-2xl font-light text-gold">
                    {s.unit}
                  </span>
                </div>
                <h3 className="font-display text-xl font-light text-ink">{s.t}</h3>
                <div className="mt-3 h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
                <p className="mt-4 text-[14px] leading-relaxed text-ink-soft transition-colors duration-300 group-hover:text-ink">
                  {s.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
