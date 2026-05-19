const items = [
  "Established 1996",
  "Authentic Montessori Method",
  "Ghana Education Service Recognized",
  "1:12 Teacher–Student Ratio",
  "Nursery → Junior High",
  "Bilingual Foundation",
  "Cambridge-Aligned Curriculum",
  "Pastoral Care",
];
export default function TrustStrip() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-cream py-7">
      <div className="marquee-track">
        {[...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-4 whitespace-nowrap">
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span className="font-display text-[15px] italic text-ink-soft">{it}</span>
          </div>
        ))}
      </div>
    </section>
  );
}