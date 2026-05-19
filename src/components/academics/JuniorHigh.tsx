import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight } from "lucide-react";
import img from "@/assets/dmis/student-1.png";

export default function JuniorHigh() {
  const h = useReveal<HTMLDivElement>();
  const cardRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-cream py-24 text-ink lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* Bulletproof Flex/Absolute Overlap Layout */}
        <div className="relative flex flex-col lg:flex-row lg:items-center">
          
          {/* Background Cinematic Image - Left aligned */}
          <div ref={h} className="reveal-left w-full lg:w-[65%] relative h-[50vh] md:h-[700px] overflow-hidden rounded-[10px] shadow-xl border border-ink/5 shrink-0">
             <img src={img} alt="Junior high students" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[4000ms] hover:scale-[1.03]" />
             <div className="absolute inset-0 bg-gradient-to-tr from-maroon-deep/90 via-maroon-deep/40 to-transparent" />
             
             {/* Integrated Stats on Image */}
             <div className="absolute bottom-10 left-10 flex gap-10 text-cream">
                <div>
                  <p className="font-display text-5xl text-gold">100%</p>
                  <p className="mt-3 text-[11px] uppercase tracking-widest text-cream/80 max-w-[140px]">
                    Degree-Holding Faculty
                  </p>
                </div>
                <div className="w-px bg-white/20" />
                <div>
                  <p className="font-display text-5xl text-gold">1:1</p>
                  <p className="mt-3 text-[11px] uppercase tracking-widest text-cream/80 max-w-[140px]">
                    Personalized Mentorship
                  </p>
                </div>
             </div>
          </div>

          {/* Overlapping Content Card - Right aligned (Absolute on Desktop) */}
          <div ref={cardRef} className="reveal-right w-full lg:w-[45%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 relative z-10 -mt-24 lg:mt-0">
            <div className="rounded-[10px] border border-ink/5 bg-white p-10 md:p-14 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]">
              <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
                Junior High School (JHS 1-3)
              </p>
              <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
                Preparation for the <span className="italic text-maroon">world ahead.</span>
              </h2>
              
              <p className="mt-6 text-[16px] leading-relaxed text-ink-soft">
                The Junior High School years at Dayspring are defined by academic rigor, personal responsibility, and comprehensive preparation for the Basic Education Certificate Examination (BECE). They don't just teach subjects; they mentor young adults.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                 {['BECE Preparation', 'Leadership Training', 'Advanced Sciences', 'Mentorship'].map((tag) => (
                   <span key={tag} className="rounded-full border border-ink/10 bg-cream/50 px-5 py-2 text-[12px] font-medium text-ink-soft shadow-sm">
                     {tag}
                   </span>
                 ))}
              </div>
              
              <a href="/#contact" className="mt-10 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-maroon hover:text-gold transition-colors">
                Inquire about admissions <ArrowRight size={16} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
