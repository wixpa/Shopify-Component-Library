const HeaderV2 = ({ config = {} }) => {
   const {
      bgColor = "#0f172a",
      logoText = "Shopify Bazzar",
      logoColor = "#ffffff",
      logoSize = "1.25rem",
      navLinks = ["Home", "Products", "Collections", "About"],
      linkColor = "#94a3b8",
      linkHover = "#ffffff",
      btnText = "Shop Now",
      btnBg = "#2563eb",
      btnColor = "#ffffff",
   } = config;

   return (
      <nav
         style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 40px",
            background: bgColor,
            fontFamily: "Inter, sans-serif",
         }}
      >
         <div
            style={{
               fontWeight: 800,
               fontSize: logoSize,
               color: logoColor,
               letterSpacing: "-0.025em",
               cursor: "pointer",
            }}
         >
            {logoText}
         </div>

         <div style={{ display: "flex", gap: "32px" }}>
            {navLinks.map((link) => (
               <a
                  key={link}
                  href="#"
                  style={{
                     color: linkColor,
                     textDecoration: "none",
                     fontSize: "0.9rem",
                     fontWeight: 500,
                     fontFamily: "Inter, sans-serif",
                  }}
               >
                  {link}
               </a>
            ))}
         </div>

         <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <button
               style={{
                  background: "transparent",
                  color: linkColor,
                  border: `1px solid #334155`,
                  padding: "8px 18px",
                  borderRadius: "6px",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
               }}
            >
               Sign In
            </button>
            <button
               style={{
                  background: btnBg,
                  color: btnColor,
                  border: "none",
                  padding: "9px 22px",
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
               }}
            >
               {btnText}
            </button>
         </div>
      </nav>
   );
};

export default HeaderV2;
