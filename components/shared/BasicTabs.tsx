"use client";
import { useState } from "react";

const BasicTabs = () => {
  const [isActive, setIsActive] = useState<number>(1);
  const tabActiveClass: string = "border-primary! text-primary! font-semibold!";

  return (
    <div className="flex flex-col gap-3 grow ">
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
      <div>
        <div className="text-paragraph text-sm md:text-md lg:text-[17px] p-1">
          {isActive === 1 && (
            <p>
              I’m{" "}
              <strong className="text-lg lg:text-xl font-bold text-white">
                Tanvir Mahmud Fuad
              </strong>{" "}
              — a Full-Stack Developer specializing in building high-performance
              web applications using the{" "}
              <span className="font-semibold text-blue-400">
                MERN Stack, Next.js, and TypeScript
              </span>
              .
              <br />
              <br />
              Currently transitioning from NoSQL to{" "}
              <span className=" font-medium text-green-400 decoration-2">
                PostgreSQL with Prisma ORM
              </span>
              , I focus on writing type-safe, scalable code and architecting
              robust backends. I thrive on optimizing performance, crafting
              clean UI with{" "}
              <span className="font-semibold text-purple-400">
                Tailwind CSS
              </span>
              , and delivering seamless user experiences through modern web
              standards and thoughtful design principles.
            </p>
          )}
          {isActive === 2 && (
            <div>
              <p>
                I am a results-driven{" "}
                <span className="text-purple-400 font-semibold">
                  Full-Stack Developer
                </span>{" "}
                focused on building high-performance, scalable web applications.
                My technical proficiency spans across various modern tools and
                frameworks, with a core focus on the following areas:
              </p>
              <br />
              <div className="space-y-4">
                {/* Intro Paragraph */}

                {/* Expertise List */}
                <ul className="space-y-2 list-disc pl-4">
                  <li>
                    <span className="text-white font-bold">Core Stack:</span>{" "}
                    Specialized in
                    <span className="font-medium text-white"> Next.js</span>,
                    <span className="font-medium text-white"> React</span> and
                    <span className="font-medium text-white"> TypeScript</span>.
                  </li>

                  <li>
                    <span className="text-white font-bold">Backend & DB:</span>{" "}
                    Architecting with
                    <span className="font-medium text-white">
                      {" "}
                      PostgreSQL (Prisma)
                    </span>
                    ,<span className="font-medium text-white"> MongoDB</span>
                    and
                    <span className="font-medium text-white"> Node.js</span>.
                  </li>

                  <li>
                    <span className="text-white font-bold">
                      Auth & Security:
                    </span>{" "}
                    Expert in
                    <span className="font-medium text-white"> Clerk</span>,
                    <span className="font-medium text-white"> NextAuth</span>,
                    <span className="font-medium text-white"> JWT</span> and
                    <span className="font-medium text-white"> Firebase</span>.
                  </li>

                  <li>
                    <span className="text-white font-bold">Reliability:</span>{" "}
                    Utilizing
                    <span className="font-medium text-white"> Zod</span> for
                    validation,
                    <span className="font-medium text-white">
                      {" "}
                      TanStack Query
                    </span>
                    and
                    <span className="font-medium text-white"> Zustand</span>.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicTabs;
