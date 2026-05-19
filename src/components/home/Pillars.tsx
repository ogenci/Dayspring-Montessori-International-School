import { useReveal, attachReveal } from "@/hooks/use-reveal";

const pillars = [
  {
    n: "01",
    t: "Freedom",
    d: "Every child learns in a safe, nurturing and controlled environment, free from distractions and rich with possibility.",
  },
  {
    n: "02",
    t: "Responsibility",
    d: "Each pupil has the ability to grow, learn, and develop into an informed, caring and productive citizen.",
  },
  {
    n: "03",
    t: "Dedication",
    d: "Educators who pursue innovative ideas and continually seek to improve the educational programme for every pupil.",
  },
  {
    n: "04",
    t: "Respect",
    d: "Pupils respect themselves and others, demonstrating thoughtful behaviour in social and academic life.",
  },
];

export default function Pillars() {
  const h = useReveal<HTMLDivElement>();
  return (
    <section className="relative bg-ink py-28 text-cream lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={h} className="reveal flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold">
              What we believe
            </p>
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] font-light leading-[1.02] tracking-[-0.025em]">
              Four convictions, one <span className="italic text-gold">unmistakable</span> school.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-cream/70">
            Our pillars are not slogans on a wall. They are the daily disciplines that shape every classroom,
            every conversation, every choice we make for the children in our care.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            return (
              <div
                key={p.n}
                ref={attachReveal}
                className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-3xl bg-cream/[0.03] p-10 backdrop-blur-md transition-all duration-700 ease-out hover:-translate-y-1 hover:bg-cream/[0.05] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.3)] border border-cream/10 hover:border-cream/20`}
              >
                <div className="absolute right-4 top-4 font-display text-8xl font-light leading-none tracking-tighter text-white/[0.03] select-none transition-transform duration-700 group-hover:scale-110 group-hover:text-gold/[0.05]">
                  {p.n}
                </div>
                <div className="relative">
                  <span className="font-display text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">{p.n}</span>
                  <h3 className="mt-8 font-display text-3xl font-light tracking-tight text-cream md:text-4xl">{p.t}</h3>
                  <p className="mt-5 text-[15px] leading-relaxed text-cream/60 transition-colors duration-500 group-hover:text-cream/80">{p.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}