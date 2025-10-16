// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  experimental: {
    fonts: [
      // Poppins Font Configuration
      {
        provider: fontProviders.google(),
        name: "Poppins",
        cssVariable: "--font-poppins",
        weights: [100, 200, 400, 500, 600, 700, 800],
        styles: ["normal"],
        subsets: ["latin"],
        display: "swap",
        fallbacks: ["sans-serif"],
      },

      // Roboto Font Configuration
      {
        provider: fontProviders.google(),
        name: "Roboto",
        cssVariable: "--font-roboto",
        weights: [400, 500, 700],
        styles: ["normal", "italic"],
        subsets: ["latin"],
        display: "swap",
        fallbacks: ["sans-serif"],
      },
    ],
  },
  // ⚡ Build optimization
  build: {
    inlineStylesheets: "auto",
  },

  // ⚡ Vite optimization
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
});
