// Named export — used by generateComponentCode.js and hero.registry.js
export function getHeroV1Code(config = {}) {
  const bgColor = config.bgColor || "#ffffff";
  const badge = config.badge || "✨ New Collection";
  const badgeBg = config.badgeBg || "#dbeafe";
  const badgeColor = config.badgeColor || "#1d4ed8";
  const title = config.title || "Build Your Shopify Store Faster";
  const titleColor = config.titleColor || "#0f172a";
  const titleSize = config.titleSize || "3rem";
  const subtitle = config.subtitle || "Beautiful, ready-to-use components for your storefront.";
  const subtitleColor = config.subtitleColor || "#4b5563";
  const btnText = config.btnText || "Browse Components";
  const btn2Text = config.btn2Text || "View Templates";
  const btnBg = config.btnBg || "#2563eb";

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
}

// Default export — returns null because editor renders via getCode() → iframe
export default function HeroV1({ config }) {
  return null;
}
