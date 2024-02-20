import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from "autoprefixer";
import postcss from "postcss";

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
});



