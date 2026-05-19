import { useReveal, attachReveal } from "@/hooks/use-reveal";

const milestones = [
  { year: "1996", t: "The Beginning", d: "Founded in East Legon, Accra, with 12 children and a bold vision for child-centred learning.", side: "left" },
  { year: "2002", t: "Expanding Horizons", d: "Dedicated science and arts studios opened, cementing our holistic enrichment philosophy.", side: "right" },
  { year: "2010", t: "International Recognition", d: "Dayspring earned its first international accreditation, affirming global Montessori standards.", side: "left" },
  { year: "2017", t: "The New Campus", d: "A purpose-built campus opened—designed entirely around the prepared-environment philosophy.", side: "right" },
  { year: "2024", t: "A New Chapter", d: "Over 400 pupils and a distinguished global alumni network continuing to raise the benchmark.", side: "left" },
];

export default function Journey() {
  const h = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-ink py-28 text-cream lg:py-40">
      {/* Subtle gold glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(224,162,58,0.07),transparent)]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div ref={h} className="reveal mb-24 text-center">
          <p className="mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold">
            Our Journey
          </p>
          <h2 className="font-display text-[clamp(2.5rem,4.5vw,4rem)] font-light leading-[1.02] tracking-[-0.025em]">
            Decades of <span className="italic text-gold">purposeful</span> growth.
          </h2>
        </div>

        {/* Horizontal scroll cards */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-[72px] hidden h-px bg-gradient-to-r from-cream/0 via-gold/25 to-cream/0 lg:block" />

          <div className="-mx-6 flex snap-x snap-mandatory gap-0 overflow-x-auto px-6 pb-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0">
            {milestones.map((m, i) => {
              const offset = i % 2 === 0 ? "lg:mt-0" : "lg:mt-24";
              const slideDir = i % 2 === 0 ? "reveal-left" : "reveal-right";
              return (
                <div
                  key={m.year}
                  ref={attachReveal}
                  className={`${slideDir} reveal-delay-${(i % 5) + 1} ${offset} group relative flex w-[300px] flex-shrink-0 snap-center flex-col px-4 lg:w-auto lg:flex-shrink`}
                >
                  {/* Node */}
                  <div className="relative mb-8 flex items-center justify-center">
                    <div className="h-[1px] w-full absolute bg-gold/20 lg:hidden" />
                    <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 bg-ink shadow-[0_0_20px_rgba(224,162,58,0.3)] transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_30px_rgba(224,162,58,0.6)]">
                      <span className="h-2 w-2 rounded-full bg-gold transition-all duration-500 group-hover:bg-ink" />
                    </div>
                  </div>

                  {/* Year watermark */}
                  <p className="font-display text-[3rem] font-light leading-none tracking-tighter text-gold/15 transition-colors duration-500 group-hover:text-gold/30">
                    {m.year}
                  </p>

                  {/* Content */}
                  <div className="mt-4 flex-1 rounded-[10px] border border-cream/10 bg-cream/[0.03] p-6 backdrop-blur-sm transition-all duration-700 ease-out group-hover:border-gold/20 group-hover:-translate-y-1 group-hover:bg-cream/[0.05] group-hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.3)]">
                    <h3 className="font-display text-lg text-gold">{m.t}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-cream/65 transition-colors duration-300 group-hover:text-cream/85">
                      {m.d}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
