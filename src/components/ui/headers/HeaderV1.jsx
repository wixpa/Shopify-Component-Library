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
      <header
         style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 2rem",
            height: "64px",
            background: bgColor,
            borderBottom: `1px solid ${borderColor}`,
            fontFamily: "sans-serif",
         }}
      >
         <span
            style={{ fontWeight: 700, fontSize: logoSize, color: logoColor }}
         >
            {logoText}
         </span>
         <nav style={{ display: "flex", gap: "1.5rem" }}>
            {navLinks.map((link) => (
               <a
                  key={link}
                  href="#"
                  style={{
                     color: linkColor,
                     fontSize: "0.9rem",
                     textDecoration: "none",
                  }}
               >
                  {link}
               </a>
            ))}
         </nav>
         <button
            style={{
               background: btnBg,
               color: btnColor,
               border: "none",
               padding: "0.5rem 1.25rem",
               borderRadius: "6px",
               fontSize: "0.875rem",
               fontWeight: 600,
               cursor: "pointer",
            }}
         >
            {btnText}
         </button>
      </header>
   );
};

export default HeaderV1;

// ── Code Generator ────────────────────────────────────────────────────────────
// Returns self-contained HTML + CSS string to paste into Shopify Custom Liquid
// ─────────────────────────────────────────────────────────────────────────────
export const getHeaderV1Code = (c = {}) => {
   const bgColor = c.bgColor || "#ffffff";
   const borderColor = c.borderColor || "#e5e7eb";
   const logoText = c.logoText || "Shopify Bazzar";
   const logoSize = c.logoSize || "1.25rem";
   const logoColor = c.logoColor || "#0f172a";
   const navLinks = c.navLinks || ["Home", "Products", "Collections", "About"];
   const linkColor = c.linkColor || "#374151";
   const btnText = c.btnText || "Get Started";
   const btnBg = c.btnBg || "#2563eb";
   const btnColor = c.btnColor || "#ffffff";

   return `<!-- Header V1 — Classic | Shopify Bazzar -->
<style>
  .hv1-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    height: 64px;
    background: ${bgColor};
    border-bottom: 1px solid ${borderColor};
    font-family: sans-serif;
    box-sizing: border-box;
  }
  .hv1-logo {
    font-weight: 700;
    font-size: ${logoSize};
    color: ${logoColor};
    text-decoration: none;
  }
  .hv1-nav {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .hv1-nav a {
    color: ${linkColor};
    font-size: 0.9rem;
    text-decoration: none;
    transition: opacity 0.2s;
  }
  .hv1-nav a:hover { opacity: 0.7; }
  .hv1-btn {
    background: ${btnBg};
    color: ${btnColor};
    border: none;
    padding: 0.5rem 1.25rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .hv1-btn:hover { opacity: 0.85; }
  @media (max-width: 768px) {
    .hv1-nav { display: none; }
  }
</style>

<header class="hv1-header">
  <a href="{{ routes.root_url }}" class="hv1-logo">${logoText}</a>
  <nav>
    <ul class="hv1-nav">
      ${navLinks.map((l) => `<li><a href="#">${l}</a></li>`).join("\n      ")}
    </ul>
  </nav>
  <button class="hv1-btn">${btnText}</button>
</header>`;
};
