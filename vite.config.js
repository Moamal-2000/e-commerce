import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      config: {
        path: "./postcss.config.cjs",
      },
    },
  },
});
