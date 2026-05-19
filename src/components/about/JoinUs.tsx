import { useReveal } from "@/hooks/use-reveal";
import s2 from "@/assets/dmis/student-2.png";

export default function JoinUs() {
  const h = useReveal<HTMLDivElement>();
  
  return (
    <section className="relative bg-white py-24 text-ink lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="relative rounded-[10px] bg-cream overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-ink/5">
          {/* Background image & gradient */}
          <div className="absolute inset-0">
            <img src={s2} alt="Students" className="h-full w-full object-cover opacity-20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/90 to-transparent" />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 lg:p-24 items-center">
            <div ref={h} className="reveal">
              <h2 className="font-display text-[clamp(2.5rem,4vw,4rem)] font-light leading-[1.05] tracking-[-0.02em]">
                Ready to begin <br/>your child's <span className="italic text-gold">journey?</span>
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-md">
                Join a community that believes in the boundless potential of every student. Admissions for the upcoming academic year are now open.
              </p>
              <div className="mt-12 flex items-center gap-6">
                <a
                  href="/#admissions"
                  className="inline-flex items-center rounded-full bg-gold px-5 py-2 text-[13px] font-semibold tracking-wide text-maroon-deep transition-all duration-300 hover:bg-maroon-deep hover:text-cream hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(224,162,58,0.5)]"
                >
                  Start Application
                </a>
                <a href="/#contact" className="text-[13px] font-semibold uppercase tracking-[0.22em] text-ink underline decoration-gold decoration-2 underline-offset-[6px] hover:text-gold transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
