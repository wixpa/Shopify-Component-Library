import { useState } from "react";
import styled from "styled-components";

// ── Styled Components ──────────────────────────────────────────

const HeroWrapper = styled.section`
   background: linear-gradient(
      90deg,
      var(--color-bg-gradient-start) 0%,
      var(--color-bg-gradient-mid) 50%,
      var(--color-bg-gradient-end) 100%
   );
   padding: 4rem 0;

   @media (min-width: 1024px) {
      padding: 6rem 0;
   }
`;

const Container = styled.div`
   max-width: var(--container-max-width);
   margin: 0 auto;
   padding: var(--container-padding);
`;

const HeroGrid = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   gap: 3rem;
   align-items: center;

   @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr;
   }
`;

// ── Left Column ────────────────────────────────────────────────

const HeroContent = styled.div`
   max-width: 600px;
`;

const Badge = styled.div`
   display: inline-flex;
   align-items: center;
   background: var(--color-bg-white);
   padding: 0.35rem 0.75rem;
   border-radius: var(--radius-full);
   font-size: 0.875rem;
   font-weight: 500;
   color: var(--color-text-main);
   box-shadow: var(--shadow-sm);
   margin-bottom: 1.5rem;
   border: 1px solid rgba(255, 255, 255, 0.5);
   font-family: var(--inter-font);
`;

const BadgeDot = styled.span`
   width: 8px;
   height: 8px;
   background-color: var(--color-success);
   border-radius: 50%;
   margin-right: 0.75rem;
   flex-shrink: 0;
`;

const BadgeDivider = styled.span`
   width: 1px;
   height: 14px;
   background-color: var(--color-border-hover);
   margin: 0 0.75rem;
`;

const HeroTitle = styled.h1`
   font-size: 2.5rem;
   line-height: 1.1;
   font-weight: 800;
   margin-bottom: 1.5rem;
   letter-spacing: -0.025em;
   font-family: var(--inter-font);

   @media (min-width: 768px) {
      font-size: 3.5rem;
   }
`;

const TitleHighlight = styled.span`
   color: var(--color-primary-purple);
   display: block;
`;

const TitleDark = styled.span`
   color: var(--color-primary-dark);
   display: block;
`;

const TitleMuted = styled.span`
   color: var(--color-text-secondary);
   display: block;
`;

const HeroDescription = styled.p`
   font-size: 1.125rem;
   color: var(--color-text-secondary);
   margin-bottom: 2.5rem;
   line-height: 1.6;
   font-family: var(--inter-font);
`;

const CTAGroup = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 1rem;
`;

const BtnBase = styled.a`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   padding: 0.75rem 1.5rem;
   border-radius: var(--radius-md);
   font-weight: 500;
   font-size: 0.95rem;
   font-family: var(--inter-font);
   transition: var(--transition-fast);
   cursor: pointer;

   i {
      margin-left: 0.5rem;
      font-size: 0.85em;
   }
`;

const BtnPrimary = styled(BtnBase)`
   background-color: var(--color-primary-dark);
   color: var(--color-text-white);
   border: 1px solid var(--color-primary-dark);

   &:hover {
      background-color: #1e293b;
      transform: translateY(-1px);
   }
`;

const BtnSecondary = styled(BtnBase)`
   background-color: var(--color-bg-white);
   color: var(--color-text-main);
   border: 1px solid var(--color-border);

   &:hover {
      background-color: var(--color-bg-light);
      border-color: var(--color-border-hover);
   }
`;

// ── Right Column — Card ────────────────────────────────────────

const HeroVisual = styled.div`
   display: flex;
   justify-content: center;

   @media (min-width: 1024px) {
      justify-content: flex-end;
   }
`;

const CardComponent = styled.div`
   background: var(--color-bg-white);
   border-radius: var(--radius-lg);
   overflow: hidden;
   box-shadow: var(--shadow-xl);
   max-width: 450px;
   width: 100%;
   transition: var(--transition-normal);

   &:hover {
      transform: translateY(-5px);
   }
`;

const CardImage = styled.img`
   width: 100%;
   height: 240px;
   object-fit: cover;
   display: block;
`;

const CardBody = styled.div`
   padding: 2rem;
   text-align: center;
`;

const CardTitle = styled.h3`
   font-size: 1.25rem;
   font-weight: 600;
   color: var(--color-text-main);
   margin-bottom: 0.75rem;
   font-family: var(--inter-font);
`;

const CardText = styled.p`
   font-size: 0.875rem;
   color: var(--color-text-light);
   margin-bottom: 1.5rem;
   line-height: 1.5;
   font-family: var(--inter-font);
`;

const PaginationDots = styled.div`
   display: flex;
   justify-content: center;
   gap: 0.5rem;
   margin-bottom: 2rem;
`;

const Dot = styled.span`
   width: 8px;
   height: 8px;
   border-radius: 50%;
   background-color: ${({ $active }) =>
      $active ? "var(--color-primary-blue)" : "var(--color-border)"};
   cursor: pointer;
   transition: var(--transition-fast);
`;

const CardActions = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 1rem;
`;

const BtnCardSkip = styled.button`
   background: transparent;
   border: 1px solid var(--color-border);
   color: var(--color-text-main);
   padding: 0.6rem;
   border-radius: var(--radius-sm);
   font-weight: 500;
   font-size: 0.9rem;
   font-family: var(--inter-font);
   transition: var(--transition-fast);

   &:hover {
      background-color: var(--color-bg-light);
   }
`;

const BtnCardNext = styled.button`
   background: var(--color-primary-blue);
   border: 1px solid var(--color-primary-blue);
   color: var(--color-text-white);
   padding: 0.6rem;
   border-radius: var(--radius-sm);
   font-weight: 500;
   font-size: 0.9rem;
   font-family: var(--inter-font);
   transition: var(--transition-fast);

   &:hover {
      background-color: #1d4ed8;
      border-color: #1d4ed8;
   }

   &:active {
      transform: scale(0.95);
   }
`;

// ── Static Data ────────────────────────────────────────────────

const cardSlides = [
   {
      id: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Dashboard Analytics",
      title: "Welcome To Your Dashboard",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum aliquam ea, ratione deleniti porro officia? Explicabo maiores suscipit.",
   },
   {
      id: 2,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Analytics Overview",
      title: "Track Your Performance",
      text: "Monitor key metrics and gain actionable insights to grow your product faster with beautiful data visualizations.",
   },
   {
      id: 3,
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Team Collaboration",
      title: "Collaborate With Your Team",
      text: "Work together seamlessly with real-time updates, shared workspaces, and powerful communication tools.",
   },
];

// ── Component ─────────────────────────────────────────────────

const HeroSection = () => {
   const [activeSlide, setActiveSlide] = useState(0);

   const handleNext = () => {
      setActiveSlide((prev) => (prev + 1) % cardSlides.length);
   };

   const handleSkip = () => {
      setActiveSlide(0);
   };

   const currentSlide = cardSlides[activeSlide];

   return (
      <HeroWrapper>
         <Container>
            <HeroGrid>
               {/* ── Left: Hero Content ── */}
               <HeroContent>
                  {/* Badge */}
                  <Badge>
                     <BadgeDot />
                     Latest
                     <BadgeDivider />
                     Tailwind CSS v4.1.0
                  </Badge>

                  {/* Heading */}
                  <HeroTitle>
                     <TitleHighlight>Beautiful</TitleHighlight>
                     <TitleDark>Tailwind CSS Components</TitleDark>
                     <TitleMuted>That Just Work.</TitleMuted>
                  </HeroTitle>

                  {/* Description */}
                  <HeroDescription>
                     Build stunning, responsive interfaces with our premium
                     collection of Tailwind CSS components. Designed for modern
                     web development with RTL support, elegant dark mode, and
                     pixel-perfect attention to detail.
                  </HeroDescription>

                  {/* CTA Buttons */}
                  <CTAGroup>
                     <BtnPrimary href="#">
                        Browse Components{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                     </BtnPrimary>
                     <BtnSecondary href="#">
                        Check Out Templates{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                     </BtnSecondary>
                  </CTAGroup>
               </HeroContent>

               {/* ── Right: Card Preview ── */}
               <HeroVisual>
                  <CardComponent>
                     {/* Card Image */}
                     <CardImage
                        src={currentSlide.image}
                        alt={currentSlide.alt}
                     />

                     <CardBody>
                        <CardTitle>{currentSlide.title}</CardTitle>
                        <CardText>{currentSlide.text}</CardText>

                        {/* Pagination Dots */}
                        <PaginationDots>
                           {cardSlides.map((_, index) => (
                              <Dot
                                 key={index}
                                 $active={index === activeSlide}
                                 onClick={() => setActiveSlide(index)}
                                 aria-label={`Go to slide ${index + 1}`}
                              />
                           ))}
                        </PaginationDots>

                        {/* Card Buttons */}
                        <CardActions>
                           <BtnCardSkip onClick={handleSkip}>Skip</BtnCardSkip>
                           <BtnCardNext onClick={handleNext}>Next</BtnCardNext>
                        </CardActions>
                     </CardBody>
                  </CardComponent>
               </HeroVisual>
            </HeroGrid>
         </Container>
      </HeroWrapper>
   );
};

export default HeroSection;
