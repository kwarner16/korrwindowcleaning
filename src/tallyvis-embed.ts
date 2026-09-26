import { tallyvis } from "./config";

const EMBED_SCRIPT_ID = "tallyvis-embed-script";

/**
 * Mounts the TallyVis estimator inside the given container.
 *
 * TallyVis ships as a script tag that finds this container by id
 * (#tallyvis-estimator) and renders itself into it, configured via a
 * data-tallyvis-id attribute. If the script URL or estimator id isn't
 * configured, renders an on-brand placeholder instead so the section never
 * looks unfinished or broken to visitors.
 */
export function mountTallyVisEstimator(container: HTMLElement): void {
  const { scriptUrl, estimatorId } = tallyvis;

  if (!scriptUrl || !estimatorId) {
    container.innerHTML = `
      <div class="estimator-placeholder" role="status">
        <svg class="estimator-placeholder__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/>
          <path d="M3 10h18M9 10v10" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <p class="estimator-placeholder__title">Estimator coming soon</p>
        <p class="estimator-placeholder__body">
          The free instant estimate tool will load here once it's connected.
          Check back shortly, or reach out directly and we'll get you a quote.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = "";

  if (document.getElementById(EMBED_SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = EMBED_SCRIPT_ID;
  script.src = scriptUrl;
  script.async = true;
  script.setAttribute("data-tallyvis-id", estimatorId);
  document.body.appendChild(script);
}
