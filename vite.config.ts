/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  const isProduction = mode === "production";
  return {
    plugins: [
      react(),
      tailwindcss(),
      mkcert(),
      // put it the last one
      visualizer({
        open: isProduction,
      }),
    ],
    server: {
      https: true,
    },
    test: {
      globals: true,
      environment: "jsdom",
      include: ["./src/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
      setupFiles: ["./vitest.setup.ts"],
    },
  };
});
