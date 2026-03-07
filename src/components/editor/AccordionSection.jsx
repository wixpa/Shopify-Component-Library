import { memo } from "react";
import { ChevronDown } from "lucide-react";
import { resolveIcon } from "../../registry/icons";

// ── Tailwind Classes ───────────────────────────────────────────

const wrapper = "border-b border-[#f3f4f6]";

const trigger =
   "w-full flex items-center gap-[10px] px-4 py-[10px] bg-transparent border-none cursor-pointer text-left transition-colors duration-150 hover:bg-[#fafafa]";

const iconBoxBase =
   "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.05)]";

const textBlock = "flex-1 min-w-0";
const titleCls =
   "text-[0.84rem] font-semibold text-[#111827] font-[var(--inter-font)] mb-[1px] whitespace-nowrap overflow-hidden text-ellipsis";
const subtitleCls =
   "text-[0.71rem] text-[#9ca3af] font-[var(--inter-font)] whitespace-nowrap overflow-hidden text-ellipsis";

const bodyOpen =
   "pl-[58px] pr-4 pb-4 pt-1 max-h-[700px] overflow-hidden transition-[max-height,padding] duration-[280ms] ease-[ease]";
const bodyClosed =
   "pl-[58px] pr-4 pb-0 pt-0 max-h-0 overflow-hidden transition-[max-height,padding] duration-[280ms] ease-[ease]";

const getChevronCls = (isOpen) =>
   `w-5 h-5 flex items-center justify-center rounded-[4px] flex-shrink-0 transition-all duration-150 ${
      isOpen ? "bg-[#eff6ff] text-[#3b82f6]" : "bg-transparent text-[#9ca3af]"
   }`;

// Control atoms
const ctrlWrap = "mt-[10px]";
const ctrlLabel =
   "block text-[0.67rem] font-bold text-[#6b7280] mb-[5px] font-[var(--inter-font)] uppercase tracking-[0.06em]";
const textInput = [
   "w-full px-[10px] py-[7px] border border-[#e5e7eb] rounded-[7px]",
   "text-[0.82rem] font-[var(--inter-font)] text-[#111827] bg-white outline-none box-border",
   "transition-[border-color,box-shadow] duration-150",
   "hover:border-[#d1d5db]",
   "focus:border-[#3b82f6] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]",
].join(" ");
const selectInput = [
   "w-full px-[10px] py-[7px] border border-[#e5e7eb] rounded-[7px]",
   "text-[0.82rem] font-[var(--inter-font)] text-[#111827] bg-white outline-none cursor-pointer box-border",
   "transition-[border-color,box-shadow] duration-150",
   "focus:border-[#3b82f6] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]",
].join(" ");
const colorRow = "flex items-center gap-[7px]";
const colorPicker =
   "w-[34px] h-[34px] border border-[#e5e7eb] rounded-[7px] p-[2px] cursor-pointer bg-none flex-shrink-0 transition-colors duration-150 hover:border-[#d1d5db]";
const colorHex = [
   "flex-1 px-[10px] py-[7px] border border-[#e5e7eb] rounded-[7px]",
   "text-[0.78rem] font-['Courier_New',monospace] text-[#374151] bg-[#f9fafb] outline-none box-border",
   "transition-[border-color,box-shadow,background] duration-150",
   "focus:border-[#3b82f6] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] focus:bg-white",
].join(" ");

// ── Control renderer ──────────────────────────────────────────

const Control = memo(({ ctrl, value, onChange }) => (
   <div className={ctrlWrap}>
      <label className={ctrlLabel}>{ctrl.label}</label>

      {ctrl.type === "text" && (
         <input
            className={textInput}
            type="text"
            value={value ?? ""}
            onChange={(e) => onChange(ctrl.key, e.target.value)}
            placeholder={`Enter ${ctrl.label.toLowerCase()}…`}
         />
      )}

      {ctrl.type === "color" && (
         <div className={colorRow}>
            <input
               className={colorPicker}
               type="color"
               value={value ?? "#000000"}
               onChange={(e) => onChange(ctrl.key, e.target.value)}
            />
            <input
               className={colorHex}
               type="text"
               value={value ?? ""}
               onChange={(e) => onChange(ctrl.key, e.target.value)}
               placeholder="#000000"
               maxLength={9}
            />
         </div>
      )}

      {ctrl.type === "select" && (
         <select
            className={selectInput}
            value={value ?? ""}
            onChange={(e) => onChange(ctrl.key, e.target.value)}
         >
            {ctrl.options.map((opt) => (
               <option key={opt} value={opt}>
                  {opt}
               </option>
            ))}
         </select>
      )}
   </div>
));

Control.displayName = "Control";

// ── Main ──────────────────────────────────────────────────────

const AccordionSection = memo(({ acc, isOpen, onToggle, config, onUpdate }) => {
   // Resolve FA string → Lucide component at render time
   const IconComponent = resolveIcon(acc.icon);

   return (
      <div className={wrapper}>
         {/* ── Trigger ── */}
         <button className={trigger} onClick={() => onToggle(acc.id)}>
            {/* Icon box — bg/color are dynamic, safe to inline style */}
            <div
               className={iconBoxBase}
               style={{
                  background: acc.iconBg || "#f3f4f6",
                  color: acc.iconColor || "#6b7280",
               }}
            >
               <IconComponent size={15} />
            </div>

            {/* Text */}
            <div className={textBlock}>
               <div className={titleCls}>{acc.title}</div>
               <div className={subtitleCls}>{acc.subtitle}</div>
            </div>

            {/* Chevron */}
            <div className={getChevronCls(isOpen)}>
               <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${
                     isOpen ? "rotate-180" : "rotate-0"
                  }`}
               />
            </div>
         </button>

         {/* ── Body ── */}
         <div className={isOpen ? bodyOpen : bodyClosed}>
            {acc.controls.map((ctrl) => (
               <Control
                  key={ctrl.key}
                  ctrl={ctrl}
                  value={config[ctrl.key]}
                  onChange={onUpdate}
               />
            ))}
         </div>
      </div>
   );
});

AccordionSection.displayName = "AccordionSection";
export default AccordionSection;
