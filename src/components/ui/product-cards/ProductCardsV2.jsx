const products = [
   {
      id: 1,
      name: "Minimal Watch",
      price: "$249",
      tag: "New",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
   },
   {
      id: 2,
      name: "Canvas Tote Bag",
      price: "$45",
      tag: null,
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80",
   },
   {
      id: 3,
      name: "Ceramic Mug",
      price: "$28",
      tag: "Hot",
      img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80",
   },
   {
      id: 4,
      name: "Scented Candle Set",
      price: "$56",
      tag: null,
      img: "https://images.unsplash.com/photo-1603905823598-ad3fc77d8df6?w=400&q=80",
   },
   {
      id: 5,
      name: "Silk Pillowcase",
      price: "$79",
      tag: "Sale",
      img: "https://images.unsplash.com/photo-1616627561839-074385245ff6?w=400&q=80",
   },
];

const ProductCardsV2 = ({ config = {} }) => {
   const {
      bgColor = "#fafafa",
      cardBg = "#ffffff",
      titleColor = "#111827",
      priceColor = "#111827",
      btnBg = "#ffffff",
      btnBorder = "#111827",
      btnColor = "#111827",
      btnText = "Quick Add",
      sectionTitle = "New Arrivals",
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
         <div
            style={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               marginBottom: "28px",
            }}
         >
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
            <a
               href="#"
               style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#2563eb",
                  textDecoration: "none",
               }}
            >
               View all →
            </a>
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
                     flexShrink: 0,
                     cursor: "pointer",
                  }}
               >
                  <div
                     style={{
                        position: "relative",
                        background: cardBg,
                        borderRadius: "8px",
                        overflow: "hidden",
                        marginBottom: "12px",
                     }}
                  >
                     <img
                        src={p.img}
                        alt={p.name}
                        style={{
                           width: "100%",
                           height: "220px",
                           objectFit: "cover",
                           display: "block",
                           transition: "transform 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                           e.target.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                           e.target.style.transform = "scale(1)";
                        }}
                     />
                     {p.tag && (
                        <span
                           style={{
                              position: "absolute",
                              top: "10px",
                              right: "10px",
                              background: "#111827",
                              color: "#ffffff",
                              fontSize: "0.65rem",
                              fontWeight: 700,
                              padding: "3px 10px",
                              borderRadius: "999px",
                              fontFamily: "Inter, sans-serif",
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                           }}
                        >
                           {p.tag}
                        </span>
                     )}
                     <div
                        style={{
                           position: "absolute",
                           bottom: "10px",
                           left: "10px",
                           right: "10px",
                           opacity: 0,
                           transition: "opacity 0.2s",
                        }}
                        onMouseEnter={(e) => {
                           e.currentTarget.style.opacity = "1";
                        }}
                     >
                        <button
                           style={{
                              width: "100%",
                              background: btnBg,
                              color: btnColor,
                              border: `1px solid ${btnBorder}`,
                              padding: "8px",
                              borderRadius: "6px",
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

                  <div>
                     <h3
                        style={{
                           fontSize: "0.9rem",
                           fontWeight: 600,
                           color: titleColor,
                           marginBottom: "4px",
                           fontFamily: "Inter, sans-serif",
                        }}
                     >
                        {p.name}
                     </h3>
                     <span
                        style={{
                           fontSize: "0.9rem",
                           fontWeight: 700,
                           color: priceColor,
                           fontFamily: "Inter, sans-serif",
                        }}
                     >
                        {p.price}
                     </span>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default ProductCardsV2;

// ── Code Generator ────────────────────────────────────────────────────────────
export const getProductCardsV2Code = (c = {}) => {
   const bgColor = c.bgColor || "#fafafa";
   const cardBg = c.cardBg || "#ffffff";
   const titleColor = c.titleColor || "#111827";
   const priceColor = c.priceColor || "#111827";
   const btnBg = c.btnBg || "#ffffff";
   const btnBorder = c.btnBorder || "#111827";
   const btnColor = c.btnColor || "#111827";
   const btnText = c.btnText || "Quick Add";
   const sectionTitle = c.sectionTitle || "New Arrivals";
   const titleTextColor = c.titleTextColor || "#0f172a";

   return `<!-- Product Cards V2 — Minimal | Shopify Bazzar -->
<style>
  .pc2-section {
    background: ${bgColor};
    padding: 4rem 2rem;
    font-family: sans-serif;
    box-sizing: border-box;
  }
  .pc2-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .pc2-title {
    font-size: 1.75rem;
    font-weight: 800;
    color: ${titleTextColor};
    margin: 0;
  }
  .pc2-view-all {
    font-size: 0.875rem;
    font-weight: 600;
    color: #111827;
    text-decoration: none;
  }
  .pc2-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.25rem;
  }
  .pc2-card {
    background: ${cardBg};
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }
  .pc2-img-wrap { position: relative; aspect-ratio: 1; overflow: hidden; }
  .pc2-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s;
  }
  .pc2-card:hover .pc2-img { transform: scale(1.05); }
  .pc2-tag {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #111827;
    color: #fff;
    font-size: 0.65rem;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .pc2-quick-add {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: ${btnBg};
    color: ${btnColor};
    border: 1px solid ${btnBorder};
    padding: 0.45rem 1.1rem;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.2s;
  }
  .pc2-card:hover .pc2-quick-add { opacity: 1; }
  .pc2-body { padding: 0.75rem 0.5rem; }
  .pc2-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${titleColor};
    margin: 0 0 0.25rem;
  }
  .pc2-price { font-size: 0.9rem; font-weight: 700; color: ${priceColor}; }
</style>

<section class="pc2-section">
  <div class="pc2-header">
    <h2 class="pc2-title">${sectionTitle}</h2>
    <a href="{{ routes.collections_url }}" class="pc2-view-all">View all →</a>
  </div>
  <div class="pc2-grid">
    {%- for product in collections.frontpage.products limit: 5 -%}
    <div class="pc2-card">
      <div class="pc2-img-wrap">
        <img class="pc2-img" src="{{ product.featured_image | img_url: '400x400' }}" alt="{{ product.title }}">
        {%- if product.tags contains 'new' -%}<span class="pc2-tag">New</span>{%- endif -%}
        <button class="pc2-quick-add" onclick="window.location='{{ product.url }}'">${btnText}</button>
      </div>
      <div class="pc2-body">
        <p class="pc2-name">{{ product.title }}</p>
        <span class="pc2-price">{{ product.price | money }}</span>
      </div>
    </div>
    {%- endfor -%}
  </div>
</section>`;
};
