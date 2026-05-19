import { useReveal } from "@/hooks/use-reveal";
import imgCampus from "@/assets/dmis/campus-bg.jpg";
import { Trophy, Compass, Heart } from "lucide-react";

export default function SportsAthletics() {
  const h = useReveal<HTMLDivElement>();
  const imgRef = useReveal<HTMLDivElement>();
  const contentRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-white py-24 text-ink lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* Section Header */}
        <div ref={h} className="reveal text-center max-w-3xl mx-auto mb-20">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-maroon font-bold">
            Physical Excellence
          </p>
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Sports, stamina, & <span className="italic text-gold">sportsmanship.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
            Physical health is fundamental to cognitive development and character building. Our rigorous physical education and team sports programmes nurture coordination, discipline, and outstanding teamwork.
          </p>
        </div>

        {/* Large Cinematic Image Block with 10px Radius */}
        <div ref={imgRef} className="reveal reveal-delay-1 overflow-hidden rounded-[10px] shadow-lg mb-16 relative h-[380px] lg:h-[480px]">
          <img src={imgCampus} alt="Sports fields" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
          <div className="absolute bottom-10 left-10 text-cream">
            <h3 className="font-display text-3xl font-light mb-2">Modern Outdoor Facilities</h3>
            <p className="text-cream/70 text-[14px] max-w-md">Our expansive outdoor grounds support football, track events, and multi-sport recreation in a safe, secured environment.</p>
          </div>
        </div>

        {/* 3 Equal Cards Below */}
        <div ref={contentRef} className="reveal reveal-delay-2 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          <div className="rounded-[10px] bg-cream p-8 border border-ink/5 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-maroon/10 text-maroon mb-6">
                <Trophy size={20} strokeWidth={1.5} />
              </div>
              <h4 className="font-display text-xl font-light text-ink mb-3">Athletics & Track</h4>
              <p className="text-[14px] text-ink-soft leading-relaxed">
                Our athletic program focuses on individual potential, agility, and stamina. Students participate in annual sports festivals, inter-house track meets, and sprint disciplines.
              </p>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-maroon mt-8">Annual Sports Days</span>
          </div>

          <div className="rounded-[10px] bg-cream p-8 border border-ink/5 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-maroon/10 text-maroon mb-6">
                <Compass size={20} strokeWidth={1.5} />
              </div>
              <h4 className="font-display text-xl font-light text-ink mb-3">Soccer & Team Play</h4>
              <p className="text-[14px] text-ink-soft leading-relaxed">
                Through friendly matches and structured training leagues, boys and girls learn the strategic skills of football, cooperative passing, and mutual accountability under expert coaches.
              </p>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-maroon mt-8">Dayspring Football Academy</span>
          </div>

          <div className="rounded-[10px] bg-cream p-8 border border-ink/5 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-maroon/10 text-maroon mb-6">
                <Heart size={20} strokeWidth={1.5} />
              </div>
              <h4 className="font-display text-xl font-light text-ink mb-3">Health & Fitness</h4>
              <p className="text-[14px] text-ink-soft leading-relaxed">
                Beyond core competitive sports, we emphasize cardiovascular health, morning calisthenics, physical agility obstacle courses, and lifelong wellness habits for all pupils.
              </p>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-maroon mt-8">Weekly PE Sessions</span>
          </div>

        </div>

      </div>
    </section>
  );
}
