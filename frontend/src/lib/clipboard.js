export async function copyTextToClipboard(text) {
  if (typeof text !== "string") text = String(text ?? "");

  // Preferred modern API.
  if (navigator?.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  // Fallback for older browsers / locked clipboard permissions.
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-1000px";
  textarea.style.left = "-1000px";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);

  try {
    textarea.focus();
    textarea.select();
    const ok = document.execCommand("copy");
    if (!ok) throw new Error("Clipboard copy failed.");
  } finally {
    document.body.removeChild(textarea);
  }
}

