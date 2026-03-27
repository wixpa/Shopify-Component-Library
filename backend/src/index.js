import { createApp } from "./app.js";
import { connectMongo } from "./db.js";
import { config } from "./config.js";

async function main() {
  await connectMongo();

  const app = createApp();

  app.listen(config.port, () => {
    // eslint-disable-next-line no-console
    console.log(
      `[backend] Listening on http://localhost:${config.port} (Mongo connected)`,
    );
  });
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error("[backend] Failed to start:", err);
  process.exit(1);
});

