import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// ── Tailwind Classes ───────────────────────────────────────────

const shell = "flex flex-col min-h-screen bg-[var(--color-bg-white)]";
const middleRow = "flex flex-1";

// Sticky sidebar — hidden on mobile (≤900px)
const sidebarWrap =
   "hidden max-[900px]:hidden lg:block w-[var(--sidebar-width,260px)] flex-shrink-0 sticky top-[66px] h-[calc(100vh-64px)] self-start border-r border-[var(--color-sidebar-border)] bg-[var(--color-sidebar-bg)] z-40 overflow-hidden [display:block] max-[900px]:[display:none]";

// Main content area
const mainContent =
   "flex-1 min-w-0 px-12 py-10 bg-[var(--color-bg-white)] max-[1024px]:px-8 max-[1024px]:py-8 max-[900px]:px-6 max-[900px]:pt-20 max-[900px]:pb-8 max-[640px]:px-5 max-[640px]:pt-[4.5rem] max-[640px]:pb-8";

// Mobile hamburger — fixed, only visible ≤900px
const menuBtn =
   "hidden fixed top-[14px] left-[14px] z-[200] bg-white border border-[var(--color-sidebar-border)] p-[7px_10px] rounded-[6px] cursor-pointer shadow-[var(--shadow-sm)] text-[var(--color-nav-text)] transition-colors duration-150 hover:bg-[var(--color-bg-light)] max-[900px]:block";

// ── Component ──────────────────────────────────────────────────

const ComponentsLayout = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);

   return (
      <div className={shell}>
         {/* ── Row 1: Full-width Header ── */}
         <Header />

         {/* ── Row 2: Sticky sidebar + page content ── */}
         <div className={middleRow}>
            {/* Sticky sidebar — desktop only */}
            <aside
               className={[
                  "w-[var(--sidebar-width,260px)] flex-shrink-0 sticky top-[66px]",
                  "h-[calc(100vh-64px)] self-start border-r border-[var(--color-sidebar-border)]",
                  "bg-[var(--color-sidebar-bg)] z-40 overflow-hidden",
                  "hidden [&]:block max-[900px]:![display:none]",
               ].join(" ")}
               style={{ display: "block" }}
            >
               <Sidebar
                  isOpen={sidebarOpen}
                  onClose={() => setSidebarOpen(false)}
               />
            </aside>

            {/* Mobile hamburger */}
            <button
               className={menuBtn}
               aria-label="Toggle Navigation"
               onClick={() => setSidebarOpen(true)}
            >
               <Menu size={16} />
            </button>

            {/* Page content */}
            <main className={mainContent}>
               <Outlet />
            </main>
         </div>

         {/* ── Row 3: Full-width Footer ── */}
         <Footer />
      </div>
   );
};

export default ComponentsLayout;
