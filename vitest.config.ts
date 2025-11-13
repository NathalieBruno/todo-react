import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // ger mig window och document
    setupFiles: "./src/setupTests.ts",
  },
});
