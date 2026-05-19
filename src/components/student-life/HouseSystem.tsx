import { useReveal } from "@/hooks/use-reveal";
import { Shield } from "lucide-react";

const houses = [
  {
    name: "Red House",
    motto: "Courage & Integrity",
    desc: "Symbolizing passion, active determination, and moral fortitude. Red House members lead with vibrant enthusiasm and relentless energy in all sports and debates.",
    accent: "bg-red-500/10 text-red-700 border-red-500/20",
    iconColor: "text-red-600",
  },
  {
    name: "Blue House",
    motto: "Wisdom & Loyalty",
    desc: "Representing intellectual depth, deep loyalty, and calm resilience. Blue House prides itself on meticulous organization, study discipline, and fair play.",
    accent: "bg-blue-500/10 text-blue-700 border-blue-500/20",
    iconColor: "text-blue-600",
  },
  {
    name: "Green House",
    motto: "Growth & Perseverance",
    desc: "Embodying steady progression, vibrant harmony, and patient perseverance. Green House champions environmental conservation, creative arts, and academic growth.",
    accent: "bg-green-500/10 text-green-700 border-green-500/20",
    iconColor: "text-green-600",
  },
  {
    name: "Gold House",
    motto: "Excellence & Honor",
    desc: "Reflecting absolute excellence, noble honor, and warm leadership. Gold House inspires members to set stellar examples in peer mentorship and discipline.",
    accent: "bg-gold/15 text-gold border-gold/25",
    iconColor: "text-gold",
  },
];

export default function HouseSystem() {
  const h = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-white py-24 text-ink lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Header */}
        <div ref={h} className="reveal text-center max-w-3xl mx-auto mb-20">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-maroon font-bold">
            School Pride
          </p>
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            The Dayspring <span className="italic text-gold">House System.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
            To foster healthy competition, sibling camaraderie, and peer accountability, every student and teacher belongs to one of our four prestigious school houses.
          </p>
        </div>

        {/* 4 Equal Height Cards */}
        <div ref={gridRef} className="reveal reveal-delay-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {houses.map((house) => (
            <div 
              key={house.name} 
              className="flex flex-col justify-between rounded-[10px] bg-cream border border-ink/5 p-8 hover:border-gold/30 transition-all duration-300 hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className={`inline-flex rounded-full border px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider ${house.accent}`}>
                    {house.motto}
                  </span>
                  <Shield size={18} className={`${house.iconColor} opacity-75`} />
                </div>
                
                <h3 className="font-display text-2xl font-light text-ink mb-4">{house.name}</h3>
                <p className="text-[13px] text-ink-soft leading-relaxed">{house.desc}</p>
              </div>

              <div className="border-t border-ink/5 pt-6 mt-8">
                <span className="text-[11px] font-bold uppercase tracking-wider text-ink-soft">Annual House points</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
