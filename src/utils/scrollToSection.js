/**
 * Smooth-scrolls to a section by id, calling preventDefault on the
 * triggering event first. Needed because HashRouter (used for the
 * standalone /cv and /resume routes) owns the URL hash, so plain
 * href="#about" anchors can't be used for in-page scrolling anymore.
 */
export function scrollToSection(event, id) {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}