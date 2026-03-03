import styled from "styled-components";

// ── Styled ─────────────────────────────────────────────────────

const Bar = styled.header`
   height: 54px;
   min-height: 54px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 16px;
   background: #ffffff;
   border-bottom: 1px solid #e5e7eb;
   z-index: 200;
   gap: 12px;
   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
   flex-shrink: 0;
`;

const Left = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   flex: 1;
   min-width: 0;
`;

const Center = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
   flex-shrink: 0;
`;

const Right = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
   flex: 1;
   justify-content: flex-end;
`;

const BackBtn = styled.button`
   width: 34px;
   height: 34px;
   border-radius: 8px;
   border: 1px solid #e5e7eb;
   background: #ffffff;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   color: #374151;
   font-size: 0.8rem;
   flex-shrink: 0;
   transition: all 0.15s ease;

   &:hover {
      background: #f9fafb;
      border-color: #d1d5db;
      transform: translateX(-1px);
   }
`;

const Breadcrumb = styled.div`
   display: flex;
   align-items: center;
   gap: 6px;
   overflow: hidden;
`;

const Crumb = styled.span`
   font-size: 0.82rem;
   font-family: var(--inter-font);
   color: ${({ $active }) => ($active ? "#111827" : "#9ca3af")};
   font-weight: ${({ $active }) => ($active ? "600" : "400")};
   cursor: ${({ $active }) => ($active ? "default" : "pointer")};
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   transition: color 0.15s;

   &:hover {
      color: ${({ $active }) => ($active ? "#111827" : "#374151")};
   }
`;

const Sep = styled.i`
   font-size: 0.55rem;
   color: #d1d5db;
   flex-shrink: 0;
`;

const ZoomGroup = styled.div`
   display: flex;
   align-items: center;
   gap: 2px;
   background: #f9fafb;
   border: 1px solid #e5e7eb;
   border-radius: 8px;
   padding: 3px 6px;
   min-width: 72px;
   justify-content: center;
`;

const ZoomVal = styled.span`
   font-size: 0.78rem;
   font-weight: 600;
   color: #374151;
   font-family: var(--inter-font);
   font-variant-numeric: tabular-nums;
`;

const ZoomIcon = styled.i`
   font-size: 0.62rem;
   color: #9ca3af;
   margin-right: 3px;
`;

const Divider = styled.div`
   width: 1px;
   height: 22px;
   background: #e5e7eb;
`;

const VpGroup = styled.div`
   display: flex;
   align-items: center;
   gap: 2px;
   background: #f9fafb;
   border: 1px solid #e5e7eb;
   border-radius: 8px;
   padding: 3px;
`;

const VpBtn = styled.button`
   height: 28px;
   padding: 0 10px;
   border: none;
   background: ${({ $active }) => ($active ? "#ffffff" : "transparent")};
   border-radius: 5px;
   display: flex;
   align-items: center;
   gap: 5px;
   cursor: pointer;
   color: ${({ $active }) => ($active ? "#111827" : "#6b7280")};
   font-size: 0.72rem;
   font-weight: ${({ $active }) => ($active ? "600" : "400")};
   font-family: var(--inter-font);
   transition: all 0.15s;
   box-shadow: ${({ $active }) =>
      $active ? "0 1px 3px rgba(0,0,0,0.08)" : "none"};
   white-space: nowrap;

   i {
      font-size: 0.75rem;
   }

   &:hover:not([disabled]) {
      background: ${({ $active }) =>
         $active ? "#ffffff" : "rgba(255,255,255,0.7)"};
      color: #111827;
   }
`;

const ActionBtn = styled.button`
   display: flex;
   align-items: center;
   gap: 6px;
   padding: 0 14px;
   height: 34px;
   border-radius: 8px;
   font-size: 0.82rem;
   font-weight: 600;
   font-family: var(--inter-font);
   cursor: pointer;
   transition: all 0.15s ease;
   white-space: nowrap;
   flex-shrink: 0;

   ${({ $primary, $copied }) =>
      $copied
         ? `
        background: #059669;
        border: 1px solid #059669;
        color: #ffffff;
        `
         : $primary
           ? `
        background: #111827;
        color: #ffffff;
        border: 1px solid #111827;
        &:hover { background: #1f2937; }
        `
           : `
        background: transparent;
        color: #374151;
        border: 1px solid #e5e7eb;
        &:hover { background: #f9fafb; border-color: #d1d5db; }
        `}
`;

// ── Viewport options ───────────────────────────────────────────

const VIEWPORTS = [
   { key: "desktop", icon: "fa-desktop", label: "Desktop" },
   { key: "tablet", icon: "fa-tablet-screen-button", label: "Tablet" },
   { key: "mobile", icon: "fa-mobile-screen", label: "Mobile" },
];

// ── Component ─────────────────────────────────────────────────

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
   const capitalize = (s) =>
      s ? s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, " ") : "";

   return (
      <Bar>
         {/* Left */}
         <Left>
            <BackBtn onClick={onBack} title="Go back">
               <i className="fa-solid fa-arrow-left"></i>
            </BackBtn>

            <Breadcrumb>
               <Crumb onClick={onNavigateToAll}>Components</Crumb>
               <Sep className="fa-solid fa-chevron-right" />
               <Crumb onClick={onNavigateToSection}>
                  {capitalize(section)}
               </Crumb>
               <Sep className="fa-solid fa-chevron-right" />
               <Crumb $active>{variantName}</Crumb>
            </Breadcrumb>
         </Left>

         {/* Center */}
         <Center>
            <ZoomGroup>
               <ZoomIcon className="fa-solid fa-magnifying-glass" />
               <ZoomVal>{flowZoom}%</ZoomVal>
            </ZoomGroup>

            <Divider />

            <VpGroup>
               {VIEWPORTS.map((vp) => (
                  <VpBtn
                     key={vp.key}
                     $active={viewport === vp.key}
                     onClick={() => onViewportChange(vp.key)}
                     title={vp.label}
                  >
                     <i className={`fa-solid ${vp.icon}`}></i>
                     {vp.label}
                  </VpBtn>
               ))}
            </VpGroup>
         </Center>

         {/* Right */}
         <Right>
            <ActionBtn onClick={onReset} title="Reset to defaults">
               <i className="fa-solid fa-rotate-left"></i>
               Reset
            </ActionBtn>
            <ActionBtn $primary $copied={copied} onClick={onCopy}>
               <i className={`fa-solid ${copied ? "fa-check" : "fa-code"}`}></i>
               {copied ? "Copied!" : "Copy Code"}
            </ActionBtn>
         </Right>
      </Bar>
   );
};

export default EditorTopBar;
