/**
 * VITE_BACKEND_URL is required (frontend/.env locally, Vercel env for deploy).
 * No trailing slash, e.g. https://your-service.up.railway.app
 */
export function apiUrl(path) {
  const raw = import.meta.env.VITE_BACKEND_URL;
  if (typeof raw !== "string" || !raw.trim()) {
    throw new Error(
      "VITE_BACKEND_URL is required — set it in frontend/.env or Vercel project env.",
    );
  }
  const base = raw.trim().replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
