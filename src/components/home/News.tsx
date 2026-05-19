import { useReveal, attachReveal } from "@/hooks/use-reveal";

const items = [
  {
    tag: "Careers",
    date: "Now Hiring",
    title: "Creative Arts Teacher",
    blurb: "Join a school where art, music and craft are not extras. They are central to how children learn to think.",
  },
  {
    tag: "Careers",
    date: "Now Hiring",
    title: "Lower Primary Class Teacher",
    blurb: "We're seeking a Montessori-aligned educator who delights in the curiosity of 6–8 year-olds.",
  },
  {
    tag: "Operations",
    date: "Now Hiring",
    title: "Night Security Officer",
    blurb: "Help us protect the campus our pupils call a second home. We need someone disciplined, attentive and trustworthy.",
  },
];

export default function News() {
  const h = useReveal<HTMLDivElement>();
  return (
    <section id="news" className="relative bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={h} className="reveal mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              News &amp; Events
            </p>
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] font-light leading-[1.02] tracking-[-0.025em]">
              What's <span className="italic text-maroon">happening</span> on campus.
            </h2>
          </div>
          <a href="#" className="text-[13px] font-semibold uppercase tracking-[0.22em] text-maroon underline decoration-gold decoration-2 underline-offset-[6px] hover:text-gold">
            All updates →
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((n, i) => {
            return (
              <article
                key={n.title}
                ref={attachReveal}
                className={`reveal reveal-delay-${i + 1} group relative flex h-full flex-col justify-between rounded-[10px] border border-border bg-card p-8 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)]`}
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em]">
                    <span className="rounded-full bg-secondary px-3 py-1 text-ink-soft">{n.tag}</span>
                    <span className="text-maroon">{n.date}</span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-light leading-tight tracking-tight text-ink">{n.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{n.blurb}</p>
                </div>
                <span className="mt-10 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.22em] text-maroon">
                  Read more
                  <span className="h-px w-10 bg-gold transition-all group-hover:w-16" />
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}