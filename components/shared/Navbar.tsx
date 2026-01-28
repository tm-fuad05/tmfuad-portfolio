"use client";
import { useEffect, useRef, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { RiMenu4Line } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { Button as AnimatedNav } from "../ui/navbar-moving-border";
import { SparklesCore } from "../ui/sparkles";

const Navbar = () => {
  const [active, setActive] = useState<string>("home");

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const asideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (asideRef.current && !asideRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

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
      { rootMargin: "-50% 0px -50% 0px" },
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

  return (
    <div className="relative">
      <div className="px-6 md:px-10 lg:px-16 fixed top-5 z-50 w-full">
        <AnimatedNav className="flex items-center justify-between px-4 border border-slate-800">
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
            className="text-slate-100 font-medium text-lg px-3 py-2 bg-linear-to-br from-primary to-secondary shadow-lg shadow-blue-500/20 rounded-md hover:from-secondary hover:to-primary/70 cursor-pointer lg:flex hidden"
          >
            Contact
          </Link>
        </AnimatedNav>
      </div>

      <aside
        ref={asideRef}
        id="mob-nav"
        className={`w-8/12 md:w-5/12 h-full bg-[#111827] z-50 text-white fixed flex flex-col gap-2 transition duration-300 lg:hidden  ${
          menuOpen ? "translate-x-0 " : "-translate-x-200"
        } `}
      >
        <div className="flex justify-between items-center p-3 border-b">
          <div className="relative w-10 h-8 md:w-12.5 md:h-10">
            <Image fill src="/images/logo2.png" alt="" />
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="border border-white rounded-sm p-1 cursor-pointer"
          >
            <RxCross2 size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-1 overflow-y-auto p-3">
          {sections.map((sec) => (
            <Link
              key={sec}
              href={`#${sec}`}
              onClick={() => setMenuOpen(false)}
              className={`${
                sec === "faq" ? "uppercase" : "capitalize"
              } pl-2 py-2 rounded-sm ${active === sec && "bg-primary"}`}
            >
              {sec}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="w-fit text-slate-100 font-medium px-3 py-2 bg-linear-to-r from-primary to-secondary/70 rounded-md hover:from-secondary hover:to-primary/70 cursor-pointer lg:hidden"
          >
            Contact
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
