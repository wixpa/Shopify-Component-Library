const HeroV2 = ({ config = {} }) => {
   const {
      bgColor = "#0f172a",
      badge = "🚀 Launch Ready",
      badgeBg = "rgba(79,70,229,0.2)",
      badgeColor = "#818cf8",
      title = "Your Store, Elevated",
      titleColor = "#ffffff",
      titleSize = "3rem",
      subtitle = "Premium Shopify components that convert visitors into customers.",
      subtitleColor = "#94a3b8",
      btnText = "Start Building",
      btnBg = "#4f46e5",
      btnColor = "#ffffff",
   } = config;

   return (
      <section
         style={{
            background: bgColor,
            padding: "5rem 2rem",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            fontFamily: "sans-serif",
         }}
      >
         {/* Glow */}
         <div
            style={{
               position: "absolute",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               width: "600px",
               height: "600px",
               background:
                  "radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)",
               pointerEvents: "none",
            }}
         />
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
                  position: "relative",
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
               position: "relative",
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
               position: "relative",
            }}
         >
            {subtitle}
         </p>
         <button
            style={{
               background: btnBg,
               color: btnColor,
               border: "none",
               padding: "0.8rem 2rem",
               borderRadius: "8px",
               fontSize: "0.95rem",
               fontWeight: 600,
               cursor: "pointer",
               position: "relative",
            }}
         >
            {btnText}
         </button>
      </section>
   );
};

export default HeroV2;

// ── Code Generator ────────────────────────────────────────────────────────────
export const getHeroV2Code = (c = {}) => {
   const bgColor = c.bgColor || "#0f172a";
   const badge = c.badge || "🚀 Launch Ready";
   const badgeBg = c.badgeBg || "rgba(79,70,229,0.2)";
   const badgeColor = c.badgeColor || "#818cf8";
   const title = c.title || "Your Store, Elevated";
   const titleColor = c.titleColor || "#ffffff";
   const titleSize = c.titleSize || "3rem";
   const subtitle =
      c.subtitle ||
      "Premium Shopify components that convert visitors into customers.";
   const subtitleColor = c.subtitleColor || "#94a3b8";
   const btnText = c.btnText || "Start Building";
   const btnBg = c.btnBg || "#4f46e5";
   const btnColor = c.btnColor || "#ffffff";

   return `<!-- Hero V2 — Dark | Shopify Bazzar -->
<style>
  .hero2 {
    background: ${bgColor};
    padding: 5rem 2rem;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: sans-serif;
    box-sizing: border-box;
  }
  .hero2-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero2-badge {
    background: ${badgeBg};
    color: ${badgeColor};
    padding: 0.3rem 0.9rem;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 1.25rem;
    display: inline-block;
    position: relative;
  }
  .hero2-title {
    font-size: ${titleSize};
    color: ${titleColor};
    font-weight: 800;
    margin: 0 0 1rem;
    line-height: 1.15;
    max-width: 700px;
    position: relative;
  }
  .hero2-subtitle {
    font-size: 1.1rem;
    color: ${subtitleColor};
    max-width: 560px;
    margin: 0 0 2rem;
    line-height: 1.6;
    position: relative;
  }
  .hero2-btn {
    background: ${btnBg};
    color: ${btnColor};
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    transition: opacity 0.2s;
  }
  .hero2-btn:hover { opacity: 0.85; }
  @media (max-width: 640px) {
    .hero2-title { font-size: calc(${titleSize} * 0.7); }
    .hero2 { padding: 3rem 1.25rem; }
  }
</style>

<section class="hero2">
  <div class="hero2-glow"></div>
  ${badge ? `<span class="hero2-badge">${badge}</span>` : ""}
  <h1 class="hero2-title">${title}</h1>
  <p class="hero2-subtitle">${subtitle}</p>
  <button class="hero2-btn">${btnText}</button>
</section>`;
};
