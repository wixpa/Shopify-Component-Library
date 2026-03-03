const HeroV2 = ({ config = {} }) => {
   const {
      bgColor = "#0f172a",
      title = "Your Store, Elevated",
      titleColor = "#ffffff",
      titleSize = "3rem",
      subtitle = "Premium Shopify components that convert visitors into customers.",
      subtitleColor = "#94a3b8",
      btnText = "Start Building",
      btnBg = "#4f46e5",
      btnColor = "#ffffff",
      badge = "🚀 Launch Ready",
      badgeBg = "rgba(79,70,229,0.2)",
      badgeColor = "#818cf8",
   } = config;

   return (
      <section
         style={{
            padding: "90px 40px",
            textAlign: "center",
            background: bgColor,
            fontFamily: "Inter, sans-serif",
            position: "relative",
            overflow: "hidden",
         }}
      >
         {/* Glow effect */}
         <div
            style={{
               position: "absolute",
               top: "20%",
               left: "50%",
               transform: "translateX(-50%)",
               width: "600px",
               height: "300px",
               background:
                  "radial-gradient(ellipse, rgba(79,70,229,0.2) 0%, transparent 70%)",
               pointerEvents: "none",
            }}
         />

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
                  marginBottom: "24px",
                  border: "1px solid rgba(79,70,229,0.3)",
                  position: "relative",
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
               position: "relative",
            }}
         >
            {title}
         </h1>

         <p
            style={{
               fontSize: "1.125rem",
               color: subtitleColor,
               maxWidth: "520px",
               margin: "0 auto 40px",
               lineHeight: 1.6,
               position: "relative",
            }}
         >
            {subtitle}
         </p>

         <div
            style={{
               display: "flex",
               gap: "12px",
               justifyContent: "center",
               position: "relative",
            }}
         >
            <button
               style={{
                  background: btnBg,
                  color: btnColor,
                  border: "none",
                  padding: "14px 36px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  boxShadow: "0 0 24px rgba(79,70,229,0.4)",
               }}
            >
               {btnText}
            </button>
         </div>
      </section>
   );
};

export default HeroV2;
