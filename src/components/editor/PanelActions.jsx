import { Check, Code, RotateCcw } from "lucide-react";

// ── Tailwind Classes ───────────────────────────────────────────

const wrap = [
   "px-4 py-3 flex flex-col gap-[7px]",
   "border-b border-[#f3f4f6] flex-shrink-0",
].join(" ");

const getPrimaryBtn = (copied) =>
   [
      "w-full px-4 py-[10px] border-none rounded-lg",
      "text-[0.85rem] font-semibold font-[var(--inter-font)] text-white",
      "flex items-center justify-center gap-2 cursor-pointer",
      "transition-[background] duration-[250ms] ease",
      "focus-visible:outline-2 focus-visible:outline-[#3b82f6] focus-visible:outline-offset-2",
      copied
         ? "bg-[#059669] hover:bg-[#047857] animate-[pop_0.2s_ease]"
         : "bg-[#111827] hover:bg-[#1f2937]",
   ].join(" ");

const secondaryBtn = [
   "w-full px-4 py-2 rounded-lg border border-[#e5e7eb]",
   "bg-transparent text-[#374151]",
   "text-[0.82rem] font-medium font-[var(--inter-font)]",
   "flex items-center justify-center gap-[7px] cursor-pointer",
   "transition-[background,border-color,color] duration-150 ease",
   "hover:bg-[#f9fafb] hover:border-[#d1d5db] hover:text-[#111827]",
   "focus-visible:outline-2 focus-visible:outline-[#3b82f6] focus-visible:outline-offset-2",
].join(" ");

// ── Pop keyframe (inline style tag) ───────────────────────────

const POP_STYLE = `
  @keyframes pop {
    0%, 100% { transform: scale(1);    }
    50%       { transform: scale(0.95); }
  }
`;

// ── Component ──────────────────────────────────────────────────

const PanelActions = ({ onCopy, onReset, copied }) => (
   <div className={wrap}>
      <style>{POP_STYLE}</style>

      {/* Copy code — primary */}
      <button
         className={getPrimaryBtn(copied)}
         onClick={onCopy}
         aria-label={
            copied ? "Code copied to clipboard" : "Copy component code"
         }
      >
         {copied ? (
            <>
               <Check size={14} /> Code Copied to Clipboard!
            </>
         ) : (
            <>
               <Code size={14} /> Copy Code
            </>
         )}
      </button>

      {/* Reset — secondary */}
      <button
         className={secondaryBtn}
         onClick={onReset}
         aria-label="Reset all settings to defaults"
      >
         <RotateCcw size={13} />
         Reset to Defaults
      </button>
   </div>
);

export default PanelActions;
