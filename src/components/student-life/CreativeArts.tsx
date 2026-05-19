import { useReveal } from "@/hooks/use-reveal";
import imgStudent from "@/assets/dmis/student-1.png";
import imgCampus from "@/assets/dmis/campus-bg.jpg";

export default function CreativeArts() {
  const h = useReveal<HTMLDivElement>();
  const artsRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-cream py-24 text-ink lg:py-36 border-y border-ink/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">

          {/* Left: Interactive Arts Gallery Split */}
          <div ref={artsRef} className="reveal grid grid-cols-2 gap-4 h-[420px] lg:h-[500px]">
            <div className="rounded-[10px] overflow-hidden shadow-md h-full">
              <img src={imgStudent} alt="Student violin practice" className="h-full w-full object-cover object-top" />
            </div>
            <div className="grid grid-rows-2 gap-4 h-full">
              <div className="rounded-[10px] overflow-hidden shadow-sm">
                <img src={imgCampus} alt="Painting session" className="h-full w-full object-cover" />
              </div>
              <div className="rounded-[10px] bg-maroon p-8 text-cream flex flex-col justify-between">
                <h4 className="font-display text-xl text-gold">Annual Recital</h4>
                <p className="text-[12px] text-cream/70 leading-relaxed">Our learners showcase their musical, instrumental, and theatrical talents at the celebrated year-end stage performance.</p>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div ref={h} className="reveal">
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-maroon font-bold">
              Creative Expression
            </p>
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] mb-8">
              Nurturing the <span className="italic text-gold">creative soul.</span>
            </h2>
            <div className="space-y-6 text-[16px] text-ink-soft leading-relaxed max-w-xl">
              <p>
                At Dayspring, we view artistic practice not as an extracurricular option, but as a critical pathway to higher intelligence, fine motor skills, and emotional awareness.
              </p>
              <p>
                Our comprehensive arts program covers piano and violin training, choral ensembles, contemporary and traditional African dance, and classical studio painting. Every student has a voice and a canvas to express their inner thoughts and unique perspective.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8">
              <div>
                <span className="font-display text-3xl text-maroon font-light">10+</span>
                <p className="text-[11px] uppercase tracking-wider text-ink-soft mt-1">Instruments Taught</p>
              </div>
              <div>
                <span className="font-display text-3xl text-maroon font-light">3</span>
                <p className="text-[11px] uppercase tracking-wider text-ink-soft mt-1">Arts Exhibits Yearly</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
