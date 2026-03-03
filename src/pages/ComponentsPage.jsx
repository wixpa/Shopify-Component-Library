import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAllCategories } from "../registry/componentRegistry";

// ── Styled Components ──────────────────────────────────────────

const PageHeader = styled.header`
   margin-bottom: 48px;
`;

const LibraryName = styled.h1`
   font-size: 2.5rem;
   font-weight: 800;
   color: var(--color-nav-text);
   letter-spacing: -0.025em;
   margin-bottom: 12px;
   font-family: var(--inter-font);

   @media (max-width: 768px) {
      font-size: 2rem;
   }
`;

const LibraryDescription = styled.p`
   font-size: 1.125rem;
   color: var(--color-nav-text-secondary);
   line-height: 1.6;
   max-width: 700px;
   font-family: var(--inter-font);
`;

const CategorySection = styled.section`
   margin-bottom: 64px;
`;

const SectionHeading = styled.h2`
   font-size: 1.5rem;
   font-weight: 700;
   color: var(--color-nav-text);
   margin-bottom: 8px;
   font-family: var(--inter-font);
   display: flex;
   align-items: center;
   gap: 12px;

   span {
      font-size: 0.8rem;
      font-weight: 600;
      background-color: var(--color-badge-gray-bg);
      color: var(--color-nav-text-secondary);
      padding: 2px 10px;
      border-radius: var(--radius-full);
      font-family: var(--inter-font);
   }
`;

const SectionDivider = styled.div`
   width: 100%;
   height: 1px;
   background-color: var(--color-sidebar-border);
   margin-bottom: 28px;
`;

// ── Shared Card Components (also used in ComponentCategoryPage) ─

const CardsGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
   gap: 20px;
`;

const Card = styled.div`
   border: 1px solid var(--color-sidebar-border);
   border-radius: 12px;
   overflow: hidden;
   background: var(--color-bg-white);
   display: flex;
   flex-direction: column;
   cursor: pointer;
   transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.2s ease;

   &:hover {
      border-color: var(--color-nav-active);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
      transform: translateY(-2px);
   }
`;

const CardPreview = styled.div`
   height: 180px;
   background-color: var(--color-bg-light);
   display: flex;
   align-items: center;
   justify-content: center;
   border-bottom: 1px solid var(--color-sidebar-border);
   overflow: hidden;
   padding: 16px;
   pointer-events: none;
`;

const PreviewScaler = styled.div`
   transform: scale(0.45);
   transform-origin: top center;
   width: 222%;
   pointer-events: none;
`;

const CardFooter = styled.div`
   padding: 14px 16px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 8px;
`;

const CardName = styled.span`
   font-size: 0.9rem;
   font-weight: 600;
   color: var(--color-nav-text);
   font-family: var(--inter-font);
`;

const CustomizeBtn = styled.button`
   font-size: 0.8rem;
   font-weight: 600;
   padding: 6px 14px;
   border-radius: var(--radius-full);
   background-color: var(--color-nav-active-bg);
   color: var(--color-nav-active);
   border: 1px solid rgba(0, 127, 255, 0.2);
   font-family: var(--inter-font);
   transition: var(--transition-fast);
   white-space: nowrap;
   flex-shrink: 0;

   &:hover {
      background-color: var(--color-nav-active);
      color: var(--color-text-white);
      border-color: var(--color-nav-active);
   }
`;

// ── Reusable VariantsGrid (exported for ComponentCategoryPage) ─

export const VariantsGrid = ({ category }) => {
   const navigate = useNavigate();

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
               >
                  <CardPreview>
                     <PreviewScaler>
                        <LiveComponent config={variant.defaultConfig} />
                     </PreviewScaler>
                  </CardPreview>
                  <CardFooter>
                     <CardName>{variant.name}</CardName>
                     <CustomizeBtn
                        onClick={(e) => {
                           e.stopPropagation();
                           navigate(
                              `/components/${category.slug}/${variant.id}`,
                           );
                        }}
                     >
                        Customize
                     </CustomizeBtn>
                  </CardFooter>
               </Card>
            );
         })}
      </CardsGrid>
   );
};

// ── Page Component ─────────────────────────────────────────────

const ComponentsPage = () => {
   const categories = getAllCategories();

   return (
      <>
         <PageHeader>
            <LibraryName>Shopify Bazzar</LibraryName>
            <LibraryDescription>
               A clean, modern, and fully responsive component library for
               Shopify storefronts. Browse all available component variants and
               click Customize to start building.
            </LibraryDescription>
         </PageHeader>

         {categories.map((category) => (
            <CategorySection key={category.id}>
               <SectionHeading>
                  {category.title}
                  <span>{category.variants.length} variants</span>
               </SectionHeading>
               <SectionDivider />
               <VariantsGrid category={category} />
            </CategorySection>
         ))}
      </>
   );
};

export default ComponentsPage;
