import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { allSectionsData, VariantsGrid } from "./ComponentsPage";

// ── Styled Components ──────────────────────────────────────────

const PageHeader = styled.header`
   margin-bottom: 48px;
`;

const PageTitle = styled.h1`
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

const PageDescription = styled.p`
   font-size: 1.125rem;
   color: var(--color-nav-text-secondary);
   line-height: 1.6;
   max-width: 700px;
   font-family: var(--inter-font);
`;

const VariantCount = styled.span`
   display: inline-block;
   font-size: 0.8rem;
   font-weight: 600;
   background-color: var(--color-badge-gray-bg);
   color: var(--color-nav-text-secondary);
   padding: 2px 12px;
   border-radius: var(--radius-full);
   margin-left: 12px;
   font-family: var(--inter-font);
   vertical-align: middle;
`;

const NotFound = styled.div`
   text-align: center;
   padding: 80px 24px;
   color: var(--color-nav-text-secondary);
   font-family: var(--inter-font);

   h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-nav-text);
      margin-bottom: 12px;
   }

   p {
      font-size: 1rem;
      margin-bottom: 24px;
   }
`;

const BackBtn = styled.button`
   display: inline-flex;
   align-items: center;
   gap: 8px;
   font-size: 0.9rem;
   font-weight: 600;
   padding: 10px 20px;
   border-radius: var(--radius-md);
   background-color: var(--color-nav-active);
   color: white;
   border: none;
   cursor: pointer;
   font-family: var(--inter-font);
   transition: var(--transition-fast);

   &:hover {
      background-color: #0066cc;
   }
`;

// ── Component ─────────────────────────────────────────────────

const ComponentCategoryPage = () => {
   const { section } = useParams();
   const navigate = useNavigate();

   // Find matching section from shared data
   const sectionData = allSectionsData.find((s) => s.slug === section);

   // 404 state — section not found
   if (!sectionData) {
      return (
         <NotFound>
            <h2>Section not found</h2>
            <p>
               The component category <strong>"{section}"</strong> does not
               exist.
            </p>
            <BackBtn onClick={() => navigate("/components")}>
               <i className="fa-solid fa-arrow-left"></i>
               Back to All Components
            </BackBtn>
         </NotFound>
      );
   }

   return (
      <>
         {/* Page Header */}
         <PageHeader>
            <PageTitle>
               {sectionData.title}
               <VariantCount>
                  {sectionData.variants.length} variants
               </VariantCount>
            </PageTitle>
            <PageDescription>{sectionData.description}</PageDescription>
         </PageHeader>

         {/* Variants Grid */}
         <VariantsGrid section={sectionData} />
      </>
   );
};

export default ComponentCategoryPage;
