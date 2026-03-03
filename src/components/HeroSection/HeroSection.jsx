import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";

// ── Animations ─────────────────────────────────────────────────

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0);    }
`;

const scaleIn = keyframes`
    from { opacity: 0; transform: scale(0.94) translateY(12px); }
    to   { opacity: 1; transform: scale(1)    translateY(0);    }
`;

const pulse = keyframes`
    0%, 100% { box-shadow: 0 0 0 0   rgba(34,197,94,0.55); }
    50%       { box-shadow: 0 0 0 7px rgba(34,197,94,0);    }
`;

const imageFade = keyframes`
    from { opacity: 0; transform: scale(1.04); }
    to   { opacity: 1; transform: scale(1);    }
`;

const progressAnim = keyframes`
    from { width: 0%;   }
    to   { width: 100%; }
`;

// ── Layout ─────────────────────────────────────────────────────

const HeroWrapper = styled.section`
   background: linear-gradient(
      135deg,
      var(--color-bg-gradient-start) 0%,
      var(--color-bg-gradient-mid) 55%,
      var(--color-bg-gradient-end) 100%
   );
   padding: 5rem 0 4rem;

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
   gap: 3rem;
   align-items: center;

   @media (min-width: 1024px) {
      grid-template-columns: 1.15fr 0.85fr;
      gap: 5rem;
   }
`;

// ── Left: Content ──────────────────────────────────────────────

const HeroContent = styled.div`
   animation: ${fadeUp} 0.6s ease both;
   animation-delay: 0.05s;
`;

const Badge = styled.div`
   display: inline-flex;
   align-items: center;
   background: var(--color-bg-white);
   padding: 0.3rem 0.85rem 0.3rem 0.5rem;
   border-radius: var(--radius-full);
   font-size: 0.8rem;
   font-weight: 500;
   color: var(--color-text-main);
   box-shadow: var(--shadow-sm);
   margin-bottom: 1.75rem;
   border: 1px solid var(--color-border);
   font-family: var(--inter-font);
   width: fit-content;
   gap: 0;
`;

const BadgeDot = styled.span`
   width: 7px;
   height: 7px;
   background: var(--color-success, #22c55e);
   border-radius: 50%;
   margin-right: 0.6rem;
   flex-shrink: 0;
   animation: ${pulse} 2.2s ease infinite;
`;

const BadgeDivider = styled.span`
   width: 1px;
   height: 11px;
   background: var(--color-border-hover);
   margin: 0 0.65rem;
   flex-shrink: 0;
`;

const BadgeHighlight = styled.span`
   font-weight: 600;
   color: var(--color-primary-blue);
`;

const HeroTitle = styled.h1`
   font-size: clamp(2.1rem, 4.5vw, 3.5rem);
   line-height: 1.08;
   font-weight: 800;
   margin-bottom: 1.4rem;
   letter-spacing: -0.033em;
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
   font-size: 1rem;
   color: var(--color-text-secondary);
   margin-bottom: 2.25rem;
   line-height: 1.75;
   max-width: 520px;
   font-family: var(--inter-font);

   @media (min-width: 768px) {
      font-size: 1.05rem;
   }
`;

// ── CTA Buttons ────────────────────────────────────────────────

const CTAGroup = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 0.85rem;
   margin-bottom: 2.5rem;

   @media (max-width: 480px) {
      flex-direction: column;

      button {
         width: 100%;
         justify-content: center;
      }
   }
`;

const BtnPrimary = styled.button`
   display: inline-flex;
   align-items: center;
   gap: 0.55rem;
   padding: 0.78rem 1.5rem;
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
   white-space: nowrap;

   i {
      font-size: 0.78rem;
      transition: transform 0.15s ease;
   }

   &:hover {
      background: #1e293b;
      transform: translateY(-1px);
      box-shadow: 0 8px 24px rgba(15, 23, 42, 0.22);
      i {
         transform: translateX(3px);
      }
   }
   &:active {
      transform: translateY(0);
      box-shadow: none;
   }
`;

const BtnSecondary = styled.button`
   display: inline-flex;
   align-items: center;
   gap: 0.55rem;
   padding: 0.78rem 1.35rem;
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
   white-space: nowrap;

   i {
      font-size: 0.82rem;
      color: var(--color-primary-purple);
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

// ── Stats Row ──────────────────────────────────────────────────

const StatsRow = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 1.75rem;
   padding-top: 1.75rem;
   border-top: 1px solid var(--color-border);

   @media (max-width: 380px) {
      gap: 1.25rem;
   }
`;

const Stat = styled.div`
   display: flex;
   flex-direction: column;
   gap: 3px;
`;

const StatValue = styled.span`
   font-size: 1.35rem;
   font-weight: 800;
   color: var(--color-primary-dark);
   font-family: var(--inter-font);
   letter-spacing: -0.025em;
   line-height: 1;
`;

const StatLabel = styled.span`
   font-size: 0.73rem;
   color: var(--color-text-secondary);
   font-family: var(--inter-font);
   font-weight: 500;
   white-space: nowrap;
`;

// ── Right: Card ────────────────────────────────────────────────

const HeroVisual = styled.div`
   display: flex;
   justify-content: center;
   animation: ${scaleIn} 0.6s ease both;
   animation-delay: 0.18s;

   @media (min-width: 1024px) {
      justify-content: flex-end;
   }
`;

const CardShell = styled.div`
   background: var(--color-bg-white);
   border-radius: var(--radius-lg);
   overflow: hidden;
   box-shadow: var(--shadow-xl);
   width: 100%;
   max-width: 430px;
   border: 1px solid var(--color-border);
   transition:
      transform 0.28s ease,
      box-shadow 0.28s ease;

   @media (min-width: 1024px) {
      max-width: 420px;
   }

   &:hover {
      transform: translateY(-5px);
      box-shadow: 0 30px 64px rgba(15, 23, 42, 0.14);
   }
`;

// Browser chrome bar
const CardTopBar = styled.div`
   display: flex;
   align-items: center;
   gap: 0.45rem;
   padding: 0.55rem 0.9rem;
   background: var(--color-bg-light);
   border-bottom: 1px solid var(--color-border);
   flex-shrink: 0;
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
   border-radius: 5px;
   padding: 3px 10px;
   font-size: 0.68rem;
   color: var(--color-text-secondary);
   font-family: var(--inter-font);
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   margin-left: 0.2rem;
`;

// Image
const CardImageWrap = styled.div`
   position: relative;
   overflow: hidden;
   height: 210px;
   background: var(--color-bg-light);
`;

const CardImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   display: block;
   transition: transform 0.5s ease;
   animation: ${imageFade} 0.4s ease both;

   ${CardShell}:hover & {
      transform: scale(1.04);
   }
`;

const CardImageOverlay = styled.div`
   position: absolute;
   inset: 0;
   background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(15, 23, 42, 0.22)
   );
   pointer-events: none;
`;

// Progress bar — auto-advances slides
const ProgressBar = styled.div`
   position: absolute;
   bottom: 0;
   left: 0;
   height: 3px;
   background: var(--color-primary-blue);
   border-radius: 0 2px 2px 0;
   animation: ${progressAnim} ${({ $duration }) => $duration}ms linear both;
`;

// Card body
const CardBody = styled.div`
   padding: 1.25rem 1.4rem 1.5rem;
`;

const CardTopRow = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 0.65rem;
`;

const CardTag = styled.span`
   display: inline-flex;
   align-items: center;
   gap: 5px;
   background: rgba(37, 99, 235, 0.08);
   color: var(--color-primary-blue);
   font-size: 0.67rem;
   font-weight: 700;
   padding: 3px 10px;
   border-radius: 999px;
   text-transform: uppercase;
   letter-spacing: 0.07em;
   font-family: var(--inter-font);

   i {
      font-size: 0.6rem;
   }
`;

const SlideCounter = styled.span`
   font-size: 0.68rem;
   color: var(--color-text-secondary);
   font-family: var(--inter-font);
   font-weight: 500;
   font-variant-numeric: tabular-nums;
`;

const CardTitle = styled.h3`
   font-size: 1.05rem;
   font-weight: 700;
   color: var(--color-text-main);
   margin-bottom: 0.45rem;
   letter-spacing: -0.015em;
   font-family: var(--inter-font);
   line-height: 1.3;
`;

const CardText = styled.p`
   font-size: 0.8rem;
   color: var(--color-text-light, var(--color-text-secondary));
   margin-bottom: 1.1rem;
   line-height: 1.65;
   font-family: var(--inter-font);
`;

// Pill dots
const PaginationDots = styled.div`
   display: flex;
   align-items: center;
   gap: 0.4rem;
   margin-bottom: 1.1rem;
`;

const Dot = styled.button`
   width: ${({ $active }) => ($active ? "22px" : "7px")};
   height: 7px;
   border-radius: 999px;
   border: none;
   padding: 0;
   cursor: pointer;
   background: ${({ $active }) =>
      $active ? "var(--color-primary-blue)" : "var(--color-border)"};
   transition:
      width 0.25s ease,
      background 0.2s ease;
   flex-shrink: 0;

   &:hover {
      background: ${({ $active }) =>
         $active ? "var(--color-primary-blue)" : "var(--color-border-hover)"};
   }

   &:focus-visible {
      outline: 2px solid var(--color-primary-blue);
      outline-offset: 2px;
   }
`;

// Card action row
const CardActions = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 0.65rem;
`;

const BtnCardSecondary = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.4rem;
   background: transparent;
   border: 1px solid var(--color-border);
   color: var(--color-text-secondary);
   padding: 0.58rem 0.5rem;
   border-radius: var(--radius-sm);
   font-weight: 500;
   font-size: 0.82rem;
   font-family: var(--inter-font);
   cursor: pointer;
   transition:
      background 0.15s ease,
      border-color 0.15s ease,
      color 0.15s ease;

   i {
      font-size: 0.7rem;
   }

   &:hover {
      background: var(--color-bg-light);
      border-color: var(--color-border-hover);
      color: var(--color-text-main);
   }
   &:active {
      transform: scale(0.97);
   }
`;

const BtnCardPrimary = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.4rem;
   background: var(--color-primary-blue);
   border: 1px solid var(--color-primary-blue);
   color: #ffffff;
   padding: 0.58rem 0.5rem;
   border-radius: var(--radius-sm);
   font-weight: 600;
   font-size: 0.82rem;
   font-family: var(--inter-font);
   cursor: pointer;
   transition:
      background 0.15s ease,
      transform 0.12s ease;

   i {
      font-size: 0.72rem;
   }

   &:hover {
      background: #1d4ed8;
      border-color: #1d4ed8;
      transform: translateY(-1px);
   }
   &:active {
      transform: scale(0.97);
   }
`;

// ── Auto-play config ───────────────────────────────────────────

const SLIDE_DURATION = 4500; // ms per slide

// ── Static Data ────────────────────────────────────────────────

const SLIDES = [
   {
      id: 1,
      tag: "Components",
      icon: "fa-puzzle-piece",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
      alt: "Shopify component library",
      title: "Production-ready Shopify sections",
      text: "Browse headers, hero sections, and product sliders. Copy one code block into Custom Liquid and you're live.",
      path: "/components",
   },
   {
      id: 2,
      tag: "Live Editor",
      icon: "fa-wand-magic-sparkles",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
      alt: "Live component editor",
      title: "Customize in the live editor",
      text: "Tweak colors, text, and layout in real time on the React Flow canvas. Changes are baked into the exported code.",
      path: "/components/hero/hero-v1",
   },
   {
      id: 3,
      tag: "Copy Code",
      icon: "fa-code",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80&auto=format&fit=crop",
      alt: "Copy and paste code snippet",
      title: "Paste directly into Shopify",
      text: "One clean HTML + CSS + JS block. Paste into a Custom Liquid section — your section is live in minutes.",
      path: "/components",
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
   const [paused, setPaused] = useState(false);
   const [animKey, setAnimKey] = useState(0); // remount progress bar
   const timerRef = useRef(null);
   const navigate = useNavigate();

   const slide = SLIDES[active];
   const totalSlides = SLIDES.length;

   // ── Auto-advance ───────────────────────────────────────────

   const goTo = (index) => {
      setActive(index);
      setAnimKey((k) => k + 1); // reset progress bar
   };

   const goNext = () => goTo((active + 1) % totalSlides);
   const goPrev = () => goTo((active - 1 + totalSlides) % totalSlides);

   useEffect(() => {
      if (paused) return;
      timerRef.current = setTimeout(goNext, SLIDE_DURATION);
      return () => clearTimeout(timerRef.current);
   }, [active, paused]);

   // ── Keyboard navigation ────────────────────────────────────

   const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
   };

   // ── Render ─────────────────────────────────────────────────

   return (
      <HeroWrapper>
         <Container>
            <HeroGrid>
               {/* ── Left: Content ── */}
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
                  <CardShell
                     onMouseEnter={() => setPaused(true)}
                     onMouseLeave={() => setPaused(false)}
                     onKeyDown={handleKeyDown}
                     tabIndex={0}
                     role="region"
                     aria-label="Feature slideshow"
                     aria-roledescription="carousel"
                  >
                     {/* Browser chrome */}
                     <CardTopBar>
                        <TrafficDot $color="#ff5f57" />
                        <TrafficDot $color="#febc2e" />
                        <TrafficDot $color="#28c840" />
                        <CardUrlBar>shopifybazzar.com/components</CardUrlBar>
                     </CardTopBar>

                     {/* Image */}
                     <CardImageWrap>
                        <CardImage
                           key={`img-${active}`}
                           src={slide.image}
                           alt={slide.alt}
                        />
                        <CardImageOverlay />

                        {/* Auto-play progress bar */}
                        {!paused && (
                           <ProgressBar
                              key={`progress-${animKey}`}
                              $duration={SLIDE_DURATION}
                           />
                        )}
                     </CardImageWrap>

                     {/* Card body */}
                     <CardBody>
                        <CardTopRow>
                           <CardTag>
                              <i className={`fa-solid ${slide.icon}`}></i>
                              {slide.tag}
                           </CardTag>
                           <SlideCounter>
                              {active + 1} / {totalSlides}
                           </SlideCounter>
                        </CardTopRow>

                        <CardTitle>{slide.title}</CardTitle>
                        <CardText>{slide.text}</CardText>

                        {/* Pill dots */}
                        <PaginationDots role="tablist" aria-label="Slides">
                           {SLIDES.map((s, i) => (
                              <Dot
                                 key={i}
                                 $active={i === active}
                                 onClick={() => goTo(i)}
                                 role="tab"
                                 aria-selected={i === active}
                                 aria-label={`Slide ${i + 1}: ${s.title}`}
                              />
                           ))}
                        </PaginationDots>

                        {/* Actions */}
                        <CardActions>
                           <BtnCardSecondary onClick={goPrev}>
                              <i className="fa-solid fa-arrow-left"></i>
                              Prev
                           </BtnCardSecondary>
                           <BtnCardPrimary onClick={goNext}>
                              Next
                              <i className="fa-solid fa-arrow-right"></i>
                           </BtnCardPrimary>
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
