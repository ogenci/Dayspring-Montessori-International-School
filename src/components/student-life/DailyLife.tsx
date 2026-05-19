import { useReveal } from "@/hooks/use-reveal";
import imgCampus from "@/assets/dmis/campus-bg.jpg";
import imgStudent from "@/assets/dmis/student-3.png";

export default function DailyLife() {
  const h = useReveal<HTMLDivElement>();
  const imgRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-cream py-24 text-ink lg:py-36 border-b border-ink/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">

          {/* Left Text */}
          <div ref={h} className="reveal">
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-maroon font-bold">
              The Daily Journey
            </p>
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] mb-8">
              A balanced rhythm of <span className="italic text-gold">growth and play.</span>
            </h2>
            <div className="space-y-6 text-[16px] text-ink-soft leading-relaxed max-w-xl">
              <p>
                From the moment our students step onto the tree-lined campus, they enter a warm environment designed to stimulate discovery and curiosity. A typical day balances active Montessori learning blocks with creative breaks, physical play, and cooperative group activities.
              </p>
              <p>
                Whether exploring hands-on science concepts in the laboratory, practicing French through storytelling, or developing leadership skills during communal dining and assemblies, every minute serves a purpose in nurturing the child's mind and character.
              </p>
            </div>
            <div className="mt-10 border-l-2 border-gold pl-6">
              <p className="font-display text-lg italic text-ink">
                "Our daily curriculum is carefully designed to foster self-reliance, intellectual courage, and deep respect for peers."
              </p>
              <p className="mt-2 text-[12px] uppercase tracking-widest font-bold text-ink-soft">
                — Dayspring Academic Board
              </p>
            </div>
          </div>

          {/* Right Image Layout with Overlap (10px rounded standard) */}
          <div ref={imgRef} className="reveal reveal-delay-1 relative h-[480px] w-full">
            <div className="absolute left-0 top-0 h-[80%] w-[75%] overflow-hidden rounded-[10px] shadow-xl border border-ink/5 bg-white">
              <img src={imgCampus} alt="Dayspring campus vibe" className="h-full w-full object-cover" />
            </div>
            <div className="absolute right-0 bottom-0 h-[70%] w-[60%] overflow-hidden rounded-[10px] shadow-2xl border-4 border-cream bg-cream">
              <img src={imgStudent} alt="Dayspring student studying" className="h-full w-full object-cover object-top rounded-[10px]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
