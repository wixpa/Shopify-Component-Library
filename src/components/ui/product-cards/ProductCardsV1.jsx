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
