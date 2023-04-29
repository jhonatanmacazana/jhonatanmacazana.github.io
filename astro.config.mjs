import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jmacazana.com",
  integrations: [tailwind(), image(), sitemap()],
});
