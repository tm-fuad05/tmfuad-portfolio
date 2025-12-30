"use client";
import SectionTitle from "../shared/SectionTitle";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  interface Logo {
    logo: string;
    name: string;
  }

  const logos: Logo[] = [
    {
      logo: "/images/html.png",
      name: "HTML",
    },
    {
      logo: "/images/css.png",
      name: "CSS",
    },
    {
      logo: "/images/javascript.png",
      name: "Javascript",
    },
    {
      logo: "/images/react.png",
      name: "React",
    },
    {
      logo: "/images/express.png",
      name: "Express.Js",
    },
    {
      logo: "/images/node.png",
      name: "Node.Js",
    },
    {
      logo: "/images/typescript.png",
      name: "Typescript",
    },
    {
      logo: "/images/mongodb.png",
      name: "MongoDB",
    },
    {
      logo: "/images/firebase.png",
      name: "Firebase",
    },
    {
      logo: "/images/vscode.png",
      name: "VS Code",
    },
    {
      logo: "/images/git.png",
      name: "Git",
    },
    {
      logo: "/images/jwt.svg",
      name: "JWT",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      id="skills"
      className="section flex flex-col items-center"
    >
      <SectionTitle
        title={"Skills"}
        subtitle={
          "A snapshot of the technologies I use to build robust and modern web applications."
        }
      />

      <Marquee speed={80} className="pb-5">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className={` bg-linear-to-b from-primary/20 to-transparent shadow-primary/50 hover:shadow-md rounded-xl px-4 py-5 md:px-6 md:py-8 group mx-2 md:mx-4 flex flex-col items-center gap-1 md:gap-2 w-26.25 md:w-40 duration-200 ${
              idx % 2 === 0 ? "mt-18" : "mt-0"
            }`}
          >
            <figure className="relative w-10 h-10 md:w-17.5 md:h-18">
              <Image
                fill
                className="group-hover:scale-110 duration-300"
                src={logo.logo}
                alt={logo.name}
              />
            </figure>
            <p className="text-center pt-2 text-xs md:text-md font-medium text-white">
              {logo.name}
            </p>
          </div>
        ))}
      </Marquee>
    </motion.div>
  );
};

export default Skills;
