import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Highlights from "@/components/highlights";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Services />
      <Highlights />
      <Experience />
      <Contact />
    </main>
  );
}
