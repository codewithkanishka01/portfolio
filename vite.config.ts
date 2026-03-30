import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use root for Vercel, and /portfolio/ for GitHub Pages
  base: process.env.VERCEL ? "/" : "/portfolio/",
});
