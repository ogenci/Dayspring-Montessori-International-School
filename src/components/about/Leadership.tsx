import { useReveal } from "@/hooks/use-reveal";
import principal from "@/assets/dmis/principal.jpg";

export default function Leadership() {
  const h = useReveal<HTMLDivElement>();
  const imgRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-cream py-28 text-ink lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-20">

          {/* Portrait — left, tall rounded card */}
          <div ref={imgRef} className="reveal-left lg:col-span-5">
            <div className="overflow-hidden rounded-[10px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
              <img
                src={principal}
                alt="Mr. Eric Kofi Addo, Principal of Dayspring Montessori"
                className="h-[640px] w-full object-cover object-top transition-transform duration-[2000ms] hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Content — right */}
          <div ref={h} className="reveal-right reveal-delay-1 flex flex-col justify-center lg:col-span-7 lg:pt-4">

            <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              Leadership
            </p>

            <h2 className="font-display text-[clamp(2.75rem,4vw,4.5rem)] font-light leading-[1.0] tracking-[-0.03em]">
              Meet our Head,{" "}
              <span className="italic text-maroon">Mr. Eric<br className="hidden md:block" /> Kofi Addo.</span>
            </h2>

            <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-ink-soft">
              <p>
                At Dayspring, we believe that education is more than just academics — it's about building a firm, joyful foundation for life. By adopting the Montessori Method in our early years, we create an environment where learning is tangible, practical, and fun. 
              </p>
              <p>
                Our students don't just memorize; they explore, question, and grow into confident, assertive, and independent thinkers who are ready to take on the world.
              </p>
            </div>

            {/* Pull quote / CTA */}
            <div className="mt-12 border-t border-ink/10 pt-10">
              <p className="font-display text-[1.05rem] font-light italic leading-relaxed text-ink">
                "Every child deserves an environment where they feel seen, known, and gently led to flourish."
              </p>
              <p className="mt-4 font-script text-2xl text-maroon">Mr. Eric Kofi Addo</p>
              <p className="mt-1 text-[11px] uppercase tracking-widest text-ink-soft">Principal · Dayspring Montessori</p>
            </div>

            <a
              href="/principal-message"
              className="group mt-10 inline-flex items-center gap-3 self-start text-[13px] font-semibold uppercase tracking-[0.2em] text-maroon"
            >
              <span>See full message from our Principal</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-maroon/30 transition-all duration-300 group-hover:bg-maroon group-hover:text-cream">→</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
