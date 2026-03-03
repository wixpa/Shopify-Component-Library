import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

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
   margin-bottom: 16px;
`;

const NavItemRow = styled.div`
   display: flex;
   align-items: center;
   padding: 6px 16px 6px 24px;
   font-size: 0.875rem;
   font-weight: 500;
   color: ${({ $active }) =>
      $active ? "var(--color-nav-active)" : "var(--color-nav-text)"};
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
   font-size: 0.7rem;
   color: var(--color-nav-text-tertiary);
   transition: transform 0.2s;
   transform: ${({ $expanded }) =>
      $expanded ? "rotate(90deg)" : "rotate(0deg)"};
`;

const NavSubGroup = styled.div`
   display: ${({ $open }) => ($open ? "block" : "none")};
`;

const NavSubItem = styled(NavLink)`
   display: flex;
   align-items: center;
   padding: 8px 16px 8px 48px;
   font-size: 0.875rem;
   color: var(--color-nav-text-secondary);
   text-decoration: none;
   cursor: pointer;
   border-left: 3px solid transparent;
   font-family: var(--inter-font);
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
      font-weight: 500;
      border-left: 3px solid var(--color-nav-active);
      padding-left: 45px;
   }
`;

const NavCategory = styled.div`
   font-size: 0.75rem;
   font-weight: 700;
   color: var(--color-nav-text-tertiary);
   text-transform: uppercase;
   letter-spacing: 0.08em;
   padding: 24px 16px 8px 48px;
   margin-top: 8px;
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
      font-weight: 500;
      border-left: 3px solid var(--color-nav-active);
      padding-left: 45px;
   }
`;

const BadgeNew = styled.span`
   font-size: 0.625rem;
   font-weight: 700;
   background-color: var(--color-badge-new-bg);
   color: var(--color-badge-new-text);
   padding: 2px 6px;
   border-radius: 10px;
   margin-left: 8px;
   text-transform: uppercase;
   font-family: var(--inter-font);
`;

const Overlay = styled.div`
   display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.5);
   z-index: 90;

   @media (min-width: 901px) {
      display: none;
   }
`;

// ── Nav Data ───────────────────────────────────────────────────

const navData = [
   {
      id: "components",
      label: "Components",
      subItems: [{ label: "All Components", to: "/components" }],
      categories: [
         {
            id: "layout",
            label: "Layout",
            links: [
               { label: "Headers", to: "/components/headers", badge: null },
               { label: "Hero", to: "/components/hero", badge: null },
               { label: "Footer", to: "/components/footer", badge: null },
            ],
         },
         {
            id: "sections",
            label: "Sections",
            links: [
               { label: "Features", to: "/components/features", badge: null },
               {
                  label: "Testimonials",
                  to: "/components/testimonials",
                  badge: null,
               },
               { label: "Pricing", to: "/components/pricing", badge: "New" },
               {
                  label: "CTA Banners",
                  to: "/components/cta-banners",
                  badge: null,
               },
               { label: "FAQ", to: "/components/faq", badge: "New" },
            ],
         },
         {
            id: "ui",
            label: "UI Elements",
            links: [
               { label: "Buttons", to: "/components/buttons", badge: null },
               { label: "Cards", to: "/components/cards", badge: null },
               { label: "Badges", to: "/components/badges", badge: null },
               { label: "Forms", to: "/components/forms", badge: null },
               { label: "Modals", to: "/components/modals", badge: null },
            ],
         },
      ],
   },
];

// ── Component ─────────────────────────────────────────────────

const Sidebar = ({ isOpen, onClose }) => {
   const [expandedGroups, setExpandedGroups] = useState({
      components: true,
   });
   const location = useLocation();

   const toggleGroup = (id) => {
      setExpandedGroups((prev) => ({ ...prev, [id]: !prev[id] }));
   };

   return (
      <>
         <Overlay $isOpen={isOpen} onClick={onClose} />
         <SidebarWrapper $isOpen={isOpen}>
            <nav>
               {navData.map((group) => (
                  <NavGroup key={group.id}>
                     <NavItemRow
                        $active={location.pathname.startsWith("/components")}
                        onClick={() => toggleGroup(group.id)}
                     >
                        <Arrow
                           className="fa-solid fa-chevron-right"
                           $expanded={expandedGroups[group.id]}
                        />
                        {group.label}
                     </NavItemRow>

                     {group.subItems && (
                        <NavSubGroup $open={expandedGroups[group.id]}>
                           {group.subItems.map((item) => (
                              <NavSubItem key={item.label} to={item.to} end>
                                 {item.label}
                              </NavSubItem>
                           ))}

                           {group.categories?.map((category) => (
                              <div key={category.id}>
                                 <NavCategory>{category.label}</NavCategory>
                                 {category.links.map((link) => (
                                    <NavLeaf key={link.label} to={link.to}>
                                       {link.label}
                                       {link.badge && (
                                          <BadgeNew>{link.badge}</BadgeNew>
                                       )}
                                    </NavLeaf>
                                 ))}
                              </div>
                           ))}
                        </NavSubGroup>
                     )}
                  </NavGroup>
               ))}
            </nav>
         </SidebarWrapper>
      </>
   );
};

export default Sidebar;
