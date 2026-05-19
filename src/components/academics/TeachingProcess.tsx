import { useReveal, attachReveal } from "@/hooks/use-reveal";
import { Search, BookOpen, Compass, Trophy } from "lucide-react";

import img1 from "@/assets/dmis/student-1.png";
import img2 from "@/assets/dmis/student-2.png";
import img3 from "@/assets/dmis/student-3.png";
import img4 from "@/assets/dmis/campus-bg.jpg";

const steps = [
  {
    num: "01",
    title: "Curiosity & Discovery",
    desc: "We begin by sparking natural interest through inquiry-based learning. Students are encouraged to ask questions, explore their environment, and engage deeply with new concepts.",
    icon: Search,
    img: img2
  },
  {
    num: "02",
    title: "Structured Understanding",
    desc: "Once curiosity is ignited, we provide the robust academic frameworks and core knowledge necessary to grasp complex topics systematically and thoroughly.",
    icon: BookOpen,
    img: img1
  },
  {
    num: "03",
    title: "Practical Application",
    desc: "Knowledge is cemented through doing. Students apply what they've learned via hands-on activities, collaborative projects, and real-world problem solving.",
    icon: Compass,
    img: img3
  },
  {
    num: "04",
    title: "Mastery & Reflection",
    desc: "The final step involves evaluating progress, encouraging metacognition, and ensuring that students haven't just memorized facts, but have achieved deep, lasting comprehension.",
    icon: Trophy,
    img: img4
  }
];

export default function TeachingProcess() {
  const h = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-white py-24 text-ink lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* Header */}
        <div ref={h} className="reveal text-center max-w-3xl mx-auto mb-20">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-maroon">
            Methodology
          </p>
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
            Our Teaching <span className="italic text-gold">Process.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
            We don't just deliver information; we guide students through a proven, cyclical journey of deep learning that ensures true mastery of every subject.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            
            return (
              <div 
                key={step.num}
                ref={attachReveal}
                className={`reveal reveal-delay-${(idx % 4) + 1} relative overflow-hidden rounded-[10px] bg-ink h-[550px] lg:h-[660px] shadow-sm`}
              >
                {/* Background Image */}
                <img src={step.img} alt={step.title} className="absolute inset-0 h-full w-full object-cover object-top" />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-maroon mix-blend-multiply opacity-20" />

                {/* Cinematic Number */}
                <div className="absolute top-6 right-8 font-display text-[4rem] leading-none text-cream/20 italic pointer-events-none select-none">
                  {step.num}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-[10px] bg-white/10 backdrop-blur-md border border-white/10 text-gold">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="mb-3 font-display text-2xl font-light text-cream">
                    {step.title}
                  </h3>
                  
                  <p className="text-[14px] leading-relaxed text-cream/80 max-w-[95%]">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
