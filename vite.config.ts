import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    legacy({
      targets: ["ie >= 11"],
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    restoreMocks: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});
