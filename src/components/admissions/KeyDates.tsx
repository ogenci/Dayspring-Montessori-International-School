import { useReveal } from "@/hooks/use-reveal";
import { Calendar } from "lucide-react";

const intakes = [
  {
    term: "Advent Term",
    period: "September – December",
    open: "June 1 – July 31",
    results: "August 15",
    status: "Upcoming",
    statusColor: "bg-gold/15 text-gold border-gold/25",
  },
  {
    term: "Lent Term",
    period: "January – March",
    open: "October 1 – November 30",
    results: "December 10",
    status: "Open",
    statusColor: "bg-green-500/10 text-green-700 border-green-500/20",
  },
  {
    term: "Trinity Term",
    period: "April – June",
    open: "February 1 – February 28",
    results: "March 10",
    status: "Closed",
    statusColor: "bg-ink/8 text-ink-soft border-ink/10",
  },
];

const keyDates = [
  { date: "June 1, 2025", event: "Advent Term Applications Open" },
  { date: "July 31, 2025", event: "Advent Term Application Deadline" },
  { date: "August 15, 2025", event: "Admission Decisions Released" },
  { date: "August 25, 2025", event: "Enrolment Fee Deadline" },
  { date: "September 8, 2025", event: "Advent Term Begins" },
  { date: "December 5, 2025", event: "Advent Term Ends" },
];

export default function KeyDates() {
  const h = useReveal<HTMLDivElement>();
  const tableRef = useReveal<HTMLDivElement>();
  const datesRef = useReveal<HTMLDivElement>();

  return (
    <section id="dates" className="relative bg-white py-24 text-ink lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Section Header */}
        <div ref={h} className="reveal text-center max-w-3xl mx-auto mb-20">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-maroon">
            Intake Calendar
          </p>
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Key dates & <span className="italic text-gold">deadlines.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
            We accept new students at the start of each academic term. Plan your application early to secure your child's place before the deadline.
          </p>
        </div>

        {/* Intake Terms Grid (Equal Heights) */}
        <div ref={tableRef} className="reveal reveal-delay-1 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {intakes.map((i) => (
            <div 
              key={i.term} 
              className="flex flex-col justify-between rounded-[10px] border border-ink/8 bg-cream p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className={`inline-flex rounded-full border px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider ${i.statusColor}`}>
                    {i.status}
                  </span>
                  <Calendar size={16} className="text-ink-soft opacity-40" />
                </div>
                <h3 className="font-display text-2xl font-light text-ink mb-1">{i.term}</h3>
                <p className="text-[13px] text-ink-soft mb-8">{i.period}</p>
              </div>

              <div className="space-y-4 pt-6 border-t border-ink/5">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-ink-soft mb-1">Applications Window</p>
                  <p className="text-[14px] font-semibold text-ink">{i.open}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-ink-soft mb-1">Admissions Results</p>
                  <p className="text-[14px] font-semibold text-ink">{i.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Dates Timeline Grid */}
        <div ref={datesRef} className="reveal reveal-delay-2 rounded-[10px] bg-maroon p-8 lg:p-12 text-cream relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(224,162,58,0.08),transparent)]" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10">
              <Calendar size={20} strokeWidth={1.5} className="text-gold" />
              <h3 className="font-display text-2xl font-light text-cream">2025 Academic Calendar & Key Dates</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyDates.map((d, idx) => (
                <div key={idx} className="flex gap-4 border-b border-cream/10 pb-6 last:border-0 md:last:border-b last:pb-6 md:pb-6">
                  <div className="shrink-0">
                    <span className="inline-block rounded-[4px] bg-white/10 px-2.5 py-1 text-[11px] font-bold text-gold uppercase tracking-wider">
                      {d.date}
                    </span>
                  </div>
                  <p className="text-[14px] text-cream/80 leading-relaxed font-medium self-center">{d.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
