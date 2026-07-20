import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://astrotry1.netlify.app/",
  integrations: [preact()]
});