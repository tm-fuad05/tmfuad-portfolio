"use client";
import SectionTitle from "@/components/shared/SectionTitle";
import { motion } from "framer-motion";
import Tabs from "@/sections/tech-stack/Tabs";
import { useState, useEffect } from "react";
import Stacks from "./Stacks";

export interface Logo {
  logo: string;
  name: string;
  category: string | string[];
}

const logos: Logo[] = [
  {
    logo: "/images/icons/javascript.png",
    name: "Javascript",
    category: ["Frontend", "Backend"],
  },
  {
    logo: "/images/icons/typescript.png",
    name: "Typescript",
    category: ["Frontend", "Backend"],
  },
  {
    logo: "/images/icons/react.png",
    name: "React",
    category: "Frontend",
  },
  {
    logo: "/images/icons/nextjs.png",
    name: "Next JS",
    category: ["Frontend", "Backend"],
  },
  {
    logo: "/images/icons/tailwind.png",
    name: "Tailwind",
    category: "Frontend",
  },
  {
    logo: "/images/icons/motion.png",
    name: "Framer Motion",
    category: "Frontend",
  },
  {
    logo: "/images/icons/node.png",
    name: "Node.js",
    category: "Backend",
  },
  {
    logo: "/images/icons/express.png",
    name: "Express.js",
    category: "Backend",
  },
  {
    logo: "/images/icons/mongodb.png",
    name: "MongoDB",
    category: "Database",
  },
  {
    logo: "/images/icons/postgresql.png",
    name: "PostgreSQL",
    category: "Database",
  },
  {
    logo: "/images/icons/neon.png",
    name: "Neon",
    category: "Database",
  },
  {
    logo: "/images/icons/monogoose.webp",
    name: "Mongoose",
    category: ["Backend", "Database", "ODM & ORM"],
  },
  {
    logo: "/images/icons/prisma.png",
    name: "Prisma",
    category: ["Backend", "Database", "ODM & ORM"],
  },
  {
    logo: "/images/icons/supabase.svg",
    name: "Supabase",
    category: ["Backend", "Database", "Authentication"],
  },
  {
    logo: "/images/icons/firebase.png",
    name: "Firebase",
    category: ["Backend", "Database", "Authentication"],
  },
  {
    logo: "/images/icons/jwt.svg",
    name: "JWT",
    category: ["Backend", "Authentication"],
  },
  {
    logo: "/images/icons/betterauth.webp",
    name: "BetterAuth",
    category: ["Backend", "Authentication"],
  },
  {
    logo: "/images/icons/clerk.png",
    name: "Clerk",
    category: ["Frontend", "Authentication"],
  },
  {
    logo: "/images/icons/zustand.svg",
    name: "Zustand",
    category: ["Frontend", "State & Validation"],
  },
  {
    logo: "/images/icons/tanstack.png",
    name: "Tanstack",
    category: ["Frontend", "State & Validation"],
  },
  {
    logo: "/images/icons/zod.png",
    name: "Zod",
    category: ["Frontend", "Backend", "State & Validation"],
  },
  {
    logo: "/images/icons/postman.png",
    name: "Postman",
    category: ["Backend", "Tools"],
  },
  {
    logo: "/images/icons/git.png",
    name: "Git",
    category: "Tools",
  },
  {
    logo: "/images/icons/github.webp",
    name: "Github",
    category: "Tools",
  },
  {
    logo: "/images/icons/vercel.png",
    name: "Vercel",
    category: "Tools",
  },
  {
    logo: "/images/icons/render.jpg",
    name: "Render",
    category: "Tools",
  },
  {
    logo: "/images/icons/netlify.webp",
    name: "Netlify",
    category: "Tools",
  },
];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [activeLogo, setActiveLogo] = useState<string | null>(null);

  // Function Call when resize window
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setActiveLogo(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogoClick = (name: string) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setActiveLogo((prev) => (prev === name ? null : name));
    }
  };

  return (
    <section id="tech-stack" className="scroll-mt-0">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title={"Tech Stack"}
          subtitle={
            "A snapshot of the technologies I use to build robust and modern web applications."
          }
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section flex flex-col items-center lg:items-start"
        >
          {/* Tabs */}
          <Tabs
            logos={logos}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {/* Stacks Component */}
          <Stacks
            logos={logos}
            activeLogo={activeLogo}
            activeTab={activeTab}
            handleLogoClick={handleLogoClick}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
