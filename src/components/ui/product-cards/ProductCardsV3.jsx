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
