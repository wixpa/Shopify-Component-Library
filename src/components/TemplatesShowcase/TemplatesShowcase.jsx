import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// ── Animations ─────────────────────────────────────────────────

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0);    }
`;

const shimmer = keyframes`
    0%   { background-position: -400px 0; }
    100% { background-position:  400px 0; }
`;

// ── Layout ─────────────────────────────────────────────────────

const Section = styled.section`
   background: var(--color-bg-light, #f9fafb);
   padding: 6rem 0;

   @media (min-width: 1024px) {
      padding: 8rem 0;
   }
`;

const Container = styled.div`
   max-width: var(--container-max-width);
   margin: 0 auto;
   padding: 0 var(--container-padding-x, 1.5rem);
`;

// ── Section Header ─────────────────────────────────────────────

const SectionHeader = styled.header`
   text-align: center;
   margin-bottom: 4rem;
`;

const SectionEyebrow = styled.div`
   display: inline-flex;
   align-items: center;
   gap: 0.5rem;
   background: rgba(124, 58, 237, 0.07);
   border: 1px solid rgba(124, 58, 237, 0.15);
   border-radius: var(--radius-full);
   padding: 0.3rem 0.9rem;
   font-size: 0.75rem;
   font-weight: 700;
   color: var(--color-primary-purple);
   text-transform: uppercase;
   letter-spacing: 0.08em;
   font-family: var(--inter-font);
   margin-bottom: 1.25rem;

   i {
      font-size: 0.7rem;
   }
`;

const SectionTitle = styled.h2`
   font-size: clamp(1.9rem, 3.5vw, 2.75rem);
   font-weight: 800;
   color: var(--color-primary-dark);
   margin-bottom: 1rem;
   letter-spacing: -0.03em;
   line-height: 1.1;
   font-family: var(--inter-font);
`;

const Highlight = styled.span`
   color: var(--color-primary-purple);
   position: relative;
   display: inline-block;
   white-space: nowrap;

   &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 3px;
      background: var(--color-primary-purple);
      border-radius: 2px;
      opacity: 0.35;
   }
`;

const SectionSubtitle = styled.p`
   color: var(--color-text-secondary);
   font-size: 1.05rem;
   line-height: 1.7;
   max-width: 560px;
   margin: 0 auto;
   font-family: var(--inter-font);
`;

// ── Grid ───────────────────────────────────────────────────────

const Grid = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   gap: 2rem;
   margin-bottom: 3.5rem;

   @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2.5rem;
   }

   @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
   }
`;

// ── Card ───────────────────────────────────────────────────────

const Card = styled.article`
   display: flex;
   flex-direction: column;
   background: #ffffff;
   border: 1px solid var(--color-border);
   border-radius: 14px;
   overflow: hidden;
   opacity: 0;
   transform: translateY(22px);
   transition:
      opacity 0.5s ease ${({ $delay }) => $delay}s,
      transform 0.5s ease ${({ $delay }) => $delay}s,
      box-shadow 0.22s ease,
      border-color 0.22s ease;

   &.visible {
      opacity: 1;
      transform: translateY(0);
   }

   &:hover {
      box-shadow: 0 16px 48px rgba(15, 23, 42, 0.1);
      border-color: var(--color-border-hover);
   }

   &:hover .template-img {
      transform: scale(1.03);
   }
`;

// ── Frame ──────────────────────────────────────────────────────

const CardFrame = styled.div`
   position: relative;
   aspect-ratio: 16 / 10;
   overflow: hidden;
   background: ${({ $bg }) => $bg || "var(--color-bg-light)"};
   cursor: pointer;
   flex-shrink: 0;
`;

const CardImg = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   object-position: top center;
   display: block;
   transition: transform 0.4s ease;
`;

// Skeleton shimmer for image loading
const ImgSkeleton = styled.div`
   position: absolute;
   inset: 0;
   background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
   background-size: 400px 100%;
   animation: ${shimmer} 1.4s ease infinite;
`;

// Badge overlaid on image
const FrameBadge = styled.div`
   position: absolute;
   top: 10px;
   left: 10px;
   display: inline-flex;
   align-items: center;
   gap: 5px;
   font-size: 0.65rem;
   font-weight: 700;
   text-transform: uppercase;
   letter-spacing: 0.07em;
   padding: 3px 9px;
   border-radius: 999px;
   font-family: var(--inter-font);
   z-index: 2;
   backdrop-filter: blur(6px);
   -webkit-backdrop-filter: blur(6px);
   background: ${({ $free, $soon }) =>
      $soon
         ? "rgba(234,88,12,0.88)"
         : $free
           ? "rgba(22,163,74,0.88)"
           : "rgba(15,23,42,0.82)"};
   color: #ffffff;

   i {
      font-size: 0.58rem;
   }
`;

// Preview overlay on hover
const FrameOverlay = styled.div`
   position: absolute;
   inset: 0;
   background: rgba(15, 23, 42, 0.45);
   display: flex;
   align-items: center;
   justify-content: center;
   opacity: 0;
   transition: opacity 0.22s ease;
   z-index: 3;

   ${CardFrame}:hover & {
      opacity: 1;
   }
`;

const OverlayBtn = styled.button`
   display: inline-flex;
   align-items: center;
   gap: 0.5rem;
   background: #ffffff;
   color: var(--color-primary-dark);
   border: none;
   border-radius: 8px;
   padding: 0.55rem 1.1rem;
   font-size: 0.8rem;
   font-weight: 700;
   font-family: var(--inter-font);
   cursor: pointer;
   transition: transform 0.15s ease;

   i {
      font-size: 0.72rem;
   }

   &:hover {
      transform: scale(1.04);
   }
`;

// ── Card Body ──────────────────────────────────────────────────

const CardBody = styled.div`
   padding: 1.1rem 1.25rem 1.4rem;
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
   flex: 1;
`;

const CardTopRow = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
   gap: 0.75rem;
`;

const CardTitle = styled.h3`
   font-size: 0.98rem;
   font-weight: 700;
   color: var(--color-text-main);
   font-family: var(--inter-font);
   letter-spacing: -0.01em;
   line-height: 1.3;
   flex: 1;
   min-width: 0;
`;

const PriceGroup = styled.div`
   display: flex;
   align-items: center;
   gap: 0.4rem;
   flex-shrink: 0;
   font-family: var(--inter-font);
`;

const PriceFree = styled.span`
   font-size: 0.78rem;
   font-weight: 800;
   color: #16a34a;
   background: rgba(22, 163, 74, 0.08);
   border-radius: 999px;
   padding: 2px 9px;
   text-transform: uppercase;
   letter-spacing: 0.06em;
`;

const PriceCurrent = styled.span`
   font-size: 0.88rem;
   font-weight: 800;
   color: var(--color-primary-blue);
`;

const PriceOld = styled.span`
   font-size: 0.75rem;
   font-weight: 500;
   color: var(--color-text-secondary);
   text-decoration: line-through;
`;

const PriceSoon = styled.span`
   font-size: 0.72rem;
   font-weight: 700;
   color: #ea580c;
   background: rgba(234, 88, 12, 0.08);
   border-radius: 999px;
   padding: 2px 9px;
   text-transform: uppercase;
   letter-spacing: 0.06em;
`;

const CardDesc = styled.p`
   font-size: 0.8rem;
   color: var(--color-text-secondary);
   line-height: 1.65;
   font-family: var(--inter-font);
   margin: 0;
`;

// Tags row
const TagsRow = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 0.4rem;
   margin-top: 0.25rem;
`;

const Tag = styled.span`
   font-size: 0.65rem;
   font-weight: 600;
   background: var(--color-bg-light);
   border: 1px solid var(--color-border);
   color: var(--color-text-secondary);
   border-radius: 5px;
   padding: 2px 7px;
   font-family: var(--inter-font);
`;

// ── Card Footer ────────────────────────────────────────────────

const CardFooter = styled.div`
   padding: 0.75rem 1.25rem;
   border-top: 1px solid var(--color-border);
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 0.75rem;
   background: var(--color-bg-light, #f9fafb);
`;

const CardCtaBtn = styled.button`
   display: inline-flex;
   align-items: center;
   gap: 0.45rem;
   font-size: 0.78rem;
   font-weight: 600;
   font-family: var(--inter-font);
   border-radius: 7px;
   border: 1px solid;
   padding: 0.42rem 0.85rem;
   cursor: ${({ $soon }) => ($soon ? "default" : "pointer")};
   transition:
      background 0.14s ease,
      transform 0.12s ease;
   pointer-events: ${({ $soon }) => ($soon ? "none" : "auto")};

   background: ${({ $soon }) =>
      $soon ? "var(--color-bg-light)" : "var(--color-primary-dark)"};
   border-color: ${({ $soon }) =>
      $soon ? "var(--color-border)" : "var(--color-primary-dark)"};
   color: ${({ $soon }) => ($soon ? "var(--color-text-secondary)" : "#ffffff")};

   i {
      font-size: 0.68rem;
   }

   &:hover {
      background: ${({ $soon }) => ($soon ? "" : "#1e293b")};
      transform: ${({ $soon }) => ($soon ? "none" : "translateY(-1px)")};
   }
`;

const LiveDot = styled.span`
   width: 6px;
   height: 6px;
   border-radius: 50%;
   background: #22c55e;
   flex-shrink: 0;
   animation: pulse 2s ease infinite;

   @keyframes pulse {
      0%,
      100% {
         box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);
      }
      50% {
         box-shadow: 0 0 0 5px rgba(34, 197, 94, 0);
      }
   }
`;

const CardStatus = styled.div`
   display: flex;
   align-items: center;
   gap: 0.35rem;
   font-size: 0.7rem;
   font-weight: 600;
   color: ${({ $soon }) => ($soon ? "#ea580c" : "#16a34a")};
   font-family: var(--inter-font);

   i {
      font-size: 0.62rem;
   }
`;

// ── Section Footer ─────────────────────────────────────────────

const FooterAction = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 0.85rem;
`;

const BtnBrowse = styled.button`
   display: inline-flex;
   align-items: center;
   gap: 0.55rem;
   background: var(--color-primary-purple);
   color: #ffffff;
   padding: 0.82rem 2rem;
   border-radius: var(--radius-md);
   border: 1px solid var(--color-primary-purple);
   font-weight: 600;
   font-size: 0.92rem;
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
      background: #6d28d9;
      border-color: #6d28d9;
      transform: translateY(-1px);
      box-shadow: 0 8px 24px rgba(124, 58, 237, 0.3);
      i {
         transform: translateX(2px);
      }
   }
   &:active {
      transform: translateY(0);
   }
`;

const FooterNote = styled.p`
   font-size: 0.8rem;
   color: var(--color-text-secondary);
   font-family: var(--inter-font);
   text-align: center;

   span {
      color: var(--color-primary-purple);
      font-weight: 600;
      cursor: pointer;
      &:hover {
         text-decoration: underline;
      }
   }
`;

// ── Templates Data ─────────────────────────────────────────────

const TEMPLATES = [
   {
      id: 1,
      title: "Shopify Bazzar — Starter Store",
      desc: "A minimal, blazing-fast Shopify theme built with our section library. Includes header, hero, product grid, and footer — ready to customize.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop",
      alt: "Shopify Starter Store Template",
      bg: "#f0f4ff",
      price: null,
      oldPrice: null,
      free: true,
      soon: false,
      tags: ["Shopify", "Liquid", "Starter"],
      path: "/templates/starter-store",
   },
   {
      id: 2,
      title: "Fashion & Apparel Store",
      desc: "Premium fashion-focused Shopify theme with announcement bar, lookbook hero, product cards, and a testimonials strip.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
      alt: "Fashion & Apparel Shopify Template",
      bg: "#fdf2f8",
      price: "$19",
      oldPrice: "$39",
      free: false,
      soon: false,
      tags: ["Shopify", "Fashion", "Lookbook"],
      path: "/templates/fashion-store",
   },
   {
      id: 3,
      title: "Beauty & Skincare Store",
      desc: "Pink-accented Shopify theme for beauty brands. Built with our skincare product cards, collection banners, and trust badges.",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=900&q=80&auto=format&fit=crop",
      alt: "Beauty & Skincare Shopify Template",
      bg: "#fff7f0",
      price: null,
      oldPrice: null,
      free: false,
      soon: true,
      tags: ["Shopify", "Beauty", "Skincare"],
      path: null,
   },
   {
      id: 4,
      title: "Electronics & Tech Store",
      desc: "Dark, high-contrast Shopify theme for electronics retailers. Includes spec tables, comparison sliders, and cart drawers.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop",
      alt: "Electronics & Tech Shopify Template",
      bg: "#f0f9ff",
      price: null,
      oldPrice: null,
      free: false,
      soon: true,
      tags: ["Shopify", "Electronics", "Dark"],
      path: null,
   },
];

// ── Component ─────────────────────────────────────────────────

const TemplatesShowcase = () => {
   const cardRefs = useRef([]);
   const navigate = useNavigate();

   // ── Intersection observer ──────────────────────────────

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
         { threshold: 0.08 },
      );

      cardRefs.current.forEach((card) => {
         if (card) observer.observe(card);
      });

      return () => observer.disconnect();
   }, []);

   const handleCardNav = (path) => {
      if (path) navigate(path);
   };

   // ── Render ─────────────────────────────────────────────

   return (
      <Section>
         <Container>
            {/* ── Header ── */}
            <SectionHeader>
               <SectionEyebrow>
                  <i className="fa-solid fa-layer-group"></i>
                  Full Store Templates
               </SectionEyebrow>
               <SectionTitle>
                  Complete Shopify Stores,{" "}
                  <Highlight>Ready to Launch</Highlight>
               </SectionTitle>
               <SectionSubtitle>
                  Full Shopify theme templates assembled from our section
                  library. Pick a template, customize the colors and copy, and
                  go live in one afternoon.
               </SectionSubtitle>
            </SectionHeader>

            {/* ── Cards Grid ── */}
            <Grid>
               {TEMPLATES.map((tmpl, index) => (
                  <Card
                     key={tmpl.id}
                     $delay={(index * 0.1).toFixed(2)}
                     ref={(el) => (cardRefs.current[index] = el)}
                     aria-label={tmpl.title}
                  >
                     {/* Frame */}
                     <CardFrame
                        $bg={tmpl.bg}
                        onClick={() => !tmpl.soon && handleCardNav(tmpl.path)}
                        style={{
                           cursor: tmpl.soon ? "default" : "pointer",
                        }}
                     >
                        <CardImg
                           className="template-img"
                           src={tmpl.image}
                           alt={tmpl.alt}
                           loading="lazy"
                        />

                        {/* Badge */}
                        <FrameBadge $free={tmpl.free} $soon={tmpl.soon}>
                           {tmpl.soon ? (
                              <>
                                 <i className="fa-solid fa-clock"></i>
                                 Coming Soon
                              </>
                           ) : tmpl.free ? (
                              <>
                                 <i className="fa-solid fa-star"></i>
                                 Free
                              </>
                           ) : (
                              <>
                                 <i className="fa-solid fa-bolt"></i>
                                 Premium
                              </>
                           )}
                        </FrameBadge>

                        {/* Hover overlay */}
                        {!tmpl.soon && (
                           <FrameOverlay>
                              <OverlayBtn
                                 onClick={() => handleCardNav(tmpl.path)}
                              >
                                 <i className="fa-solid fa-eye"></i>
                                 Preview Template
                              </OverlayBtn>
                           </FrameOverlay>
                        )}
                     </CardFrame>

                     {/* Body */}
                     <CardBody>
                        <CardTopRow>
                           <CardTitle>{tmpl.title}</CardTitle>
                           <PriceGroup>
                              {tmpl.soon ? (
                                 <PriceSoon>Soon</PriceSoon>
                              ) : tmpl.free ? (
                                 <PriceFree>Free</PriceFree>
                              ) : (
                                 <>
                                    <PriceCurrent>{tmpl.price}</PriceCurrent>
                                    <PriceOld>{tmpl.oldPrice}</PriceOld>
                                 </>
                              )}
                           </PriceGroup>
                        </CardTopRow>

                        <CardDesc>{tmpl.desc}</CardDesc>

                        <TagsRow>
                           {tmpl.tags.map((t) => (
                              <Tag key={t}>{t}</Tag>
                           ))}
                        </TagsRow>
                     </CardBody>

                     {/* Footer */}
                     <CardFooter>
                        <CardStatus $soon={tmpl.soon}>
                           {tmpl.soon ? (
                              <>
                                 <i className="fa-solid fa-clock"></i>
                                 In development
                              </>
                           ) : (
                              <>
                                 <LiveDot />
                                 Available now
                              </>
                           )}
                        </CardStatus>

                        <CardCtaBtn
                           $soon={tmpl.soon}
                           onClick={() =>
                              !tmpl.soon && handleCardNav(tmpl.path)
                           }
                        >
                           {tmpl.soon ? (
                              <>
                                 <i className="fa-solid fa-clock"></i>
                                 Notify Me
                              </>
                           ) : (
                              <>
                                 <i className="fa-solid fa-arrow-right"></i>
                                 {tmpl.free ? "Use Template" : "Get Template"}
                              </>
                           )}
                        </CardCtaBtn>
                     </CardFooter>
                  </Card>
               ))}
            </Grid>

            {/* ── Footer CTA ── */}
            <FooterAction>
               <BtnBrowse onClick={() => navigate("/templates")}>
                  Browse All Templates
                  <i className="fa-solid fa-arrow-right"></i>
               </BtnBrowse>
               <FooterNote>
                  All templates are built entirely from Shopify Bazzar sections.{" "}
                  <span onClick={() => navigate("/components")}>
                     Explore the component library →
                  </span>
               </FooterNote>
            </FooterAction>
         </Container>
      </Section>
   );
};

export default TemplatesShowcase;
