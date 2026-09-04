"use client";

import { useState, useEffect } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import Picture from "./Picture";
import Content from "./Content";

const AboutMe = () => {
  const [isImgActive, setIsImgActive] = useState(false);
  const [isIdeActive, setIsIdeActive] = useState(false);

  const handleImgClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setIsImgActive((prev) => !prev);
    }
  };
  const handleIdeClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setIsIdeActive((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsImgActive(false);
        setIsIdeActive(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="about" className="scroll-mt-0">
      {/* Optimized Hardware-Accelerated Ambient Background Glows */}
      <div
        className="pointer-events-none absolute top-1/4 left-10 size-80 sm:size-96  bg-primary/20 blur-[90px] transform-gpu will-change-transform animate-pulse"
        style={{ animationDuration: "6s" }}
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-10 size-80 sm:size-96  bg-purple-600/15 blur-[100px] transform-gpu will-change-transform animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      <div className="w-full max-w-7xl mx-auto relative z-10 px-6 lg:px-8">
        {/* Section Header */}
        <SectionTitle
          title="About Me"
          subtitle="Architecting Scalable Systems & Type-Safe Web Applications"
        />

        {/* SIDE-BY-SIDE GRID CONTAINER (Left: Profile Image UI | Right: Streamlined Code Plate) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* LEFT COLUMN: Profile Image with Premium UI Card */}
          <Picture isImgActive={isImgActive} handleImgClick={handleImgClick} />

          {/* RIGHT COLUMN: Streamlined IDE Code Workbench */}
          <Content isIdeActive={isIdeActive} handleIdeClick={handleIdeClick} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
