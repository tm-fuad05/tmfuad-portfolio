"use client";
import SectionTitle from "../shared/SectionTitle";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  type Icons = {
    icon: string;
    name: string;
  };

  const icons: Icons[] = [
    {
      icon: "/images/html.png",
      name: "HTML",
    },
    {
      icon: "/images/css.png",
      name: "CSS",
    },
    {
      icon: "/images/javascript.png",
      name: "Javascript",
    },
    {
      icon: "/images/react.png",
      name: "React",
    },
    {
      icon: "/images/express.png",
      name: "Express.Js",
    },
    {
      icon: "/images/node.png",
      name: "Node.Js",
    },
    {
      icon: "/images/typescript.png",
      name: "Typescript",
    },
    {
      icon: "/images/mongodb.png",
      name: "MongoDB",
    },
    {
      icon: "/images/firebase.png",
      name: "Firebase",
    },
    {
      icon: "/images/vscode.png",
      name: "VS Code",
    },
    {
      icon: "/images/git.png",
      name: "Git",
    },
    {
      icon: "/images/jwt.svg",
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
        {icons.map((icon, idx) => (
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
                src={icon.icon}
                alt={icon.name}
              />
            </figure>
            <p className="text-center pt-2 text-xs md:text-md font-medium text-white">
              {icon.name}
            </p>
          </div>
        ))}
      </Marquee>
    </motion.div>
  );
};

export default Skills;
