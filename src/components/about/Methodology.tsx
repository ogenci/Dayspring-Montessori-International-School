import { useReveal, attachReveal } from "@/hooks/use-reveal";

const methods = [
  {
    n: "01",
    t: "Mixed Age Classrooms",
    d: "Older children naturally mentor younger ones, fostering a collaborative community where leadership and empathy blossom.",
  },
  {
    n: "02",
    t: "Prepared Environment",
    d: "Every material is purposefully placed to invite curiosity, ensuring classrooms are orderly, beautiful, and highly engaging.",
  },
  {
    n: "03",
    t: "Self-Directed Work",
    d: "Pupils choose their activities within limits, cultivating profound independence and a genuine love for learning.",
  },
  {
    n: "04",
    t: "Hands-on Discovery",
    d: "Abstract concepts are made tangible through specialized materials, embedding deep understanding rather than rote memorization.",
  },
];

export default function Methodology() {
  const h = useReveal<HTMLDivElement>();
  return (
    <section className="relative bg-cream py-28 text-ink lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        <div ref={h} className="reveal flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              Our Methodology
            </p>
            <h2 className="font-display text-[clamp(2.5rem,4vw,4rem)] font-light leading-[1.05] tracking-[-0.02em]">
              The Montessori <span className="italic text-maroon">Difference.</span>
            </h2>
          </div>
          <p className="max-w-md text-[16px] leading-relaxed text-ink-soft">
            We don't simply teach; we prepare the environment for discovery. The Montessori method respects the natural psychology of the child, creating capable, self-motivated learners.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {methods.map((m, i) => (
            <div
              key={m.n}
              ref={attachReveal}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-3xl bg-white p-10 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-ink/5 hover:border-ink/10`}
            >
              <div className="absolute right-4 top-4 font-display text-8xl font-light leading-none tracking-tighter text-ink/[0.03] select-none transition-transform duration-700 group-hover:scale-110 group-hover:text-gold/[0.15]">
                {m.n}
              </div>
              <div className="relative">
                <span className="font-display text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">{m.n}</span>
                <h3 className="mt-8 font-display text-[1.6rem] font-light tracking-tight text-ink leading-tight">{m.t}</h3>
                <p className="mt-5 text-[15px] leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-ink">{m.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
