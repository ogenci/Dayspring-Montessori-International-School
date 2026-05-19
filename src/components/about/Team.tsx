import { useReveal, attachReveal } from "@/hooks/use-reveal";
import t1 from "@/assets/dmis/team-1.png";
import t2 from "@/assets/dmis/team-2.png";
import t3 from "@/assets/dmis/team-3.png";
import t4 from "@/assets/dmis/team-4.png";

const team = [
  { img: t1, n: "Ms. Efua Asante", r: "Head of Primary", d: "8 years at Dayspring" },
  { img: t2, n: "Mr. Kofi Agyeman", r: "Academic Director", d: "12 years at Dayspring" },
  { img: t3, n: "Mrs. Ama Boateng", r: "Head of Pre-School", d: "6 years at Dayspring" },
  { img: t4, n: "Mrs. Abena Darko", r: "Director of Enrichment", d: "10 years at Dayspring" },
];

export default function Team() {
  const h = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-white py-28 text-ink lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_80%,rgba(224,162,58,0.05),transparent)]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Header */}
        <div ref={h} className="reveal mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              Our People
            </p>
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
              The guides behind <span className="italic text-maroon">the growth.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
            Every member of our team is a trained, passionate advocate for the Montessori philosophy.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {team.map((m, i) => {
            return (
              <div
                key={m.n}
                ref={attachReveal}
                className={`reveal reveal-delay-${i + 1} group`}
              >
                {/* Image */}
                <div className="relative mb-5 overflow-hidden rounded-[10px] bg-cream aspect-[3/4]">
                  <img
                    src={m.img}
                    alt={m.n}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Info */}
                <div>
                  <h3 className="font-display text-[1.1rem] font-light text-ink leading-snug">{m.n}</h3>
                  <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.18em] text-gold">{m.r}</p>
                  <p className="mt-2 text-[12px] text-ink-soft">{m.d}</p>
                  <div className="mt-3 h-px w-0 bg-gold transition-all duration-500 group-hover:w-10" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
