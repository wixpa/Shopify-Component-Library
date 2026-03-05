# Shopify Bazzar

A clean, modern, and fully responsive React component library built from
the ground up using **React (Vite)**, **Tailwind CSS**, and
**React Router Dom**. Inspired by the Meraki UI design system - featuring
beautiful Shopify-focused UI components, RTL language support, elegant dark mode readiness,
and pixel-perfect attention to detail.

---

## 📦 Adding a New Component Variant

Follow this guide every time you want to convert an existing HTML/CSS component
into a library-compatible React variant.

---

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                     ADDING A NEW COMPONENT VARIANT                           ║
║              From raw HTML/CSS → Library-compatible React variant            ║
╚══════════════════════════════════════════════════════════════════════════════╝


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🧠  THE CONVERSION PROMPT
  Copy this prompt, fill in the [PLACEHOLDERS], and send it to your AI assistant
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  I am building a Shopify component library in React + Tailwind CSS.
  I have an existing HTML/CSS component I want to convert into a
  library-compatible React variant.

  ──────────────────────────────────────────────
  PROJECT STRUCTURE CONTEXT
  ──────────────────────────────────────────────
  src/
  ├── registry/
  │   ├── componentRegistry.js     ← assembler (imports sub-registries)
  │   ├── icons.js                 ← FA string → Lucide icon map
  │   ├── headers.registry.js
  │   ├── hero.registry.js
  │   └── productCards.registry.js
  │
  ├── components/
  │   └── ui/
  │       ├── headers/
  │       │   ├── HeaderV1.jsx
  │       │   ├── HeaderV2.jsx
  │       │   ├── HeaderV3.jsx
  │       │   └── index.js
  │       ├── hero/
  │       │   ├── HeroV1.jsx
  │       │   ├── HeroV2.jsx
  │       │   └── index.js
  │       └── [CATEGORY]/          ← new category goes here
  │           ├── [Name]V1.jsx
  │           └── index.js
  │
  └── components/editor/
      └── generateComponentCode.js ← one case per category

  ──────────────────────────────────────────────
  RULES ALL VARIANT FILES MUST FOLLOW
  ──────────────────────────────────────────────
  1. The component accepts a single `config` prop (plain object).
  2. ALL visual values (colors, text, sizes) come from `config`
     — NO hardcoded design values.
  3. Written in pure Tailwind CSS — NO styled-components, NO inline
     style blocks except for truly dynamic values (e.g. config.bgColor
     that can't be known at build time).
     Dynamic colors MUST use: style={{ background: config.bgColor }}
  4. NO external image URLs — use placeholder divs with bg colors or
     gradients instead.
  5. The component must be fully responsive (mobile → desktop).
  6. Export a named get[ComponentName]Code(config) function at the
     bottom that returns the raw Shopify-ready HTML/CSS string.
     This is what gets copied to clipboard.
  7. Default export must be the React component.
  8. No props other than `config`. No useState/useEffect unless strictly
     needed for UI interactions inside the component itself.

  ──────────────────────────────────────────────
  REGISTRY RULES
  ──────────────────────────────────────────────
  - accordion `icon` is a FA string e.g. "fa-font", "fa-palette",
    "fa-square", "fa-tag", "fa-heading", "fa-fill-drip",
    "fa-magnifying-glass" — resolved via src/registry/icons.js.
    Tell me if a new icon is needed.
  - defaultConfig color values MUST include the # prefix: "#ffffff"
  - iconBg and iconColor in accordions must also use # prefixed hex
  - Every control: { type, label, key } + optional `options` for selects
  - Control types: "text" | "color" | "select"

  ──────────────────────────────────────────────
  MY HTML/CSS COMPONENT
  ──────────────────────────────────────────────
  Category name  : [e.g. "Testimonials", "FAQ", "Pricing"]
  Category slug  : [e.g. "testimonials", "faq", "pricing"]
  Variant number : [e.g. V4 if category has V1–V3, or V1 if new]
  Variant name   : [e.g. "Testimonials — Carousel"]
  Variant tags   : [e.g. "carousel, reviews, stars, light"]

  [PASTE YOUR RAW HTML HERE]

  [PASTE YOUR RAW CSS HERE]

  ──────────────────────────────────────────────
  WHAT I NEED GENERATED
  ──────────────────────────────────────────────
  Please generate ALL of the following files completely:

  1. src/components/ui/[category]/[Name]V[N].jsx
     - Full React component accepting `config` prop
     - All text/colors/sizes pulled from config
     - Fully responsive Tailwind CSS
     - Named export: get[Name]V[N]Code(config) at bottom
     - Default export: the React component

  2. src/components/ui/[category]/index.js  (or update existing)
     - Export all variants for this category

  3. src/registry/[category].registry.js    (or add to existing)
     - Full registry object with: id, slug, title, icon, iconBg,
       iconColor, tags, description, variants[]
     - Each variant: id, name, description, tags, component ref,
       defaultConfig, accordions[]
     - Every customisable value gets a control

  4. Update src/registry/componentRegistry.js
     - Add import and push to array (if new category only)

  5. Add one case to generateComponentCode.js
     - case "[category-slug]": return get[Name]V[N]Code(config)

  Tell me if any new FA icon strings need adding to icons.js.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🗂️  STEP-BY-STEP INTEGRATION INSTRUCTIONS
  Run these steps after the AI generates the code
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  STEP 1 — Create the Component File
  ─────────────────────────────────────────────────────────────────────────────
  Save the generated [Name]V[N].jsx into:

    src/components/ui/[category]/[Name]V[N].jsx


  STEP 2 — Update or Create index.js
  ─────────────────────────────────────────────────────────────────────────────
  Every category folder needs a barrel export file:

    src/components/ui/[category]/index.js

    export { default as TestimonialsV1 } from "./TestimonialsV1";
    export { default as TestimonialsV2 } from "./TestimonialsV2";
    // add a new line for every new variant


  STEP 3 — Create or Update the Registry File
  ─────────────────────────────────────────────────────────────────────────────
  Save the generated registry into:

    src/registry/[category].registry.js

  Minimum required shape:

    const testimonialsRegistry = {
      id:          "testimonials",
      slug:        "testimonials",
      title:       "Testimonials",
      icon:        "fa-quote-left",        ← FA string → icons.js
      iconBg:      "rgba(79,70,229,0.1)",
      iconColor:   "#4f46e5",
      tags:        ["testimonials", "reviews", "social proof"],
      description: "...",
      variants: [
        {
          id:            "testimonials-v1",
          name:          "Testimonials — Classic",
          description:   "...",
          tags:          ["classic", "cards", "stars"],
          component:     TestimonialsV1,
          defaultConfig: {
            bgColor:    "#ffffff",          ← always # prefixed
            titleColor: "#111827",
          },
          accordions: [
            {
              id:        "section",
              icon:      "fa-heading",
              iconBg:    "#ede9fe",          ← always # prefixed
              iconColor: "#7c3aed",          ← always # prefixed
              title:     "Section",
              subtitle:  "Section title and background",
              controls: [
                { type: "text",  label: "Section Title", key: "sectionTitle" },
                { type: "color", label: "Background",    key: "bgColor"      },
              ],
            },
          ],
        },
      ],
    };
    export default testimonialsRegistry;


  STEP 4 — Register in componentRegistry.js  (new categories only)
  ─────────────────────────────────────────────────────────────────────────────
  File: src/registry/componentRegistry.js

    // 1. Add import at top
    import testimonialsRegistry from "./testimonials.registry";

    // 2. Add to registry array
    const registry = [
      headersRegistry,
      heroRegistry,
      productCardsRegistry,
      testimonialsRegistry,   ← new
    ];

  ⚠  Skip this step if adding a variant to an existing category.


  STEP 5 — Update generateComponentCode.js
  ─────────────────────────────────────────────────────────────────────────────
  File: src/components/editor/generateComponentCode.js

    // Add import at top
    import { getTestimonialsV1Code } from
      "../components/ui/testimonials/TestimonialsV1";

    // Add case inside the switch block
    case "testimonials":
      return getTestimonialsV1Code(config);


  STEP 6 — Check icons.js for New Icons
  ─────────────────────────────────────────────────────────────────────────────
  File: src/registry/icons.js

  If the AI mentions a new FA icon string, add the mapping:

    import {
      // ...existing imports
      Quote,                          ← new Lucide component
    } from "lucide-react";

    export const ICON_MAP = {
      // ...existing entries
      "fa-quote-left": Quote,         ← new mapping
    };

  ℹ  resolveIcon() falls back to a Settings icon for unknown keys so
     the app won't crash — but always add new icons for correctness.


  STEP 7 — Test It
  ─────────────────────────────────────────────────────────────────────────────
  Start the dev server:

    npm run dev

  Navigate to your new component category and verify:

    ✅  Live preview renders correctly in the canvas
    ✅  All accordion controls update the preview in real time
    ✅  Copy Code  →  copies valid Shopify-ready HTML/CSS to clipboard
    ✅  Reset to Defaults  →  restores all config values correctly
    ✅  Responsive across Mobile / Tablet / Desktop viewport switcher


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📋  QUICK REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Control types
  ┌──────────┬────────────────────────────────┬──────────────────────────┐
  │  Type    │  Use for                       │  Example key             │
  ├──────────┼────────────────────────────────┼──────────────────────────┤
  │ "text"   │ Any string value               │ btnText, sectionTitle    │
  │ "color"  │ Any color value                │ bgColor, titleColor      │
  │ "select" │ Fixed list of options          │ titleSize, alignment     │
  └──────────┴────────────────────────────────┴──────────────────────────┘

  Available FA icon strings (icons.js)
  ┌──────────────────────────┬──────────────────────────┐
  │  FA String               │  Lucide Component        │
  ├──────────────────────────┼──────────────────────────┤
  │ fa-font                  │ Type                     │
  │ fa-palette               │ Palette                  │
  │ fa-square                │ Square                   │
  │ fa-tag                   │ Tag                      │
  │ fa-heading               │ Heading                  │
  │ fa-fill-drip             │ Droplets                 │
  │ fa-magnifying-glass      │ Search                   │
  │ fa-bars-staggered        │ AlignLeft                │
  │ fa-image                 │ Image                    │
  │ fa-layer-group           │ Layers                   │
  └──────────────────────────┴──────────────────────────┘

  Files touched per new variant
  ┌──────────────────────────────────────────────────┬───────────────────┐
  │  File                                            │  Action           │
  ├──────────────────────────────────────────────────┼───────────────────┤
  │ src/components/ui/[cat]/[Name]V[N].jsx           │ CREATE            │
  │ src/components/ui/[cat]/index.js                 │ UPDATE            │
  │ src/registry/[cat].registry.js                   │ CREATE / UPDATE   │
  │ src/registry/componentRegistry.js                │ UPDATE (new cat)  │
  │ src/registry/icons.js                            │ UPDATE (new icon) │
  │ src/components/editor/generateComponentCode.js   │ UPDATE            │
  └──────────────────────────────────────────────────┴───────────────────┘
```

---

## 📄 License

This project is open source and available under the
[MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ using React + Vite + Tailwind CSS
</p>
