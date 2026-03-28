import { apiUrl } from "./apiBase.js";

const jsonErrorToMessage = (data) => {
  if (!data) return "Request failed.";
  if (typeof data.error === "string") return data.error;
  if (typeof data.message === "string") return data.message;
  return "Request failed.";
};

export async function checkCopyAccessStatus() {
  const res = await fetch(apiUrl("/api/access/status"), {
    method: "GET",
    credentials: "include",
    headers: { "Accept": "application/json" },
  });

  if (!res.ok) return false;
  const data = await res.json();
  return Boolean(data?.allowed);
}

export async function submitEmailForCopyAccess(email) {
  const res = await fetch(apiUrl("/api/access/email"), {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    let data = null;
    try {
      data = await res.json();
    } catch (err) {
      // Non-JSON error response.
      void err;
    }
    throw new Error(jsonErrorToMessage(data));
  }

  const data = await res.json();
  if (!data?.allowed) throw new Error("Email submission failed.");
}

