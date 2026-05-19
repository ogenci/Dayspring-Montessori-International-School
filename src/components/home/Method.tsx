import { useReveal, attachReveal } from "@/hooks/use-reveal";
import s1 from "@/assets/dmis/student-1.png";
import s2 from "@/assets/dmis/student-2.png";
import s3 from "@/assets/dmis/student-3.png";

const steps = [
  {
    n: "01",
    k: "Observe",
    h: "We watch before we teach.",
    d: "Every child is met where they are. Our trained guides spend the first weeks observing how each pupil thinks, plays and connects, building the foundation for a learning plan that fits them.",
    img: s1,
  },
  {
    n: "02",
    k: "Guide",
    h: "We follow the child.",
    d: "Hands-on Montessori materials, multi-age classrooms and uninterrupted work cycles give pupils the freedom to choose, the structure to focus, and the support to go deeper than any worksheet allows.",
    img: s2,
  },
  {
    n: "03",
    k: "Flourish",
    h: "They build their own brilliance.",
    d: "By Upper Primary our pupils are running projects, leading classmates and asking the kind of questions that surprise their teachers. Confidence isn't taught. It is grown.",
    img: s3,
  },
];

export default function Method() {
  const h = useReveal<HTMLDivElement>();
  return (
    <section id="method" className="relative bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Header */}
        <div ref={h} className="reveal mx-auto max-w-3xl text-center mb-16">
          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            The Dayspring Method
          </p>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] font-light leading-[1.02] tracking-[-0.025em]">
            How a Montessori day <span className="italic text-maroon">actually</span> works.
          </h2>
        </div>

        {/* Premium 3-column image cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((s, i) => {
            return (
              <div
                key={s.k}
                ref={attachReveal}
                className={`reveal reveal-delay-${i + 1} group relative overflow-hidden rounded-3xl`}
                style={{ aspectRatio: "3/4" }}
              >
                {/* Background image */}
                <img
                  src={s.img}
                  alt={s.h}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Base gradient — always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Large step number — top right watermark */}
                <div className="absolute right-5 top-4 font-display text-[7rem] font-light leading-none tracking-[-0.06em] text-white/10 select-none">
                  {s.n}
                </div>

                {/* Script keyword chip — top left */}
                <div className="absolute left-5 top-6">
                  <p className="font-script text-2xl text-gold/90">{s.k}</p>
                </div>

                {/* Content — bottom */}
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display text-[clamp(1.4rem,2vw,1.75rem)] font-light leading-tight tracking-tight text-cream">
                    {s.h}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-cream/65 transition-all duration-500 max-h-0 overflow-hidden opacity-0 group-hover:max-h-32 group-hover:opacity-100">
                    {s.d}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}