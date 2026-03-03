import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { getAllCategories } from "../registry/componentRegistry";

// ── Animations ─────────────────────────────────────────────────

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0);    }
`;

// ── Page Header ────────────────────────────────────────────────

const PageHeader = styled.header`
   margin-bottom: 3rem;
   animation: ${fadeUp} 0.5s ease both;
`;

const HeaderTop = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
   gap: 1.5rem;
   flex-wrap: wrap;
   margin-bottom: 1rem;
`;

const TitleGroup = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.35rem;
`;

const PageEyebrow = styled.div`
   display: inline-flex;
   align-items: center;
   gap: 0.4rem;
   font-size: 0.7rem;
   font-weight: 700;
   color: var(--color-primary-blue);
   text-transform: uppercase;
   letter-spacing: 0.09em;
   font-family: var(--inter-font);

   i {
      font-size: 0.62rem;
   }
`;

const PageTitle = styled.h1`
   font-size: clamp(1.6rem, 3vw, 2.4rem);
   font-weight: 800;
   color: var(--color-nav-text);
   letter-spacing: -0.03em;
   font-family: var(--inter-font);
   line-height: 1.1;
`;

const PageDescription = styled.p`
   font-size: 0.92rem;
   color: var(--color-nav-text-secondary);
   line-height: 1.7;
   max-width: 580px;
   font-family: var(--inter-font);
   margin-top: 0.25rem;
`;

const StatsRow = styled.div`
   display: flex;
   align-items: center;
   gap: 0.6rem;
   flex-wrap: wrap;

   @media (max-width: 640px) {
      width: 100%;
   }
`;

const StatChip = styled.div`
   display: inline-flex;
   align-items: center;
   gap: 0.4rem;
   background: var(--color-bg-light, #f9fafb);
   border: 1px solid var(--color-sidebar-border);
   border-radius: var(--radius-full);
   padding: 0.3rem 0.85rem;
   font-size: 0.72rem;
   font-weight: 600;
   color: var(--color-nav-text-secondary);
   font-family: var(--inter-font);
   white-space: nowrap;

   i {
      font-size: 0.62rem;
      color: var(--color-primary-blue);
   }
`;

// ── Category Section ───────────────────────────────────────────

const CategorySection = styled.section`
   margin-bottom: 3.5rem;
   animation: ${fadeUp} 0.5s ease both;
   animation-delay: ${({ $delay }) => $delay || "0s"};
`;

const SectionHeading = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 1rem;
   margin-bottom: 0.65rem;
   flex-wrap: wrap;
`;

const SectionTitle = styled.h2`
   font-size: 1.05rem;
   font-weight: 700;
   color: var(--color-nav-text);
   font-family: var(--inter-font);
   display: flex;
   align-items: center;
   gap: 0.55rem;

   i {
      font-size: 0.82rem;
      color: var(--color-primary-blue);
      opacity: 0.75;
   }
`;

const SectionBadge = styled.span`
   font-size: 0.66rem;
   font-weight: 700;
   background: var(--color-nav-active-bg);
   color: var(--color-nav-active);
   padding: 2px 8px;
   border-radius: var(--radius-full);
   font-family: var(--inter-font);
   border: 1px solid rgba(37, 99, 235, 0.15);
`;

const ViewAllBtn = styled.button`
   display: inline-flex;
   align-items: center;
   gap: 0.35rem;
   font-size: 0.75rem;
   font-weight: 600;
   color: var(--color-primary-blue);
   background: none;
   border: none;
   cursor: pointer;
   font-family: var(--inter-font);
   padding: 0;
   transition: opacity 0.14s ease;
   white-space: nowrap;

   i {
      font-size: 0.62rem;
      transition: transform 0.14s ease;
   }

   &:hover {
      opacity: 0.7;
      i {
         transform: translateX(2px);
      }
   }
`;

const SectionDivider = styled.div`
   width: 100%;
   height: 1px;
   background: var(--color-sidebar-border);
   margin-bottom: 1.5rem;
`;

// ── Cards Grid ─────────────────────────────────────────────────

const CardsGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
   gap: 1.25rem;

   @media (max-width: 640px) {
      grid-template-columns: 1fr;
   }
`;

// ── Card ───────────────────────────────────────────────────────

const Card = styled.div`
   border: 1px solid var(--color-sidebar-border);
   border-radius: 12px;
   overflow: hidden;
   background: var(--color-bg-white);
   display: flex;
   flex-direction: column;
   cursor: pointer;
   transition:
      border-color 0.18s ease,
      box-shadow 0.18s ease,
      transform 0.18s ease;

   &:hover {
      border-color: var(--color-nav-active);
      box-shadow: 0 8px 28px rgba(37, 99, 235, 0.1);
      transform: translateY(-2px);
   }

   &:active {
      transform: translateY(0);
      box-shadow: none;
   }
`;

const CardPreview = styled.div`
   height: 220px;
   background: var(--color-bg-light, #f9fafb);
   display: flex;
   align-items: flex-start;
   justify-content: center;
   border-bottom: 1px solid var(--color-sidebar-border);
   overflow: hidden;
   pointer-events: none;
   position: relative;
`;

const PreviewScaler = styled.div`
   transform: scale(0.42);
   transform-origin: top center;
   width: 238%;
   pointer-events: none;
   position: absolute;
   top: 0;
   left: 50%;
   translate: -50% 0;
`;

const PreviewOverlay = styled.div`
   position: absolute;
   inset: 0;
   background: rgba(37, 99, 235, 0.04);
   opacity: 0;
   transition: opacity 0.18s ease;
   z-index: 1;
   pointer-events: none;

   ${Card}:hover & {
      opacity: 1;
   }
`;

const CardFooter = styled.div`
   padding: 12px 14px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 10px;
   background: #ffffff;
   flex-shrink: 0;
`;

const CardNameWrap = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2px;
   min-width: 0;
   flex: 1;
`;

const CardName = styled.span`
   font-size: 0.86rem;
   font-weight: 700;
   color: var(--color-nav-text);
   font-family: var(--inter-font);
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   line-height: 1.2;
`;

const CardSlug = styled.span`
   font-size: 0.68rem;
   color: var(--color-nav-text-secondary);
   font-family: var(--inter-font);
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   opacity: 0.7;
`;

const CustomizeBtn = styled.button`
   display: inline-flex;
   align-items: center;
   gap: 0.35rem;
   font-size: 0.72rem;
   font-weight: 600;
   padding: 6px 13px;
   border-radius: var(--radius-full);
   background: var(--color-nav-active-bg);
   color: var(--color-nav-active);
   border: 1px solid rgba(37, 99, 235, 0.18);
   font-family: var(--inter-font);
   cursor: pointer;
   white-space: nowrap;
   flex-shrink: 0;
   transition:
      background 0.14s ease,
      color 0.14s ease,
      border-color 0.14s ease;

   i {
      font-size: 0.62rem;
   }

   &:hover {
      background: var(--color-nav-active);
      color: #ffffff;
      border-color: var(--color-nav-active);
   }
`;

// ── Empty States ───────────────────────────────────────────────

const EmptyState = styled.div`
   text-align: center;
   padding: 4rem 2rem;
   color: var(--color-nav-text-secondary);
   font-family: var(--inter-font);

   i {
      font-size: 2rem;
      opacity: 0.25;
      margin-bottom: 1rem;
      display: block;
   }

   p {
      font-size: 0.88rem;
      line-height: 1.7;
   }
`;

// ══════════════════════════════════════════════════════════════
// ── Exported VariantsGrid ─────────────────────────────────────
// ══════════════════════════════════════════════════════════════

export const VariantsGrid = ({ category }) => {
   const navigate = useNavigate();

   if (!category?.variants?.length) {
      return (
         <EmptyState>
            <i className="fa-solid fa-cube"></i>
            <p>
               No variants yet for this category.
               <br />
               Check back soon!
            </p>
         </EmptyState>
      );
   }

   return (
      <CardsGrid>
         {category.variants.map((variant) => {
            const LiveComponent = variant.component;
            return (
               <Card
                  key={variant.id}
                  onClick={() =>
                     navigate(`/components/${category.slug}/${variant.id}`)
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                     if (e.key === "Enter")
                        navigate(`/components/${category.slug}/${variant.id}`);
                  }}
                  aria-label={`Open ${variant.name} in live editor`}
               >
                  <CardPreview>
                     <PreviewScaler>
                        <LiveComponent config={variant.defaultConfig} />
                     </PreviewScaler>
                     <PreviewOverlay />
                  </CardPreview>

                  <CardFooter>
                     <CardNameWrap>
                        <CardName title={variant.name}>{variant.name}</CardName>
                        <CardSlug>
                           {category.slug}/{variant.id}
                        </CardSlug>
                     </CardNameWrap>

                     <CustomizeBtn
                        onClick={(e) => {
                           e.stopPropagation();
                           navigate(
                              `/components/${category.slug}/${variant.id}`,
                           );
                        }}
                        aria-label={`Open ${variant.name} editor`}
                     >
                        <i className="fa-solid fa-wand-magic-sparkles"></i>
                        Open Editor
                     </CustomizeBtn>
                  </CardFooter>
               </Card>
            );
         })}
      </CardsGrid>
   );
};

// ══════════════════════════════════════════════════════════════
// ── Page Component ────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════

const ComponentsPage = () => {
   const navigate = useNavigate();
   const categories = getAllCategories();

   const totalVariants = categories.reduce(
      (acc, cat) => acc + cat.variants.length,
      0,
   );

   return (
      <>
         <PageHeader>
            <HeaderTop>
               <TitleGroup>
                  <PageEyebrow>
                     <i className="fa-solid fa-puzzle-piece"></i>
                     Component Library
                  </PageEyebrow>
                  <PageTitle>All Components</PageTitle>
               </TitleGroup>

               <StatsRow>
                  <StatChip>
                     <i className="fa-solid fa-layer-group"></i>
                     {categories.length} categories
                  </StatChip>
                  <StatChip>
                     <i className="fa-solid fa-cube"></i>
                     {totalVariants} variants
                  </StatChip>
                  <StatChip>
                     <i className="fa-solid fa-star"></i>
                     100% free
                  </StatChip>
               </StatsRow>
            </HeaderTop>

            <PageDescription>
               Browse every production-ready section variant. Click any card to
               open the live editor — customize colors, text, and layout, then
               copy the generated code directly into your Shopify store.
            </PageDescription>
         </PageHeader>

         {categories.length === 0 && (
            <EmptyState>
               <i className="fa-solid fa-box-open"></i>
               <p>
                  No components found in the registry.
                  <br />
                  Add a category to get started.
               </p>
            </EmptyState>
         )}

         {categories.map((category, index) => (
            <CategorySection key={category.id} $delay={`${index * 0.07}s`}>
               <SectionHeading>
                  <SectionTitle>
                     <i className="fa-solid fa-folder"></i>
                     {category.title}
                     <SectionBadge>
                        {category.variants.length}{" "}
                        {category.variants.length === 1
                           ? "variant"
                           : "variants"}
                     </SectionBadge>
                  </SectionTitle>

                  <ViewAllBtn
                     onClick={() => navigate(`/components/${category.slug}`)}
                  >
                     View all
                     <i className="fa-solid fa-arrow-right"></i>
                  </ViewAllBtn>
               </SectionHeading>

               <SectionDivider />

               <VariantsGrid category={category} />
            </CategorySection>
         ))}
      </>
   );
};

export default ComponentsPage;
