import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight, Star } from "lucide-react";
import imgBack from "@/assets/dmis/campus-bg.jpg";
import imgFront from "@/assets/dmis/student-2.png";
import avatar1 from "@/assets/dmis/avatar-1.png";
import avatar2 from "@/assets/dmis/avatar-2.png";
import avatar3 from "@/assets/dmis/avatar-3.png";

export default function AcademicCTA() {
  const h = useReveal<HTMLDivElement>();
  
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        <div ref={h} className="reveal relative overflow-hidden rounded-[10px] bg-maroon p-10 lg:p-16 shadow-2xl">
          {/* Subtle background textures */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(224,162,58,0.1),transparent)]" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="text-left z-10 lg:pr-10">
              <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-cream">
                Experience Dayspring for Yourself
              </h2>
              
              <p className="mt-6 text-[17px] leading-relaxed text-cream/80 max-w-lg">
                You've seen what life at Dayspring looks like. Now come feel it. Walk the campus. Meet the students. See what makes this community special.
              </p>
              
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a 
                  href="/#admissions" 
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream px-5 py-2 text-[13px] font-bold uppercase tracking-[0.15em] text-maroon transition-all hover:bg-gold whitespace-nowrap"
                >
                  Apply Now
                </a>
                <a 
                  href="/#contact" 
                  className="inline-flex items-center justify-center rounded-full border border-cream/30 bg-transparent px-5 py-2 text-[13px] font-bold uppercase tracking-[0.15em] text-cream backdrop-blur-md transition-colors hover:bg-cream/10 whitespace-nowrap"
                >
                  Schedule a Visit
                </a>
              </div>

              {/* Stats Section */}
              <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-cream/10 pt-8">
                
                <div>
                  <p className="font-display text-3xl text-gold">100%</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-cream/70">Degree Faculty</p>
                </div>
                
                <div className="hidden sm:block h-8 w-px bg-cream/10" />
                
                <div>
                  <p className="font-display text-3xl text-gold">35+</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-cream/70">Years of Excellence</p>
                </div>
                
                <div className="hidden sm:block h-8 w-px bg-cream/10" />
                
                <div>
                  <p className="font-display text-3xl text-gold">1:1</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-cream/70">Mentorship</p>
                </div>

              </div>
            </div>

            {/* Right Column: Overlapping Images */}
            <div className="relative h-[400px] lg:h-[500px] w-full mt-10 lg:mt-0">
               {/* Back Image (Campus) */}
               <div className="absolute right-0 top-0 h-[80%] w-[75%] overflow-hidden rounded-3xl shadow-xl border-4 border-maroon">
                 <img src={imgBack} alt="Dayspring campus" className="h-full w-full object-cover" />
               </div>
               
               {/* Front Floating Image (Students) */}
               <div className="absolute bottom-0 left-0 h-[75%] w-[65%] overflow-hidden rounded-[10px] shadow-2xl border-4 border-maroon">
                 <img src={imgFront} alt="Dayspring students" className="h-full w-full object-cover object-top" />
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
