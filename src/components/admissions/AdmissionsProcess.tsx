import { useReveal, attachReveal } from "@/hooks/use-reveal";
import { FileText, MessageSquare, ClipboardCheck, GraduationCap } from "lucide-react";


const steps = [
  {
    num: "01",
    icon: FileText,
    title: "Submit Application",
    desc: "Complete and submit our online application form. Provide all required information about your child, including personal details, previous school, and desired programme.",
  },
  {
    num: "02",
    icon: MessageSquare,
    title: "Admissions Interview",
    desc: "Shortlisted candidates and their parents will be invited to an informal interview session with our Admissions Team and relevant Head of Department.",
  },
  {
    num: "03",
    icon: ClipboardCheck,
    title: "Assessment & Review",
    desc: "Applicants for Primary and JHS will complete a short academic placement assessment. Pre-School applicants undergo an informal observation session with our lead teachers.",
  },
  {
    num: "04",
    icon: GraduationCap,
    title: "Offer & Enrolment",
    desc: "Successful applicants receive a formal Letter of Offer. Upon acceptance, you will complete the enrolment formalities and pay the applicable fees to secure your child's place.",
  },
];

export default function AdmissionsProcess() {
  const h = useReveal<HTMLDivElement>();

  return (
    <section id="process" className="relative bg-white py-24 text-ink lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

          {/* Left sticky header */}
          <div ref={h} className="reveal lg:sticky lg:top-32">
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-maroon">
              How To Apply
            </p>
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
              A clear,{" "}
              <span className="italic text-gold">simple</span>{" "}
              process.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink-soft">
              We have designed our admissions process to be transparent, fair, and stress-free for both students and families. Here is exactly what to expect.
            </p>
            <div className="mt-10">
              <a href="#apply" className="inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3 text-[13px] font-bold uppercase tracking-[0.15em] text-cream transition-all hover:bg-maroon-deep">
                Begin Application
              </a>
            </div>
          </div>

          {/* Right: Steps */}
          <div className="space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  ref={attachReveal}
                  className={`reveal reveal-delay-${idx + 1} flex gap-8 rounded-[10px] bg-cream border border-ink/5 p-8`}
                >
                  {/* Step number column */}
                  <div className="shrink-0 flex flex-col items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-maroon text-cream shadow-sm">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="w-px flex-1 bg-ink/10 min-h-[2rem]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pt-1 pb-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Step {step.num}</span>
                    <h3 className="mt-2 mb-3 font-display text-2xl font-light text-ink">{step.title}</h3>
                    <p className="text-[15px] leading-relaxed text-ink-soft">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
