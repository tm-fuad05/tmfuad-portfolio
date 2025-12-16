"use client";
import SectionTitle from "../shared/SectionTitile";
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
    <div
      //   initial={{ opacity: 0, y: 100 }}
      //   whileInView={{ opacity: 1, y: 0 }}
      //   viewport={{ once: false }}
      //   transition={{ duration: 1, ease: "easeOut" }}
      id="skills"
      className="flex flex-col items-center"
    >
      <SectionTitle
        title={"Skills"}
        subtitle={
          "A snapshot of the technologies I use to build robust and modern web applications."
        }
      />

      <Marquee speed={30} className="pb-5">
        {icons.map((icon, idx) => (
          <div
            key={idx}
            className={` bg-linear-to-b from-primary/10 to-transparent shadow-primary/50 hover:shadow-md rounded-xl px-4 py-5 md:px-6 md:py-8 group mx-2 md:mx-4 lg:mx- flex flex-col items-center gap-1 md:gap-2 w-26.25 md:w-40 duration-200 ${
              idx % 2 === 0 ? "mt-16" : "mt-0"
            }`}
          >
            <Image
              width={100}
              height={100}
              className="w-10 md:w-17.5 group-hover:scale-110 duration-300"
              src={icon.icon}
              alt={icon.name}
            />
            <p className="text-center pt-2 text-xs md:text-md font-medium text-white">
              {icon.name}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
