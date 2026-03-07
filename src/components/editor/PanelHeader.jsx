// ── Tailwind Classes ───────────────────────────────────────────

const wrap = [
   "px-4 pt-4 pb-[14px]",
   "border-b border-[#f3f4f6] flex-shrink-0",
].join(" ");

const titleRow = ["flex items-start justify-between gap-2 mb-[6px]"].join(" ");

const titleCls = [
   "text-[1rem] font-bold text-[#111827]",
   "font-[var(--inter-font)] tracking-[-0.01em] leading-[1.3] m-0",
].join(" ");

const badge = [
   "text-[0.65rem] font-bold",
   "bg-[#eff6ff] text-[#2563eb]",
   "px-[9px] py-[3px] rounded-full",
   "font-[var(--inter-font)] whitespace-nowrap flex-shrink-0",
   "mt-[2px] border border-[#bfdbfe]",
].join(" ");

const desc = [
   "text-[0.78rem] text-[#6b7280] leading-[1.5]",
   "font-[var(--inter-font)] m-0",
].join(" ");

// ── Util ───────────────────────────────────────────────────────

const capitalize = (s) =>
   s ? s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, " ") : "";

// ── Component ──────────────────────────────────────────────────

const PanelHeader = ({ title, description, sectionLabel }) => (
   <div className={wrap}>
      <div className={titleRow}>
         <h2 className={titleCls}>{title}</h2>
         {sectionLabel && (
            <span className={badge}>{capitalize(sectionLabel)}</span>
         )}
      </div>
      {description && <p className={desc}>{description}</p>}
   </div>
);

export default PanelHeader;
