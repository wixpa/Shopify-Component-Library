import { HeaderV1, HeaderV2, HeaderV3 } from "../components/ui/headers";
import { HeroV1, HeroV2, HeroV3 } from "../components/ui/hero";
import {
   ProductCardsV1,
   ProductCardsV2,
   ProductCardsV3,
} from "../components/ui/product-cards";

// ─────────────────────────────────────────────────────────────
// HOW TO ADD A NEW COMPONENT CATEGORY:
//
// 1. Create src/components/ui/your-category/YourV1.jsx
// 2. Create src/components/ui/your-category/index.js
// 3. Import it above
// 4. Add a new entry in the `registry` array below
//    following the exact same structure
// ─────────────────────────────────────────────────────────────

const registry = [
   // ── Headers ──────────────────────────────────────────────
   {
      id: "headers",
      slug: "headers",
      title: "Headers",
      icon: "fa-bars-staggered",
      iconBg: "rgba(37,99,235,0.1)",
      iconColor: "#2563eb",
      tags: ["header", "navigation", "nav", "menu", "navbar"],
      description:
         "Responsive navigation headers for your Shopify storefront — from minimal to feature-rich with search and cart.",
      variants: [
         {
            id: "header-v1",
            name: "Header — Classic",
            description:
               "Clean header with logo, nav links, and a single CTA button.",
            tags: ["classic", "simple", "light", "white", "cta"],
            component: HeaderV1,
            defaultConfig: {
               bgColor: "#ffffff",
               borderColor: "#e5e7eb",
               logoText: "Shopify Bazzar",
               logoSize: "1.25rem",
               logoColor: "#0f172a",
               navLinks: ["Home", "Products", "Collections", "About"],
               linkColor: "#374151",
               btnText: "Get Started",
               btnBg: "#2563eb",
               btnColor: "#ffffff",
            },
            accordions: [
               {
                  id: "logo",
                  icon: "fa-font",
                  iconBg: "#fef3c7",
                  iconColor: "#d97706",
                  title: "Logo",
                  subtitle: "Brand name and style",
                  controls: [
                     { type: "text", label: "Logo Text", key: "logoText" },
                     { type: "color", label: "Logo Color", key: "logoColor" },
                     {
                        type: "select",
                        label: "Logo Size",
                        key: "logoSize",
                        options: [
                           "1rem",
                           "1.125rem",
                           "1.25rem",
                           "1.5rem",
                           "1.75rem",
                        ],
                     },
                  ],
               },
               {
                  id: "colors",
                  icon: "fa-palette",
                  iconBg: "#f3e8ff",
                  iconColor: "#9333ea",
                  title: "Colors",
                  subtitle: "Background and link colors",
                  controls: [
                     { type: "color", label: "Background", key: "bgColor" },
                     { type: "color", label: "Border", key: "borderColor" },
                     { type: "color", label: "Link Color", key: "linkColor" },
                  ],
               },
               {
                  id: "button",
                  icon: "fa-square",
                  iconBg: "#dcfce7",
                  iconColor: "#16a34a",
                  title: "CTA Button",
                  subtitle: "Action button text and color",
                  controls: [
                     { type: "text", label: "Button Text", key: "btnText" },
                     { type: "color", label: "Background", key: "btnBg" },
                     { type: "color", label: "Text Color", key: "btnColor" },
                  ],
               },
            ],
         },
         {
            id: "header-v2",
            name: "Header — Dark",
            description:
               "Dark-themed header with dual sign-in and shop now buttons.",
            tags: ["dark", "navy", "dual button", "signin", "shop"],
            component: HeaderV2,
            defaultConfig: {
               bgColor: "#0f172a",
               logoText: "Shopify Bazzar",
               logoColor: "#ffffff",
               logoSize: "1.25rem",
               navLinks: ["Home", "Products", "Collections", "About"],
               linkColor: "#94a3b8",
               btnText: "Shop Now",
               btnBg: "#2563eb",
               btnColor: "#ffffff",
            },
            accordions: [
               {
                  id: "logo",
                  icon: "fa-font",
                  iconBg: "#fef3c7",
                  iconColor: "#d97706",
                  title: "Logo",
                  subtitle: "Brand name and style",
                  controls: [
                     { type: "text", label: "Logo Text", key: "logoText" },
                     { type: "color", label: "Logo Color", key: "logoColor" },
                  ],
               },
               {
                  id: "colors",
                  icon: "fa-palette",
                  iconBg: "#f3e8ff",
                  iconColor: "#9333ea",
                  title: "Colors",
                  subtitle: "Background and link colors",
                  controls: [
                     { type: "color", label: "Background", key: "bgColor" },
                     { type: "color", label: "Link Color", key: "linkColor" },
                  ],
               },
               {
                  id: "button",
                  icon: "fa-square",
                  iconBg: "#dcfce7",
                  iconColor: "#16a34a",
                  title: "Button",
                  subtitle: "Shop now button style",
                  controls: [
                     { type: "text", label: "Button Text", key: "btnText" },
                     { type: "color", label: "Background", key: "btnBg" },
                     { type: "color", label: "Text Color", key: "btnColor" },
                  ],
               },
            ],
         },
         {
            id: "header-v3",
            name: "Header — With Search",
            description:
               "Full-featured header with centered nav, search bar, and cart button.",
            tags: ["search", "cart", "full", "centered nav", "ecommerce"],
            component: HeaderV3,
            defaultConfig: {
               bgColor: "#ffffff",
               borderColor: "#e5e7eb",
               logoText: "Shopify Bazzar",
               logoColor: "#0f172a",
               logoSize: "1.25rem",
               navLinks: ["Home", "Products", "Collections", "Blog", "About"],
               linkColor: "#374151",
               searchBg: "#f3f4f6",
               btnText: "Cart (0)",
               btnBg: "#0f172a",
               btnColor: "#ffffff",
            },
            accordions: [
               {
                  id: "logo",
                  icon: "fa-font",
                  iconBg: "#fef3c7",
                  iconColor: "#d97706",
                  title: "Logo",
                  subtitle: "Brand name and style",
                  controls: [
                     { type: "text", label: "Logo Text", key: "logoText" },
                     { type: "color", label: "Logo Color", key: "logoColor" },
                  ],
               },
               {
                  id: "search",
                  icon: "fa-magnifying-glass",
                  iconBg: "#e0f2fe",
                  iconColor: "#0284c7",
                  title: "Search & Cart",
                  subtitle: "Search bar and cart button",
                  controls: [
                     {
                        type: "color",
                        label: "Search Background",
                        key: "searchBg",
                     },
                     {
                        type: "text",
                        label: "Cart Button Text",
                        key: "btnText",
                     },
                     { type: "color", label: "Cart Background", key: "btnBg" },
                     {
                        type: "color",
                        label: "Cart Text Color",
                        key: "btnColor",
                     },
                  ],
               },
               {
                  id: "colors",
                  icon: "fa-palette",
                  iconBg: "#f3e8ff",
                  iconColor: "#9333ea",
                  title: "Colors",
                  subtitle: "Background and link colors",
                  controls: [
                     { type: "color", label: "Background", key: "bgColor" },
                     { type: "color", label: "Border", key: "borderColor" },
                     { type: "color", label: "Link Color", key: "linkColor" },
                  ],
               },
            ],
         },
      ],
   },

   // ── Hero ──────────────────────────────────────────────────
   {
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
            defaultConfig: {
               bgColor: "#ffffff",
               badge: "✨ New Collection",
               badgeBg: "#dbeafe",
               badgeColor: "#1d4ed8",
               title: "Build Your Shopify Store Faster",
               titleColor: "#0f172a",
               titleSize: "3rem",
               subtitle:
                  "Beautiful, ready-to-use components for your storefront.",
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
                     {
                        type: "color",
                        label: "Badge Background",
                        key: "badgeBg",
                     },
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
                     {
                        type: "color",
                        label: "Headline Color",
                        key: "titleColor",
                     },
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
                     {
                        type: "color",
                        label: "Background Color",
                        key: "bgColor",
                     },
                  ],
               },
            ],
         },
         {
            id: "hero-v2",
            name: "Hero — Dark",
            description:
               "Dark-themed hero with purple glow effect and single bold CTA.",
            tags: ["dark", "glow", "purple", "navy", "single cta"],
            component: HeroV2,
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
                     {
                        type: "color",
                        label: "Badge Background",
                        key: "badgeBg",
                     },
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
                     {
                        type: "color",
                        label: "Headline Color",
                        key: "titleColor",
                     },
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
                     {
                        type: "color",
                        label: "Background Color",
                        key: "bgColor",
                     },
                  ],
               },
            ],
         },
         {
            id: "hero-v3",
            name: "Hero — With Stats",
            description:
               "Green-toned hero with badge, headline, CTA, and animated stats row.",
            tags: ["stats", "green", "eco", "numbers", "metrics"],
            component: HeroV3,
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
                     {
                        type: "color",
                        label: "Badge Background",
                        key: "badgeBg",
                     },
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
                     {
                        type: "color",
                        label: "Headline Color",
                        key: "titleColor",
                     },
                     {
                        type: "select",
                        label: "Headline Size",
                        key: "titleSize",
                        options: [
                           "2rem",
                           "2.5rem",
                           "2.75rem",
                           "3rem",
                           "3.5rem",
                        ],
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
                     {
                        type: "color",
                        label: "Background Color",
                        key: "bgColor",
                     },
                  ],
               },
            ],
         },
      ],
   },

   // ── Product Cards ─────────────────────────────────────────
   {
      id: "product-cards",
      slug: "product-cards",
      title: "Product Cards",
      icon: "fa-layer-group",
      iconBg: "rgba(234,88,12,0.1)",
      iconColor: "#ea580c",
      tags: ["product", "cards", "slider", "shop", "ecommerce", "collection"],
      description:
         "Horizontal scrolling product card sliders for showcasing collections, best sellers, and new arrivals.",
      variants: [
         {
            id: "product-cards-v1",
            name: "Product Cards — Classic",
            description:
               "Card slider with image, badge, ratings, price, and add to cart button.",
            tags: ["classic", "rating", "badge", "add to cart", "price"],
            component: ProductCardsV1,
            defaultConfig: {
               bgColor: "#ffffff",
               cardBg: "#ffffff",
               titleColor: "#0f172a",
               priceColor: "#0f172a",
               oldPriceColor: "#9ca3af",
               btnBg: "#0f172a",
               btnColor: "#ffffff",
               btnText: "Add to Cart",
               badgeBg: "#ef4444",
               badgeColor: "#ffffff",
               sectionTitle: "Featured Products",
               titleTextColor: "#0f172a",
            },
            accordions: [
               {
                  id: "section",
                  icon: "fa-heading",
                  iconBg: "#ede9fe",
                  iconColor: "#7c3aed",
                  title: "Section",
                  subtitle: "Section title text",
                  controls: [
                     {
                        type: "text",
                        label: "Section Title",
                        key: "sectionTitle",
                     },
                     {
                        type: "color",
                        label: "Section Title Color",
                        key: "titleTextColor",
                     },
                  ],
               },
               {
                  id: "card",
                  icon: "fa-palette",
                  iconBg: "#f3e8ff",
                  iconColor: "#9333ea",
                  title: "Card Colors",
                  subtitle: "Card background and text",
                  controls: [
                     { type: "color", label: "Background", key: "bgColor" },
                     { type: "color", label: "Card Bg", key: "cardBg" },
                     { type: "color", label: "Title Color", key: "titleColor" },
                     { type: "color", label: "Price Color", key: "priceColor" },
                     {
                        type: "color",
                        label: "Old Price",
                        key: "oldPriceColor",
                     },
                  ],
               },
               {
                  id: "button",
                  icon: "fa-square",
                  iconBg: "#dcfce7",
                  iconColor: "#16a34a",
                  title: "Button",
                  subtitle: "Add to cart button style",
                  controls: [
                     { type: "text", label: "Button Text", key: "btnText" },
                     { type: "color", label: "Background", key: "btnBg" },
                     { type: "color", label: "Text Color", key: "btnColor" },
                  ],
               },
               {
                  id: "badge",
                  icon: "fa-tag",
                  iconBg: "#fef3c7",
                  iconColor: "#d97706",
                  title: "Badge",
                  subtitle: "Product badge colors",
                  controls: [
                     {
                        type: "color",
                        label: "Badge Background",
                        key: "badgeBg",
                     },
                     {
                        type: "color",
                        label: "Badge Text Color",
                        key: "badgeColor",
                     },
                  ],
               },
            ],
         },
         {
            id: "product-cards-v2",
            name: "Product Cards — Minimal",
            description:
               "Minimal card slider with image hover zoom and quick add overlay button.",
            tags: ["minimal", "hover", "zoom", "quick add", "overlay"],
            component: ProductCardsV2,
            defaultConfig: {
               bgColor: "#fafafa",
               cardBg: "#ffffff",
               titleColor: "#111827",
               priceColor: "#111827",
               btnBg: "#ffffff",
               btnBorder: "#111827",
               btnColor: "#111827",
               btnText: "Quick Add",
               sectionTitle: "New Arrivals",
               titleTextColor: "#0f172a",
            },
            accordions: [
               {
                  id: "section",
                  icon: "fa-heading",
                  iconBg: "#ede9fe",
                  iconColor: "#7c3aed",
                  title: "Section",
                  subtitle: "Section title and background",
                  controls: [
                     {
                        type: "text",
                        label: "Section Title",
                        key: "sectionTitle",
                     },
                     {
                        type: "color",
                        label: "Title Color",
                        key: "titleTextColor",
                     },
                     { type: "color", label: "Background", key: "bgColor" },
                  ],
               },
               {
                  id: "card",
                  icon: "fa-palette",
                  iconBg: "#f3e8ff",
                  iconColor: "#9333ea",
                  title: "Card Colors",
                  subtitle: "Card and text colors",
                  controls: [
                     { type: "color", label: "Card Background", key: "cardBg" },
                     { type: "color", label: "Title Color", key: "titleColor" },
                     { type: "color", label: "Price Color", key: "priceColor" },
                  ],
               },
               {
                  id: "button",
                  icon: "fa-square",
                  iconBg: "#dcfce7",
                  iconColor: "#16a34a",
                  title: "Button",
                  subtitle: "Quick add button style",
                  controls: [
                     { type: "text", label: "Button Text", key: "btnText" },
                     {
                        type: "color",
                        label: "Button Background",
                        key: "btnBg",
                     },
                     {
                        type: "color",
                        label: "Button Border",
                        key: "btnBorder",
                     },
                     {
                        type: "color",
                        label: "Button Text Color",
                        key: "btnColor",
                     },
                  ],
               },
            ],
         },
         {
            id: "product-cards-v3",
            name: "Product Cards — Beauty",
            description:
               "Pink-accented card slider designed for beauty and skincare product collections.",
            tags: ["beauty", "skincare", "pink", "feminine", "cosmetics"],
            component: ProductCardsV3,
            defaultConfig: {
               bgColor: "#fdf2f8",
               cardBg: "#ffffff",
               titleColor: "#111827",
               priceColor: "#be185d",
               oldPriceColor: "#9ca3af",
               btnBg: "#be185d",
               btnColor: "#ffffff",
               btnText: "Add to Bag",
               sectionTitle: "Skincare Essentials",
               titleTextColor: "#0f172a",
               accentColor: "#be185d",
            },
            accordions: [
               {
                  id: "section",
                  icon: "fa-heading",
                  iconBg: "#ede9fe",
                  iconColor: "#7c3aed",
                  title: "Section",
                  subtitle: "Section title and background",
                  controls: [
                     {
                        type: "text",
                        label: "Section Title",
                        key: "sectionTitle",
                     },
                     {
                        type: "color",
                        label: "Title Color",
                        key: "titleTextColor",
                     },
                     { type: "color", label: "Background", key: "bgColor" },
                  ],
               },
               {
                  id: "colors",
                  icon: "fa-palette",
                  iconBg: "#fce7f3",
                  iconColor: "#db2777",
                  title: "Colors",
                  subtitle: "Card, price and accent colors",
                  controls: [
                     { type: "color", label: "Card Background", key: "cardBg" },
                     { type: "color", label: "Title Color", key: "titleColor" },
                     { type: "color", label: "Price Color", key: "priceColor" },
                     {
                        type: "color",
                        label: "Accent Color",
                        key: "accentColor",
                     },
                  ],
               },
               {
                  id: "button",
                  icon: "fa-square",
                  iconBg: "#dcfce7",
                  iconColor: "#16a34a",
                  title: "Button",
                  subtitle: "Add to bag button style",
                  controls: [
                     { type: "text", label: "Button Text", key: "btnText" },
                     { type: "color", label: "Background", key: "btnBg" },
                     { type: "color", label: "Text Color", key: "btnColor" },
                  ],
               },
            ],
         },
      ],
   },
];

// ── Helper functions ───────────────────────────────────────────

/**
 * Get all categories (for sidebar nav and ComponentsPage)
 */
export const getAllCategories = () => registry;

/**
 * Get one category by slug
 */
export const getCategoryBySlug = (slug) =>
   registry.find((cat) => cat.slug === slug) || null;

/**
 * Get one variant by category slug + variant id
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
 *   id:          "hero-v1",
 *   section:     "hero",
 *   name:        "Hero — Centered",
 *   description: "...",
 *   tags:        ["centered", "badge", ...],
 *   component:   HeroV1,
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
