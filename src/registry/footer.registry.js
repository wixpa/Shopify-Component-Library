import { FooterV1 } from "../components/ui/footer";

const footerRegistry = {
  id: "footer",
  slug: "footer",
  title: "Footer",
  icon: "fa-layer-group",
  iconBg: "#e0f2fe",
  iconColor: "#0284c7",
  tags: ["footer", "navigation", "shopify"],
  description: "Store footer with links and newsletter",
  variants: [
    {
      id: "footer-v1",
      name: "Footer — Enterprise",
      description: "Enterprise style footer layout",
      tags: ["enterprise", "dark", "newsletter"],
      component: FooterV1,

      defaultConfig: {
        bgColor: "#111111",
        textColor: "#ffffff",
        borderColor: "#2a2a2a",

        brandName: "ENTERPRISE",
        brandDescription:
          "Demo store. Product images remain property of their respective brands.",

        menu1Title: "Delivery & Returns",
        menu1Link1: "Shipping information",
        menu1Link2: "Returns & refunds",
        menu1Link3: "Track your order",

        menu2Title: "About Enterprise",
        menu2Link1: "About us",
        menu2Link2: "Our brands",
        menu2Link3: "Contact us",

        newsletterTitle: "Sign up to our newsletter",
        newsletterText:
          "Sign up for exclusive offers and stories.",

        copyright:
          "© 2026 Enterprise Theme. Powered by Shopify",
      },

      accordions: [
        {
          id: "brand",
          icon: "fa-heading",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Brand",
          subtitle: "Brand information",

          controls: [
            { type: "text", label: "Brand Name", key: "brandName" },
            { type: "text", label: "Brand Description", key: "brandDescription" },
          ],
        },

        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#ecfeff",
          iconColor: "#0891b2",
          title: "Colors",
          subtitle: "Footer color settings",

          controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Text Color", key: "textColor" },
            { type: "color", label: "Border Color", key: "borderColor" },
          ],
        },
      ],
    },
  ],
};

export default footerRegistry;