import { memo } from "react";
import styled from "styled-components";

// ── Styled ─────────────────────────────────────────────────────

const Wrapper = styled.div`
   border-bottom: 1px solid #f3f4f6;
`;

const Trigger = styled.button`
   width: 100%;
   display: flex;
   align-items: center;
   gap: 10px;
   padding: 10px 16px;
   background: transparent;
   border: none;
   cursor: pointer;
   text-align: left;
   transition: background 0.12s;

   &:hover {
      background: #fafafa;
   }
`;

const IconBox = styled.div`
   width: 32px;
   height: 32px;
   border-radius: 8px;
   background: ${({ $bg }) => $bg || "#f3f4f6"};
   display: flex;
   align-items: center;
   justify-content: center;
   flex-shrink: 0;
   font-size: 0.78rem;
   color: ${({ $color }) => $color || "#6b7280"};
   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const TextBlock = styled.div`
   flex: 1;
   min-width: 0;
`;

const Title = styled.div`
   font-size: 0.84rem;
   font-weight: 600;
   color: #111827;
   font-family: var(--inter-font);
   margin-bottom: 1px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

const Subtitle = styled.div`
   font-size: 0.71rem;
   color: #9ca3af;
   font-family: var(--inter-font);
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

const Chevron = styled.div`
   width: 20px;
   height: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 4px;
   background: ${({ $open }) => ($open ? "#eff6ff" : "transparent")};
   color: ${({ $open }) => ($open ? "#3b82f6" : "#9ca3af")};
   font-size: 0.6rem;
   transition: all 0.18s;
   flex-shrink: 0;

   i {
      transition: transform 0.2s;
      transform: ${({ $open }) => ($open ? "rotate(180deg)" : "rotate(0deg)")};
   }
`;

const Body = styled.div`
   padding: ${({ $open }) => ($open ? "4px 16px 16px 58px" : "0 16px 0 58px")};
   max-height: ${({ $open }) => ($open ? "700px" : "0")};
   overflow: hidden;
   transition:
      max-height 0.28s ease,
      padding 0.18s ease;
`;

// ── Control atoms ──────────────────────────────────────────────

const CtrlWrap = styled.div`
   margin-top: 10px;
`;

const CtrlLabel = styled.label`
   display: block;
   font-size: 0.67rem;
   font-weight: 700;
   color: #6b7280;
   margin-bottom: 5px;
   font-family: var(--inter-font);
   text-transform: uppercase;
   letter-spacing: 0.06em;
`;

const TextInput = styled.input`
   width: 100%;
   padding: 7px 10px;
   border: 1px solid #e5e7eb;
   border-radius: 7px;
   font-size: 0.82rem;
   font-family: var(--inter-font);
   color: #111827;
   background: #fff;
   outline: none;
   box-sizing: border-box;
   transition: all 0.15s;

   &:hover:not(:focus) {
      border-color: #d1d5db;
   }
   &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
   }
`;

const SelectInput = styled.select`
   width: 100%;
   padding: 7px 10px;
   border: 1px solid #e5e7eb;
   border-radius: 7px;
   font-size: 0.82rem;
   font-family: var(--inter-font);
   color: #111827;
   background: #fff;
   outline: none;
   cursor: pointer;
   box-sizing: border-box;
   transition: all 0.15s;

   &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
   }
`;

const ColorRow = styled.div`
   display: flex;
   align-items: center;
   gap: 7px;
`;

const ColorPicker = styled.input`
   width: 34px;
   height: 34px;
   border: 1px solid #e5e7eb;
   border-radius: 7px;
   padding: 2px;
   cursor: pointer;
   background: none;
   flex-shrink: 0;
   transition: border-color 0.15s;

   &:hover {
      border-color: #d1d5db;
   }
`;

const ColorHex = styled.input`
   flex: 1;
   padding: 7px 10px;
   border: 1px solid #e5e7eb;
   border-radius: 7px;
   font-size: 0.78rem;
   font-family: "Courier New", monospace;
   color: #374151;
   background: #f9fafb;
   outline: none;
   box-sizing: border-box;
   transition: all 0.15s;

   &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      background: #fff;
   }
`;

// ── Control renderer ───────────────────────────────────────────

const Control = memo(({ ctrl, value, onChange }) => (
   <CtrlWrap>
      <CtrlLabel>{ctrl.label}</CtrlLabel>

      {ctrl.type === "text" && (
         <TextInput
            type="text"
            value={value ?? ""}
            onChange={(e) => onChange(ctrl.key, e.target.value)}
            placeholder={`Enter ${ctrl.label.toLowerCase()}…`}
         />
      )}

      {ctrl.type === "color" && (
         <ColorRow>
            <ColorPicker
               type="color"
               value={value ?? "#000000"}
               onChange={(e) => onChange(ctrl.key, e.target.value)}
            />
            <ColorHex
               type="text"
               value={value ?? ""}
               onChange={(e) => onChange(ctrl.key, e.target.value)}
               placeholder="#000000"
               maxLength={9}
            />
         </ColorRow>
      )}

      {ctrl.type === "select" && (
         <SelectInput
            value={value ?? ""}
            onChange={(e) => onChange(ctrl.key, e.target.value)}
         >
            {ctrl.options.map((opt) => (
               <option key={opt} value={opt}>
                  {opt}
               </option>
            ))}
         </SelectInput>
      )}
   </CtrlWrap>
));

Control.displayName = "Control";

// ── Main ───────────────────────────────────────────────────────

const AccordionSection = memo(({ acc, isOpen, onToggle, config, onUpdate }) => (
   <Wrapper>
      <Trigger onClick={() => onToggle(acc.id)}>
         <IconBox $bg={acc.iconBg} $color={acc.iconColor}>
            <i className={`fa-solid ${acc.icon}`}></i>
         </IconBox>
         <TextBlock>
            <Title>{acc.title}</Title>
            <Subtitle>{acc.subtitle}</Subtitle>
         </TextBlock>
         <Chevron $open={isOpen}>
            <i className="fa-solid fa-chevron-down"></i>
         </Chevron>
      </Trigger>

      <Body $open={isOpen}>
         {acc.controls.map((ctrl) => (
            <Control
               key={ctrl.key}
               ctrl={ctrl}
               value={config[ctrl.key]}
               onChange={onUpdate}
            />
         ))}
      </Body>
   </Wrapper>
));

AccordionSection.displayName = "AccordionSection";

export default AccordionSection;
