/**
 * In production (Vercel), set VITE_BACKEND_URL to your Railway public URL, e.g.
 * https://your-service.up.railway.app — no trailing slash.
 * Leave unset for local dev so Vite proxies /api to the backend.
 */
export function apiUrl(path) {
  const base = (import.meta.env.VITE_BACKEND_URL || "").replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${p}` : p;
}
