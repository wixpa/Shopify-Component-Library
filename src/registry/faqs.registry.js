import FaqV1, { getFaqV1Code } from "../components/ui/faqs/FaqV1";
import FaqV2, { getFaqV2Code } from "../components/ui/faqs/FaqV2";
import FaqV3, { getFaqV3Code } from "../components/ui/faqs/FaqV3";
import FaqV4, { getFaqV4Code } from "../components/ui/faqs/FaqV4";

const faqsRegistry = {
  id: "faqs",
  slug: "faqs",
  title: "FAQs",
  icon: "fa-layer-group",
  iconBg: "rgba(37,99,235,0.1)",
  iconColor: "#2563eb",
  tags: ["faq", "accordion", "questions", "support", "help"],
  description:
    "Accordion-style FAQ sections to answer common customer questions and reduce support load.",
  variants: [

    // ── FAQ V1 — Minimal Accordion
    {
      id: "faq-v1",
      name: "FAQ — Minimal Accordion",
      description: "Clean minimal accordion FAQ with plus/minus toggle and smooth expand animation.",
      tags: ["minimal", "accordion", "light", "clean", "toggle"],
      component: FaqV1,
      getCode: getFaqV1Code,
      defaultConfig: {
        bgColor: "#ffffff", headingText: "FAQs", headingColor: "#111111",
        borderColor: "#dddddd", questionColor: "#111111", answerColor: "#555555", iconColor: "#111111",
        faq1Q: "How do I make a purchase?",
        faq1A: "You can make a purchase by adding items to your cart and proceeding to checkout.",
        faq2Q: "How do I know if my order is confirmed?",
        faq2A: "You will receive a confirmation email once your order is successfully placed.",
        faq3Q: "Can I change my shipping address after my order is placed?",
        faq3A: "Please contact support immediately to update your shipping details.",
        faq4Q: "Can I change my billing address after placing my order?",
        faq4A: "Billing details can only be changed before order processing begins.",
      },
      accordions: [
        { id: "colors", icon: "fa-palette", iconBg: "#ede9fe", iconColor: "#7c3aed", title: "Colors", subtitle: "Background, text, borders, and icon colors", controls: [
          { type: "color", label: "Background",     key: "bgColor" },
          { type: "color", label: "Heading Color",  key: "headingColor" },
          { type: "color", label: "Question Color", key: "questionColor" },
          { type: "color", label: "Answer Color",   key: "answerColor" },
          { type: "color", label: "Border Color",   key: "borderColor" },
          { type: "color", label: "Icon Color",     key: "iconColor" },
        ]},
        { id: "heading", icon: "fa-heading", iconBg: "#dbeafe", iconColor: "#1d4ed8", title: "Heading", subtitle: "Section title text", controls: [
          { type: "text", label: "Heading Text", key: "headingText" },
        ]},
        { id: "faq1", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 1", subtitle: "Question and answer for item 1", controls: [
          { type: "text", label: "Question 1", key: "faq1Q" }, { type: "text", label: "Answer 1", key: "faq1A" },
        ]},
        { id: "faq2", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 2", subtitle: "Question and answer for item 2", controls: [
          { type: "text", label: "Question 2", key: "faq2Q" }, { type: "text", label: "Answer 2", key: "faq2A" },
        ]},
        { id: "faq3", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 3", subtitle: "Question and answer for item 3", controls: [
          { type: "text", label: "Question 3", key: "faq3Q" }, { type: "text", label: "Answer 3", key: "faq3A" },
        ]},
        { id: "faq4", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 4", subtitle: "Question and answer for item 4", controls: [
          { type: "text", label: "Question 4", key: "faq4Q" }, { type: "text", label: "Answer 4", key: "faq4A" },
        ]},
      ],
    },

    // ── FAQ V2 — Chevron Accordion with SVG Icon
    {
      id: "faq-v2",
      name: "FAQ — Chevron with Icon",
      description: "Polished accordion FAQ with SVG chat icon, animated chevron, and accordion-mode (one open at a time).",
      tags: ["chevron", "svg icon", "accordion", "light", "polished"],
      component: FaqV2,
      getCode: getFaqV2Code,
      defaultConfig: {
        bgColor: "#ffffff", headingText: "FAQs", headingColor: "#333333",
        borderColor: "#e0e0e0", questionColor: "#333333", answerColor: "#666666",
        iconColor: "#444444", chevronColor: "#999999",
        faq1Q: "What makes your store unique?",
        faq1A: "Our uniqueness lies in our commitment to clean formulations that provide heavy-duty results without the heavy-duty feel.",
        faq2Q: "How can I determine the right products for my needs?",
        faq2A: "You can take our 2-minute quiz on our homepage, or chat live with one of our specialists available 24/7.",
        faq3Q: "Do you offer samples of your products?",
        faq3A: "Yes! Every order over $50 includes two complimentary deluxe samples of your choice at checkout.",
        faq4Q: "Can I get assistance with choosing the right options?",
        faq4A: "Absolutely. Upload a photo to our tool for an instant AI recommendation or request a manual review from our team.",
        faq5Q: "Are your products ethically made?",
        faq5A: "Yes, we are 100% certified. We never compromise on ethical standards at any stage of product development.",
      },
      accordions: [
        { id: "colors", icon: "fa-palette", iconBg: "#ede9fe", iconColor: "#7c3aed", title: "Colors", subtitle: "Background, text, borders, and icon colors", controls: [
          { type: "color", label: "Background",     key: "bgColor" },
          { type: "color", label: "Heading Color",  key: "headingColor" },
          { type: "color", label: "Question Color", key: "questionColor" },
          { type: "color", label: "Answer Color",   key: "answerColor" },
          { type: "color", label: "Border Color",   key: "borderColor" },
          { type: "color", label: "Icon Color",     key: "iconColor" },
          { type: "color", label: "Chevron Color",  key: "chevronColor" },
        ]},
        { id: "heading", icon: "fa-heading", iconBg: "#dbeafe", iconColor: "#1d4ed8", title: "Heading", subtitle: "Section title text", controls: [
          { type: "text", label: "Heading Text", key: "headingText" },
        ]},
        { id: "faq1", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 1", subtitle: "Question and answer for item 1", controls: [
          { type: "text", label: "Question 1", key: "faq1Q" }, { type: "text", label: "Answer 1", key: "faq1A" },
        ]},
        { id: "faq2", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 2", subtitle: "Question and answer for item 2", controls: [
          { type: "text", label: "Question 2", key: "faq2Q" }, { type: "text", label: "Answer 2", key: "faq2A" },
        ]},
        { id: "faq3", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 3", subtitle: "Question and answer for item 3", controls: [
          { type: "text", label: "Question 3", key: "faq3Q" }, { type: "text", label: "Answer 3", key: "faq3A" },
        ]},
        { id: "faq4", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 4", subtitle: "Question and answer for item 4", controls: [
          { type: "text", label: "Question 4", key: "faq4Q" }, { type: "text", label: "Answer 4", key: "faq4A" },
        ]},
        { id: "faq5", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 5", subtitle: "Question and answer for item 5", controls: [
          { type: "text", label: "Question 5", key: "faq5Q" }, { type: "text", label: "Answer 5", key: "faq5A" },
        ]},
      ],
    },

    // ── FAQ V3 — Uppercase Bold Accordion
    {
      id: "faq-v3",
      name: "FAQ — Uppercase Bold",
      description: "Bold uppercase accordion FAQ with CSS-only plus/minus icon, first item open by default, and accordion-mode toggle.",
      tags: ["uppercase", "bold", "accordion", "light", "minimal", "open default"],
      component: FaqV3,
      getCode: getFaqV3Code,
      defaultConfig: {
        bgColor: "#ffffff", headingText: "FAQs", headingColor: "#121212",
        borderColor: "#e8e8e8", questionColor: "#121212", answerColor: "#444444", iconColor: "#121212",
        faq1Q: "How long does an order take to arrive?",
        faq1A: "International orders normally arrive within 2-4 weeks of shipping. Please note that these orders need to pass through the customs office in your country before it will be released for final delivery, which can occasionally cause additional delays.",
        faq2Q: "How do I set up a subscription order?",
        faq2A: "Simply select the Subscribe & Save option on the product page, choose your frequency, and checkout as normal.",
        faq3Q: "How to return my items?",
        faq3A: "Visit our Returns Portal within 30 days of purchase to generate a prepaid shipping label.",
        faq4Q: "How can I choose the right size for me?",
        faq4A: "Check our size guide link located next to the size selection dropdown on every product page.",
        faq5Q: "Which payment methods do you accept?",
        faq5A: "We accept Visa, Mastercard, American Express, PayPal, and Apple Pay.",
        faq6Q: "How can I track my order?",
        faq6A: "You will receive a tracking link via email as soon as your order has been processed and shipped.",
      },
      accordions: [
        { id: "colors", icon: "fa-palette", iconBg: "#ede9fe", iconColor: "#7c3aed", title: "Colors", subtitle: "Background, text, borders, and icon colors", controls: [
          { type: "color", label: "Background",     key: "bgColor" },
          { type: "color", label: "Heading Color",  key: "headingColor" },
          { type: "color", label: "Question Color", key: "questionColor" },
          { type: "color", label: "Answer Color",   key: "answerColor" },
          { type: "color", label: "Border Color",   key: "borderColor" },
          { type: "color", label: "Icon Color",     key: "iconColor" },
        ]},
        { id: "heading", icon: "fa-heading", iconBg: "#dbeafe", iconColor: "#1d4ed8", title: "Heading", subtitle: "Section title text", controls: [
          { type: "text", label: "Heading Text", key: "headingText" },
        ]},
        { id: "faq1", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 1", subtitle: "Question and answer for item 1", controls: [
          { type: "text", label: "Question 1", key: "faq1Q" }, { type: "text", label: "Answer 1", key: "faq1A" },
        ]},
        { id: "faq2", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 2", subtitle: "Question and answer for item 2", controls: [
          { type: "text", label: "Question 2", key: "faq2Q" }, { type: "text", label: "Answer 2", key: "faq2A" },
        ]},
        { id: "faq3", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 3", subtitle: "Question and answer for item 3", controls: [
          { type: "text", label: "Question 3", key: "faq3Q" }, { type: "text", label: "Answer 3", key: "faq3A" },
        ]},
        { id: "faq4", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 4", subtitle: "Question and answer for item 4", controls: [
          { type: "text", label: "Question 4", key: "faq4Q" }, { type: "text", label: "Answer 4", key: "faq4A" },
        ]},
        { id: "faq5", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 5", subtitle: "Question and answer for item 5", controls: [
          { type: "text", label: "Question 5", key: "faq5Q" }, { type: "text", label: "Answer 5", key: "faq5A" },
        ]},
        { id: "faq6", icon: "fa-font", iconBg: "#dcfce7", iconColor: "#16a34a", title: "FAQ Item 6", subtitle: "Question and answer for item 6", controls: [
          { type: "text", label: "Question 6", key: "faq6Q" }, { type: "text", label: "Answer 6", key: "faq6A" },
        ]},
      ],
    },

    // ── FAQ V4 — Card Style Accordion
    {
      id: "faq-v4",
      name: "FAQ — Card Style",
      description: "Modern card-style accordion FAQ with rounded borders, diagonal arrow icon, hover shadow effect, and centered heading.",
      tags: ["card", "rounded", "arrow", "accordion", "modern", "centered"],
      component: FaqV4,
      getCode: getFaqV4Code,
      defaultConfig: {
        bgColor:       "#ffffff",
        headingText:   "FAQs",
        headingColor:  "#1a1a1a",
        cardBg:        "#ffffff",
        borderColor:   "#e5e7eb",
        questionColor: "#1a1a1a",
        answerColor:   "#4b5563",
        iconColor:     "#1a1a1a",
        faq1Q: "1/ What products do you offer?",
        faq1A: "We offer a wide range of premium skincare and beauty products, specifically formulated to provide luxury results with ethical ingredients.",
        faq2Q: "2/ Do you offer international shipping?",
        faq2A: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location and are calculated at checkout.",
        faq3Q: "3/ What is your return policy?",
        faq3A: "We offer a 30-day money-back guarantee. If you are not satisfied with your purchase, you can return it for a full refund or exchange.",
        faq4Q: "4/ Do you offer product warranties?",
        faq4A: "All our electronic beauty tools come with a 1-year limited warranty covering manufacturing defects.",
      },
      accordions: [
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Colors",
          subtitle: "Background, card, text, and icon colors",
          controls: [
            { type: "color", label: "Page Background",  key: "bgColor" },
            { type: "color", label: "Heading Color",    key: "headingColor" },
            { type: "color", label: "Card Background",  key: "cardBg" },
            { type: "color", label: "Border Color",     key: "borderColor" },
            { type: "color", label: "Question Color",   key: "questionColor" },
            { type: "color", label: "Answer Color",     key: "answerColor" },
            { type: "color", label: "Icon Color",       key: "iconColor" },
          ],
        },
        {
          id: "heading",
          icon: "fa-heading",
          iconBg: "#dbeafe",
          iconColor: "#1d4ed8",
          title: "Heading",
          subtitle: "Section title text",
          controls: [
            { type: "text", label: "Heading Text", key: "headingText" },
          ],
        },
        {
          id: "faq1",
          icon: "fa-font",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "FAQ Item 1",
          subtitle: "Question and answer for item 1",
          controls: [
            { type: "text", label: "Question 1", key: "faq1Q" },
            { type: "text", label: "Answer 1",   key: "faq1A" },
          ],
        },
        {
          id: "faq2",
          icon: "fa-font",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "FAQ Item 2",
          subtitle: "Question and answer for item 2",
          controls: [
            { type: "text", label: "Question 2", key: "faq2Q" },
            { type: "text", label: "Answer 2",   key: "faq2A" },
          ],
        },
        {
          id: "faq3",
          icon: "fa-font",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "FAQ Item 3",
          subtitle: "Question and answer for item 3",
          controls: [
            { type: "text", label: "Question 3", key: "faq3Q" },
            { type: "text", label: "Answer 3",   key: "faq3A" },
          ],
        },
        {
          id: "faq4",
          icon: "fa-font",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "FAQ Item 4",
          subtitle: "Question and answer for item 4",
          controls: [
            { type: "text", label: "Question 4", key: "faq4Q" },
            { type: "text", label: "Answer 4",   key: "faq4A" },
          ],
        },
      ],
    },

  ],
};

export default faqsRegistry;