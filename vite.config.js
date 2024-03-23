import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [react(), VitePWA()],
  css: {
    postcss: {
      config: {
        path: "./postcss.config.cjs",
      },
    },
  },
});
