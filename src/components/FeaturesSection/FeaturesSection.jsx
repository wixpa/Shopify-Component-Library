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
   display: flex;
   justify-content: center;
   align-items: center;
`;

const FeaturesGrid = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   gap: 2.5rem;
   width: 100%;

   @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
   }

   @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
   }
`;

const FeatureCard = styled.article`
   display: flex;
   align-items: flex-start;
   gap: 1rem;
   opacity: 0;
   transform: translateY(20px);
   transition:
      opacity 0.6s ease-out ${({ $delay }) => $delay}s,
      transform 0.6s ease-out ${({ $delay }) => $delay}s;

   &.visible {
      opacity: 1;
      transform: translateY(0);
   }
`;

const FeatureIcon = styled.div`
   flex-shrink: 0;
   width: 24px;
   height: 24px;
   color: var(--color-icon);
   margin-top: 0.125rem;

   svg {
      width: 100%;
      height: 100%;
      display: block;
      stroke-width: 1.5;
   }
`;

const FeatureContent = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
`;

const FeatureTitle = styled.h3`
   font-size: 1.125rem;
   font-weight: 600;
   color: var(--color-text-main);
   line-height: 1.4;
   font-family: var(--inter-font);
`;

const FeatureDescription = styled.p`
   font-size: 1rem;
   font-weight: 400;
   color: var(--color-text-light);
   line-height: 1.6;
   font-family: var(--inter-font);
`;

// ── SVG Icons ──────────────────────────────────────────────────

const TranslateIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
   >
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
      />
   </svg>
);

const SmartphoneIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
   >
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
      />
   </svg>
);

const MoonIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
   >
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
   </svg>
);

// ── Features Data ──────────────────────────────────────────────

const featuresData = [
   {
      id: 1,
      title: "Support RTL Languages",
      description:
         "Seamlessly supports right-to-left (RTL) languages for intuitive interfaces in Arabic, Hebrew, and more.",
      icon: <TranslateIcon />,
   },
   {
      id: 2,
      title: "Fully Responsive",
      description:
         "Components adapt flawlessly to all devices, ensuring consistent performance from desktops to smartphones.",
      icon: <SmartphoneIcon />,
   },
   {
      id: 3,
      title: "Elegant Dark Mode",
      description:
         "Enjoy comfortable viewing in low light with adaptive colors and contrasts for an elegant interface.",
      icon: <MoonIcon />,
   },
];

// ── Component ─────────────────────────────────────────────────

const FeaturesSection = () => {
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
         { threshold: 0.1, rootMargin: "0px" },
      );

      cardRefs.current.forEach((card) => {
         if (card) observer.observe(card);
      });

      return () => observer.disconnect();
   }, []);

   return (
      <Section aria-label="Key Features">
         <Container>
            <FeaturesGrid>
               {featuresData.map((feature, index) => (
                  <FeatureCard
                     key={feature.id}
                     $delay={index * 0.1}
                     ref={(el) => (cardRefs.current[index] = el)}
                  >
                     <FeatureIcon aria-hidden="true">
                        {feature.icon}
                     </FeatureIcon>
                     <FeatureContent>
                        <FeatureTitle>{feature.title}</FeatureTitle>
                        <FeatureDescription>
                           {feature.description}
                        </FeatureDescription>
                     </FeatureContent>
                  </FeatureCard>
               ))}
            </FeaturesGrid>
         </Container>
      </Section>
   );
};

export default FeaturesSection;
