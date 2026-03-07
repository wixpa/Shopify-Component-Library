const products = [
   {
      id: 1,
      name: "Vitamin C Serum",
      price: "$48",
      oldPrice: "$64",
      rating: 4.9,
      badge: "Best Seller",
      img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80",
   },
   {
      id: 2,
      name: "Hydrating Moisturizer",
      price: "$36",
      oldPrice: null,
      rating: 4.7,
      badge: null,
      img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
   },
   {
      id: 3,
      name: "SPF 50 Sunscreen",
      price: "$28",
      oldPrice: "$35",
      rating: 4.8,
      badge: "Sale",
      img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",
   },
   {
      id: 4,
      name: "Retinol Night Cream",
      price: "$72",
      oldPrice: null,
      rating: 4.6,
      badge: "New",
      img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80",
   },
   {
      id: 5,
      name: "Rose Water Toner",
      price: "$24",
      oldPrice: "$30",
      rating: 4.7,
      badge: null,
      img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80",
   },
];

const ProductCardsV3 = ({ config = {} }) => {
   const {
      bgColor = "#fdf2f8",
      cardBg = "#ffffff",
      titleColor = "#111827",
      priceColor = "#be185d",
      oldPriceColor = "#9ca3af",
      btnBg = "#be185d",
      btnColor = "#ffffff",
      btnText = "Add to Bag",
      sectionTitle = "Skincare Essentials",
      titleTextColor = "#0f172a",
      accentColor = "#be185d",
   } = config;

   return (
      <section
         style={{
            padding: "60px 40px",
            background: bgColor,
            fontFamily: "Inter, sans-serif",
         }}
      >
         <div
            style={{
               textAlign: "center",
               marginBottom: "36px",
            }}
         >
            <span
               style={{
                  display: "inline-block",
                  background: "#fce7f3",
                  color: accentColor,
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  padding: "4px 14px",
                  borderRadius: "999px",
                  marginBottom: "12px",
                  fontFamily: "Inter, sans-serif",
               }}
            >
               ✨ Bestsellers
            </span>
            <h2
               style={{
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  color: titleTextColor,
                  letterSpacing: "-0.025em",
               }}
            >
               {sectionTitle}
            </h2>
         </div>

         <div
            style={{
               display: "flex",
               gap: "20px",
               overflowX: "auto",
               paddingBottom: "12px",
               scrollbarWidth: "none",
            }}
         >
            {products.map((p) => (
               <div
                  key={p.id}
                  style={{
                     minWidth: "200px",
                     background: cardBg,
                     border: "1px solid #fce7f3",
                     borderRadius: "16px",
                     overflow: "hidden",
                     flexShrink: 0,
                     transition: "transform 0.2s, box-shadow 0.2s",
                     cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                     e.currentTarget.style.transform = "translateY(-4px)";
                     e.currentTarget.style.boxShadow =
                        "0 12px 24px rgba(190,24,93,0.1)";
                  }}
                  onMouseLeave={(e) => {
                     e.currentTarget.style.transform = "translateY(0)";
                     e.currentTarget.style.boxShadow = "none";
                  }}
               >
                  <div style={{ position: "relative" }}>
                     <img
                        src={p.img}
                        alt={p.name}
                        style={{
                           width: "100%",
                           height: "180px",
                           objectFit: "cover",
                           display: "block",
                        }}
                     />
                     {p.badge && (
                        <span
                           style={{
                              position: "absolute",
                              top: "10px",
                              left: "10px",
                              background: accentColor,
                              color: "#fff",
                              fontSize: "0.65rem",
                              fontWeight: 700,
                              padding: "3px 10px",
                              borderRadius: "999px",
                              fontFamily: "Inter, sans-serif",
                           }}
                        >
                           {p.badge}
                        </span>
                     )}
                  </div>
                  <div style={{ padding: "14px" }}>
                     <h3
                        style={{
                           fontSize: "0.875rem",
                           fontWeight: 600,
                           color: titleColor,
                           marginBottom: "6px",
                           fontFamily: "Inter, sans-serif",
                        }}
                     >
                        {p.name}
                     </h3>
                     <div
                        style={{
                           display: "flex",
                           alignItems: "center",
                           gap: "8px",
                           marginBottom: "12px",
                        }}
                     >
                        <span
                           style={{
                              fontWeight: 700,
                              color: priceColor,
                              fontSize: "0.95rem",
                           }}
                        >
                           {p.price}
                        </span>
                        {p.oldPrice && (
                           <span
                              style={{
                                 textDecoration: "line-through",
                                 color: oldPriceColor,
                                 fontSize: "0.8rem",
                              }}
                           >
                              {p.oldPrice}
                           </span>
                        )}
                     </div>
                     <button
                        style={{
                           width: "100%",
                           background: btnBg,
                           color: btnColor,
                           border: "none",
                           padding: "8px",
                           borderRadius: "8px",
                           fontWeight: 600,
                           fontSize: "0.8rem",
                           cursor: "pointer",
                           fontFamily: "Inter, sans-serif",
                        }}
                     >
                        {btnText}
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default ProductCardsV3;

// ── Code Generator ────────────────────────────────────────────────────────────
export const getProductCardsV3Code = (c = {}) => {
   const bgColor = c.bgColor || "#0f172a";
   const cardBg = c.cardBg || "#1e293b";
   const titleColor = c.titleColor || "#ffffff";
   const priceColor = c.priceColor || "#10b981";
   const btnBg = c.btnBg || "#10b981";
   const btnColor = c.btnColor || "#ffffff";
   const btnText = c.btnText || "Shop Now";
   const sectionTitle = c.sectionTitle || "Best Sellers";
   const titleTextColor = c.titleTextColor || "#ffffff";

   return `<!-- Product Cards V3 — Bold | Shopify Bazzar -->
<style>
  .pc3-section {
    background: ${bgColor};
    padding: 4rem 2rem;
    font-family: sans-serif;
    box-sizing: border-box;
  }
  .pc3-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .pc3-title {
    font-size: 1.75rem;
    font-weight: 800;
    color: ${titleTextColor};
    margin: 0;
  }
  .pc3-view-all {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${priceColor};
    text-decoration: none;
  }
  .pc3-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.25rem;
  }
  .pc3-card {
    background: ${cardBg};
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.2s;
  }
  .pc3-card:hover { transform: translateY(-3px); }
  .pc3-img-wrap { aspect-ratio: 1; overflow: hidden; }
  .pc3-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s;
  }
  .pc3-card:hover .pc3-img { transform: scale(1.05); }
  .pc3-body { padding: 1rem; }
  .pc3-name {
    font-size: 0.95rem;
    font-weight: 700;
    color: ${titleColor};
    margin: 0 0 0.4rem;
  }
  .pc3-price {
    font-size: 1.1rem;
    font-weight: 800;
    color: ${priceColor};
    margin: 0 0 0.75rem;
  }
  .pc3-btn {
    width: 100%;
    background: ${btnBg};
    color: ${btnColor};
    border: none;
    padding: 0.6rem;
    border-radius: 7px;
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .pc3-btn:hover { opacity: 0.85; }
</style>

<section class="pc3-section">
  <div class="pc3-header">
    <h2 class="pc3-title">${sectionTitle}</h2>
    <a href="{{ routes.collections_url }}" class="pc3-view-all">View all →</a>
  </div>
  <div class="pc3-grid">
    {%- for product in collections.frontpage.products limit: 5 -%}
    <div class="pc3-card">
      <div class="pc3-img-wrap">
        <img class="pc3-img" src="{{ product.featured_image | img_url: '400x400' }}" alt="{{ product.title }}">
      </div>
      <div class="pc3-body">
        <p class="pc3-name">{{ product.title }}</p>
        <p class="pc3-price">{{ product.price | money }}</p>
        <button class="pc3-btn" onclick="window.location='{{ product.url }}'">${btnText}</button>
      </div>
    </div>
    {%- endfor -%}
  </div>
</section>`;
};
