import Education from "@/sections/education/Education";
import ContactMe from "@/sections/contact-me/ContactMe";
import Projects from "@/sections/projects/Projects";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import ScrollToUp from "@/components/shared/ScrollToUp";
import AboutMe from "@/sections/about-me/AboutMe";
import TechStack from "@/sections/tech-stack/TechStack";
import Hero from "@/sections/hero/Hero";
import Blog from "@/sections/blog/Blog";

export default async function Home() {
  return (
    <>
      <div className="flex flex-col gap-30 lg:gap-55">
        <div>
          <Navbar />
          <Hero />
        </div>
        <AboutMe />
        <TechStack />
        <Projects />
        {/* <Blog /> */}
        <Education />
        <ContactMe />
        <Footer />
        <ScrollToUp />
      </div>
    </>
  );
}
