/**
 * Central business configuration for Korr Window Cleaning.
 *
 * Edit the values below to update information site-wide. Leave a field as an
 * empty string ("") if it is not yet known — the UI is built to gracefully
 * hide anything left blank rather than display a placeholder to visitors.
 *
 * Do NOT invent phone numbers, addresses, service areas, or claims here.
 * Only enter real, confirmed business information.
 */

interface BusinessConfig {
  name: string;
  shortName: string;
  /** e.g. "(555) 123-4567". Leave blank until a real number is available. */
  phone: string;
  /** e.g. "hello@korrwindowcleaning.com". Leave blank until confirmed. */
  email: string;
  /**
   * Street address. Only fill this in if Korr wants a physical address
   * publicly displayed (most residential window cleaning businesses don't).
   */
  address: string;
  /**
   * Human-readable service area, e.g. "Serving Greater Springfield, IL".
   * Leave blank until a specific service area is defined.
   */
  serviceAreaLabel: string;
  /**
   * City/region names used for local SEO + structured data (LocalBusiness
   * areaServed). Leave empty until confirmed.
   */
  serviceAreas: string[];
  /** Social profile URLs. Leave any entry blank to hide it in the footer. */
  social: {
    facebook: string;
    instagram: string;
  };
  /** The site's canonical production URL, used for SEO metadata. */
  siteUrl: string;
}

export const business: BusinessConfig = {
  name: "Korr Window Cleaning",
  shortName: "Korr",
  phone: "+1 (352) 598-1487",
  email: "krwarner16@gmail.com",
  address: "",
  serviceAreaLabel: "Serving Inverness, Hernando, Ocala & Brooksville, FL",
  serviceAreas: ["Inverness, FL", "Hernando, FL", "Ocala, FL", "Brooksville, FL"],
  social: {
    facebook: "",
    instagram: "",
  },
  siteUrl: "https://www.korrwindowwashing.com",
};

/**
 * TallyVis is Korr's AI-powered estimator. It's embedded via a script tag
 * that mounts itself into the #tallyvis-estimator container (see
 * src/tallyvis-embed.ts). Both values are provided via environment
 * variables so they can be swapped per-environment without touching code.
 * See .env.example for details.
 */
export const tallyvis: { scriptUrl: string; estimatorId: string } = {
  scriptUrl: import.meta.env.VITE_TALLYVIS_SCRIPT_URL ?? "",
  estimatorId: import.meta.env.VITE_TALLYVIS_ESTIMATOR_ID ?? "",
};
