import styled from "styled-components";

// ── Styled ─────────────────────────────────────────────────────

const Wrap = styled.div`
   padding: 16px 16px 14px;
   border-bottom: 1px solid #f3f4f6;
   flex-shrink: 0;
`;

const TitleRow = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
   gap: 8px;
   margin-bottom: 6px;
`;

const Title = styled.h2`
   font-size: 1rem;
   font-weight: 700;
   color: #111827;
   font-family: var(--inter-font);
   letter-spacing: -0.01em;
   line-height: 1.3;
   margin: 0;
`;

const Badge = styled.span`
   font-size: 0.65rem;
   font-weight: 700;
   background: #eff6ff;
   color: #2563eb;
   padding: 3px 9px;
   border-radius: 999px;
   font-family: var(--inter-font);
   white-space: nowrap;
   flex-shrink: 0;
   margin-top: 2px;
   border: 1px solid #bfdbfe;
`;

const Desc = styled.p`
   font-size: 0.78rem;
   color: #6b7280;
   line-height: 1.5;
   font-family: var(--inter-font);
   margin: 0;
`;

// ── Util ───────────────────────────────────────────────────────

const capitalize = (s) =>
   s ? s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, " ") : "";

// ── Component ─────────────────────────────────────────────────

const PanelHeader = ({ title, description, sectionLabel }) => (
   <Wrap>
      <TitleRow>
         <Title>{title}</Title>
         {sectionLabel && <Badge>{capitalize(sectionLabel)}</Badge>}
      </TitleRow>
      {description && <Desc>{description}</Desc>}
   </Wrap>
);

export default PanelHeader;
