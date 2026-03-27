import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultEnvPath = path.resolve(__dirname, "..", ".env");

dotenv.config({ path: process.env.DOTENV_PATH || defaultEnvPath });

export const config = {
  port: Number(process.env.PORT || 4000),
  mongodbUri: process.env.MONGODB_URI || "",
  cookieName: process.env.COOKIE_NAME || "clbl_access_session",
  sessionTtlDays: Number(process.env.SESSION_TTL_DAYS || 30),
};

