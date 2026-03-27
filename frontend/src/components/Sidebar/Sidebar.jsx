import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight, LayoutGrid } from "lucide-react";
import { getAllCategories } from "../../registry/componentRegistry";

// ── Tailwind Classes ───────────────────────────────────────────

const sidebarRoot =
   "w-full h-full bg-[var(--color-sidebar-bg)] py-5 overflow-y-auto scrollbar-thin scrollbar-thumb-[#d1d5db] scrollbar-track-transparent";

const navGroupToggle =
   "flex items-center w-full px-4 py-[7px] pl-5 text-[0.82rem] font-bold text-[var(--color-nav-text)] bg-transparent border-none cursor-pointer text-left transition-colors duration-150 font-[var(--inter-font)] hover:bg-[var(--color-nav-hover-bg)]";

const navLabel =
   "text-[0.65rem] font-bold text-[var(--color-nav-text-tertiary)] uppercase tracking-[0.1em] px-4 pt-[14px] pb-[5px] pl-11 font-[var(--inter-font)]";

const variantCount =
   "text-[0.62rem] font-semibold bg-[var(--color-badge-gray-bg)] text-[var(--color-nav-text-tertiary)] px-[7px] py-[1px] rounded-full font-[var(--inter-font)] flex-shrink-0";

// Overlay + mobile drawer
const overlayBase = "hidden fixed inset-0 bg-[rgba(0,0,0,0.45)] z-[90]";
const overlayOpen = "max-[900px]:block";

const drawerBase =
   "hidden fixed top-0 left-0 w-[var(--sidebar-width,260px)] h-screen bg-[var(--color-sidebar-bg)] border-r border-[var(--color-sidebar-border)] z-[100] overflow-y-auto transition-transform duration-[280ms] ease-[ease]";
const drawerClosed = "max-[900px]:block max-[900px]:-translate-x-full";
const drawerOpen =
   "max-[900px]:block max-[900px]:translate-x-0 max-[900px]:shadow-[5px_0_20px_rgba(0,0,0,0.12)]";

// ── NavLink class helpers (active state) ───────────────────────

const allComponentsClass = ({ isActive }) =>
   [
      "flex items-center gap-2 pl-11 pr-4 py-[7px] text-[0.82rem] font-medium no-underline border-l-[3px] font-[var(--inter-font)] transition-[background,color] duration-150",
      isActive
         ? "text-[var(--color-nav-active)] bg-[var(--color-nav-active-bg)] font-semibold border-l-[var(--color-nav-active)] !pl-[41px]"
         : "text-[var(--color-nav-text-secondary)] border-l-transparent hover:bg-[var(--color-nav-hover-bg)] hover:text-[var(--color-nav-text)]",
   ].join(" ");

const navLeafClass = ({ isActive }) =>
   [
      "flex items-center justify-between pl-11 pr-4 py-[6px] text-[0.82rem] font-medium no-underline border-l-[3px] font-[var(--inter-font)] transition-[background,color] duration-150",
      isActive
         ? "text-[var(--color-nav-active)] bg-[var(--color-nav-active-bg)] font-semibold border-l-[var(--color-nav-active)] !pl-[41px]"
         : "text-[var(--color-nav-text-secondary)] border-l-transparent hover:bg-[var(--color-nav-hover-bg)] hover:text-[var(--color-nav-text)]",
   ].join(" ");

// ── Component ──────────────────────────────────────────────────

const Sidebar = ({ isOpen, onClose }) => {
   const [groupOpen, setGroupOpen] = useState(true);
   const categories = getAllCategories();

   // ── Shared nav content ─────────────────────────────────────

   const navContent = (
      <nav className={sidebarRoot}>
         {/* ── Group toggle ── */}
         <div className="mb-1">
            <button
               className={navGroupToggle}
               onClick={() => setGroupOpen((p) => !p)}
               aria-expanded={groupOpen}
            >
               <ChevronRight
                  size={10}
                  className={[
                     "mr-2 text-[var(--color-nav-text-tertiary)] flex-shrink-0 transition-transform duration-200",
                     groupOpen ? "rotate-90" : "rotate-0",
                  ].join(" ")}
               />
               Components
            </button>

            {/* ── Sub group ── */}
            {groupOpen && (
               <div>
                  {/* All Components */}
                  <NavLink to="/components" end className={allComponentsClass}>
                     <LayoutGrid
                        size={11}
                        className="opacity-60 flex-shrink-0"
                     />
                     All Components
                  </NavLink>

                  {/* Library label */}
                  <div className={navLabel}>Library</div>

                  {/* Category leaves */}
                  {categories.map((cat) => (
                     <NavLink
                        key={cat.slug}
                        to={`/components/${cat.slug}`}
                        className={navLeafClass}
                        onClick={onClose}
                     >
                        {cat.title}
                        <span className={variantCount}>
                           {cat.variants.length}
                        </span>
                     </NavLink>
                  ))}
               </div>
            )}
         </div>
      </nav>
   );

   return (
      <>
         {/* ── Desktop: plain in-flow nav ── */}
         <div className="w-full h-full">{navContent}</div>

         {/* ── Mobile overlay ── */}
         <div
            className={`${overlayBase} ${isOpen ? overlayOpen : ""}`}
            onClick={onClose}
            aria-hidden="true"
         />

         {/* ── Mobile slide-in drawer ── */}
         <aside
            className={`${drawerBase} ${isOpen ? drawerOpen : drawerClosed}`}
         >
            {navContent}
         </aside>
      </>
   );
};

export default Sidebar;
