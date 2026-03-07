const HeaderV2 = ({ config = {} }) => {
   const {
      bgColor = "#0f172a",
      logoText = "Shopify Bazzar",
      logoColor = "#ffffff",
      logoSize = "1.25rem",
      navLinks = ["Home", "Products", "Collections", "About"],
      linkColor = "#94a3b8",
      btnText = "Shop Now",
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
         <div style={{ display: "flex", gap: "0.75rem" }}>
            <button
               style={{
                  background: "transparent",
                  color: linkColor,
                  border: `1px solid ${linkColor}`,
                  padding: "0.45rem 1rem",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  cursor: "pointer",
               }}
            >
               Sign In
            </button>
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

export default HeaderV2;

// ── Code Generator ────────────────────────────────────────────────────────────
export const getHeaderV2Code = (c = {}) => {
   const bgColor = c.bgColor || "#0f172a";
   const logoText = c.logoText || "Shopify Bazzar";
   const logoSize = c.logoSize || "1.25rem";
   const logoColor = c.logoColor || "#ffffff";
   const navLinks = c.navLinks || ["Home", "Products", "Collections", "About"];
   const linkColor = c.linkColor || "#94a3b8";
   const btnText = c.btnText || "Shop Now";
   const btnBg = c.btnBg || "#2563eb";
   const btnColor = c.btnColor || "#ffffff";

   return `<!-- Header V2 — Dark | Shopify Bazzar -->
<style>
  .hv2-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    height: 64px;
    background: ${bgColor};
    font-family: sans-serif;
    box-sizing: border-box;
  }
  .hv2-logo {
    font-weight: 700;
    font-size: ${logoSize};
    color: ${logoColor};
    text-decoration: none;
  }
  .hv2-nav {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .hv2-nav a {
    color: ${linkColor};
    font-size: 0.9rem;
    text-decoration: none;
    transition: color 0.2s;
  }
  .hv2-nav a:hover { color: #ffffff; }
  .hv2-actions { display: flex; gap: 0.75rem; }
  .hv2-btn-ghost {
    background: transparent;
    color: ${linkColor};
    border: 1px solid ${linkColor};
    padding: 0.45rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  .hv2-btn-ghost:hover {
    color: #ffffff;
    border-color: #ffffff;
  }
  .hv2-btn {
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
  .hv2-btn:hover { opacity: 0.85; }
  @media (max-width: 768px) {
    .hv2-nav { display: none; }
  }
</style>

<header class="hv2-header">
  <a href="{{ routes.root_url }}" class="hv2-logo">${logoText}</a>
  <nav>
    <ul class="hv2-nav">
      ${navLinks.map((l) => `<li><a href="#">${l}</a></li>`).join("\n      ")}
    </ul>
  </nav>
  <div class="hv2-actions">
    <button class="hv2-btn-ghost">Sign In</button>
    <button class="hv2-btn">${btnText}</button>
  </div>
</header>`;
};
