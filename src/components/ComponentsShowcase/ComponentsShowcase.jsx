import { useEffect, useRef } from "react";
import styled from "styled-components";

// ── Styled Components ──────────────────────────────────────────

const Section = styled.section`
   background-color: var(--color-bg-white);
   padding: var(--section-padding);
`;

const Container = styled.div`
   max-width: var(--container-max-width);
   margin: 0 auto;
   padding: var(--container-padding);
`;

const SectionHeader = styled.header`
   text-align: center;
   margin-bottom: 4rem;
   max-width: 800px;
   margin-left: auto;
   margin-right: auto;
`;

const SectionTitle = styled.h2`
   font-size: 2.5rem;
   font-weight: 700;
   color: var(--color-primary-dark);
   margin-bottom: 1rem;
   letter-spacing: -0.025em;
   font-family: var(--inter-font);
`;

const SectionSubtitle = styled.p`
   color: var(--color-text-light);
   font-size: 1.125rem;
   line-height: 1.6;
   max-width: 700px;
   margin: 0 auto;
   font-family: var(--inter-font);
`;

const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(1, 1fr);
   gap: 2rem;
   margin-bottom: 4rem;

   @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
   }

   @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
   }
`;

// ── Card ───────────────────────────────────────────────────────

const Card = styled.article`
   background: var(--color-bg-white);
   border: 1px solid var(--color-border);
   border-radius: 12px;
   overflow: hidden;
   transition: var(--transition-fast);
   display: flex;
   flex-direction: column;
   cursor: pointer;
   opacity: 0;
   transform: translateY(20px);
   transition:
      opacity 0.5s ease-out ${({ $delay }) => $delay}s,
      transform 0.5s ease-out ${({ $delay }) => $delay}s,
      box-shadow 0.2s ease,
      border-color 0.2s ease;

   &.visible {
      opacity: 1;
      transform: translateY(0);
   }

   &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
      border-color: var(--color-border-hover);
   }
`;

const CardPreview = styled.div`
   background-color: var(--color-bg-light);
   height: 180px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 1.5rem;
   position: relative;
   overflow: hidden;
`;

const CardContent = styled.div`
   padding: 1.25rem;
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
`;

const CardInfo = styled.div`
   h3 {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--color-text-main);
      margin-bottom: 0.25rem;
      font-family: var(--inter-font);
   }

   span {
      font-size: 0.875rem;
      color: var(--color-text-light);
      font-family: var(--inter-font);
   }
`;

const Tag = styled.span`
   font-size: 0.75rem;
   font-weight: 600;
   padding: 0.25rem 0.75rem;
   border-radius: var(--radius-full);
   white-space: nowrap;
   font-family: var(--inter-font);
   background-color: ${({ $variant }) =>
      $variant === "app-ui"
         ? "var(--color-tag-app-bg)"
         : "var(--color-tag-mkt-bg)"};
   color: ${({ $variant }) =>
      $variant === "app-ui"
         ? "var(--color-tag-app-text)"
         : "var(--color-tag-mkt-text)"};
`;

// ── Footer Button ──────────────────────────────────────────────

const FooterAction = styled.div`
   text-align: center;
`;

const BtnPrimary = styled.button`
   background-color: var(--color-btn-dark);
   color: var(--color-text-white);
   padding: 0.875rem 2rem;
   border-radius: var(--radius-md);
   font-weight: 600;
   font-size: 1rem;
   font-family: var(--inter-font);
   transition: var(--transition-fast);

   &:hover {
      background-color: var(--color-btn-dark-hover);
   }
`;

// ── Preview Illustrations ──────────────────────────────────────

// 1. Alerts Preview
const PreviewAlerts = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8px;
   width: 80%;
`;
const AlertItem = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
   background: white;
   padding: 6px;
   border-radius: 4px;
   box-shadow: var(--shadow-sm);
`;
const AlertIcon = styled.div`
   width: 16px;
   height: 16px;
   border-radius: 4px;
   background-color: ${({ $color }) =>
      $color || "var(--color-primary-blue-light)"};
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   font-size: 8px;
   flex-shrink: 0;
   transition: transform 0.2s;

   ${AlertItem}:hover & {
      transform: scale(1.1);
   }
`;
const AlertContent = styled.div`
   flex: 1;
`;
const AlertLine1 = styled.div`
   height: 4px;
   width: 40%;
   background: var(--color-icon);
   margin-bottom: 3px;
   border-radius: 2px;
`;
const AlertLine2 = styled.div`
   height: 3px;
   width: 90%;
   background: var(--color-border);
   border-radius: 2px;
`;

const AlertsPreview = () => (
   <PreviewAlerts>
      {[
         { icon: "fa-check", color: "var(--color-primary-blue-light)" },
         { icon: "fa-info", color: "var(--color-primary-blue-light)" },
         {
            icon: "fa-triangle-exclamation",
            color: "var(--color-primary-blue-light)",
         },
      ].map((item, i) => (
         <AlertItem key={i}>
            <AlertIcon $color={item.color}>
               <i className={`fa-solid ${item.icon}`}></i>
            </AlertIcon>
            <AlertContent>
               <AlertLine1 />
               <AlertLine2 />
            </AlertContent>
         </AlertItem>
      ))}
   </PreviewAlerts>
);

// 2. 404 Preview
const Preview404Box = styled.div`
   background: white;
   width: 90%;
   height: 80%;
   border-radius: 6px;
   box-shadow: var(--shadow-sm);
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 20px;
`;
const P404Text = styled.div`
   color: var(--color-primary-blue-light);
   font-size: 10px;
   font-weight: bold;
   margin-bottom: 4px;
   font-family: var(--inter-font);
`;
const P404Head = styled.div`
   height: 6px;
   width: 60px;
   background: #1f2937;
   margin-bottom: 8px;
   border-radius: 2px;
`;
const P404Line = styled.div`
   height: 4px;
   background: var(--color-border);
   margin-bottom: 4px;
   border-radius: 2px;
   width: ${({ $w }) => $w || "100%"};
`;
const P404Btn = styled.div`
   width: 60px;
   height: 14px;
   background: #1f2937;
   border-radius: 10px;
   margin-top: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   &::after {
      content: "";
      width: 30px;
      height: 2px;
      background: #4b5563;
      border-radius: 1px;
   }
`;

const Preview404 = () => (
   <Preview404Box>
      <P404Text>404</P404Text>
      <P404Head />
      <P404Line $w="80%" />
      <P404Line $w="60%" />
      <P404Btn />
   </Preview404Box>
);

// 3. Modals Preview
const PreviewModalsBox = styled.div`
   position: relative;
   width: 80%;
   height: 80%;
   background: var(--color-border);
   border-radius: 6px;
   display: flex;
   align-items: center;
   justify-content: center;
`;
const ModalBox = styled.div`
   width: 70%;
   background: white;
   border-radius: 4px;
   padding: 10px;
   box-shadow: var(--shadow-md);
`;
const ModalLine = styled.div`
   height: ${({ $h }) => $h || "4px"};
   background: ${({ $bg }) => $bg || "var(--color-border)"};
   width: ${({ $w }) => $w || "100%"};
   margin-bottom: 4px;
   border-radius: 2px;
`;
const ModalBtnGroup = styled.div`
   display: flex;
   justify-content: flex-end;
   gap: 4px;
   margin-top: 8px;
`;
const ModalBtn = styled.div`
   width: ${({ $primary }) => ($primary ? "30px" : "20px")};
   height: 6px;
   border-radius: 2px;
   background: ${({ $primary }) =>
      $primary ? "var(--color-primary-blue-light)" : "var(--color-border)"};
`;

const ModalsPreview = () => (
   <PreviewModalsBox>
      <ModalBox>
         <ModalLine $h="40px" $bg="#f3f4f6" $w="100%" />
         <ModalLine $bg="#374151" $w="80%" />
         <ModalLine />
         <ModalLine $w="60%" />
         <ModalBtnGroup>
            <ModalBtn />
            <ModalBtn $primary />
         </ModalBtnGroup>
      </ModalBox>
   </PreviewModalsBox>
);

// 4. Forms Preview
const PreviewFormsBox = styled.div`
   background: white;
   width: 90%;
   padding: 15px;
   border-radius: 6px;
   box-shadow: var(--shadow-sm);
`;
const FormRow = styled.div`
   display: flex;
   gap: 8px;
   margin-bottom: 8px;
`;
const FormGroup = styled.div`
   flex: 1;
   margin-bottom: ${({ $mb }) => $mb || "0"};
`;
const FormLabel = styled.div`
   height: 3px;
   width: ${({ $w }) => $w || "30%"};
   background: ${({ $color }) => $color || "#374151"};
   margin-bottom: 3px;
   border-radius: 1px;
`;
const FormInput = styled.div`
   height: 12px;
   border-radius: 2px;
   width: 100%;
   border: 1px solid
      ${({ $active }) =>
         $active ? "var(--color-primary-blue-light)" : "var(--color-border)"};
   box-shadow: ${({ $active }) => ($active ? "0 0 0 1px #dbeafe" : "none")};
`;
const FormBtn = styled.div`
   width: 20px;
   height: 6px;
   background: #1f2937;
   border-radius: 2px;
   margin-left: auto;
   margin-top: 4px;
`;

const FormsPreview = () => (
   <PreviewFormsBox>
      <FormGroup $mb="8px">
         <FormLabel $w="40px" />
         <FormInput />
      </FormGroup>
      <FormRow>
         <FormGroup>
            <FormLabel $color="var(--color-primary-blue-light)" />
            <FormInput $active />
         </FormGroup>
         <FormGroup>
            <FormLabel />
            <FormInput />
         </FormGroup>
      </FormRow>
      <FormGroup $mb="8px">
         <FormLabel />
         <FormInput />
      </FormGroup>
      <FormBtn />
   </PreviewFormsBox>
);

// 5. Heros Preview
const PreviewHerosBox = styled.div`
   background: white;
   width: 90%;
   height: 85%;
   border-radius: 6px;
   box-shadow: var(--shadow-sm);
   display: flex;
   flex-direction: column;
   overflow: hidden;
`;
const HeroNav = styled.div`
   height: 12px;
   border-bottom: 1px solid #f3f4f6;
   display: flex;
   align-items: center;
   padding: 0 10px;
   justify-content: space-between;
`;
const HeroLogo = styled.div`
   width: ${({ $w }) => $w || "8px"};
   height: 8px;
   background: ${({ $bg }) => $bg || "var(--color-primary-blue-light)"};
   border-radius: 2px;
`;
const HeroLinks = styled.div`
   display: flex;
   gap: 4px;
`;
const HeroLink = styled.div`
   width: 15px;
   height: 2px;
   background: var(--color-border);
`;
const HeroBody = styled.div`
   padding: 15px;
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
const HeroTitleBar = styled.div`
   width: ${({ $w }) => $w || "60%"};
   height: 4px;
   background: #1f2937;
   margin-bottom: 4px;
   border-radius: 2px;
`;
const HeroSub = styled.div`
   width: 80%;
   height: 2px;
   background: var(--color-border);
   margin-bottom: 8px;
`;
const HeroCTA = styled.div`
   width: 30px;
   height: 8px;
   background: var(--color-primary-blue-light);
   border-radius: 2px;
   margin-bottom: 10px;
`;
const HeroImg = styled.div`
   width: 100%;
   height: 40px;
   background: #f3f4f6;
   border-radius: 4px;
`;

const HerosPreview = () => (
   <PreviewHerosBox>
      <HeroNav>
         <HeroLogo />
         <HeroLinks>
            <HeroLink />
            <HeroLink />
            <HeroLink />
         </HeroLinks>
         <HeroLogo $bg="var(--color-border)" $w="12px" />
      </HeroNav>
      <HeroBody>
         <HeroTitleBar />
         <HeroTitleBar $w="40%" />
         <HeroSub />
         <HeroCTA />
         <HeroImg />
      </HeroBody>
   </PreviewHerosBox>
);

// 6. Portfolio Preview
const PreviewPortfolioGrid = styled.div`
   width: 90%;
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 10px;
`;
const PortCard = styled.div`
   background: white;
   padding: 6px;
   border-radius: 4px;
   box-shadow: var(--shadow-sm);
`;
const PortImg = styled.div`
   height: 25px;
   background: #f3f4f6;
   border-radius: 2px;
   margin-bottom: 4px;
`;
const PortLine = styled.div`
   height: 2px;
   border-radius: 2px;
   margin-bottom: 2px;
   width: ${({ $w }) => $w || "40%"};
   background: ${({ $muted }) => ($muted ? "var(--color-border)" : "#374151")};
`;

const PortfolioPreview = () => (
   <PreviewPortfolioGrid>
      {[0, 1, 2, 3].map((i) => (
         <PortCard key={i}>
            <PortImg />
            <PortLine />
            <PortLine $w="80%" $muted />
         </PortCard>
      ))}
   </PreviewPortfolioGrid>
);

// 7. Dropdowns Preview
const PreviewDropdownBox = styled.div`
   background: white;
   width: 50%;
   padding: 10px;
   border-radius: 6px;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
   border: 1px solid #f3f4f6;
`;
const DDHeader = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-bottom: 8px;
`;
const DDTrigger = styled.div`
   width: 20px;
   height: 6px;
   border: 1px solid #93c5fd;
   border-radius: 2px;
`;
const DDItem = styled.div`
   display: flex;
   align-items: center;
   gap: 6px;
   margin-bottom: 6px;
`;
const DDDot = styled.div`
   width: 4px;
   height: 4px;
   border-radius: 50%;
   background: ${({ $active }) =>
      $active ? "var(--color-primary-blue-light)" : "#9ca3af"};
`;
const DDLine = styled.div`
   height: 2px;
   width: 100%;
   background: ${({ $active }) =>
      $active ? "var(--color-primary-blue-light)" : "var(--color-border)"};
`;

const DropdownsPreview = () => (
   <PreviewDropdownBox>
      <DDHeader>
         <DDTrigger />
      </DDHeader>
      <DDItem>
         <DDLine $w="40%" />
      </DDItem>
      {[false, false, false, true].map((active, i) => (
         <DDItem key={i}>
            <DDDot $active={active} />
            <DDLine $active={active} />
         </DDItem>
      ))}
   </PreviewDropdownBox>
);

// 8. Buttons Preview
const PreviewButtonsBox = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
`;
const BtnMock = styled.div`
   background-color: var(--color-primary-blue-light);
   color: white;
   padding: 8px 16px;
   border-radius: 4px;
   font-size: 10px;
   display: flex;
   align-items: center;
   gap: 6px;
   box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
   font-family: var(--inter-font);
   i {
      font-size: 8px;
   }
`;

const ButtonsPreview = () => (
   <PreviewButtonsBox>
      <BtnMock>
         <i className="fa-regular fa-square-check"></i>
         Buttons
      </BtnMock>
   </PreviewButtonsBox>
);

// ── Components Data ────────────────────────────────────────────

const componentsData = [
   {
      id: 1,
      name: "Alerts",
      count: "9 components",
      tag: "app-ui",
      preview: <AlertsPreview />,
   },
   {
      id: 2,
      name: "404 Pages",
      count: "7 components",
      tag: "marketing",
      preview: <Preview404 />,
   },
   {
      id: 3,
      name: "Modals",
      count: "5 components",
      tag: "app-ui",
      preview: <ModalsPreview />,
   },
   {
      id: 4,
      name: "Forms",
      count: "4 components",
      tag: "app-ui",
      preview: <FormsPreview />,
   },
   {
      id: 5,
      name: "Heros",
      count: "11 components",
      tag: "marketing",
      preview: <HerosPreview />,
   },
   {
      id: 6,
      name: "Portfolio",
      count: "5 components",
      tag: "marketing",
      preview: <PortfolioPreview />,
   },
   {
      id: 7,
      name: "Dropdowns",
      count: "6 components",
      tag: "app-ui",
      preview: <DropdownsPreview />,
   },
   {
      id: 8,
      name: "Buttons",
      count: "10 components",
      tag: "app-ui",
      preview: <ButtonsPreview />,
   },
];

// ── Component ─────────────────────────────────────────────────

const ComponentsShowcase = () => {
   const cardRefs = useRef([]);

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add("visible");
                  observer.unobserve(entry.target);
               }
            });
         },
         { threshold: 0.1 },
      );

      cardRefs.current.forEach((card) => {
         if (card) observer.observe(card);
      });

      return () => observer.disconnect();
   }, []);

   return (
      <Section>
         <Container>
            {/* Header */}
            <SectionHeader>
               <SectionTitle>Tailwind CSS Components</SectionTitle>
               <SectionSubtitle>
                  Alert, Heroes, features, sign up forms, CTA, and everything
                  you need to build your websites fast with RTL Languages
                  Support.
               </SectionSubtitle>
            </SectionHeader>

            {/* Grid */}
            <Grid>
               {componentsData.map((item, index) => (
                  <Card
                     key={item.id}
                     $delay={index * 0.07}
                     ref={(el) => (cardRefs.current[index] = el)}
                  >
                     <CardPreview>{item.preview}</CardPreview>
                     <CardContent>
                        <CardInfo>
                           <h3>{item.name}</h3>
                           <span>{item.count}</span>
                        </CardInfo>
                        <Tag $variant={item.tag}>
                           {item.tag === "app-ui"
                              ? "Application UI"
                              : "Marketing"}
                        </Tag>
                     </CardContent>
                  </Card>
               ))}
            </Grid>

            {/* Footer Button */}
            <FooterAction>
               <BtnPrimary>Show All Components</BtnPrimary>
            </FooterAction>
         </Container>
      </Section>
   );
};

export default ComponentsShowcase;
