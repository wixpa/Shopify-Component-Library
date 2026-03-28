/* global process */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Vite config runs in Node, so use loadEnv/process.env (NOT import.meta.env).
  const env = loadEnv(mode, process.cwd(), "");

  if (mode === "production" && !env.VITE_BACKEND_URL?.trim()) {
    console.warn(
      "[vite] VITE_BACKEND_URL is not set — production API calls will fail.",
    );
  }

  const rawTarget = env.VITE_BACKEND_URL?.trim();
  if (!rawTarget) {
    console.warn(
      "[vite] VITE_BACKEND_URL is not set — dev /api proxy disabled. Add it to frontend/.env.",
    );
  }

  const target = rawTarget
    ? rawTarget.startsWith("http://") || rawTarget.startsWith("https://")
      ? rawTarget
      : `https://${rawTarget}`
    : null;

  return {
    plugins: [react()],
    server: {
      proxy: target
        ? {
            "/api": {
              target,
              changeOrigin: true,
            },
          }
        : {},
    },
  };
});
