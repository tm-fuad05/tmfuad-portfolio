"use client";
import { useState } from "react";
import { motion } from "framer-motion";
// react icons
import { FaChevronDown } from "react-icons/fa6";
import SectionTitle from "../shared/SectionTitle";
import { accordionData } from "../../data/accordionData";

const FAQ = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<number | null>();

  const handleClick = (index: number) =>
    setIsAccordionOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="section px-6 md:px-10 lg:px-16"
      id="faq"
    >
      <SectionTitle
        title={"frequently asked questions"}
        subtitle={
          "A short collection of the questions I get asked often — answered clearly for your convenience"
        }
      />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col w-full lg:w-1/2"
      >
        {accordionData?.map((according, index) => (
          <article key={index} className="border-t border-slate-700 ">
            <div
              className="flex gap-2 cursor-pointer items-center justify-between w-full group"
              onClick={() => handleClick(index)}
            >
              <h2
                className={`${
                  isAccordionOpen === index && "text-main!"
                } text-white py-3 font-semibold text-[1.2rem] group-hover:text-main transition-all duration-300 `}
              >
                {according.title}
              </h2>
              <p>
                <FaChevronDown
                  className={`text-[1.2rem] text-white transition-all duration-300 group-hover:text-main ${
                    isAccordionOpen === index && "rotate-180 text-main!"
                  }`}
                />
              </p>
            </div>
            <div
              className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                isAccordionOpen === index
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="text-paragraph font-semibold text-[0.9rem] overflow-hidden">
                {according.description}
              </p>
            </div>
          </article>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FAQ;
