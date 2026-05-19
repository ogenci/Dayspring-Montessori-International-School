import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import arrow from "@/assets/dmis/arrow.png";

export default function Hero() {
  const headline = "Enriching brains for all-round excellence.";
  const words = headline.split(" ");
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden bg-maroon-deep text-cream">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster=""
        aria-hidden="true"
      >
        <source src="/hero/hero.mp4" type="video/mp4" />
      </video>
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/25 via-maroon/20 to-maroon-deep/30" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_40%,transparent_0%,rgba(0,0,0,0.12)_100%)]" />
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-between px-6 pb-16 pt-56 lg:px-10 lg:pt-64">
        <div className="max-w-4xl">
          <div
            className={
              "mb-6 inline-flex items-center gap-3 rounded-full border border-cream/25 bg-cream/5 px-4 py-1.5 backdrop-blur-md transition-all duration-700 " +
              (ready ? "opacity-100" : "opacity-0 -translate-y-2")
            }
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-cream/90">
              Est. 1996 · Accra, Ghana
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] font-light leading-[1.05] tracking-[-0.03em] text-cream line-clamp-2">
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-top">
                <span
                  className="inline-block transition-all duration-[900ms]"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                    transitionDelay: `${120 + i * 90}ms`,
                    transform: ready ? "translateY(0)" : "translateY(110%)",
                    opacity: ready ? 1 : 0,
                    fontStyle: w === "all-round" || w === "excellence." ? "italic" : "normal",
                    color: w === "excellence." ? "var(--color-gold)" : undefined,
                  }}
                >
                  {w}
                </span>
                {i < words.length - 1 && <span>&nbsp;</span>}
              </span>
            ))}
          </h1>

          <div
            className={
              "mt-8 max-w-xl text-lg leading-relaxed text-cream/85 transition-all duration-1000 " +
              (ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")
            }
            style={{ transitionDelay: "900ms" }}
          >
            A Montessori-led community in the heart of Accra, where curious minds become
            confident, capable, and compassionate young people.
          </div>

          <div
            className={
              "mt-10 flex flex-wrap items-center gap-4 transition-all duration-1000 " +
              (ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")
            }
            style={{ transitionDelay: "1100ms" }}
          >
            <a
              href="/#admissions"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-5 py-2 text-[13px] font-semibold tracking-wide text-maroon-deep transition-all hover:shadow-[0_18px_50px_-12px_rgba(224,162,58,0.7)]"
            >
              Book a Campus Visit
              <span className="grid h-5 w-5 place-items-center rounded-full bg-maroon-deep text-cream transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#welcome"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-5 py-2 text-[13px] font-medium text-cream backdrop-blur-md transition-all hover:bg-cream/10"
            >
              <Play size={14} className="fill-current" /> Our story
            </a>
          </div>
        </div>

        {/* signature mark */}
        <img
          src={arrow}
          alt=""
          aria-hidden="true"
          className={
            "pointer-events-none absolute right-6 top-1/2 hidden h-40 -translate-y-1/2 opacity-60 transition-all duration-[1400ms] lg:block " +
            (ready ? "translate-x-0 opacity-60" : "translate-x-12 opacity-0")
          }
          style={{ transitionDelay: "1300ms", filter: "hue-rotate(0deg) brightness(1.1)" }}
        />

        {/* bottom row */}
        <div className="relative z-10 mt-16 flex items-end justify-end">
          <div className="hidden text-right md:block">
            <p className="font-script text-2xl text-gold">a learning home</p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-cream/60">since 1996</p>
          </div>
        </div>
      </div>
    </section>
  );
}