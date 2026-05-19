import { useReveal, attachReveal } from "@/hooks/use-reveal";
import { Code, Globe, Music, Palette, Trophy } from "lucide-react";

const subjects = [
  { n: "French", i: Globe, d: "Laying the foundation for global citizenship with early language acquisition." },
  { n: "Coding & ICT", i: Code, d: "Equipping students with essential digital literacy and logic-building skills." },
  { n: "Music", i: Music, d: "Fostering creativity, rhythm, and emotional expression through structured musical education." },
  { n: "Creative Arts", i: Palette, d: "Encouraging out-of-the-box thinking and fine motor skills through diverse artistic mediums." },
  { n: "Physical Education", i: Trophy, d: "Promoting physical health, teamwork, and discipline through active sports." },
];

export default function Enrichment() {
  const h = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-white py-28 text-ink lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* Header */}
        <div ref={h} className="reveal text-center max-w-3xl mx-auto mb-20">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            Enrichment & Specialist Subjects
          </p>
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Beyond the <span className="italic text-gold">traditional.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
            True education goes beyond the core syllabus. Our comprehensive specialist programs ensure a holistic development, nurturing creativity, physical wellbeing, and digital fluency.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((s, i) => {
            const Icon = s.i;
            return (
              <div 
                key={s.n} 
                ref={attachReveal} 
                className={`reveal reveal-delay-${(i % 5) + 1} group relative overflow-hidden rounded-[10px] border border-ink/5 bg-gradient-to-b from-cream to-white p-10 shadow-[0_5px_15px_-5px_rgba(0,0,0,0.02)] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-gold/30 hover:shadow-[0_20px_40px_-15px_rgba(224,162,58,0.15)]`}
              >
                {/* Background decorative icon */}
                <div className="absolute -right-8 -top-8 text-gold opacity-[0.03] transition-transform duration-700 group-hover:scale-125 group-hover:opacity-[0.06] group-hover:-rotate-12">
                   <Icon size={180} strokeWidth={1} />
                </div>

                <div className="relative z-10 mb-8 inline-flex h-16 w-16 items-center justify-center rounded-[10px] bg-white shadow-md border border-ink/5 text-maroon transition-transform duration-500 group-hover:scale-110 group-hover:bg-maroon group-hover:text-cream">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                
                <h3 className="relative z-10 mb-3 font-display text-2xl font-light text-ink transition-colors duration-500 group-hover:text-maroon">
                  {s.n}
                </h3>
                
                <p className="relative z-10 text-[15px] leading-relaxed text-ink-soft">
                  {s.d}
                </p>
                
                <div className="relative z-10 mt-8 h-px w-8 bg-gold transition-all duration-700 group-hover:w-full group-hover:opacity-50" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
