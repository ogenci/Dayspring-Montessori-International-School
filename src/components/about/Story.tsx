import { useReveal } from "@/hooks/use-reveal";
import s1 from "@/assets/dmis/student-1.png";

export default function Story() {
  const h = useReveal<HTMLDivElement>();
  const imgRef = useReveal<HTMLDivElement>();
  const c1 = useReveal<HTMLDivElement>();
  const c2 = useReveal<HTMLDivElement>();
  const c3 = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-white py-28 text-ink lg:py-40">
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(224,162,58,0.05),transparent)]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Section label */}
        <div ref={h} className="reveal mb-14">
          <p className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            The Foundation
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-2">

          {/* Hero image cell — large, left */}
          <div
            ref={imgRef}
            className="reveal-left relative overflow-hidden rounded-3xl bg-maroon lg:col-span-5 lg:row-span-2"
            style={{ minHeight: "560px" }}
          >
            <img
              src={s1}
              alt="Dayspring student"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[2s] hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

            {/* Bottom badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-3 rounded-[10px] border border-cream/20 bg-cream/10 px-5 py-3 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                <span className="font-display text-sm text-cream/90">Est. 1996 · East Legon, Accra</span>
              </div>
            </div>
          </div>

          {/* Headline cell */}
          <div
            ref={c1}
            className="reveal-right flex flex-col justify-center rounded-3xl border border-ink/5 bg-cream px-10 py-10 shadow-sm lg:col-span-7 lg:row-span-1"
          >
            <h2 className="font-display text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.08] tracking-[-0.025em]">
              Built on a vision of{" "}
              <span className="italic text-maroon">holistic</span>{" "}
              education for every child.
            </h2>
            <div className="mt-8 h-px w-full bg-ink/5" />
            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <p className="font-display text-3xl font-light text-gold">28<span className="text-lg">+</span></p>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-ink-soft">Years</p>
              </div>
              <div className="h-10 w-px bg-ink/10" />
              <div className="text-center">
                <p className="font-display text-3xl font-light text-gold">400<span className="text-lg">+</span></p>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-ink-soft">Pupils</p>
              </div>
              <div className="h-10 w-px bg-ink/10" />
              <div className="text-center">
                <p className="font-display text-3xl font-light text-gold">45<span className="text-lg">+</span></p>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-ink-soft">Guides</p>
              </div>
            </div>
          </div>

          {/* Body text cell */}
          <div
            ref={c2}
            className="reveal-right reveal-delay-2 flex flex-col justify-between gap-8 rounded-3xl border border-ink/5 bg-cream px-10 py-10 shadow-sm lg:col-span-4 lg:row-span-1"
          >
            <p className="text-[16px] leading-relaxed text-ink-soft">
              From our humble beginnings, we have remained committed to the Montessori method — fostering independence, critical thinking, and a lifelong love for learning. Our dedicated educators guide each child at their own pace, building a firm, joyful foundation.
            </p>
            <a
              href="/about"
              className="group inline-flex items-center gap-3 self-start text-[13px] font-semibold uppercase tracking-[0.18em] text-maroon"
            >
              <span>Read the full story</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-maroon/20 transition-all duration-300 group-hover:bg-maroon group-hover:text-cream">→</span>
            </a>
          </div>

          {/* Quote / pull-quote cell */}
          <div
            ref={c3}
            className="reveal-right reveal-delay-3 relative flex flex-col justify-between overflow-hidden rounded-3xl bg-maroon-deep px-10 py-10 lg:col-span-3 lg:row-span-1"
          >
            {/* Watermark */}
            <div className="pointer-events-none absolute -right-4 -top-4 select-none font-script text-[10rem] leading-none text-cream/[0.04]">"</div>
            <p className="relative font-display text-[1.15rem] font-light italic leading-relaxed text-cream/85">
              "Today, our alumni can be found excelling across the globe."
            </p>
            <p className="mt-6 text-[12px] uppercase tracking-widest text-gold">Our Legacy</p>
          </div>

        </div>
      </div>
    </section>
  );
}
