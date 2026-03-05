import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getCategoryBySlug } from "../registry/componentRegistry";
import { VariantsGrid } from "./ComponentsPage";

// ── Tailwind Classes ───────────────────────────────────────────

const pageHeader = "mb-12";
const pageTitle =
   "text-[clamp(1.6rem,3vw,2.5rem)] font-extrabold text-[var(--color-nav-text)] tracking-[-0.025em] font-[var(--inter-font)] leading-[1.1] flex items-center flex-wrap gap-[14px] mb-3";
const variantBadge =
   "text-[0.8rem] font-semibold bg-[var(--color-badge-gray-bg)] text-[var(--color-nav-text-secondary)] px-3 py-[3px] rounded-full font-[var(--inter-font)] flex-shrink-0 align-middle";
const pageDesc =
   "text-[1.05rem] text-[var(--color-nav-text-secondary)] leading-[1.6] max-w-[700px] font-[var(--inter-font)] m-0 sm:text-[1rem]";

const divider =
   "border-none border-t border-[var(--color-sidebar-border)] mb-10 h-px bg-[var(--color-sidebar-border)]";

// Not found
const notFound = "text-center py-20 px-6 font-[var(--inter-font)]";
const notFoundTitle =
   "text-[1.5rem] font-bold text-[var(--color-nav-text)] mb-3";
const notFoundDesc =
   "text-[var(--color-nav-text-secondary)] text-[1rem] mb-6 leading-[1.6]";
const backBtn =
   "inline-flex items-center gap-2 px-6 py-[0.62rem] bg-[var(--color-nav-active)] text-white border-none rounded-lg text-[0.9rem] font-semibold font-[var(--inter-font)] cursor-pointer transition-colors duration-150 hover:bg-[#1d4ed8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-nav-active)]";

// ── Component ──────────────────────────────────────────────────

const ComponentCategoryPage = () => {
   const { section } = useParams();
   const navigate = useNavigate();
   const category = getCategoryBySlug(section);

   // ── Not found ──────────────────────────────────────────────

   if (!category) {
      return (
         <div className={notFound}>
            <h2 className={notFoundTitle}>Category not found</h2>
            <p className={notFoundDesc}>
               <strong className="text-[var(--color-nav-text)]">
                  "{section}"
               </strong>{" "}
               does not exist in the component library.
            </p>
            <button className={backBtn} onClick={() => navigate("/components")}>
               <ArrowLeft size={15} />
               Back to All Components
            </button>
         </div>
      );
   }

   // ── Found ──────────────────────────────────────────────────

   return (
      <>
         <header className={pageHeader}>
            <h1 className={pageTitle}>
               {category.title}
               <span className={variantBadge}>
                  {category.variants.length}{" "}
                  {category.variants.length === 1 ? "variant" : "variants"}
               </span>
            </h1>
            <p className={pageDesc}>{category.description}</p>
         </header>

         <hr className={divider} />

         <VariantsGrid category={category} />
      </>
   );
};

export default ComponentCategoryPage;
