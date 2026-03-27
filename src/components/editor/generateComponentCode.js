// ── Code Generator Router ─────────────────────────────────────────────────────
//
// Each variant owns its own getXxxCode(config) function, co-located at the
// bottom of its own JSX file. This file is a thin router only — it imports
// those functions and calls the right one by variantId.
//
// HOW TO ADD A NEW VARIANT:
//   1. Export getYourVariantCode(config) from your new VariantXX.jsx file
//   2. Import it here below
//   3. Add one case to the switch
//   That's it — no other files need to change.
// ─────────────────────────────────────────────────────────────────────────────

import { getHeroV1Code } from "../ui/hero/HeroV1";
import { getHeroV2Code } from "../ui/hero/HeroV2";
import { getHeroV3Code } from "../ui/hero/HeroV3";
import { getProductMainSecV1Code } from "../ui/product-main-sec/ProductMainSecV1";
import { getProductMainSecV2Code } from "../ui/product-main-sec/ProductMainSecV2";
import { getProductMainSecV3Code } from "../ui/product-main-sec/ProductMainSecV3";
import { getFooterV2Code } from "../ui/footer/FooterV2";
import { getFooterV3Code } from "../ui/footer/FooterV3";
import { getFooterV4Code } from "../ui/footer/FooterV4";
import { getFooterV5Code } from "../ui/footer/FooterV5";
import { getHeaderV1Code } from "../ui/headers/HeaderV1";
import { getHeaderV2Code } from "../ui/headers/HeaderV2";
import { getFaqV1Code } from "../ui/faqs/FaqV1";
import { getFaqV2Code } from "../ui/faqs/FaqV2";
import { getFaqV3Code } from "../ui/faqs/FaqV3";
import { getFaqV4Code } from "../ui/faqs/FaqV4";
import { getTestimonialV1Code } from "../ui/testimonials/TestimonialV1";

const generateComponentCode = (variantId, config) => {
   switch (variantId) {
      case "header-v1":
         return getHeaderV1Code(config);
      case "header-v2":
         return getHeaderV2Code(config);
      case "hero-v1":
         return getHeroV1Code(config);
      case "hero-v2":
         return getHeroV2Code(config);
      case "hero-v3":
         return getHeroV3Code(config);
      case "product-main-sec-v1":
         return getProductMainSecV1Code(config);
      case "product-main-sec-v2":
         return getProductMainSecV2Code(config);
      case "product-main-sec-v3":
         return getProductMainSecV3Code(config);
      case "footer-v2":
         return getFooterV2Code(config);
      case "footer-v3":
         return getFooterV3Code(config);
      case "footer-v4":
         return getFooterV4Code(config);
      case "footer-v5":
         return getFooterV5Code(config);
      case "faq-v1":
         return getFaqV1Code(config);
      case "faq-v2":
         return getFaqV2Code(config);
      case "faq-v3":
         return getFaqV3Code(config);
      case "faq-v4":
         return getFaqV4Code(config);
      case "testimonial-v1":
         return getTestimonialV1Code(config);
      default:
         return `<!-- No code generator found for variant: "${variantId}" -->`;
   }
};

export default generateComponentCode;
