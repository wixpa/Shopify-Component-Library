import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
   LayoutGrid,
   Layers,
   Box,
   Star,
   Folder,
   ArrowRight,
   Wand2,
   PackageOpen,
} from "lucide-react";
import { getAllCategories } from "../registry/componentRegistry";

// ── Tailwind Classes ───────────────────────────────────────────

const pageHeader = "mb-12 animate-[fadeUp_0.5s_ease_both]";
const headerTop = "flex items-start justify-between gap-6 flex-wrap mb-4";
const titleGroup = "flex flex-col gap-[0.35rem]";
const pageEyebrow =
   "inline-flex items-center gap-[0.4rem] text-[0.7rem] font-bold text-[#2563eb] uppercase tracking-[0.09em] font-[var(--inter-font)]";
const pageTitle =
   "text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold text-[var(--color-nav-text)] tracking-[-0.03em] font-[var(--inter-font)] leading-[1.1]";
const pageDesc =
   "text-[0.92rem] text-[var(--color-nav-text-secondary)] leading-[1.7] max-w-[580px] font-[var(--inter-font)] mt-1";

const statsRow = "flex items-center gap-[0.6rem] flex-wrap sm:w-auto w-full";
const statChip =
   "inline-flex items-center gap-[0.4rem] bg-[var(--color-bg-light,#f9fafb)] border border-[var(--color-sidebar-border)] rounded-full px-[0.85rem] py-[0.3rem] text-[0.72rem] font-semibold text-[var(--color-nav-text-secondary)] font-[var(--inter-font)] whitespace-nowrap";

const categorySection = "mb-14";
const sectionHeading =
   "flex items-center justify-between gap-4 flex-wrap mb-[0.65rem]";
const sectionTitle =
   "text-[1.05rem] font-bold text-[var(--color-nav-text)] font-[var(--inter-font)] flex items-center gap-[0.55rem]";
const sectionBadge =
   "text-[0.66rem] font-bold bg-[var(--color-nav-active-bg)] text-[var(--color-nav-active)] px-2 py-[2px] rounded-full font-[var(--inter-font)] border border-[rgba(37,99,235,0.15)]";
const viewAllBtn =
   "group inline-flex items-center gap-[0.35rem] text-[0.75rem] font-semibold text-[#2563eb] bg-transparent border-none cursor-pointer font-[var(--inter-font)] p-0 whitespace-nowrap transition-opacity duration-150 hover:opacity-70";
const sectionDivider = "w-full h-px bg-[var(--color-sidebar-border)] mb-6";

const cardsGrid =
   "grid grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]";

const cardBase =
   "border border-[var(--color-sidebar-border)] [border-left-width:3px] [border-left-color:transparent] rounded-xl overflow-hidden bg-[var(--color-bg-white)] flex flex-col cursor-pointer transition-[border-color,background-color] duration-200 ease-out hover:[border-left-color:#2563eb] hover:bg-[#fafbff]";

const cardPreview =
   "h-[220px] bg-[var(--color-bg-light,#f9fafb)] flex items-start justify-center border-b border-[var(--color-sidebar-border)] overflow-hidden pointer-events-none relative";
const previewOverlay =
   "absolute inset-0 bg-[rgba(37,99,235,0.04)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-[1] pointer-events-none";

const cardFooter =
   "px-[14px] py-3 flex items-center justify-between gap-[10px] bg-white flex-shrink-0";
const cardNameWrap = "flex flex-col gap-[2px] min-w-0 flex-1";
const cardName =
   "text-[0.86rem] font-bold text-[var(--color-nav-text)] font-[var(--inter-font)] whitespace-nowrap overflow-hidden text-ellipsis leading-[1.2]";
const cardSlug =
   "text-[0.68rem] text-[var(--color-nav-text-secondary)] font-[var(--inter-font)] whitespace-nowrap overflow-hidden text-ellipsis opacity-70";
const customizeBtn =
   "inline-flex items-center gap-[0.35rem] text-[0.72rem] font-semibold px-[13px] py-[6px] rounded-full bg-[var(--color-nav-active-bg)] text-[var(--color-nav-active)] border border-[rgba(37,99,235,0.18)] font-[var(--inter-font)] cursor-pointer whitespace-nowrap flex-shrink-0 transition-[background,color,border-color] duration-150 hover:bg-[var(--color-nav-active)] hover:text-white hover:border-[var(--color-nav-active)]";

const emptyState =
   "text-center py-16 px-8 text-[var(--color-nav-text-secondary)] font-[var(--inter-font)]";
const emptyText = "text-[0.88rem] leading-[1.7] mt-4";

// ── Preview iframe srcdoc builder ─────────────────────────────

const buildPreviewSrcdoc = (htmlString) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet"/>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { overflow: hidden; }
  </style>
</head>
<body>${htmlString}</body>
</html>`;

// ── Card Preview with iframe ──────────────────────────────────
// Renders getCode() output inside a scaled-down iframe.
// The iframe is 238% wide then scaled to 42% → gives a desktop-width preview
// compressed into the 220px tall card preview area.

const CardPreviewIframe = ({ variant }) => {
   const iframeRef = useRef(null);

   // Only build srcdoc if getCode exists — graceful fallback otherwise
   if (typeof variant.getCode !== "function") {
      return (
         <div className={cardPreview}>
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-[0.72rem] text-[#94a3b8] font-[var(--inter-font)]">
                  No preview available
               </span>
            </div>
         </div>
      );
   }

   const srcdoc = buildPreviewSrcdoc(variant.getCode(variant.defaultConfig));

   return (
      <div className={cardPreview}>
         <iframe
            ref={iframeRef}
            srcDoc={srcdoc}
            title={variant.name}
            style={{
               position: "absolute",
               top: 0,
               left: "50%",
               width: "238%",
               height: "520px", // tall enough to show full component
               border: "none",
               transform: "translateX(-50%) scale(0.42)",
               transformOrigin: "top center",
               pointerEvents: "none",
            }}
            sandbox="allow-scripts"
            loading="lazy"
         />
         <div className={previewOverlay} />
      </div>
   );
};

// ══════════════════════════════════════════════════════════════
// ── Exported VariantsGrid ─────────────────────────────────────
// ══════════════════════════════════════════════════════════════

export const VariantsGrid = ({ category }) => {
   const navigate = useNavigate();

   if (!category?.variants?.length) {
      return (
         <div className={emptyState}>
            <Box size={32} className="opacity-25 mx-auto" />
            <p className={emptyText}>
               No variants yet for this category.
               <br />
               Check back soon!
            </p>
         </div>
      );
   }

   return (
      <div className={cardsGrid}>
         {category.variants.map((variant) => (
            <div
               key={variant.id}
               className={`${cardBase} group`}
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
               {/* ── Preview — iframe renders getCode() output ── */}
               <CardPreviewIframe variant={variant} />

               {/* ── Footer ── */}
               <div className={cardFooter}>
                  <div className={cardNameWrap}>
                     <span className={cardName} title={variant.name}>
                        {variant.name}
                     </span>
                     <span className={cardSlug}>
                        {category.slug}/{variant.id}
                     </span>
                  </div>

                  <button
                     className={customizeBtn}
                     onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/components/${category.slug}/${variant.id}`);
                     }}
                     aria-label={`Open ${variant.name} editor`}
                  >
                     <Wand2 size={10} />
                     Open Editor
                  </button>
               </div>
            </div>
         ))}
      </div>
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
         {/* ── Page Header ── */}
         <header className={pageHeader}>
            <div className={headerTop}>
               <div className={titleGroup}>
                  <div className={pageEyebrow}>
                     <LayoutGrid size={11} />
                     Component Library
                  </div>
                  <h1 className={pageTitle}>All Components</h1>
               </div>

               <div className={statsRow}>
                  <div className={statChip}>
                     <Layers size={11} className="text-[#2563eb]" />
                     {categories.length} categories
                  </div>
                  <div className={statChip}>
                     <Box size={11} className="text-[#2563eb]" />
                     {totalVariants} variants
                  </div>
                  <div className={statChip}>
                     <Star size={11} className="text-[#2563eb]" />
                     100% free
                  </div>
               </div>
            </div>

            <p className={pageDesc}>
               Browse every production-ready section variant. Click any card to
               open the live editor — customize colors, text, and layout, then
               copy the generated code directly into your Shopify store.
            </p>
         </header>

         {/* ── Empty state ── */}
         {categories.length === 0 && (
            <div className={emptyState}>
               <PackageOpen size={36} className="opacity-25 mx-auto" />
               <p className={emptyText}>
                  No components found in the registry.
                  <br />
                  Add a category to get started.
               </p>
            </div>
         )}

         {/* ── Category sections ── */}
         {categories.map((category, index) => (
            <section
               key={category.slug}
               className={categorySection}
               style={{ animationDelay: `${index * 0.07}s` }}
            >
               <div className={sectionHeading}>
                  <h2 className={sectionTitle}>
                     <Folder size={15} className="text-[#2563eb] opacity-75" />
                     {category.title}
                     <span className={sectionBadge}>
                        {category.variants.length}{" "}
                        {category.variants.length === 1
                           ? "variant"
                           : "variants"}
                     </span>
                  </h2>

                  <button
                     className={viewAllBtn}
                     onClick={() => navigate(`/components/${category.slug}`)}
                  >
                     View all
                     <ArrowRight
                        size={11}
                        className="transition-transform duration-150 group-hover:translate-x-[2px]"
                     />
                  </button>
               </div>

               <div className={sectionDivider} />

               <VariantsGrid category={category} />
            </section>
         ))}
      </>
   );
};

export default ComponentsPage;
