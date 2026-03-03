import styled from "styled-components";

// ── Styled ─────────────────────────────────────────────────────

const Wrap = styled.div`
   padding: 16px;
   border-bottom: 1px solid #f3f4f6;
`;

const Title = styled.h3`
   font-size: 0.9rem;
   font-weight: 700;
   color: #111827;
   line-height: 1.35;
   font-family: var(--inter-font);
   margin: 0 0 12px 0;
`;

const WatchBtn = styled.a`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 8px;
   width: 100%;
   background: #111827;
   color: #ffffff;
   padding: 9px 14px;
   border-radius: 8px;
   font-size: 0.78rem;
   font-weight: 600;
   font-family: var(--inter-font);
   text-decoration: none;
   text-align: center;
   transition: background 0.15s ease;
   cursor: pointer;
   margin-bottom: 18px;
   box-sizing: border-box;

   i {
      font-size: 0.72rem;
      color: #f59e0b;
   }

   &:hover {
      background: #1f2937;
   }

   &:focus-visible {
      outline: 2px solid #3b82f6;
      outline-offset: 2px;
   }
`;

const Steps = styled.ol`
   list-style: none;
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: column;
   gap: 12px;
`;

const Step = styled.li`
   display: flex;
   align-items: flex-start;
   gap: 10px;
`;

const Num = styled.div`
   width: 22px;
   min-width: 22px;
   height: 22px;
   border-radius: 50%;
   background: #f1f5f9;
   color: #374151;
   font-size: 0.7rem;
   font-weight: 700;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: var(--inter-font);
   margin-top: 1px;
   flex-shrink: 0;
`;

const StepTitle = styled.div`
   font-size: 0.8rem;
   font-weight: 600;
   color: #111827;
   font-family: var(--inter-font);
   margin-bottom: 2px;
`;

const StepDesc = styled.div`
   font-size: 0.73rem;
   color: #6b7280;
   font-family: var(--inter-font);
   line-height: 1.45;
`;

// ── Data ───────────────────────────────────────────────────────

const STEPS = [
   {
      num: 1,
      title: "Open Theme Editor",
      desc: "Go to Online Store → Themes → Customize",
   },
   {
      num: 2,
      title: "Add Custom Liquid",
      desc: 'Click "Add Section" → "Custom Liquid"',
   },
   {
      num: 3,
      title: "Paste the Code",
      desc: "Copy the code above and paste it into the Custom Liquid section",
   },
   {
      num: 4,
      title: "Save Changes",
      desc: 'Click "Save" to apply changes to your theme',
   },
];

// ── Component ─────────────────────────────────────────────────

const HowToSection = () => (
   <Wrap>
      {/* Title — full width, above button */}
      <Title>How to Add to Your Shopify Theme</Title>

      {/* Watch button — full width row below title */}
      <WatchBtn
         href="#"
         aria-label="Watch tutorial video"
         onClick={(e) => e.preventDefault()}
      >
         <i className="fa-solid fa-play" aria-hidden="true"></i>
         Watch Tutorial
      </WatchBtn>

      {/* Steps list */}
      <Steps aria-label="Installation steps">
         {STEPS.map((step) => (
            <Step key={step.num}>
               <Num aria-hidden="true">{step.num}</Num>
               <div>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDesc>{step.desc}</StepDesc>
               </div>
            </Step>
         ))}
      </Steps>
   </Wrap>
);

export default HowToSection;
