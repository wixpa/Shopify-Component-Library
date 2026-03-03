const HeaderV1 = ({ config = {} }) => {
   const {
      bgColor = "#ffffff",
      borderColor = "#e5e7eb",
      logoText = "Shopify Bazzar",
      logoSize = "1.25rem",
      logoColor = "#0f172a",
      navLinks = ["Home", "Products", "Collections", "About"],
      linkColor = "#374151",
      btnText = "Get Started",
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
            borderBottom: `1px solid ${borderColor}`,
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
                     transition: "color 0.2s",
                  }}
               >
                  {link}
               </a>
            ))}
         </div>

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
      </nav>
   );
};

export default HeaderV1;
