import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
 integrations: [tailwind()],
 site: "https://proxima812.github.io",
 base: "/aakazan",
});
