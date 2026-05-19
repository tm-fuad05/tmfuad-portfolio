import AboutMe from "@/components/sections/AboutMe";
import Banner from "@/components/sections/Banner";
import Certification from "@/components/sections/Certification";
import ContactMe from "@/components/sections/ContactMe";
import Experience from "@/components/sections/Experience";
import FAQ from "@/components/sections/FAQ";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import ScrollToUp from "@/components/shared/ScrollToUp";

export default async function Home() {
  // Fake Loader (Render on the starting)
  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });

  return (
    <div className="flex flex-col gap-30 lg:gap-56">
      <div>
        <Navbar />
        <Banner />
      </div>
      <Skills />
      <AboutMe />
      {/* <Experience /> */}
      <Projects />
      <FAQ />
      {/* <Certification /> */}
      <ContactMe />
      <Footer />
      <ScrollToUp />
    </div>
  );
}
