import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Vite config runs in Node, so use loadEnv/process.env (NOT import.meta.env).
  const env = loadEnv(mode, process.cwd(), "");

  const rawTarget = env.VITE_BACKEND_URL || "http://localhost:4000";
  const target =
    rawTarget.startsWith("http://") || rawTarget.startsWith("https://")
      ? rawTarget
      : `https://${rawTarget}`;

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target,
          changeOrigin: true,
        },
      },
    },
  };
});
