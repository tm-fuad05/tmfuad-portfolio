import type Lenis from "lenis";

const NAV_SELECTOR = "[data-site-navbar]";

/** Distance from viewport top to first visible content below the fixed navbar. */
export function getNavOffset(): number {
  const nav = document.querySelector<HTMLElement>(NAV_SELECTOR);
  if (!nav) return 96;
  return Math.ceil(nav.getBoundingClientRect().bottom + 12);
}

export function scrollToSection(lenis: Lenis, id: string): void {
  const target = document.getElementById(id);
  if (!target) return;

  const top =
    lenis.scroll + target.getBoundingClientRect().top - getNavOffset();
  lenis.scrollTo(top);
  history.replaceState(null, "", `#${id}`);
}
