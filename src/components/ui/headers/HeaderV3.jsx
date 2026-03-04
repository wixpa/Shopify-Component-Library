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
            gap: "1rem",
            boxSizing: "border-box",
         }}
      >
         <span
            style={{
               fontWeight: 700,
               fontSize: logoSize,
               color: logoColor,
               flexShrink: 0,
            }}
         >
            {logoText}
         </span>
         <nav style={{ display: "flex", gap: "1.25rem" }}>
            {navLinks.map((link) => (
               <a
                  key={link}
                  href="#"
                  style={{
                     color: linkColor,
                     fontSize: "0.875rem",
                     textDecoration: "none",
                  }}
               >
                  {link}
               </a>
            ))}
         </nav>
         <div
            style={{
               display: "flex",
               alignItems: "center",
               gap: "0.75rem",
               flexShrink: 0,
            }}
         >
            <div
               style={{
                  background: searchBg,
                  borderRadius: "6px",
                  padding: "0.4rem 0.85rem",
                  fontSize: "0.82rem",
                  color: "#9ca3af",
                  cursor: "pointer",
               }}
            >
               🔍 Search...
            </div>
            <button
               style={{
                  background: btnBg,
                  color: btnColor,
                  border: "none",
                  padding: "0.45rem 1rem",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  cursor: "pointer",
               }}
            >
               {btnText}
            </button>
         </div>
      </header>
   );
};

export default HeaderV3;

// ── Code Generator ────────────────────────────────────────────────────────────
export const getHeaderV3Code = (c = {}) => {
   const bgColor = c.bgColor || "#ffffff";
   const borderColor = c.borderColor || "#e5e7eb";
   const logoText = c.logoText || "Shopify Bazzar";
   const logoSize = c.logoSize || "1.25rem";
   const logoColor = c.logoColor || "#0f172a";
   const navLinks = c.navLinks || [
      "Home",
      "Products",
      "Collections",
      "Blog",
      "About",
   ];
   const linkColor = c.linkColor || "#374151";
   const searchBg = c.searchBg || "#f3f4f6";
   const btnText = c.btnText || "Cart (0)";
   const btnBg = c.btnBg || "#0f172a";
   const btnColor = c.btnColor || "#ffffff";

   return `<!-- Header V3 — With Search | Shopify Bazzar -->
<style>
  .hv3-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    height: 64px;
    background: ${bgColor};
    border-bottom: 1px solid ${borderColor};
    font-family: sans-serif;
    gap: 1rem;
    box-sizing: border-box;
  }
  .hv3-logo {
    font-weight: 700;
    font-size: ${logoSize};
    color: ${logoColor};
    text-decoration: none;
    flex-shrink: 0;
  }
  .hv3-nav {
    display: flex;
    gap: 1.25rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .hv3-nav a {
    color: ${linkColor};
    font-size: 0.875rem;
    text-decoration: none;
    transition: opacity 0.2s;
  }
  .hv3-nav a:hover { opacity: 0.7; }
  .hv3-right {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-shrink: 0;
  }
  .hv3-search {
    background: ${searchBg};
    border-radius: 6px;
    padding: 0.4rem 0.85rem;
    font-size: 0.82rem;
    color: #9ca3af;
    cursor: pointer;
    border: none;
    font-family: sans-serif;
  }
  .hv3-btn {
    background: ${btnBg};
    color: ${btnColor};
    border: none;
    padding: 0.45rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .hv3-btn:hover { opacity: 0.85; }
  @media (max-width: 768px) {
    .hv3-nav { display: none; }
  }
</style>

<header class="hv3-header">
  <a href="{{ routes.root_url }}" class="hv3-logo">${logoText}</a>
  <nav>
    <ul class="hv3-nav">
      ${navLinks.map((l) => `<li><a href="#">${l}</a></li>`).join("\n      ")}
    </ul>
  </nav>
  <div class="hv3-right">
    <button class="hv3-search">🔍 Search...</button>
    <button class="hv3-btn">${btnText}</button>
  </div>
</header>`;
};
