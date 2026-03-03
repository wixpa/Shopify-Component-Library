import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { getAllCategories } from "../../registry/componentRegistry";

// ── Sidebar root ───────────────────────────────────────────────

const SidebarRoot = styled.nav`
   width: 100%;
   height: 100%;
   background: var(--color-sidebar-bg);
   padding: 1.25rem 0;
   overflow-y: auto;

   scrollbar-width: thin;
   scrollbar-color: #d1d5db transparent;

   &::-webkit-scrollbar {
      width: 4px;
   }
   &::-webkit-scrollbar-track {
      background: transparent;
   }
   &::-webkit-scrollbar-thumb {
      background: #d1d5db;
      border-radius: 4px;
   }
   &::-webkit-scrollbar-thumb:hover {
      background: #9ca3af;
   }
`;

// ── Nav group ──────────────────────────────────────────────────

const NavGroup = styled.div`
   margin-bottom: 4px;
`;

const NavGroupToggle = styled.button`
   display: flex;
   align-items: center;
   width: 100%;
   padding: 7px 16px 7px 20px;
   font-size: 0.82rem;
   font-weight: 700;
   color: var(--color-nav-text);
   background: none;
   border: none;
   cursor: pointer;
   text-align: left;
   transition: background 0.15s ease;
   font-family: var(--inter-font);

   &:hover {
      background: var(--color-nav-hover-bg);
   }
`;

const Arrow = styled.i`
   margin-right: 8px;
   font-size: 0.6rem;
   color: var(--color-nav-text-tertiary);
   transition: transform 0.2s ease;
   transform: ${({ $expanded }) =>
      $expanded ? "rotate(90deg)" : "rotate(0deg)"};
   flex-shrink: 0;
`;

const NavSubGroup = styled.div`
   display: ${({ $open }) => ($open ? "block" : "none")};
`;

// ── Section label ──────────────────────────────────────────────

const NavLabel = styled.div`
   font-size: 0.65rem;
   font-weight: 700;
   color: var(--color-nav-text-tertiary);
   text-transform: uppercase;
   letter-spacing: 0.1em;
   padding: 14px 16px 5px 44px;
   font-family: var(--inter-font);
`;

// ── All Components link ────────────────────────────────────────

const AllComponentsLink = styled(NavLink)`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   padding: 7px 16px 7px 44px;
   font-size: 0.82rem;
   font-weight: 500;
   color: var(--color-nav-text-secondary);
   text-decoration: none;
   border-left: 3px solid transparent;
   font-family: var(--inter-font);
   transition:
      background 0.15s ease,
      color 0.15s ease;

   i {
      font-size: 0.68rem;
      opacity: 0.6;
   }

   &:hover {
      background: var(--color-nav-hover-bg);
      color: var(--color-nav-text);
   }

   &.active {
      color: var(--color-nav-active);
      background: var(--color-nav-active-bg);
      font-weight: 600;
      border-left-color: var(--color-nav-active);
      padding-left: 41px;
   }
`;

// ── Category leaf ──────────────────────────────────────────────

const NavLeaf = styled(NavLink)`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 6px 16px 6px 44px;
   font-size: 0.82rem;
   font-weight: 500;
   color: var(--color-nav-text-secondary);
   text-decoration: none;
   border-left: 3px solid transparent;
   font-family: var(--inter-font);
   transition:
      background 0.15s ease,
      color 0.15s ease;

   &:hover {
      background: var(--color-nav-hover-bg);
      color: var(--color-nav-text);
   }

   &.active {
      color: var(--color-nav-active);
      background: var(--color-nav-active-bg);
      font-weight: 600;
      border-left-color: var(--color-nav-active);
      padding-left: 41px;
   }
`;

const VariantCount = styled.span`
   font-size: 0.62rem;
   font-weight: 600;
   background: var(--color-badge-gray-bg);
   color: var(--color-nav-text-tertiary);
   padding: 1px 7px;
   border-radius: 999px;
   font-family: var(--inter-font);
   flex-shrink: 0;
`;

// ── Mobile overlay ─────────────────────────────────────────────

const Overlay = styled.div`
   display: none;

   @media (max-width: 900px) {
      display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.45);
      z-index: 90;
   }
`;

// ── Mobile drawer ──────────────────────────────────────────────

const MobileDrawer = styled.aside`
   display: none;

   @media (max-width: 900px) {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: var(--sidebar-width, 260px);
      height: 100vh;
      background: var(--color-sidebar-bg);
      border-right: 1px solid var(--color-sidebar-border);
      z-index: 100;
      transform: ${({ $isOpen }) =>
         $isOpen ? "translateX(0)" : "translateX(-100%)"};
      transition: transform 0.28s ease;
      box-shadow: ${({ $isOpen }) =>
         $isOpen ? "5px 0 20px rgba(0,0,0,0.12)" : "none"};
      overflow-y: auto;
   }
`;

// ── Component ─────────────────────────────────────────────────

const Sidebar = ({ isOpen, onClose }) => {
   const [groupOpen, setGroupOpen] = useState(true);
   const categories = getAllCategories();

   // Shared nav markup — rendered directly, not as inner component
   const navContent = (
      <SidebarRoot>
         <NavGroup>
            <NavGroupToggle
               onClick={() => setGroupOpen((p) => !p)}
               aria-expanded={groupOpen}
            >
               <Arrow
                  className="fa-solid fa-chevron-right"
                  $expanded={groupOpen}
               />
               Components
            </NavGroupToggle>

            <NavSubGroup $open={groupOpen}>
               <AllComponentsLink to="/components" end>
                  <i className="fa-solid fa-grid-2"></i>
                  All Components
               </AllComponentsLink>

               <NavLabel>Library</NavLabel>

               {categories.map((cat) => (
                  <NavLeaf
                     key={cat.slug}
                     to={`/components/${cat.slug}`}
                     onClick={onClose}
                  >
                     {cat.title}
                     <VariantCount>{cat.variants.length}</VariantCount>
                  </NavLeaf>
               ))}
            </NavSubGroup>
         </NavGroup>
      </SidebarRoot>
   );

   return (
      <>
         {/* ── Desktop: plain in-flow nav ── */}
         {/* Sticky behaviour is handled by SidebarWrap in ComponentsLayout */}
         <div style={{ width: "100%", height: "100%" }}>{navContent}</div>

         {/* ── Mobile: overlay + slide-in drawer ── */}
         <Overlay $isOpen={isOpen} onClick={onClose} />
         <MobileDrawer $isOpen={isOpen}>{navContent}</MobileDrawer>
      </>
   );
};

export default Sidebar;
