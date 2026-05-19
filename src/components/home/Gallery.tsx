import { useReveal, attachReveal } from "@/hooks/use-reveal";
import s1 from "@/assets/dmis/student-1.png";
import s2 from "@/assets/dmis/student-2.png";
import s3 from "@/assets/dmis/student-3.png";
import campus from "@/assets/dmis/campus-bg.jpg";

const tiles = [
  { img: campus, label: "Main Campus", span: "md:col-span-2 md:row-span-2" },
  { img: s1, label: "Reading Corner" },
  { img: s2, label: "Science Lab" },
  { img: s3, label: "Sports Field" },
  { img: campus, label: "Art Studio" },
];

export default function Gallery() {
  const h = useReveal<HTMLDivElement>();
  return (
    <section id="campus" className="relative bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={h} className="reveal mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              Campus &amp; Facilities
            </p>
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] font-light leading-[1.02] tracking-[-0.025em]">
              Spaces built for <span className="italic text-maroon">deep work.</span>
            </h2>
          </div>
          <a href="#admissions" className="text-[13px] font-semibold uppercase tracking-[0.22em] text-maroon underline decoration-gold decoration-2 underline-offset-[6px] hover:text-gold">
            Book a campus tour →
          </a>
        </div>
        <div className="grid auto-rows-[300px] grid-cols-2 gap-3 md:grid-cols-4">
          {tiles.map((t, i) => {
            return (
              <div
                key={i}
                ref={attachReveal}
                className={`reveal reveal-delay-${(i % 5) + 1} group relative overflow-hidden rounded-[10px] bg-maroon ${t.span ?? ""}`}
              >
                <img src={t.img} alt={t.label} className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 translate-y-2 font-display text-xl text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {t.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}