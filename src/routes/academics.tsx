import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/home/Nav";
import Footer from "@/components/home/Footer";
import AcademicsHero from "@/components/academics/AcademicsHero";
import CurriculumPhilosophy from "@/components/academics/CurriculumPhilosophy";
import PreSchool from "@/components/academics/PreSchool";
import PrimarySchool from "@/components/academics/PrimarySchool";
import JuniorHigh from "@/components/academics/JuniorHigh";
import Enrichment from "@/components/academics/Enrichment";
import AcademicCTA from "@/components/academics/AcademicCTA";
import TuitionOverview from "@/components/academics/TuitionOverview";
import TeachingProcess from "@/components/academics/TeachingProcess";

export const Route = createFileRoute("/academics")({
  component: AcademicsPage,
  head: () => ({
    meta: [
      { title: "Academics | Dayspring Montessori International School" },
    ],
  }),
});

function AcademicsPage() {
  return (
    <main className="bg-cream text-ink">
      <Nav />
      <AcademicsHero />
      <CurriculumPhilosophy />
      <PreSchool />
      <PrimarySchool />
      <JuniorHigh />
      <Enrichment />
      <TuitionOverview />
      <TeachingProcess />
      <AcademicCTA />
      <Footer />
    </main>
  );
}
