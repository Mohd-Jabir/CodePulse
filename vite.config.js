import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/CodePulse', // <== RELATIVE path, NOT /CodePulse/
  plugins: [react()],
});
