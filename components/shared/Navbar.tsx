"use client";
import { useEffect, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { RiMenu4Line } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState<string>("home");
  const sections: string[] = [
    "home",
    "skills",
    "about",
    "experience",
    "projects",
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <div className="px-6 md:px-10 lg:px-16 py-4 fixed top-0 z-50 w-full">
        <div className="flex items-center justify-between rounded-2xl px-4 py-3 bg-white/5 backdrop-blur border border-primary shadow-[0_0_3px_#1e90ff,0_0_3px_#1e90ff]">
          <figure className="relative w-10 h-8 md:w-12.5 md:h-10 ">
            <Link href="/">
              <Image fill src="/images/logo2.png" alt="" />
            </Link>
          </figure>
          <div>
            <nav
              id="nav"
              className="lg:flex gap-10 text-slate-100 font-medium text-lg hidden nav"
            >
              {sections.map((sec) => (
                <Link
                  key={sec}
                  href={`#${sec}`}
                  className={`capitalize hover:text-primary ${
                    active === sec ? "text-primary" : "text-white"
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
            className="text-slate-100 font-medium px-3 py-2 bg-linear-to-r from-primary to-secondary/70 rounded-md hover:from-secondary hover:to-primary/70 cursor-pointer lg:flex hidden"
          >
            Contact
          </Link>
        </div>
      </div>
      {menuOpen && (
        <aside
          id="mob-nav"
          className={`w-full bg-white/10 z-50 text-white fixed p-5 py-10 flex flex-col gap-5 items-center rounded-3xl border-2 border-t shadow[0_0_#1e90ff,0_0_3px_#1e90ff] border-primary transition-all duration-500 lg:hidden backdrop-blur-2xl  ${
            menuOpen ? "top-18.75 md:top-21.25" : "-top-200"
          } `}
        >
          {sections.map((sec) => (
            <Link
              key={sec}
              href={`#${sec}`}
              className={`capitalize ${
                active === sec ? "text-primary" : "text-white"
              }`}
            >
              {sec}
            </Link>
          ))}
          <Link
            href="#contact"
            className="text-slate-100 font-medium px-3 py-2 bg-linear-to-r from-primary to-secondary/70 rounded-md hover:from-secondary hover:to-primary/70 cursor-pointer lg:hidden"
          >
            Contact
          </Link>
        </aside>
      )}
    </div>
  );
};

export default Navbar;
