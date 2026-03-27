const HeroV3 = ({ config = {} }) => {
   const {
      bgColor = "#f0fdf4",
      badge = "🌿 Eco-friendly designs",
      badgeBg = "#dcfce7",
      badgeColor = "#15803d",
      title = "Grow Your Shopify Revenue",
      titleColor = "#0f172a",
      titleSize = "2.75rem",
      subtitle = "High-converting sections built for modern Shopify stores.",
      subtitleColor = "#4b5563",
      btnText = "Get Free Components",
      btnBg = "#16a34a",
      btnColor = "#ffffff",
      statsData = [
         { value: "50+", label: "Components" },
         { value: "10K+", label: "Developers" },
         { value: "100%", label: "Free" },
      ],
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
         <button
            style={{
               background: btnBg,
               color: btnColor,
               border: "none",
               padding: "0.75rem 1.75rem",
               borderRadius: "8px",
               fontSize: "0.95rem",
               fontWeight: 600,
               cursor: "pointer",
               marginBottom: "3rem",
            }}
         >
            {btnText}
         </button>
         <div
            style={{
               display: "flex",
               gap: "3rem",
               flexWrap: "wrap",
               justifyContent: "center",
            }}
         >
            {statsData.map((stat, i) => (
               <div
                  key={i}
                  style={{
                     display: "flex",
                     flexDirection: "column",
                     alignItems: "center",
                  }}
               >
                  <span
                     style={{
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        color: titleColor,
                     }}
                  >
                     {stat.value}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: subtitleColor }}>
                     {stat.label}
                  </span>
               </div>
            ))}
         </div>
      </section>
   );
};

export default HeroV3;

// ── Code Generator ────────────────────────────────────────────────────────────
export const getHeroV3Code = (c = {}) => {
   const bgColor = c.bgColor || "#f0fdf4";
   const badge = c.badge || "🌿 Eco-friendly designs";
   const badgeBg = c.badgeBg || "#dcfce7";
   const badgeColor = c.badgeColor || "#15803d";
   const title = c.title || "Grow Your Shopify Revenue";
   const titleColor = c.titleColor || "#0f172a";
   const titleSize = c.titleSize || "2.75rem";
   const subtitle =
      c.subtitle || "High-converting sections built for modern Shopify stores.";
   const subtitleColor = c.subtitleColor || "#4b5563";
   const btnText = c.btnText || "Get Free Components";
   const btnBg = c.btnBg || "#16a34a";
   const btnColor = c.btnColor || "#ffffff";
   const statsData = c.statsData || [
      { value: "50+", label: "Components" },
      { value: "10K+", label: "Developers" },
      { value: "100%", label: "Free" },
   ];

   return `<!-- Hero V3 — With Stats | Shopify Bazzar -->
<style>
  .hero3 {
    background: ${bgColor};
    padding: 5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: sans-serif;
    box-sizing: border-box;
  }
  .hero3-badge {
    background: ${badgeBg};
    color: ${badgeColor};
    padding: 0.3rem 0.9rem;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 1.25rem;
    display: inline-block;
  }
  .hero3-title {
    font-size: ${titleSize};
    color: ${titleColor};
    font-weight: 800;
    margin: 0 0 1rem;
    line-height: 1.15;
    max-width: 700px;
  }
  .hero3-subtitle {
    font-size: 1.1rem;
    color: ${subtitleColor};
    max-width: 560px;
    margin: 0 0 2rem;
    line-height: 1.6;
  }
  .hero3-btn {
    background: ${btnBg};
    color: ${btnColor};
    border: none;
    padding: 0.75rem 1.75rem;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 3rem;
    transition: opacity 0.2s;
  }
  .hero3-btn:hover { opacity: 0.85; }
  .hero3-stats {
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  .hero3-stat { display: flex; flex-direction: column; align-items: center; }
  .hero3-stat-value {
    font-size: 1.75rem;
    font-weight: 800;
    color: ${titleColor};
  }
  .hero3-stat-label {
    font-size: 0.85rem;
    color: ${subtitleColor};
  }
  @media (max-width: 640px) {
    .hero3-title { font-size: calc(${titleSize} * 0.75); }
    .hero3 { padding: 3rem 1.25rem; }
    .hero3-stats { gap: 1.5rem; }
  }
</style>

<section class="hero3">
  ${badge ? `<span class="hero3-badge">${badge}</span>` : ""}
  <h1 class="hero3-title">${title}</h1>
  <p class="hero3-subtitle">${subtitle}</p>
  <button class="hero3-btn">${btnText}</button>
  <div class="hero3-stats">
    ${statsData
       .map(
          (s) => `<div class="hero3-stat">
      <span class="hero3-stat-value">${s.value}</span>
      <span class="hero3-stat-label">${s.label}</span>
    </div>`,
       )
       .join("\n    ")}
  </div>
</section>`;
};
