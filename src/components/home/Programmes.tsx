import { useReveal, attachReveal } from "@/hooks/use-reveal";
import s1 from "@/assets/dmis/student-1.png";
import s2 from "@/assets/dmis/student-2.png";
import s3 from "@/assets/dmis/student-3.png";
import campus from "@/assets/dmis/campus-bg.jpg";

const items = [
  {
    chip: "#7ecec4",
    age: "Ages 2 – 5",
    name: "Nursery",
    blurb:
      "The Montessori foundation. Hands-on materials, sensorial discovery and gentle routine, where the love of learning begins.",
    img: s1,
  },
  {
    chip: "#8fbe9a",
    age: "Ages 6 – 8",
    name: "Lower Primary",
    blurb:
      "Literacy, numeracy and inquiry come alive through projects, music, art and movement. The years of awakening curiosity.",
    img: campus,
  },
  {
    chip: "#e8c56d",
    age: "Ages 9 – 11",
    name: "Upper Primary",
    blurb:
      "Critical thinking, research and collaboration. Children take ownership of their work and begin to find their academic voice.",
    img: s2,
  },
  {
    chip: "#e07a5f",
    age: "Ages 12 – 15",
    name: "Junior High School",
    blurb:
      "Rigorous academic preparation rooted in character. Confident young scholars ready for the world's best secondary schools.",
    img: s3,
  },
];

export default function Programmes() {
  const h = useReveal<HTMLDivElement>();
  return (
    <section id="programmes" className="relative bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Header */}
        <div ref={h} className="reveal mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              Programmes
            </p>
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] font-light leading-[1.02] tracking-[-0.025em]">
              A continuous journey, <span className="italic text-maroon">age 2 to 15.</span>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
            Four stages, one philosophy. Every transition is deliberate, building from sensorial play to
            independent scholarship without ever losing the joy of discovery.
          </p>
        </div>

        {/* Premium image cards grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            return (
              <div
                key={it.name}
                ref={attachReveal}
                className={`reveal reveal-delay-${i + 1} relative overflow-hidden rounded-3xl`}
                style={{ aspectRatio: "3/5.75" }}
              >
                {/* Background image */}
                <img
                  src={it.img}
                  alt={it.name}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                {/* Age chip — top left */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-cream/90 px-3 py-1.5 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full" style={{ background: it.chip }} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
                    {it.age}
                  </span>
                </div>

                {/* Large number watermark */}
                <div className="absolute right-4 top-3 font-display text-[6rem] font-light leading-none tracking-[-0.05em] text-white/10 select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Content — bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-[clamp(1.6rem,2.5vw,2.1rem)] font-light leading-tight tracking-tight text-cream drop-shadow-lg">
                    {it.name}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-cream/75">
                    {it.blurb}
                  </p>
                  <a
                    href="#admissions"
                    className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-gold"
                  >
                    Learn more
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}