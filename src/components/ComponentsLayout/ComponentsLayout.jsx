import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// ── Shell ──────────────────────────────────────────────────────

const Shell = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100vh;
   background: var(--color-bg-white);
`;

// ── Middle row ─────────────────────────────────────────────────

const MiddleRow = styled.div`
   display: flex;
   flex: 1;
`;

// ── Sidebar wrap — sticky ──────────────────────────────────────
// top: 64px           → sticks just below the header (not behind it)
// height: calc(100vh - 64px) → fills exactly the remaining viewport
// align-self: flex-start     → REQUIRED for sticky to trigger

const SidebarWrap = styled.aside`
   width: var(--sidebar-width, 260px);
   flex-shrink: 0;
   position: sticky;
   top: 66px;
   height: calc(100vh - 64px);
   align-self: flex-start;
   border-right: 1px solid var(--color-sidebar-border);
   background: var(--color-sidebar-bg);
   z-index: 40;
   overflow: hidden;

   @media (max-width: 900px) {
      display: none;
   }
`;

// ── Main content ───────────────────────────────────────────────

const MainContent = styled.main`
   flex: 1;
   min-width: 0;
   padding: 2.5rem 3rem;
   background: var(--color-bg-white);

   @media (max-width: 1024px) {
      padding: 2rem 2rem;
   }

   @media (max-width: 900px) {
      padding: 5rem 1.5rem 2rem;
   }

   @media (max-width: 640px) {
      padding: 4.5rem 1.25rem 2rem;
   }
`;

// ── Mobile menu button ─────────────────────────────────────────

const MenuBtn = styled.button`
   display: none;
   position: fixed;
   top: 14px;
   left: 14px;
   z-index: 200;
   background: white;
   border: 1px solid var(--color-sidebar-border);
   padding: 7px 10px;
   border-radius: 6px;
   cursor: pointer;
   box-shadow: var(--shadow-sm);
   font-size: 0.9rem;
   color: var(--color-nav-text);
   transition: background 0.14s ease;

   &:hover {
      background: var(--color-bg-light);
   }

   @media (max-width: 900px) {
      display: block;
   }
`;

// ── Component ─────────────────────────────────────────────────

const ComponentsLayout = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);

   return (
      <Shell>
         {/* ── Row 1: Full-width Header ── */}
         <Header />

         {/* ── Row 2: Sticky sidebar + page content ── */}
         <MiddleRow>
            {/* Sticky sidebar */}
            <SidebarWrap>
               <Sidebar
                  isOpen={sidebarOpen}
                  onClose={() => setSidebarOpen(false)}
               />
            </SidebarWrap>

            {/* Mobile hamburger */}
            <MenuBtn
               aria-label="Toggle Navigation"
               onClick={() => setSidebarOpen(true)}
            >
               <i className="fa-solid fa-bars"></i>
            </MenuBtn>

            {/* Page content — grows naturally */}
            <MainContent>
               <Outlet />
            </MainContent>
         </MiddleRow>

         {/* ── Row 3: Full-width Footer ── */}
         <Footer />
      </Shell>
   );
};

export default ComponentsLayout;
