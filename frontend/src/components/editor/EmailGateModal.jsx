import { useEffect, useMemo } from "react";

const backdrop =
  "fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[1000] flex items-center justify-center p-4";
const modal =
  "w-full max-w-[520px] bg-white rounded-[14px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-[#e5e7eb]";

export default function EmailGateModal({
  open,
  email,
  setEmail,
  onCancel,
  onSubmit,
  loading,
  error,
}) {
  const title = useMemo(() => "Enter your email to unlock copy", []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onCancel?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div
      className={backdrop}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(e) => {
        // close only when clicking the backdrop itself
        if (e.target === e.currentTarget) onCancel?.();
      }}
    >
      <div className={modal} onMouseDown={(e) => e.stopPropagation()}>
        <div className="px-5 py-4 border-b border-[#f3f4f6]">
          <div className="text-[1rem] font-bold text-[#111827]">{title}</div>
          <div className="text-[0.9rem] text-[#6b7280] mt-1">
            We’ll store it to your account so you can copy other components
            without repeating this step.
          </div>
        </div>

        <form
          className="px-5 py-4 flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit?.();
          }}
        >
          <label className="text-[0.82rem] font-semibold text-[#374151]">
            Email
          </label>
          <input
            className="w-full h-[42px] px-[12px] rounded-lg border border-[#e5e7eb] bg-white text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/60"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@store.com"
            value={email}
            onChange={(e) => setEmail?.(e.target.value)}
            required
          />
          {error ? (
            <div className="text-[0.85rem] text-[#dc2626] bg-[#fef2f2] border border-[#fca5a5] px-3 py-2 rounded-lg">
              {error}
            </div>
          ) : null}

          <div className="flex gap-2 pt-1">
            <button
              type="button"
              className="flex-1 h-[42px] rounded-lg border border-[#e5e7eb] text-[#374151] bg-white hover:bg-[#f9fafb] transition-colors"
              onClick={onCancel}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 h-[42px] rounded-lg bg-[#111827] text-white hover:bg-[#1f2937] transition-colors disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit & Copy"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

