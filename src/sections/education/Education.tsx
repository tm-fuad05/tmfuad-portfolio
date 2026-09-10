"use client";

import { useState } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import { educationEntries } from "@/data/educationData";
import Tabs from "./Tabs";
import TabContent from "./TabContent";
import { GraduationCapIcon } from "lucide-react";

const Education = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeEntry = educationEntries[selectedIndex] || educationEntries[0];

  return (
    <section id="education" className="scroll-mt-10 relative">
      {/* Background Ambient Glow */}
      <div className="hidden lg:block pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96  bg-primary/10 blur-[140px]" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Education"
          subtitle="Academic foundation shaping my expertise in computer science and software engineering."
          icon={
            <GraduationCapIcon className="size-9 text-white md:size-10 lg:size-11" />
          }
        />

        <div className="mt-10">
          {/* UNIFIED MILESTONE INSPECTOR SHELL */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* LEFT: Milestone Selector Tabs (4 Cols) */}
            <Tabs
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />

            {/* RIGHT: Dynamic Detail Display Panel (8 Cols) */}
            <TabContent
              selectedIndex={selectedIndex}
              activeEntry={activeEntry}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
