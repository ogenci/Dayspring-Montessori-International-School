import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "When does admission open and how do I apply?",
    a: "We accept applications on a rolling basis with main intakes in September and January. Begin by booking a visit and we'll guide you through assessment, parent interview and registration.",
  },
  {
    q: "What are the school hours?",
    a: "Nursery and Lower Primary run 7:30am–2:30pm. Upper Primary and JHS run 7:30am–3:30pm. Supervised after-school care is available until 5:00pm.",
  },
  {
    q: "Is the curriculum Cambridge or GES?",
    a: "Our foundation is the Montessori philosophy, mapped to the Ghana Education Service curriculum and enriched with Cambridge primary frameworks for English and Mathematics.",
  },
  {
    q: "Do you provide lunch and transport?",
    a: "A balanced hot lunch is provided daily and prepared on campus. School transport runs on selected routes across Greater Accra. Please ask during your visit.",
  },
  {
    q: "What's the teacher–student ratio?",
    a: "We maintain a 1:12 ratio across the school and smaller ratios in Nursery. Every classroom has at least one Montessori-trained lead and a teaching assistant.",
  },
  {
    q: "How do I get a copy of the fee schedule?",
    a: "The current term's fees are shared with families during the visit or upon request from our admissions office. Please use the form above.",
  },
];

export default function Faq() {
  const h = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-cream py-28 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div ref={h} className="reveal lg:col-span-4">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            Questions parents ask
          </p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3.25rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Everything you'd want to <span className="italic text-maroon">know.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
            Still curious? Our admissions team is on hand. Call <a className="text-maroon underline decoration-gold underline-offset-4" href="tel:+233">+233 (0) 24 000 0000</a>.
          </p>
        </div>
        <div className="lg:col-span-8">
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <button
                key={i}
                onClick={() => setOpen(open === i ? null : i)}
                className="block w-full py-7 text-left"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-display text-[clamp(1.15rem,1.8vw,1.5rem)] font-light leading-snug tracking-tight text-ink">
                    {f.q}
                  </span>
                  <span
                    className={
                      "mt-1.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-maroon/20 text-maroon transition-transform duration-500 " +
                      (open === i ? "rotate-45 bg-maroon text-cream" : "")
                    }
                  >
                    <Plus size={16} />
                  </span>
                </div>
                <div
                  className="grid overflow-hidden transition-all duration-500"
                  style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0">
                    <p className="pt-5 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}