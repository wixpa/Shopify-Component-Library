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
