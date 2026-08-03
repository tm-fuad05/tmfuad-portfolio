"use client";
import { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { RiMenu4Line } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

import { SendHorizontal } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState<string>("home");

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navLinks: string[] = [
    "home",
    "about",
    "skills",
    "projects",
    "education",
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

    navLinks.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <div className="px-6 md:px-10 lg:px-16 fixed top-5 z-40 w-full">
        <div
          data-site-navbar
          className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 flex items-center justify-between px-6 py-3 md:py-4 bg-slate-950/40 backdrop-blur-md border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300"
        >
          {/* Logo Section */}
          <figure className="relative w-10 h-7 md:w-12 md:h-8 transition-transform duration-300 hover:scale-105">
            <Link href="#home" className="block w-full h-full">
              <Image
                fill
                src="/images/logo2.png"
                alt="Logo"
                className="object-contain"
              />
            </Link>
          </figure>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-8">
            <nav
              id="nav"
              className="hidden lg:flex items-center gap-8 text-slate-200 font-medium text-base tracking-wide"
            >
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={`#${link}`}
                  className={`relative py-1 transition-colors duration-300 ${
                    link === "faq" ? "uppercase" : "capitalize"
                  } ${
                    active === link
                      ? "text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]"
                      : "text-slate-300 hover:text-white"
                  } group`}
                >
                  {link}
                  {/* Premium Bottom Glow Line */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-linear-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300 ${
                      active === link ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle Button */}
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-2xl text-slate-200 hover:text-white cursor-pointer p-1.5 rounded-l transition-all duration-200"
            >
              {/* Icon logic fixed: Show close icon when open, menu icon when closed */}
              {menuOpen ? <RiCloseLine /> : <RiMenu4Line />}
            </div>
          </div>

          {/* Action Button (CTA) */}
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-2.5 text-white font-medium text-sm px-5 py-2.5 bg-linear-to-r from-primary to-secondary rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_25px_rgba(59,130,246,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-white/10"
          >
            <SendHorizontal size={15} className="animate-pulse" />
            <span>Get In Touch</span>
          </Link>
        </div>
      </div>

      <aside
        id="mob-nav"
        className={`fixed top-0 left-0 h-full w-3/4 max-w-sm z-50 transition-all duration-500 ease-in-out lg:hidden
    bg-slate-950/80 backdrop-blur-2xl border-r border-white/10 shadow-2xl overflow-y-auto
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
          {navLinks.map((link, idx) => (
            <Link
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`
          group relative px-5 py-3 rounded-xl text-lg font-semibold transition-all duration-300
          ${
            active === link
              ? "bg-primary/20 text-primary border border-primary/20"
              : "text-slate-400 hover:bg-white/5 hover:text-white"
          }
          ${link === "faq" ? "uppercase" : "capitalize"}
        `}
            >
              <span className="relative z-10 flex justify-between items-center">
                {link}
                <span
                  className={`w-1.5 h-1.5 rounded-full bg-primary transition-all duration-500 ${active === link ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                />
              </span>

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
              className="flex items-center justify-center gap-2 w-full py-4 px-6 font-bold text-white rounded-lg 
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
