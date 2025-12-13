import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jmacazana.com",
  integrations: [
    sitemap(),
    icon({
      include: {
        cib: ["github", "rust", "typescript", "c", "python", "react", "html5", "css3"],
        ic: ["baseline-question-mark"],
        mdi: ["twitter", "telegram", "github", "linkedin"],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
