import type Lenis from "lenis";

const NAV_SELECTOR = "[data-site-navbar]";

/** Distance from viewport top to first visible content below the fixed navbar. */
export function getNavOffset(): number {
  const nav = document.querySelector<HTMLElement>(NAV_SELECTOR);
  if (!nav) return 88;
  const rect = nav.getBoundingClientRect();
  // Nav bottom plus breathing room above section title
  return Math.ceil(rect.bottom + 28);
}

export function scrollToSection(lenis: Lenis, id: string): void {
  // If target element exists (either section or section title container)
  const target = document.getElementById(id);
  if (!target) return;

  // Prefer landing precisely at SectionTitle inside the section if available
  const titleEl =
    target.querySelector<HTMLElement>("[data-section-title]") ||
    target.querySelector<HTMLElement>("h2") ||
    target;

  const targetRect = titleEl.getBoundingClientRect();
  const top = lenis.scroll + targetRect.top - getNavOffset();

  lenis.scrollTo(top, {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  history.replaceState(null, "", `#${id}`);
}
