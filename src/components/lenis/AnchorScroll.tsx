"use client";

import { useLenis } from "lenis/react";
import { useEffect } from "react";
import { scrollToSection } from "@/lib/scrollToSection";

export default function AnchorScroll() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element).closest<HTMLAnchorElement>(
        "a[href*='#']",
      );
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#" || href === "/#") return;

      // Extract the hash ID whether href is "#about" or "/#about"
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const path = href.slice(0, hashIndex);
      // If link points to another page (not current page or root), allow normal navigation
      if (path && path !== "/" && path !== window.location.pathname) return;

      const id = decodeURIComponent(href.slice(hashIndex + 1));
      if (!id || !document.getElementById(id)) return;

      event.preventDefault();
      scrollToSection(lenis, id);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  useEffect(() => {
    if (!lenis) return;
    const hash = window.location.hash;
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));
    requestAnimationFrame(() => scrollToSection(lenis, id));
  }, [lenis]);

  return null;
}
