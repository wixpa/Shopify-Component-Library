import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import { accessRouter } from "./routes/access.routes.js";

export function createApp() {
  const app = express();

  app.use(helmet());

  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 100,
      standardHeaders: true,
      legacyHeaders: false,
    }),
  );

  app.use(express.json({ limit: "50kb" }));
  app.use(cookieParser());

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ ok: true });
  });

  app.use("/api/access", accessRouter(express));

  // 404 handler
  app.use((req, res) => {
    res.status(404).json({ error: "Not found" });
  });

  // Error handler
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // Avoid leaking stack traces.
    res.status(500).json({ error: "Server error" });
  });

  return app;
}

