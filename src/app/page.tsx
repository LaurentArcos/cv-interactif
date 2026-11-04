import { Contact } from "@/components/cv/Contact";
import { Experience } from "@/components/cv/Experience";
import { Hero } from "@/components/cv/Hero";
import { Projects } from "@/components/cv/Projects";
import { Education, Life } from "@/components/cv/Rest";
import { Skills } from "@/components/cv/Skills";

export default function Page() {
  return (
    <main id="top">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Life />
      <Contact />
    </main>
  );
}
