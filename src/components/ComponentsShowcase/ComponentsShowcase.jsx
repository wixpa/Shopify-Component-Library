import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { getAllCategories } from "../../registry/componentRegistry";

// ── Animations ─────────────────────────────────────────────────

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0);    }
`;

// ── Layout ─────────────────────────────────────────────────────

const Section = styled.section`
   background: var(--color-bg-white);
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

// ── Section header ─────────────────────────────────────────────

const SectionHeader = styled.header`
   text-align: center;
   margin-bottom: 4rem;
`;

const SectionEyebrow = styled.div`
   display: inline-flex;
   align-items: center;
   gap: 0.5rem;
   background: rgba(37, 99, 235, 0.07);
   border: 1px solid rgba(37, 99, 235, 0.15);
   border-radius: var(--radius-full);
   padding: 0.3rem 0.9rem;
   font-size: 0.75rem;
   font-weight: 700;
   color: var(--color-primary-blue);
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
   font-family: var(--inter-font);
   line-height: 1.1;
`;

const SectionSubtitle = styled.p`
   color: var(--color-text-secondary);
   font-size: 1.05rem;
   line-height: 1.7;
   max-width: 580px;
   margin: 0 auto;
   font-family: var(--inter-font);
`;

// ── Grid ───────────────────────────────────────────────────────

const Grid = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   gap: 1.5rem;
   margin-bottom: 3.5rem;

   @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
   }

   @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.75rem;
   }
`;

// ── Card ───────────────────────────────────────────────────────

const Card = styled.article`
   background: var(--color-bg-white);
   border: 1px solid var(--color-border);
   border-radius: 14px;
   overflow: hidden;
   display: flex;
   flex-direction: column;
   cursor: pointer;
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

   &:hover .card-preview-inner {
      transform: scale(1.02);
   }
`;

// ── Card Preview ───────────────────────────────────────────────

const CardPreview = styled.div`
   height: 200px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 1.5rem;
   position: relative;
   overflow: hidden;
   background: ${({ $bg }) => $bg || "var(--color-bg-light)"};
   flex-shrink: 0;
`;

const PreviewInner = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: transform 0.3s ease;
`;

// ── Card Footer ────────────────────────────────────────────────

const CardFooter = styled.div`
   padding: 1.1rem 1.25rem 1.25rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 0.75rem;
   border-top: 1px solid var(--color-border);
   background: var(--color-bg-white);
`;

const CardInfo = styled.div`
   flex: 1;
   min-width: 0;
`;

const CardName = styled.h3`
   font-size: 0.95rem;
   font-weight: 700;
   color: var(--color-text-main);
   font-family: var(--inter-font);
   margin-bottom: 0.2rem;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

const CardMeta = styled.span`
   font-size: 0.75rem;
   color: var(--color-text-secondary);
   font-family: var(--inter-font);
`;

const CardTag = styled.span`
   display: inline-flex;
   align-items: center;
   gap: 5px;
   font-size: 0.7rem;
   font-weight: 700;
   padding: 0.28rem 0.7rem;
   border-radius: var(--radius-full);
   white-space: nowrap;
   font-family: var(--inter-font);
   flex-shrink: 0;
   background: ${({ $bg }) => $bg};
   color: ${({ $color }) => $color};

   i {
      font-size: 0.62rem;
   }
`;

const CardArrow = styled.div`
   width: 28px;
   height: 28px;
   border-radius: 7px;
   border: 1px solid var(--color-border);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 0.65rem;
   color: var(--color-text-secondary);
   flex-shrink: 0;
   transition:
      background 0.15s ease,
      border-color 0.15s ease,
      color 0.15s ease,
      transform 0.15s ease;

   ${Card}:hover & {
      background: var(--color-primary-blue);
      border-color: var(--color-primary-blue);
      color: #ffffff;
      transform: translateX(2px);
   }
`;

// ── Footer CTA ─────────────────────────────────────────────────

const FooterAction = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 0.85rem;
`;

const FooterHelp = styled.p`
   font-size: 0.82rem;
   color: var(--color-text-secondary);
   font-family: var(--inter-font);

   span {
      color: var(--color-primary-blue);
      font-weight: 600;
      cursor: pointer;
      &:hover {
         text-decoration: underline;
      }
   }
`;

const BtnBrowse = styled.button`
   display: inline-flex;
   align-items: center;
   gap: 0.55rem;
   background: var(--color-primary-dark);
   color: #ffffff;
   padding: 0.82rem 2rem;
   border-radius: var(--radius-md);
   border: 1px solid var(--color-primary-dark);
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

// ══════════════════════════════════════════════════════════════
// ── Preview Illustrations ──────────────────────────────────────
// ══════════════════════════════════════════════════════════════

// ── 1. Headers Preview ─────────────────────────────────────────

const PvHeader = styled.div`
   width: 100%;
   background: #ffffff;
   border-radius: 8px;
   box-shadow: 0 4px 16px rgba(15, 23, 42, 0.1);
   overflow: hidden;
   border: 1px solid #e5e7eb;
`;
const PvHeaderBar = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 8px 12px;
   border-bottom: 1px solid #f3f4f6;
   background: #fff;
`;
const PvLogo = styled.div`
   width: 48px;
   height: 7px;
   background: #0f172a;
   border-radius: 3px;
`;
const PvNavLinks = styled.div`
   display: flex;
   gap: 8px;
   align-items: center;
`;
const PvNavLink = styled.div`
   width: 22px;
   height: 3px;
   background: #d1d5db;
   border-radius: 2px;
`;
const PvBtn = styled.div`
   width: 36px;
   height: 10px;
   background: ${({ $bg }) => $bg || "#2563eb"};
   border-radius: 4px;
`;
const PvHeaderAlt = styled(PvHeaderBar)`
   background: #0f172a;
   border-bottom: none;
   margin-top: 4px;
`;
const PvLogoWhite = styled(PvLogo)`
   background: #ffffff;
`;
const PvNavLinkWhite = styled(PvNavLink)`
   background: #475569;
`;

const HeadersPreview = () => (
   <PvHeader>
      {/* Classic white */}
      <PvHeaderBar>
         <PvLogo />
         <PvNavLinks>
            <PvNavLink />
            <PvNavLink />
            <PvNavLink />
         </PvNavLinks>
         <PvBtn />
      </PvHeaderBar>
      {/* Dark */}
      <PvHeaderAlt>
         <PvLogoWhite />
         <PvNavLinks>
            <PvNavLinkWhite />
            <PvNavLinkWhite />
            <PvNavLinkWhite />
         </PvNavLinks>
         <PvBtn $bg="#4f46e5" />
      </PvHeaderAlt>
      {/* With search */}
      <PvHeaderBar style={{ background: "#f9fafb" }}>
         <PvLogo />
         <div
            style={{
               flex: 1,
               margin: "0 10px",
               height: "10px",
               background: "#f3f4f6",
               borderRadius: "4px",
               border: "1px solid #e5e7eb",
            }}
         />
         <PvBtn $bg="#0f172a" />
      </PvHeaderBar>
   </PvHeader>
);

// ── 2. Hero Preview ────────────────────────────────────────────

const PvHeroWrap = styled.div`
   width: 100%;
   background: #fff;
   border-radius: 8px;
   box-shadow: 0 4px 16px rgba(15, 23, 42, 0.1);
   border: 1px solid #e5e7eb;
   overflow: hidden;
`;
const PvHeroNav = styled.div`
   height: 14px;
   background: #f9fafb;
   border-bottom: 1px solid #f3f4f6;
   display: flex;
   align-items: center;
   padding: 0 10px;
   justify-content: space-between;
`;
const PvHeroBody = styled.div`
   padding: 10px 12px 12px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 5px;
`;
const PvHeroBadge = styled.div`
   width: 50px;
   height: 5px;
   background: #dbeafe;
   border-radius: 8px;
`;
const PvHeroTitle = styled.div`
   width: ${({ $w }) => $w || "70%"};
   height: ${({ $h }) => $h || "5px"};
   background: ${({ $bg }) => $bg || "#0f172a"};
   border-radius: 2px;
`;
const PvHeroCta = styled.div`
   display: flex;
   gap: 4px;
   margin-top: 2px;
`;
const PvHeroCtaBtn = styled.div`
   width: 28px;
   height: 7px;
   background: ${({ $bg }) => $bg || "#2563eb"};
   border-radius: 3px;
`;
const PvHeroStats = styled.div`
   display: flex;
   gap: 8px;
   margin-top: 3px;
   padding-top: 5px;
   border-top: 1px solid #f3f4f6;
   width: 100%;
   justify-content: center;
`;
const PvStat = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2px;
`;
const PvStatVal = styled.div`
   width: 18px;
   height: 4px;
   background: #0f172a;
   border-radius: 2px;
`;
const PvStatLbl = styled.div`
   width: 14px;
   height: 2px;
   background: #d1d5db;
   border-radius: 1px;
`;

const HeroPreview = () => (
   <PvHeroWrap>
      <PvHeroNav>
         <PvLogo style={{ width: 30 }} />
         <PvNavLinks>
            <PvNavLink />
            <PvNavLink />
            <PvNavLink />
         </PvNavLinks>
         <PvNavLink style={{ width: 16 }} />
      </PvHeroNav>
      <PvHeroBody>
         <PvHeroBadge />
         <PvHeroTitle />
         <PvHeroTitle $w="50%" $h="4px" $bg="#7c3aed" />
         <PvHeroTitle $w="55%" $h="3px" $bg="#9ca3af" />
         <PvHeroTitle $w="80%" $h="2px" $bg="#e5e7eb" />
         <PvHeroCta>
            <PvHeroCtaBtn />
            <PvHeroCtaBtn $bg="#f3f4f6" />
         </PvHeroCta>
         <PvHeroStats>
            {[0, 1, 2].map((i) => (
               <PvStat key={i}>
                  <PvStatVal />
                  <PvStatLbl />
               </PvStat>
            ))}
         </PvHeroStats>
      </PvHeroBody>
   </PvHeroWrap>
);

// ── 3. Product Cards Preview ────────────────────────────────────

const PvProductWrap = styled.div`
   width: 100%;
   background: #fff;
   border-radius: 8px;
   box-shadow: 0 4px 16px rgba(15, 23, 42, 0.1);
   border: 1px solid #e5e7eb;
   padding: 10px;
   display: flex;
   flex-direction: column;
   gap: 6px;
`;
const PvProductTitle = styled.div`
   width: 55px;
   height: 5px;
   background: #0f172a;
   border-radius: 2px;
   margin-bottom: 2px;
`;
const PvProductRow = styled.div`
   display: flex;
   gap: 6px;
`;
const PvProductCard = styled.div`
   flex: 1;
   background: #f9fafb;
   border-radius: 5px;
   border: 1px solid #f3f4f6;
   overflow: hidden;
`;
const PvProductImg = styled.div`
   height: 38px;
   background: ${({ $bg }) => $bg || "#e5e7eb"};
   position: relative;
`;
const PvProductBadge = styled.div`
   position: absolute;
   top: 3px;
   left: 3px;
   width: 12px;
   height: 5px;
   background: #ef4444;
   border-radius: 2px;
`;
const PvProductBody = styled.div`
   padding: 4px 5px;
   display: flex;
   flex-direction: column;
   gap: 2px;
`;
const PvProductLine = styled.div`
   height: ${({ $h }) => $h || "3px"};
   width: ${({ $w }) => $w || "70%"};
   background: ${({ $bg }) => $bg || "#d1d5db"};
   border-radius: 1px;
`;
const PvAddBtn = styled.div`
   height: 7px;
   width: 100%;
   background: #0f172a;
   border-radius: 2px;
   margin-top: 2px;
`;

const ProductCardsPreview = () => (
   <PvProductWrap>
      <PvProductTitle />
      <PvProductRow>
         {["#dbeafe", "#fce7f3", "#dcfce7"].map((bg, i) => (
            <PvProductCard key={i}>
               <PvProductImg $bg={bg} style={{ position: "relative" }}>
                  <PvProductBadge />
               </PvProductImg>
               <PvProductBody>
                  <PvProductLine $w="80%" $bg="#374151" $h="3px" />
                  <PvProductLine $w="50%" />
                  <PvProductLine $w="40%" $bg="#2563eb" $h="3px" />
                  <PvAddBtn />
               </PvProductBody>
            </PvProductCard>
         ))}
      </PvProductRow>
   </PvProductWrap>
);

// ── 4. Coming Soon — Templates Preview ─────────────────────────

const PvComingSoon = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 6px;
   width: 100%;
   height: 100%;
`;
const PvCsIcon = styled.div`
   width: 32px;
   height: 32px;
   border-radius: 10px;
   background: ${({ $bg }) => $bg || "rgba(37,99,235,0.1)"};
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 0.88rem;
   color: ${({ $color }) => $color || "var(--color-primary-blue)"};
   margin-bottom: 2px;
`;
const PvCsLabel = styled.div`
   font-size: 0.72rem;
   font-weight: 700;
   font-family: var(--inter-font);
   color: var(--color-text-secondary);
   letter-spacing: 0.05em;
`;
const PvCsBadge = styled.div`
   font-size: 0.62rem;
   font-weight: 700;
   background: rgba(234, 88, 12, 0.1);
   color: #ea580c;
   padding: 2px 8px;
   border-radius: 999px;
   font-family: var(--inter-font);
   text-transform: uppercase;
   letter-spacing: 0.07em;
`;

const ComingSoonPreview = ({ icon, iconBg, iconColor, label }) => (
   <PvComingSoon>
      <PvCsIcon $bg={iconBg} $color={iconColor}>
         <i className={`fa-solid ${icon}`}></i>
      </PvCsIcon>
      <PvCsLabel>{label}</PvCsLabel>
      <PvCsBadge>Coming Soon</PvCsBadge>
   </PvComingSoon>
);

// ══════════════════════════════════════════════════════════════
// ── Showcase Data — driven by registry + planned items ────────
// ══════════════════════════════════════════════════════════════

const SHOWCASE = [
   // ── Live items (from registry) ─────────────────────────
   {
      id: "headers",
      name: "Headers",
      count: 3,
      tag: {
         label: "Navigation",
         bg: "rgba(37,99,235,0.08)",
         color: "#2563eb",
      },
      bg: "#f0f4ff",
      path: "/components/headers",
      preview: <HeadersPreview />,
      live: true,
   },
   {
      id: "hero",
      name: "Hero Sections",
      count: 3,
      tag: { label: "Landing", bg: "rgba(124,58,237,0.08)", color: "#7c3aed" },
      bg: "#f5f0ff",
      path: "/components/hero",
      preview: <HeroPreview />,
      live: true,
   },
   {
      id: "product-cards",
      name: "Product Cards",
      count: 3,
      tag: {
         label: "E-commerce",
         bg: "rgba(234,88,12,0.08)",
         color: "#ea580c",
      },
      bg: "#fff7f0",
      path: "/components/product-cards",
      preview: <ProductCardsPreview />,
      live: true,
   },

   // ── Upcoming items ─────────────────────────────────────
   {
      id: "product-grid",
      name: "Product Grids",
      count: null,
      tag: {
         label: "E-commerce",
         bg: "rgba(234,88,12,0.08)",
         color: "#ea580c",
      },
      bg: "#fff7ed",
      path: null,
      preview: (
         <ComingSoonPreview
            icon="fa-grid-2"
            iconBg="rgba(234,88,12,0.1)"
            iconColor="#ea580c"
            label="Product Grids"
         />
      ),
      live: false,
   },
   {
      id: "announcement-bars",
      name: "Announcement Bars",
      count: null,
      tag: { label: "Marketing", bg: "rgba(22,163,74,0.08)", color: "#16a34a" },
      bg: "#f0fdf4",
      path: null,
      preview: (
         <ComingSoonPreview
            icon="fa-bullhorn"
            iconBg="rgba(22,163,74,0.1)"
            iconColor="#16a34a"
            label="Announcement Bars"
         />
      ),
      live: false,
   },
   {
      id: "footers",
      name: "Footers",
      count: null,
      tag: {
         label: "Navigation",
         bg: "rgba(37,99,235,0.08)",
         color: "#2563eb",
      },
      bg: "#f0f4ff",
      path: null,
      preview: (
         <ComingSoonPreview
            icon="fa-table-columns"
            iconBg="rgba(37,99,235,0.1)"
            iconColor="#2563eb"
            label="Footers"
         />
      ),
      live: false,
   },
   {
      id: "collection-banners",
      name: "Collection Banners",
      count: null,
      tag: {
         label: "Marketing",
         bg: "rgba(124,58,237,0.08)",
         color: "#7c3aed",
      },
      bg: "#f5f0ff",
      path: null,
      preview: (
         <ComingSoonPreview
            icon="fa-images"
            iconBg="rgba(124,58,237,0.1)"
            iconColor="#7c3aed"
            label="Collection Banners"
         />
      ),
      live: false,
   },
   {
      id: "testimonials",
      name: "Testimonials",
      count: null,
      tag: { label: "Trust", bg: "rgba(234,179,8,0.1)", color: "#ca8a04" },
      bg: "#fefce8",
      path: null,
      preview: (
         <ComingSoonPreview
            icon="fa-star"
            iconBg="rgba(234,179,8,0.1)"
            iconColor="#ca8a04"
            label="Testimonials"
         />
      ),
      live: false,
   },
   {
      id: "cart-drawers",
      name: "Cart Drawers",
      count: null,
      tag: {
         label: "E-commerce",
         bg: "rgba(234,88,12,0.08)",
         color: "#ea580c",
      },
      bg: "#fff7f0",
      path: null,
      preview: (
         <ComingSoonPreview
            icon="fa-cart-shopping"
            iconBg="rgba(234,88,12,0.1)"
            iconColor="#ea580c"
            label="Cart Drawers"
         />
      ),
      live: false,
   },
];

// ── Component ─────────────────────────────────────────────────

const ComponentsShowcase = () => {
   const cardRefs = useRef([]);
   const navigate = useNavigate();

   // ── Intersection observer for staggered entrance ───────

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

   const handleCardClick = (item) => {
      if (item.live && item.path) navigate(item.path);
   };

   // ── Stats from live registry ───────────────────────────

   const categories = getAllCategories();
   const totalVariants = categories.reduce(
      (acc, cat) => acc + cat.variants.length,
      0,
   );

   return (
      <Section>
         <Container>
            {/* ── Header ── */}
            <SectionHeader>
               <SectionEyebrow>
                  <i className="fa-solid fa-puzzle-piece"></i>
                  Component Library
               </SectionEyebrow>
               <SectionTitle>
                  Every Section Your Shopify
                  <br />
                  Store Will Ever Need
               </SectionTitle>
               <SectionSubtitle>
                  {totalVariants} production-ready sections across{" "}
                  {categories.length} categories — copy, paste, and go live in
                  minutes. More sections shipping every week.
               </SectionSubtitle>
            </SectionHeader>

            {/* ── Grid ── */}
            <Grid>
               {SHOWCASE.map((item, index) => (
                  <Card
                     key={item.id}
                     $delay={(index * 0.06).toFixed(2)}
                     ref={(el) => (cardRefs.current[index] = el)}
                     onClick={() => handleCardClick(item)}
                     style={{ cursor: item.live ? "pointer" : "default" }}
                     role={item.live ? "button" : "article"}
                     tabIndex={item.live ? 0 : undefined}
                     onKeyDown={(e) => {
                        if (item.live && e.key === "Enter")
                           handleCardClick(item);
                     }}
                     aria-label={
                        item.live
                           ? `View ${item.name} components`
                           : `${item.name} — coming soon`
                     }
                  >
                     {/* Preview area */}
                     <CardPreview $bg={item.bg}>
                        <PreviewInner className="card-preview-inner">
                           {item.preview}
                        </PreviewInner>
                     </CardPreview>

                     {/* Footer row */}
                     <CardFooter>
                        <CardInfo>
                           <CardName>{item.name}</CardName>
                           <CardMeta>
                              {item.live
                                 ? `${item.count} variant${item.count === 1 ? "" : "s"}`
                                 : "Coming soon"}
                           </CardMeta>
                        </CardInfo>

                        <CardTag $bg={item.tag.bg} $color={item.tag.color}>
                           {item.tag.label}
                        </CardTag>

                        {item.live && (
                           <CardArrow aria-hidden>
                              <i className="fa-solid fa-arrow-right"></i>
                           </CardArrow>
                        )}
                     </CardFooter>
                  </Card>
               ))}
            </Grid>

            {/* ── Footer CTA ── */}
            <FooterAction>
               <BtnBrowse onClick={() => navigate("/components")}>
                  Browse All Components
                  <i className="fa-solid fa-arrow-right"></i>
               </BtnBrowse>
               <FooterHelp>
                  Want a specific section?{" "}
                  <span onClick={() => navigate("/docs")}>
                     Request it here →
                  </span>
               </FooterHelp>
            </FooterAction>
         </Container>
      </Section>
   );
};

export default ComponentsShowcase;
