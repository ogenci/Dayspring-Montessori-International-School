import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight, MapPin, Calendar, Compass } from "lucide-react";
import imgBack from "@/assets/dmis/campus-bg.jpg";
import imgFront from "@/assets/dmis/student-1.png";

export default function StudentLifeCTA() {
  const h = useReveal<HTMLDivElement>();

  return (
    <section id="tour" className="relative bg-cream py-24 lg:py-32 border-t border-ink/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Main CTA card */}
        <div ref={h} className="reveal relative overflow-hidden rounded-[10px] bg-maroon p-10 lg:p-16 shadow-2xl mb-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(224,162,58,0.1),transparent)]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Premium Text */}
            <div className="z-10">
              <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-gold font-bold">
                Experience Dayspring
              </p>
              <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-cream">
                See our campus in full bloom.
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-cream/75 max-w-lg">
                There is no substitute for experiencing our vibrant community first-hand. Schedule a private tour of our grounds, speak with our educators, and explore our learning environments.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="/admissions#application-form"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[13px] font-bold uppercase tracking-[0.15em] text-maroon transition-all hover:bg-cream"
                >
                  Schedule a Tour <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="/admissions"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-[13px] font-bold uppercase tracking-[0.15em] text-cream backdrop-blur-md transition-colors hover:bg-cream/10"
                >
                  View Admission Fees
                </a>
              </div>
            </div>

            {/* Right Column: Premium Double Overlapping Image Layout (10px rounded standard) */}
            <div className="relative h-[400px] lg:h-[480px] w-full">
              <div className="absolute right-0 top-0 h-[80%] w-[75%] overflow-hidden rounded-[10px] shadow-xl border-4 border-maroon">
                <img src={imgBack} alt="Campus atmosphere" className="h-full w-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 h-[72%] w-[62%] overflow-hidden rounded-[10px] shadow-2xl border-4 border-maroon">
                <img src={imgFront} alt="Dayspring students playing" className="h-full w-full object-cover object-top" />
              </div>
            </div>

          </div>
        </div>

        {/* 3-Column Info Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: MapPin, label: "Campus Location", value: "Lapaz – Anyaa Road, Accra, Ghana" },
            { icon: Calendar, label: "Tours Held Weekly", value: "Wednesdays & Fridays, 9AM – 12PM" },
            { icon: Compass, label: "Student Vibe", value: "Active. Creative. Compassionate." },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.label} className="flex gap-4 items-start rounded-[10px] bg-white border border-ink/5 p-6 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-cream text-maroon">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-ink-soft mb-1">{c.label}</p>
                  <p className="text-[14px] font-medium text-ink">{c.value}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
