/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TALLYVIS_SCRIPT_URL?: string;
  readonly VITE_TALLYVIS_ESTIMATOR_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
