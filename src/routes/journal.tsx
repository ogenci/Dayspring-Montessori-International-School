import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "@/components/home/Nav";
import Footer from "@/components/home/Footer";
import { journalPosts, categories } from "@/data/journalPosts";
import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";
import { Clock, ArrowRight } from "lucide-react";
import imgCampus from "@/assets/dmis/campus-bg.jpg";

export const Route = createFileRoute("/journal")({
  component: JournalPage,
  head: () => ({
    meta: [
      { title: "Journal | Dayspring Montessori International School" },
      {
        name: "description",
        content:
          "Expert insights on Montessori education, child development, parenting, and learning from the educators at Dayspring Montessori International School in Accra, Ghana.",
      },
    ],
  }),
});

function JournalPage() {
  const hero = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState("All");

  // Always the first post (latest by date order)
  const featured = journalPosts[0];
  const rest = journalPosts.slice(1);

  const filtered =
    activeCategory === "All"
      ? rest
      : rest.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-cream text-ink">
      <Nav />

      {/* Hero */}
      <section className="relative flex min-h-[50vh] lg:min-h-[60vh] items-center justify-center overflow-hidden bg-maroon-deep text-cream pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/80 via-maroon/50 to-maroon-deep/90 z-10" />
        <img src={imgCampus} alt="Journal hero" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="grain pointer-events-none absolute inset-0 z-10" />
        <div className="relative z-20 mx-auto w-full max-w-[1400px] px-6 lg:px-10 text-center">
          <div ref={hero} className="reveal max-w-3xl mx-auto flex flex-col items-center">
            <p className="mb-8 text-[11px] uppercase tracking-[0.28em] text-gold">Dayspring Journal</p>
            <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] font-light leading-[1.05] tracking-[-0.03em] text-cream line-clamp-2">
              Ideas worth <span className="italic text-gold">sharing.</span>
            </h1>
            <div className="mt-10">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.15em] text-maroon transition-all hover:bg-cream"
              >
                Apply Now <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Single Featured Post */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[960px] px-6 lg:px-10">
          <p className="mb-10 text-[11px] uppercase tracking-[0.28em] text-maroon font-bold">Latest Article</p>

          <Link
            to={`/journal/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-0 rounded-[10px] overflow-hidden border border-ink/5 hover:border-gold/25 hover:shadow-lg transition-all duration-300 bg-cream"
          >
            {/* Image side */}
            <div className="relative h-96 lg:min-h-[520px] overflow-hidden bg-maroon">
              <img
                src={imgCampus}
                alt={featured.title}
                className="h-full w-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-maroon/30" />
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <span className="rounded-full bg-gold/20 border border-gold/30 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-gold backdrop-blur-sm">
                  {featured.category}
                </span>
                <span className="rounded-full bg-maroon border border-cream/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cream/80">
                  Latest
                </span>
              </div>
            </div>

            {/* Text side */}
            <div className="flex flex-col justify-between p-10 lg:p-14">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-gold font-bold mb-6">{featured.date}</p>
                <h2 className="font-display text-[clamp(1.8rem,3vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-ink mb-6 group-hover:text-maroon transition-colors">
                  {featured.title}
                </h2>
                <p className="text-[16px] text-ink-soft leading-relaxed max-w-xl">{featured.excerpt}</p>
              </div>

              <div className="flex items-center justify-between mt-10 pt-6 border-t border-ink/8">
                <div>
                  <p className="text-[13px] font-bold text-ink">{featured.author}</p>
                  <p className="text-[11px] text-ink-soft mt-0.5 flex items-center gap-1.5">
                    <Clock size={10} /> {featured.readTime}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-2.5 text-[12px] font-bold uppercase tracking-wider text-cream group-hover:bg-maroon-deep transition-colors">
                  Read Article <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Other Posts */}
      <section className="bg-cream py-20 lg:py-28 border-t border-ink/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-14">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-5 py-2 text-[12px] font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-maroon text-cream border-maroon"
                    : "bg-white border-ink/10 text-ink hover:border-maroon/30 hover:text-maroon"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div ref={grid} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                to={`/journal/${post.slug}`}
                className="group flex flex-col rounded-[10px] bg-white border border-ink/5 overflow-hidden hover:border-gold/25 hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-44 bg-maroon overflow-hidden">
                  <img
                    src={imgCampus}
                    alt={post.title}
                    className="h-full w-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-gold/20 border border-gold/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-7">
                  <h3 className="font-display text-xl font-light leading-snug text-ink mb-3 group-hover:text-maroon transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[13px] text-ink-soft leading-relaxed mb-6 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between border-t border-ink/5 pt-5">
                    <div className="flex items-center gap-1.5 text-[11px] text-ink-soft">
                      <Clock size={11} />
                      <span>{post.readTime}</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-maroon">{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-ink-soft">
              <p className="text-[15px]">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
