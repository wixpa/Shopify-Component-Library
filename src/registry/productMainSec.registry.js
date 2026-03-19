import ProductMainSecV1, {
   getProductMainSecV1Code,
} from "../components/ui/product-main-sec/ProductMainSecV1";

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
   ],
};

export default productMainSecRegistry;
