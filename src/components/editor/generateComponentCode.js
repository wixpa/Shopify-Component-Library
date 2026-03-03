/**
 * generateComponentCode
 *
 * Generates production-ready HTML + CSS + JS for a component variant
 * with all user customizations baked into CSS custom properties.
 *
 * @param {object} variantData  - full variant object from registry
 * @param {object} config       - current user config (customized values)
 * @returns {string}            - complete Shopify-ready Liquid/HTML snippet
 */

// ── Per-variant HTML templates ─────────────────────────────────────────────

const htmlTemplates = {
   // ── Headers ─────────────────────────────────────────────────────────────
   "header-v1": (c) => `
<nav class="sb-header-v1">
  <a href="/" class="sb-logo">${c.logoText || "Shopify Bazzar"}</a>
  <ul class="sb-nav-links">
    ${(c.navLinks || ["Home", "Products", "Collections", "About"])
       .map((l) => `<li><a href="#">${l}</a></li>`)
       .join("\n    ")}
  </ul>
  <a href="#" class="sb-cta-btn">${c.btnText || "Get Started"}</a>
</nav>`,

   "header-v2": (c) => `
<nav class="sb-header-v2">
  <a href="/" class="sb-logo">${c.logoText || "Shopify Bazzar"}</a>
  <ul class="sb-nav-links">
    ${(c.navLinks || ["Home", "Products", "Collections", "About"])
       .map((l) => `<li><a href="#">${l}</a></li>`)
       .join("\n    ")}
  </ul>
  <div class="sb-header-actions">
    <a href="#" class="sb-signin-btn">Sign In</a>
    <a href="#" class="sb-cta-btn">${c.btnText || "Shop Now"}</a>
  </div>
</nav>`,

   "header-v3": (c) => `
<nav class="sb-header-v3">
  <a href="/" class="sb-logo">${c.logoText || "Shopify Bazzar"}</a>
  <ul class="sb-nav-links">
    ${(c.navLinks || ["Home", "Products", "Collections", "Blog", "About"])
       .map((l) => `<li><a href="#">${l}</a></li>`)
       .join("\n    ")}
  </ul>
  <div class="sb-header-right">
    <div class="sb-search">&#128269; Search...</div>
    <a href="/cart" class="sb-cart-btn">${c.btnText || "Cart (0)"}</a>
  </div>
</nav>`,

   // ── Hero ────────────────────────────────────────────────────────────────
   "hero-v1": (c) => `
<section class="sb-hero-v1">
  ${c.badge ? `<span class="sb-badge">${c.badge}</span>` : ""}
  <h1 class="sb-hero-title">${c.title || "Build Your Shopify Store Faster"}</h1>
  <p class="sb-hero-subtitle">${c.subtitle || "Beautiful, ready-to-use components."}</p>
  <div class="sb-hero-ctas">
    <a href="#" class="sb-btn-primary">${c.btnText || "Browse Components"}</a>
    <a href="#" class="sb-btn-secondary">${c.btn2Text || "View Templates"}</a>
  </div>
</section>`,

   "hero-v2": (c) => `
<section class="sb-hero-v2">
  <div class="sb-glow"></div>
  ${c.badge ? `<span class="sb-badge">${c.badge}</span>` : ""}
  <h1 class="sb-hero-title">${c.title || "Your Store, Elevated"}</h1>
  <p class="sb-hero-subtitle">${c.subtitle || "Premium Shopify components that convert."}</p>
  <a href="#" class="sb-btn-primary">${c.btnText || "Start Building"}</a>
</section>`,

   "hero-v3": (c) => `
<section class="sb-hero-v3">
  ${c.badge ? `<span class="sb-badge">${c.badge}</span>` : ""}
  <h1 class="sb-hero-title">${c.title || "Grow Your Shopify Revenue"}</h1>
  <p class="sb-hero-subtitle">${c.subtitle || "High-converting sections built for modern Shopify stores."}</p>
  <a href="#" class="sb-btn-primary">${c.btnText || "Get Free Components"}</a>
  <div class="sb-stats">
    ${(
       c.statsData || [
          { value: "50+", label: "Components" },
          { value: "10K+", label: "Developers" },
          { value: "100%", label: "Free" },
       ]
    )
       .map(
          (s) =>
             `<div class="sb-stat"><span class="sb-stat-value">${s.value}</span><span class="sb-stat-label">${s.label}</span></div>`,
       )
       .join("\n    ")}
  </div>
</section>`,

   // ── Product Cards ───────────────────────────────────────────────────────
   "product-cards-v1": (c) => `
<section class="sb-products-v1">
  <h2 class="sb-section-title">${c.sectionTitle || "Featured Products"}</h2>
  <div class="sb-products-slider">
    <!-- Repeat for each product -->
    <div class="sb-product-card">
      <div class="sb-product-img-wrap">
        <img src="{{ product.featured_image | img_url: '400x' }}" alt="{{ product.title }}" />
        <span class="sb-product-badge">Sale</span>
      </div>
      <div class="sb-product-body">
        <h3 class="sb-product-name">{{ product.title }}</h3>
        <div class="sb-product-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div class="sb-product-price">
          <span class="sb-price">{{ product.price | money }}</span>
        </div>
        <button class="sb-add-to-cart">${c.btnText || "Add to Cart"}</button>
      </div>
    </div>
  </div>
</section>`,

   "product-cards-v2": (c) => `
<section class="sb-products-v2">
  <div class="sb-products-header">
    <h2 class="sb-section-title">${c.sectionTitle || "New Arrivals"}</h2>
    <a href="/collections/all" class="sb-view-all">View all &rarr;</a>
  </div>
  <div class="sb-products-slider">
    <!-- Repeat for each product -->
    <div class="sb-product-card">
      <div class="sb-product-img-wrap">
        <img src="{{ product.featured_image | img_url: '400x' }}" alt="{{ product.title }}" />
        <span class="sb-product-tag">New</span>
        <button class="sb-quick-add">${c.btnText || "Quick Add"}</button>
      </div>
      <div class="sb-product-body">
        <h3 class="sb-product-name">{{ product.title }}</h3>
        <span class="sb-price">{{ product.price | money }}</span>
      </div>
    </div>
  </div>
</section>`,

   "product-cards-v3": (c) => `
<section class="sb-products-v3">
  <div class="sb-products-header-centered">
    <span class="sb-accent-badge">&#10024; Bestsellers</span>
    <h2 class="sb-section-title">${c.sectionTitle || "Skincare Essentials"}</h2>
  </div>
  <div class="sb-products-slider">
    <!-- Repeat for each product -->
    <div class="sb-product-card">
      <div class="sb-product-img-wrap">
        <img src="{{ product.featured_image | img_url: '400x' }}" alt="{{ product.title }}" />
        <span class="sb-product-badge">Best Seller</span>
      </div>
      <div class="sb-product-body">
        <h3 class="sb-product-name">{{ product.title }}</h3>
        <span class="sb-price">{{ product.price | money }}</span>
        <button class="sb-add-to-cart">${c.btnText || "Add to Bag"}</button>
      </div>
    </div>
  </div>
</section>`,
};

// ── Per-variant CSS templates ──────────────────────────────────────────────

const cssTemplates = {
   // ── Headers ─────────────────────────────────────────────────────────────
   "header-v1": (c) => `
.sb-header-v1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 40px;
  background: ${c.bgColor || "#ffffff"};
  border-bottom: 1px solid ${c.borderColor || "#e5e7eb"};
  font-family: Inter, sans-serif;
}
.sb-header-v1 .sb-logo {
  font-weight: 800;
  font-size: ${c.logoSize || "1.25rem"};
  color: ${c.logoColor || "#0f172a"};
  text-decoration: none;
  letter-spacing: -0.025em;
}
.sb-header-v1 .sb-nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0; padding: 0;
}
.sb-header-v1 .sb-nav-links a {
  color: ${c.linkColor || "#374151"};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
}
.sb-header-v1 .sb-nav-links a:hover { opacity: 0.7; }
.sb-header-v1 .sb-cta-btn {
  background: ${c.btnBg || "#2563eb"};
  color: ${c.btnColor || "#ffffff"};
  padding: 9px 22px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  transition: opacity 0.2s;
}
.sb-header-v1 .sb-cta-btn:hover { opacity: 0.85; }`,

   "header-v2": (c) => `
.sb-header-v2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 40px;
  background: ${c.bgColor || "#0f172a"};
  font-family: Inter, sans-serif;
}
.sb-header-v2 .sb-logo {
  font-weight: 800;
  font-size: ${c.logoSize || "1.25rem"};
  color: ${c.logoColor || "#ffffff"};
  text-decoration: none;
}
.sb-header-v2 .sb-nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0; padding: 0;
}
.sb-header-v2 .sb-nav-links a {
  color: ${c.linkColor || "#94a3b8"};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
}
.sb-header-v2 .sb-header-actions { display: flex; gap: 10px; align-items: center; }
.sb-header-v2 .sb-signin-btn {
  background: transparent;
  color: ${c.linkColor || "#94a3b8"};
  border: 1px solid #334155;
  padding: 8px 18px;
  border-radius: 6px;
  font-size: 0.875rem;
  text-decoration: none;
}
.sb-header-v2 .sb-cta-btn {
  background: ${c.btnBg || "#2563eb"};
  color: ${c.btnColor || "#ffffff"};
  padding: 9px 22px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
}`,

   "header-v3": (c) => `
.sb-header-v3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 40px;
  background: ${c.bgColor || "#ffffff"};
  border-bottom: 1px solid ${c.borderColor || "#e5e7eb"};
  font-family: Inter, sans-serif;
  gap: 24px;
}
.sb-header-v3 .sb-logo {
  font-weight: 800;
  font-size: ${c.logoSize || "1.25rem"};
  color: ${c.logoColor || "#0f172a"};
  text-decoration: none;
  white-space: nowrap;
}
.sb-header-v3 .sb-nav-links {
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 28px;
  list-style: none;
  margin: 0; padding: 0;
}
.sb-header-v3 .sb-nav-links a {
  color: ${c.linkColor || "#374151"};
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
}
.sb-header-v3 .sb-header-right { display: flex; align-items: center; gap: 10px; }
.sb-header-v3 .sb-search {
  background: ${c.searchBg || "#f3f4f6"};
  border-radius: 20px;
  padding: 7px 14px;
  font-size: 0.8rem;
  color: #9ca3af;
  cursor: text;
}
.sb-header-v3 .sb-cart-btn {
  background: ${c.btnBg || "#0f172a"};
  color: ${c.btnColor || "#ffffff"};
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.8rem;
  text-decoration: none;
  white-space: nowrap;
}`,

   // ── Hero ────────────────────────────────────────────────────────────────
   "hero-v1": (c) => `
.sb-hero-v1 {
  padding: 80px 40px;
  text-align: center;
  background: ${c.bgColor || "#ffffff"};
  font-family: Inter, sans-serif;
}
.sb-hero-v1 .sb-badge {
  display: inline-block;
  background: ${c.badgeBg || "#dbeafe"};
  color: ${c.badgeColor || "#1d4ed8"};
  font-size: 0.8rem;
  font-weight: 600;
  padding: 5px 16px;
  border-radius: 999px;
  margin-bottom: 20px;
}
.sb-hero-v1 .sb-hero-title {
  font-size: ${c.titleSize || "3rem"};
  font-weight: 800;
  color: ${c.titleColor || "#0f172a"};
  letter-spacing: -0.025em;
  line-height: 1.15;
  max-width: 700px;
  margin: 0 auto 20px;
}
.sb-hero-v1 .sb-hero-subtitle {
  font-size: 1.125rem;
  color: ${c.subtitleColor || "#4b5563"};
  max-width: 560px;
  margin: 0 auto 36px;
  line-height: 1.6;
}
.sb-hero-v1 .sb-hero-ctas { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.sb-hero-v1 .sb-btn-primary {
  background: ${c.btnBg || "#2563eb"};
  color: #fff;
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: opacity 0.2s;
}
.sb-hero-v1 .sb-btn-secondary {
  background: transparent;
  color: ${c.btnBg || "#2563eb"};
  border: 2px solid ${c.btnBg || "#2563eb"};
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
}`,

   "hero-v2": (c) => `
.sb-hero-v2 {
  padding: 90px 40px;
  text-align: center;
  background: ${c.bgColor || "#0f172a"};
  font-family: Inter, sans-serif;
  position: relative;
  overflow: hidden;
}
.sb-hero-v2 .sb-glow {
  position: absolute;
  top: 20%; left: 50%;
  transform: translateX(-50%);
  width: 600px; height: 300px;
  background: radial-gradient(ellipse, rgba(79,70,229,0.2) 0%, transparent 70%);
  pointer-events: none;
}
.sb-hero-v2 .sb-badge {
  display: inline-block;
  background: ${c.badgeBg || "rgba(79,70,229,0.2)"};
  color: ${c.badgeColor || "#818cf8"};
  font-size: 0.8rem;
  font-weight: 600;
  padding: 5px 16px;
  border-radius: 999px;
  margin-bottom: 24px;
  border: 1px solid rgba(79,70,229,0.3);
  position: relative;
}
.sb-hero-v2 .sb-hero-title {
  font-size: ${c.titleSize || "3rem"};
  font-weight: 800;
  color: ${c.titleColor || "#ffffff"};
  letter-spacing: -0.025em;
  line-height: 1.15;
  max-width: 700px;
  margin: 0 auto 20px;
  position: relative;
}
.sb-hero-v2 .sb-hero-subtitle {
  font-size: 1.125rem;
  color: ${c.subtitleColor || "#94a3b8"};
  max-width: 520px;
  margin: 0 auto 40px;
  line-height: 1.6;
  position: relative;
}
.sb-hero-v2 .sb-btn-primary {
  background: ${c.btnBg || "#4f46e5"};
  color: ${c.btnColor || "#ffffff"};
  padding: 14px 36px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: 0 0 24px rgba(79,70,229,0.4);
  position: relative;
}`,

   "hero-v3": (c) => `
.sb-hero-v3 {
  padding: 80px 40px;
  text-align: center;
  background: ${c.bgColor || "#f0fdf4"};
  font-family: Inter, sans-serif;
}
.sb-hero-v3 .sb-badge {
  display: inline-block;
  background: ${c.badgeBg || "#dcfce7"};
  color: ${c.badgeColor || "#15803d"};
  font-size: 0.8rem;
  font-weight: 600;
  padding: 5px 16px;
  border-radius: 999px;
  margin-bottom: 20px;
}
.sb-hero-v3 .sb-hero-title {
  font-size: ${c.titleSize || "2.75rem"};
  font-weight: 800;
  color: ${c.titleColor || "#0f172a"};
  letter-spacing: -0.025em;
  line-height: 1.2;
  max-width: 640px;
  margin: 0 auto 20px;
}
.sb-hero-v3 .sb-hero-subtitle {
  font-size: 1.05rem;
  color: ${c.subtitleColor || "#4b5563"};
  max-width: 500px;
  margin: 0 auto 36px;
  line-height: 1.6;
}
.sb-hero-v3 .sb-btn-primary {
  display: inline-block;
  background: ${c.btnBg || "#16a34a"};
  color: ${c.btnColor || "#ffffff"};
  padding: 14px 36px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  margin-bottom: 48px;
}
.sb-hero-v3 .sb-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
  border-top: 1px solid #dcfce7;
  padding-top: 32px;
}
.sb-hero-v3 .sb-stat { text-align: center; }
.sb-hero-v3 .sb-stat-value { display: block; font-size: 1.75rem; font-weight: 800; color: ${c.titleColor || "#0f172a"}; }
.sb-hero-v3 .sb-stat-label { display: block; font-size: 0.875rem; color: ${c.subtitleColor || "#4b5563"}; margin-top: 4px; }`,

   // ── Product Cards ───────────────────────────────────────────────────────
   "product-cards-v1": (c) => `
.sb-products-v1 {
  padding: 60px 40px;
  background: ${c.bgColor || "#ffffff"};
  font-family: Inter, sans-serif;
}
.sb-products-v1 .sb-section-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: ${c.titleTextColor || "#0f172a"};
  margin-bottom: 32px;
  letter-spacing: -0.025em;
}
.sb-products-v1 .sb-products-slider {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 12px;
  scrollbar-width: none;
}
.sb-products-v1 .sb-products-slider::-webkit-scrollbar { display: none; }
.sb-products-v1 .sb-product-card {
  min-width: 220px;
  background: ${c.cardBg || "#ffffff"};
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
  transition: transform 0.2s, box-shadow 0.2s;
}
.sb-products-v1 .sb-product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}
.sb-products-v1 .sb-product-img-wrap { position: relative; }
.sb-products-v1 .sb-product-img-wrap img { width: 100%; height: 200px; object-fit: cover; display: block; }
.sb-products-v1 .sb-product-badge {
  position: absolute; top: 10px; left: 10px;
  background: ${c.badgeBg || "#ef4444"};
  color: ${c.badgeColor || "#ffffff"};
  font-size: 0.7rem; font-weight: 700;
  padding: 3px 10px; border-radius: 999px;
}
.sb-products-v1 .sb-product-body { padding: 16px; }
.sb-products-v1 .sb-product-name { font-size: 0.95rem; font-weight: 600; color: ${c.titleColor || "#0f172a"}; margin-bottom: 6px; }
.sb-products-v1 .sb-product-rating { color: #f59e0b; font-size: 0.8rem; margin-bottom: 8px; }
.sb-products-v1 .sb-price { font-weight: 700; color: ${c.priceColor || "#0f172a"}; font-size: 1rem; }
.sb-products-v1 .sb-add-to-cart {
  width: 100%; margin-top: 14px;
  background: ${c.btnBg || "#0f172a"};
  color: ${c.btnColor || "#ffffff"};
  border: none; padding: 9px;
  border-radius: 6px; font-weight: 600;
  font-size: 0.85rem; cursor: pointer;
}`,

   "product-cards-v2": (c) => `
.sb-products-v2 {
  padding: 60px 40px;
  background: ${c.bgColor || "#fafafa"};
  font-family: Inter, sans-serif;
}
.sb-products-v2 .sb-products-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 28px; }
.sb-products-v2 .sb-section-title { font-size: 1.75rem; font-weight: 800; color: ${c.titleTextColor || "#0f172a"}; letter-spacing: -0.025em; }
.sb-products-v2 .sb-view-all { font-size: 0.875rem; font-weight: 600; color: #2563eb; text-decoration: none; }
.sb-products-v2 .sb-products-slider { display: flex; gap: 20px; overflow-x: auto; padding-bottom: 12px; scrollbar-width: none; }
.sb-products-v2 .sb-products-slider::-webkit-scrollbar { display: none; }
.sb-products-v2 .sb-product-card { min-width: 200px; flex-shrink: 0; cursor: pointer; }
.sb-products-v2 .sb-product-img-wrap {
  position: relative;
  background: ${c.cardBg || "#ffffff"};
  border-radius: 8px; overflow: hidden; margin-bottom: 12px;
}
.sb-products-v2 .sb-product-img-wrap img { width: 100%; height: 220px; object-fit: cover; display: block; transition: transform 0.3s; }
.sb-products-v2 .sb-product-img-wrap:hover img { transform: scale(1.05); }
.sb-products-v2 .sb-product-tag {
  position: absolute; top: 10px; right: 10px;
  background: #111827; color: #fff;
  font-size: 0.65rem; font-weight: 700;
  padding: 3px 10px; border-radius: 999px;
  text-transform: uppercase; letter-spacing: 0.05em;
}
.sb-products-v2 .sb-quick-add {
  position: absolute; bottom: 10px; left: 10px; right: 10px;
  background: ${c.btnBg || "#ffffff"};
  color: ${c.btnColor || "#111827"};
  border: 1px solid ${c.btnBorder || "#111827"};
  padding: 8px; border-radius: 6px;
  font-weight: 600; font-size: 0.8rem; cursor: pointer;
  opacity: 0; transition: opacity 0.2s;
}
.sb-products-v2 .sb-product-img-wrap:hover .sb-quick-add { opacity: 1; }
.sb-products-v2 .sb-product-name { font-size: 0.9rem; font-weight: 600; color: ${c.titleColor || "#111827"}; margin-bottom: 4px; }
.sb-products-v2 .sb-price { font-size: 0.9rem; font-weight: 700; color: ${c.priceColor || "#111827"}; }`,

   "product-cards-v3": (c) => `
.sb-products-v3 {
  padding: 60px 40px;
  background: ${c.bgColor || "#fdf2f8"};
  font-family: Inter, sans-serif;
}
.sb-products-v3 .sb-products-header-centered { text-align: center; margin-bottom: 36px; }
.sb-products-v3 .sb-accent-badge {
  display: inline-block;
  background: #fce7f3; color: ${c.accentColor || "#be185d"};
  font-size: 0.75rem; font-weight: 600;
  padding: 4px 14px; border-radius: 999px; margin-bottom: 12px;
}
.sb-products-v3 .sb-section-title { font-size: 1.75rem; font-weight: 800; color: ${c.titleTextColor || "#0f172a"}; letter-spacing: -0.025em; }
.sb-products-v3 .sb-products-slider { display: flex; gap: 20px; overflow-x: auto; padding-bottom: 12px; scrollbar-width: none; }
.sb-products-v3 .sb-products-slider::-webkit-scrollbar { display: none; }
.sb-products-v3 .sb-product-card {
  min-width: 200px;
  background: ${c.cardBg || "#ffffff"};
  border: 1px solid #fce7f3; border-radius: 16px;
  overflow: hidden; flex-shrink: 0;
  transition: transform 0.2s, box-shadow 0.2s;
}
.sb-products-v3 .sb-product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(190,24,93,0.1);
}
.sb-products-v3 .sb-product-img-wrap { position: relative; }
.sb-products-v3 .sb-product-img-wrap img { width: 100%; height: 180px; object-fit: cover; display: block; }
.sb-products-v3 .sb-product-badge {
  position: absolute; top: 10px; left: 10px;
  background: ${c.accentColor || "#be185d"}; color: #fff;
  font-size: 0.65rem; font-weight: 700; padding: 3px 10px; border-radius: 999px;
}
.sb-products-v3 .sb-product-body { padding: 14px; }
.sb-products-v3 .sb-product-name { font-size: 0.875rem; font-weight: 600; color: ${c.titleColor || "#111827"}; margin-bottom: 6px; }
.sb-products-v3 .sb-price { font-weight: 700; color: ${c.priceColor || "#be185d"}; font-size: 0.95rem; }
.sb-products-v3 .sb-add-to-cart {
  width: 100%; margin-top: 12px;
  background: ${c.btnBg || "#be185d"}; color: ${c.btnColor || "#ffffff"};
  border: none; padding: 8px; border-radius: 8px;
  font-weight: 600; font-size: 0.8rem; cursor: pointer;
}`,
};

// ── JS templates ────────────────────────────────────────────────────────────

const jsTemplates = {
   "header-v1": () => ``, // no JS needed
   "header-v2": () => ``,
   "header-v3": () => `
document.querySelector('.sb-search')?.addEventListener('click', () => {
  // Expand search or redirect to /search
  window.location.href = '/search';
});`,
   "hero-v1": () => ``,
   "hero-v2": () => ``,
   "hero-v3": () => ``,
   "product-cards-v1": () => `
document.querySelectorAll('.sb-add-to-cart').forEach(btn => {
  btn.addEventListener('click', async (e) => {
    const variantId = e.target.closest('[data-variant-id]')?.dataset.variantId;
    if (!variantId) return;
    await fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: variantId, quantity: 1 })
    });
    // Refresh cart drawer or redirect
    window.location.href = '/cart';
  });
});`,
   "product-cards-v2": () => `
document.querySelectorAll('.sb-quick-add').forEach(btn => {
  btn.addEventListener('click', async (e) => {
    const variantId = e.target.closest('[data-variant-id]')?.dataset.variantId;
    if (!variantId) return;
    await fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: variantId, quantity: 1 })
    });
    window.location.href = '/cart';
  });
});`,
   "product-cards-v3": () => `
document.querySelectorAll('.sb-add-to-cart').forEach(btn => {
  btn.addEventListener('click', async (e) => {
    const variantId = e.target.closest('[data-variant-id]')?.dataset.variantId;
    if (!variantId) return;
    await fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: variantId, quantity: 1 })
    });
    window.location.href = '/cart';
  });
});`,
};

// ── Main export ─────────────────────────────────────────────────────────────

const generateComponentCode = (variantId, config) => {
   const html =
      htmlTemplates[variantId]?.(config) ?? "<!-- Component not found -->";
   const css = cssTemplates[variantId]?.(config) ?? "";
   const js = jsTemplates[variantId]?.(config) ?? "";

   const jsBlock = js.trim() ? `\n<script>\n${js.trim()}\n</script>` : "";

   return `<!-- ============================================
  ${variantId} — Shopify Bazzar
  Generated with custom settings
  Copy this entire block into a Custom Liquid section
  in your Shopify Theme Editor
============================================ -->

<style>
${css.trim()}
</style>

${html.trim()}
${jsBlock}`.trim();
};

export default generateComponentCode;
