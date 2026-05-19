import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Check, ArrowRight } from "lucide-react";

const programs = [
  {
    id: "preschool",
    name: "Pre-School",
    subtitle: "Perfect for curious young learners (Ages 1 to 5 years)",
    highlight: "A nurturing start to build confidence, creativity, and a joyful foundation through the Montessori Method.",
    features: [
      "Tangible Learning with specialized, hands-on Montessori equipment",
      "Focus on early literacy, numeracy, and sensory exploration",
      "Language-rich environment promoting a confident vocabulary",
      "Gentle introduction to school routines and independence",
      "Small class sizes ensuring personalized attention and care"
    ],
    price: "GHC 4,965"
  },
  {
    id: "primary",
    name: "Primary School",
    subtitle: "Building strong academic foundations and personal growth (Grades 1-6)",
    highlight: "Structuring brilliance by combining independent learning with the rigorous Ghana Education Service Curriculum.",
    features: [
      "Seamless transition from Montessori discovery to structured exploration",
      "Specialized subject teachers taking over from Grade 4 for deep academic rigor",
      "Emphasis on critical thinking, creativity, and effective communication",
      "Small class sizes guarantee no child is left behind",
      "Continuous supervision by Heads of Department to maintain high standards"
    ],
    price: "GHC 7,675"
  },
  {
    id: "jhs",
    name: "Junior High",
    subtitle: "Preparation for the world ahead (JHS 1-3)",
    highlight: "Academic rigor, personal responsibility, and comprehensive preparation for the BECE.",
    features: [
      "100% Degree-Holding Faculty delivering expert instruction",
      "1:1 Personalized Mentorship guiding students through early adolescence",
      "Intensive preparation for the Basic Education Certificate Examination",
      "Leadership training, advanced sciences, and extracurricular enrichment",
      "Focus on developing capable, compassionate, and independent young adults"
    ],
    price: "GHC 8,500"
  }
];

export default function TuitionOverview() {
  const h = useReveal<HTMLDivElement>();
  const tabsRef = useReveal<HTMLDivElement>();
  const cardRef = useReveal<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState(programs[0].id);

  const activeProgram = programs.find((p) => p.id === activeTab)!;

  return (
    <section className="relative bg-cream py-24 text-ink lg:py-36 border-y border-ink/5">
      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        
        {/* Header */}
        <div ref={h} className="reveal text-center mx-auto mb-16">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            Logistics & Investment
          </p>
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-maroon">
            Tuition & Program Overview
          </h2>
        </div>

        {/* Floating Dock Tabs */}
        <div ref={tabsRef} className="reveal reveal-delay-1 flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-white p-1.5 shadow-sm border border-ink/5">
            {programs.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`relative rounded-full px-6 py-2.5 text-[14px] font-medium transition-all duration-300 ${
                  activeTab === p.id 
                    ? "text-cream shadow-md" 
                    : "text-ink-soft hover:text-ink hover:bg-cream/50"
                }`}
              >
                {activeTab === p.id && (
                  <div className="absolute inset-0 rounded-full bg-maroon" style={{ zIndex: 0 }} />
                )}
                <span className="relative z-10">{p.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Premium Card */}
        <div ref={cardRef} className="reveal reveal-delay-2 relative mx-auto w-full max-w-[850px]">
          
          {/* Card Body */}
          <div className="rounded-t-[2.5rem] bg-white border border-b-0 border-ink/10 p-8 md:p-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]">
            <h3 className="font-display text-4xl text-maroon mb-2">{activeProgram.name}</h3>
            <p className="text-[15px] text-ink-soft mb-8">{activeProgram.subtitle}</p>
            
            {/* Highlight Box */}
            <div className="rounded-[10px] border border-gold/20 bg-gradient-to-r from-cream to-white p-6 mb-10 shadow-sm">
              <p className="text-[15px] font-medium text-ink leading-relaxed">
                {activeProgram.highlight}
              </p>
            </div>

            {/* Features Checklist */}
            <ul className="space-y-5">
              {activeProgram.features.map((feature, idx) => (
                <li key={idx} className="flex gap-4 border-b border-ink/5 pb-5 last:border-0 last:pb-0">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <p className="text-[15px] leading-relaxed text-ink/80">{feature}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Card Footer (Price) */}
          <div className="rounded-b-[2.5rem] bg-maroon p-8 md:px-14 md:py-10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-white">
                <span className="font-display text-3xl font-medium">{activeProgram.price}</span>
                <span className="text-[14px] text-white/70 ml-2 uppercase tracking-wider">/ per term</span>
              </p>
            </div>
            
            <a href="/#admissions" className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[13px] font-bold uppercase tracking-[0.15em] text-maroon transition-all hover:bg-white hover:shadow-lg whitespace-nowrap">
              Start Application
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
