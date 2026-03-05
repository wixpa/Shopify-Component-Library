import { useState } from "react";
import {
   ArrowLeft,
   ChevronRight,
   Search,
   Monitor,
   Tablet,
   Smartphone,
   RotateCcw,
   Code,
   Check,
   Menu,
   X,
} from "lucide-react";

// ── Tailwind Classes ───────────────────────────────────────────

const bar = [
   "h-[54px] min-h-[54px] flex items-center justify-between",
   "px-3 sm:px-4 bg-white border-b border-[#e5e7eb]",
   "z-[200] gap-2 sm:gap-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex-shrink-0",
   "relative",
].join(" ");

const left = "flex items-center gap-[8px] sm:gap-[10px] flex-1 min-w-0";
const center = "hidden md:flex items-center gap-2 flex-shrink-0";
const right = "flex items-center gap-2 flex-1 justify-end";

// Buttons
const iconBtn = [
   "w-[34px] h-[34px] rounded-lg border border-[#e5e7eb] bg-white",
   "flex items-center justify-center cursor-pointer text-[#374151]",
   "flex-shrink-0 transition-[background,border-color] duration-150",
   "hover:bg-[#f9fafb] hover:border-[#d1d5db]",
].join(" ");

// Breadcrumb
const breadcrumb = "hidden sm:flex items-center gap-[6px] overflow-hidden";
const variantOnly = "flex sm:hidden items-center min-w-0 overflow-hidden";
const crumbBase =
   "text-[0.82rem] font-[var(--inter-font)] whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-150";
const crumbActive = `${crumbBase} text-[#111827] font-semibold cursor-default`;
const crumbInactive = `${crumbBase} text-[#9ca3af] font-normal cursor-pointer hover:text-[#374151]`;

// Zoom
const zoomGroup = [
   "flex items-center gap-[2px]",
   "bg-[#f9fafb] border border-[#e5e7eb] rounded-lg",
   "px-[6px] py-[3px] min-w-[68px] justify-center",
].join(" ");
const zoomVal =
   "text-[0.78rem] font-semibold text-[#374151] font-[var(--inter-font)] tabular-nums";
const divider = "w-px h-[22px] bg-[#e5e7eb]";

// Viewport group
const vpGroup = [
   "flex items-center gap-[2px]",
   "bg-[#f9fafb] border border-[#e5e7eb] rounded-lg p-[3px]",
].join(" ");

const getVpBtn = (active) =>
   [
      "h-7 px-[10px] border-none rounded-[5px]",
      "flex items-center gap-[5px] cursor-pointer",
      "text-[0.72rem] font-[var(--inter-font)] whitespace-nowrap",
      "transition-[background,color,box-shadow] duration-150",
      active
         ? "bg-white text-[#111827] font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
         : "bg-transparent text-[#6b7280] font-normal hover:bg-white/70 hover:text-[#111827]",
   ].join(" ");

// Action buttons
const getActionBtn = (primary, copied) =>
   [
      "flex items-center gap-[6px] h-[34px] rounded-lg border",
      "text-[0.82rem] font-semibold font-[var(--inter-font)] cursor-pointer",
      "transition-colors duration-150 whitespace-nowrap flex-shrink-0",
      // full label on sm+, icon-only on xs
      "px-[10px] sm:px-[14px]",
      copied
         ? "bg-[#059669] border-[#059669] text-white"
         : primary
           ? "bg-[#111827] border-[#111827] text-white hover:bg-[#1f2937]"
           : "bg-transparent text-[#374151] border-[#e5e7eb] hover:bg-[#f9fafb] hover:border-[#d1d5db]",
   ].join(" ");

// ── Mobile drawer ──────────────────────────────────────────────

const drawer = [
   "absolute top-[54px] left-0 right-0 z-[300]",
   "bg-white border-b border-[#e5e7eb]",
   "shadow-[0_4px_12px_rgba(0,0,0,0.08)]",
   "px-4 py-3 flex flex-col gap-3",
   "md:hidden",
].join(" ");

const drawerRow = "flex items-center gap-2 flex-wrap";

const drawerLabel = [
   "text-[0.65rem] font-bold text-[#9ca3af] uppercase tracking-[0.08em]",
   "font-[var(--inter-font)] w-full mb-[-4px]",
].join(" ");

// ── Viewport options ───────────────────────────────────────────

const VIEWPORTS = [
   { key: "desktop", Icon: Monitor, label: "Desktop" },
   { key: "tablet", Icon: Tablet, label: "Tablet" },
   { key: "mobile", Icon: Smartphone, label: "Mobile" },
];

// ── Component ──────────────────────────────────────────────────

const EditorTopBar = ({
   section,
   variantName,
   viewport,
   onViewportChange,
   onBack,
   onNavigateToSection,
   onNavigateToAll,
   onCopy,
   onReset,
   copied,
   flowZoom,
}) => {
   const [menuOpen, setMenuOpen] = useState(false);

   const capitalize = (s) =>
      s ? s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, " ") : "";

   const handleViewport = (key) => {
      onViewportChange(key);
      setMenuOpen(false);
   };

   return (
      <>
         <header className={bar}>
            {/* ── Left: back + breadcrumb ── */}
            <div className={left}>
               <button className={iconBtn} onClick={onBack} title="Go back">
                  <ArrowLeft size={14} />
               </button>

               {/* Full breadcrumb — hidden on xs */}
               <nav className={breadcrumb} aria-label="breadcrumb">
                  <span className={crumbInactive} onClick={onNavigateToAll}>
                     Components
                  </span>
                  <ChevronRight
                     size={9}
                     className="text-[#d1d5db] flex-shrink-0"
                  />
                  <span className={crumbInactive} onClick={onNavigateToSection}>
                     {capitalize(section)}
                  </span>
                  <ChevronRight
                     size={9}
                     className="text-[#d1d5db] flex-shrink-0"
                  />
                  <span className={crumbActive}>{variantName}</span>
               </nav>

               {/* Variant name only — visible on xs */}
               <div className={variantOnly}>
                  <span className={crumbActive}>{variantName}</span>
               </div>
            </div>

            {/* ── Center: zoom + viewport — hidden on < md ── */}
            <div className={center}>
               <div className={zoomGroup}>
                  <Search size={10} className="text-[#9ca3af] mr-[3px]" />
                  <span className={zoomVal}>{flowZoom}%</span>
               </div>

               <div className={divider} />

               <div className={vpGroup}>
                  {VIEWPORTS.map(({ key, Icon, label }) => (
                     <button
                        key={key}
                        className={getVpBtn(viewport === key)}
                        onClick={() => onViewportChange(key)}
                        title={label}
                     >
                        <Icon size={13} />
                        {label}
                     </button>
                  ))}
               </div>
            </div>

            {/* ── Right: actions + hamburger ── */}
            <div className={right}>
               {/* Reset — label hidden on xs */}
               <button
                  className={getActionBtn(false, false)}
                  onClick={onReset}
                  title="Reset to defaults"
               >
                  <RotateCcw size={13} />
                  <span className="hidden sm:inline">Reset</span>
               </button>

               {/* Copy — label hidden on xs */}
               <button className={getActionBtn(true, copied)} onClick={onCopy}>
                  {copied ? (
                     <>
                        <Check size={13} />
                        <span className="hidden sm:inline">Copied!</span>
                     </>
                  ) : (
                     <>
                        <Code size={13} />
                        <span className="hidden sm:inline">Copy Code</span>
                     </>
                  )}
               </button>

               {/* Hamburger — visible on < md only */}
               <button
                  className={`${iconBtn} md:hidden`}
                  onClick={() => setMenuOpen((v) => !v)}
                  title="More options"
               >
                  {menuOpen ? <X size={15} /> : <Menu size={15} />}
               </button>
            </div>
         </header>

         {/* ── Mobile drawer ── */}
         {menuOpen && (
            <div className={drawer}>
               {/* Zoom row */}
               <div className={drawerRow}>
                  <span className={drawerLabel}>Zoom</span>
                  <div className={zoomGroup}>
                     <Search size={10} className="text-[#9ca3af] mr-[3px]" />
                     <span className={zoomVal}>{flowZoom}%</span>
                  </div>
               </div>

               {/* Viewport row */}
               <div className={drawerRow}>
                  <span className={drawerLabel}>Viewport</span>
                  <div className={vpGroup}>
                     {VIEWPORTS.map(({ key, Icon, label }) => (
                        <button
                           key={key}
                           className={getVpBtn(viewport === key)}
                           onClick={() => handleViewport(key)}
                           title={label}
                        >
                           <Icon size={13} />
                           {label}
                        </button>
                     ))}
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default EditorTopBar;
