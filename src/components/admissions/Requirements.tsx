import { useReveal, attachReveal } from "@/hooks/use-reveal";
import { Check } from "lucide-react";

const categories = [
  {
    label: "Pre-School",
    color: "bg-gold/10 text-gold border-gold/20",
    docs: [
      "Completed Application Form",
      "Child's Birth Certificate (Original & Photocopy)",
      "Immunization / Health Record",
      "2 Recent Passport-Size Photographs",
      "Previous School Report (if applicable)",
      "National Health Insurance Card (Photocopy)",
    ],
  },
  {
    label: "Primary School",
    color: "bg-maroon/10 text-maroon border-maroon/20",
    docs: [
      "Completed Application Form",
      "Child's Birth Certificate (Original & Photocopy)",
      "Last Two Academic Term Reports",
      "School Leaving Certificate (from previous school)",
      "2 Recent Passport-Size Photographs",
      "National Health Insurance Card (Photocopy)",
    ],
  },
  {
    label: "Junior High School",
    color: "bg-ink/10 text-ink border-ink/20",
    docs: [
      "Completed Application Form",
      "Child's Birth Certificate (Original & Photocopy)",
      "Last Two Academic Term Reports",
      "School Leaving Certificate (from previous school)",
      "BECE Mock / Placement Test Results (if available)",
      "2 Recent Passport-Size Photographs",
    ],
  },
];

export default function Requirements() {
  const h = useReveal<HTMLDivElement>();

  return (
    <section id="requirements" className="relative bg-cream py-24 text-ink lg:py-36 border-y border-ink/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <div ref={h} className="reveal text-center max-w-3xl mx-auto mb-20">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            What To Prepare
          </p>
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Admission <span className="italic text-gold">requirements.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
            Please ensure you have the following documents ready before submitting your application. All documents should be submitted as clear, legible copies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            return (
              <div
                key={cat.label}
                ref={attachReveal}
                className={`reveal reveal-delay-${idx + 1} rounded-[10px] bg-white border border-ink/5 p-10 shadow-sm`}
              >
                <div className={`mb-8 inline-flex rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest ${cat.color}`}>
                  {cat.label}
                </div>
                <ul className="space-y-4">
                  {cat.docs.map((doc) => (
                    <li key={doc} className="flex items-start gap-4 border-b border-ink/5 pb-4 last:border-0 last:pb-0">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span className="text-[14px] leading-relaxed text-ink/80">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-[10px] bg-maroon/5 border border-maroon/10 p-6 flex gap-4 items-start">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-maroon text-sm font-bold">!</div>
          <p className="text-[14px] leading-relaxed text-ink-soft">
            <strong className="text-ink">Please note:</strong> All documents must be submitted in person at our Admissions Office during the application review stage. Original documents will be sighted and returned immediately. Incomplete applications will not be processed.
          </p>
        </div>
      </div>
    </section>
  );
}
