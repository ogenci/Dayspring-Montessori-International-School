import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function AdmissionsForm() {
  const h = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    childName: "",
    childDob: "",
    programme: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    prevSchool: "",
    message: "",
    tourRequested: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="application-form" className="relative bg-white py-24 text-ink lg:py-36">
      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        
        <div ref={h} className="reveal relative overflow-hidden rounded-[10px] bg-cream border border-ink/5 p-8 lg:p-16 shadow-xl">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="mb-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-maroon">
              Application & Inquiry
            </p>
            <h2 className="font-display text-[clamp(2.2rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.02em]">
              Online <span className="italic text-gold">Admissions Form.</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              Fill out the form below to begin the application process. Our Admissions Team will contact you within 24 hours to schedule your placement assessment.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Child Information Section */}
              <div>
                <h3 className="font-display text-xl font-light text-maroon mb-6 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-maroon/10 text-maroon font-bold text-xs">1</span>
                  Child's Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-ink/80 mb-2">Child's Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="First Name, Last Name"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full bg-white border border-ink/10 rounded-[10px] px-4 py-3 text-[14px] outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-ink/80 mb-2">Date of Birth *</label>
                    <input
                      type="date"
                      required
                      value={formData.childDob}
                      onChange={(e) => setFormData({ ...formData, childDob: e.target.value })}
                      className="w-full bg-white border border-ink/10 rounded-[10px] px-4 py-3 text-[14px] outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-ink/80 mb-2">Programme of Interest *</label>
                    <select
                      required
                      value={formData.programme}
                      onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                      className="w-full bg-white border border-ink/10 rounded-[10px] px-4 py-3 text-[14px] outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold appearance-none"
                    >
                      <option value="">Select a Programme</option>
                      <option value="Pre-School">Pre-School (Ages 1 - 5)</option>
                      <option value="Primary School">Primary School (Grades 1 - 6)</option>
                      <option value="Junior High School">Junior High School (JHS 1 - 3)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="h-px bg-ink/5" />

              {/* Parent Information Section */}
              <div>
                <h3 className="font-display text-xl font-light text-maroon mb-6 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-maroon/10 text-maroon font-bold text-xs">2</span>
                  Parent / Guardian Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-ink/80 mb-2">Parent / Guardian Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Mr / Mrs / Dr. Full Name"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full bg-white border border-ink/10 rounded-[10px] px-4 py-3 text-[14px] outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-ink/80 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+233..."
                      value={formData.parentPhone}
                      onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      className="w-full bg-white border border-ink/10 rounded-[10px] px-4 py-3 text-[14px] outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-ink/80 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="parent@example.com"
                      value={formData.parentEmail}
                      onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                      className="w-full bg-white border border-ink/10 rounded-[10px] px-4 py-3 text-[14px] outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold"
                    />
                  </div>
                </div>
              </div>

              <div className="h-px bg-ink/5" />

              {/* Additional Details */}
              <div>
                <h3 className="font-display text-xl font-light text-maroon mb-6 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-maroon/10 text-maroon font-bold text-xs">3</span>
                  Additional Details
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-ink/80 mb-2">Previous School Attended (if applicable)</label>
                    <input
                      type="text"
                      placeholder="Name of previous school"
                      value={formData.prevSchool}
                      onChange={(e) => setFormData({ ...formData, prevSchool: e.target.value })}
                      className="w-full bg-white border border-ink/10 rounded-[10px] px-4 py-3 text-[14px] outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-ink/80 mb-2">Questions or Special Remarks</label>
                    <textarea
                      rows={4}
                      placeholder="Please let us know of any special needs, questions, or comments."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-ink/10 rounded-[10px] px-4 py-3 text-[14px] outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="tourRequested"
                      checked={formData.tourRequested}
                      onChange={(e) => setFormData({ ...formData, tourRequested: e.target.checked })}
                      className="h-4 w-4 border-ink/10 rounded-[4px] text-maroon focus:ring-gold"
                    />
                    <label htmlFor="tourRequested" className="text-[14px] text-ink-soft select-none cursor-pointer">
                      Yes, I would like to schedule a physical tour of the campus.
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-maroon hover:bg-maroon-deep py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-cream transition-all shadow-md hover:shadow-xl"
                >
                  Submit Application Enquiry
                  <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

            </form>
          ) : (
            <div className="text-center py-12 flex flex-col items-center justify-center">
              <div className="h-16 w-16 bg-gold/15 text-gold rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={36} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl font-light text-ink mb-3">Enquiry Submitted Successfully</h3>
              <p className="text-[15px] leading-relaxed text-ink-soft max-w-md mx-auto">
                Thank you for choosing Dayspring Montessori. Your application has been logged, and our Admissions Coordinator will contact you shortly via email ({formData.parentEmail}) or phone ({formData.parentPhone}).
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
