import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import postcss from "postcss/lib/postcss";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { manifestForPlugin } from "./manifest";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({ mode: "none", injectRegister: false }, manifestForPlugin),
    postcss({
      plugins: [autoprefixer],
      config: "./postcss.config.cjs",
    }),
  ],
  build: {
    sourcemap: true,
  },
  define: {
    "process.env": {},
  },
});
