import { useReveal, attachReveal } from "@/hooks/use-reveal";
import avatar1 from "@/assets/dmis/avatar-1.png";
import avatar2 from "@/assets/dmis/avatar-2.png";
import avatar3 from "@/assets/dmis/avatar-3.png";

const voices = [
  {
    img: avatar1,
    q: "Dayspring has completely transformed our child's curiosity. They don't just learn facts — they learn how to learn. The guides truly see each child as an individual.",
    n: "Mrs. Akua Osei-Tutu",
    r: "Parent · Primary",
    tag: "Parent",
  },
  {
    img: avatar2,
    q: "The independence and self-discipline my son developed here is remarkable. It feels like a second home — filled with warmth, structure, and genuine dedication.",
    n: "Mr. Kwame Addo",
    r: "Parent · Pre-School",
    tag: "Parent",
  },
  {
    img: avatar3,
    q: "Dayspring shaped who I am today. The values of freedom, responsibility, and respect I learned here guide my professional life every single day.",
    n: "Dr. Abena Mensah",
    r: "Class of 2008 · Alumna",
    tag: "Alumna",
  },
];

export default function Community() {
  const h = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-cream py-28 text-ink lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Header */}
        <div ref={h} className="reveal mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              Voices
            </p>
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
              From the <span className="italic text-maroon">Dayspring family.</span>
            </h2>
          </div>
          <p className="max-w-xs text-[15px] leading-relaxed text-ink-soft">
            Parents and alumni whose lives were shaped within these walls.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {voices.map((v, i) => {
            return (
              <div
                key={v.n}
                ref={attachReveal}
                className={`reveal reveal-delay-${i + 1} group relative flex flex-col overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:border-ink/10`}
              >
                {/* Portrait */}
                <div className="relative h-64 overflow-hidden bg-ink/5">
                  <img
                    src={v.img}
                    alt={v.n}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Tag pill */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-cream/30 bg-cream/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-cream backdrop-blur-sm">
                      {v.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-8">
                  {/* Quote mark */}
                  <div>
                    <div className="mb-4 font-script text-5xl leading-none text-gold">"</div>
                    <p className="text-[16px] leading-relaxed text-ink">
                      {v.q}
                    </p>
                  </div>

                  {/* Profile */}
                  <div className="mt-8 flex items-center gap-4 border-t border-ink/5 pt-6">
                    <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-gold/20">
                      <img src={v.img} alt={v.n} className="h-full w-full object-cover object-top" />
                    </div>
                    <div>
                      <p className="font-semibold text-[14px] text-ink">{v.n}</p>
                      <p className="text-[12px] text-ink-soft mt-0.5">{v.r}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
