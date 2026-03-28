import { createApp } from "./app.js";
import { connectMongo } from "./db.js";
import { config } from "./config.js";
import { logStartupEnv } from "./envDebug.js";

async function main() {
  await connectMongo();

  logStartupEnv();

  const app = createApp();

  app.listen(config.port, () => {
    // eslint-disable-next-line no-console
    console.log(
      `[backend] Listening on port ${config.port} (Mongo connected). Public URL must match FRONTEND_ORIGIN for CORS.`,
    );
  });
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error("[backend] Failed to start:", err);
  process.exit(1);
});

