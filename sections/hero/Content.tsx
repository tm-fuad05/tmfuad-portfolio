import ButtonSecondary from "@/components/shared/ButtonSecondary";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoMdCloudDownload } from "react-icons/io";
import { MdRocketLaunch } from "react-icons/md";
import { RiReactjsFill } from "react-icons/ri";
import { Typewriter } from "react-simple-typewriter";
import { SocialIcon } from "./Hero";

export default function Content({
  socialIcons,
}: {
  socialIcons: SocialIcon[];
}) {
  // Download Resume
  const handlePDFDownload = () => {
    const link = document.createElement("a");
    link.href = "/tmfuad_resume.pdf";
    link.download = "tmfuad_resume";
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.div
      className="flex flex-col items-center md:items-start gap-3 md:w-7/12"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2">
        <h5 className="text-slate-100 font-medium text-[15px] md:text-lg lg:text-xl">
          Hello, I'm Md. Tanvir Mahmud
          <span className="bg-linear-to-r from-secondary backdrop-blur text-white py-1 pl-2 pr-3 ml-1">
            Fuad
          </span>
        </h5>
        <RiReactjsFill
          className=" text-[#61DBFB] animate-[spin_4s_linear_infinite]"
          size={30}
        />
      </div>
      {/* Title */}
      <div>
        <h1 className="bg-clip-text text-transparent bg-linear-to-b from-neutral-200 to-neutral-500 bg-opacity-50 capitalize text-center md:text-left font-extrabold text-4xl md:text-5xl lg:text-7xl h-18.75 md:h-25 lg:h-36">
          <Typewriter
            words={[
              "Software Developer",
              "Next.js & TS Specialist",
              "Scalable Database Architect",
            ]}
            loop={0}
            typeSpeed={40}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h1>
      </div>
      <p className="text-paragraph text-sm lg:text-[16px] text-center md:text-left md:pr-5">
        I develop high-performance, secure, and user-friendly applications with
        a focus on clean architecture and seamless functionality. Dedicated to
        building innovative solutions that enhance user experiences and drive
        efficiency.
      </p>

      {/* Social Links */}
      <div className="flex gap-2 text-primary">
        {socialIcons.map((i, idx) => (
          <a
            key={idx}
            href={i.link}
            target="_blank"
            className=" border-2 p-1.5 hover:shadow-sm hover:shadow-primary text-xl md:text-2xl"
          >
            {i.icon}
          </a>
        ))}
      </div>
      {/* Button */}
      <div className="flex gap-3 mt-5">
        <button
          onClick={handlePDFDownload}
          className=" bg-linear-to-r from-secondary to-transparent text-white hover:bg-linear-to-r hover:from-secondary hover:to-primary transition duration-300  px-4 py-2 font-semibold  cursor-pointer flex items-center gap-2"
        >
          <IoMdCloudDownload /> Resume
        </button>
        <Link href="#projects">
          <ButtonSecondary>
            <MdRocketLaunch /> view projects
          </ButtonSecondary>
        </Link>
      </div>
    </motion.div>
  );
}
