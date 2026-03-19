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

## The Prompt to Use

Copy everything between the triple-dashes below and paste it into any AI,
then fill in the blanks at the bottom.

---

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

<style>
  /* your CSS here */
</style>

<!-- your HTML here -->

<script>
  // your JS here (delete this block if component has no JS)
</script>
```

---

## Placement Guide — After You Get the Code

```
STEP 1 — Component file
  Create or replace:
  src/components/ui/[category]/[Name]V[N].jsx
  Paste the complete JSX file output.

STEP 2 — Registry file
  If NEW category:
    Create: src/registry/[category].registry.js
    Paste the full registry file output.
  If EXISTING category:
    Open the existing registry file.
    Add the new variant object inside the variants: [ ] array.
    Make sure the import for the new variant is added at the top.

STEP 3 — generateComponentCode.js
  Open: src/components/editor/generateComponentCode.js
  Add the import line at the top with the other imports.
  Add the case inside the switch statement.

STEP 4 — index.js barrel file
  Open: src/components/ui/[category]/index.js
  Add the two new export lines (component + getCode).

STEP 5 — componentRegistry.js (new category only)
  Open: src/registry/componentRegistry.js
  Add import at the top.
  Add the registry to the array.

STEP 6 — Test
  npm run dev
  → Go to /components page
  → The new variant card should show an iframe preview
  → Click the card → editor opens, iframe renders component
  → Change any color/text control → preview updates live
  → Click Copy Code → paste into a blank .html file
  → Open in browser → must match original 100%
```
