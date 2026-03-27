# Shopify Bazzar — Component Conversion Prompt

Use this prompt every time you want to convert a vanilla HTML/CSS/JS component
into a fully working Shopify Bazzar library variant.

---

## How This Library Works (Read First)

The library has ONE rendering pipeline for everything — card previews,
editor canvas, and Copy Code output:

```
config (from controls)
     ↓
getCode(config)           ← returns a pure HTML/CSS/JS string
     ↓
injected into <iframe srcdoc="...">   ← live preview (card + editor)
     ↓
same string copied on "Copy Code" button
```

**This means:**
- `getCode(config)` is the ONLY source of truth
- The React default export component ALWAYS returns `null` — it is never rendered visually
- Card previews on the Components page use `variant.getCode(variant.defaultConfig)` → iframe
- The editor canvas uses `variant.getCode(config)` → iframe
- The Copy Code button outputs the same string

---

## Prompt 1 - for adding components and its variants

```
I am building a React component library called Shopify Bazzar.
The editor renders component variants inside an <iframe> using a
getCode(config) function — NOT as live React. This means:

- The LIVE PREVIEW in the editor uses: getCode(config) → injected into iframe srcdoc
- The COPY CODE button uses: getCode(config) → pure HTML/CSS/JS string
- The React JSX component file is ONLY used as a wrapper to call getCode()
  and render the iframe-ready output. It is NOT rendered directly anymore.
- The CARD PREVIEW on the components page ALSO uses:
  variant.getCode(variant.defaultConfig) → injected into iframe srcdoc
  This means if getCode() is missing or broken, the card preview is blank.

════════════════════════════════════════════════════════════
ABSOLUTE HARD REQUIREMENTS — NEVER VIOLATE THESE
════════════════════════════════════════════════════════════

1) DO NOT redesign or refactor the component.
2) DO NOT convert CSS to Tailwind classes.
3) DO NOT move CSS out of the <style> block.
4) DO NOT move JS out of the <script> block.
5) DO NOT inline styles or change layout/responsiveness.
6) Keep ALL CSS, HTML, and JS EXACTLY as written — including
   media queries, transitions, animations, keyframes,
   responsive behavior, and DOM structure.
7) Only insert dynamic config variables where customization
   is needed (text, colors, URLs, numbers).
8) The getCode(config) output must be 100% pure HTML/CSS/JS —
   zero React, zero JSX, zero Tailwind — so it can be pasted
   directly into a Shopify Custom Liquid section or .liquid file.

════════════════════════════════════════════════════════════
FILE A — React Component JSX
════════════════════════════════════════════════════════════

Path: src/components/ui/[category]/[Name]V[N].jsx

EXACT PATTERN TO FOLLOW — copy this structure precisely:

─────────────────────────────────────────────────────────────
// Named export — used by registry and generateComponentCode.js
export function get[Name]V[N]Code(config = {}) {
  // Destructure every config key with a fallback default.
  // Use the exact literal values from the original component.
  const bgColor       = config.bgColor       || "#ffffff";
  const headingText   = config.headingText   || "Default Heading";
  const accentColor   = config.accentColor   || "#2563eb";
  // ... add all your config keys here

  return `
<style>
  /*
   * PASTE YOUR EXACT CSS HERE.
   * Replace only literal values that need to be dynamic
   * with \${varName} template variables.
   *
   * Example:
   *   background-color: #111;   →   background-color: \${bgColor};
   *   color: #2563eb;           →   color: \${accentColor};
   *
   * Keep ALL of these UNCHANGED:
   *   - CSS selectors and class names
   *   - Media query breakpoints
   *   - Keyframe names and animation timings
   *   - Layout properties (display, grid, flex, position)
   *   - calc() expressions (they are safe, no escaping needed)
   */
</style>

<!-- PASTE YOUR EXACT HTML HERE.
     Replace only visible text, URLs, and values with \${varName}.
     Keep ALL class names, IDs, aria-* and data-* UNCHANGED. -->

<script>
  /*
   * PASTE YOUR EXACT JS HERE.
   * Replace only literal config-driven values with \${varName}.
   * Keep ALL event listeners, DOM queries, and logic UNCHANGED.
   *
   * ESCAPING RULES inside this template literal:
   *   Original JS has:          Write it as:
   *   \`backtick string\`         \\\`backtick string\\\`
   *   \${someJsVar}               \\\${someJsVar}
   *   "regular string"           "regular string"   ← safe, no change
   *   calc(100% - 20px)          calc(100% - 20px)  ← safe, no change
   *   config-driven value        \${varName}         ← interpolated normally
   */
</script>
  `;
}

// Default export — React wrapper used by the registry.
// ALWAYS returns null — the editor and card preview render
// via getCode() → iframe, NOT via this JSX component directly.
export default function [Name]V[N]({ config }) {
  return null;
}
─────────────────────────────────────────────────────────────

CRITICAL RULES FOR FILE A:
- getCode() MUST be a NAMED export (export function get...)
- The default export MUST always return null — no JSX, no styles
- getCode() must return ONE complete string containing:
    <style>...</style>
    HTML markup
    <script>...</script>
- Destructure ALL config keys at the top of getCode() with fallbacks
- All config values are injected using template literals: ${varName}
- Every key destructured inside getCode() MUST also exist in defaultConfig
- If the original component has NO JavaScript, omit the <script> block entirely

════════════════════════════════════════════════════════════
FILE B — Registry Entry
════════════════════════════════════════════════════════════

Path: src/registry/[category].registry.js

EXACT PATTERN TO FOLLOW:

─────────────────────────────────────────────────────────────
// Import: default export (component) + named export (getCode)
// Both come from the SAME file.
import [Name]V[N], { get[Name]V[N]Code } from "../components/ui/[category]/[Name]V[N]";

const [category]Registry = {
  slug: "[category-slug]",        // e.g. "hero", "footer", "pricing"
  title: "[Category Title]",      // e.g. "Hero", "Footer", "Pricing"
  variants: [
    {
      id: "[category-slug]-v[N]", // e.g. "hero-v1", "footer-v3"
      name: "[Category] — [Variant Label]",  // e.g. "Hero — Centered"
      description: "One sentence describing what this variant looks like.",
      tags: ["tag1", "tag2"],
      component: [Name]V[N],         // ← the default export (returns null)
      getCode: get[Name]V[N]Code,    // ← REQUIRED — used for card preview + editor + copy
      defaultConfig: {
        // Every key here MUST be used inside getCode().
        // Every key used in getCode() MUST be listed here.
        // Use the exact literal values from the original component.
        bgColor:      "#ffffff",
        headingText:  "Default Heading",
        accentColor:  "#2563eb",
        // ... all your config keys
      },
      accordions: [
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Colors",
          subtitle: "Background, text, and accent colors",
          controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Accent",     key: "accentColor" },
          ],
        },
        {
          id: "content",
          icon: "fa-font",
          iconBg: "#dbeafe",
          iconColor: "#1d4ed8",
          title: "Content",
          subtitle: "Headings and body text",
          controls: [
            { type: "text", label: "Heading", key: "headingText" },
          ],
        },
        // Add more accordion sections as needed
      ],
    },
  ],
};

export default [category]Registry;
─────────────────────────────────────────────────────────────

REGISTRY RULES:
- Export as DEFAULT (not named) — componentRegistry.js imports it as default
- getCode property is REQUIRED on every variant — without it the card
  preview will be blank and the editor will crash with "getCode is not a function"
- Every config key in defaultConfig MUST appear in getCode()
- Every ${config.key} used in getCode() MUST exist in defaultConfig
- No orphan keys in either direction
- accordion controls must cover every config key exactly once
- Use ONLY these icon strings (already registered in icons.js):
    "fa-font"             → text / labels
    "fa-palette"          → colors
    "fa-square"           → backgrounds / blocks
    "fa-tag"              → brand / logo
    "fa-heading"          → headings
    "fa-fill-drip"        → fill colors
    "fa-magnifying-glass" → search
    "fa-layer-group"      → layout / sections
    "fa-image"            → images / media
    "fa-bars-staggered"   → navigation / links
  If you need an icon NOT in this list, write:
    ⚠️ NEW ICON NEEDED: "fa-quote-left" — add to icons.js manually

════════════════════════════════════════════════════════════
FILE C — generateComponentCode.js
════════════════════════════════════════════════════════════

Path: src/components/editor/generateComponentCode.js

Add ONE import at the top and ONE case in the switch.
Do NOT show the entire file — show only the lines to add.

─────────────────────────────────────────────────────────────
// ADD this import at the top with the other imports:
import { get[Name]V[N]Code } from "../ui/[category]/[Name]V[N]";

// ADD this case inside the switch(variantId) statement:
case "[category-slug]-v[N]":
  return get[Name]V[N]Code(config);
─────────────────────────────────────────────────────────────

RULE: The case string MUST exactly match the variant id in the registry.
Example: if registry has id: "hero-v2" then case must be "hero-v2".

════════════════════════════════════════════════════════════
FILE D — componentRegistry.js (NEW CATEGORY ONLY)
════════════════════════════════════════════════════════════

Path: src/registry/componentRegistry.js

Only generate this file's changes if the category is BRAND NEW.
If adding a variant to an existing category, skip this file entirely.

─────────────────────────────────────────────────────────────
// ADD this import at the top:
import [category]Registry from "./[category].registry";

// ADD to the registry array (keep all existing entries):
const registry = [
  ...existingRegistries,
  [category]Registry,     // ← add here
];
─────────────────────────────────────────────────────────────

════════════════════════════════════════════════════════════
FILE E — category index.js barrel file
════════════════════════════════════════════════════════════

Path: src/components/ui/[category]/index.js

Every variant's component AND getCode function must be
re-exported from the barrel file so the registry can import
them cleanly from one path.

─────────────────────────────────────────────────────────────
// If adding to an EXISTING category, add these two lines:
export { default as [Name]V[N] } from "./[Name]V[N]";
export { get[Name]V[N]Code }    from "./[Name]V[N]";

// Full example of what a complete barrel file looks like:
export { default as HeroV1 }  from "./HeroV1";
export { default as HeroV2 }  from "./HeroV2";
export { getHeroV1Code }      from "./HeroV1";
export { getHeroV2Code }      from "./HeroV2";
─────────────────────────────────────────────────────────────

════════════════════════════════════════════════════════════
CONFIG KEY NAMING CONVENTION
════════════════════════════════════════════════════════════

Use clear camelCase keys. Follow this convention:

  Colors:      bgColor, textColor, textMuted, borderColor,
               accentColor, btnColor, inputBg, inputText
  Text:        headingText, subheadingText, bodyText,
               btnLabel, placeholderText, copyrightText
  URLs:        facebookUrl, instagramUrl, logoUrl, heroImageUrl
  Columns:     col2Heading, col2Link1Label, col2Link1Url ...
  Booleans:    showBadge, showNewsletter (use "toggle" control type)
  Numbers:     paddingTop, fontSize (use "range" control type)

════════════════════════════════════════════════════════════
WHAT TO MAKE DYNAMIC vs KEEP HARDCODED
════════════════════════════════════════════════════════════

Make DYNAMIC — replace with ${config.key}:
  ✅ Brand name / logo text
  ✅ All visible text (headings, body copy, button labels, placeholders)
  ✅ All colors (backgrounds, text, borders, accents)
  ✅ All URLs (social links, image sources, hrefs)
  ✅ Navigation link labels and URLs
  ✅ Copyright text
  ✅ CSS custom property values inside :root { }

Keep HARDCODED — do NOT make config-driven:
  ❌ CSS class names and selectors
  ❌ HTML structural attributes (role, aria-controls, id, type)
  ❌ JS logic, DOM queries, event listener callbacks
  ❌ Keyframe names and animation timings
  ❌ Media query breakpoints
  ❌ CSS layout properties (display, grid, flex, position)

════════════════════════════════════════════════════════════
ESCAPING REFERENCE — inside getCode() template literal
════════════════════════════════════════════════════════════

  What your original code has:    How to write it inside getCode():
  ──────────────────────────────  ──────────────────────────────────
  `backtick string`               \`backtick string\`
  ${anyJsVariable}                \${anyJsVariable}
  calc(100% - 20px)               calc(100% - 20px)     ← safe, no change
  "regular JS string"             "regular JS string"   ← safe, no change
  a config-driven value           ${varName}            ← interpolated normally

════════════════════════════════════════════════════════════
OUTPUT ORDER — generate files in this exact sequence
════════════════════════════════════════════════════════════

Generate all 4 files in this order every time:

1. src/components/ui/[category]/[Name]V[N].jsx
   — getCode(config) named export first
   — default export (return null) second

2. src/registry/[category].registry.js
   — full registry with ALL variants (existing + new)
   — every variant must have: id, name, description, tags,
     component, getCode, defaultConfig, accordions

3. src/components/editor/generateComponentCode.js
   — show ONLY the new import line + new switch case to add

4. src/components/ui/[category]/index.js
   — show the full updated barrel file with all exports

5. src/registry/componentRegistry.js
   — show ONLY if this is a NEW category (import + array entry)

════════════════════════════════════════════════════════════
VERIFICATION CHECKLIST — verify before outputting code
════════════════════════════════════════════════════════════

  [ ] getCode() is a NAMED export (export function get...)
  [ ] Default export always returns null — no JSX markup
  [ ] Every config key destructured in getCode() exists in defaultConfig
  [ ] Every key in defaultConfig is used inside getCode()
  [ ] No backticks or ${} inside getCode() template are unescaped
  [ ] getCode() output has zero React, zero JSX, zero Tailwind
  [ ] Registry variant has getCode: get[Name]V[N]Code — NOT missing
  [ ] Registry uses export default — not named export
  [ ] generateComponentCode.js case ID exactly matches registry variant id
  [ ] All accordion controls map to a real config key
  [ ] index.js barrel exports both the component AND its getCode function

════════════════════════════════════════════════════════════
MY COMPONENT — fill in below
════════════════════════════════════════════════════════════

Category name  : [e.g. Footer, Hero, Pricing]
Category slug  : [e.g. footer, hero, pricing]
Variant number : [e.g. V2 — check existing registry file first]
Variant label  : [e.g. "Dark Enterprise", "Gradient CTA"]
Variant tags   : [e.g. dark, newsletter, accordion, mobile]
Is new category: [Yes / No]

Paste your EXACT component code below.
DO NOT refactor. DO NOT convert to Tailwind.
ONLY insert config variables where needed.
```

## Prompt 2 - for adding components and its variants

```
src/registry/hero.registry.js
import { HeroV1, HeroV2, HeroV3 } from "../components/ui/hero";
import {
   getHeroV1Code,
   getHeroV2Code,
   getHeroV3Code,
} from "../components/ui/hero"; // ← ADD THIS


const heroRegistry = {
   id: "hero",
   slug: "hero",
   title: "Hero",
   icon: "fa-image",
   iconBg: "rgba(124,58,237,0.1)",
   iconColor: "#7c3aed",
   tags: ["hero", "banner", "landing", "headline", "above the fold"],
   description:
      "Full-width hero sections designed to grab attention and drive conversions from the first impression.",
   variants: [
      {
         id: "hero-v1",
         name: "Hero — Centered",
         description:
            "Bold centered hero with badge, headline, subtitle, and dual CTA buttons.",
         tags: ["centered", "badge", "dual cta", "white", "light"],
         component: HeroV1,
         getCode: getHeroV1Code, // ← ADD THIS
         defaultConfig: {
            bgColor: "#ffffff",
            badge: "✨ New Collection",
            badgeBg: "#dbeafe",
            badgeColor: "#1d4ed8",
            title: "Build Your Shopify Store Faster",
            titleColor: "#0f172a",
            titleSize: "3rem",
            subtitle: "Beautiful, ready-to-use components for your storefront.",
            subtitleColor: "#4b5563",
            btnText: "Browse Components",
            btn2Text: "View Templates",
            btnBg: "#2563eb",
         },
         accordions: [
            {
               id: "badge",
               icon: "fa-tag",
               iconBg: "#fef3c7",
               iconColor: "#d97706",
               title: "Badge",
               subtitle: "Top label above the headline",
               controls: [
                  { type: "text", label: "Badge Text", key: "badge" },
                  { type: "color", label: "Badge Background", key: "badgeBg" },
                  {
                     type: "color",
                     label: "Badge Text Color",
                     key: "badgeColor",
                  },
               ],
            },
            {
               id: "content",
               icon: "fa-font",
               iconBg: "#ede9fe",
               iconColor: "#7c3aed",
               title: "Content",
               subtitle: "Headline and subtitle text",
               controls: [
                  { type: "text", label: "Headline", key: "title" },
                  { type: "color", label: "Headline Color", key: "titleColor" },
                  {
                     type: "select",
                     label: "Headline Size",
                     key: "titleSize",
                     options: ["2rem", "2.5rem", "3rem", "3.5rem", "4rem"],
                  },
                  { type: "text", label: "Subtitle", key: "subtitle" },
                  {
                     type: "color",
                     label: "Subtitle Color",
                     key: "subtitleColor",
                  },
               ],
            },
            {
               id: "buttons",
               icon: "fa-square",
               iconBg: "#dcfce7",
               iconColor: "#16a34a",
               title: "Buttons",
               subtitle: "CTA button labels and colors",
               controls: [
                  {
                     type: "text",
                     label: "Primary Button Text",
                     key: "btnText",
                  },
                  {
                     type: "text",
                     label: "Secondary Button Text",
                     key: "btn2Text",
                  },
                  { type: "color", label: "Button Color", key: "btnBg" },
               ],
            },
            {
               id: "background",
               icon: "fa-fill-drip",
               iconBg: "#fce7f3",
               iconColor: "#db2777",
               title: "Background",
               subtitle: "Section background color",
               controls: [
                  { type: "color", label: "Background Color", key: "bgColor" },
               ],
            },
         ],
      },


      // ── Hero V2 — Dark
      {
         id: "hero-v2",
         name: "Hero — Dark",
         description:
            "Dark-themed hero with purple glow effect and single bold CTA.",
         tags: ["dark", "glow", "purple", "navy", "single cta"],
         component: HeroV2,
         getCode: getHeroV2Code, // ← ADD THIS
         defaultConfig: {
            bgColor: "#0f172a",
            badge: "🚀 Launch Ready",
            badgeBg: "rgba(79,70,229,0.2)",
            badgeColor: "#818cf8",
            title: "Your Store, Elevated",
            titleColor: "#ffffff",
            titleSize: "3rem",
            subtitle:
               "Premium Shopify components that convert visitors into customers.",
            subtitleColor: "#94a3b8",
            btnText: "Start Building",
            btnBg: "#4f46e5",
            btnColor: "#ffffff",
         },
         accordions: [
            {
               id: "badge",
               icon: "fa-tag",
               iconBg: "#fef3c7",
               iconColor: "#d97706",
               title: "Badge",
               subtitle: "Label above headline",
               controls: [
                  { type: "text", label: "Badge Text", key: "badge" },
                  { type: "color", label: "Badge Background", key: "badgeBg" },
                  { type: "color", label: "Badge Color", key: "badgeColor" },
               ],
            },
            {
               id: "content",
               icon: "fa-font",
               iconBg: "#ede9fe",
               iconColor: "#7c3aed",
               title: "Content",
               subtitle: "Headline and subtitle",
               controls: [
                  { type: "text", label: "Headline", key: "title" },
                  { type: "color", label: "Headline Color", key: "titleColor" },
                  {
                     type: "select",
                     label: "Headline Size",
                     key: "titleSize",
                     options: ["2rem", "2.5rem", "3rem", "3.5rem", "4rem"],
                  },
                  { type: "text", label: "Subtitle", key: "subtitle" },
                  {
                     type: "color",
                     label: "Subtitle Color",
                     key: "subtitleColor",
                  },
               ],
            },
            {
               id: "button",
               icon: "fa-square",
               iconBg: "#dcfce7",
               iconColor: "#16a34a",
               title: "Button",
               subtitle: "CTA button style",
               controls: [
                  { type: "text", label: "Button Text", key: "btnText" },
                  { type: "color", label: "Background", key: "btnBg" },
                  { type: "color", label: "Text Color", key: "btnColor" },
               ],
            },
            {
               id: "background",
               icon: "fa-fill-drip",
               iconBg: "#fce7f3",
               iconColor: "#db2777",
               title: "Background",
               subtitle: "Section background",
               controls: [
                  { type: "color", label: "Background Color", key: "bgColor" },
               ],
            },
         ],
      },


      // ── Hero V3 — With Stats
      {
         id: "hero-v3",
         name: "Hero — With Stats",
         description:
            "Green-toned hero with badge, headline, CTA, and animated stats row.",
         tags: ["stats", "green", "eco", "numbers", "metrics"],
         component: HeroV3,
         getCode: getHeroV3Code, // ← ADD THIS
         defaultConfig: {
            bgColor: "#f0fdf4",
            badge: "🌿 Eco-friendly designs",
            badgeBg: "#dcfce7",
            badgeColor: "#15803d",
            title: "Grow Your Shopify Revenue",
            titleColor: "#0f172a",
            titleSize: "2.75rem",
            subtitle:
               "High-converting sections built for modern Shopify stores.",
            subtitleColor: "#4b5563",
            btnText: "Get Free Components",
            btnBg: "#16a34a",
            btnColor: "#ffffff",
            statsData: [
               { value: "50+", label: "Components" },
               { value: "10K+", label: "Developers" },
               { value: "100%", label: "Free" },
            ],
         },
         accordions: [
            {
               id: "badge",
               icon: "fa-tag",
               iconBg: "#fef3c7",
               iconColor: "#d97706",
               title: "Badge",
               subtitle: "Label above headline",
               controls: [
                  { type: "text", label: "Badge Text", key: "badge" },
                  { type: "color", label: "Badge Background", key: "badgeBg" },
                  { type: "color", label: "Badge Color", key: "badgeColor" },
               ],
            },
            {
               id: "content",
               icon: "fa-font",
               iconBg: "#ede9fe",
               iconColor: "#7c3aed",
               title: "Content",
               subtitle: "Headline and subtitle",
               controls: [
                  { type: "text", label: "Headline", key: "title" },
                  { type: "color", label: "Headline Color", key: "titleColor" },
                  {
                     type: "select",
                     label: "Headline Size",
                     key: "titleSize",
                     options: ["2rem", "2.5rem", "2.75rem", "3rem", "3.5rem"],
                  },
                  { type: "text", label: "Subtitle", key: "subtitle" },
                  {
                     type: "color",
                     label: "Subtitle Color",
                     key: "subtitleColor",
                  },
               ],
            },
            {
               id: "button",
               icon: "fa-square",
               iconBg: "#dcfce7",
               iconColor: "#16a34a",
               title: "Button",
               subtitle: "CTA button style",
               controls: [
                  { type: "text", label: "Button Text", key: "btnText" },
                  { type: "color", label: "Background", key: "btnBg" },
                  { type: "color", label: "Text Color", key: "btnColor" },
               ],
            },
            {
               id: "background",
               icon: "fa-fill-drip",
               iconBg: "#fce7f3",
               iconColor: "#db2777",
               title: "Background",
               subtitle: "Section background",
               controls: [
                  { type: "color", label: "Background Color", key: "bgColor" },
               ],
            },
         ],
      },
   ],
};


export default heroRegistry;

src/registry/componentRegistry.js
// ─────────────────────────────────────────────────────────────────────────────
// Component Registry — Main Assembler
//
// HOW TO ADD A NEW COMPONENT CATEGORY:
//   1. Create src/components/ui/your-category/YourV1.jsx
//   2. Export getYourV1Code(config) at the bottom of that JSX file
//   3. Create src/components/ui/your-category/index.js
//   4. Create src/registry/yourCategory.registry.js  ← all variant data goes here
//   5. Import it below and add to the registry array
//   6. Add one case to src/components/editor/generateComponentCode.js
//
// That's the only change needed — nothing else in this file changes.
// ─────────────────────────────────────────────────────────────────────────────


import headersRegistry from "./headers.registry";
import heroRegistry from "./hero.registry";
import footerRegistry from "./footer.registry";
import productMainSecRegistry from "./productMainSec.registry";


// ── Assemble registry array ───────────────────────────────────────────────────
const registry = [
   headersRegistry,
   heroRegistry,
   footerRegistry,
   productMainSecRegistry,
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
 *   id:           "hero-v1",
 *   section:      "hero",
 *   sectionTitle: "Hero",
 *   name:         "Hero — Centered",
 *   description:  "...",
 *   tags:         ["centered", "badge", ...],
 *   component:    HeroV1,
 *   ...rest
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

src/components/ui/hero/HeroV1.jsx
// Named export — used by generateComponentCode.js and hero.registry.js
export function getHeroV1Code(config = {}) {
  const bgColor = config.bgColor || "#ffffff";
  const badge = config.badge || "✨ New Collection";
  const badgeBg = config.badgeBg || "#dbeafe";
  const badgeColor = config.badgeColor || "#1d4ed8";
  const title = config.title || "Build Your Shopify Store Faster";
  const titleColor = config.titleColor || "#0f172a";
  const titleSize = config.titleSize || "3rem";
  const subtitle = config.subtitle || "Beautiful, ready-to-use components for your storefront.";
  const subtitleColor = config.subtitleColor || "#4b5563";
  const btnText = config.btnText || "Browse Components";
  const btn2Text = config.btn2Text || "View Templates";
  const btnBg = config.btnBg || "#2563eb";


  return `<!-- Hero V1 — Centered | Shopify Bazzar -->
<style>
  .hero1 {
    background: ${bgColor};
    padding: 5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: sans-serif;
    box-sizing: border-box;
  }
  .hero1-badge {
    background: ${badgeBg};
    color: ${badgeColor};
    padding: 0.3rem 0.9rem;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 1.25rem;
    display: inline-block;
  }
  .hero1-title {
    font-size: ${titleSize};
    color: ${titleColor};
    font-weight: 800;
    margin: 0 0 1rem;
    line-height: 1.15;
    max-width: 700px;
  }
  .hero1-subtitle {
    font-size: 1.1rem;
    color: ${subtitleColor};
    max-width: 560px;
    margin: 0 0 2rem;
    line-height: 1.6;
  }
  .hero1-actions {
    display: flex;
    gap: 0.875rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  .hero1-btn-primary {
    background: ${btnBg};
    color: #fff;
    border: none;
    padding: 0.75rem 1.75rem;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .hero1-btn-primary:hover { opacity: 0.85; }
  .hero1-btn-secondary {
    background: transparent;
    color: ${titleColor};
    border: 1.5px solid ${titleColor}40;
    padding: 0.75rem 1.75rem;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .hero1-btn-secondary:hover { opacity: 0.7; }
  @media (max-width: 640px) {
    .hero1-title { font-size: calc(${titleSize} * 0.7); }
    .hero1 { padding: 3rem 1.25rem; }
  }
</style>


<section class="hero1">
  ${badge ? `<span class="hero1-badge">${badge}</span>` : ""}
  <h1 class="hero1-title">${title}</h1>
  <p class="hero1-subtitle">${subtitle}</p>
  <div class="hero1-actions">
    <button class="hero1-btn-primary">${btnText}</button>
    <button class="hero1-btn-secondary">${btn2Text}</button>
  </div>
</section>`;
}


// Default export — returns null because editor renders via getCode() → iframe
export default function HeroV1({ config }) {
  return null;
}

src/components/ui/hero/index.js
// Components
export { default as HeroV1 } from "./HeroV1";
export { default as HeroV2 } from "./HeroV2";
export { default as HeroV3 } from "./HeroV3";


// Code generators — must be exported so registry can import them
export { getHeroV1Code } from "./HeroV1";
export { getHeroV2Code } from "./HeroV2";
export { getHeroV3Code } from "./HeroV3";

src/components/editor/generateComponentCode.js
// ── Code Generator Router ─────────────────────────────────────────────────────
//
// Each variant owns its own getXxxCode(config) function, co-located at the
// bottom of its own JSX file. This file is a thin router only — it imports
// those functions and calls the right one by variantId.
//
// HOW TO ADD A NEW VARIANT:
//   1. Export getYourVariantCode(config) from your new VariantXX.jsx file
//   2. Import it here below
//   3. Add one case to the switch
//   That's it — no other files need to change.
// ─────────────────────────────────────────────────────────────────────────────


import { getHeroV1Code } from "../ui/hero/HeroV1";
import { getHeroV2Code } from "../ui/hero/HeroV2";
import { getHeroV3Code } from "../ui/hero/HeroV3";
import { getProductMainSecV1Code } from "../ui/product-main-sec/ProductMainSecV1";
import { getProductMainSecV2Code } from "../ui/product-main-sec/ProductMainSecV2";
import { getProductMainSecV3Code } from "../ui/product-main-sec/ProductMainSecV3";
// Comment out FooterV1 until it exists
// import { getFooterV1Code } from "../ui/footer/FooterV1";
import { getFooterV2Code } from "../ui/footer/FooterV2";
import { getFooterV3Code } from "../ui/footer/FooterV3";
import { getFooterV4Code } from "../ui/footer/FooterV4";
import { getFooterV5Code } from "../ui/footer/FooterV5";
import { getHeaderV1Code } from "../ui/headers/HeaderV1";
import { getHeaderV2Code } from "../ui/headers/HeaderV2";


const generateComponentCode = (variantId, config) => {
   switch (variantId) {
      case "header-v1":
         return getHeaderV1Code(config);
      case "header-v2":
         return getHeaderV2Code(config);
      case "hero-v1":
         return getHeroV1Code(config);
      case "hero-v2":
         return getHeroV2Code(config);
      case "hero-v3":
         return getHeroV3Code(config);
      case "product-main-sec-v1":
         return getProductMainSecV1Code(config);
      case "product-main-sec-v2":
         return getProductMainSecV2Code(config);
      case "product-main-sec-v3":
         return getProductMainSecV3Code(config);
      // Comment out footer-v1 case until it exists
      // case "footer-v1":
      //   return getFooterV1Code(config);
      case "footer-v2":
         return getFooterV2Code(config);
      case "footer-v3":
         return getFooterV3Code(config);
      case "footer-v4":
         return getFooterV4Code(config);
      case "footer-v5":
         return getFooterV5Code(config);
      default:
         return `<!-- No code generator found for variant: "${variantId}" -->`;
   }
};


export default generateComponentCode;

analyse the complete code and tell me can you understand if I provide you the html, css and js code for the next new component's variant then you generate perfect jsx for it with making the section responsive also and some fixes if needed and then provide complete simple guide of how to place/add the code. Tell me can you understand
```
