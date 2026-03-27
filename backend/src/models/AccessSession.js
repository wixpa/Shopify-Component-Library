import mongoose from "mongoose";

const accessSessionSchema = new mongoose.Schema(
  {
    token: { type: String, required: true, unique: true, index: true },
    email: { type: String, required: true },
    expiresAt: { type: Date, required: true, index: true },
    lastSeenAt: { type: Date, default: () => new Date() },
  },
  { timestamps: true },
);

// TTL index to auto-expire sessions.
accessSessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const AccessSession = mongoose.model(
  "AccessSession",
  accessSessionSchema,
  "code_access_sessions",
);

