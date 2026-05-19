import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/home/Nav";
import Footer from "@/components/home/Footer";
import principalImg from "@/assets/dmis/principal.jpg";

export const Route = createFileRoute("/principal-message")({
  component: PrincipalMessagePage,
  head: () => ({
    meta: [
      { title: "Message from the Principal | Dayspring Montessori International School" },
    ],
  }),
});

function PrincipalMessagePage() {
  return (
    <main className="bg-cream text-ink">
      <Nav />
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <div className="mb-12 text-center">
            <h1 className="font-display text-[clamp(2.5rem,4vw,4rem)] font-light leading-[1.05] tracking-[-0.02em]">
              A Message from <span className="italic text-maroon">the Principal.</span>
            </h1>
            <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">
              Mr. Eric Kofi Addo
            </p>
          </div>

          <div className="mb-16 overflow-hidden rounded-[10px] shadow-xl">
            <img 
              src={principalImg} 
              alt="Mr. Eric Kofi Addo, Principal" 
              className="h-[500px] w-full object-cover object-top"
            />
          </div>

          <article className="prose prose-lg prose-p:text-ink-soft prose-p:leading-relaxed prose-p:mb-6 max-w-none font-sans text-[17px]">
            <p>
              Welcome to Dayspring Montessori International School.
            </p>
            <p>
              At Dayspring, we believe that the earliest years of education are the most critical. That is why we adopt the Montessori Method at the Pre-school level, providing our pupils with a firm, joyful foundation to build upon. Originated by Maria Montessori in the early 20th century, this approach utilizes specialized, hands-on learning materials that make education tangible and practical. Our pupils have fun exploring with these resources, and as a result, they blossom into confident, assertive, and independent thinkers.
            </p>
            <p>
              The impact of this approach is profound. By age four, the average Dayspring child has developed a rich vocabulary, communicates intelligently, reads with confidence, and grasps foundational mathematical concepts. As our students progress from Primary to Junior High School, we transition to the robust Ghana Education Service Curriculum. To ensure academic rigor, we adopt specialized subject teaching from Grade 4 onwards. Our commitment to small class sizes means that every pupil receives the individual attention they need to succeed, while dedicated supervision by our School Management Team ensures our educators consistently deliver their best.
            </p>
            <p>
              A school is only as strong as its educators, and Dayspring is proud to host a team of dedicated, disciplined, and highly qualified professionals. Our Primary school teachers hold a minimum of a Diploma in Basic Education, with many holding full degrees, while all our Junior High School teachers are degree holders. Furthermore, specialized Montessori training is a strict requirement for our Pre-school educators, and we continually organize in-service training to elevate our teaching standards.
            </p>
            <p>
              Above all, Dayspring is a family. The healthy, supportive relationships between our pupils and staff create an environment where everyone feels truly at home. We invite you to join our community and experience the Dayspring difference.
            </p>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
