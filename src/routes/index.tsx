import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Work } from "@/components/portfolio/Work";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Hamid Raza — Full-Stack & ML Developer" },
      {
        name: "description",
        content:
          "Portfolio of Muhammad Hamid Raza — Full-Stack and Machine Learning developer building intelligent web systems from model training to production.",
      },
      { property: "og:title", content: "Muhammad Hamid Raza — Full-Stack & ML Developer" },
      {
        property: "og:description",
        content:
          "Selected work, skills, and experience of Muhammad Hamid Raza, a Full-Stack & ML developer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Skills />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
