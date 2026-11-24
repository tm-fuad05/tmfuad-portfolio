"use client";
import SectionTitle from "@/components/shared/SectionTitle";
import { motion } from "framer-motion";
import Tabs from "@/sections/tech-stack/Tabs";
import { useState, useEffect } from "react";
import Stacks from "./Stacks";
import { logos } from "@/data/techStackData";

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
