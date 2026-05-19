import { useReveal, attachReveal } from "@/hooks/use-reveal";
import { Heart, Globe, Shield, Star } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Child-Centred",
    desc: "Every decision, from class sizes to curriculum design, is made with your child's unique development at the forefront.",
  },
  {
    icon: Globe,
    title: "Globally Minded",
    desc: "We produce graduates who are not only academically excellent, but who are culturally aware, confident, and globally competitive.",
  },
  {
    icon: Shield,
    title: "Safe & Nurturing",
    desc: "A secure, structured environment built on mutual respect between students, teachers, and parents forms the foundation of our community.",
  },
  {
    icon: Star,
    title: "Proven Excellence",
    desc: "35+ years of producing outstanding students with exceptional BECE results and placement in Ghana's top senior high schools.",
  },
];

export default function WhyDayspring() {
  const h = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-white py-24 text-ink lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(224,162,58,0.04),transparent)]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Header text */}
          <div ref={h} className="reveal">
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-maroon">
              Why Choose Us
            </p>
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.8rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
              A school that{" "}
              <span className="italic text-gold">grows</span>{" "}
              with your child.
            </h2>
            <p className="mt-8 text-[17px] leading-relaxed text-ink-soft max-w-lg">
              Choosing a school is one of the most important decisions you will ever make. At Dayspring, we understand that weight — and we've spent over three decades earning the trust of families across Ghana.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#apply" className="inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3 text-[13px] font-bold uppercase tracking-[0.15em] text-cream transition-all hover:bg-maroon-deep">
                Start Application
              </a>
              <a href="#process" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-[13px] font-bold uppercase tracking-[0.15em] text-ink transition-colors hover:bg-cream">
                Learn the Process
              </a>
            </div>
          </div>

          {/* Right: Pillars grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  ref={attachReveal}
                  className={`reveal reveal-delay-${idx + 1} rounded-[10px] bg-cream border border-ink/5 p-8`}
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[10px] bg-white shadow-sm border border-ink/5 text-gold">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-light text-ink">{p.title}</h3>
                  <p className="text-[14px] leading-relaxed text-ink-soft">{p.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
