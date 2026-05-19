import { useEffect, useRef, useState } from "react";

const stats = [
  { v: 28, suffix: "+", label: "Years of excellence" },
  { v: 80, suffix: "", label: "Pupils across the school" },
  { v: 12, prefix: "1:", label: "Teacher–student ratio" },
  { v: 30, suffix: "+", label: "Co-curricular activities" },
  { v: 20, suffix: "+", label: "Specialist facilities" },
];

function Counter({ to }: { to: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(eased * to));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to]);
  return <span ref={ref}>{n}</span>;
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-maroon py-24 text-cream">
      <div className="grain absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-y-14 md:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-[clamp(3rem,5vw,5.5rem)] font-light leading-none tracking-[-0.04em] text-gold">
                {s.prefix}<Counter to={s.v} />{s.suffix}
              </p>
              <p className="mt-4 text-[12px] uppercase tracking-[0.22em] text-cream/75">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}