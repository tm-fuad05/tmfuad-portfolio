"use client";
import { useState } from "react";
import { motion } from "framer-motion";
// react icons
import { FaChevronDown } from "react-icons/fa6";
import SectionTitle from "../shared/SectionTitle";
import { accordionData } from "../../data/accordionData";
import Lottie from "lottie-react";
import faq from "@/data/faq.json";

const FAQ = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<number | null>();

  const handleClick = (index: number) =>
    setIsAccordionOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <section id="faq" className="scroll-mt-0">
      <SectionTitle
        title={"frequently asked questions"}
        subtitle={
          "A short collection of the questions I get asked often — answered clearly for your convenience"
        }
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="section px-6 md:px-10 lg:px-16"
      >
        <div className="flex justify-between items-center">
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
                      isAccordionOpen === index && "text-primary!"
                    } text-white py-4 font-semibold text-[17px] md:text-lg lg:text-xl group-hover:text-primary transition-all duration-300 `}
                  >
                    {according.title}
                  </h2>
                  <p>
                    <FaChevronDown
                      className={`text-[1.2rem] text-white transition-all duration-300 group-hover:text-primary ${
                        isAccordionOpen === index && "rotate-180 text-primary!"
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
                  <p className="text-paragraph font-medium text-sm  lg:text-md overflow-hidden ">
                    {according.description}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden lg:block w-110"
          >
            <Lottie animationData={faq} loop={true}></Lottie>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
