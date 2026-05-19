import { useReveal } from "@/hooks/use-reveal";
import img from "@/assets/dmis/campus-bg.jpg"; 

const features = [
  { t: "Tangible Learning", d: "Using specialized hands-on Montessori equipment to grasp complex concepts." },
  { t: "Vocabulary Rich", d: "By age four, the average pupil possesses a large, confident vocabulary store." },
  { t: "Early Literacy", d: "Pupils read three to five-letter words with confidence before entering Primary." },
  { t: "Mathematical Foundation", d: "Understanding basic math concepts tangibly, far beyond rote counting." },
];

export default function PreSchool() {
  const h = useReveal<HTMLDivElement>();
  const cardRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-cream py-24 text-ink lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* Bulletproof Flex/Absolute Overlap Layout */}
        <div className="relative flex flex-col lg:flex-row lg:items-center">
          
          {/* Background Cinematic Image - Left aligned */}
          <div ref={h} className="reveal-left w-full lg:w-[65%] relative h-[50vh] md:h-[700px] overflow-hidden rounded-[10px] shadow-xl shrink-0">
             <img src={img} alt="Montessori learning at Dayspring" className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[4000ms] hover:scale-[1.03]" />
             <div className="absolute inset-0 bg-gradient-to-tr from-maroon/40 to-transparent opacity-80" />
             
             {/* Floating aesthetic badge on the image itself */}
             <div className="hidden md:block absolute bottom-10 left-10 rounded-[10px] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md max-w-[200px]">
                <p className="font-display text-4xl text-gold">100%</p>
                <div className="mt-3 h-px w-12 bg-white/30" />
                <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-white leading-relaxed">
                  Montessori Trained Faculty
                </p>
             </div>
          </div>

          {/* Overlapping Content Card - Right aligned (Absolute on Desktop) */}
          <div ref={cardRef} className="reveal-right w-full lg:w-[45%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 relative z-10 -mt-24 lg:mt-0">
            <div className="rounded-[10px] border border-ink/5 bg-white p-10 md:p-14 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]">
              <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold">
                Pre-School (Ages 1-5)
              </p>
              <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
                Building a <span className="italic text-maroon">joyful</span> foundation.
              </h2>
              
              <p className="mt-6 text-[16px] leading-relaxed text-ink-soft">
                The early years are the most critical in a child's development. Our Pre-school exclusively employs the Montessori Method, utilizing specialized, sensory-rich materials that make abstract concepts wonderfully concrete.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((f, i) => (
                  <div key={i} className="border-t border-gold/30 pt-5">
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
