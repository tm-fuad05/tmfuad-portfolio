import AboutMe from "@/components/sections/AboutMe";
import Banner from "@/components/sections/Banner";
import Skills from "@/components/sections/Skills";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col gap-30 lg:gap-56">
      <div>
        <Navbar />
        <Banner />
      </div>
      <Skills />
      <AboutMe />
    </div>
  );
}
