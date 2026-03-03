const HeroV3 = ({ config = {} }) => {
   const {
      bgColor = "#f0fdf4",
      title = "Grow Your Shopify Revenue",
      titleColor = "#0f172a",
      titleSize = "2.75rem",
      subtitle = "High-converting sections built for modern Shopify stores.",
      subtitleColor = "#4b5563",
      btnText = "Get Free Components",
      btnBg = "#16a34a",
      btnColor = "#ffffff",
      badge = "🌿 Eco-friendly designs",
      badgeBg = "#dcfce7",
      badgeColor = "#15803d",
      statsData = [
         { value: "50+", label: "Components" },
         { value: "10K+", label: "Developers" },
         { value: "100%", label: "Free" },
      ],
   } = config;

   return (
      <section
         style={{
            padding: "80px 40px",
            background: bgColor,
            fontFamily: "Inter, sans-serif",
            textAlign: "center",
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
               lineHeight: 1.2,
               maxWidth: "640px",
               margin: "0 auto 20px",
            }}
         >
            {title}
         </h1>

         <p
            style={{
               fontSize: "1.05rem",
               color: subtitleColor,
               maxWidth: "500px",
               margin: "0 auto 36px",
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
               padding: "14px 36px",
               borderRadius: "8px",
               fontWeight: 700,
               fontSize: "1rem",
               cursor: "pointer",
               fontFamily: "Inter, sans-serif",
               marginBottom: "48px",
            }}
         >
            {btnText}
         </button>

         {/* Stats Row */}
         <div
            style={{
               display: "flex",
               justifyContent: "center",
               gap: "48px",
               flexWrap: "wrap",
               borderTop: "1px solid #dcfce7",
               paddingTop: "32px",
            }}
         >
            {statsData.map((stat, i) => (
               <div key={i} style={{ textAlign: "center" }}>
                  <div
                     style={{
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        color: titleColor,
                        fontFamily: "Inter, sans-serif",
                     }}
                  >
                     {stat.value}
                  </div>
                  <div
                     style={{
                        fontSize: "0.875rem",
                        color: subtitleColor,
                        fontFamily: "Inter, sans-serif",
                        marginTop: "4px",
                     }}
                  >
                     {stat.label}
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default HeroV3;
