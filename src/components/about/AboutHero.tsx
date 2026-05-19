import { useReveal } from "@/hooks/use-reveal";
import bg from "@/assets/dmis/campus-bg.jpg";

export default function AboutHero() {
  const h = useReveal<HTMLDivElement>();
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-maroon-deep text-cream pt-32 pb-20">
      <img src={bg} alt="Campus background" className="absolute inset-0 h-full w-full object-cover opacity-70" />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/25 via-maroon/20 to-maroon-deep/30" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_40%,transparent_0%,rgba(0,0,0,0.12)_100%)]" />
      <div className="grain pointer-events-none absolute inset-0" />
      
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <div ref={h} className="reveal flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cream/25 bg-cream/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-cream/90">
              Our Story
            </span>
          </div>
          <h1 className="max-w-4xl font-display text-[clamp(2.2rem,6vw,5rem)] font-light leading-[1.05] tracking-[-0.03em] text-cream line-clamp-2">
            Where brilliant minds <span className="italic text-gold">begin.</span>
          </h1>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/#admissions"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-5 py-2 text-[13px] font-semibold tracking-wide text-maroon-deep transition-all hover:shadow-[0_18px_50px_-12px_rgba(224,162,58,0.7)]"
            >
              Book a Campus Visit
              <span className="grid h-5 w-5 place-items-center rounded-full bg-maroon-deep text-cream transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-5 py-2 text-[13px] font-medium text-cream backdrop-blur-md transition-all hover:bg-cream/10"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
