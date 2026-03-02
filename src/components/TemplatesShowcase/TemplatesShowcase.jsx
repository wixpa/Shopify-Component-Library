import { useEffect, useRef } from "react";
import styled from "styled-components";

// ── Styled Components ──────────────────────────────────────────

const Section = styled.section`
   background-color: var(--color-bg-white);
   padding: var(--section-padding);
`;

const Container = styled.div`
   max-width: 1200px;
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
   font-size: 2.25rem;
   font-weight: 800;
   color: var(--color-text-main);
   margin-bottom: 1.5rem;
   letter-spacing: -0.025em;
   line-height: 1.2;
   font-family: var(--inter-font);

   @media (min-width: 768px) {
      font-size: 3rem;
   }
`;

const Highlight = styled.span`
   background-color: var(--color-highlight-bg);
   color: var(--color-highlight-text);
   padding: 0.1em 0.25em;
   border-radius: 0.2em;
   display: inline-block;
   white-space: nowrap;
`;

const SectionSubtitle = styled.p`
   color: var(--color-text-secondary);
   font-size: 1rem;
   line-height: 1.6;
   max-width: 650px;
   margin: 0 auto;
   font-family: var(--inter-font);

   @media (min-width: 768px) {
      font-size: 1.125rem;
   }
`;

// ── Grid ───────────────────────────────────────────────────────

const Grid = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   gap: 3rem;
   margin-bottom: 4rem;

   @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
   }
`;

// ── Card ───────────────────────────────────────────────────────

const Card = styled.article`
   display: flex;
   flex-direction: column;
   opacity: 0;
   transform: translateY(24px);
   transition:
      opacity 0.5s ease-out ${({ $delay }) => $delay}s,
      transform 0.5s ease-out ${({ $delay }) => $delay}s;

   &.visible {
      opacity: 1;
      transform: translateY(0);
   }
`;

const CardFrame = styled.a`
   background-color: var(--color-bg-gray);
   padding: 1.5rem;
   border-radius: var(--radius-lg);
   margin-bottom: 1.5rem;
   overflow: hidden;
   position: relative;
   aspect-ratio: 16 / 10;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: var(--transition-normal);

   &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-xl);
   }

   &:focus-within {
      box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5);
   }

   @media (min-width: 768px) {
      padding: 2.5rem;
   }

   @media (max-width: 640px) {
      padding: 1rem;
   }
`;

const CardImg = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   object-position: top left;
   border-radius: var(--radius-md);
   box-shadow: var(--shadow-md);
   background-color: white;
`;

const CardContent = styled.div`
   display: flex;
   flex-direction: column;
`;

const CardHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 0.5rem;
`;

const CardTitle = styled.h3`
   font-size: 1.25rem;
   font-weight: 700;
   color: var(--color-text-main);
   font-family: var(--inter-font);
`;

const PriceGroup = styled.div`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   font-weight: 600;
   font-family: var(--inter-font);
`;

const PriceCurrent = styled.span`
   color: var(--color-primary-blue);
   font-size: 1rem;
`;

const PriceOld = styled.span`
   color: var(--color-text-muted);
   text-decoration: line-through;
   font-size: 0.875rem;
`;

const PriceFree = styled.span`
   color: var(--color-primary-blue);
   text-transform: uppercase;
   font-size: 0.875rem;
   letter-spacing: 0.05em;
   font-weight: 700;
`;

const CardDesc = styled.p`
   color: var(--color-text-secondary);
   font-size: 0.95rem;
   line-height: 1.5;
   font-family: var(--inter-font);
`;

// ── CTA Button ─────────────────────────────────────────────────

const BtnWrapper = styled.div`
   text-align: center;
   margin-top: 1rem;
`;

const BtnPrimary = styled.a`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   background-color: var(--color-btn-dark);
   color: var(--color-text-white);
   padding: 0.875rem 2rem;
   border-radius: var(--radius-md);
   font-weight: 600;
   font-size: 0.95rem;
   font-family: var(--inter-font);
   box-shadow: var(--shadow-md);
   transition: var(--transition-fast);

   &:hover {
      background-color: var(--color-btn-dark-hover);
      transform: translateY(-1px);
      box-shadow: var(--shadow-lg);
   }

   &:active {
      transform: translateY(0);
   }
`;

// ── Templates Data ─────────────────────────────────────────────

const templatesData = [
   {
      id: 1,
      title: "Meraki UI Dashboard",
      price: "$16",
      oldPrice: "$32",
      free: false,
      description:
         "Tailwind CSS Dashboard Comes with RTL Support, Built Laravel blade, HTML and Alpine JS.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Meraki UI Dashboard Preview",
      href: "#",
   },
   {
      id: 2,
      title: "Courses Dashboard",
      price: null,
      oldPrice: null,
      free: true,
      description:
         "Courses Dashboard Template Build with Tailwind CSS, vite, vue 3, and chart.js shapes with RTL Languages Support.",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Courses Dashboard Preview",
      href: "#",
   },
];

// ── Component ─────────────────────────────────────────────────

const TemplatesShowcase = () => {
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
               <SectionTitle>
                  Tailwind CSS <Highlight>Templates</Highlight>
               </SectionTitle>
               <SectionSubtitle>
                  Tailwind CSS landing pages, dashboard, and templates that
                  shapes with RTL Languages Support. built with AlpineJs,
                  Laravel Blade, and Vue3 Templates.
               </SectionSubtitle>
            </SectionHeader>

            {/* Cards Grid */}
            <Grid>
               {templatesData.map((template, index) => (
                  <Card
                     key={template.id}
                     $delay={index * 0.15}
                     ref={(el) => (cardRefs.current[index] = el)}
                  >
                     <CardFrame
                        href={template.href}
                        aria-label={`View ${template.title}`}
                     >
                        <CardImg
                           src={template.image}
                           alt={template.alt}
                           loading="lazy"
                        />
                     </CardFrame>

                     <CardContent>
                        <CardHeader>
                           <CardTitle>{template.title}</CardTitle>
                           <PriceGroup>
                              {template.free ? (
                                 <PriceFree>Free</PriceFree>
                              ) : (
                                 <>
                                    <PriceCurrent>
                                       {template.price}
                                    </PriceCurrent>
                                    <PriceOld>{template.oldPrice}</PriceOld>
                                 </>
                              )}
                           </PriceGroup>
                        </CardHeader>
                        <CardDesc>{template.description}</CardDesc>
                     </CardContent>
                  </Card>
               ))}
            </Grid>

            {/* CTA */}
            <BtnWrapper>
               <BtnPrimary href="#">Show All Templates</BtnPrimary>
            </BtnWrapper>
         </Container>
      </Section>
   );
};

export default TemplatesShowcase;
