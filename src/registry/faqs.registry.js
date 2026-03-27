import FaqV1, { getFaqV1Code } from "../components/ui/faqs/FaqV1";

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
    {
      id: "faq-v1",
      name: "FAQ — Minimal Accordion",
      description:
        "Clean minimal accordion FAQ with plus/minus toggle and smooth expand animation.",
      tags: ["minimal", "accordion", "light", "clean", "toggle"],
      component: FaqV1,
      getCode: getFaqV1Code,
      defaultConfig: {
        bgColor:       "#ffffff",
        headingText:   "FAQs",
        headingColor:  "#111111",
        borderColor:   "#dddddd",
        questionColor: "#111111",
        answerColor:   "#555555",
        iconColor:     "#111111",
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
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Colors",
          subtitle: "Background, text, borders, and icon colors",
          controls: [
            { type: "color", label: "Background",     key: "bgColor" },
            { type: "color", label: "Heading Color",  key: "headingColor" },
            { type: "color", label: "Question Color", key: "questionColor" },
            { type: "color", label: "Answer Color",   key: "answerColor" },
            { type: "color", label: "Border Color",   key: "borderColor" },
            { type: "color", label: "Icon Color",     key: "iconColor" },
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