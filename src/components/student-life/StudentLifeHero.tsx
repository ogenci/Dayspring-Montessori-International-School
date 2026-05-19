import { useReveal } from "@/hooks/use-reveal";
import imgCampus from "@/assets/dmis/campus-bg.jpg";

export default function StudentLifeHero() {
  const h = useReveal<HTMLDivElement>();

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-maroon-deep text-cream pt-32 pb-20">
      {/* Full-bleed background */}
      <img
        src={imgCampus}
        alt="Dayspring student life campus"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/25 via-maroon/20 to-maroon-deep/30" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_40%,transparent_0%,rgba(0,0,0,0.12)_100%)]" />
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10 text-center">
        <div ref={h} className="reveal max-w-3xl mx-auto text-center flex flex-col items-center">
          <p className="mb-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold">
            Beyond the Classroom
          </p>
          <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] font-light leading-[1.05] tracking-[-0.03em] text-cream line-clamp-2">
            A vibrant community <span className="italic text-gold">of growth.</span>
          </h1>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#clubs"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.15em] text-maroon transition-all hover:bg-cream"
            >
              Explore Clubs
            </a>
            <a
              href="#tour"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.15em] text-cream backdrop-blur-sm transition-colors hover:bg-cream/10"
            >
              Campus Tour
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
