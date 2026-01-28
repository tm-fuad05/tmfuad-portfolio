"use client";
import { useEffect, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { RiMenu4Line } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { Button as AnimatedNav } from "../ui/navbar-moving-border";

import { SendHorizontal } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState<string>("home");

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

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
            className="text-slate-100 font-medium text-lg px-4 py-2 bg-linear-to-br from-primary to-secondary shadow-lg shadow-blue-500/20 rounded-md hover:from-secondary hover:to-primary/70 cursor-pointer lg:flex justify-between items-center gap-2 hidden"
          >
            <SendHorizontal size={17} />
            <span> Get In Touch</span>
          </Link>
        </AnimatedNav>
      </div>

      <aside
        id="mob-nav"
        className={`fixed top-0 left-0 h-full w-3/4 max-w-sm z-50 transition-all duration-500 ease-in-out lg:hidden
    bg-slate-950/80 backdrop-blur-2xl border-r border-white/10 shadow-2xl
    ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"}
  `}
      >
        {/* ১. Header Area */}
        <div className="flex justify-between items-center p-6 border-b border-white/5">
          <div className="relative w-12 h-10 group">
            <Image
              fill
              src="/images/logo2.png"
              alt="Logo"
              className="object-contain transition-transform group-hover:scale-110"
            />
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 hover:border-white/20 active:scale-90"
          >
            <RxCross2 size={24} />
          </button>
        </div>

        {/* ২. Nav Links Area */}
        <div className="flex flex-col gap-2 p-6 overflow-y-auto">
          {sections.map((sec, idx) => (
            <Link
              key={sec}
              href={`#${sec}`}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`
          group relative px-5 py-3 rounded-xl text-lg font-semibold transition-all duration-300
          ${
            active === sec
              ? "bg-primary/20 text-primary border border-primary/20"
              : "text-slate-400 hover:bg-white/5 hover:text-white"
          }
          ${sec === "faq" ? "uppercase" : "capitalize"}
        `}
            >
              <span className="relative z-10 flex justify-between items-center">
                {sec}
                <span
                  className={`w-1.5 h-1.5 rounded-full bg-primary transition-all duration-500 ${active === sec ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                />
              </span>

              {/* হোভার ইফেক্ট (v4 এনিমেটেড গ্রেডিয়েন্ট) */}
              <div
                className={`absolute inset-0 rounded-2xl bg-linear-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
              />
            </Link>
          ))}

          {/* ৩. Contact Button (Bottom) */}
          <div className="mt-6 pt-6 border-t border-white/15">
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 px-6 font-bold text-white rounded-xl 
          bg-linear-to-r from-primary to-blue-600 shadow-lg shadow-primary/20
          hover:shadow-primary/40 active:scale-95 transition-all duration-300"
            >
              <SendHorizontal size={16} />
              <span> Get In Touch</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* ৫. Background Overlay (বাকি স্ক্রিন অন্ধকার করার জন্য) */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-500"
        />
      )}
    </div>
  );
};

export default Navbar;
