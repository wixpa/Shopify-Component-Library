import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
  },
  { timestamps: true },
);

export const Subscriber = mongoose.model(
  "Subscriber",
  subscriberSchema,
  "subscribers",
);

