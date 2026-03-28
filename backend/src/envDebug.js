import { config } from "./config.js";

function maskMongoUri(uri) {
  if (!uri) return "(empty)";
  return uri.replace(/\/\/([^:]+):([^@]+)@/, "//$1:***@");
}

/** Call once after config is loaded. */
export function logStartupEnv() {
  const env = process.env;
  // eslint-disable-next-line no-console
  console.log("[backend][env] — loaded configuration snapshot");
  // eslint-disable-next-line no-console
  console.log("[backend][env] NODE_ENV:", env.NODE_ENV ?? "(unset)");
  // eslint-disable-next-line no-console
  console.log("[backend][env] PORT:", config.port);
  // eslint-disable-next-line no-console
  console.log("[backend][env] MONGODB_URI:", maskMongoUri(config.mongodbUri));
  // eslint-disable-next-line no-console
  console.log("[backend][env] FRONTEND_ORIGIN (raw):", env.FRONTEND_ORIGIN ?? "(unset)");
  // eslint-disable-next-line no-console
  console.log("[backend][env] ALLOWED_ORIGINS (raw):", env.ALLOWED_ORIGINS ?? "(unset)");
  // eslint-disable-next-line no-console
  console.log("[backend][env] ALLOW_VERCEL_APP_ORIGINS:", env.ALLOW_VERCEL_APP_ORIGINS ?? "(unset)");
  // eslint-disable-next-line no-console
  console.log("[backend][env] DEBUG_API:", env.DEBUG_API ?? "(unset)");
  // eslint-disable-next-line no-console
  console.log("[backend][env] CORS allowlist (parsed):", config.frontendOrigins);
  // eslint-disable-next-line no-console
  console.log("[backend][env] cookieSameSite:", config.cookieSameSite, "cookieSecure:", config.cookieSecure);

  if (
    config.frontendOrigins.length === 0 &&
    env.ALLOW_VERCEL_APP_ORIGINS !== "true"
  ) {
    // eslint-disable-next-line no-console
    console.warn(
      "[backend][env] WARNING: No FRONTEND_ORIGIN/ALLOWED_ORIGINS entries and ALLOW_VERCEL_APP_ORIGINS is not true — browsers will fail CORS.",
    );
  }
}

const debugApi = () => process.env.DEBUG_API === "true";

export function logCorsDecision(origin, allowed) {
  if (allowed) {
    if (debugApi()) {
      // eslint-disable-next-line no-console
      console.log("[backend][cors] allowed origin:", origin ?? "(no Origin header)");
    }
    return;
  }
  // eslint-disable-next-line no-console
  console.warn(
    "[backend][cors] BLOCKED — Origin not allowed:",
    origin ?? "(missing)",
    "| allowlist:",
    config.frontendOrigins,
    "| ALLOW_VERCEL_APP_ORIGINS:",
    process.env.ALLOW_VERCEL_APP_ORIGINS === "true",
  );
}
