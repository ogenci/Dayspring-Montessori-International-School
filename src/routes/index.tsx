import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/home/Nav";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Welcome from "@/components/home/Welcome";
import Pillars from "@/components/home/Pillars";
import Programmes from "@/components/home/Programmes";
import Stats from "@/components/home/Stats";
import Method from "@/components/home/Method";
import Gallery from "@/components/home/Gallery";
import DayTimeline from "@/components/home/DayTimeline";
import Testimonials from "@/components/home/Testimonials";
import News from "@/components/home/News";
import Admissions from "@/components/home/Admissions";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dayspring Montessori International School — Enriching Brains For All-Round Excellence" },
      { name: "description", content: "A Montessori-led learning community in Accra, Ghana. From Nursery to Junior High, we shape confident, curious and compassionate young people." },
      { property: "og:title", content: "Dayspring Montessori International School" },
      { property: "og:description", content: "Enriching brains for all-round excellence — Montessori-led learning from Nursery through JHS, Accra, Ghana." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <main className="bg-cream text-ink">
      <Nav />
      <Hero />
      <TrustStrip />
      <Welcome />
      <Pillars />
      <Programmes />
      <Stats />
      <Method />
      <Gallery />
      <DayTimeline />
      <Testimonials />
      <News />
      <Admissions />
      <Faq />
      <Footer />
    </main>
  );
}
