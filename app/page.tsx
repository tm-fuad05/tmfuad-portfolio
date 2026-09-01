import Banner from "@/sections/Banner";
import Education from "@/sections/Education";
import ContactMe from "@/sections/ContactMe";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import ScrollToUp from "@/components/shared/ScrollToUp";
import AboutMe from "@/sections/AboutMe";

export default async function Home() {
  // Fake Loader (Render on the starting)
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return (
    <div className="flex flex-col gap-30 lg:gap-55">
      <div>
        <Navbar />
        <Banner />
      </div>
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <ContactMe />
      <Footer />
      <ScrollToUp />
    </div>
  );
}
