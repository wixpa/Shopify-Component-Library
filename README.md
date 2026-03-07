# Shopify Bazzar

A clean, modern, and fully responsive React component library built from the ground up using **React (Vite)**, **Tailwind CSS**, and **React Router Dom**. Featuring beautiful Shopify-focused UI components, RTL language support, elegant dark mode readiness, and pixel-perfect attention to detail.

---

### Adding a New Component Variant

Follow this guide every time you want to convert an existing HTML/CSS component
into a library-compatible React variant.

---

#### Prompt: Converting HTML, CSS, JS code into JSX & step by step guide to integrate it..!
```
I am building a React component library called Shopify Bazzar.
The editor renders component variants inside an <iframe> using a
getCode(config) function — NOT as live React. This means:

- The LIVE PREVIEW in the editor uses: getCode(config) → injected into iframe srcdoc
- The COPY CODE button uses: getCode(config) → pure HTML/CSS/JS string
- The React JSX component file is ONLY used as a wrapper to call getCode()
  and render the iframe-ready output. It is NOT rendered directly anymore.

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
ARCHITECTURE — HOW THIS LIBRARY WORKS
════════════════════════════════════════════════════════════

The editor pipeline:

  config (from controls)
       ↓
  getCode(config)          ← returns pure HTML/CSS/JS string
       ↓
  injected into <iframe srcdoc="...">   ← live preview
       ↓
  same string copied on "Copy Code" button

This means getCode() IS the source of truth.
The React JSX file just calls getCode() and passes it to the iframe.

════════════════════════════════════════════════════════════
FILE A — React Component JSX
════════════════════════════════════════════════════════════

Path: src/components/ui/[category]/[Name]V[N].jsx

The component file must follow this EXACT pattern
(copy FooterV1.jsx as the reference):

─────────────────────────────────────────────────────────────
// Named export — used by generateComponentCode.js
export function get[Name]V[N]Code(config) {
  return `
<style>
  /* ── PASTE YOUR EXACT CSS HERE ──
     Replace only literal values that need to be dynamic
     with ${config.keyName} template variables.
     Example: background-color: #111 → background-color: ${config.bgColor}
     Keep ALL selectors, media queries, keyframes UNCHANGED. */
</style>

<!-- ── PASTE YOUR EXACT HTML HERE ──
     Replace only literal text/URLs/values with ${config.keyName}.
     Keep ALL class names, IDs, aria-* attributes, data-* UNCHANGED. -->

<script>
  /* ── PASTE YOUR EXACT JS HERE ──
     Replace only literal values with ${config.keyName} if needed.
     Keep ALL event listeners, DOM selectors, logic UNCHANGED. */
</script>
  `;
}

// Default export — React component used by the editor canvas
export default function [Name]V[N]({ config }) {
  // This component only exists to satisfy the registry import.
  // The editor renders via getCode() → iframe, not this JSX directly.
  return null;
}
─────────────────────────────────────────────────────────────

IMPORTANT NOTES FOR THE JSX FILE:
- The default export component body is always: return null;
  Because the canvas uses getCode() → iframe, not LiveComponent JSX.
- getCode() must return ONE complete string containing:
    <style>...</style>
    HTML markup
    <script>...</script>
- All config values are interpolated using template literals: ${config.key}
- Use template literals for the entire return string (backtick string).
- If the CSS or JS contains backticks, escape them as \`.
- If the CSS or JS contains ${...} that are NOT config variables
  (e.g. CSS calc() or JS template literals), escape them as \${...}.

════════════════════════════════════════════════════════════
FILE B — Registry Entry
════════════════════════════════════════════════════════════

Path: src/registry/[category].registry.js

REGISTRY SHAPE — follow this exact structure:

─────────────────────────────────────────────────────────────
import [Name]V[N], { get[Name]V[N]Code } from "../components/ui/[category]/[Name]V[N]";

const [category]Registry = {
  slug: "[category-slug]",
  title: "[Category Title]",
  variants: [
    {
      id: "[category-slug]-v[N]",
      name: "[Category] — [Variant Label]",
      description: "Short description",
      tags: ["tag1", "tag2"],
      component: [Name]V[N],
      getCode: get[Name]V[N]Code,
      defaultConfig: {
        // All config keys with sensible default values
        // Use the exact literal values from the original component
        keyName: "default value",
      },
      accordions: [
        {
          id: "section-id",
          icon: "fa-palette",
          iconBg: "#HEX",
          iconColor: "#HEX",
          title: "Section Title",
          subtitle: "What this group customizes",
          controls: [
            { type: "text",  label: "Label", key: "configKey" },
            { type: "color", label: "Label", key: "configKey" },
          ],
        },
      ],
    },
  ],
};

export default [category]Registry;
─────────────────────────────────────────────────────────────

REGISTRY RULES:
- Export as DEFAULT (not named) — import in componentRegistry.js
  uses: import [category]Registry from "./[category].registry"
- Every config key in defaultConfig MUST appear in getCode()
  and vice versa — no orphan keys.
- accordion controls cover every config key exactly once.
- Use only these icon strings (already registered in icons.js):
    "fa-font"            → text / labels
    "fa-palette"         → colors
    "fa-square"          → backgrounds / blocks
    "fa-tag"             → brand / logo
    "fa-heading"         → headings
    "fa-fill-drip"       → fill colors
    "fa-magnifying-glass"→ search
    "fa-layer-group"     → layout / sections
    "fa-image"           → images / media
    "fa-bars-staggered"  → navigation / links
  If you genuinely need a new icon, write:
    ⚠️ NEW ICON NEEDED: "fa-quote-left" — add to icons.js manually

════════════════════════════════════════════════════════════
FILE C — generateComponentCode.js
════════════════════════════════════════════════════════════

Path: src/components/editor/generateComponentCode.js

Add ONE import and ONE case for the new variant:

─────────────────────────────────────────────────────────────
// Add import:
import { get[Name]V[N]Code } from "../ui/[category]/[Name]V[N]";

// Add case inside the switch:
case "[category-slug]-v[N]":
  return get[Name]V[N]Code(config);
─────────────────────────────────────────────────────────────

════════════════════════════════════════════════════════════
FILE D — componentRegistry.js  (only if NEW category)
════════════════════════════════════════════════════════════

Path: src/registry/componentRegistry.js

Only needed when adding a brand new category (not a new variant
inside an existing category).

─────────────────────────────────────────────────────────────
// Add import:
import [category]Registry from "./[category].registry";

// Add to registry array:
const registry = [...existing, [category]Registry];
─────────────────────────────────────────────────────────────

════════════════════════════════════════════════════════════
CONFIG KEY NAMING RULES
════════════════════════════════════════════════════════════

Use clear camelCase keys. Follow this convention:

  Colors:      bgColor, textColor, textMuted, borderColor,
               accentColor, btnColor, inputBg, inputText
  Text:        headingText, subheadingText, bodyText,
               btnLabel, placeholderText, copyrightText
  URLs:        facebookUrl, instagramUrl, logoUrl, heroImageUrl
  Columns:     col2Heading, col2Link1, col2Link2 ...
  Booleans:    showBadge, showNewsletter (use "toggle" control type)
  Numbers:     paddingTop, fontSize (use "range" control type if supported)

════════════════════════════════════════════════════════════
ESCAPING RULES INSIDE getCode() TEMPLATE LITERAL
════════════════════════════════════════════════════════════

Inside the backtick template string returned by getCode():

  Original code has:        Write it as:
  ─────────────────────     ─────────────────────────────
  `backtick`                \`backtick\`
  ${someJsVar}              \${someJsVar}
  calc(100% - 20px)         calc(100% - 20px)  ← safe, no change
  "string in JS"            "string in JS"     ← safe, no change
  config-driven value       ${config.keyName}  ← interpolated normally

════════════════════════════════════════════════════════════
WHAT TO IDENTIFY AS DYNAMIC (config-driven)
════════════════════════════════════════════════════════════

Make these dynamic — replace with config variables:
  ✅ Brand name / logo text
  ✅ All visible text (headings, body copy, button labels, placeholders)
  ✅ All colors (backgrounds, text, borders, accents)
  ✅ All URLs (social links, image sources, hrefs)
  ✅ Navigation / link labels
  ✅ Copyright text
  ✅ CSS custom property values in :root { }

Keep these hardcoded — do NOT make them config-driven:
  ❌ CSS selectors and class names
  ❌ HTML structural attributes (role, aria-controls, id, type)
  ❌ JS logic, DOM queries, event listener callbacks
  ❌ Keyframe names and animation timings
  ❌ Media query breakpoints
  ❌ CSS layout properties (display, grid, flex, position)

════════════════════════════════════════════════════════════
OUTPUT ORDER — generate files in this exact sequence
════════════════════════════════════════════════════════════

1. src/components/ui/[category]/[Name]V[N].jsx
   — getCode(config) export first, then default export

2. src/registry/[category].registry.js
   — full registry object with defaultConfig + accordions

3. src/components/editor/generateComponentCode.js
   — show ONLY the new import line + new case to add

4. src/registry/componentRegistry.js
   — show ONLY if new category: the import + registry array change

════════════════════════════════════════════════════════════
VERIFICATION CHECKLIST — check before finishing
════════════════════════════════════════════════════════════

Before outputting code, verify:
  [ ] Every config key in defaultConfig exists in getCode()
  [ ] Every interpolated ${config.key} in getCode() exists in defaultConfig
  [ ] No backticks or \${} inside getCode() template are unescaped
  [ ] getCode() output contains NO React, NO JSX, NO Tailwind classes
  [ ] Default export component returns null
  [ ] Registry uses export default (not named export)
  [ ] generateComponentCode.js case ID matches registry variant id exactly
  [ ] All accordion controls map to a real config key

════════════════════════════════════════════════════════════
PLACEMENT GUIDE (step by step)
════════════════════════════════════════════════════════════

After the AI gives you the code, place files in this order:

STEP 1 — Component file
  → Create: src/components/ui/[category]/[Name]V[N].jsx
  → Paste the entire JSX file output

STEP 2 — Registry file
  → If NEW category: create src/registry/[category].registry.js
  → If EXISTING category: open the existing file and add the new
    variant object inside the variants: [ ] array

STEP 3 — generateComponentCode.js
  → Open: src/components/editor/generateComponentCode.js
  → Add the import line at the top with other imports
  → Add the case inside the switch statement

STEP 4 — componentRegistry.js  (new category only)
  → Open: src/registry/componentRegistry.js
  → Add import line at the top
  → Add the registry to the registry array

STEP 5 — Test
  → npm run dev
  → Open the editor, select your category and new variant
  → Change a color/text control → preview should update live
  → Click Copy Code → paste into a blank .html file
  → Open in browser — behavior, layout, and responsiveness
    must match the original component 100%

════════════════════════════════════════════════════════════
MY COMPONENT — fill in below
════════════════════════════════════════════════════════════

Category name  : [e.g. Footer, Hero, Pricing]
Category slug  : [e.g. footer, hero, pricing]
Variant number : [e.g. V2 — check existing variants first]
Variant label  : [e.g. "Dark Enterprise", "Gradient CTA"]
Variant tags   : [e.g. dark, newsletter, accordion, mobile]

Paste your EXACT component code below.
DO NOT refactor. DO NOT convert to Tailwind.
ONLY insert config variables where needed.

<style>
  /* your CSS here */
</style>

<!-- your HTML here -->

<script>
  // your JS here
</script>
```