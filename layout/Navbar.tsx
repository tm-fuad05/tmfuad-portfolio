"use client";
import { useEffect, useState, useRef } from "react";
import { RiCloseLine } from "react-icons/ri";
import { RiMenu4Line } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

import { SendHorizontal } from "lucide-react";
import Logo from "@/components/shared/Logo";
import ButtonPrimary from "@/components/shared/ButtonPrimary";
import { useLenis } from "lenis/react";

const Navbar = () => {
  const lenis = useLenis();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks: string[] = ["about", "tech-stack", "projects", "education"];
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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "auto";
      lenis?.start();
    }
  }, [menuOpen, lenis]);

  return (
    <div className="relative">
      <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 lg:px-8 z-50 pointer-events-none">
        <div
          data-site-navbar
          className="relative pointer-events-auto w-full flex items-center justify-between px-6 py-3 md:py-4 bg-slate-950/40 backdrop-blur-md border border-white/8  shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300"
        >
          {/* Logo Section */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="flex items-center gap-8">
            <nav
              id="nav"
              className="hidden lg:flex items-center gap-8 text-slate-200 font-medium text-base tracking-wide absolute left-1/2 -translate-x-1/2"
            >
              {navLinks.map((link) => {
                const l = link?.split("-");
                return (
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
                    {l?.[0]} {l?.[1]}
                    {/* Premium Bottom Glow Line */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-linear-to-r from-blue-500 to-cyan-400  transition-all duration-300 ${
                        active === link ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Toggle Button */}
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-2xl text-slate-200 hover:text-white cursor-pointer p-1.5 -l transition-all duration-200"
            >
              {/* Icon logic fixed: Show close icon when open, menu icon when closed */}
              {menuOpen ? <RiCloseLine /> : <RiMenu4Line />}
            </div>
          </div>

          <ButtonPrimary hidden={true}>
            <SendHorizontal size={15} className="animate-pulse" />
            <span>Get In Touch</span>
          </ButtonPrimary>
        </div>
      </div>

      <aside
        data-lenis-prevent
        id="mob-nav"
        className={`fixed top-0 left-0 h-full w-3/4 max-w-sm z-60 transition-all duration-500 ease-in-out lg:hidden
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
            className="w-10 h-10 flex items-center justify-center  bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 hover:border-white/20 active:scale-90"
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
          group relative px-5 py-3  text-lg font-semibold transition-all duration-300
          ${
            active === link
              ? "bg-primary/20 text-primary border border-primary/20"
              : "text-paragraph hover:bg-white/5 hover:text-white"
          }
          ${link === "faq" ? "uppercase" : "capitalize"}
        `}
            >
              <span className="relative z-10 flex justify-between items-center">
                {link}
                <span
                  className={`w-1.5 h-1.5  bg-primary transition-all duration-500 ${active === link ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                />
              </span>

              <div
                className={`absolute inset-0  bg-linear-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
              />
            </Link>
          ))}

          {/* ৩. Contact Button (Bottom) */}
          <div className="mt-6 pt-6 border-t border-white/15">
            <Link href="#contact" onClick={() => setMenuOpen(false)}>
              <ButtonPrimary sw="full">
                <SendHorizontal size={16} />
                <span> Get In Touch</span>
              </ButtonPrimary>
            </Link>
          </div>
        </div>
      </aside>

      {/* ৫. Background Overlay (বাকি স্ক্রিন অন্ধকার করার জন্য) */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-500"
        />
      )}
    </div>
  );
};

export default Navbar;
