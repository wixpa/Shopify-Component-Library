import {
   ProductCardsV1,
   ProductCardsV2,
   ProductCardsV3,
} from "../components/ui/product-cards";

const productCardsRegistry = {
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
      // ── Product Cards V1 — Classic ──────────────────────────
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
                  { type: "text", label: "Section Title", key: "sectionTitle" },
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
                  { type: "color", label: "Old Price", key: "oldPriceColor" },
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
                  { type: "color", label: "Badge Background", key: "badgeBg" },
                  {
                     type: "color",
                     label: "Badge Text Color",
                     key: "badgeColor",
                  },
               ],
            },
         ],
      },

      // ── Product Cards V2 — Minimal ──────────────────────────
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
                  { type: "text", label: "Section Title", key: "sectionTitle" },
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
                  { type: "color", label: "Button Background", key: "btnBg" },
                  { type: "color", label: "Button Border", key: "btnBorder" },
                  {
                     type: "color",
                     label: "Button Text Color",
                     key: "btnColor",
                  },
               ],
            },
         ],
      },

      // ── Product Cards V3 — Beauty ───────────────────────────
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
                  { type: "text", label: "Section Title", key: "sectionTitle" },
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
                  { type: "color", label: "Accent Color", key: "accentColor" },
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
};

export default productCardsRegistry;
