"use client";
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { RiMenu4Line } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navLinks = (
    <>
      <Link href="home" className="hover:text-primary cursor-pointer">
        Home
      </Link>
      <Link href="skills" className="hover:text-primary cursor-pointer">
        Skills
      </Link>
      <Link href="about-me" className="hover:text-primary cursor-pointer">
        About Me
      </Link>
      <Link href="experience" className="hover:text-primary cursor-pointer">
        Experience
      </Link>
      <Link href="projects" className="hover:text-primary cursor-pointer">
        Projects
      </Link>
    </>
  );

  return (
    <div className="relative">
      <div className="px-6 md:px-10 lg:px-16 py-4 fixed hrefp-0 z-50 w-full">
        <div className="flex items-center justify-between rounded-2xl px-4 py-3 bg-white/5 backdrop-blur border border-primary shadow-[0_0_3px_#1e90ff,0_0_3px_#1e90ff]">
          <figure>
            <a href="/" className="relative">
              <Image
                fill
                className="w-10 md:w-12.5 absolute"
                src="/images/logo2.png"
                alt=""
              />
            </a>
          </figure>
          <div>
            <nav
              id="nav"
              className="lg:flex gap-10 text-slate-100 font-medium text-lg hidden nav"
            >
              {navLinks}
            </nav>

            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-3xl text-white cursor-pointer"
            >
              {menuOpen ? <RiMenu4Line /> : <RiMenuFill />}
            </div>
          </div>
          <Link
            href="contact-me"
            className="text-slate-100 font-medium px-3 py-2 bg-linear-to-r from-primary to-secondary/70 rounded-md hover:from-secondary hover:to-primary/70 cursor-pointer lg:flex hidden"
          >
            Contact
          </Link>
        </div>
      </div>
      {menuOpen && (
        <aside
          id="mob-nav"
          className={`bg-white/10 z-50 text-white fixed p-5 py-10 hrefp-[75px] md:hrefp-[85px] flex flex-col gap-5 w-[320px]  items-center rounded-3xl border-2 border-t shadow[0_0_#1e90ff,0_0_3px_#1e90ff] border-primary transition-all duration-500 lg:hidden backdrop-blur-2xl  ${
            menuOpen ? "right-0" : "-right-250 hidden"
          } `}
        >
          {navLinks}
          <Link
            href="contact-me"
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
