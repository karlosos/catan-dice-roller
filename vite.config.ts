import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [
      react(),
      viteTsconfigPaths(),
      VitePWA({ registerType: "autoUpdate" }),
    ],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/tests/setup.ts",
    },
  };
});
