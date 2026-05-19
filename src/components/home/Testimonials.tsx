import { useReveal, attachReveal } from "@/hooks/use-reveal";
import avatar1 from "@/assets/dmis/avatar-1.png";
import avatar2 from "@/assets/dmis/avatar-2.png";
import avatar3 from "@/assets/dmis/avatar-3.png";

const quotes = [
  {
    img: avatar1,
    body: "As an individual who had all her basic education in DMIS, I can boldly say that it has shaped me into the woman I have become today. The teachers know and have a personal relationship with each student — a family bond that lasts years after graduation.",
    name: "Nessy Kusi-Yeboah",
    role: "Alumna · Class of 2012",
    tag: "Alumna",
  },
  {
    img: avatar2,
    body: "In one term at DMIS, my son in KG1 started reading and pronouncing words correctly like an adult. I have all three children here now and I have no regrets. The dedication of the staff is unmatched.",
    name: "Dr. Kwabena Omari Yeboah",
    role: "Obstetrician / Gynaecologist · Parent",
    tag: "Parent",
  },
  {
    img: avatar3,
    body: "Dayspring is far more than a school — it is an extension of home and family. The small class sizes and teacher attention gave me an educational foundation I have carried throughout my career.",
    name: "Dr. Felicia Owusu-Ansah",
    role: "Lecturer · University of Ghana",
    tag: "Alumna",
  },
];

export default function Testimonials() {
  const h = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-cream py-28 lg:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(224,162,58,0.06),transparent)]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Header */}
        <div ref={h} className="reveal mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              Parent &amp; Alumni Voices
            </p>
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
              Stories that <span className="italic text-maroon">define us.</span>
            </h2>
          </div>
          <p className="max-w-xs text-[15px] leading-relaxed text-ink-soft">
            From our community — parents and alumni whose lives were shaped within these walls.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((q, i) => {
            return (
              <div
                key={q.name}
                ref={attachReveal}
                className={`reveal reveal-delay-${i + 1} group relative flex flex-col overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:border-ink/10`}
              >
                {/* Portrait */}
                <div className="relative h-64 overflow-hidden bg-cream">
                  <img
                    src={q.img}
                    alt={q.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Tag */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-cream/30 bg-cream/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-cream backdrop-blur-sm">
                      {q.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div>
                    <div className="mb-4 font-script text-5xl leading-none text-gold">"</div>
                    <p className="text-[15px] leading-relaxed text-ink">
                      {q.body}
                    </p>
                  </div>

                  {/* Identity footer */}
                  <div className="mt-8 flex items-center gap-4 border-t border-ink/5 pt-6">
                    <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-gold/20">
                      <img src={q.img} alt={q.name} className="h-full w-full object-cover object-top" />
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-ink">{q.name}</p>
                      <p className="mt-0.5 text-[12px] text-ink-soft">{q.role}</p>
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