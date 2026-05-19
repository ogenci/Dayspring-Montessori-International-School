import { useReveal } from "@/hooks/use-reveal";
import img1 from "@/assets/dmis/student-1.png";
import img2 from "@/assets/dmis/student-3.png";

export default function CurriculumPhilosophy() {
  const h = useReveal<HTMLDivElement>();
  const c1 = useReveal<HTMLDivElement>();
  const c2 = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-white py-28 text-ink lg:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_20%,rgba(224,162,58,0.05),transparent)]" />
      
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* Header */}
        <div ref={h} className="reveal mb-16 text-center max-w-3xl mx-auto">
          <p className="mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            Our Philosophy
          </p>
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.8rem)] font-light leading-[1.05] tracking-[-0.02em]">
            A deliberate <span className="italic text-maroon">transition.</span>
          </h2>
          <p className="mt-8 text-[17px] leading-relaxed text-ink-soft">
            We bridge the gap between self-directed discovery in the early years and academic rigor in the upper years, preparing students for success in the global landscape.
          </p>
        </div>

        {/* Dual Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 mt-20">
          
          {/* Card 01 */}
          <div ref={c1} className="reveal-left group relative overflow-hidden rounded-[10px] bg-ink h-[500px] lg:h-[650px] shadow-sm transition-all duration-700 hover:shadow-2xl hover:-translate-y-2">
            <img src={img1} alt="Montessori learning" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[2000ms] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-maroon mix-blend-multiply opacity-20 transition-opacity duration-700 group-hover:opacity-0" />
            
            <div className="absolute top-8 right-10 font-display text-[6rem] lg:text-[8rem] leading-none text-cream/20 italic transition-colors duration-700 group-hover:text-gold/30 pointer-events-none select-none">
              01
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-10 lg:p-14">
              <h3 className="mb-4 font-display text-3xl lg:text-4xl font-light text-cream">The Early Years</h3>
              <div className="h-px w-16 bg-gold mb-6 transition-all duration-700 group-hover:w-32" />
              <p className="text-[15px] lg:text-[16px] leading-relaxed text-cream/80 max-w-[95%]">
                In our pre-school, the <strong className="text-white font-medium">Montessori Method</strong> reigns. It respects the child's natural psychological and social development. Through hands-on equipment, abstract concepts become tangible, fostering profound concentration and an intrinsic joy for learning.
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div ref={c2} className="reveal-right group relative overflow-hidden rounded-[10px] bg-maroon-deep h-[500px] lg:h-[650px] shadow-sm transition-all duration-700 hover:shadow-2xl hover:-translate-y-2">
            <img src={img2} alt="Primary education" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[2000ms] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/50 to-transparent opacity-95 transition-opacity duration-700 group-hover:opacity-100" />
            
            <div className="absolute top-8 right-10 font-display text-[6rem] lg:text-[8rem] leading-none text-cream/20 italic transition-colors duration-700 group-hover:text-cream/40 pointer-events-none select-none">
              02
            </div>

            <div className="absolute bottom-0 left-0 w-full p-10 lg:p-14">
              <h3 className="mb-4 font-display text-3xl lg:text-4xl font-light text-cream">The Upper School</h3>
              <div className="h-px w-16 bg-cream/50 mb-6 transition-all duration-700 group-hover:w-32 group-hover:bg-cream" />
              <p className="text-[15px] lg:text-[16px] leading-relaxed text-cream/80 max-w-[95%]">
                As students advance, we transition to the robust <strong className="text-white font-medium">GES Curriculum</strong>. The independence gained in early years translates into academic resilience. With specialized teachers from Grade 4, students are rigorously prepared for the BECE exams while maintaining critical thought.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
