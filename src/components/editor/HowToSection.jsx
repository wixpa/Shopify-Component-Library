import styled from "styled-components";

const Wrap = styled.div`
   padding: 16px;
   border-bottom: 1px solid #f3f4f6;
`;

const Top = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
   gap: 12px;
   margin-bottom: 18px;
`;

const Title = styled.h3`
   font-size: 0.9rem;
   font-weight: 700;
   color: #111827;
   line-height: 1.35;
   font-family: var(--inter-font);
`;

const WatchBtn = styled.a`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 3px;
   background: #111827;
   color: #fff;
   padding: 8px 11px;
   border-radius: 8px;
   font-size: 0.68rem;
   font-weight: 700;
   font-family: var(--inter-font);
   text-decoration: none;
   flex-shrink: 0;
   text-align: center;
   transition: background 0.15s;
   line-height: 1.2;

   i {
      font-size: 0.85rem;
      color: #f59e0b;
      margin-bottom: 2px;
   }
   &:hover {
      background: #1f2937;
   }
`;

const Steps = styled.ol`
   list-style: none;
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

const HowToSection = () => (
   <Wrap>
      <Top>
         <Title>
            How to Add to
            <br />
            Your Shopify Theme
         </Title>
         <WatchBtn href="#" aria-label="Watch tutorial">
            <i className="fa-solid fa-play"></i>
            Watch
            <br />
            Tutorial
         </WatchBtn>
      </Top>

      <Steps>
         {STEPS.map((step) => (
            <Step key={step.num}>
               <Num>{step.num}</Num>
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
