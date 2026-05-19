import { useReveal, attachReveal } from "@/hooks/use-reveal";

const moments = [
  { t: "07:30", h: "Morning Assembly", d: "Anthem, prayer and a shared moment of focus to begin the day.", period: "Morning" },
  { t: "08:00", h: "Core Lessons", d: "Math, language and cultural studies during the uninterrupted work cycle.", period: "Morning" },
  { t: "10:30", h: "Outdoor & Movement", d: "Active play, gross-motor work and time in the school garden.", period: "Mid-day" },
  { t: "12:00", h: "Lunch & Quiet Time", d: "A warm meal, table manners practised together, and a rest period for younger pupils.", period: "Afternoon" },
  { t: "14:00", h: "Enrichment", d: "Music, French, coding, art, and physical education, taught by specialists.", period: "Afternoon" },
  { t: "15:00", h: "Reflection & Home", d: "Pupils review their day, tidy their environment and depart calmly.", period: "Evening" },
];

export default function DayTimeline() {
  const h = useReveal<HTMLDivElement>();
  const lineRef = useReveal<HTMLDivElement>();
  
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-cream lg:py-40">
      {/* Premium background effects */}
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(224,162,58,0.15),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_bottom_left,rgba(224,162,58,0.15),transparent_50%)]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* Header */}
        <div ref={h} className="reveal mb-24 max-w-3xl text-center md:mx-auto">
          <p className="mb-6 inline-flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold">
            A day at Dayspring
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.02] tracking-[-0.025em]">
            From sunrise to <span className="italic text-gold">stillness.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Center Line */}
          <div ref={lineRef} className="reveal-line absolute bottom-0 left-[23px] top-0 w-px bg-gradient-to-b from-cream/0 via-cream/15 to-cream/0 md:left-1/2 md:-ml-px" />

          <div className="space-y-20 md:space-y-32">
            {moments.map((m, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={m.t} ref={attachReveal} className="reveal relative flex flex-col md:flex-row md:items-center">
                  
                  {/* Timeline Node */}
                  <div className="absolute left-[23px] top-[18px] flex h-0 w-0 items-center justify-center md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                    <div className="absolute h-3 w-3 -translate-x-1.5 -translate-y-1.5 rounded-full bg-gold shadow-[0_0_20px_rgba(224,162,58,0.8)] ring-4 ring-ink" />
                  </div>

                  {/* Time Block */}
                  <div className={`w-full pl-16 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right lg:pr-24' : 'md:order-2 md:pl-16 lg:pl-24'}`}>
                    <div className={`flex flex-col gap-2 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                      <span className="inline-block rounded-full bg-cream/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold backdrop-blur-sm border border-cream/5">
                        {m.period}
                      </span>
                      <p className="font-display text-[clamp(3rem,6vw,4.5rem)] font-light text-cream leading-none tracking-tight">
                        {m.t}
                      </p>
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className={`mt-6 w-full pl-16 md:mt-0 md:w-1/2 ${isEven ? 'md:order-2 md:pl-16 lg:pl-24' : 'md:pr-16 md:text-right lg:pr-24'}`}>
                    <div className={`group rounded-3xl border border-cream/10 bg-cream/[0.02] p-8 backdrop-blur-md transition-all duration-500 hover:bg-cream/[0.05] hover:border-cream/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <h3 className="font-display text-2xl text-gold">{m.h}</h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-cream/70 transition-colors duration-300 group-hover:text-cream/90">
                        {m.d}
                      </p>
                    </div>
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