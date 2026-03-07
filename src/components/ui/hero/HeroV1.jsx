const HeroV1 = ({ config = {} }) => {
   const {
      bgColor = "#ffffff",
      badge = "✨ New Collection",
      badgeBg = "#dbeafe",
      badgeColor = "#1d4ed8",
      title = "Build Your Shopify Store Faster",
      titleColor = "#0f172a",
      titleSize = "3rem",
      subtitle = "Beautiful, ready-to-use components for your storefront.",
      subtitleColor = "#4b5563",
      btnText = "Browse Components",
      btn2Text = "View Templates",
      btnBg = "#2563eb",
   } = config;

   return (
      <section
         style={{
            background: bgColor,
            padding: "5rem 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            fontFamily: "sans-serif",
         }}
      >
         {badge && (
            <span
               style={{
                  background: badgeBg,
                  color: badgeColor,
                  padding: "0.3rem 0.9rem",
                  borderRadius: "999px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  marginBottom: "1.25rem",
                  display: "inline-block",
               }}
            >
               {badge}
            </span>
         )}
         <h1
            style={{
               fontSize: titleSize,
               color: titleColor,
               fontWeight: 800,
               margin: "0 0 1rem",
               lineHeight: 1.15,
               maxWidth: "700px",
            }}
         >
            {title}
         </h1>
         <p
            style={{
               fontSize: "1.1rem",
               color: subtitleColor,
               maxWidth: "560px",
               margin: "0 0 2rem",
               lineHeight: 1.6,
            }}
         >
            {subtitle}
         </p>
         <div
            style={{
               display: "flex",
               gap: "0.875rem",
               flexWrap: "wrap",
               justifyContent: "center",
            }}
         >
            <button
               style={{
                  background: btnBg,
                  color: "#fff",
                  border: "none",
                  padding: "0.75rem 1.75rem",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  cursor: "pointer",
               }}
            >
               {btnText}
            </button>
            <button
               style={{
                  background: "transparent",
                  color: titleColor,
                  border: `1.5px solid ${titleColor}40`,
                  padding: "0.75rem 1.75rem",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  cursor: "pointer",
               }}
            >
               {btn2Text}
            </button>
         </div>
      </section>
   );
};

export default HeroV1;

// ── Code Generator ────────────────────────────────────────────────────────────
export const getHeroV1Code = (c = {}) => {
   const bgColor = c.bgColor || "#ffffff";
   const badge = c.badge || "✨ New Collection";
   const badgeBg = c.badgeBg || "#dbeafe";
   const badgeColor = c.badgeColor || "#1d4ed8";
   const title = c.title || "Build Your Shopify Store Faster";
   const titleColor = c.titleColor || "#0f172a";
   const titleSize = c.titleSize || "3rem";
   const subtitle =
      c.subtitle || "Beautiful, ready-to-use components for your storefront.";
   const subtitleColor = c.subtitleColor || "#4b5563";
   const btnText = c.btnText || "Browse Components";
   const btn2Text = c.btn2Text || "View Templates";
   const btnBg = c.btnBg || "#2563eb";

   return `<!-- Hero V1 — Centered | Shopify Bazzar -->
<style>
  .hero1 {
    background: ${bgColor};
    padding: 5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: sans-serif;
    box-sizing: border-box;
  }
  .hero1-badge {
    background: ${badgeBg};
    color: ${badgeColor};
    padding: 0.3rem 0.9rem;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 1.25rem;
    display: inline-block;
  }
  .hero1-title {
    font-size: ${titleSize};
    color: ${titleColor};
    font-weight: 800;
    margin: 0 0 1rem;
    line-height: 1.15;
    max-width: 700px;
  }
  .hero1-subtitle {
    font-size: 1.1rem;
    color: ${subtitleColor};
    max-width: 560px;
    margin: 0 0 2rem;
    line-height: 1.6;
  }
  .hero1-actions {
    display: flex;
    gap: 0.875rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  .hero1-btn-primary {
    background: ${btnBg};
    color: #fff;
    border: none;
    padding: 0.75rem 1.75rem;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .hero1-btn-primary:hover { opacity: 0.85; }
  .hero1-btn-secondary {
    background: transparent;
    color: ${titleColor};
    border: 1.5px solid ${titleColor}40;
    padding: 0.75rem 1.75rem;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .hero1-btn-secondary:hover { opacity: 0.7; }
  @media (max-width: 640px) {
    .hero1-title { font-size: calc(${titleSize} * 0.7); }
    .hero1 { padding: 3rem 1.25rem; }
  }
</style>

<section class="hero1">
  ${badge ? `<span class="hero1-badge">${badge}</span>` : ""}
  <h1 class="hero1-title">${title}</h1>
  <p class="hero1-subtitle">${subtitle}</p>
  <div class="hero1-actions">
    <button class="hero1-btn-primary">${btnText}</button>
    <button class="hero1-btn-secondary">${btn2Text}</button>
  </div>
</section>`;
};
