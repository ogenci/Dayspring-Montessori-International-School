import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";
import Nav from "@/components/home/Nav";
import Footer from "@/components/home/Footer";
import Team from "@/components/about/Team";
import { MapPin, Phone, Mail, Clock, Plus, Minus } from "lucide-react";
import imgCampus from "@/assets/dmis/campus-bg.jpg"; // Placeholder or imported campus image

const faqs = [
  {
    q: "When can I visit the campus?",
    a: "We conduct guided campus tours from Monday to Thursday between 9:00 AM and 1:00 PM. This allows you to see our classrooms in action during the morning work cycle."
  },
  {
    q: "How long is the admissions process?",
    a: "Once an application is submitted, the review and assessment process typically takes 1-2 weeks. We aim to provide a final decision shortly after the child's observation session."
  },
  {
    q: "Do you accept mid-year transfers?",
    a: "Yes, subject to availability in the respective programme. We carefully assess each transfer application to ensure a smooth transition for the child into our Montessori environment."
  },
  {
    q: "What are your class sizes?",
    a: "Our classes maintain strict adult-to-child ratios to ensure individualized attention. Preschool environments are capped at 25 pupils with two trained guides, while primary and JHS classes average 20 pupils."
  }
];

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | Dayspring Montessori International School" },
      {
        name: "description",
        content:
          "Get in touch with Dayspring Montessori International School in Accra. Request a campus visit, inquire about admissions, or reach our administrative office.",
      },
    ],
  }),
});

function ContactPage() {
  const hero = useReveal<HTMLDivElement>();
  const content = useReveal<HTMLDivElement>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <main className="bg-cream text-ink">
      <Nav />

      {/* Hero */}
      <section className="relative flex min-h-[50vh] lg:min-h-[60vh] items-center justify-center overflow-hidden bg-maroon-deep text-cream pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/80 via-maroon/50 to-maroon-deep/90 z-10" />
        <img src={imgCampus} alt="Campus" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="grain pointer-events-none absolute inset-0 z-10" />
        
        <div className="relative z-20 mx-auto w-full max-w-[1400px] px-6 lg:px-10 text-center">
          <div ref={hero} className="reveal max-w-3xl mx-auto flex flex-col items-center">
            <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-gold">Get in Touch</p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] tracking-[-0.03em] text-cream">
              Let's start a <span className="italic text-gold">conversation.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative -mt-16 z-30 pb-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div ref={content} className="reveal grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 bg-maroon-deep rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Contact Details Panel */}
            <div className="lg:col-span-5 bg-cream p-10 lg:p-16 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-4xl font-light text-ink mb-10">Reach Out</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start gap-5 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-maroon/5 text-maroon group-hover:bg-maroon group-hover:text-cream transition-colors duration-300">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-maroon font-bold mb-2">Visit Us</p>
                      <p className="text-[15px] leading-relaxed text-ink-soft max-w-[200px]">
                        Dayspring Montessori<br />
                        Dane Street, Dansoman<br />
                        Accra, Ghana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-maroon/5 text-maroon group-hover:bg-maroon group-hover:text-cream transition-colors duration-300">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-maroon font-bold mb-2">Call Us</p>
                      <p className="text-[15px] text-ink-soft mb-1">+233 (0) 50 123 4567</p>
                      <p className="text-[15px] text-ink-soft">+233 (0) 30 234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-maroon/5 text-maroon group-hover:bg-maroon group-hover:text-cream transition-colors duration-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-maroon font-bold mb-2">Email Us</p>
                      <a href="mailto:admissions@dayspring.edu.gh" className="text-[15px] text-ink-soft hover:text-maroon transition-colors">
                        admissions@dayspring.edu.gh
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-maroon/5 text-maroon group-hover:bg-maroon group-hover:text-cream transition-colors duration-300">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-maroon font-bold mb-2">Office Hours</p>
                      <p className="text-[15px] text-ink-soft">Monday - Friday</p>
                      <p className="text-[15px] text-ink-soft">7:30 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Panel */}
            <div className="lg:col-span-7 bg-maroon-deep p-10 lg:p-16 relative overflow-hidden">
              <div className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-gold/15 blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="rounded-[10px] border border-cream/20 bg-cream/[0.06] p-8 backdrop-blur-md lg:p-10"
                >
                  <p className="font-display text-2xl text-cream">Request a campus visit</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-cream/60">
                    We'll be in touch within one working day to confirm your slot.
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] uppercase tracking-[0.2em] text-cream/50">Parent / Guardian Name</label>
                      <input
                        placeholder="Full name"
                        className="w-full rounded-[10px] border border-cream/15 bg-cream/5 px-5 py-4 text-[15px] text-cream placeholder:text-cream/35 focus:border-gold/60 focus:bg-cream/10 focus:outline-none transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] uppercase tracking-[0.2em] text-cream/50">Email Address</label>
                      <input
                        placeholder="your@email.com"
                        type="email"
                        className="w-full rounded-[10px] border border-cream/15 bg-cream/5 px-5 py-4 text-[15px] text-cream placeholder:text-cream/35 focus:border-gold/60 focus:bg-cream/10 focus:outline-none transition-all duration-200"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] uppercase tracking-[0.2em] text-cream/50">Phone</label>
                        <input
                          placeholder="+233 …"
                          className="w-full rounded-[10px] border border-cream/15 bg-cream/5 px-5 py-4 text-[15px] text-cream placeholder:text-cream/35 focus:border-gold/60 focus:bg-cream/10 focus:outline-none transition-all duration-200"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] uppercase tracking-[0.2em] text-cream/50">Programme</label>
                        <select className="w-full rounded-[10px] border border-cream/15 bg-maroon px-5 py-4 text-[15px] text-cream/70 focus:border-gold/60 focus:outline-none transition-all duration-200 appearance-none">
                          <option className="bg-maroon-deep" value="">Select…</option>
                          <option className="bg-maroon-deep">Nursery</option>
                          <option className="bg-maroon-deep">Lower Primary</option>
                          <option className="bg-maroon-deep">Upper Primary</option>
                          <option className="bg-maroon-deep">Junior High</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 pt-2">
                        <label className="text-[11px] uppercase tracking-[0.2em] text-cream/50">Message (Optional)</label>
                        <textarea
                          placeholder="How can we help you?"
                          rows={3}
                          className="w-full rounded-[10px] border border-cream/15 bg-cream/5 px-5 py-4 text-[15px] text-cream placeholder:text-cream/35 focus:border-gold/60 focus:bg-cream/10 focus:outline-none transition-all duration-200 resize-none"
                        ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="mt-4 w-full rounded-[10px] bg-gold py-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-maroon-deep transition-all duration-300 hover:bg-cream hover:shadow-[0_12px_40px_-12px_rgba(224,162,58,0.6)]"
                    >
                      Book my visit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* FAQ Section */}
      <section className="bg-cream py-20 lg:py-28 border-t border-ink/5">
        <div className="mx-auto max-w-[800px] px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-ink">Frequently Asked Questions</h2>
            <p className="mt-4 text-[15px] text-ink-soft">Common inquiries about our admissions and campus visits.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className={`border border-ink/10 rounded-2xl overflow-hidden transition-all duration-300 bg-white ${isOpen ? "shadow-md border-gold/40" : "hover:border-ink/20"}`}
                >
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 lg:p-8 text-left outline-none"
                  >
                    <h3 className={`font-display text-[1.2rem] transition-colors duration-300 ${isOpen ? "text-maroon" : "text-ink"}`}>
                      {faq.q}
                    </h3>
                    <div className={`flex shrink-0 h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${isOpen ? "bg-maroon text-cream" : "bg-cream text-ink-soft"}`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  <div 
                    className={`px-6 lg:px-8 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[300px] pb-8 opacity-100" : "max-h-0 pb-0 opacity-0"}`}
                  >
                    <p className="text-[15px] leading-relaxed text-ink-soft">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
