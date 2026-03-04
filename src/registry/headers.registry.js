import { HeaderV1, HeaderV2, HeaderV3 } from "../components/ui/headers";

const headersRegistry = {
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
      // ── Header V1 — Classic ─────────────────────────────────
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

      // ── Header V2 — Dark ────────────────────────────────────
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

      // ── Header V3 — With Search ─────────────────────────────
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
                  { type: "text", label: "Cart Button Text", key: "btnText" },
                  { type: "color", label: "Cart Background", key: "btnBg" },
                  { type: "color", label: "Cart Text Color", key: "btnColor" },
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
};

export default headersRegistry;
