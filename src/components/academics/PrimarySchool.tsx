import { useReveal } from "@/hooks/use-reveal";
import img from "@/assets/dmis/student-2.png"; 

const features = [
  { t: "GES Curriculum", d: "Seamless transition to the Ghana Education Service syllabus, enriched with global perspectives." },
  { t: "Subject Teaching", d: "From Grade 4, specialized subject teachers take over to ensure deep academic rigor in every subject." },
  { t: "Small Class Sizes", d: "Intimate learning environments guarantee that no child is left behind and everyone receives individual attention." },
  { t: "Continuous Supervision", d: "Heads of Department actively monitor teaching delivery to maintain our high standards." },
];

export default function PrimarySchool() {
  const h = useReveal<HTMLDivElement>();
  const cardRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-white py-24 text-ink lg:py-36 overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-cream/30" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* Bulletproof Flex/Absolute Overlap Layout */}
        <div className="relative flex flex-col lg:flex-row lg:items-center">
          
          {/* Background Cinematic Image - Right aligned */}
          <div ref={h} className="reveal-right w-full lg:w-[65%] lg:ml-auto relative h-[50vh] md:h-[700px] overflow-hidden rounded-[10px] shadow-xl shrink-0">
             <img src={img} alt="Primary students" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[4000ms] hover:scale-[1.03]" />
             <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/50 via-transparent to-transparent opacity-90" />
             
             {/* Floating aesthetic badge */}
             <div className="hidden md:block absolute bottom-10 right-10 rounded-[10px] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md max-w-[200px]">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 border border-white/30 backdrop-blur-md">
                  <span className="font-display text-2xl text-gold">P</span>
                </div>
                <p className="text-[14px] leading-relaxed text-white">
                  Transitioning from discovery to structured exploration.
                </p>
             </div>
          </div>

          {/* Overlapping Content Card - Left aligned (Absolute on Desktop) */}
          <div ref={cardRef} className="reveal-left w-full lg:w-[45%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 relative z-10 -mt-24 lg:mt-0">
            <div className="rounded-[10px] border border-ink/5 bg-cream p-10 md:p-14 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]">
              <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-maroon">
                 Primary School (Grades 1-6)
              </p>
              <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
                Structuring <span className="italic text-gold">brilliance.</span>
              </h2>
              
              <p className="mt-6 text-[16px] leading-relaxed text-ink-soft">
                As our pupils graduate from the Montessori Pre-school, they carry with them a powerful independence and a rich vocabulary. In Primary School, we channel this energy into the robust framework of the Ghana Education Service Curriculum.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((f, i) => (
                  <div key={i} className="border-t border-maroon/20 pt-5">
                    <h4 className="font-display text-lg text-ink">{f.t}</h4>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{f.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
