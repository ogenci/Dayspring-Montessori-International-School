import { useReveal } from "@/hooks/use-reveal";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "At what age can my child start at Dayspring?",
    a: "We welcome children from as early as 12 months old in our Creche programme, all the way through to JHS 3 (approximately 15 years old). Our early years programme runs from 12 months to 5 years of age.",
  },
  {
    q: "Do you accept mid-term transfers?",
    a: "Yes, we accept mid-term transfers subject to available space. Transfer students from Primary and JHS may be required to complete a placement assessment to ensure they are placed in the appropriate class level.",
  },
  {
    q: "Is there a school bus / transport service?",
    a: "Yes. Dayspring operates a school bus service covering several key routes across the city. Please contact the school office for a current route schedule and associated transport fees.",
  },
  {
    q: "What is the language of instruction?",
    a: "English is the primary language of instruction at all levels. French is introduced as a specialist subject from the Pre-School and Primary levels. Twi is also incorporated into the early years programme to support mother-tongue literacy.",
  },
  {
    q: "Do you offer after-school care?",
    a: "Yes. We offer a supervised after-school programme from the end of the regular school day until 5:30 PM. This programme includes light snacks, supervised homework completion, and recreational activities.",
  },
  {
    q: "How do I arrange a school visit before applying?",
    a: "We strongly encourage prospective families to visit the campus before applying. You can schedule a guided tour by contacting our Admissions Office via phone or email. Open Days are also held at the start of each term.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink/8 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-maroon"
      >
        <span className="text-[16px] font-medium text-ink">{q}</span>
        <ChevronDown
          size={18}
          strokeWidth={1.5}
          className={`shrink-0 text-ink-soft transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${open ? "max-h-[200px] pb-6 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="text-[15px] leading-relaxed text-ink-soft">{a}</p>
      </div>
    </div>
  );
}

export default function AdmissionsFAQ() {
  const h = useReveal<HTMLDivElement>();
  const faqRef = useReveal<HTMLDivElement>();

  return (
    <section id="faq" className="relative bg-white py-24 text-ink lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div ref={h} className="reveal lg:sticky lg:top-32">
            <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-cream border border-ink/5 text-gold mb-8">
              <HelpCircle size={24} strokeWidth={1.5} />
            </div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
              Common Questions
            </p>
            <h2 className="font-display text-[clamp(2.2rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.02em]">
              Frequently asked{" "}
              <span className="italic text-gold">questions.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
              Can't find what you're looking for? Reach out to our Admissions Office directly.
            </p>
            <a href="#apply" className="mt-8 inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3 text-[13px] font-bold uppercase tracking-[0.15em] text-cream transition-all hover:bg-maroon-deep">
              Contact Us
            </a>
          </div>

          {/* Right: FAQ Accordion */}
          <div ref={faqRef} className="reveal reveal-delay-1 rounded-[10px] bg-cream border border-ink/5 px-8 py-2">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
