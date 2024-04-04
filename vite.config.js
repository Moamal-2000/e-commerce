import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import postcss from "postcss/lib/postcss";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
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
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
