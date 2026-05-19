import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight, CreditCard, Percent, Phone } from "lucide-react";

const tiers = [
  { label: "Pre-School", fee: "GHC 4,965", note: "Per term · All sessions" },
  { label: "Primary School", fee: "GHC 7,675", note: "Per term · Grades 1–6" },
  { label: "Junior High", fee: "GHC 8,500", note: "Per term · JHS 1–3" },
];

export default function FeesSection() {
  const h = useReveal<HTMLDivElement>();
  const leftRef = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLDivElement>();

  return (
    <section id="fees" className="relative bg-cream py-24 text-ink lg:py-36 border-y border-ink/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <div ref={h} className="reveal text-center max-w-3xl mx-auto mb-20">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
            Investment in Excellence
          </p>
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Fees & <span className="italic text-gold">financial information.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
            We believe in full transparency. Our fees cover all core academic instruction, access to all campus facilities, and standard learning materials. There are no hidden costs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Fee tiers card */}
          <div ref={leftRef} className="reveal reveal-delay-1 overflow-hidden rounded-[10px] bg-white border border-ink/5 shadow-sm">
            <div className="border-b border-ink/5 px-10 py-7">
              <h3 className="font-display text-2xl font-light text-maroon">Termly Fee Schedule</h3>
              <p className="mt-1 text-[14px] text-ink-soft">2025 / 2026 Academic Year</p>
            </div>
            <div className="divide-y divide-ink/5">
              {tiers.map((t) => (
                <div key={t.label} className="flex items-center justify-between px-10 py-7">
                  <div>
                    <p className="font-medium text-ink text-[16px]">{t.label}</p>
                    <p className="text-[13px] text-ink-soft mt-0.5">{t.note}</p>
                  </div>
                  <p className="font-display text-2xl text-maroon">{t.fee}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-ink/5 bg-cream px-10 py-5">
              <a href="#apply" className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-maroon hover:text-gold transition-colors">
                Request full fee schedule <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Policies card */}
          <div ref={rightRef} className="reveal reveal-delay-2 relative overflow-hidden rounded-[10px] bg-maroon p-10 shadow-xl text-cream">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(224,162,58,0.08),transparent)]" />

            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="font-display text-2xl font-light text-gold mb-6">Financial Policies</h3>
              </div>

              <div className="flex gap-5 border-b border-cream/10 pb-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-white/10 border border-white/10 text-gold">
                  <CreditCard size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-[15px] mb-2">Payment Schedule</h4>
                  <p className="text-[14px] text-cream/70 leading-relaxed">All fees are due and payable in full before or on the first day of each new term. A payment receipt must be presented before a student is permitted to resume.</p>
                </div>
              </div>

              <div className="flex gap-5 border-b border-cream/10 pb-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-white/10 border border-white/10 text-gold">
                  <Percent size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-[15px] mb-2">Sibling Discount</h4>
                  <p className="text-[14px] text-cream/70 leading-relaxed">
                    We support families. A <span className="text-gold font-medium">10% discount</span> applies for a 3rd enrolled sibling, and a <span className="text-gold font-medium">15% discount</span> for a 4th child.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-white/10 border border-white/10 text-gold">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-[15px] mb-2">Financial Enquiries</h4>
                  <p className="text-[14px] text-cream/70 leading-relaxed">For bursary enquiries or payment arrangement discussions, please contact our Finance Office directly to schedule a confidential meeting.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
