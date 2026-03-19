import ProductMainSecV1, {
   getProductMainSecV1Code,
} from "../components/ui/product-main-sec/ProductMainSecV1";
import ProductMainSecV2, {
   getProductMainSecV2Code,
} from "../components/ui/product-main-sec/ProductMainSecV2";
import ProductMainSecV3, {
   getProductMainSecV3Code,
} from "../components/ui/product-main-sec/ProductMainSecV3";

const productMainSecRegistry = {
   id: "product-main-sec",
   slug: "product-main-sec",
   title: "Product Main Section",
   icon: "fa-image",
   iconBg: "rgba(37,99,235,0.1)",
   iconColor: "#2563eb",
   tags: ["product", "gallery", "details", "size", "add to cart", "pdp"],
   description:
      "Full product detail page sections with image gallery, size selector, and purchase actions.",
   variants: [
      {
         id: "product-main-sec-v1",
         name: "Product Main Section — Classic",
         description:
            "Two-column product layout with thumbnail gallery, size/color selector, accordion, and social share.",
         tags: [
            "classic",
            "gallery",
            "accordion",
            "size selector",
            "social share",
         ],
         component: ProductMainSecV1,
         getCode: getProductMainSecV1Code,
         defaultConfig: {
            bgColor: "#ffffff",
            textMain: "#4a4a4a",
            textLight: "#888888",
            accentColor: "#6e817d",
            accentHover: "#5a6b67",
            borderColor: "#e6e6e6",
            productTitle: "Heather Gray Long Sleeve Tunic",
            productPrice: "$32",
            colorLabel: "Heather Gray",
            descriptionText:
               "It only takes this Heather Gray PIKO Long Sleeve Tunic to jump start your outfit. Fluid in execution, this tunic has a natural carefree fit as it glides along the torso to the mid-thigh. A scooping rounded neckline adds a softness that every Original PIKO Tunic has.",
            shippingText:
               "We offer free worldwide shipping on all orders over $50. Standard shipping takes 5-7 business days. Express shipping options are available at checkout.",
            addToCartText: "Add to Cart",
            buyNowText: "Buy it Now",
            demoText:
               "This is a demonstration store. You can purchase products like this from PIKO.",
            img1: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            img1Thumb:
               "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
            img2: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            img2Thumb:
               "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
            img3: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            img3Thumb:
               "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
            facebookUrl: "#",
            twitterUrl: "#",
            pinterestUrl: "#",
         },
         accordions: [
            {
               id: "product",
               icon: "fa-tag",
               iconBg: "#dbeafe",
               iconColor: "#1d4ed8",
               title: "Product Info",
               subtitle: "Title, price, and color label",
               controls: [
                  { type: "text", label: "Product Title", key: "productTitle" },
                  { type: "text", label: "Price", key: "productPrice" },
                  { type: "text", label: "Color Label", key: "colorLabel" },
               ],
            },
            {
               id: "content",
               icon: "fa-font",
               iconBg: "#ede9fe",
               iconColor: "#7c3aed",
               title: "Content",
               subtitle: "Description, shipping, and demo text",
               controls: [
                  {
                     type: "text",
                     label: "Description",
                     key: "descriptionText",
                  },
                  { type: "text", label: "Shipping Info", key: "shippingText" },
                  { type: "text", label: "Demo Note", key: "demoText" },
               ],
            },
            {
               id: "buttons",
               icon: "fa-square",
               iconBg: "#dcfce7",
               iconColor: "#16a34a",
               title: "Buttons",
               subtitle: "Add to cart and buy now labels",
               controls: [
                  {
                     type: "text",
                     label: "Add to Cart Text",
                     key: "addToCartText",
                  },
                  { type: "text", label: "Buy Now Text", key: "buyNowText" },
               ],
            },
            {
               id: "colors",
               icon: "fa-palette",
               iconBg: "#f3e8ff",
               iconColor: "#9333ea",
               title: "Colors",
               subtitle: "Background, text, accent, and border",
               controls: [
                  { type: "color", label: "Background", key: "bgColor" },
                  { type: "color", label: "Main Text", key: "textMain" },
                  { type: "color", label: "Light Text", key: "textLight" },
                  { type: "color", label: "Accent Color", key: "accentColor" },
                  { type: "color", label: "Accent Hover", key: "accentHover" },
                  { type: "color", label: "Border Color", key: "borderColor" },
               ],
            },
            {
               id: "images",
               icon: "fa-image",
               iconBg: "#fef3c7",
               iconColor: "#d97706",
               title: "Images",
               subtitle: "Main and thumbnail image URLs",
               controls: [
                  { type: "text", label: "Image 1 (full)", key: "img1" },
                  { type: "text", label: "Image 1 (thumb)", key: "img1Thumb" },
                  { type: "text", label: "Image 2 (full)", key: "img2" },
                  { type: "text", label: "Image 2 (thumb)", key: "img2Thumb" },
                  { type: "text", label: "Image 3 (full)", key: "img3" },
                  { type: "text", label: "Image 3 (thumb)", key: "img3Thumb" },
               ],
            },
            {
               id: "social",
               icon: "fa-bars-staggered",
               iconBg: "#fce7f3",
               iconColor: "#db2777",
               title: "Social Links",
               subtitle: "Facebook, Twitter, Pinterest URLs",
               controls: [
                  { type: "text", label: "Facebook URL", key: "facebookUrl" },
                  { type: "text", label: "Twitter URL", key: "twitterUrl" },
                  { type: "text", label: "Pinterest URL", key: "pinterestUrl" },
               ],
            },
         ],
      },
      {
         id: "product-main-sec-v2",
         name: "Product Main Section — Elegant Beauty",
         description:
            "Two-column beauty product layout with image gallery, tag pills, trust icons, accordions, ritual grid, and paired products.",
         tags: [
            "beauty",
            "gallery",
            "accordion",
            "trust icons",
            "paired products",
         ],
         component: ProductMainSecV2,
         getCode: getProductMainSecV2Code,
         defaultConfig: {
            bgColor: "#ffffff",
            colorTextMain: "#1a1a1a",
            colorTextLight: "#555555",
            colorBorder: "#e5e5e5",
            colorBtnBg: "#111111",
            colorBtnText: "#ffffff",
            colorAccentRed: "#d32f2f",
            brandName: "Herbivore",
            productTitle: "Orchid Antioxidant Beauty Face Oil",
            productPrice: "$86.00",
            tag1: "Jojoba",
            tag2: "Flower Extract",
            tag3: "Orchid Extract",
            benefit1: "100% Vegan and Organic",
            benefit2: "Deeply absorb, moisturize and nourish",
            benefit3: "Suitable for all skin types",
            mainImage1Url:
               "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            thumb1Url:
               "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
            thumb1Alt: "Product Front",
            mainImage2Url:
               "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            thumb2Url:
               "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
            thumb2Alt: "Product Lifestyle",
            descPara1:
               "A facial oil that defends against free radicals, supports natural elasticity, and provides beneficial vitamins and fatty acids to protect against premature aging.",
            descPara2:
               "Orchid Extract: A natural humectant that draws moisture to the skin, smoothing and conditioning. It contains calcium, magnesium, and zinc which are all beneficial to the skin.",
            howToUseText:
               "Apply 3–6 drops to cleansed and toned skin morning and night. Massage in and allow to absorb for 1–3 minutes before applying makeup.",
            ingredientsText:
               "Caprylic/Capric Triglycerides, Orchid Extract, Camellia Oleifera (Camellia) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Squalane, Tocopherol (Vitamin E), Jasminum Sambac (Jasmine) Flower Extract.",
            deliveryText:
               "Free shipping on orders over $50. Returns accepted within 30 days of purchase.",
            ritualTitle: "Complete your beauty ritual",
            ritual1Url:
               "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            ritual2Url:
               "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            ritual3Url:
               "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            ritual4Url:
               "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            pairedTitle: "Frequently paired with",
            paired1ImgUrl:
               "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
            paired1Name: "Argan oil for nails",
            paired1OldPrice: "$30.00",
            paired1NewPrice: "From $19.00",
            paired1Badge: "-36%",
            paired2ImgUrl:
               "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
            paired2Name: "Aquarius Pore Purifying Clarity Cream",
            paired2Price: "$165.00",
         },
         accordions: [
            {
               id: "colors",
               icon: "fa-palette",
               iconBg: "#ede9fe",
               iconColor: "#7c3aed",
               title: "Colors",
               subtitle: "Background, text, button, and accent colors",
               controls: [
                  { type: "color", label: "Background", key: "bgColor" },
                  { type: "color", label: "Text Main", key: "colorTextMain" },
                  { type: "color", label: "Text Light", key: "colorTextLight" },
                  { type: "color", label: "Border", key: "colorBorder" },
                  { type: "color", label: "Button BG", key: "colorBtnBg" },
                  { type: "color", label: "Button Text", key: "colorBtnText" },
                  { type: "color", label: "Sale Badge", key: "colorAccentRed" },
               ],
            },
            {
               id: "product-info",
               icon: "fa-tag",
               iconBg: "#fef9c3",
               iconColor: "#a16207",
               title: "Product Info",
               subtitle: "Brand, title, price, and tags",
               controls: [
                  { type: "text", label: "Brand Name", key: "brandName" },
                  { type: "text", label: "Product Title", key: "productTitle" },
                  { type: "text", label: "Price", key: "productPrice" },
                  { type: "text", label: "Tag 1", key: "tag1" },
                  { type: "text", label: "Tag 2", key: "tag2" },
                  { type: "text", label: "Tag 3", key: "tag3" },
               ],
            },
            {
               id: "benefits",
               icon: "fa-font",
               iconBg: "#dbeafe",
               iconColor: "#1d4ed8",
               title: "Benefits",
               subtitle: "Three bullet point benefits",
               controls: [
                  { type: "text", label: "Benefit 1", key: "benefit1" },
                  { type: "text", label: "Benefit 2", key: "benefit2" },
                  { type: "text", label: "Benefit 3", key: "benefit3" },
               ],
            },
            {
               id: "images",
               icon: "fa-image",
               iconBg: "#dcfce7",
               iconColor: "#15803d",
               title: "Images",
               subtitle: "Product gallery and ritual grid images",
               controls: [
                  {
                     type: "text",
                     label: "Main Image 1 URL",
                     key: "mainImage1Url",
                  },
                  { type: "text", label: "Thumbnail 1 URL", key: "thumb1Url" },
                  { type: "text", label: "Thumbnail 1 Alt", key: "thumb1Alt" },
                  {
                     type: "text",
                     label: "Main Image 2 URL",
                     key: "mainImage2Url",
                  },
                  { type: "text", label: "Thumbnail 2 URL", key: "thumb2Url" },
                  { type: "text", label: "Thumbnail 2 Alt", key: "thumb2Alt" },
                  { type: "text", label: "Ritual Image 1", key: "ritual1Url" },
                  { type: "text", label: "Ritual Image 2", key: "ritual2Url" },
                  { type: "text", label: "Ritual Image 3", key: "ritual3Url" },
                  { type: "text", label: "Ritual Image 4", key: "ritual4Url" },
               ],
            },
            {
               id: "accordion-content",
               icon: "fa-layer-group",
               iconBg: "#fce7f3",
               iconColor: "#be185d",
               title: "Accordion Content",
               subtitle: "Description, how to use, ingredients, delivery",
               controls: [
                  {
                     type: "text",
                     label: "Description Para 1",
                     key: "descPara1",
                  },
                  {
                     type: "text",
                     label: "Description Para 2",
                     key: "descPara2",
                  },
                  { type: "text", label: "How to Use", key: "howToUseText" },
                  {
                     type: "text",
                     label: "Ingredients",
                     key: "ingredientsText",
                  },
                  {
                     type: "text",
                     label: "Delivery Policy",
                     key: "deliveryText",
                  },
               ],
            },
            {
               id: "ritual",
               icon: "fa-heading",
               iconBg: "#ffedd5",
               iconColor: "#c2410c",
               title: "Ritual Section",
               subtitle: "Section title for the beauty ritual grid",
               controls: [
                  { type: "text", label: "Ritual Title", key: "ritualTitle" },
               ],
            },
            {
               id: "paired-products",
               icon: "fa-bars-staggered",
               iconBg: "#f0fdf4",
               iconColor: "#166534",
               title: "Paired Products",
               subtitle: "Frequently paired with section",
               controls: [
                  { type: "text", label: "Section Title", key: "pairedTitle" },
                  {
                     type: "text",
                     label: "Product 1 Image URL",
                     key: "paired1ImgUrl",
                  },
                  { type: "text", label: "Product 1 Name", key: "paired1Name" },
                  {
                     type: "text",
                     label: "Product 1 Old Price",
                     key: "paired1OldPrice",
                  },
                  {
                     type: "text",
                     label: "Product 1 New Price",
                     key: "paired1NewPrice",
                  },
                  {
                     type: "text",
                     label: "Product 1 Badge",
                     key: "paired1Badge",
                  },
                  {
                     type: "text",
                     label: "Product 2 Image URL",
                     key: "paired2ImgUrl",
                  },
                  { type: "text", label: "Product 2 Name", key: "paired2Name" },
                  {
                     type: "text",
                     label: "Product 2 Price",
                     key: "paired2Price",
                  },
               ],
            },
         ],
      },
      {
         id: "product-main-sec-v3",
         name: "Product Main Section — Luxury Bag",
         description:
            "Five-thumbnail gallery layout with color swatches, features grid, single accordion, and sharp minimal styling for luxury products.",
         tags: ["luxury", "gallery", "swatches", "features grid", "accordion"],
         component: ProductMainSecV3,
         getCode: getProductMainSecV3Code,
         defaultConfig: {
            bgColor: "#f0f0f0",
            colorTextMain: "#1a1a1a",
            colorTextSecond: "#595959",
            colorTextLight: "#888888",
            colorBorder: "#dcdcdc",
            colorBtnSolidBg: "#1a1a1a",
            colorBtnSolidTx: "#ffffff",
            swatchDark: "#2c2e33",
            swatchIvory: "#eee5d8",
            swatchOlive: "#8f9e8b",
            swatchBlue: "#aebbc5",
            swatchBlack: "#000000",
            swatchCognac: "#a0522d",
            bestSellerLabel: "Best Seller",
            productTitle: "Le Grand Nova Ivory Liégé",
            productPrice: "$450.00",
            ratingScore: "(4.7)",
            selectedColor: "Ivory Liégé",
            descriptionText:
               "Flap 'Box' bag in calfskin, with secure brass push clasp. Back pocket. Interior lined in suede. Long and adjustable shoulder strap included. Inside pocket with bellows.",
            demoNoteText:
               "This is a demo store. To buy this product, visit Leo & Violette official store.",
            addToCartText: "Add to Cart",
            buyNowText: "Buy it Now",
            feature1Icon: "fa-bag-shopping",
            feature1Text: "Shoulder bags",
            feature2Icon: "fa-scroll",
            feature2Text: "Full Grain Leather",
            feature3Icon: "fa-sliders",
            feature3Text: "Adjustable strap",
            feature4Icon: "fa-location-dot",
            feature4Text: "Handmade in Italy",
            accordionTitle: "More Information",
            accordionBody:
               "<strong>Dimensions:</strong> 24cm x 19cm x 7cm<br><strong>Weight:</strong> 0.6 kg<br><strong>Material:</strong> Italian Calfskin Leather<br><strong>Hardware:</strong> Gold-tone brass<br><strong>Care:</strong> Clean with a soft, dry cloth.",
            thumb1Url:
               "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
            thumb1Full:
               "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            thumb1Alt: "Bag Front",
            thumb2Url:
               "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
            thumb2Full:
               "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            thumb2Alt: "Bag Side",
            thumb3Url:
               "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
            thumb3Full:
               "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            thumb3Alt: "Bag Detail",
            thumb4Url:
               "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
            thumb4Full:
               "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            thumb4Alt: "Model with Bag",
            thumb5Url:
               "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
            thumb5Full:
               "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            thumb5Alt: "Lifestyle",
         },
         accordions: [
            {
               id: "colors",
               icon: "fa-palette",
               iconBg: "#ede9fe",
               iconColor: "#7c3aed",
               title: "Colors",
               subtitle: "Background, text, button, and swatch colors",
               controls: [
                  { type: "color", label: "Background", key: "bgColor" },
                  { type: "color", label: "Text Main", key: "colorTextMain" },
                  {
                     type: "color",
                     label: "Text Secondary",
                     key: "colorTextSecond",
                  },
                  { type: "color", label: "Text Light", key: "colorTextLight" },
                  { type: "color", label: "Border", key: "colorBorder" },
                  { type: "color", label: "Button BG", key: "colorBtnSolidBg" },
                  {
                     type: "color",
                     label: "Button Text",
                     key: "colorBtnSolidTx",
                  },
               ],
            },
            {
               id: "swatches",
               icon: "fa-fill-drip",
               iconBg: "#fef3c7",
               iconColor: "#d97706",
               title: "Color Swatches",
               subtitle: "Six product color swatch values",
               controls: [
                  { type: "color", label: "Swatch Dark", key: "swatchDark" },
                  { type: "color", label: "Swatch Ivory", key: "swatchIvory" },
                  { type: "color", label: "Swatch Olive", key: "swatchOlive" },
                  { type: "color", label: "Swatch Blue", key: "swatchBlue" },
                  { type: "color", label: "Swatch Black", key: "swatchBlack" },
                  {
                     type: "color",
                     label: "Swatch Cognac",
                     key: "swatchCognac",
                  },
               ],
            },
            {
               id: "product-info",
               icon: "fa-tag",
               iconBg: "#dbeafe",
               iconColor: "#1d4ed8",
               title: "Product Info",
               subtitle: "Badge, title, price, rating, and color name",
               controls: [
                  {
                     type: "text",
                     label: "Best Seller Label",
                     key: "bestSellerLabel",
                  },
                  { type: "text", label: "Product Title", key: "productTitle" },
                  { type: "text", label: "Price", key: "productPrice" },
                  { type: "text", label: "Rating Score", key: "ratingScore" },
                  {
                     type: "text",
                     label: "Default Color",
                     key: "selectedColor",
                  },
               ],
            },
            {
               id: "content",
               icon: "fa-font",
               iconBg: "#dcfce7",
               iconColor: "#15803d",
               title: "Content",
               subtitle: "Description, demo note, and button labels",
               controls: [
                  {
                     type: "text",
                     label: "Description",
                     key: "descriptionText",
                  },
                  { type: "text", label: "Demo Note", key: "demoNoteText" },
                  {
                     type: "text",
                     label: "Add to Cart Text",
                     key: "addToCartText",
                  },
                  { type: "text", label: "Buy Now Text", key: "buyNowText" },
               ],
            },
            {
               id: "features",
               icon: "fa-layer-group",
               iconBg: "#fce7f3",
               iconColor: "#be185d",
               title: "Features Grid",
               subtitle: "Four feature icons and labels",
               controls: [
                  {
                     type: "text",
                     label: "Feature 1 Icon",
                     key: "feature1Icon",
                  },
                  {
                     type: "text",
                     label: "Feature 1 Text",
                     key: "feature1Text",
                  },
                  {
                     type: "text",
                     label: "Feature 2 Icon",
                     key: "feature2Icon",
                  },
                  {
                     type: "text",
                     label: "Feature 2 Text",
                     key: "feature2Text",
                  },
                  {
                     type: "text",
                     label: "Feature 3 Icon",
                     key: "feature3Icon",
                  },
                  {
                     type: "text",
                     label: "Feature 3 Text",
                     key: "feature3Text",
                  },
                  {
                     type: "text",
                     label: "Feature 4 Icon",
                     key: "feature4Icon",
                  },
                  {
                     type: "text",
                     label: "Feature 4 Text",
                     key: "feature4Text",
                  },
               ],
            },
            {
               id: "accordion-info",
               icon: "fa-heading",
               iconBg: "#ffedd5",
               iconColor: "#c2410c",
               title: "Accordion",
               subtitle: "More information accordion title and body",
               controls: [
                  {
                     type: "text",
                     label: "Accordion Title",
                     key: "accordionTitle",
                  },
                  {
                     type: "text",
                     label: "Accordion Body",
                     key: "accordionBody",
                  },
               ],
            },
            {
               id: "images",
               icon: "fa-image",
               iconBg: "#f0fdf4",
               iconColor: "#166534",
               title: "Images",
               subtitle: "Five thumbnail and full-size image URLs",
               controls: [
                  { type: "text", label: "Thumb 1 (small)", key: "thumb1Url" },
                  { type: "text", label: "Thumb 1 (full)", key: "thumb1Full" },
                  { type: "text", label: "Thumb 1 Alt", key: "thumb1Alt" },
                  { type: "text", label: "Thumb 2 (small)", key: "thumb2Url" },
                  { type: "text", label: "Thumb 2 (full)", key: "thumb2Full" },
                  { type: "text", label: "Thumb 2 Alt", key: "thumb2Alt" },
                  { type: "text", label: "Thumb 3 (small)", key: "thumb3Url" },
                  { type: "text", label: "Thumb 3 (full)", key: "thumb3Full" },
                  { type: "text", label: "Thumb 3 Alt", key: "thumb3Alt" },
                  { type: "text", label: "Thumb 4 (small)", key: "thumb4Url" },
                  { type: "text", label: "Thumb 4 (full)", key: "thumb4Full" },
                  { type: "text", label: "Thumb 4 Alt", key: "thumb4Alt" },
                  { type: "text", label: "Thumb 5 (small)", key: "thumb5Url" },
                  { type: "text", label: "Thumb 5 (full)", key: "thumb5Full" },
                  { type: "text", label: "Thumb 5 Alt", key: "thumb5Alt" },
               ],
            },
         ],
      },
   ],
};

export default productMainSecRegistry;
