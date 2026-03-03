const HeaderV3 = ({ config = {} }) => {
   const {
      bgColor = "#ffffff",
      borderColor = "#e5e7eb",
      logoText = "Shopify Bazzar",
      logoColor = "#0f172a",
      logoSize = "1.25rem",
      navLinks = ["Home", "Products", "Collections", "Blog", "About"],
      linkColor = "#374151",
      searchBg = "#f3f4f6",
      btnText = "Cart (0)",
      btnBg = "#0f172a",
      btnColor = "#ffffff",
   } = config;

   return (
      <nav
         style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 40px",
            background: bgColor,
            borderBottom: `1px solid ${borderColor}`,
            fontFamily: "Inter, sans-serif",
            gap: "24px",
         }}
      >
         <div
            style={{
               fontWeight: 800,
               fontSize: logoSize,
               color: logoColor,
               letterSpacing: "-0.025em",
               whiteSpace: "nowrap",
               cursor: "pointer",
            }}
         >
            {logoText}
         </div>

         <div
            style={{
               flex: 1,
               display: "flex",
               justifyContent: "center",
               gap: "28px",
            }}
         >
            {navLinks.map((link) => (
               <a
                  key={link}
                  href="#"
                  style={{
                     color: linkColor,
                     textDecoration: "none",
                     fontSize: "0.875rem",
                     fontWeight: 500,
                     fontFamily: "Inter, sans-serif",
                     whiteSpace: "nowrap",
                  }}
               >
                  {link}
               </a>
            ))}
         </div>

         <div
            style={{
               display: "flex",
               alignItems: "center",
               gap: "10px",
               flexShrink: 0,
            }}
         >
            <div
               style={{
                  background: searchBg,
                  borderRadius: "20px",
                  padding: "7px 14px",
                  fontSize: "0.8rem",
                  color: "#9ca3af",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "text",
                  fontFamily: "Inter, sans-serif",
               }}
            >
               🔍 Search...
            </div>
            <button
               style={{
                  background: btnBg,
                  color: btnColor,
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  whiteSpace: "nowrap",
               }}
            >
               {btnText}
            </button>
         </div>
      </nav>
   );
};

export default HeaderV3;
