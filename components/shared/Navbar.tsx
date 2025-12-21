"use client";
import { useEffect, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { RiMenu4Line } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { Button as AnimatedNav } from "../ui/navbar-moving-border";
import { SparklesCore } from "../ui/sparkles";

const Navbar = () => {
  const [active, setActive] = useState<string>("home");
  const sections: string[] = [
    "home",
    "skills",
    "about",
    "experience",
    "projects",
    "faq",
    "certifications",
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // setActive("") when arrived at contact section
            if (entry.target.id === "contact") {
              setActive("");
              history.replaceState(null, "", `#${entry.target.id}`);
            } else {
              setActive(entry.target.id);
              history.replaceState(null, "", `#${entry.target.id}`);
            }
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    // Identify Contact section
    const unActive = document.getElementById("contact");
    if (unActive) observer.observe(unActive);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <div className="px-6 md:px-10 lg:px-16 fixed top-5 z-50 w-full">
        <AnimatedNav className="flex items-center justify-between px-4 border border-slate-800">
          <div className="w-full absolute inset-0 -z-10">
            <SparklesCore
              id="sparkles-nav"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#2563eb"
            />
          </div>
          <figure className="relative w-10 h-7 md:w-12.5 md:h-10 ">
            <Link href="#home">
              <Image fill src="/images/logo2.png" alt="" />
            </Link>
          </figure>
          <div>
            <nav
              id="nav"
              className="lg:flex gap-10 text-slate-100 font-medium text-lg hidden"
            >
              {sections.map((sec) => (
                <Link
                  key={sec}
                  href={`#${sec}`}
                  className={`${
                    sec === "faq" ? "uppercase" : "capitalize"
                  } before:w-0 hover:before:w-full before:bg-blue-400 before:h-0.5 before:transition-all before:duration-300 before:absolute relative before:rounded-full before:-bottom-0.5  hover:text-blue-400 transition-all duration-300 before:left-0 ${
                    active === sec && "text-blue-400"
                  }`}
                >
                  {sec}
                </Link>
              ))}
            </nav>

            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-3xl text-white cursor-pointer"
            >
              {menuOpen ? <RiMenu4Line /> : <RiMenuFill />}
            </div>
          </div>
          <Link
            href="#contact"
            className="text-slate-100 font-medium text-lg px-3 py-2 bg-linear-to-r from-main to-muted/70 rounded-md hover:from-muted hover:to-main/70 cursor-pointer lg:flex hidden"
          >
            Contact
          </Link>
        </AnimatedNav>
      </div>
      {menuOpen && (
        <aside
          id="mob-nav"
          className={`w-8/12 md:w-5/12 h-full bg-[#111827] z-50 text-white fixed p-5 pt-7 flex flex-col gap-2 transition-transform duration-500 lg:hidden overflow-y-auto ${
            menuOpen ? "opacity-100" : "opacity-0"
          } `}
        >
          <div className="flex justify-between items-center pb-3 border-b ">
            <div className="relative w-10 h-8 md:w-12.5 md:h-10">
              <Image fill src="/images/logo2.png" alt="" />
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="border border-white rounded-sm p-1"
            >
              <RxCross2 size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {sections.map((sec) => (
              <Link
                key={sec}
                href={`#${sec}`}
                onClick={() => setMenuOpen(false)}
                className={`${
                  sec === "faq" ? "uppercase" : "capitalize"
                } pl-2 py-2 rounded-sm ${active === sec && "bg-main"}`}
              >
                {sec}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="w-fit text-slate-100 font-medium px-3 py-2 bg-linear-to-r from-main to-muted/70 rounded-md hover:from-muted hover:to-main/70 cursor-pointer lg:hidden"
            >
              Contact
            </Link>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Navbar;
