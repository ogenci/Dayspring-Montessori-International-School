import { useReveal, attachReveal } from "@/hooks/use-reveal";
import img1 from "@/assets/dmis/student-1.png";
import img2 from "@/assets/dmis/student-2.png";
import img3 from "@/assets/dmis/student-3.png";

const programmes = [
  {
    num: "01",
    name: "Pre-School",
    ages: "Ages 1 – 5",
    desc: "Our Montessori-based Pre-School is designed to welcome the youngest learners from as early as 12 months. Classes are nurturing, structured, and rich in sensory discovery.",
    includes: ["Creche (12–18 months)", "Toddler (18–36 months)", "Lower Kindergarten", "Upper Kindergarten"],
    img: img1,
  },
  {
    num: "02",
    name: "Primary School",
    ages: "Grades 1 – 6",
    desc: "A structured academic environment that builds strong foundations across all subjects, with specialist teachers from Grade 4 and a focus on critical thinking alongside the GES Curriculum.",
    includes: ["Grades 1 to 6", "GES-aligned curriculum", "Specialist teachers from Grade 4", "French & ICT from Grade 1"],
    img: img2,
  },
  {
    num: "03",
    name: "Junior High School",
    ages: "JHS 1 – 3",
    desc: "Rigorous academic preparation for the BECE and beyond, combined with leadership development, mentorship, and a comprehensive extracurricular programme.",
    includes: ["JHS 1, 2 & 3", "Full BECE preparation", "1:1 Mentorship Programme", "Leadership & Arts Enrichment"],
    img: img3,
  },
];

export default function EligibilityCards() {
  const h = useReveal<HTMLDivElement>();

  return (
    <section id="programmes" className="relative bg-cream py-24 text-ink lg:py-36 border-y border-ink/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <div ref={h} className="reveal text-center max-w-3xl mx-auto mb-20">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            Programmes Available
          </p>
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Who we <span className="italic text-gold">welcome.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
            We accept students across all three programmes. Each programme is designed with a clear pedagogical intent and a dedicated admissions pathway.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {programmes.map((p, idx) => {
            return (
              <div
                key={p.num}
                ref={attachReveal}
                className={`reveal reveal-delay-${idx + 1} group relative overflow-hidden rounded-[10px] bg-ink h-[667px] shadow-sm`}
              >
                <img src={p.img} alt={p.name} className="absolute inset-0 h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/10" />
                <div className="absolute inset-0 bg-maroon mix-blend-multiply opacity-25" />

                {/* Top badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center rounded-full bg-gold/20 border border-gold/30 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-gold backdrop-blur-sm">
                    {p.ages}
                  </span>
                </div>

                {/* Corner number */}
                <div className="absolute top-4 right-8 font-display text-[5rem] leading-none text-cream/10 italic select-none pointer-events-none">
                  {p.num}
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="mb-3 font-display text-3xl font-light text-cream">{p.name}</h3>
                  <div className="h-px w-12 bg-gold mb-5" />
                  <p className="text-[14px] leading-relaxed text-cream/75 mb-6">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.includes.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[13px] text-cream/70">
                        <div className="h-1 w-1 rounded-full bg-gold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
