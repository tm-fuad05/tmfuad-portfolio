import Banner from "@/components/sections/Banner";
import Education from "@/components/sections/Education";
import ContactMe from "@/components/sections/ContactMe";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import ScrollToUp from "@/components/shared/ScrollToUp";
import AboutMe from "@/components/sections/AboutMe";

export default async function Home() {
  // Fake Loader (Render on the starting)
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return (
    <div className="flex flex-col gap-30 lg:gap-35">
      <div>
        <Navbar />
        <Banner />
      </div>
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      {/* <FAQ /> */}
      <ContactMe />
      <Footer />
      <ScrollToUp />
    </div>
  );
}
