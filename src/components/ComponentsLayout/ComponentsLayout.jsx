import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";

// ── Styled Components ──────────────────────────────────────────

const LayoutWrapper = styled.div`
   display: flex;
   min-height: 100vh;
   background-color: var(--color-bg-white);
   overflow-x: hidden;
`;

const MainContent = styled.main`
   margin-left: var(--sidebar-width);
   padding: 40px 48px;
   width: 100%;

   @media (max-width: 900px) {
      margin-left: 0;
      padding: 80px 24px 40px;
   }

   /* Custom Scrollbar */
   &::-webkit-scrollbar {
      width: 8px;
   }
   &::-webkit-scrollbar-track {
      background: transparent;
   }
   &::-webkit-scrollbar-thumb {
      background-color: #b2bac2;
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
   }
`;

const MenuBtn = styled.button`
   display: none;
   position: fixed;
   top: 16px;
   left: 16px;
   z-index: 200;
   background: white;
   border: 1px solid var(--color-sidebar-border);
   padding: 8px 10px;
   border-radius: 4px;
   cursor: pointer;
   box-shadow: var(--shadow-sm);
   font-size: 1rem;
   color: var(--color-nav-text);
   transition: var(--transition-fast);

   &:hover {
      background-color: var(--color-bg-light);
   }

   @media (max-width: 900px) {
      display: block;
   }
`;

// ── Component ─────────────────────────────────────────────────

const ComponentsLayout = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);

   return (
      <LayoutWrapper>
         {/* Mobile hamburger */}
         <MenuBtn
            aria-label="Toggle Navigation"
            onClick={() => setSidebarOpen(true)}
         >
            <i className="fa-solid fa-bars"></i>
         </MenuBtn>

         {/* Sidebar */}
         <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

         {/* Page content injected by React Router */}
         <MainContent>
            <Outlet />
         </MainContent>
      </LayoutWrapper>
   );
};

export default ComponentsLayout;
