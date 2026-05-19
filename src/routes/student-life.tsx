import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/home/Nav";
import Footer from "@/components/home/Footer";
import StudentLifeHero from "@/components/student-life/StudentLifeHero";
import DailyLife from "@/components/student-life/DailyLife";
import SportsAthletics from "@/components/student-life/SportsAthletics";
import CreativeArts from "@/components/student-life/CreativeArts";
import ClubsSocieties from "@/components/student-life/ClubsSocieties";
import LeadershipService from "@/components/student-life/LeadershipService";
import HouseSystem from "@/components/student-life/HouseSystem";
import StudentLifeCTA from "@/components/student-life/StudentLifeCTA";

export const Route = createFileRoute("/student-life")({
  component: StudentLifePage,
  head: () => ({
    meta: [
      { title: "Student Life | Dayspring Montessori International School" },
      {
        name: "description",
        content:
          "Discover the vibrant student life at Dayspring Montessori International School. Explore our daily schedule, sports program, creative arts, diverse student clubs, and leadership house system.",
      },
    ],
  }),
});

function StudentLifePage() {
  return (
    <main className="bg-cream text-ink">
      <Nav />
      <StudentLifeHero />
      <DailyLife />
      <SportsAthletics />
      <CreativeArts />
      <ClubsSocieties />
      <LeadershipService />
      <HouseSystem />
      <StudentLifeCTA />
      <Footer />
    </main>
  );
}
