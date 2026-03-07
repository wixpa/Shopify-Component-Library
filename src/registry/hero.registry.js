import { HeroV1, HeroV2, HeroV3 } from "../components/ui/hero";

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
      // ── Hero V1 — Centered ──────────────────────────────────
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

      // ── Hero V2 — Dark ──────────────────────────────────────
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

      // ── Hero V3 — With Stats ────────────────────────────────
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
