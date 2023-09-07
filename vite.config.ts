import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    exclude: [...configDefaults.exclude, "**/e2e/**", "**/tests-examples/**"],
    environment: "jsdom",
    setupFiles: ["./tests/setupTests.ts"],
  },
});
