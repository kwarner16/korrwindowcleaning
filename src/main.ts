import "./style.css";
import { business } from "./config";
import { mountTallyVisEstimator } from "./tallyvis-embed";

function initMobileNav(): void {
  const toggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
  const menu = document.getElementById("mobile-nav");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
    toggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      menu.hidden = true;
    });
  });
}

function initFooter(): void {
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const serviceAreaEl = document.getElementById("footer-service-area");
  if (serviceAreaEl && business.serviceAreaLabel) {
    serviceAreaEl.textContent = business.serviceAreaLabel;
    serviceAreaEl.hidden = false;
  }

  const contactEl = document.getElementById("footer-contact");
  if (contactEl && (business.phone || business.email)) {
    const parts: string[] = [];
    if (business.phone) {
      parts.push(`<a href="tel:${business.phone.replace(/[^\d+]/g, "")}">${business.phone}</a>`);
    }
    if (business.email) {
      parts.push(`<a href="mailto:${business.email}">${business.email}</a>`);
    }
    contactEl.innerHTML = parts.join('<span aria-hidden="true"> &middot; </span>');
    contactEl.hidden = false;
  }
}

function initEstimator(): void {
  const mount = document.getElementById("tallyvis-estimator");
  if (mount) mountTallyVisEstimator(mount);
}

initMobileNav();
initFooter();
initEstimator();
