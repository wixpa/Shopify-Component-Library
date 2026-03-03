import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";

// ── Animations ─────────────────────────────────────────────────

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0);    }
`;

const scaleIn = keyframes`
    from { opacity: 0; transform: scale(0.96); }
    to   { opacity: 1; transform: scale(1);    }
`;

const pulse = keyframes`
    0%, 100% { box-shadow: 0 0 0 0   rgba(34,197,94,0.5); }
    50%       { box-shadow: 0 0 0 6px rgba(34,197,94,0);   }
`;

// ── Styled Components ──────────────────────────────────────────

const HeroWrapper = styled.section`
   background: linear-gradient(
      135deg,
      var(--color-bg-gradient-start) 0%,
      var(--color-bg-gradient-mid) 50%,
      var(--color-bg-gradient-end) 100%
   );
   padding: 5rem 0;

   @media (min-width: 1024px) {
      padding: 7rem 0 6rem;
   }
`;

const Container = styled.div`
   max-width: var(--container-max-width);
   margin: 0 auto;
   padding: 0 var(--container-padding-x, 1.5rem);
`;

const HeroGrid = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   gap: 3.5rem;
   align-items: center;

   @media (min-width: 1024px) {
      grid-template-columns: 1.1fr 0.9fr;
      gap: 4rem;
   }
`;

// ── Left: Content ──────────────────────────────────────────────

const HeroContent = styled.div`
   animation: ${fadeUp} 0.55s ease both;
   animation-delay: 0.05s;
`;

const Badge = styled.div`
   display: inline-flex;
   align-items: center;
   gap: 0;
   background: var(--color-bg-white);
   padding: 0.32rem 0.8rem;
   border-radius: var(--radius-full);
   font-size: 0.82rem;
   font-weight: 500;
   color: var(--color-text-main);
   box-shadow: var(--shadow-sm);
   margin-bottom: 1.75rem;
   border: 1px solid var(--color-border);
   font-family: var(--inter-font);
   width: fit-content;
`;

const BadgeDot = styled.span`
   width: 7px;
   height: 7px;
   background: var(--color-success);
   border-radius: 50%;
   margin-right: 0.65rem;
   flex-shrink: 0;
   animation: ${pulse} 2s ease infinite;
`;

const BadgeDivider = styled.span`
   width: 1px;
   height: 12px;
   background: var(--color-border-hover);
   margin: 0 0.7rem;
`;

const BadgeHighlight = styled.span`
   font-weight: 600;
   color: var(--color-primary-blue);
`;

const HeroTitle = styled.h1`
   font-size: clamp(2.2rem, 4vw, 3.4rem);
   line-height: 1.1;
   font-weight: 800;
   margin-bottom: 1.5rem;
   letter-spacing: -0.03em;
   font-family: var(--inter-font);
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
   font-size: 1.05rem;
   color: var(--color-text-secondary);
   margin-bottom: 2.25rem;
   line-height: 1.7;
   max-width: 540px;
   font-family: var(--inter-font);
`;

const CTAGroup = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 0.85rem;
   margin-bottom: 2.5rem;
`;

const BtnPrimary = styled.button`
   display: inline-flex;
   align-items: center;
   gap: 0.5rem;
   padding: 0.75rem 1.5rem;
   border-radius: var(--radius-md);
   border: 1px solid var(--color-primary-dark);
   background: var(--color-primary-dark);
   color: #ffffff;
   font-weight: 600;
   font-size: 0.9rem;
   font-family: var(--inter-font);
   cursor: pointer;
   transition:
      background 0.15s ease,
      transform 0.12s ease,
      box-shadow 0.15s ease;

   i {
      font-size: 0.8rem;
      transition: transform 0.15s ease;
   }

   &:hover {
      background: #1e293b;
      transform: translateY(-1px);
      box-shadow: 0 8px 24px rgba(15, 23, 42, 0.2);

      i {
         transform: translateX(2px);
      }
   }
   &:active {
      transform: translateY(0);
   }
`;

const BtnSecondary = styled.button`
   display: inline-flex;
   align-items: center;
   gap: 0.5rem;
   padding: 0.75rem 1.35rem;
   border-radius: var(--radius-md);
   border: 1px solid var(--color-border);
   background: var(--color-bg-white);
   color: var(--color-text-main);
   font-weight: 500;
   font-size: 0.9rem;
   font-family: var(--inter-font);
   cursor: pointer;
   transition:
      background 0.15s ease,
      border-color 0.15s ease,
      transform 0.12s ease;

   i {
      font-size: 0.8rem;
   }

   &:hover {
      background: var(--color-bg-light);
      border-color: var(--color-border-hover);
      transform: translateY(-1px);
   }
   &:active {
      transform: translateY(0);
   }
`;

// ── Stats row under CTAs ───────────────────────────────────────

const StatsRow = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 1.5rem;
   padding-top: 1.5rem;
   border-top: 1px solid var(--color-border);
`;

const Stat = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2px;
`;

const StatValue = styled.span`
   font-size: 1.2rem;
   font-weight: 800;
   color: var(--color-primary-dark);
   font-family: var(--inter-font);
   letter-spacing: -0.02em;
`;

const StatLabel = styled.span`
   font-size: 0.75rem;
   color: var(--color-text-secondary);
   font-family: var(--inter-font);
   font-weight: 500;
`;

// ── Right: Card ────────────────────────────────────────────────

const HeroVisual = styled.div`
   display: flex;
   justify-content: center;
   animation: ${scaleIn} 0.55s ease both;
   animation-delay: 0.15s;

   @media (min-width: 1024px) {
      justify-content: flex-end;
   }
`;

const CardShell = styled.div`
   background: var(--color-bg-white);
   border-radius: var(--radius-lg);
   overflow: hidden;
   box-shadow: var(--shadow-xl);
   max-width: 440px;
   width: 100%;
   border: 1px solid var(--color-border);
   transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;

   &:hover {
      transform: translateY(-5px);
      box-shadow: 0 28px 60px rgba(15, 23, 42, 0.15);
   }
`;

// Card top bar (browser chrome effect)
const CardTopBar = styled.div`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   padding: 0.6rem 1rem;
   background: var(--color-bg-light);
   border-bottom: 1px solid var(--color-border);
`;

const TrafficDot = styled.span`
   width: 10px;
   height: 10px;
   border-radius: 50%;
   background: ${({ $color }) => $color};
   flex-shrink: 0;
`;

const CardUrlBar = styled.div`
   flex: 1;
   background: var(--color-bg-white);
   border: 1px solid var(--color-border);
   border-radius: 6px;
   padding: 3px 10px;
   font-size: 0.7rem;
   color: var(--color-text-secondary);
   font-family: var(--inter-font);
   margin-left: 0.25rem;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

const CardImageWrap = styled.div`
   position: relative;
   overflow: hidden;
   height: 220px;
`;

const CardImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   display: block;
   transition: transform 0.4s ease;

   ${CardShell}:hover & {
      transform: scale(1.03);
   }
`;

const CardImageOverlay = styled.div`
   position: absolute;
   inset: 0;
   background: linear-gradient(
      to bottom,
      transparent 55%,
      rgba(15, 23, 42, 0.28)
   );
`;

const CardBody = styled.div`
   padding: 1.5rem 1.5rem 1.75rem;
`;

const CardTag = styled.span`
   display: inline-block;
   background: rgba(37, 99, 235, 0.08);
   color: var(--color-primary-blue);
   font-size: 0.7rem;
   font-weight: 700;
   padding: 2px 10px;
   border-radius: 999px;
   text-transform: uppercase;
   letter-spacing: 0.07em;
   margin-bottom: 0.75rem;
   font-family: var(--inter-font);
`;

const CardTitle = styled.h3`
   font-size: 1.1rem;
   font-weight: 700;
   color: var(--color-text-main);
   margin-bottom: 0.5rem;
   letter-spacing: -0.015em;
   font-family: var(--inter-font);
`;

const CardText = styled.p`
   font-size: 0.82rem;
   color: var(--color-text-light);
   margin-bottom: 1.25rem;
   line-height: 1.6;
   font-family: var(--inter-font);
`;

const PaginationDots = styled.div`
   display: flex;
   justify-content: center;
   gap: 0.45rem;
   margin-bottom: 1.25rem;
`;

const Dot = styled.button`
   width: ${({ $active }) => ($active ? "20px" : "7px")};
   height: 7px;
   border-radius: 999px;
   border: none;
   background: ${({ $active }) =>
      $active ? "var(--color-primary-blue)" : "var(--color-border)"};
   cursor: pointer;
   padding: 0;
   transition:
      width 0.25s ease,
      background 0.2s ease;

   &:hover {
      background: ${({ $active }) =>
         $active ? "var(--color-primary-blue)" : "var(--color-border-hover)"};
   }
`;

const CardActions = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 0.75rem;
`;

const BtnCardSkip = styled.button`
   background: transparent;
   border: 1px solid var(--color-border);
   color: var(--color-text-secondary);
   padding: 0.6rem;
   border-radius: var(--radius-sm);
   font-weight: 500;
   font-size: 0.85rem;
   font-family: var(--inter-font);
   cursor: pointer;
   transition:
      background 0.15s ease,
      border-color 0.15s ease;

   &:hover {
      background: var(--color-bg-light);
      border-color: var(--color-border-hover);
      color: var(--color-text-main);
   }
`;

const BtnCardNext = styled.button`
   background: var(--color-primary-blue);
   border: 1px solid var(--color-primary-blue);
   color: #ffffff;
   padding: 0.6rem;
   border-radius: var(--radius-sm);
   font-weight: 600;
   font-size: 0.85rem;
   font-family: var(--inter-font);
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.4rem;
   transition:
      background 0.15s ease,
      transform 0.12s ease;

   &:hover {
      background: #1d4ed8;
      border-color: #1d4ed8;
      transform: translateY(-1px);
   }
   &:active {
      transform: scale(0.97);
   }
`;

// ── Static Data ────────────────────────────────────────────────

const SLIDES = [
   {
      id: 1,
      tag: "Components",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
      alt: "Component Library Dashboard",
      title: "Shopify section components",
      text: "Browse production-ready headers, hero sections, and product sliders. Copy a single code block into Custom Liquid and you're done.",
   },
   {
      id: 2,
      tag: "Editor",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
      alt: "Live Editor Preview",
      title: "Customize in the live editor",
      text: "Adjust colors, text, and layout in real time inside the React Flow canvas. Your changes are baked directly into the exported code.",
   },
   {
      id: 3,
      tag: "Copy Code",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80&auto=format&fit=crop",
      alt: "Copy and paste code",
      title: "Paste directly into Shopify",
      text: "Get clean HTML, CSS, and JS in one block. Paste it into a Custom Liquid section and your section is live in minutes.",
   },
];

const STATS = [
   { value: "50+", label: "Components" },
   { value: "3", label: "Section types" },
   { value: "100%", label: "Free to use" },
];

// ── Component ─────────────────────────────────────────────────

const HeroSection = () => {
   const [active, setActive] = useState(0);
   const navigate = useNavigate();

   const slide = SLIDES[active];

   const next = () => setActive((p) => (p + 1) % SLIDES.length);
   const restart = () => setActive(0);

   return (
      <HeroWrapper>
         <Container>
            <HeroGrid>
               {/* ── Left ── */}
               <HeroContent>
                  <Badge>
                     <BadgeDot />
                     New
                     <BadgeDivider />
                     <BadgeHighlight>Shopify section builder</BadgeHighlight>
                  </Badge>

                  <HeroTitle>
                     <TitleHighlight>Beautiful Shopify</TitleHighlight>
                     <TitleDark>Section Components</TitleDark>
                     <TitleMuted>That Just Work.</TitleMuted>
                  </HeroTitle>

                  <HeroDescription>
                     Build stunning, high-converting Shopify storefronts with
                     our growing library of production-ready sections. Copy,
                     paste, and customize in minutes — no theme knowledge
                     required.
                  </HeroDescription>

                  <CTAGroup>
                     <BtnPrimary onClick={() => navigate("/components")}>
                        Browse Components
                        <i className="fa-solid fa-arrow-right"></i>
                     </BtnPrimary>
                     <BtnSecondary
                        onClick={() => navigate("/components/hero/hero-v1")}
                     >
                        <i className="fa-solid fa-wand-magic-sparkles"></i>
                        Open Live Editor
                     </BtnSecondary>
                  </CTAGroup>

                  <StatsRow>
                     {STATS.map((s) => (
                        <Stat key={s.label}>
                           <StatValue>{s.value}</StatValue>
                           <StatLabel>{s.label}</StatLabel>
                        </Stat>
                     ))}
                  </StatsRow>
               </HeroContent>

               {/* ── Right: Card ── */}
               <HeroVisual>
                  <CardShell>
                     {/* Browser-chrome top bar */}
                     <CardTopBar>
                        <TrafficDot $color="#ff5f57" />
                        <TrafficDot $color="#febc2e" />
                        <TrafficDot $color="#28c840" />
                        <CardUrlBar>shopifybazzar.com/components</CardUrlBar>
                     </CardTopBar>

                     {/* Image */}
                     <CardImageWrap>
                        <CardImage src={slide.image} alt={slide.alt} />
                        <CardImageOverlay />
                     </CardImageWrap>

                     <CardBody>
                        <CardTag>{slide.tag}</CardTag>
                        <CardTitle>{slide.title}</CardTitle>
                        <CardText>{slide.text}</CardText>

                        <PaginationDots>
                           {SLIDES.map((_, i) => (
                              <Dot
                                 key={i}
                                 $active={i === active}
                                 onClick={() => setActive(i)}
                                 aria-label={`Slide ${i + 1}`}
                              />
                           ))}
                        </PaginationDots>

                        <CardActions>
                           <BtnCardSkip onClick={restart}>Restart</BtnCardSkip>
                           <BtnCardNext onClick={next}>
                              Next
                              <i className="fa-solid fa-arrow-right"></i>
                           </BtnCardNext>
                        </CardActions>
                     </CardBody>
                  </CardShell>
               </HeroVisual>
            </HeroGrid>
         </Container>
      </HeroWrapper>
   );
};

export default HeroSection;
