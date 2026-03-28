import crypto from "node:crypto";
import { z } from "zod";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { config } from "../config.js";
import { Subscriber } from "../models/Subscriber.js";
import { AccessSession } from "../models/AccessSession.js";

export const accessRouter = (express) => {
  const router = express.Router();

  const emailSchema = z
    .string()
    .trim()
    .min(5)
    .max(254)
    .email({ message: "Please enter a valid email address." });

  const getSessionTokenFromCookie = (req) => req.cookies?.[config.cookieName];

  router.get(
    "/status",
    asyncHandler(async (req, res) => {
      const token = getSessionTokenFromCookie(req);
      if (!token) return res.json({ allowed: false });

      const session = await AccessSession.findOne({ token }).exec();
      if (!session) return res.json({ allowed: false });

      // If expired, we treat as not allowed (TTL will also clear it).
      if (session.expiresAt.getTime() < Date.now()) {
        return res.json({ allowed: false });
      }

      // Touch session for sliding behavior (small scale).
      session.lastSeenAt = new Date();
      await session.save();

      return res.json({ allowed: true });
    }),
  );

  router.post(
    "/email",
    asyncHandler(async (req, res) => {
      const parsed = emailSchema.safeParse(req.body?.email);
      if (!parsed.success) {
        return res.status(400).json({
          error: parsed.error.issues?.[0]?.message || "Invalid email.",
        });
      }

      const email = parsed.data.toLowerCase();

      // Upsert subscriber.
      await Subscriber.findOneAndUpdate(
        { email },
        { $setOnInsert: { email } },
        { upsert: true, new: true },
      ).exec();

      // Create session token for this browser.
      const token = crypto.randomBytes(32).toString("hex");
      const expiresAt = new Date(
        Date.now() + config.sessionTtlDays * 24 * 60 * 60 * 1000,
      );

      await AccessSession.create({
        token,
        email,
        expiresAt,
        lastSeenAt: new Date(),
      });

      res.cookie(config.cookieName, token, {
        httpOnly: true,
        sameSite: config.cookieSameSite,
        secure: config.cookieSecure,
        path: "/",
        maxAge: config.sessionTtlDays * 24 * 60 * 60 * 1000,
      });

      return res.json({ allowed: true });
    }),
  );

  return router;
};

