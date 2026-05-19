import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import Nav from "@/components/home/Nav";
import Footer from "@/components/home/Footer";
import { getPost, journalPosts } from "@/data/journalPosts";
import { useReveal } from "@/hooks/use-reveal";
import { Clock, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import imgCampus from "@/assets/dmis/campus-bg.jpg";

export const Route = createFileRoute("/journal/$slug")({
  component: ArticlePage,
  head: ({ params }) => {
    const post = getPost(params.slug);
    return {
      meta: post
        ? [
            { title: `${post.title} | Dayspring Montessori Journal` },
            { name: "description", content: post.metaDescription },
            { name: "keywords", content: post.keywords.join(", ") },
            { property: "og:title", content: post.title },
            { property: "og:description", content: post.metaDescription },
            { property: "og:type", content: "article" },
            { name: "article:published_time", content: post.date },
            { name: "article:author", content: post.author },
            { name: "article:section", content: post.category },
          ]
        : [{ title: "Article Not Found | Dayspring Montessori Journal" }],
    };
  },
});

function ArticlePage() {
  const { slug } = Route.useParams();
  const post = getPost(slug);

  if (!post) throw notFound();

  const hero = useReveal<HTMLDivElement>();
  const body = useReveal<HTMLDivElement>();

  const currentIndex = journalPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? journalPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < journalPosts.length - 1 ? journalPosts[currentIndex + 1] : null;
  const related = journalPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);

  return (
    <main className="bg-cream text-ink">
      <Nav />

      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-maroon-deep text-cream pt-32">
        <img src={imgCampus} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-maroon-deep/20" />
        <div className="grain pointer-events-none absolute inset-0" />

        <div className="relative z-10 mx-auto w-full max-w-[1000px] px-6 lg:px-10 pb-16">
          <div ref={hero} className="reveal">
            <Link to="/journal" className="mb-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-cream/60 hover:text-gold transition-colors">
              <ArrowLeft size={12} /> Journal
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex rounded-full border border-gold/40 bg-gold/15 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-gold backdrop-blur-sm">
                {post.category}
              </span>
              <span className="text-[12px] text-cream/50 flex items-center gap-1.5"><Clock size={11} />{post.readTime}</span>
            </div>
            <h1 className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] tracking-[-0.03em] text-cream mb-6 max-w-3xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-[13px] font-bold text-cream">{post.author}</p>
                <p className="text-[11px] text-cream/50">{post.authorRole}</p>
              </div>
              <span className="text-cream/20">·</span>
              <p className="text-[12px] text-cream/50">{post.date}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[780px] px-6 lg:px-10">

          {/* Excerpt pull quote */}
          <div className="mb-16 border-l-4 border-gold pl-7">
            <p className="font-display text-xl font-light italic text-ink leading-relaxed">{post.excerpt}</p>
          </div>

          <div ref={body} className="reveal space-y-14">
            {post.sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] font-light leading-snug tracking-[-0.02em] text-ink mb-5">
                  {section.heading}
                </h2>
                <p className="text-[16px] leading-[1.85] text-ink/75">{section.body}</p>
              </div>
            ))}
          </div>

          {/* Keywords / SEO tags */}
          <div className="mt-16 pt-8 border-t border-ink/8">
            <div className="flex flex-wrap items-center gap-2">
              <Tag size={13} className="text-ink-soft" />
              {post.keywords.map((kw) => (
                <span key={kw} className="rounded-full border border-ink/10 bg-cream px-3 py-1 text-[11px] text-ink-soft">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Author card */}
          <div className="mt-10 rounded-[10px] bg-cream border border-ink/5 p-7 flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-maroon text-cream font-display text-xl font-light">
              {post.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
            <div>
              <p className="font-bold text-ink text-[14px]">{post.author}</p>
              <p className="text-[12px] text-ink-soft mb-2">{post.authorRole}</p>
              <p className="text-[13px] text-ink-soft leading-relaxed">
                An educator at Dayspring Montessori International School in Accra, Ghana, committed to evidence-based, child-centred practice.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="bg-cream py-16 border-t border-ink/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevPost ? (
              <Link to={`/journal/${prevPost.slug}`} className="group rounded-[10px] bg-white border border-ink/5 p-7 hover:border-gold/25 hover:shadow-sm transition-all">
                <p className="text-[10px] uppercase tracking-widest text-ink-soft mb-3 flex items-center gap-2"><ArrowLeft size={10} /> Previous Article</p>
                <h3 className="font-display text-lg font-light text-ink group-hover:text-maroon transition-colors">{prevPost.title}</h3>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link to={`/journal/${nextPost.slug}`} className="group rounded-[10px] bg-white border border-ink/5 p-7 hover:border-gold/25 hover:shadow-sm transition-all text-right">
                <p className="text-[10px] uppercase tracking-widest text-ink-soft mb-3 flex items-center justify-end gap-2">Next Article <ArrowRight size={10} /></p>
                <h3 className="font-display text-lg font-light text-ink group-hover:text-maroon transition-colors">{nextPost.title}</h3>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="bg-white py-20 border-t border-ink/5">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <p className="mb-10 text-[11px] uppercase tracking-[0.28em] text-maroon font-bold">More in {post.category}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((rel) => (
                <Link key={rel.slug} to={`/journal/${rel.slug}`} className="group rounded-[10px] bg-cream border border-ink/5 p-8 hover:border-gold/25 hover:shadow-sm transition-all">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold mb-3 block">{rel.category}</span>
                  <h3 className="font-display text-xl font-light text-ink mb-3 group-hover:text-maroon transition-colors">{rel.title}</h3>
                  <p className="text-[13px] text-ink-soft leading-relaxed mb-4">{rel.excerpt}</p>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-maroon flex items-center gap-1">Read Article <ArrowRight size={11} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
