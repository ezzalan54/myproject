import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",  // Ensure built files go to /dist
  },
  base: "./",  // Makes assets relative
});
