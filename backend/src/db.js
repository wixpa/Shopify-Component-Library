import mongoose from "mongoose";
import { config } from "./config.js";

let connectionPromise = null;

export async function connectMongo() {
  if (connectionPromise) return connectionPromise;
  if (!config.mongodbUri) {
    throw new Error(
      "Missing MONGODB_URI in backend/.env (or set DOTENV_PATH to load it).",
    );
  }

  connectionPromise = mongoose.connect(config.mongodbUri, {
    dbName: "Cluster0",
  });

  return connectionPromise;
}

