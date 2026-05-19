import logo from "@/assets/dmis/logo.png";
import { useReveal } from "@/hooks/use-reveal";

const cols = [
  { h: "School", l: ["History", "Who We Are", "Departments", "Our Facilities", "Calendar"] },
  { h: "For Parents", l: ["PTA Executives", "PTA Minutes", "School Uniform", "Newsletters", "EDVES Portal"] },
  { h: "Media", l: ["News & Events", "Photo Gallery", "Video Gallery"] },
  { h: "Community", l: ["Alumni", "Contact Us", "Careers"] },
];

export default function Footer() {
  const r = useReveal<HTMLDivElement>();
  return (
    <footer id="contact" className="relative bg-maroon-deep pt-24 pb-10 text-cream">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="DMIS crest" className="h-12 w-12 object-contain" />
              <div className="font-display leading-tight">
                <p className="text-lg">Dayspring Montessori</p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-cream/60">International School</p>
              </div>
            </div>
            <p className="mt-6 max-w-md font-display text-[clamp(1.5rem,2.2vw,2rem)] font-light italic leading-[1.2] tracking-[-0.01em] text-cream">
              "Enriching brains for all-round excellence."
            </p>
            <p className="mt-8 text-[13px] leading-relaxed text-cream/65">
              East Legon · Accra · Ghana<br />
              +233 (0) 24 000 0000<br />
              hello@dmis.edu.gh
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
            {cols.map((c) => (
              <div key={c.h}>
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold">{c.h}</p>
                <ul className="mt-5 space-y-3 text-[14px] text-cream/75">
                  {c.l.map((l) => (
                    <li key={l}>
                      <a href="#" className="hover:text-gold">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-cream/15 pt-8 text-[12px] text-cream/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Dayspring Montessori International School. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Safeguarding</a>
          </div>
        </div>
        <div ref={r} className="mt-12 overflow-hidden flex justify-center group">
          <div 
            aria-hidden 
            className="pointer-events-none select-none font-display text-[clamp(4rem,18vw,18rem)] font-light leading-none tracking-[-0.06em] text-cream/[0.15] transition-all duration-[2500ms] ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0 translate-y-40 scale-y-75 origin-bottom group-[.is-in]:opacity-100 group-[.is-in]:translate-y-0 group-[.is-in]:scale-y-100"
          >
            DAYSPRING
          </div>
        </div>
      </div>
    </footer>
  );
}