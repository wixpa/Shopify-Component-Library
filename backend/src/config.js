import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultEnvPath = path.resolve(__dirname, "..", ".env");

dotenv.config({ path: process.env.DOTENV_PATH || defaultEnvPath });

const isProd = process.env.NODE_ENV === "production";

function parseFrontendOrigins() {
  const raw = process.env.FRONTEND_ORIGIN || process.env.ALLOWED_ORIGINS || "";
  const defaults = ["http://localhost:5173", "http://127.0.0.1:5173"];
  const fromEnv = raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return [...new Set([...defaults, ...fromEnv])];
}

const cookieSameSite = process.env.COOKIE_SAMESITE || (isProd ? "none" : "lax");
const cookieSecure =
  cookieSameSite === "none" || process.env.COOKIE_SECURE === "true";

export const config = {
  port: Number(process.env.PORT || 4000),
  mongodbUri: process.env.MONGODB_URI || "",
  cookieName: process.env.COOKIE_NAME || "clbl_access_session",
  sessionTtlDays: Number(process.env.SESSION_TTL_DAYS || 30),
  frontendOrigins: parseFrontendOrigins(),
  cookieSameSite,
  cookieSecure,
};

/** Used by CORS: explicit list plus optional *.vercel.app when ALLOW_VERCEL_APP_ORIGINS=true */
export function isOriginAllowed(origin) {
  if (!origin) return false;
  if (config.frontendOrigins.includes(origin)) return true;
  if (process.env.ALLOW_VERCEL_APP_ORIGINS === "true") {
    try {
      const u = new URL(origin);
      return u.protocol === "https:" && u.hostname.endsWith(".vercel.app");
    } catch {
      return false;
    }
  }
  return false;
}

