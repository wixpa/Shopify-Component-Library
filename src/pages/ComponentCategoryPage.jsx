import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCategoryBySlug } from "../registry/componentRegistry";
import { VariantsGrid } from "./ComponentsPage";

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
   display: flex;
   align-items: center;
   gap: 14px;

   @media (max-width: 768px) {
      font-size: 2rem;
   }
`;

const VariantBadge = styled.span`
   font-size: 0.8rem;
   font-weight: 600;
   background-color: var(--color-badge-gray-bg);
   color: var(--color-nav-text-secondary);
   padding: 3px 12px;
   border-radius: var(--radius-full);
   font-family: var(--inter-font);
   vertical-align: middle;
`;

const PageDescription = styled.p`
   font-size: 1.125rem;
   color: var(--color-nav-text-secondary);
   line-height: 1.6;
   max-width: 700px;
   font-family: var(--inter-font);
`;

const NotFound = styled.div`
   text-align: center;
   padding: 80px 24px;
   font-family: var(--inter-font);

   h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-nav-text);
      margin-bottom: 12px;
   }
   p {
      color: var(--color-nav-text-secondary);
      font-size: 1rem;
      margin-bottom: 24px;
   }
`;

const BackBtn = styled.button`
   padding: 10px 24px;
   background: var(--color-nav-active);
   color: white;
   border: none;
   border-radius: var(--radius-md);
   font-size: 0.9rem;
   font-weight: 600;
   font-family: var(--inter-font);
   cursor: pointer;
   transition: var(--transition-fast);

   &:hover {
      background: #0066cc;
   }
`;

// ── Component ─────────────────────────────────────────────────

const ComponentCategoryPage = () => {
   const { section } = useParams();
   const navigate = useNavigate();
   const category = getCategoryBySlug(section);

   if (!category) {
      return (
         <NotFound>
            <h2>Category not found</h2>
            <p>
               <strong>"{section}"</strong> does not exist in the component
               library.
            </p>
            <BackBtn onClick={() => navigate("/components")}>
               ← Back to All Components
            </BackBtn>
         </NotFound>
      );
   }

   return (
      <>
         <PageHeader>
            <PageTitle>
               {category.title}
               <VariantBadge>{category.variants.length} variants</VariantBadge>
            </PageTitle>
            <PageDescription>{category.description}</PageDescription>
         </PageHeader>
         <VariantsGrid category={category} />
      </>
   );
};

export default ComponentCategoryPage;
