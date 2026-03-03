const HeroV1 = ({ config = {} }) => {
   const {
      bgColor = "#ffffff",
      badge = "✨ New Collection",
      badgeBg = "#dbeafe",
      badgeColor = "#1d4ed8",
      title = "Build Your Shopify Store Faster",
      titleColor = "#0f172a",
      titleSize = "3rem",
      subtitle = "Beautiful, ready-to-use components for your storefront. Just copy, paste, and customize.",
      subtitleColor = "#4b5563",
      btnText = "Browse Components",
      btn2Text = "View Templates",
      btnBg = "#2563eb",
   } = config;

   return (
      <section
         style={{
            padding: "80px 40px",
            textAlign: "center",
            background: bgColor,
            fontFamily: "Inter, sans-serif",
         }}
      >
         {badge && (
            <span
               style={{
                  display: "inline-block",
                  background: badgeBg,
                  color: badgeColor,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  padding: "5px 16px",
                  borderRadius: "999px",
                  marginBottom: "20px",
               }}
            >
               {badge}
            </span>
         )}

         <h1
            style={{
               fontSize: titleSize,
               fontWeight: 800,
               color: titleColor,
               letterSpacing: "-0.025em",
               lineHeight: 1.15,
               maxWidth: "700px",
               margin: "0 auto 20px",
            }}
         >
            {title}
         </h1>

         <p
            style={{
               fontSize: "1.125rem",
               color: subtitleColor,
               maxWidth: "560px",
               margin: "0 auto 36px",
               lineHeight: 1.6,
            }}
         >
            {subtitle}
         </p>

         <div
            style={{
               display: "flex",
               gap: "12px",
               justifyContent: "center",
               flexWrap: "wrap",
            }}
         >
            <button
               style={{
                  background: btnBg,
                  color: "#ffffff",
                  border: "none",
                  padding: "14px 32px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
               }}
            >
               {btnText}
            </button>
            <button
               style={{
                  background: "transparent",
                  color: btnBg,
                  border: `2px solid ${btnBg}`,
                  padding: "14px 32px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
               }}
            >
               {btn2Text}
            </button>
         </div>
      </section>
   );
};

export default HeroV1;
