import styled from "styled-components";
import PanelHeader from "./PanelHeader";
import PanelActions from "./PanelActions";
import AccordionSection from "./AccordionSection";
import HowToSection from "./HowToSection";

// ── Styled ─────────────────────────────────────────────────────

const Panel = styled.aside`
   width: 292px;
   min-width: 292px;
   height: 100%;
   background: #ffffff;
   border-left: 1px solid #e5e7eb;
   display: flex;
   flex-direction: column;
   overflow: hidden;
   box-shadow: -2px 0 8px rgba(0, 0, 0, 0.04);
   flex-shrink: 0;
`;

const Scroll = styled.div`
   flex: 1;
   overflow-y: auto;
   overflow-x: hidden;

   &::-webkit-scrollbar {
      width: 4px;
   }
   &::-webkit-scrollbar-track {
      background: transparent;
   }
   &::-webkit-scrollbar-thumb {
      background: #e2e8f0;
      border-radius: 10px;
      &:hover {
         background: #cbd5e1;
      }
   }
`;

const SectionLabel = styled.div`
   padding: 14px 16px 6px;
   font-size: 0.67rem;
   font-weight: 700;
   color: #9ca3af;
   text-transform: uppercase;
   letter-spacing: 0.09em;
   font-family: var(--inter-font);
`;

const SupportBox = styled.div`
   margin: 14px 16px 24px;
   padding: 11px 13px;
   background: #eff6ff;
   border: 1px solid #bfdbfe;
   border-radius: 8px;
   font-size: 0.77rem;
   color: #1d4ed8;
   font-family: var(--inter-font);
   line-height: 1.5;
   display: flex;
   gap: 8px;
   align-items: flex-start;

   i {
      margin-top: 2px;
      flex-shrink: 0;
      color: #3b82f6;
      font-size: 0.75rem;
   }
   a {
      color: #1d4ed8;
      font-weight: 600;
      text-decoration: underline;
   }
`;

// ── Component ─────────────────────────────────────────────────

const EditorRightPanel = ({
   variantData,
   section,
   config,
   onUpdate,
   onCopy,
   onReset,
   copied,
   openAccordion,
   onToggleAccordion,
}) => (
   <Panel>
      {/* Fixed top area */}
      <PanelHeader
         title={variantData.name}
         description={variantData.description}
         sectionLabel={section}
      />
      <PanelActions onCopy={onCopy} onReset={onReset} copied={copied} />

      {/* Scrollable content */}
      <Scroll>
         <SectionLabel>Customize</SectionLabel>

         {variantData.accordions.map((acc) => (
            <AccordionSection
               key={acc.id}
               acc={acc}
               isOpen={openAccordion === acc.id}
               onToggle={onToggleAccordion}
               config={config}
               onUpdate={onUpdate}
            />
         ))}

         <SectionLabel>Add to Shopify</SectionLabel>
         <HowToSection />

         <SupportBox>
            <i className="fa-solid fa-circle-info"></i>
            <span>
               Need help? Our support team is <a href="#">available 24/7</a> to
               assist with implementation.
            </span>
         </SupportBox>
      </Scroll>
   </Panel>
);

export default EditorRightPanel;
