import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [react()],
  trailingSlash: "never",
  build: {
    format: "file",
  },
  vite: {
    ssr: {
      noExternal: ["framer-motion", "sweetalert2"],
    },
  },
});
