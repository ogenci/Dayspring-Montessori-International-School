import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/home/Nav";
import Footer from "@/components/home/Footer";
import AdmissionsHero from "@/components/admissions/AdmissionsHero";
import WhyDayspring from "@/components/admissions/WhyDayspring";
import EligibilityCards from "@/components/admissions/EligibilityCards";
import AdmissionsProcess from "@/components/admissions/AdmissionsProcess";
import Requirements from "@/components/admissions/Requirements";
import AdmissionsForm from "@/components/admissions/AdmissionsForm";
import KeyDates from "@/components/admissions/KeyDates";
import FeesSection from "@/components/admissions/FeesSection";
import AdmissionsFAQ from "@/components/admissions/AdmissionsFAQ";
import AdmissionsCTA from "@/components/admissions/AdmissionsCTA";

export const Route = createFileRoute("/admissions")({
  component: AdmissionsPage,
  head: () => ({
    meta: [
      { title: "Admissions | Dayspring Montessori International School" },
      {
        name: "description",
        content:
          "Apply to Dayspring Montessori International School. Learn about our admissions process, eligibility, requirements, key dates, and fees for Pre-School, Primary, and Junior High.",
      },
    ],
  }),
});

function AdmissionsPage() {
  return (
    <main className="bg-cream text-ink">
      <Nav />
      <AdmissionsHero />
      <WhyDayspring />
      <EligibilityCards />
      <AdmissionsProcess />
      <Requirements />
      <AdmissionsForm />
      <KeyDates />
      <FeesSection />
      <AdmissionsFAQ />
      <AdmissionsCTA />
      <Footer />
    </main>
  );
}
