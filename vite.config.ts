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
      VitePWA({
        registerType: "autoUpdate",
        // cache all the imports
        workbox: {
          globPatterns: ["**/*"],
          maximumFileSizeToCacheInBytes: 5000000,
        },
        // cache all the
        // static assets in the public folder
        includeAssets: ["**/*"],
      }),
    ],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/tests/setup.ts",
    },
  };
});
