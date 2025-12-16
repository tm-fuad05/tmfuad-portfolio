"use client";
import { useState } from "react";

const BasicTabs = () => {
  const [isActive, setIsActive] = useState<number>(1);
  const tabActiveClass: string = "border-primary! text-primary! font-semibold!";

  return (
    <div className="flex flex-col gap-3 grow">
      {/* Tab Item */}
      <ul className="flex items-center gap-5 border-b border-gray-300/30">
        <li
          className={`${
            isActive === 1 && tabActiveClass
          } px-6 py-2 border-b text-white transition duration-300 border-transparent cursor-pointer`}
          onClick={() => setIsActive(1)}
        >
          {" "}
          Profile
        </li>
        <li
          className={`${
            isActive === 2 && tabActiveClass
          } px-6 py-2 border-b text-white transition duration-300 border-transparent cursor-pointer`}
          onClick={() => setIsActive(2)}
        >
          {" "}
          Expertise
        </li>
      </ul>
      {/* Tab Content */}
      <div className=" grow ">
        <p className="text-paragraph text-sm md:text-md lg:text-[15px]">
          {isActive === 1 && (
            <p>
              I’m{" "}
              <strong className="text-lg lg:text-xl">Tanvir Mahmud Fuad</strong>{" "}
              — a dedicated Frontend Web Developer with a strong focus on
              creating modern, responsive, and user-friendly interfaces. I work
              mainly with React, JavaScript, and Tailwind CSS, turning ideas
              into polished digital experiences. <br />I enjoy crafting clean UI
              layouts, optimizing performance, and improving overall user
              experience through thoughtful design principles. Whether it’s
              building reusable components or integrating API-driven features,
              I’m always excited to explore new ways to make the web more
              intuitive and enjoyable. <br />
              My goal is to grow as a developer, build meaningful projects, and
              collaborate on creative, impactful solutions.
            </p>
          )}
          {isActive === 2 && (
            <p>
              I specialize in building fast, scalable, and user-focused web
              applications using the MERN Stack. My expertise includes crafting
              clean UI/UX, structuring efficient frontend architecture, and
              developing secure, optimized backend APIs. I’m experienced in
              component-driven development, RESTful integrations, authentication
              systems, and database design with MongoDB. I enjoy transforming
              complex ideas into elegant digital solutions—focusing on
              performance, responsiveness, and smooth user experience.
              Continually learning and improving, I love working with modern
              tools and best practices to deliver production-ready web
              applications.
            </p>
          )}
        </p>
      </div>
    </div>
  );
};

export default BasicTabs;
