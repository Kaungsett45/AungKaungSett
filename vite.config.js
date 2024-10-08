import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// import reactRefresh from '@vitejs/plugin-react-refresh';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    minify: 'terser',
    chunkSizeWarningLimit: 550,
  },
});
