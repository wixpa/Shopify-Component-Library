import { Play } from "lucide-react";

// ── Tailwind Classes ───────────────────────────────────────────

const wrap = "p-4 border-b border-[#f3f4f6]";

const title = [
   "text-[0.9rem] font-bold text-[#111827] leading-[1.35]",
   "font-[var(--inter-font)] m-0 mb-3",
].join(" ");

const watchBtn = [
   "flex items-center justify-center gap-2 w-full",
   "bg-[#111827] text-white",
   "px-[14px] py-[9px] rounded-lg",
   "text-[0.78rem] font-semibold font-[var(--inter-font)]",
   "no-underline text-center cursor-pointer mb-[18px] box-border",
   "transition-colors duration-150",
   "hover:bg-[#1f2937]",
   "focus-visible:outline-2 focus-visible:outline-[#3b82f6] focus-visible:outline-offset-2",
].join(" ");

const stepsList = "list-none m-0 p-0 flex flex-col gap-3";

const stepItem = "flex items-start gap-[10px]";

const numBadge = [
   "w-[22px] min-w-[22px] h-[22px] rounded-full",
   "bg-[#f1f5f9] text-[#374151]",
   "text-[0.7rem] font-bold font-[var(--inter-font)]",
   "flex items-center justify-center",
   "mt-[1px] flex-shrink-0",
].join(" ");

const stepTitle =
   "text-[0.8rem] font-semibold text-[#111827] font-[var(--inter-font)] mb-[2px]";
const stepDesc =
   "text-[0.73rem] text-[#6b7280] font-[var(--inter-font)] leading-[1.45]";

// ── Data ───────────────────────────────────────────────────────

const STEPS = [
   {
      num: 1,
      title: "Open Theme Editor",
      desc: "Go to Online Store → Themes → Customize",
   },
   {
      num: 2,
      title: "Add Custom Liquid",
      desc: 'Click "Add Section" → "Custom Liquid"',
   },
   {
      num: 3,
      title: "Paste the Code",
      desc: "Copy the code above and paste it into the Custom Liquid section",
   },
   {
      num: 4,
      title: "Save Changes",
      desc: 'Click "Save" to apply changes to your theme',
   },
];

// ── Component ──────────────────────────────────────────────────

const HowToSection = () => (
   <div className={wrap}>
      {/* Title */}
      <h3 className={title}>How to Add to Your Shopify Theme</h3>

      {/* Watch tutorial button */}
      <a
         href="#"
         className={watchBtn}
         aria-label="Watch tutorial video"
         onClick={(e) => e.preventDefault()}
      >
         <Play
            size={11}
            className="text-[#f59e0b] fill-[#f59e0b] flex-shrink-0"
         />
         Watch Tutorial
      </a>

      {/* Steps */}
      <ol className={stepsList} aria-label="Installation steps">
         {STEPS.map((step) => (
            <li key={step.num} className={stepItem}>
               <div className={numBadge} aria-hidden="true">
                  {step.num}
               </div>
               <div>
                  <div className={stepTitle}>{step.title}</div>
                  <div className={stepDesc}>{step.desc}</div>
               </div>
            </li>
         ))}
      </ol>
   </div>
);

export default HowToSection;
