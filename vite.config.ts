import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  const isProduction = mode === "production";
  return {
    plugins: [
      react(),
      tailwindcss(),
      // put it the last one
      visualizer({
        open: isProduction,
      }),
    ],
  };
});
