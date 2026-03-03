import styled, { keyframes } from "styled-components";

const pop = keyframes`
    0%,100% { transform: scale(1); }
    50%      { transform: scale(0.95); }
`;

const Wrap = styled.div`
   padding: 12px 16px;
   display: flex;
   flex-direction: column;
   gap: 7px;
   border-bottom: 1px solid #f3f4f6;
   flex-shrink: 0;
`;

const Primary = styled.button`
   width: 100%;
   padding: 10px 16px;
   background: ${({ $copied }) => ($copied ? "#059669" : "#111827")};
   color: #fff;
   border: none;
   border-radius: 8px;
   font-size: 0.85rem;
   font-weight: 600;
   font-family: var(--inter-font);
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 8px;
   transition: background 0.25s ease;
   animation: ${({ $copied }) => ($copied ? pop : "none")} 0.2s ease;

   &:hover {
      background: ${({ $copied }) => ($copied ? "#047857" : "#1f2937")};
   }
`;

const Secondary = styled.button`
   width: 100%;
   padding: 8px 16px;
   background: transparent;
   color: #374151;
   border: 1px solid #e5e7eb;
   border-radius: 8px;
   font-size: 0.82rem;
   font-weight: 500;
   font-family: var(--inter-font);
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 7px;
   transition: all 0.15s;

   &:hover {
      background: #f9fafb;
      border-color: #d1d5db;
      color: #111827;
   }
`;

const PanelActions = ({ onCopy, onReset, copied }) => (
   <Wrap>
      <Primary $copied={copied} onClick={onCopy}>
         <i className={`fa-solid ${copied ? "fa-check" : "fa-code"}`}></i>
         {copied ? "Code Copied to Clipboard!" : "Copy Code"}
      </Primary>
      <Secondary onClick={onReset}>
         <i className="fa-solid fa-rotate-left"></i>
         Reset to Defaults
      </Secondary>
   </Wrap>
);

export default PanelActions;
