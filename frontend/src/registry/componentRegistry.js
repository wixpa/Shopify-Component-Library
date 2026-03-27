// ─────────────────────────────────────────────────────────────────────────────
// Component Registry — Main Assembler
//
// HOW TO ADD A NEW COMPONENT CATEGORY:
//   1. Create src/components/ui/your-category/YourV1.jsx
//   2. Export getYourV1Code(config) at the bottom of that JSX file
//   3. Create src/components/ui/your-category/index.js
//   4. Create src/registry/yourCategory.registry.js  ← all variant data goes here
//   5. Import it below and add to the registry array
//   6. Add one case to src/components/editor/generateComponentCode.js
//
// That's the only change needed — nothing else in this file changes.
// ─────────────────────────────────────────────────────────────────────────────

import headersRegistry from "./headers.registry";
import heroRegistry from "./hero.registry";
import footerRegistry from "./footer.registry";
import productMainSecRegistry from "./productMainSec.registry";
import faqsRegistry from "./faqs.registry";
import testimonialsRegistry from "./testimonials.registry";

// ── Assemble registry array ───────────────────────────────────────────────────
const registry = [
   headersRegistry,
   heroRegistry,
   footerRegistry,
   productMainSecRegistry,
   faqsRegistry,
   testimonialsRegistry,
];

// ── Helper functions ──────────────────────────────────────────────────────────

/**
 * Get all categories (used by Sidebar nav and ComponentsPage)
 */
export const getAllCategories = () => registry;

/**
 * Get one category object by its slug
 */
export const getCategoryBySlug = (slug) =>
   registry.find((cat) => cat.slug === slug) || null;

/**
 * Get one specific variant by category slug + variant id
 */
export const getVariant = (slug, variantId) => {
   const category = getCategoryBySlug(slug);
   if (!category) return null;
   return category.variants.find((v) => v.id === variantId) || null;
};

/**
 * Returns a flat array of ALL variants across every category.
 * Used by the Header search feature.
 *
 * Each item shape:
 * {
 *   id:           "hero-v1",
 *   section:      "hero",
 *   sectionTitle: "Hero",
 *   name:         "Hero — Centered",
 *   description:  "...",
 *   tags:         ["centered", "badge", ...],
 *   component:    HeroV1,
 *   ...rest
 * }
 */
export const getAllComponents = () =>
   registry.flatMap((category) =>
      category.variants.map((variant) => ({
         ...variant,
         section: category.slug,
         sectionTitle: category.title,
      })),
   );

export default registry;
