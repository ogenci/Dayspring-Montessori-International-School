import { useReveal } from "@/hooks/use-reveal";
import imgStudent from "@/assets/dmis/student-2.png";
import { Cpu, MessageSquare, Award, Compass } from "lucide-react";

const clubs = [
  {
    icon: Cpu,
    title: "Robotics & Coding",
    desc: "Learners program miniature vehicles, engineer basic mechanical arms, and learn structural Python/Scratch code to foster logical engineering skills early.",
  },
  {
    icon: MessageSquare,
    title: "Debate & Public Speaking",
    desc: "Nurturing intellectual assertiveness, critical analysis of current affairs, and rhetorical polish to shape tomorrow's confident community leaders.",
  },
  {
    icon: Award,
    title: "Chess & Strategy",
    desc: "Developing foresight, rigorous patience, and deep cognitive mapping through structured internal leagues and inter-school chess tournaments.",
  },
  {
    icon: Compass,
    title: "Eco-Warriors Club",
    desc: "Engaging in bio-diverse environmental awareness projects, recycling campaigns, and organic gardening projects across our scenic school campus.",
  },
];

export default function ClubsSocieties() {
  const h = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();
  const imgCardRef = useReveal<HTMLDivElement>();

  return (
    <section id="clubs" className="relative bg-white py-24 text-ink lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* Header */}
        <div ref={h} className="reveal text-center max-w-3xl mx-auto mb-20">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-maroon font-bold">
            Interests & Hobbies
          </p>
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Clubs, societies, & <span className="italic text-gold">fellowship.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
            True intellectual curiosity thrives when children explore areas of niche passion. Our broad selection of after-school clubs encourages community interaction and creative exploration.
          </p>
        </div>

        {/* Dynamic Image & Cards Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-10 items-stretch">
          
          {/* Left Grid (4 Equal-Height Club Cards) */}
          <div ref={gridRef} className="reveal grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {clubs.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div key={idx} className="rounded-[10px] bg-cream p-8 border border-ink/5 flex flex-col justify-between hover:border-gold/30 hover:shadow-sm transition-all duration-300">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-maroon/5 text-maroon mb-6">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <h4 className="font-display text-xl font-light text-ink mb-3">{c.title}</h4>
                    <p className="text-[13px] text-ink-soft leading-relaxed">{c.desc}</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold mt-6">Meets weekly</span>
                </div>
              );
            })}
          </div>

          {/* Right Editorial Image Card */}
          <div ref={imgCardRef} className="reveal reveal-delay-1 relative rounded-[10px] overflow-hidden shadow-lg min-h-[400px]">
            <img src={imgStudent} alt="Students collaborating" className="absolute inset-0 h-full w-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-cream">
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2 block">Student Interaction</span>
              <h3 className="font-display text-2xl font-light leading-snug mb-3">Forging lifetime bonds through shared ambition</h3>
              <p className="text-[13px] text-cream/70 leading-relaxed">Our clubs encourage peer mentorship and collaborative spirit across multiple grade levels.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
