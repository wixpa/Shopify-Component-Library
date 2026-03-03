import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCategoryBySlug } from "../registry/componentRegistry";
import { VariantsGrid } from "./ComponentsPage";

// ── Page header ────────────────────────────────────────────────

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
   flex-wrap: wrap;
   gap: 14px;

   @media (max-width: 768px) {
      font-size: 2rem;
   }

   @media (max-width: 480px) {
      font-size: 1.6rem;
      gap: 10px;
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
   flex-shrink: 0;
`;

const PageDescription = styled.p`
   font-size: 1.125rem;
   color: var(--color-nav-text-secondary);
   line-height: 1.6;
   max-width: 700px;
   font-family: var(--inter-font);
   margin: 0;

   @media (max-width: 640px) {
      font-size: 1rem;
   }
`;

// ── Not found state ────────────────────────────────────────────

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
      line-height: 1.6;
   }

   strong {
      color: var(--color-nav-text);
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

   &:focus-visible {
      outline: 2px solid var(--color-nav-active);
      outline-offset: 3px;
   }
`;

// ── Divider ────────────────────────────────────────────────────

const Divider = styled.hr`
   border: none;
   border-top: 1px solid var(--color-sidebar-border);
   margin-bottom: 40px;
`;

// ── Component ─────────────────────────────────────────────────

const ComponentCategoryPage = () => {
   const { section } = useParams();
   const navigate = useNavigate();
   const category = getCategoryBySlug(section);

   // ── Not found ──────────────────────────────────────────────

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

   // ── Found ──────────────────────────────────────────────────

   return (
      <>
         <PageHeader>
            <PageTitle>
               {category.title}
               <VariantBadge>
                  {category.variants.length}{" "}
                  {category.variants.length === 1 ? "variant" : "variants"}
               </VariantBadge>
            </PageTitle>
            <PageDescription>{category.description}</PageDescription>
         </PageHeader>

         <Divider />

         <VariantsGrid category={category} />
      </>
   );
};

export default ComponentCategoryPage;
