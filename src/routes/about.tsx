import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/home/Nav";
import Footer from "@/components/home/Footer";
import AboutHero from "@/components/about/AboutHero";
import Story from "@/components/about/Story";
import Journey from "@/components/about/Journey";
import Leadership from "@/components/about/Leadership";
import Team from "@/components/about/Team";
import Methodology from "@/components/about/Methodology";
import Metrics from "@/components/about/Metrics";
import Community from "@/components/about/Community";
import JoinUs from "@/components/about/JoinUs";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us | Dayspring Montessori International School" },
      { name: "description", content: "Learn about the history, leadership, and Montessori methodology of Dayspring Montessori International School in Accra, Ghana." },
    ],
  }),
});

function About() {
  return (
    <main className="bg-cream text-ink">
      <Nav />
      <AboutHero />
      <Story />
      <Journey />
      <Metrics />
      <Leadership />
      <Team />
      <Methodology />
      <Community />
      <JoinUs />
      <Footer />
    </main>
  );
}
