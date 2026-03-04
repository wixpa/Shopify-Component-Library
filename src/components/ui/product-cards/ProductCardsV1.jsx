const products = [
   {
      id: 1,
      name: "Classic White Tee",
      price: "$29.99",
      oldPrice: "$49.99",
      badge: "Sale",
      rating: 4.8,
      reviews: 124,
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
   },
   {
      id: 2,
      name: "Slim Fit Jeans",
      price: "$79.99",
      oldPrice: null,
      badge: "New",
      rating: 4.6,
      reviews: 89,
      img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80",
   },
   {
      id: 3,
      name: "Running Sneakers",
      price: "$119.99",
      oldPrice: "$149.99",
      badge: "Hot",
      rating: 4.9,
      reviews: 256,
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
   },
   {
      id: 4,
      name: "Leather Backpack",
      price: "$89.99",
      oldPrice: null,
      badge: null,
      rating: 4.7,
      reviews: 67,
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
   },
   {
      id: 5,
      name: "Wireless Headphones",
      price: "$199.99",
      oldPrice: "$249.99",
      badge: "Best Seller",
      rating: 4.9,
      reviews: 512,
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
   },
];

const StarRating = ({ rating }) => (
   <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((s) => (
         <span
            key={s}
            style={{
               color: s <= Math.round(rating) ? "#f59e0b" : "#d1d5db",
               fontSize: "0.75rem",
            }}
         >
            ★
         </span>
      ))}
   </div>
);

const ProductCardsV1 = ({ config = {} }) => {
   const {
      bgColor = "#ffffff",
      cardBg = "#ffffff",
      titleColor = "#0f172a",
      priceColor = "#0f172a",
      oldPriceColor = "#9ca3af",
      btnBg = "#0f172a",
      btnColor = "#ffffff",
      btnText = "Add to Cart",
      badgeBg = "#ef4444",
      badgeColor = "#ffffff",
      sectionTitle = "Featured Products",
      titleTextColor = "#0f172a",
   } = config;

   return (
      <section
         style={{
            padding: "60px 40px",
            background: bgColor,
            fontFamily: "Inter, sans-serif",
         }}
      >
         <h2
            style={{
               fontSize: "1.75rem",
               fontWeight: 800,
               color: titleTextColor,
               marginBottom: "32px",
               letterSpacing: "-0.025em",
            }}
         >
            {sectionTitle}
         </h2>

         {/* Slider row */}
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
                     minWidth: "220px",
                     background: cardBg,
                     border: "1px solid #e5e7eb",
                     borderRadius: "12px",
                     overflow: "hidden",
                     flexShrink: 0,
                     transition: "box-shadow 0.2s, transform 0.2s",
                     cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                     e.currentTarget.style.transform = "translateY(-4px)";
                     e.currentTarget.style.boxShadow =
                        "0 12px 24px rgba(0,0,0,0.1)";
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
                           height: "200px",
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
                              background: badgeBg,
                              color: badgeColor,
                              fontSize: "0.7rem",
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
                  <div style={{ padding: "16px" }}>
                     <h3
                        style={{
                           fontSize: "0.95rem",
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
                           gap: "6px",
                           marginBottom: "8px",
                        }}
                     >
                        <StarRating rating={p.rating} />
                        <span
                           style={{
                              fontSize: "0.75rem",
                              color: "#6b7280",
                              fontFamily: "Inter, sans-serif",
                           }}
                        >
                           ({p.reviews})
                        </span>
                     </div>
                     <div
                        style={{
                           display: "flex",
                           alignItems: "center",
                           gap: "8px",
                           marginBottom: "14px",
                        }}
                     >
                        <span
                           style={{
                              fontWeight: 700,
                              color: priceColor,
                              fontSize: "1rem",
                              fontFamily: "Inter, sans-serif",
                           }}
                        >
                           {p.price}
                        </span>
                        {p.oldPrice && (
                           <span
                              style={{
                                 textDecoration: "line-through",
                                 color: oldPriceColor,
                                 fontSize: "0.85rem",
                                 fontFamily: "Inter, sans-serif",
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
                           padding: "9px",
                           borderRadius: "6px",
                           fontWeight: 600,
                           fontSize: "0.85rem",
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

export default ProductCardsV1;

// ── Code Generator ────────────────────────────────────────────────────────────
export const getProductCardsV1Code = (c = {}) => {
   const bgColor = c.bgColor || "#ffffff";
   const cardBg = c.cardBg || "#ffffff";
   const titleColor = c.titleColor || "#111827";
   const priceColor = c.priceColor || "#111827";
   const oldPriceColor = c.oldPriceColor || "#9ca3af";
   const btnBg = c.btnBg || "#111827";
   const btnColor = c.btnColor || "#ffffff";
   const btnText = c.btnText || "Add to Cart";
   const sectionTitle = c.sectionTitle || "Featured Products";
   const titleTextColor = c.titleTextColor || "#0f172a";

   return `<!-- Product Cards V1 — Classic | Shopify Bazzar -->
<style>
  .pc1-section {
    background: ${bgColor};
    padding: 4rem 2rem;
    font-family: sans-serif;
    box-sizing: border-box;
  }
  .pc1-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .pc1-title {
    font-size: 1.75rem;
    font-weight: 800;
    color: ${titleTextColor};
    margin: 0;
  }
  .pc1-view-all {
    font-size: 0.875rem;
    font-weight: 600;
    color: #2563eb;
    text-decoration: none;
  }
  .pc1-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
  }
  .pc1-card {
    background: ${cardBg};
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .pc1-card:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    transform: translateY(-2px);
  }
  .pc1-img-wrap { position: relative; aspect-ratio: 1; overflow: hidden; }
  .pc1-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }
  .pc1-card:hover .pc1-img { transform: scale(1.04); }
  .pc1-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #ef4444;
    color: #fff;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 4px;
  }
  .pc1-body { padding: 1rem; }
  .pc1-rating {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 0.4rem;
    font-size: 0.75rem;
    color: #f59e0b;
  }
  .pc1-rating-count { color: #9ca3af; }
  .pc1-name {
    font-size: 0.95rem;
    font-weight: 600;
    color: ${titleColor};
    margin: 0 0 0.5rem;
  }
  .pc1-prices {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }
  .pc1-price { font-size: 1rem; font-weight: 700; color: ${priceColor}; }
  .pc1-old-price {
    font-size: 0.85rem;
    color: ${oldPriceColor};
    text-decoration: line-through;
  }
  .pc1-btn {
    width: 100%;
    background: ${btnBg};
    color: ${btnColor};
    border: none;
    padding: 0.6rem;
    border-radius: 7px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .pc1-btn:hover { opacity: 0.85; }
</style>

<section class="pc1-section">
  <div class="pc1-header">
    <h2 class="pc1-title">${sectionTitle}</h2>
    <a href="{{ routes.collections_url }}" class="pc1-view-all">View all →</a>
  </div>
  <div class="pc1-grid">
    {%- for product in collections.frontpage.products limit: 5 -%}
    <div class="pc1-card">
      <div class="pc1-img-wrap">
        <img class="pc1-img" src="{{ product.featured_image | img_url: '400x400' }}" alt="{{ product.title }}">
        {%- if product.compare_at_price > product.price -%}
        <span class="pc1-badge">Sale</span>
        {%- endif -%}
      </div>
      <div class="pc1-body">
        <div class="pc1-rating">★★★★★ <span class="pc1-rating-count">({{ product.metafields.reviews.rating_count | default: 0 }})</span></div>
        <p class="pc1-name">{{ product.title }}</p>
        <div class="pc1-prices">
          <span class="pc1-price">{{ product.price | money }}</span>
          {%- if product.compare_at_price > product.price -%}
          <span class="pc1-old-price">{{ product.compare_at_price | money }}</span>
          {%- endif -%}
        </div>
        <button class="pc1-btn" onclick="window.location='{{ product.url }}'">${btnText}</button>
      </div>
    </div>
    {%- endfor -%}
  </div>
</section>`;
};
