import { useReveal } from "@/hooks/use-reveal";
import imgCampus from "@/assets/dmis/campus-bg.jpg";
import { Check } from "lucide-react";

export default function LeadershipService() {
  const h = useReveal<HTMLDivElement>();
  const cardRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-cream py-24 text-ink lg:py-36 border-t border-ink/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">

          {/* Left Text Column */}
          <div ref={h} className="reveal">
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-maroon font-bold">
              Responsible Citizens
            </p>
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] mb-8">
              Leadership & <span className="italic text-gold">community service.</span>
            </h2>
            
            <p className="text-[16px] text-ink-soft leading-relaxed mb-8 max-w-xl">
              We believe that leadership is not a title, but an ongoing willingness to serve others. Through our student prefect system, peer counselor program, and community-wide charity collections, Dayspring students learn the power of proactive empathy.
            </p>

            <ul className="space-y-4">
              {[
                "Student Prefect Leadership training retreats",
                "Community beach cleanup and recycling campaigns",
                "Peer-to-peer tutoring and Montessori guidance programs",
                "Charity visits and school supply donation programs",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-[14px] font-medium text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image Card Column */}
          <div ref={cardRef} className="reveal reveal-delay-1 overflow-hidden rounded-[10px] bg-white border border-ink/5 p-6 shadow-xl">
            <div className="rounded-[10px] overflow-hidden h-[300px] mb-6 relative">
              <img src={imgCampus} alt="Community service" className="h-full w-full object-cover" />
              <div className="absolute top-4 left-4 bg-maroon text-cream rounded-[4px] px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                Leadership Program
              </div>
            </div>
            <div>
              <h4 className="font-display text-xl font-light text-ink mb-2">Building Tomorrow's Pioneers</h4>
              <p className="text-[13px] text-ink-soft leading-relaxed">
                By taking charge of morning assemblies, managing the library program, and organizing house events, our junior leaders build the confidence, presentation skills, and resilience required to conquer future global challenges.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
