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

import { getHeaderV1Code } from "../ui/headers/HeaderV1";
import { getHeaderV2Code } from "../ui/headers/HeaderV2";
import { getHeaderV3Code } from "../ui/headers/HeaderV3";
import { getHeroV1Code } from "../ui/hero/HeroV1";
import { getHeroV2Code } from "../ui/hero/HeroV2";
import { getHeroV3Code } from "../ui/hero/HeroV3";
import { getProductCardsV1Code } from "../ui/product-cards/ProductCardsV1";
import { getProductCardsV2Code } from "../ui/product-cards/ProductCardsV2";
import { getProductCardsV3Code } from "../ui/product-cards/ProductCardsV3";

const generateComponentCode = (variantId, config) => {
   switch (variantId) {
      case "header-v1":
         return getHeaderV1Code(config);
      case "header-v2":
         return getHeaderV2Code(config);
      case "header-v3":
         return getHeaderV3Code(config);
      case "hero-v1":
         return getHeroV1Code(config);
      case "hero-v2":
         return getHeroV2Code(config);
      case "hero-v3":
         return getHeroV3Code(config);
      case "product-cards-v1":
         return getProductCardsV1Code(config);
      case "product-cards-v2":
         return getProductCardsV2Code(config);
      case "product-cards-v3":
         return getProductCardsV3Code(config);
      default:
         return `<!-- No code generator found for variant: "${variantId}" -->`;
   }
};

export default generateComponentCode;
