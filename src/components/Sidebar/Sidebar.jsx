import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { getAllCategories } from "../../registry/componentRegistry";

// ── Styled Components ──────────────────────────────────────────

const SidebarWrapper = styled.aside`
   width: var(--sidebar-width);
   height: 100vh;
   position: fixed;
   top: 0;
   left: 0;
   border-right: 1px solid var(--color-sidebar-border);
   background: var(--color-sidebar-bg);
   overflow-y: auto;
   padding: 24px 0;
   z-index: 100;
   transition: transform 0.3s ease;

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
   &::-webkit-scrollbar-thumb:hover {
      background-color: #6f7e8c;
   }

   @media (max-width: 900px) {
      transform: ${({ $isOpen }) =>
         $isOpen ? "translateX(0)" : "translateX(-100%)"};
      box-shadow: ${({ $isOpen }) =>
         $isOpen ? "5px 0 15px rgba(0,0,0,0.1)" : "none"};
   }
`;

const NavGroup = styled.div`
   margin-bottom: 8px;
`;

const NavGroupToggle = styled.div`
   display: flex;
   align-items: center;
   padding: 6px 16px 6px 24px;
   font-size: 0.875rem;
   font-weight: 600;
   color: var(--color-nav-text);
   cursor: pointer;
   transition: background-color 0.2s;
   user-select: none;
   font-family: var(--inter-font);

   &:hover {
      background-color: var(--color-nav-hover-bg);
   }
`;

const Arrow = styled.i`
   margin-right: 8px;
   font-size: 0.65rem;
   color: var(--color-nav-text-tertiary);
   transition: transform 0.2s;
   transform: ${({ $expanded }) =>
      $expanded ? "rotate(90deg)" : "rotate(0deg)"};
`;

const NavSubGroup = styled.div`
   display: ${({ $open }) => ($open ? "block" : "none")};
`;

const AllComponentsLink = styled(NavLink)`
   display: flex;
   align-items: center;
   padding: 7px 16px 7px 48px;
   font-size: 0.875rem;
   color: var(--color-nav-text-secondary);
   text-decoration: none;
   border-left: 3px solid transparent;
   font-family: var(--inter-font);
   font-weight: 500;
   transition:
      background-color 0.2s,
      color 0.2s;

   &:hover {
      background-color: var(--color-nav-hover-bg);
      color: var(--color-nav-text);
   }

   &.active {
      color: var(--color-nav-active);
      background-color: var(--color-nav-active-bg);
      font-weight: 600;
      border-left: 3px solid var(--color-nav-active);
      padding-left: 45px;
   }
`;

const NavCategory = styled.div`
   font-size: 0.7rem;
   font-weight: 700;
   color: var(--color-nav-text-tertiary);
   text-transform: uppercase;
   letter-spacing: 0.09em;
   padding: 16px 16px 6px 48px;
   font-family: var(--inter-font);
`;

const NavLeaf = styled(NavLink)`
   padding: 6px 16px 6px 48px;
   font-size: 0.875rem;
   color: var(--color-nav-text-secondary);
   text-decoration: none;
   display: flex;
   align-items: center;
   justify-content: space-between;
   font-family: var(--inter-font);
   transition:
      background-color 0.2s,
      color 0.2s;

   &:hover {
      color: var(--color-nav-text);
      background-color: var(--color-nav-hover-bg);
   }

   &.active {
      color: var(--color-nav-active);
      background-color: var(--color-nav-active-bg);
      font-weight: 600;
      border-left: 3px solid var(--color-nav-active);
      padding-left: 45px;
   }
`;

const VariantCount = styled.span`
   font-size: 0.65rem;
   font-weight: 600;
   background: var(--color-badge-gray-bg);
   color: var(--color-nav-text-tertiary);
   padding: 1px 7px;
   border-radius: 999px;
   font-family: var(--inter-font);
`;

const Overlay = styled.div`
   display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
   position: fixed;
   inset: 0;
   background-color: rgba(0, 0, 0, 0.5);
   z-index: 90;

   @media (min-width: 901px) {
      display: none;
   }
`;

// ── Component ─────────────────────────────────────────────────

const Sidebar = ({ isOpen, onClose }) => {
   const [groupOpen, setGroupOpen] = useState(true);
   const categories = getAllCategories();

   return (
      <>
         <Overlay $isOpen={isOpen} onClick={onClose} />
         <SidebarWrapper $isOpen={isOpen}>
            <nav>
               <NavGroup>
                  <NavGroupToggle onClick={() => setGroupOpen((p) => !p)}>
                     <Arrow
                        className="fa-solid fa-chevron-right"
                        $expanded={groupOpen}
                     />
                     Components
                  </NavGroupToggle>

                  <NavSubGroup $open={groupOpen}>
                     {/* All Components */}
                     <AllComponentsLink to="/components" end>
                        All Components
                     </AllComponentsLink>

                     {/* One nav category per registry group */}
                     <NavCategory>Library</NavCategory>

                     {categories.map((cat) => (
                        <NavLeaf key={cat.slug} to={`/components/${cat.slug}`}>
                           {cat.title}
                           <VariantCount>{cat.variants.length}</VariantCount>
                        </NavLeaf>
                     ))}
                  </NavSubGroup>
               </NavGroup>
            </nav>
         </SidebarWrapper>
      </>
   );
};

export default Sidebar;
