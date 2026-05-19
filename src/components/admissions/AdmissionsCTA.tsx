import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import imgBack from "@/assets/dmis/campus-bg.jpg";
import imgFront from "@/assets/dmis/student-2.png";

export default function AdmissionsCTA() {
  const h = useReveal<HTMLDivElement>();

  return (
    <section id="apply" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Main CTA card */}
        <div ref={h} className="reveal relative overflow-hidden rounded-[10px] bg-maroon p-10 lg:p-16 shadow-2xl mb-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(224,162,58,0.1),transparent)]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text */}
            <div className="z-10">
              <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-gold">
                Applications Now Open
              </p>
              <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-cream">
                Take the first step toward excellence.
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-cream/75 max-w-lg">
                Join a community of families who have trusted Dayspring for over three decades. Our admissions team is ready to guide you through every step.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:admissions@dayspringmontessori.edu.gh"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[13px] font-bold uppercase tracking-[0.15em] text-maroon transition-all hover:bg-cream"
                >
                  Apply Now <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="tel:+233000000000"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-[13px] font-bold uppercase tracking-[0.15em] text-cream backdrop-blur-md transition-colors hover:bg-cream/10"
                >
                  Call Admissions
                </a>
              </div>

              {/* Stats */}
              <div className="mt-12 pt-8 border-t border-cream/10 flex flex-wrap gap-8">
                {[
                  { val: "35+", label: "Years of Excellence" },
                  { val: "100%", label: "Degree Faculty" },
                  { val: "1:1", label: "Mentorship" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl text-gold">{s.val}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest text-cream/60">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Overlapping images */}
            <div className="relative h-[400px] lg:h-[480px] w-full">
              <div className="absolute right-0 top-0 h-[80%] w-[75%] overflow-hidden rounded-[10px] shadow-xl border-4 border-maroon">
                <img src={imgBack} alt="Dayspring campus" className="h-full w-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 h-[72%] w-[62%] overflow-hidden rounded-[10px] shadow-2xl border-4 border-maroon">
                <img src={imgFront} alt="Dayspring student" className="h-full w-full object-cover object-top" />
              </div>
            </div>

          </div>
        </div>

        {/* Contact strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: MapPin, label: "Visit Us", value: "Lapaz – Anyaa Road, Accra, Ghana" },
            { icon: Phone, label: "Call Us", value: "+233 (0) 20 000 0000" },
            { icon: Mail, label: "Email Us", value: "admissions@dayspringmontessori.edu.gh" },
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
