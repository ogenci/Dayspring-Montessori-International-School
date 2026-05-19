import { useReveal } from "@/hooks/use-reveal";
import principal from "@/assets/dmis/principal.jpg";

export default function Welcome() {
  const a = useReveal<HTMLDivElement>();
  const b = useReveal<HTMLDivElement>();
  return (
    <section id="welcome" className="relative bg-cream py-28 lg:py-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div ref={a} className="reveal lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[10px] bg-gradient-to-br from-gold-soft via-cream to-secondary" />
            <div className="overflow-hidden rounded-[10px] bg-maroon">
              <img src={principal} alt="Mr. Eric Kofi Addo, Principal of Dayspring Montessori" className="h-[640px] w-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-6 -right-6 max-w-[220px] rounded-[10px] bg-maroon px-5 py-4 text-cream shadow-2xl">
              <p className="font-script text-2xl leading-none text-gold">28+</p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-cream/80">years shaping young minds</p>
            </div>
          </div>
        </div>
        <div ref={b} className="reveal reveal-delay-1 lg:col-span-7 lg:pl-8">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            From the Principal
          </p>
          <h2 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            A school where children are <span className="italic text-maroon">seen, heard,</span> and gently led to flourish.
          </h2>
          <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-ink-soft">
            <p>
              At Dayspring, we adopt the Montessori Method of teaching at the pre-school level, giving our pupils
              a firm, joyful foundation. Originated by Maria Montessori, this approach employs specialised
              hands-on equipment that makes learning tangible and practical.
            </p>
            <p>
              The result is children who are <em className="font-display text-ink">confident, assertive and independent</em>,
              ready not only for the next exam, but for the world they will one day shape.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-6">
            <p className="font-script text-3xl text-maroon">Mr. Eric Kofi Addo</p>
            <a href="#programmes" className="text-[13px] font-semibold uppercase tracking-[0.2em] text-maroon underline decoration-gold decoration-2 underline-offset-[6px] hover:text-gold">
              Explore programmes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}